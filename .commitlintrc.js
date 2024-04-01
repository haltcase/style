"use strict";

module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				// Change that affects the build system or dependencies
				"build",
				// Change to project metadata or tooling
				"chore",
				// Change to CI workflows
				"ci",
				// Change that only affects documentation
				"docs",
				// New feature
				"feat",
				// Bug fix
				"fix",
				// Code change that improves performance
				"perf",
				// Code change that neither fixes a bug nor adds a feature
				"refactor",
				// Commit that reverts a previous commit
				"revert",
				// Change that does not affect the meaning of the code
				"style",
				// Addition of missing tests or corrections for existing tests
				"test",
				// For automated releases only
				"release"
			]
		],
		"scope-enum": [
			2,
			"always",
			[
				// Dependency related changes
				"deps",
				// ESLint related changes
				"eslint",
				// Prettier related changes
				"prettier",
				// TypeScript related changes
				"typescript",
				// Stylelint related changes
				"stylelint"
			]
		],
		"scope-empty": [1, "never"]
	}
};
