/**
 * @import { Linter } from "eslint"
 */

/**
 * Additional rules to enable on top of the preset config from
 * `@eslint-react/eslint-plugin`
 *
 * @type {Linter.RulesRecord}
 */
export const reactXRules = {
	/**
	 * Prevents using useless `fragment` components or `<>` syntax.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/no-useless-fragment
	 */
	"no-useless-fragment": "error",

	/**
	 * Enforces using shorthand syntax for boolean attributes.
	 *
	 * 🔧 Fixable - https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean
	 */
	"prefer-shorthand-boolean": "error",

	/**
	 * Enforces using shorthand syntax for fragments.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment
	 */
	"prefer-shorthand-fragment": "error",

	/**
	 * Warns function calls made inside `useState` calls.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization
	 */
	"hooks-extra/prefer-use-state-lazy-initialization": "error",

	/**
	 * Enforces naming conventions for components.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/naming-convention-component-name
	 */
	"naming-convention/component-name": "warn",

	/**
	 * Enforces naming convention for JSX files.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/naming-convention-filename
	 */
	"naming-convention/filename": "warn",

	/**
	 * Enforces consistent use of the JSX file extension.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/naming-convention-filename-extension
	 */
	"naming-convention/filename-extension": "warn",

	/**
	 * Enforces destructuring and symmetric naming of useState hook value and setter variables.
	 *
	 * 🚫 Not fixable - https://eslint-react.xyz/docs/rules/naming-convention-use-state
	 */
	"naming-convention/use-state": "warn"
};
