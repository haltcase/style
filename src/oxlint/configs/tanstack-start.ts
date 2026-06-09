import type { OxlintConfig } from "oxlint";

import { javascriptFiles, sharedCategoryConfig, typescriptFiles } from "../constants.ts";

export const tanstackStartConfig = [
	{
		categories: {
			...sharedCategoryConfig
		},
		overrides: [
			{
				files: [...javascriptFiles, ...typescriptFiles],
				rules: {
					"react/only-export-components": [
						"error",
						{
							customHOCs: [
								"createFileRoute",
								"createLazyFileRoute",
								"createRootRoute",
								"createRootRouteWithContext",
								"createLink",
								"createRoute",
								"createLazyRoute"
							]
						}
					]
				}
			}
		]
	}
] satisfies OxlintConfig[];
