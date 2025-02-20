/**
 * @import { Linter } from "eslint"
 */

/**
 * @param {object} [options]
 * @param {boolean} [options.isComponentLike = false] - Whether to treat as component-like (e.g., themed components without TSX/JSX).
 * @param {boolean} [options.isTsx = false] - Whether to lint as TSX (JSX).
 * @returns {Linter.RulesRecord}
 */
export const getTypescriptNamingConventionRule = ({
	isComponentLike = false,
	isTsx = false
} = {}) => ({
	/**
	 * Require consistent naming conventions.
	 *
	 * Improves IntelliSense suggestions and avoids name collisions.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/naming-convention/
	 */
	"@typescript-eslint/naming-convention": [
		"error",
		// enforce that unused variable-likes are prefixed with `_`
		{
			format: [
				"camelCase",
				(isComponentLike || isTsx) && "StrictPascalCase"
			].filter(Boolean),
			leadingUnderscore: "require",
			modifiers: ["unused"],
			selector: "variableLike",
			trailingUnderscore: "forbid"
		},
		// enforce that everything is camelCase by default
		{
			format: [
				"camelCase",
				(isComponentLike || isTsx) && "StrictPascalCase"
			].filter(Boolean),
			leadingUnderscore: "forbid",
			selector: "default",
			trailingUnderscore: "forbid"
		},
		// allow HTTP methods in UPPER_CASE
		{
			filter: {
				match: true,
				regex: "^(ALL|GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$"
			},
			format: null,
			selector: ["variableLike"]
		},
		// allow variable-likes called exactly "_"
		{
			filter: {
				match: true,
				regex: "^_$"
			},
			format: null,
			selector: ["variableLike", "typeProperty"]
		},
		// anything type-like must be written in PascalCase
		{
			format: ["PascalCase"],
			leadingUnderscore: "forbid",
			selector: ["typeLike", "enumMember"],
			trailingUnderscore: "forbid"
		},
		// interfaces must not be prefixed with `I` or have restricted names
		{
			custom: {
				match: false,
				regex: "^I[A-Z]|^(Interface|Props|State)$"
			},
			format: ["PascalCase"],
			selector: "interface"
		},
		// allow leading underscore(s) in object properties for things like brand identifiers
		{
			format: null,
			leadingUnderscore: "allowSingleOrDouble",
			selector: "objectLiteralProperty",
			trailingUnderscore: "forbid"
		},
		// booleans must be prefixed with an allowed verb
		// https://typescript-eslint.io/rules/naming-convention/#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
		{
			format: ["PascalCase"],
			leadingUnderscore: "forbid",
			prefix: ["is", "has", "should", "can", "did", "will"],
			selector: "variable",
			trailingUnderscore: "forbid",
			types: ["boolean"]
		},
		// ignore destructured properties (which are often out of our control)
		{
			format: null,
			modifiers: ["destructured"],
			prefix: [],
			selector: ["variable", "parameter"]
		},
		// ignore destructured booleans; requires enough specificity to override
		// the above rule enforcing prefixes
		{
			format: null,
			leadingUnderscore: "forbid",
			modifiers: ["destructured"],
			prefix: [],
			selector: "variable",
			trailingUnderscore: "forbid",
			types: ["boolean"]
		},
		// enforce that all type parameters begin with `T`
		{
			format: ["PascalCase"],
			prefix: ["T"],
			selector: "typeParameter"
		}
	]
});
