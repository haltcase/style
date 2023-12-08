"use strict";

const { typescriptFiles } = require("./constants");
const checkForPackage = require("./utils/require-package");

checkForPackage("typescript", "typescript");

module.exports = {
	overrides: [
		{
			files: typescriptFiles,
			extends: [
				"plugin:@typescript-eslint/recommended-type-checked",
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/stylistic-type-checked",
				"plugin:import/typescript",
				"prettier",
				require.resolve("./rules/typescript"),
				require.resolve("./rules/typescript/extension"),
				require.resolve("./rules/typescript/import"),
				require.resolve("./rules/typescript/strict"),
				require.resolve("./rules/tsdoc")
			]
		}
	]
};
