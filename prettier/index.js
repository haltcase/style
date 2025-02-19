/* eslint-disable import-x/no-default-export */

import { fileURLToPath } from "node:url";

/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://prettier.io/docs/en/configuration#editorconfig
 *
 * @satisfies {import("prettier").Options}
 */
const overridableDefaults = {
	endOfLine: "lf",
	printWidth: 80,
	tabWidth: 2,
	useTabs: true
};

/**
 * @param {string} specifier - The plugin's package name.
 */
const resolvePlugin = (specifier) =>
	fileURLToPath(import.meta.resolve(specifier));

/**
 * @satisfies {import("prettier").Options}
 */
export default {
	...overridableDefaults,
	singleQuote: false,
	trailingComma: "none",
	plugins: [
		resolvePlugin("prettier-plugin-packagejson"),
		resolvePlugin("prettier-plugin-tailwindcss")
	],
	tailwindAttributes: ["classNames"],
	tailwindFunctions: ["clsx", "cn", "cx", "twMerge"]
};
