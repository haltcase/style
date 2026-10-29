import type { OxlintConfig } from "oxlint";

// Preserve exclusions when a consumer enables these rules in `extends`.
const inheritedRuleOverrides = {
	"node/no-process-env": "off",

	"oxc/no-async-await": "off",
	"oxc/no-rest-spread-properties": "off",
	"oxc/no-optional-chaining": "off",

	complexity: [
		"error",
		{
			max: 200,
			variant: "modified"
		}
	],

	"no-await-in-loop": "off",
	"no-continue": "off",
	"no-eq-null": "off",
	"no-plusplus": "off",
	"no-ternary": "off",
	"no-undefined": "off",
	// Allow `void` operator for explicitly ignoring promise results
	"no-void": "off"
} satisfies OxlintConfig["rules"];

export const restrictionRules = {
	...inheritedRuleOverrides,
	"class-methods-use-this": "error",
	"default-case": "error",
	"jsdoc/check-access": "error",
	"jsdoc/empty-tags": "error",
	"no-div-regex": "error",
	"no-empty": "error",
	"no-empty-function": "error",
	"no-implicit-globals": "error",
	"no-regex-spaces": "error",
	"no-restricted-globals": "error",
	"no-restricted-imports": "error",
	"no-restricted-properties": "error",
	"no-use-before-define": "error",
	"no-var": "error",
	"oxc/bad-bitwise-operator": "error",
	"oxc/no-barrel-file": "error",
	"oxc/no-const-enum": "error",
	"promise/catch-or-return": "error",
	"promise/spec-only": "error",
	"unicode-bom": "error",
	"unicorn/no-abusive-eslint-disable": "error",
	"unicorn/no-anonymous-default-export": "error",
	"unicorn/no-array-for-each": "error",
	"unicorn/no-array-reduce": "error",
	"unicorn/no-document-cookie": "error",
	"unicorn/no-length-as-slice-end": "error",
	"unicorn/no-magic-array-flat-depth": "error",
	"unicorn/no-process-exit": "error",
	"unicorn/no-useless-error-capture-stack-trace": "error",
	"unicorn/prefer-modern-math-apis": "error",
	"unicorn/prefer-module": "error",
	"unicorn/prefer-node-protocol": "error",
	"unicorn/prefer-number-properties": "error"
} satisfies OxlintConfig["rules"];
