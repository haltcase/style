import type { OxlintConfig } from "oxlint";

export const possibleErrorsRules = {
	/**
	 * Disallow the use of console.
	 */
	"no-console": "error",
	/**
	 * Disallow expressions where the operation doesn't affect the value.
	 */
	"no-constant-binary-expression": "error",
	/**
	 * Disallow returning values from Promise executor functions.
	 */
	"no-promise-executor-return": "error",
	/**
	 * Disallow template literal placeholder syntax in regular strings, as
	 * these are likely errors.
	 */
	"no-template-curly-in-string": "error",
	/**
	 * Disallow loops with a body that allows only one iteration.
	 */
	"no-unreachable-loop": "error"
} satisfies OxlintConfig["rules"];
