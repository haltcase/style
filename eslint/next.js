"use strict";

const {
	javascriptFiles,
	levels: { off },
	nextJsPageFiles,
	nextJsApiRoutes
} = require("./constants");
const checkForPackage = require("./utils/require-package");

checkForPackage("next", "@next/eslint-plugin-next");

const babelOptions = {
	presets: (() => {
		try {
			require.resolve("next/babel");
			return ["next/babel"];
		} catch {
			return [];
		}
	})()
};

module.exports = {
	extends: ["plugin:@next/next/recommended"],
	overrides: [
		{
			files: javascriptFiles,
			parserOptions: { babelOptions }
		},
		{
			files: [...nextJsPageFiles, ...nextJsApiRoutes],
			rules: {
				"import/no-default-export": off
			}
		}
	]
};
