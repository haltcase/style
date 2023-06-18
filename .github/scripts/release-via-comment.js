"use strict";

const releaseBranch = "main";
const prereleaseBranch = "canary";

let execLogs = "";

const execOptions = {
	listeners: {
		stdout: (data) => {
			execLogs += data.toString();
		},
		stderr: (data) => {
			execLogs += data.toString();
		}
	}
};

const fastForward = async (execGit, { pr }) => {
	const {
		USER_NAME = "github-actions[bot]",
		USER_EMAIL = "github-actions[bot]@users.noreply.github.com"
	} = process.env;

	const isDownstream = pr.base.repo.clone_url !== pr.head.repo.clone_url;

	await execGit(["config", "--local", "user.name", USER_NAME]);
	await execGit(["config", "--local", "user.email", USER_EMAIL]);
	await execGit(["fetch", "--all"]);
	await execGit(["checkout", pr.base.ref]);

	if (isDownstream) {
		console.info(
			`Pulling & merging changes from downstream fork ${pr.head.repo.clone_url}#${pr.head.label}`
		);

		await execGit(["pull", "--ff-only", pr.head.repo.clone_url, pr.head.ref]);
	} else {
		await execGit(["merge", "--ff-only", pr.head.ref]);
	}

	await execGit(["push", "origin", `${pr.base.ref}`]);
};

const okConclusions = new Set(["success", "neutral"]);

const verifyCheckSuccess = async ({ github, pr }) => {
	const scope = {
		owner: pr.base.repo.owner.login,
		repo: pr.base.repo.name
	};

	const {
		data: { check_suites: checkSuites }
	} = await github.rest.checks.listSuitesForRef({ ...scope, ref: pr.head.sha });

	// if `latest_check_runs_count == 0`, the suite does not apply

	const pending = checkSuites.filter(
		({ latest_check_runs_count: count, status }) =>
			count > 0 && status !== "completed"
	);

	if (pending.length > 0) {
		return {
			isOk: false,
			message: `Some workflows for ${
				pr.head.label
			} are still in progress: ${JSON.stringify(pending)}`
		};
	}

	const blockers = checkSuites.filter(
		({ latest_check_runs_count: count, conclusion }) =>
			count > 0 && !okConclusions.has(conclusion)
	);

	if (blockers.length > 0) {
		return {
			isOk: false,
			message: `Some checks for ${pr.head.label} have failed: ${JSON.stringify(
				blockers
			)}`
		};
	}

	return {
		isOk: true
	};
};

const getIsMergeAllowed = async ({ pr }) => {
	if (pr.base.ref === releaseBranch) {
		// merging into `origin/main` is only allowed from `origin/canary`
		return (
			pr.head.clone_url === pr.base.clone_url &&
			pr.head.ref === prereleaseBranch
		);
	}

	if (pr.base.ref === prereleaseBranch) {
		// merging into `origin/canary` is allowed from pretty much anywhere,
		// except from `origin/main`
		return pr.head.ref !== releaseBranch;
	}

	return false;
};

const createAddComment = (github, scope, pullNumber) => (body) =>
	github.rest.issues.createComment({
		...scope,
		issue_number: pullNumber,
		body: `<!-- ffrelease -->\n${body.trim()}`
	});

module.exports = async ({ context, core, exec, github }) => {
	console.log(
		`Merging commits for release from ${context.repo.owner}/${context.repo.repo}#${context.issue.number}`
	);

	const scope = {
		owner: context.repo.owner,
		repo: context.repo.repo
	};

	const { data: pr } = await github.rest.pulls.get({
		...scope,
		pull_number: context.issue.number
	});

	console.log(`Found associated pull request #${pr.number} ${pr.title}`);

	const addComment = createAddComment(github, scope, pr.number);

	if (pr.state !== "open" || pr.draft) {
		await addComment(`
❌ This pull request cannot be merged while it is closed or marked as a draft.
`);

		core.setFailed("Pull request is not in a merge-ready state.");
		return;
	}

	const isMergeAllowed = await getIsMergeAllowed({ pr });

	if (!isMergeAllowed) {
		await addComment(`
❌ A release cannot be triggered from \`${pr.head.label}\` → \`${pr.base.label}\`. You may only only trigger a release when:

* merging \`${prereleaseBranch}\` → \`${releaseBranch}\`
* merging a branch (e.g., \`feat/add-rule\`) → \`${prereleaseBranch}\`
* merging from a branch in a downstream fork → \`${prereleaseBranch}\`
`);

		core.setFailed(
			`Pull request base/head combination is invalid, got base '${pr.base.label}' and head '${pr.head.label}'`
		);

		return;
	}

	if (!pr.mergeable || !pr.merge_commit_sha) {
		await addComment(`
❌ This pull request cannot be merged. Please fix any conflicts, check logs, and try again.
`);

		core.setFailed("Pull request is not mergeable.");
		return;
	}

	const { isOk, message } = await verifyCheckSuccess({ github, pr });

	if (!isOk) {
		await addComment(`
❌ This pull request cannot be merged while checks are pending or in a failed state.

<details>
<summary>expand for details</summary>

\`\`\`
${message}
\`\`\`
</details>
`);

		core.setFailed(message);
		return;
	}

	try {
		const execGit = (args) => exec.exec("git", args, execOptions);

		await fastForward(execGit, {
			pr
		});
	} catch (error) {
		console.error(error);
		core.setFailed(execLogs);
	}
};
