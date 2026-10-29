import type { OxlintConfig } from "oxlint";

const disabledRules = {
	// Unnecessary or less useful when using TypeScript
	"jsdoc/require-param": "off",
	"jsdoc/require-param-type": "off",
	"jsdoc/require-property": "off",
	"jsdoc/require-returns": "off",
	"jsdoc/require-returns-type": "off",

	// `typescript/require-await` is more reliable since it can use type info
	"require-await": "off",
	// ... and yet, we still disable that one because we run into too many
	// instances where the target type requires a Promise return despite it not
	// truly being necessary
	"typescript/require-await": "off",

	// Disabled in favor of TypeScript's `noImplicitReturns`
	"typescript/consistent-return": "off",
	"typescript/no-dynamic-delete": "off",
	// Allow type assertions for two reasons:
	// 1. When we use them, it's often because we control the thing we're casting
	//    and it's more pragmatic to allow them than require a disable comment.
	//    They also stand out so they're less likely to be overlooked.
	// 2. Vite+ seems to currently ignore disable comments (for this rule in
	//    particular?) in the CLI, which makes this rule extremely frustrating.
	"typescript/no-unsafe-type-assertion": "off",
	"typescript/prefer-readonly-parameter-types": "off",
	"typescript/promise-function-async": "off",
	"typescript/strict-boolean-expressions": "off",

	// Disabled primarily for event handlers, where Promise-returning functions
	// trigger this rule even though async event handlers are perfectly fine.
	"typescript/strict-void-return": "off"
} satisfies OxlintConfig["rules"];

