import { defineConfig } from "eslint/config";
import eslintPluginTsdoc from "eslint-plugin-tsdoc";

/**
 * @type {ReturnType<import("./base.js").HaltcaseStyleCreator>}
 */
export const eslintTsdocConfig = defineConfig({
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
