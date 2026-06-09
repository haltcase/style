import { resolveJsPlugin } from "@haltcase/style/oxlint/utils/eslint-compat";
import type { OxlintConfig } from "oxlint";

export const tanstackRouterConfig = [
	{
		plugins: [
			// Required for resolving the rule namespace used by the TanStack Router
			// plugin
			"eslint"
		],
		jsPlugins: [resolveJsPlugin("@tanstack/eslint-plugin-router")],
		categories: {
			correctness: "error"
		},
		// Note: this has no effect because Oxlint does not merge
		// `ignorePatterns` in extended configs.
		// See: https://github.com/oxc-project/oxc/issues/10223
		ignorePatterns: ["**/routeTree.gen.ts"],
		rules: {
			"typescript/only-throw-error": [
				"error",
				{
					allow: [
						// Allow TanStack Router patterns: `throw redirect` and `throw notFound`
						{
							from: "package",
							name: "Redirect",
							package: "@tanstack/router-core"
						},
						{
							from: "package",
							name: "NotFoundError",
							package: "@tanstack/router-core"
						}
					]
				}
			]
		}
	}
] satisfies OxlintConfig[];
