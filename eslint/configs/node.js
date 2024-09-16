import globals from "globals";
import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintNodeConfig = (options = {}) =>
	config({
		name: "@haltcase/Node.js",

		extends: [...getEslintBaseConfig(options)],
		languageOptions: {
			globals: {
				...globals.node
			}
		}
	});
