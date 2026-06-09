import type { OxlintConfig } from "oxlint";

const disabledRules = {
	// Duplicated by native Oxlint React rules
	"@eslint-react/exhaustive-deps": "off",
	"@eslint-react/rules-of-hooks": "off",
	"@eslint-react/no-array-index-key": "off",
	"@eslint-react/no-clone-element": "off",
	"@eslint-react/no-direct-mutation-state": "off",
	"@eslint-react/jsx-no-comment-textnodes": "off",
	"@eslint-react/jsx-no-useless-fragment": "off",
	"@eslint-react/jsx-no-namespace": "off",

	// Duplicated by native Oxlint React DOM rules
	"@eslint-react/dom-no-find-dom-node": "off",
	"@eslint-react/dom-no-missing-button-type": "off",
	"@eslint-react/dom-no-missing-iframe-sandbox": "off",
	"@eslint-react/dom-no-render-return-value": "off",
	"@eslint-react/dom-no-script-url": "off",
	"@eslint-react/dom-no-unknown-property": "off",
	"@eslint-react/dom-no-void-elements-with-children": "off",

	// Duplicated by native Oxlint lifecycle/state rules
	"@eslint-react/no-set-state-in-component-did-mount": "off",
	"@eslint-react/no-set-state-in-component-did-update": "off",
	"@eslint-react/no-set-state-in-component-will-update": "off",
	"@eslint-react/no-unsafe-component-will-mount": "off",
	"@eslint-react/no-unsafe-component-will-receive-props": "off",
	"@eslint-react/no-unsafe-component-will-update": "off",

	// Duplicated by Oxlint/React compiler (react/react-compiler)
	"@eslint-react/error-boundaries": "off",
	"@eslint-react/globals": "off",
	"@eslint-react/immutability": "off",
	"@eslint-react/purity": "off",
	"@eslint-react/refs": "off",
	"@eslint-react/set-state-in-effect": "off",
	"@eslint-react/set-state-in-render": "off",
	"@eslint-react/static-components": "off",
	"@eslint-react/unsupported-syntax": "off",
	"@eslint-react/use-memo": "off"
} satisfies OxlintConfig["rules"];

export const reactXRules = {
	...disabledRules
} satisfies OxlintConfig["rules"];
