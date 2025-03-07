/**
 * @import { Linter } from "eslint"
 */

/**
 * @type {Linter.RulesRecord}
 */
const disabledRules = {
	/**
	 * Enforce a module import order convention.
	 * This is disabled as it is covered by `eslint-plugin-simple-import-sort`.
	 *
	 * 🔧 Fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
	 */
	"import-x/order": "off"
};

/**
 * @type {Linter.RulesRecord}
 */
export const importRules = {
	...disabledRules,
	/**
	 * Disallow non-import statements appearing before import statements.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
	 */
	"import-x/first": "error",
	/**
	 * Require a newline after the last import-x/require.
	 *
	 * 🔧 Fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
	 */
	"import-x/newline-after-import": "warn",
	/**
	 * Disallow import of modules using absolute paths.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
	 */
	"import-x/no-absolute-path": "error",
	/**
	 * Disallow cyclical dependencies between modules.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
	 */
	"import-x/no-cycle": "error",
	/**
	 * Disallow default exports.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
	 */
	"import-x/no-default-export": "error",
	/**
	 * Combine separate imports of resolved paths.
	 *
	 * 🔧 Fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
	 */
	"import-x/no-duplicates": [
		"error",
		{
			considerQueryString: true
		}
	],
	/**
	 * Disallow the use of extraneous packages.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
	 */
	"import-x/no-extraneous-dependencies": ["error", { includeTypes: true }],
	/**
	 * Disallow mutable exports.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
	 */
	"import-x/no-mutable-exports": "error",
	/**
	 * Disallow importing packages through relative paths.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
	 */
	"import-x/no-relative-packages": "warn",
	/**
	 * Disallow a module from importing itself.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
	 */
	"import-x/no-self-import": "error",
	/**
	 * Ensures that there are no useless path segments.
	 *
	 * 🚫 Not fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
	 */
	"import-x/no-useless-path-segments": ["error"]
};
