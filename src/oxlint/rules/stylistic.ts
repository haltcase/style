import type { OxlintConfig } from "oxlint";

const disabledRules = {
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
	...disabledRules,

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
