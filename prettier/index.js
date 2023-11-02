"use strict";

/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://prettier.io/docs/en/configuration#editorconfig
 */
const overridableDefaults = {
	endOfLine: "lf",
	printWidth: 80,
	tabWidth: 2,
	useTabs: true
};

module.exports = {
	...overridableDefaults,
	singleQuote: false,
	trailingComma: "none",
	plugins: ["prettier-plugin-astro", "prettier-plugin-packagejson"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	]
};
