import eslintPluginReact from "@eslint-react/eslint-plugin";
import eslintStylisticJsx from "@stylistic/eslint-plugin-jsx";
import eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReactOriginal from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { config } from "typescript-eslint";

import { jsxA11yRules } from "../rules/jsx-a11y.js";
import { reactRules } from "../rules/react.js";
import { reactXRules } from "../rules/react-x.js";
import { stylisticJsxRules } from "../rules/stylistic-jsx.js";
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
			{
				...eslintPluginReact.configs["recommended-type-checked"],
				name: "@haltcase/react/recommended-type-checked"
			},

			{
				name: "@haltcase/react/jsx-eslint/react",
				plugins: {
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
			...reactXRules,
			...jsxA11yRules
		}
	});
