import { defineConfig } from "eslint/config";
import globals from "globals";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintBrowserConfig = (options = {}) =>
	defineConfig(
		...getEslintBaseConfig(options),
		...getEslintBrowserConfigInternal(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintBrowserConfigInternal = (_options = {}) =>
	defineConfig({
		name: "Browser",

		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	});
