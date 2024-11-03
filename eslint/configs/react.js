import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { config } from "typescript-eslint";

import { jsxA11yRules } from "../rules/jsx-a11y.js";
import { reactRules } from "../rules/react.js";

const compat = new FlatCompat();

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [_options]
 */
export const getEslintReactConfig = (_options = {}) =>
	config({
		name: "@haltcase/react",

		extends: [
			{
				name: "@haltcase/react/recommended",
				...eslintPluginReact.configs.flat.recommended
			},
			{
				name: "@haltcase/react/jsx-runtime",
				...eslintPluginReact.configs.flat["jsx-runtime"]
			},

			{
				name: "@haltcase/react/hooks",
				...compat.config(eslintPluginReactHooks.configs.recommended)
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
