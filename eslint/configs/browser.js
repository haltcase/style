import globals from "globals";
import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintBrowserConfig = (options = {}) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintBrowserConfigInternal(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintBrowserConfigInternal = (_options = {}) =>
	config({
		name: "Browser",

		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	});
