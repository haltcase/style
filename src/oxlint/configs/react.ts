import reactXPlugin from "@eslint-react/eslint-plugin";
import { sharedCategoryConfig } from "@haltcase/style/oxlint/constants";
import { reactRules } from "@haltcase/style/oxlint/rules/react";
import { reactXRules } from "@haltcase/style/oxlint/rules/react-x";
import effectPlugin from "eslint-plugin-react-you-might-not-need-an-effect";
import type { OxlintConfig } from "oxlint";

import { resolveJsPlugin, resolveRuleMap } from "../utils/eslint-compat.ts";

export const reactConfig: OxlintConfig[] = [
	{
		plugins: ["react", "react-perf", "jsx-a11y"],
		categories: {
			...sharedCategoryConfig
		},
		jsPlugins: [
			resolveJsPlugin("@eslint-react", "@eslint-react/eslint-plugin"),
			resolveJsPlugin("eslint-plugin-react-you-might-not-need-an-effect")
		],
		rules: {
			// NOTE: We can't use `strict-type-checked` because it results in runtime errors.
			// The type-aware rules are tied specifically to `typescript-eslint`.
			...resolveRuleMap(reactXPlugin.configs.strict.rules),
			...resolveRuleMap(effectPlugin.configs.strict.rules),
			...reactRules,
			...reactXRules
		}
	}
];
