import eslintConfigPrettier from "eslint-config-prettier";
import * as eslintPluginImportX from "eslint-plugin-import-x";
import { config, configs, parser, plugin } from "typescript-eslint";

import { typescriptFiles, typescriptJsxFiles } from "../constants.js";
import { typescriptExtensionRules } from "../rules/typescript/extension.js";
import { typescriptImportRules } from "../rules/typescript/import.js";
import { typescriptBaseRules } from "../rules/typescript/index.js";
import { getTypescriptNamingConventionRule } from "../rules/typescript/naming-convention.js";
import { eslintTsdocConfig } from "./internal/tsdoc.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintTypescriptConfig = (options = {}) =>
	getEslintTypescriptConfigInternal(options);

/**
 * @type {(options?: import("./internal/base.js").HaltcaseStyleOptions & {internal?: boolean}) => Awaited<import("typescript-eslint").Config>}
 */
export const getEslintTypescriptConfigInternal = (options = {}) => {
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
			project: options.typescriptProject ?? true
			// use `projectService` when VS Code supports it properly
			// https://github.com/microsoft/vscode-eslint/issues/1911
			// projectService: options.typescriptProjectServiceOptions ?? true
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
					...eslintPluginImportX.flatConfigs.typescript,

					// the base config already defines the `import-x` plugin, and if we
					// don't omit it from this config, we get the error:
					// Cannot redefine plugin "import-x"
					plugins: {}
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
		},
		{
			// special accommodations for non-TSX component-like files;
			// specifically, this was added to allow PascaleCase'd declarations
			// of extended components with Mantine, which uses e.g., `Button.extend()`
			// to create a customized instance of a UI component
			name: "@haltcase/internal/TypeScript component files",

			files: ["**/components/**/*.ts"],
			languageOptions,

			plugins: {
				"@typescript-eslint": plugin
			},

			rules: {
				...getTypescriptNamingConventionRule({
					isComponentLike: true
				})
			}
		}
	);
};
