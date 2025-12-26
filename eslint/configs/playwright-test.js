import { defineConfig } from "eslint/config";
import eslintPluginPlaywright from "eslint-plugin-playwright";

import { playwrightTestRules } from "../rules/playwright-test.js";

const playwrightRecommendedConfig =
	eslintPluginPlaywright.configs["flat/recommended"];

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintPlaywrightTestConfig = (_options = {}) =>
	defineConfig({
		...playwrightRecommendedConfig,

		name: "Playwright tests",

		rules: {
			...playwrightTestRules
		}
	});
