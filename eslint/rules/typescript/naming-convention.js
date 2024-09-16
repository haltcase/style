/**
 * @param {object} [options]
 * @param {boolean} [options.isTsx = false] - Whether to lint as TSX (JSX).
 * @returns {import("eslint-define-config").Rules}
 */
export const getTypescriptNamingConventionRule = ({ isTsx = false } = {}) => ({
	/**
	 * Require consistent naming conventions.
	 *
	 * Improves IntelliSense suggestions and avoids name collisions.
	 *
	 * 🚫 Not fixable - https://typescript-eslint.io/rules/naming-convention/
	 */
	"@typescript-eslint/naming-convention": [
		"error",
		// enforce that everything is camelCase by default
		{
			format: ["camelCase", isTsx && "StrictPascalCase"].filter(Boolean),
			leadingUnderscore: "forbid",
			selector: "default",
			trailingUnderscore: "forbid"
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
			selector: "variable"
		},
		{
			format: null,
			selector: "typeProperty"
		}
	]
});
