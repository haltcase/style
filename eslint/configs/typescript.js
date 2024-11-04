// eslint-disable-next-line import-x/default
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import { config, configs, parser, plugin } from "typescript-eslint";

import { typescriptFiles, typescriptJsxFiles } from "../constants.js";
import { typescriptExtensionRules } from "../rules/typescript/extension.js";
import { typescriptImportRules } from "../rules/typescript/import.js";
import { typescriptBaseRules } from "../rules/typescript/index.js";
import { getTypescriptNamingConventionRule } from "../rules/typescript/naming-convention.js";
import { eslintTsdocConfig } from "./internal/tsdoc.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintTypescriptConfig = (options = {}) => {
	/** @type {import("typescript-eslint").ConfigWithExtends["languageOptions"]} */
	const languageOptions = {
		parser,
		parserOptions: {
			ecmaFeatures: {
				jsx: options.react || undefined,
				modules: true
			},
			// https://github.com/typescript-eslint/typescript-eslint/issues/3788#issuecomment-905094436
			jsxPragma: null,
			projectService: options.typescriptProjectServiceOptions ?? true
		}
	};

	return config(
		{
			name: "@haltcase/internal/TypeScript files",

			files: typescriptFiles,

			extends: [
				...configs.recommendedTypeChecked,
				...configs.strictTypeChecked,
				...configs.stylisticTypeChecked,

				{
					name: "import-x/typescript",
					...eslintPluginImportX.configs.typescript
				},

				{ name: "prettier", ...eslintConfigPrettier },

				...eslintTsdocConfig
			],

			languageOptions,

			rules: {
				...typescriptBaseRules,
				...typescriptExtensionRules,
				...typescriptImportRules,
				...getTypescriptNamingConventionRule()
			},

			settings: {
				"import-x/resolver": {
					typescript: true
				}
			}
		},
		{
			name: "@haltcase/internal/TypeScript TSX files",

			files: typescriptJsxFiles,
			languageOptions,

			plugins: {
				"@typescript-eslint": plugin
			},

			rules: {
				...getTypescriptNamingConventionRule({
					isTsx: true
				})
			}
		}
	);
};
