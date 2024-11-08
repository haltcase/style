import eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { config } from "typescript-eslint";

import { jsxA11yRules } from "../rules/jsx-a11y.js";
import { reactRules } from "../rules/react.js";
import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintReactConfig = (options) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintReactConfigInternal(options)
	);

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [_options]
 */
export const getEslintReactConfigInternal = (_options = {}) =>
	config({
		name: "@haltcase/react",

		extends: [
			// @ts-ignore the modules types are incorrect
			{
				name: "@haltcase/react/recommended",
				...eslintPluginReact.configs.flat.recommended
			},
			// @ts-ignore the modules types are incorrect
			{
				name: "@haltcase/react/jsx-runtime",
				...eslintPluginReact.configs.flat["jsx-runtime"]
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
			...reactRules,
			...jsxA11yRules
		}
	});
