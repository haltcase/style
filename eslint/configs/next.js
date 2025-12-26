import pluginNextjs from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

import {
	allSupportedFiles,
	nextJsApiRoutes,
	nextJsMetadataFiles,
	nextJsPageFiles
} from "../constants.js";
import { getEslintBaseConfig } from "./internal/base.js";
import { getEslintNodeConfigInternal } from "./node.js";
import { getEslintReactConfigInternal } from "./react.js";

// Remove this when `@next/eslint-plugin-next` is ESM and typed properly
// eslint-disable-next-line import-x/no-named-as-default-member
const nextJsConfigs = pluginNextjs.configs;

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintNextConfig = (options = {}) =>
	defineConfig(
		...getEslintBaseConfig(options),
		...getEslintNodeConfigInternal(options),
		...getEslintNextConfigInternal(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintNextConfigInternal = (options = {}) =>
	defineConfig(
		...getEslintReactConfigInternal(options),
		{
			name: "@haltcase/nextjs",

			files: allSupportedFiles,
			plugins: {
				"@next/next": pluginNextjs
			},
			rules: {
				...nextJsConfigs.recommended.rules,
				...nextJsConfigs["core-web-vitals"].rules
			}
		},
		{
			name: "Next.js page files and API routes",

			files: [...nextJsPageFiles, ...nextJsApiRoutes, ...nextJsMetadataFiles],
			rules: {
				"import-x/no-default-export": "off"
			}
		}
	);
