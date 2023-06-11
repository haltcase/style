const baseRef = "main";
const headRef = "canary";
const workflowToTrigger = "release.yml";

module.exports = async ({ github, context }) => {
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

	if (pr.head.ref !== headRef || pr.base.ref !== baseRef) {
		await github.rest.issues.createComment({
			...scope,
			issue_number: context.issue.number,
			body: `Releases can only be triggered when merging \`${headRef}\` → \`${baseRef}\``
		});

		process.exit(1);
	}

	if (!pr.mergeable || !pr.merge_commit_sha) {
		await github.rest.issues.createComment({
			...scope,
			issue_number: context.issue.number,
			body: "This PR cannot be merged. Please fix any conflicts and try again."
		});

		process.exit(1);
	}

	await github.rest.actions.createWorkflowDispatch({
		owner: context.repo.owner,
		repo: context.repo.repo,
		workflow_id: workflowToTrigger,
		ref: headRef,
		inputs: {
			acknowledge: true
		}
	});
};