export const typescriptBaseRules = {
	"typescript/adjacent-overload-signatures": "error",
	"typescript/array-type": "error",
	"typescript/await-thenable": "error",
	"typescript/ban-ts-comment": "error",
	"typescript/ban-tslint-comment": "error",
	"typescript/ban-types": "error",
	"typescript/class-literal-property-style": "error",
	"typescript/consistent-generic-constructors": "error",
	"typescript/consistent-indexed-object-style": "error",
	"typescript/consistent-type-assertions": "error",
	"typescript/consistent-type-definitions": "error",
	"typescript/dot-notation": "error",
	"typescript/explicit-member-accessibility": "error",
	"typescript/explicit-module-boundary-types": "error",
	"typescript/no-array-delete": "error",
	"typescript/no-base-to-string": "error",
	"typescript/no-confusing-non-null-assertion": "error",
	"typescript/no-deprecated": "error",
	"typescript/no-duplicate-enum-values": "error",
	"typescript/no-duplicate-type-constituents": "error",
	"typescript/no-explicit-any": "error",
	"typescript/no-extra-non-null-assertion": "error",
	"typescript/no-extraneous-class": "error",
	"typescript/no-floating-promises": "error",
	"typescript/no-for-in-array": "error",
	"typescript/no-generated-empty-object-type": "error",
	"typescript/no-implied-eval": "error",
	"typescript/no-import-type-side-effects": "error",
	"typescript/no-inferrable-types": "error",
	"typescript/no-invalid-void-type": "error",
	"typescript/no-meaningless-void-operator": "error",
	"typescript/no-misused-new": "error",
	"typescript/no-misused-spread": "error",
	"typescript/no-mixed-enums": "error",
	"typescript/no-namespace": "error",
	"typescript/no-non-null-asserted-nullish-coalescing": "error",
	"typescript/no-non-null-asserted-optional-chain": "error",
	"typescript/no-non-null-assertion": "error",
	"typescript/no-require-imports": "error",
	"typescript/no-restricted-types": "error",
	"typescript/no-this-alias": "error",
	"typescript/no-unnecessary-boolean-literal-compare": "error",
	"typescript/no-unnecessary-parameter-property-assignment": "error",
	"typescript/no-unnecessary-template-expression": "error",
	"typescript/no-unnecessary-type-arguments": "error",
	"typescript/no-unnecessary-type-assertion": "error",
	"typescript/no-unnecessary-type-constraint": "error",
	"typescript/no-unnecessary-type-conversion": "error",
	"typescript/no-unnecessary-type-parameters": "error",
	"typescript/no-unsafe-argument": "error",
	"typescript/no-unsafe-assignment": "error",
	"typescript/no-unsafe-call": "error",
	"typescript/no-unsafe-declaration-merging": "error",
	"typescript/no-unsafe-enum-comparison": "error",
	"typescript/no-unsafe-function-type": "error",
	"typescript/no-unsafe-member-access": "error",
	"typescript/no-unsafe-return": "error",
	"typescript/no-unsafe-unary-minus": "error",
	"typescript/no-useless-default-assignment": "error",
	"typescript/no-useless-empty-export": "error",
	"typescript/no-var-requires": "error",
	"typescript/no-wrapper-object-types": "error",
	"typescript/non-nullable-type-assertion-style": "error",
	"typescript/only-throw-error": "error",
	"typescript/parameter-properties": "error",
	"typescript/prefer-as-const": "error",
	"typescript/prefer-enum-initializers": "error",
	"typescript/prefer-find": "error",
	"typescript/prefer-for-of": "error",
	"typescript/prefer-function-type": "error",
	"typescript/prefer-includes": "error",
	"typescript/prefer-literal-enum-member": "error",
	"typescript/prefer-namespace-keyword": "error",
	"typescript/prefer-promise-reject-errors": "error",
	"typescript/prefer-readonly": "error",
	"typescript/prefer-reduce-type-parameter": "error",
	"typescript/prefer-return-this-type": "error",
	"typescript/prefer-string-starts-ends-with": "error",
	"typescript/prefer-ts-expect-error": "error",
	"typescript/related-getter-setter-pairs": "error",
	"typescript/require-array-sort-compare": "error",
	"typescript/restrict-plus-operands": "error",
	"typescript/return-await": "error",
	"typescript/triple-slash-reference": "error",
	"typescript/unbound-method": "error",
	"typescript/unified-signatures": "error",
	"typescript/use-unknown-in-catch-callback-variable": "error",
	...disabledRules,

	/**
	 * Require consistent usage of type exports.
	 */
	"typescript/consistent-type-exports": "error",
	/**
	 * Require consistent usage of type imports.
	 */
	"typescript/consistent-type-imports": "error",
	/**
	 * Require explicit return types on functions and class methods.
	 */
	"typescript/explicit-function-return-type": [
		"error",
		{
			allowExpressions: true,
			allowFunctionsWithoutTypeParameters: true,
			allowTypedFunctionExpressions: true
		}
	],
	/**
	 * Require using function property types in method signatures.
	 *
	 * These have enhanced typechecking, whereas method signatures do not.
	 */
	"typescript/method-signature-style": ["error", "property"],
	/**
	 * Prevent `void` type expressions from being used in misleading locations
	 * such as being assigned to a variable, provided as a function argument,
	 * or returned from a function (except concise arrow functions).
	 */
	"typescript/no-confusing-void-expression": [
		"error",
		{
			ignoreArrowShorthand: true
		}
	],
	"typescript/no-empty-interface": [
		"error",
		{
			allowSingleExtends: true
		}
	],
	/**
	 * Disallow accidentally using the "empty object" type (`{}`).
	 */
	"typescript/no-empty-object-type": [
		"error",
		{
			// Allow "single-extends" interfaces as they are often useful for
			// documentation purposes and future extensibility
			allowInterfaces: "with-single-extends",
			// Allow React-like props types
			allowWithName: "Props$"
		}
	],
	/**
	 * Disallow Promises in places not designed to handle them.
	 *
	 * Function arguments and JSX attributes are allowed.
	 */
	"typescript/no-misused-promises": [
		"error",
		{
			checksVoidReturn: false
		}
	],
	/**
	 * Disallow members of unions and intersections that do nothing or override type information.
	 */
	"typescript/no-redundant-type-constituents": "error",
	/**
	 * Disallow unnecessary namespace qualifiers.
	 */
	"typescript/no-unnecessary-qualifier": "error",
	/**
	 * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
	 */
	"typescript/prefer-nullish-coalescing": [
		"error",
		{
			ignorePrimitives: {
				number: true,
				string: true
			}
		}
	],
	/**
	 * Require using `RegExp.exec()` over `String.match()` for consistency.
	 */
	"typescript/prefer-regexp-exec": "error",
	/**
	 * Enforce template literal expressions to be of string type.
	 */
	"typescript/restrict-template-expressions": [
		"error",
		{
			allow: [{ from: "lib", name: ["Error", "URL", "URLSearchParams"] }],
			allowBoolean: true,
			allowNumber: true
		}
	],
	/**
	 * Require exhaustive checks when using union types in switch statements.
	 *
	 * This ensures cases are considered when items are later added to a union.
	 */
	"typescript/switch-exhaustiveness-check": "error"
} satisfies OxlintConfig["rules"];
