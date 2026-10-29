import type { OxlintConfig } from "oxlint";

// Preserve exclusions when a consumer enables these rules in `extends`.
const inheritedRuleOverrides = {
	"capitalized-comments": "off",
	"init-declarations": "off",
	"no-inline-comments": "off",
	"no-magic-numbers": "off",
	// Disabled in favor of `unicorn/no-nested-ternary`
	"no-nested-ternary": "off",
	"sort-imports": "off",
	"sort-keys": "off",
	"sort-vars": "off",

	// While well-intentioned, this rule has too many false positives
	"promise/prefer-await-to-callbacks": "off",

	"unicorn/import-style": "off",
	"unicorn/no-null": "off"
} satisfies OxlintConfig["rules"];

export const stylisticRules = {
	...inheritedRuleOverrides,
	"arrow-body-style": "error",
	"func-name-matching": "error",
	"func-style": "error",
	"guard-for-in": "error",
	"id-denylist": "error",
	"id-match": "error",
	"jsdoc/no-blank-blocks": "error",
	"jsdoc/require-throws-description": "error",
	"jsdoc/require-yields-description": "error",
	"logical-assignment-operators": "error",
	"no-multi-str": "error",
	"no-useless-computed-key": "error",
	"object-shorthand": "error",
	"one-var": ["error", "never"],
	"operator-assignment": "error",
	"prefer-const": "error",
	"prefer-destructuring": "error",
	"prefer-exponentiation-operator": "error",
	"prefer-numeric-literals": "error",
	"prefer-object-has-own": "error",
	"prefer-rest-params": "error",
	"prefer-spread": "error",
	"prefer-template": "error",
	"promise/avoid-new": "error",
	"promise/no-nesting": "error",
	"promise/no-return-wrap": "error",
	"promise/param-names": "error",
	"promise/prefer-await-to-then": "error",
	"promise/prefer-catch": "error",
	"unicorn/catch-error-name": "error",
	"unicorn/consistent-date-clone": "error",
	"unicorn/consistent-existence-index-check": "error",
	"unicorn/consistent-template-literal-escape": "error",
	"unicorn/custom-error-definition": "error",
	"unicorn/empty-brace-spaces": "error",
	"unicorn/error-message": "error",
	"unicorn/explicit-timer-delay": "error",
	"unicorn/filename-case": "error",
	"unicorn/no-array-method-this-argument": "error",
	"unicorn/no-await-expression-member": "error",
	"unicorn/no-console-spaces": "error",
	"unicorn/no-unreadable-array-destructuring": "error",
	"unicorn/no-useless-collection-argument": "error",
	"unicorn/no-zero-fractions": "error",
	"unicorn/number-literal-case": "error",
	"unicorn/numeric-separators-style": "error",
	"unicorn/prefer-array-index-of": "error",
	"unicorn/prefer-bigint-literals": "error",
	"unicorn/prefer-class-fields": "error",
	"unicorn/prefer-classlist-toggle": "error",
	"unicorn/prefer-default-parameters": "error",
	"unicorn/prefer-dom-node-text-content": "error",
	"unicorn/prefer-export-from": "error",
	"unicorn/prefer-global-this": "error",
	"unicorn/prefer-includes": "error",
	"unicorn/prefer-keyboard-event-key": "error",
	"unicorn/prefer-logical-operator-over-ternary": "error",
	"unicorn/prefer-modern-dom-apis": "error",
	"unicorn/prefer-negative-index": "error",
	"unicorn/prefer-object-from-entries": "error",
	"unicorn/prefer-optional-catch-binding": "error",
	"unicorn/prefer-reflect-apply": "error",
	"unicorn/prefer-response-static-json": "error",
	"unicorn/prefer-spread": "error",
	"unicorn/prefer-string-raw": "error",
	"unicorn/prefer-string-trim-start-end": "error",
	"unicorn/prefer-structured-clone": "error",
	"unicorn/prefer-ternary": "error",
	"unicorn/relative-url-style": "error",
	"unicorn/require-array-join-separator": "error",
	"unicorn/require-module-attributes": "error",
	"unicorn/switch-case-braces": "error",
	"unicorn/switch-case-break-position": "error",
	"unicorn/text-encoding-identifier-case": "error",
	"unicorn/throw-new-error": "error",
	"vars-on-top": "error",
	/**
	 * Require function expressions to have a name.
	 */
	"func-names": ["error", "as-needed"],
	"id-length": [
		"error",
		{
			min: 2,
			// Allow single-character identifiers for properties, where we may
			// need to define things like `p` or `a` for HTML elements around React.
			properties: "never",
			exceptions: ["T", "_"]
		}
	],
	"max-depth": [
		"error",
		{
			max: 5
		}
	],
	"max-lines": [
		"error",
		{
			max: 3000
		}
	],
	"max-lines-per-function": [
		"error",
		{
			max: 1500,
			skipComments: true,
			skipBlankLines: true
		}
	],
	"max-params": [
		"error",
		{
			countThis: "never",
			max: 5
		}
	],
	"max-statements": [
		"error",
		{
			max: 80
		}
	],
	/**
	 * Require a capital letter for constructors.
	 */
	"new-cap": ["error", { capIsNew: false }],
	/**
	 * Disallow use of the Array constructor.
	 */
	"no-array-constructor": "error",
	/**
	 * Disallow use of bitwise operators.
	 */
	"no-bitwise": "error",
	"no-duplicate-imports": [
		"error",
		{
			allowSeparateTypeImports: true
		}
	],
	/**
	 * Disallow if as the only statement in an else block.
	 */
	"no-lonely-if": "error",
	/**
	 * Disallow use of chained assignment expressions.
	 */
	"no-multi-assign": ["error"],
	/**
	 * Disallow ternary operators when simpler alternatives exist.
	 */
	"no-unneeded-ternary": "error",
	/**
	 * Require using arrow functions for callbacks.
	 */
	"prefer-arrow-callback": [
		"error",
		{
			allowNamedFunctions: true
		}
	],
	/**
	 * Require use of an object spread over Object.assign.
	 */
	"prefer-object-spread": "error",

	"unicorn/max-nested-calls": [
		"error",
		{
			max: 5
		}
	],
	"unicorn/no-nested-ternary": "error"
} satisfies OxlintConfig["rules"];
