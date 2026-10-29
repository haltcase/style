import { sharedCategoryConfig } from "@haltcase/style/oxlint/constants";
import type { OxlintConfig } from "oxlint";

import { nodeRules } from "../rules/_node.ts";

export const nodeConfig = [
	{
		rules: { ...nodeRules },
		plugins: ["node"],
		categories: {
			...sharedCategoryConfig
		}
	}
] satisfies OxlintConfig[];
