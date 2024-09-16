import eslintPluginTsdoc from "eslint-plugin-tsdoc";
import { config } from "typescript-eslint";

export const eslintTsdocConfig = config({
	name: "@haltcase/internal/TSDoc comments",
	plugins: {
		tsdoc: eslintPluginTsdoc
	},
	rules: {
		/**
		 * Require TSDoc comments conform to the TSDoc specification.
		 *
		 * 🚫 Not fixable - https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
		 */
		"tsdoc/syntax": "error"
	}
});
