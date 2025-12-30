import eslintPluginReact from "@eslint-react/eslint-plugin";
import eslintStylisticJsx from "@stylistic/eslint-plugin-jsx";
import { defineConfig } from "eslint/config";
import * as eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReactOriginal from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";

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
	defineConfig(
		...getEslintBaseConfig(options),
		...getEslintReactConfigInternal(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintReactConfigInternal = (_options = {}) =>
	defineConfig(
		{
			name: "@haltcase/react",

			files: jsxFiles,

			extends: [
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
					...eslintPluginReactHooks.configs.flat.recommended
				},

				{
					name: "@haltcase/react/you-might-not-need-an-effect",
					...eslintPluginYouMightNotNeedAnEffect.configs.recommended
				},

				{
					name: "@haltcase/react/jsx-a11y",
					...eslintPluginJsxA11y.flatConfigs.recommended
				},

				// @ts-expect-error this error is due to differences in type
				// definitions between typescript-eslint's deprecated `config`
				// and ESLint's `defineConfig`, but should work fine at runtime
				// https://github.com/typescript-eslint/typescript-eslint/issues/10935#issuecomment-2852410510
				{
					name: "@haltcase/react/import-x",
					...eslintPluginImportX.flatConfigs.react,

					// the base config already defines the `import-x` plugin, and if we
					// don't omit it from this config, we get the error:
					// Cannot redefine plugin "import-x"
					plugins: {}
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
