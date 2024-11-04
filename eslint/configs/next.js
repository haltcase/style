import pluginNextjs from "@next/eslint-plugin-next";
import { config } from "typescript-eslint";

import {
	javascriptFiles,
	nextJsApiRoutes,
	nextJsPageFiles
} from "../constants.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [_options]
 */
export const getEslintNextConfig = (_options = {}) =>
	config(
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
