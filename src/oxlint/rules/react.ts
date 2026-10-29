import type { OxlintConfig } from "oxlint";

// Preserve exclusions when a consumer enables these rules in `extends`.
const inheritedRuleOverrides = {
	"react/jsx-props-no-spreading": "off",
	"react/no-multi-comp": "off",

	// Not needed since React 17 with the new JSX transform
	"react/react-in-jsx-scope": "off",

	// Disable deoptimization hints for unimplemented features
	"react/todo": "off",

	// Disabled for practicality, but can be reconsidered in the future
	"react-perf/jsx-no-jsx-as-prop": "off",
	"react/jsx-no-literals": "off",
	"react-perf/jsx-no-new-array-as-prop": "off",
	"react-perf/jsx-no-new-function-as-prop": "off",
	"react-perf/jsx-no-new-object-as-prop": "off"
} satisfies OxlintConfig["rules"];

export const reactRules = {
	...inheritedRuleOverrides,
	"react/button-has-type": "error",
	"react/capitalized-calls": "error",
	"react/checked-requires-onchange-or-readonly": "error",
	"react/display-name": "error",
	"react/error-boundaries": "error",
	"react/exhaustive-deps": "error",
	"react/exhaustive-effect-dependencies": "error",
	"react/forbid-dom-props": "error",
	"react/forbid-elements": "error",
	"react/forward-ref-uses-ref": "error",
	"react/function-component-definition": "error",
	"react/globals": "error",
	"react/hook-use-state": "error",
	"react/hooks": "error",
	"react/iframe-missing-sandbox": "error",
	"react/immutability": "error",
	"react/incompatible-library": "error",
	"react/invariant": "error",
	"react/jsx-boolean-value": "error",
	"react/jsx-curly-brace-presence": "error",
	"react/jsx-fragments": "error",
	"react/jsx-handler-names": "error",
	"react/jsx-key": "error",
	"react/jsx-no-comment-textnodes": "error",
	"react/jsx-no-constructed-context-values": "error",
	"react/jsx-no-duplicate-props": "error",
	"react/jsx-no-script-url": "error",
	"react/jsx-no-target-blank": "error",
	"react/jsx-no-undef": "error",
	"react/jsx-no-useless-fragment": "error",
	"react/jsx-pascal-case": "error",
	"react/jsx-props-no-spread-multi": "error",
	"react/memo-dependencies": "error",
	"react/no-array-index-key": "error",
	"react/no-children-prop": "error",
	"react/no-clone-element": "error",
	"react/no-danger": "error",
	"react/no-danger-with-children": "error",
	"react/no-deriving-state-in-effects": "error",
	"react/no-did-mount-set-state": "error",
	"react/no-did-update-set-state": "error",
	"react/no-direct-mutation-state": "error",
	"react/no-find-dom-node": "error",
	"react/no-is-mounted": "error",
	"react/no-namespace": "error",
	"react/no-object-type-as-default-prop": "error",
	"react/no-react-children": "error",
	"react/no-redundant-should-component-update": "error",
	"react/no-render-return-value": "error",
	"react/no-set-state": "error",
	"react/no-string-refs": "error",
	"react/no-this-in-sfc": "error",
	"react/no-unescaped-entities": "error",
	"react/no-unknown-property": "error",
	"react/no-unsafe": "error",
	"react/no-will-update-set-state": "error",
	"react/only-export-components": "error",
	"react/prefer-es6-class": "error",
	"react/prefer-function-component": "error",
	"react/preserve-manual-memoization": "error",
	"react/purity": "error",
	"react/refs": "error",
	"react/rule-suppression": "error",
	"react/rules-of-hooks": "error",
	"react/self-closing-comp": "error",
	"react/set-state-in-effect": "error",
	"react/set-state-in-render": "error",
	"react/state-in-constructor": "error",
	"react/static-components": "error",
	"react/style-prop-object": "error",
	"react/syntax": "error",
	"react/unsupported-syntax": "error",
	"react/use-memo": "error",
	"react/void-dom-elements-no-children": "error",
	"react/void-use-memo": "error",
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
