import eslintPluginReact from "@eslint-react/eslint-plugin";
import eslintStylisticJsx from "@stylistic/eslint-plugin-jsx";
import eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReactOriginal from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { config } from "typescript-eslint";

import { jsxFiles, typescriptJsxFiles } from "../constants.js";
import { jsxA11yRules } from "../rules/jsx-a11y.js";
import { reactRules } from "../rules/react.js";
import { reactXRules } from "../rules/react-x.js";
import { stylisticJsxRules } from "../rules/stylistic-jsx.js";
import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintReactConfig = (options) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintReactConfigInternal(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintReactConfigInternal = (_options = {}) =>
	config(
		{
			name: "@haltcase/react",

			files: jsxFiles,

			extends: [
				{
					name: "@haltcase/react/jsx-eslint/react",
					plugins: {
						// @ts-expect-error see https://github.com/jsx-eslint/eslint-plugin-react/pull/3840
						react: eslintPluginReactOriginal
					},
					rules: {
						...reactRules
					}
				},

				{
					name: "@haltcase/react/stylistic",
					plugins: {
						"@stylistic/jsx": eslintStylisticJsx
					},
					rules: {
						...stylisticJsxRules
					}
				},

				{
					name: "@haltcase/react/hooks",
					plugins: {
						"react-hooks": eslintPluginReactHooks
					},
					rules: {
						...eslintPluginReactHooks.configs.recommended.rules
					}
				},

				{
					name: "@haltcase/react/jsx-a11y",
					...eslintPluginJsxA11y.flatConfigs.recommended
				},

				{
					name: "@haltcase/react/import-x",
					...eslintPluginImportX.flatConfigs.react
				}
			],
			settings: {
				react: {
					version: "detect"
				}
			},

			rules: {
				...jsxA11yRules
			}
		},

		{
			...eslintPluginReact.configs.recommended,

			name: "@haltcase/react/recommended",

			files: typescriptJsxFiles,
			rules: {
				...reactXRules
			}
		},

		{
			...eslintPluginReact.configs["recommended-type-checked"],

			name: "@haltcase/react/recommended-type-checked",

			files: typescriptJsxFiles,
			rules: {
				...reactXRules
			}
		}
	);
