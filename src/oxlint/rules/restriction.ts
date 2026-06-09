import type { OxlintConfig } from "oxlint";

const disabledRules = {
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
	...disabledRules
} satisfies OxlintConfig["rules"];
