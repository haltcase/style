import globals from "globals";
import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintNodeConfig = (options = {}) =>
	config(
		...getEslintNodeConfigInternal(options),
		...getEslintBaseConfig(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
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
