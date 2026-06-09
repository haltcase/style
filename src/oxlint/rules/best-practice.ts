import type { OxlintConfig } from "oxlint";

const disabledRules = {
	"require-unicode-regexp": "off"
} satisfies OxlintConfig["rules"];

export const bestPracticeRules = {
	// ...commentsRules,
	...disabledRules,

	/**
	 * Require return statements in array methods callbacks.
	 */
	"array-callback-return": ["error", { allowImplicit: true }],
	/**
	 * Treat `var` statements as if they were block scoped.
	 */
	"block-scoped-var": "error",
	/**
	 * Require curly braces for multiline blocks.
	 */
	curly: ["error", "multi-line"],
	/**
	 * Require default clauses in switch statements to be last (if used).
	 */
	"default-case-last": "error",
	/**
	 * Require default parameters to be last.
	 */
	"default-param-last": "error",
	/**
	 * Require triple equals (`===` and `!==`).
	 */
	eqeqeq: ["error", "always", { null: "ignore" }],
	/**
	 * Require grouped accessor pairs in object literals and classes.
	 */
	"grouped-accessor-pairs": "error",
	/**
	 * Disallow use of `alert()`.
	 */
	"no-alert": "error",
	/**
	 * Disallow use of `caller`/`callee`.
	 */
	"no-caller": "error",
	/**
	 * Disallow returning value in constructor.
	 */
	"no-constructor-return": "error",
	/**
	 * Disallow using an `else` if the `if` block contains a return.
	 */
	"no-else-return": "error",
	/**
	 * Disallow `eval()`.
	 */
	"no-eval": "error",
	/**
	 * Disallow extending native objects.
	 */
	"no-extend-native": "error",
	/**
	 * Disallow unnecessary function binding.
	 */
	"no-extra-bind": "error",
	/**
	 * Disallow unnecessary labels.
	 */
	"no-extra-label": "error",
	/**
	 * Require converting types explicitly, e.g., `Boolean(foo)` instead of `!!foo`.
	 */
	"no-implicit-coercion": "error",
	/**
	 * Disallow use of `eval()`-like methods.
	 *
	 * https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval
	 */
	"no-implied-eval": "error",
	/**
	 * Disallow usage of `__iterator__` property.
	 */
	"no-iterator": "error",
	/**
	 * Disallow use of labels.
	 */
	"no-labels": "error",
	/**
	 * Disallow unnecessary nested blocks.
	 */
	"no-lone-blocks": "error",
	/**
	 * Disallow creation of functions within loops.
	 */
	"no-loop-func": "error",
	/**
	 * Disallow `new` for side effects.
	 */
	"no-new": "error",
	/**
	 * Disallow function constructors.
	 */
	"no-new-func": "error",
	/**
	 * Disallow primitive wrapper instances, such as `new String('foo')`.
	 */
	"no-new-wrappers": "error",
	/**
	 * Disallow reassignment of function parameters.
	 */
	"no-param-reassign": "error",
	/**
	 * Disallow usage of the deprecated `__proto__` property.
	 */
	"no-proto": "error",
	/**
	 * Disallow assignment in `return` statement.
	 */
	"no-return-assign": "error",
	/**
	 * Disallow use of `javascript:` urls.
	 */
	"no-script-url": "error",
	/**
	 * Disallow comparisons where both sides are exactly the same.
	 */
	"no-self-compare": "error",
	/**
	 * Disallow use of comma operator.
	 */
	"no-sequences": "error",
	/**
	 * Disallow variable declarations from shadowing variables declared in the
	 * outer scope.
	 */
	"no-shadow": "error",
	/**
	 * Disallow unnecessary `.call()` and `.apply()`.
	 */
	"no-useless-call": "error",
	/**
	 * Disallow unnecessary concatenation of strings.
	 */
	"no-useless-concat": "error",
	/**
	 * Disallow unnecessary constructors.
	 */
	"no-useless-constructor": "error",
	/**
	 * Disallow redundant return statements.
	 */
	"no-useless-return": "error",
	"node/no-sync": [
		"error",
		{
			ignores: ["existsSync"]
		}
	],
	/**
	 * Require using named capture groups in regular expressions.
	 */
	"prefer-named-capture-group": "error",
	/**
	 * Require using Error objects as Promise rejection reasons.
	 */
	"prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
	/**
	 * Disallow use of the RegExp constructor in favor of regular expression
	 * literals.
	 */
	"prefer-regex-literals": "error",
	/**
	 * Disallow the `"use strict"` directive (we assume ESM by default).
	 * NOT IMPLEMENTED YET - https://github.com/oxc-project/oxc/issues/479
	 */
	// strict: ["error", "never"],
	/**
	 * Disallow "Yoda conditions".
	 */
	yoda: "error"
} satisfies OxlintConfig["rules"];
