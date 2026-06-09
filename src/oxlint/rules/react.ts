import type { OxlintConfig } from "oxlint";

const disabledRules = {
	"react/jsx-props-no-spreading": "off",
	"react/no-multi-comp": "off",

	// Not needed since React 17 with the new JSX transform
	"react/react-in-jsx-scope": "off",

	// Disabled for practicality, but can be reconsidered in the future
	"react-perf/jsx-no-jsx-as-prop": "off",
	"react/jsx-no-literals": "off",
	"react-perf/jsx-no-new-array-as-prop": "off",
	"react-perf/jsx-no-new-function-as-prop": "off",
	"react-perf/jsx-no-new-object-as-prop": "off"
} satisfies OxlintConfig["rules"];

export const reactRules = {
	...disabledRules,

	"react/react-compiler": "error",

	"react/forbid-component-props": [
		"error",
		{
			forbid: ["style"]
		}
	],

	"react/jsx-filename-extension": [
		"error",
		{
			extensions: ["tsx", "jsx"]
		}
	],

	"react/jsx-max-depth": [
		"error",
		{
			max: 12
		}
	],

	"react/no-unstable-nested-components": [
		"error",
		{
			allowAsProps: true
		}
	]
} satisfies OxlintConfig["rules"];
