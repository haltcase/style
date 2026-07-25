import type { Options } from "semantic-release";

const isDryRun = process.env["DRY_RUN"] === "true";

export default {
	branches: [
		"main",
		{
			name: "canary",
			channel: "canary",
			prerelease: true
		}
	],
	plugins: [
		[
			"@semantic-release/commit-analyzer",
			{
				preset: "conventionalcommits"
			}
		],
		[
			"@semantic-release/release-notes-generator",
			{
				preset: "conventionalcommits"
			}
		],
		[
			"@semantic-release/exec",
			{
				// oxlint-disable-next-line no-template-curly-in-string
				prepareCmd: "pnpm version ${nextRelease.version} --no-git-tag-version",
				publishCmd: `pnpm publish --no-git-checks ${isDryRun ? "--dry-run" : ""}`
			}
		],
		"@semantic-release/github",
		[
			"@semantic-release/git",
			{
				// oxlint-disable-next-line no-template-curly-in-string
				message: "release: ${nextRelease.version}"
			}
		]
	]
} satisfies Options;
