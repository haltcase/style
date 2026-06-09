import type { OxlintConfig } from "oxlint";

const disabledRules = {
	"import/unambiguous": "off"
} satisfies OxlintConfig["rules"];

export const typescriptDeclarationFilesRules = {
	...disabledRules
} satisfies OxlintConfig["rules"];
