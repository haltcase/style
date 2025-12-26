import { defineConfig } from "eslint/config";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * @type {ReturnType<import("./base.js").HaltcaseStyleCreator>}
 */
export const eslintSimpleImportSortConfig = defineConfig({
	name: "@haltcase/internal/Import & export sorting",

	plugins: {
		"simple-import-sort": eslintPluginSimpleImportSort
	},
	rules: {
		/**
		 * Enforce export sort order.
		 *
		 * 🔧 Fixable - https://github.com/lydell/eslint-plugin-simple-import-sort#exports
		 */
		"simple-import-sort/exports": "error",
		/**
		 * Enforce import sort order.
		 *
		 * 🔧 Fixable - https://github.com/lydell/eslint-plugin-simple-import-sort#imports
		 */
		"simple-import-sort/imports": "error"
	}
});
