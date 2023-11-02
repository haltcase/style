"use strict";

const {
	levels: { error },
	astroFiles
} = require("./constants");
const checkForPackage = require("./utils/require-package");

checkForPackage("astro", "eslint-plugin-astro");

module.exports = {
	extends: ["plugin:astro/recommended"],
	overrides: [
		{
			files: astroFiles,
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"]
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error"
			}
		},
		{
			files: ["./src/env.d.ts"],
			rules: {
				"unicorn/prevent-abbreviations": [
					error,
					{
						allowList: {
							env: true
						}
					}
				]
			}
		}
	]
};
