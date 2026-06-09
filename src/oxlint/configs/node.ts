import { sharedCategoryConfig } from "@haltcase/style/oxlint/constants";
import type { OxlintConfig } from "oxlint";

export const nodeConfig = [
	{
		plugins: ["node"],
		categories: {
			...sharedCategoryConfig
		}
	}
] satisfies OxlintConfig[];
