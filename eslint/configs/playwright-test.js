import eslintPluginPlaywright from "eslint-plugin-playwright";
import { config } from "typescript-eslint";

import { playwrightTestRules } from "../rules/playwright-test.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [_options]
 */
export const getEslintPlaywrightTestConfig = (_options = {}) =>
	config({
		name: "Playwright tests",

		extends: [eslintPluginPlaywright.configs["flat/recommended"]],
		rules: {
			...playwrightTestRules
		}
	});
