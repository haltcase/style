import type { OxlintConfig } from "oxlint";

export const nodeRules = {
	"node/callback-return": "error",
	"node/exports-style": "error",
	"node/global-require": "error",
	"node/handle-callback-err": "error",
	"node/no-exports-assign": "error",
	"node/no-mixed-requires": "error",
	"node/no-new-require": "error",
	"node/no-path-concat": "error",
	"node/no-top-level-await": "error"
} satisfies OxlintConfig["rules"];
