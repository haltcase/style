import type { OxlintConfig } from "oxlint";

import { configFiles, scriptFiles, sharedCategoryConfig } from "../constants.ts";
import { bestPracticeRules } from "../rules/best-practice.ts";
import { importRules } from "../rules/imports.ts";
import { possibleErrorsRules } from "../rules/possible-errors.ts";
import { restrictionRules } from "../rules/restriction.ts";
import { stylisticRules } from "../rules/stylistic.ts";
import { variablesRules } from "../rules/variables.ts";

export const baseConfig = [
	{
		categories: {
			...sharedCategoryConfig
		},
		overrides: [
			{
				files: configFiles,
				rules: {
					// Config files often use default exports, so allow them here
					"import/no-default-export": "off"
				}
			},
			{
				files: scriptFiles,
				rules: {
					"unicorn/no-process-exit": "off"
				}
			}
		],
		plugins: ["eslint", "oxc", "import", "jsdoc", "promise", "unicorn"],
		rules: {
			...bestPracticeRules,
			...importRules,
			...possibleErrorsRules,
			...stylisticRules,
			...restrictionRules,
			...variablesRules
		}
	}
] satisfies OxlintConfig[];
