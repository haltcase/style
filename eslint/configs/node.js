import globals from "globals";
import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintNodeConfig = (options = {}) =>
	config(
		...getEslintNodeConfigInternal(options),
		...getEslintBaseConfig(options)
	);

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [_options]
 */
export const getEslintNodeConfigInternal = (_options = {}) =>
	config({
		name: "@haltcase/Node.js",

		languageOptions: {
			globals: {
				...globals.node
			}
		}
	});
