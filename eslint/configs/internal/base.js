// @ts-check

/**
 * @import { ParserOptions } from "@typescript-eslint/types"
 */

import babelParser from "@babel/eslint-parser";
import eslint from "@eslint/js";
import eslintPluginEslintComments from "@eslint-community/eslint-plugin-eslint-comments";
// eslint-disable-next-line import-x/default
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
// eslint-disable-next-line import-x/default
import eslintRegexp from "eslint-plugin-regexp";
import { config } from "typescript-eslint";

import {
	allSupportedFiles,
	configFiles,
	ecmaVersion,
	javascriptFiles,
	scriptFiles
} from "../../constants.js";
import { bestPracticeRules } from "../../rules/best-practice.js";
import { importRules } from "../../rules/imports.js";
import { possibleErrorsRules } from "../../rules/possible-errors.js";
import { stylisticRules } from "../../rules/stylistic.js";
import { variablesRules } from "../../rules/variables.js";
import { getEslintTypescriptConfig } from "../typescript.js";
import { getEslintCommonJsConfigInternal } from "./commonjs.js";
import { eslintEs2015Config } from "./es2015.js";
import { eslintSimpleImportSortConfig } from "./simple-import-sort.js";
import { eslintUnicornConfig } from "./unicorn.js";

/**
 * @typedef {Object} HaltcaseStyleOptions
 * @property {boolean} [browser] Whether to include browser rules and globals.
 * @property {boolean} [commonjs] Whether to treat *.js files as CommonJS instead of ES Modules.
 * @property {boolean} [nextjs] Whether to include Next.js rules (implies `react`).
 * @property {boolean} [node] Whether to include Node.js rules.
 * @property {boolean} [react] Whether to include React rules.
 * @property {ParserOptions["project"]} [typescriptProject = true] Custom TypeScript project options for the `typescript-eslint` parser.
 * // use when VS Code supports `projectService`
 * // https://github.com/microsoft/vscode-eslint/issues/1911
 * property {ProjectServiceOptions} [typescriptProjectServiceOptions = true] Custom TypeScript project service options for the `typescript-eslint` parser.
 */

/**
 * Get the common ESLint config for Node and browsers.
 *
 * @param {HaltcaseStyleOptions} options
 */
export const getEslintBaseConfig = (options = {}) =>
	config(
		{
			name: "import-x/recommended",
			plugins: {
				"import-x": eslintPluginImportX
			},
			rules: {
				...eslintPluginImportX.configs.recommended.rules
			},
			settings: {
				"import-x/parsers": {
					"@typescript-eslint/parser": [".ts"]
				},
				"import-x/resolver": {
					typescript: true,
					node: true
				}
			}
		},

		{
			name: "@haltcase/internal/base",

			extends: [
				{ name: "eslint/recommended", ...eslint.configs.recommended },

				{ name: "prettier", ...eslintConfigPrettier },

				{
					name: "eslint-comments",
					rules: {
						...eslintPluginEslintComments.configs.recommended.rules
					}
				}
			],
			languageOptions: {
				// global parser options
				parserOptions: {
					ecmaVersion,
					sourceType: "module"
				}
			},
			linterOptions: {
				reportUnusedDisableDirectives: "warn"
			},
			plugins: {
				"@eslint-community/eslint-comments": eslintPluginEslintComments
			}
		},

		{
			name: "@haltcase/internal/Best practices",
			files: allSupportedFiles,
			rules: bestPracticeRules
		},

		...eslintEs2015Config,

		{
			name: "@haltcase/internal/Imports",
			files: allSupportedFiles,
			rules: importRules
		},

		{
			name: "@haltcase/internal/Possible errors",
			files: allSupportedFiles,
			rules: possibleErrorsRules
		},

		{
			name: "@haltcase/internal/Regular Expressions",
			// eslint-disable-next-line import-x/no-named-as-default-member
			...eslintRegexp.configs["flat/recommended"]
		},

		...eslintSimpleImportSortConfig,

		{
			name: "@haltcase/internal/Stylistic",
			files: allSupportedFiles,
			rules: stylisticRules
		},

		...eslintUnicornConfig,

		{
			name: "@haltcase/internal/Variables",
			// files: allSupportedFiles,
			rules: variablesRules
		},

		{
			name: "@haltcase/internal/JavaScript files",
			files: javascriptFiles,
			languageOptions: {
				parser: babelParser,
				parserOptions: {
					requireConfigFile: false
				}
			}
		},

		...getEslintTypescriptConfig(options),

		{
			name: "@haltcase/internal/Third-party config files (e.g., next.config.mjs)",
			files: configFiles,
			rules: {
				// these files likely require default exports
				"import-x/no-default-export": "off"
			}
		},

		{
			name: "@haltcase/internal/Development-only helper scripts & Prisma database scripts",
			files: scriptFiles,
			rules: {
				"no-console": "off",
				"unicorn/no-process-exit": "off"
			}
		},

		...getEslintCommonJsConfigInternal(options)
	);
