// @ts-check

/**
 * @import {Context} from "@actions/github/lib/context"
 * @typedef {ReturnType<import("@actions/github").getOctokit>} Octokit
 */

/**
 * @param {object} props
 * @param {Context} props.context
 * @param {Octokit} props.github
 * @returns
 */
export const commentOnNewPr = async ({ context, github }) => {
	const mention = context.payload.pull_request?.user.login || "there";
	const contributingUrl = `https://github.com/${context.repo.owner}/${context.repo.repo}/blob/-/CONTRIBUTING.md`;

	await github.rest.issues.createComment({
		owner: context.repo.owner,
		repo: context.repo.repo,
		issue_number: context.issue.number,
		body: `
Hey @${mention}, thanks for contributing! If you haven't read the contributing \
guide that outlines the process, you can do so [here](${contributingUrl}).

Maintainers: once checks have passed, comment \`!release this\` and I'll begin \
merging this for you.
`.trim()
	});
};
