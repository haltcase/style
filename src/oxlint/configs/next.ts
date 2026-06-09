import type { OxlintConfig } from "oxlint";

import {
	nextJsApiRouteFiles,
	nextJsMetadataFiles,
	nextJsPageFiles,
	sharedCategoryConfig
} from "../constants.ts";

export const nextConfig = [
	{
		plugins: ["nextjs"],
		categories: {
			...sharedCategoryConfig
		},
		overrides: [
			{
				files: [...nextJsApiRouteFiles, ...nextJsMetadataFiles, ...nextJsPageFiles],
				rules: {
					"import-x/no-default-export": "off",

					"react/only-export-components": [
						"error",
						{
							allowExportNames: [
								// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
								"experimental_ppr",
								"dynamic",
								"dynamicParams",
								"revalidate",
								"fetchCache",
								"runtime",
								"preferredRegion",
								"maxDuration",
								// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
								"metadata",
								"generateMetadata",
								// https://nextjs.org/docs/app/api-reference/functions/generate-viewport
								"viewport",
								"generateViewport",
								// https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata
								"generateImageMetadata",
								// https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
								"generateSitemaps",
								// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
								"generateStaticParams"
							]
						}
					]
				}
			}
		]
	}
] satisfies OxlintConfig[];
