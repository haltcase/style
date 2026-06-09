import type { Options } from "semantic-release";

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
		"@semantic-release/npm",
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
