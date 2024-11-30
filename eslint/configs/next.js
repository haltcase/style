import pluginNextjs from "@next/eslint-plugin-next";
import { config } from "typescript-eslint";

import {
	javascriptFiles,
	nextJsApiRoutes,
	nextJsMetadataFiles,
	nextJsPageFiles
} from "../constants.js";
import { getEslintBaseConfig } from "./internal/base.js";
import { getEslintNodeConfigInternal } from "./node.js";
import { getEslintReactConfigInternal } from "./react.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintNextConfig = (options = {}) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintNodeConfigInternal(options),
		...getEslintNextConfigInternal(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintNextConfigInternal = (options = {}) =>
	config(
		...getEslintReactConfigInternal(options),
		{
			name: "@haltcase/nextjs",

			files: javascriptFiles,
			plugins: {
				"@next/next": pluginNextjs
			},
			rules: {
				...pluginNextjs.configs.recommended.rules,
				...pluginNextjs.configs["core-web-vitals"].rules
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
