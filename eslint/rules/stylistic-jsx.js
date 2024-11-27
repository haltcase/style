/**
 * @import { Linter } from "eslint"
 */

/**
 * @type {Linter.RulesRecord}
 */
export const stylisticJsxRules = {
	/**
	 * Disallow extra closing tags for components without children.
	 *
	 * Components without children can be self-closed to avoid unnecessary extra closing tag.
	 *
	 * 🔧 Fixable - https://eslint.style/rules/jsx/jsx-self-closing-comp
	 */
	"@stylistic/jsx/jsx-self-closing-comp": "error"
};
