import type { OxlintConfig } from "oxlint";

const disabledRules = {
	// This rule has been deprecated, but not yet removed.
	"jsx-a11y/no-onchange": "off"
} satisfies OxlintConfig["rules"];

export const jsxA11yRules = {
	...disabledRules
} satisfies OxlintConfig["rules"];
