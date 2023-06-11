"use strict";

const {
	configFiles,
	ecmaVersion,
	javascriptFiles,
	levels: { off },
	scriptFiles,
	commonJsOverrides
} = require("./constants");

// see https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * This is the base for both our browser and Node ESLint config files.
 */
module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:eslint-comments/recommended",
		"prettier",
		require.resolve("./rules/best-practice"),
		require.resolve("./rules/es2015"),
		require.resolve("./rules/import"),
		require.resolve("./rules/possible-errors"),
		require.resolve("./rules/simple-import-sort"),
		require.resolve("./rules/stylistic"),
		require.resolve("./rules/unicorn"),
		require.resolve("./rules/variables")
	],
	env: {
		[`es${ecmaVersion}`]: true
	},
	// Report unused `eslint-disable` comments.
	reportUnusedDisableDirectives: true,
	// Tell ESLint not to ignore dot-files, which are ignored by default.
	ignorePatterns: ["!.*.js"],
	// Global settings used by all overrides.
	settings: {
		// Use the Node resolver by default.
		"import/resolver": { node: {} }
	},
	// Global parser options.
	parserOptions: {
		ecmaVersion,
		sourceType: "module"
	},
	overrides: [
		{
			files: javascriptFiles,
			parser: "@babel/eslint-parser",
			parserOptions: {
				requireConfigFile: false
			}
		},

		// config files for third-party tools likely require default exports
		// (e.g., next.config.mjs)
		{
			files: configFiles,
			rules: {
				"import/no-default-export": off
			}
		},

		// development-only helper scripts & prisma database scripts
		{
			files: scriptFiles,
			rules: {
				"no-console": "off",
				"unicorn/no-process-exit": "off"
			}
		},

		{
			files: ["**/*.cjs"],
			...commonJsOverrides
		}
	]
};
