import { sharedCategoryConfig } from "@haltcase/style/oxlint/constants";
import type { OxlintConfig } from "oxlint";

import { testingRules } from "../rules/_testing.ts";

export const testingConfig = [
	{
		rules: { ...testingRules },
		plugins: ["vitest"],
		categories: {
			...sharedCategoryConfig
		}
	}
] satisfies OxlintConfig[];
