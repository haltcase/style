import eslintPluginPlaywright from "eslint-plugin-playwright";
import { config } from "typescript-eslint";

import { playwrightTestRules } from "../rules/playwright-test.js";

const playwrightRecommendedConfig =
	eslintPluginPlaywright.configs["flat/recommended"];

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintPlaywrightTestConfig = (_options = {}) =>
	config({
		...playwrightRecommendedConfig,

		name: "Playwright tests",

		rules: {
			...playwrightTestRules
		}
	});
