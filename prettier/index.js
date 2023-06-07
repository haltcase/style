/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
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
	plugins: ["prettier-plugin-packagejson"]
};
