import type { OxlintConfig } from "oxlint";

import { configFiles, scriptFiles, sharedCategoryConfig } from "../constants.ts";
import { typescriptDefaultRules } from "../rules/_typescript-defaults.ts";
import { bestPracticeRules } from "../rules/best-practice.ts";
import { importRules } from "../rules/imports.ts";
import { possibleErrorsRules } from "../rules/possible-errors.ts";
import { restrictionRules } from "../rules/restriction.ts";
import { stylisticRules } from "../rules/stylistic.ts";
import { variablesRules } from "../rules/variables.ts";
import { resolveJsPlugin } from "../utils/eslint-compat.ts";

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
		jsPlugins: [resolveJsPlugin("haltcase", "@haltcase/style/oxlint/plugin")],
		rules: {
			...typescriptDefaultRules,
			...bestPracticeRules,
			...importRules,
			...possibleErrorsRules,
			...stylisticRules,
			...restrictionRules,
			...variablesRules,
			"haltcase/padding-between-statements": "error"
		}
	}
] satisfies OxlintConfig[];
