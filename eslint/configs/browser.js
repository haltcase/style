import globals from "globals";
import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintBrowserConfig = (options = {}) =>
	config({
		name: "Browser",

		extends: [...getEslintBaseConfig(options)],
		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	});
