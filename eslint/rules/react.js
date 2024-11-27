/**
 * @import { Linter } from "eslint"
 */

/**
 * We primarily use `@eslint-react/eslint-plugin`, but it's not quite complete
 * compared to the official plugin. We enable missing rules selectively here.
 *
 * @type {Linter.RulesRecord}
 */
export const reactRules = {
	/**
	 * Require consistent function type for function components.
	 *
	 * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
	 */
	"react/function-component-definition": "warn"
};
