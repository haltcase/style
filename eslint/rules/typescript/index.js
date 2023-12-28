"use strict";

const {
	levels: { warn, error }
} = require("../../constants");

module.exports = {
	rules: {
		/**
		 * Require consistent usage of type exports.
		 *
		 * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-exports/
		 */
		"@typescript-eslint/consistent-type-exports": [
			warn,
			{ fixMixedExportsWithInlineTypeSpecifier: true }
		],
		/**
		 * Require consistent usage of type imports.
		 *
		 * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-imports/
		 */
		"@typescript-eslint/consistent-type-imports": warn,
		/**
		 * Require explicit return types on functions and class methods.
		 *
		 * 🚫 Not fixable - https://typescript-eslint.io/rules/explicit-function-return-type/
		 */
		"@typescript-eslint/explicit-function-return-type": [
			warn,
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
		 *
		 * 🔧 Fixable - https://typescript-eslint.io/rules/method-signature-style/
		 */
		"@typescript-eslint/method-signature-style": warn,
		/**
		 * Require consistent naming conventions.
		 *
		 * Improves IntelliSense suggestions and avoids name collisions.
		 *
		 * 🚫 Not fixable - https://typescript-eslint.io/rules/naming-convention/
		 */
		"@typescript-eslint/naming-convention": [
			error,
			// Anything type-like should be written in PascalCase.
			{
				format: ["PascalCase"],
				selector: ["typeLike", "enumMember"]
			},
			// Interfaces cannot be prefixed with `I`, or have restricted names.
			{
				custom: {
					match: false,
					regex: "^I[A-Z]|^(Interface|Props|State)$"
				},
				format: ["PascalCase"],
				selector: "interface"
			}
		],
		/**
		 * Prevent `void` type expressions from being used in misleading locations
		 * such as being assigned to a variable, provided as a function argument,
		 * or returned from a function (except concise arrow functions).
		 *
		 * 🔧 Fixable - https://typescript-eslint.io/rules/no-confusing-void-expression/
		 */
		"@typescript-eslint/no-confusing-void-expression": [
			error,
			{
				ignoreArrowShorthand: true
			}
		],
		/**
		 * Disallow Promises in places not designed to handle them.
		 *
		 * Function arguments and JSX attributes are allowed.
		 *
		 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-misused-promises
		 */
		"@typescript-eslint/no-misused-promises": [
			error,
			{
				checksVoidReturn: {
					arguments: false,
					attributes: false
				}
			}
		],
		/**
		 * Disallow members of unions and intersections that do nothing or override type information.
		 *
		 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-redundant-type-constituents/
		 */
		"@typescript-eslint/no-redundant-type-constituents": warn,
		/**
		 * Disallow unnecessary namespace qualifiers.
		 *
		 * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-qualifier/
		 */
		"@typescript-eslint/no-unnecessary-qualifier": warn,
		/**
		 * Require using `RegExp.exec()` over `String.match()` for consistency.
		 *
		 * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-regexp-exec/
		 */
		"@typescript-eslint/prefer-regexp-exec": warn,
		/**
		 * Require exhaustive checks when using union types in switch statements.
		 *
		 * This ensures cases are considered when items are later added to a union.
		 *
		 * 🚫 Not fixable - https://typescript-eslint.io/rules/switch-exhaustiveness-check/
		 */
		"@typescript-eslint/switch-exhaustiveness-check": error
	}
};
