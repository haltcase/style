import globals from "globals";
import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintBrowserConfig = (options = {}) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintBrowserConfigInternal(options)
	);

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [_options]
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
