import { sharedCategoryConfig } from "@haltcase/style/oxlint/constants";
import type { OxlintConfig } from "oxlint";

export const testingConfig = [
	{
		plugins: ["vitest"],
		categories: {
			...sharedCategoryConfig
		}
	}
] satisfies OxlintConfig[];
