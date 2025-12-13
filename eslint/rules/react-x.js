/**
 * @import { Linter } from "eslint"
 */

/**
 * Rules we've decided to disable from the preset config.
 *
 * @type {Linter.RulesRecord}
 */
const disabledRules = {
	/**
	 * Enforces that function components props are read-only.
	 *
	 * We have other checks that already disallow changing function parameters.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/prefer-read-only-props
	 */
	"@eslint-react/prefer-read-only-props": "off"
};

/**
 * Additional rules to enable on top of the preset config from
 * `@eslint-react/eslint-plugin`
 *
 * @type {Linter.RulesRecord}
 */
export const reactXRules = {
	...disabledRules,

	/**
	 * Prevents using useless `fragment` components or `<>` syntax.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/no-useless-fragment
	 */
	"@eslint-react/no-useless-fragment": "error",

	/**
	 * Enforces using shorthand syntax for boolean attributes.
	 *
	 * 🔧 Fixable - https://eslint-react.xyz/docs/rules/jsx-shorthand-boolean
	 */
	"@eslint-react/jsx-shorthand-boolean": "error",

	/**
	 * Enforces using shorthand syntax for fragments.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/jsx-shorthand-fragment
	 */
	"@eslint-react/jsx-shorthand-fragment": "error",

	/**
	 * Enforces function calls made inside `useState` to be wrapped in an initializer function.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization
	 */
	"@eslint-react/prefer-use-state-lazy-initialization": "error",

	/**
	 * Enforces naming conventions for components.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/naming-convention-component-name
	 */
	"@eslint-react/naming-convention/component-name": "warn",

	/**
	 * Enforces consistent use of the JSX file extension.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/naming-convention-filename-extension
	 */
	"@eslint-react/naming-convention/filename-extension": "warn",

	/**
	 * Enforces destructuring and symmetric naming of `useState` hook value and setter.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/naming-convention-use-state
	 */
	"@eslint-react/naming-convention/use-state": "warn"
};
