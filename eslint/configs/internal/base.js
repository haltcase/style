// @ts-check

/**
 * @import { ProjectServiceOptions } from "@typescript-eslint/types"
 */

import babelParser from "@babel/eslint-parser";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginEslintComments from "@eslint-community/eslint-plugin-eslint-comments";
import eslintPluginImportX from "eslint-plugin-import-x";
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
import { getEslintNextConfig } from "../next.js";
import { getEslintReactConfig } from "../react.js";
import { getEslintTypescriptConfig } from "../typescript.js";
import { getEslintCommonJsConfig } from "./commonjs.js";
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
 * @property {ProjectServiceOptions} [typescriptProjectServiceOptions = true] Custom TypeScript project service options for the `typescript-eslint` parser.
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
					...eslintPluginEslintComments.configs.recommended
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
				"eslint-comments": eslintPluginEslintComments
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

		...(options.nextjs ? getEslintNextConfig(options) : []),
		...(options.react || options.nextjs ? getEslintReactConfig(options) : []),

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

		...getEslintCommonJsConfig(options)
	);
