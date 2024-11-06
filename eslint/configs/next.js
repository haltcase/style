import pluginNextjs from "@next/eslint-plugin-next";
import { config } from "typescript-eslint";

import {
	javascriptFiles,
	nextJsApiRoutes,
	nextJsPageFiles
} from "../constants.js";
import { getEslintBaseConfig } from "./internal/base.js";
import { getEslintNodeConfigInternal } from "./node.js";
import { getEslintReactConfigInternal } from "./react.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintNextConfig = (options = {}) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintNodeConfigInternal(options),
		...getEslintNextConfigInternal(options)
	);

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
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
			// @ts-expect-error inference issue
			rules: {
				...pluginNextjs.configs.recommended.rules,
				...pluginNextjs.configs["core-web-vitals"].rules
			}
		},
		{
			name: "Next.js page files and API routes",

			files: [...nextJsPageFiles, ...nextJsApiRoutes],
			rules: {
				"import-x/no-default-export": "off"
			}
		}
	);
