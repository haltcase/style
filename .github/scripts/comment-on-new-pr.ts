import type { context, getOctokit } from "@actions/github";
import type { PullRequestOpenedEvent } from "@octokit/webhooks-types";

interface ScriptProps {
	context: typeof context & { payload: PullRequestOpenedEvent };
	github: ReturnType<typeof getOctokit>;
}

export const commentOnNewPr = async ({ context, github }: ScriptProps): Promise<void> => {
	const login = context.payload.pull_request?.user.login;
	const mention = login ? `@${login}` : "there";
	const contributingUrl = `https://github.com/${context.repo.owner}/${context.repo.repo}/blob/-/CONTRIBUTING.md`;

	const isMaintainer =
		login === "dependabot[bot]" ||
		["OWNER", "MEMBER", "COLLABORATOR"].includes(context.payload.pull_request?.author_association);

	const greeting = isMaintainer
		? `Thanks for your contribution.`
		: `Hey ${mention}, thanks for contributing!`;

	await github.rest.issues.createComment({
		owner: context.repo.owner,
		repo: context.repo.repo,
		issue_number: context.issue.number,
		body: `
${greeting} If you haven't read the contributing \
guide that outlines the process, you can do so [here](${contributingUrl}).

Maintainers: once checks have passed, comment \`!release this\` and I'll begin \
merging this for you.
`.trim()
	});
};
