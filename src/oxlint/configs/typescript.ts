import { sharedCategoryConfig } from "@haltcase/style/oxlint/constants";
import type { OxlintConfig } from "oxlint";

import { typescriptDeclarationFilesRules } from "../rules/typescript/declaration-files.ts";
import { typescriptBaseRules } from "../rules/typescript/index.ts";

export const typescriptConfig = [
	{
		plugins: ["typescript", "unicorn"],
		categories: {
			...sharedCategoryConfig
		},
		rules: {
			...typescriptBaseRules
		},
		overrides: [
			{
				files: ["*.d.ts"],
				rules: {
					...typescriptDeclarationFilesRules
				}
			}
		]
	}
] satisfies OxlintConfig[];
