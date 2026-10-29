import type { OxlintConfig } from "oxlint";

// Preserve exclusions when a consumer enables these rules in `extends`.
const inheritedRuleOverrides = {
	"require-unicode-regexp": "off"
} satisfies OxlintConfig["rules"];

export const bestPracticeRules = {
	...inheritedRuleOverrides,
	"accessor-pairs": "error",
	"jsdoc/require-param": "error",
	"jsdoc/require-param-description": "error",
	"jsdoc/require-param-name": "error",
	"jsdoc/require-param-type": "error",
	"jsdoc/require-returns": "error",
	"jsdoc/require-returns-description": "error",
	"jsdoc/require-returns-type": "error",
	"jsdoc/require-throws-type": "error",
	"jsdoc/require-yields-type": "error",
	"max-classes-per-file": "error",
	"max-nested-callbacks": "error",
	"no-case-declarations": "error",
	"no-fallthrough": "error",
	"no-inner-declarations": "error",
	"no-negated-condition": "error",
	"no-object-constructor": "error",
	"no-prototype-builtins": "error",
	"no-redeclare": "error",
	"no-throw-literal": "error",
	"no-warning-comments": "error",
	"oxc/branches-sharing-code": "error",
	"oxc/no-accumulating-spread": "error",
	"oxc/no-map-spread": "error",
	radix: "error",
	"require-await": "error",
	"symbol-description": "error",
	"unicorn/consistent-assert": "error",
	"unicorn/consistent-empty-array-spread": "error",
	"unicorn/escape-case": "error",
	"unicorn/explicit-length-check": "error",
	"unicorn/new-for-builtins": "error",
	"unicorn/no-array-callback-reference": "error",
	"unicorn/no-hex-escape": "error",
	"unicorn/no-immediate-mutation": "error",
	"unicorn/no-instanceof-array": "error",
	"unicorn/no-lonely-if": "error",
	"unicorn/no-negated-condition": "error",
	"unicorn/no-negation-in-equality-check": "error",
	"unicorn/no-new-buffer": "error",
	"unicorn/no-object-as-default-parameter": "error",
	"unicorn/no-static-only-class": "error",
	"unicorn/no-this-assignment": "error",
	"unicorn/no-typeof-undefined": "error",
	"unicorn/no-unnecessary-array-flat-depth": "error",
	"unicorn/no-unnecessary-array-splice-count": "error",
	"unicorn/no-unnecessary-slice-end": "error",
	"unicorn/no-unreadable-iife": "error",
	"unicorn/no-useless-promise-resolve-reject": "error",
	"unicorn/no-useless-switch-case": "error",
	"unicorn/no-useless-undefined": "error",
	"unicorn/prefer-array-find": "error",
	"unicorn/prefer-array-flat": "error",
	"unicorn/prefer-array-flat-map": "error",
	"unicorn/prefer-array-some": "error",
	"unicorn/prefer-at": "error",
	"unicorn/prefer-blob-reading-methods": "error",
	"unicorn/prefer-code-point": "error",
	"unicorn/prefer-date-now": "error",
	"unicorn/prefer-dom-node-append": "error",
	"unicorn/prefer-dom-node-dataset": "error",
	"unicorn/prefer-dom-node-remove": "error",
	"unicorn/prefer-event-target": "error",
	"unicorn/prefer-import-meta-properties": "error",
	"unicorn/prefer-math-min-max": "error",
	"unicorn/prefer-math-trunc": "error",
	"unicorn/prefer-native-coercion-functions": "error",
	"unicorn/prefer-number-coercion": "error",
	"unicorn/prefer-prototype-methods": "error",
	"unicorn/prefer-query-selector": "error",
	"unicorn/prefer-regexp-test": "error",
	"unicorn/prefer-set-has": "error",
	"unicorn/prefer-single-call": "error",
	"unicorn/prefer-string-replace-all": "error",
	"unicorn/prefer-string-slice": "error",
	"unicorn/prefer-top-level-await": "error",
	"unicorn/prefer-type-error": "error",
	"unicorn/require-number-to-fixed-digits-argument": "error",
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
