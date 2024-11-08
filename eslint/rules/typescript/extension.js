/**
 * @import { Linter } from "eslint"
 */

import { variablesRules } from "../variables.js";

// These share identical configuration options, so we want to keep them in sync.
// eslint-disable-next-line unicorn/prevent-abbreviations
const noUnusedVarsOptions = variablesRules["no-unused-vars"];

/**
 * @type {Linter.RulesRecord}
 */
export const typescriptExtensionRules = {
	/**
	 * Require default parameters to be last.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/default-param-last/
	 */
	"@typescript-eslint/default-param-last": "error",
	/**
	 * Disallow accidentally using the "empty object" type (`{}`).
	 *
	 * 🔧 Partially fixable - https://typescript-eslint.io/rules/no-empty-object-type/
	 */
	"@typescript-eslint/no-empty-object-type": [
		"error",
		{
			// allow "single-extends" interfaces as they are often useful for
			// documentation purposes and future extensibility
			allowInterfaces: "with-single-extends",
			// allow React-like props types
			allowWithName: "Props$"
		}
	],
	/**
	 * Disallow creation of functions within loops.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-loop-func/
	 */
	"@typescript-eslint/no-loop-func": "error",
	/**
	 * Disallow variable declarations from shadowing variables declared in the
	 * outer scope.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-shadow/
	 */
	"@typescript-eslint/no-shadow": "error",
	/**
	 * Disallow unused variables.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-unused-vars/
	 */
	"@typescript-eslint/no-unused-vars": noUnusedVarsOptions,
	/**
	 * Disallow unnecessary constructors.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-useless-constructor/
	 */
	"@typescript-eslint/no-useless-constructor": "error",
	/**
	 * Enforce template literal expressions to be of string type.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/restrict-template-expressions/
	 */
	"@typescript-eslint/restrict-template-expressions": [
		"error",
		{
			allow: [{ from: "lib", name: ["Error", "URL", "URLSearchParams"] }],
			allowBoolean: true,
			allowNumber: true
		}
	]
};
