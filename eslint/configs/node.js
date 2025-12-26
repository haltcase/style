import { defineConfig } from "eslint/config";
import globals from "globals";

import { getEslintBaseConfig } from "./internal/base.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintNodeConfig = (options = {}) =>
	defineConfig(
		...getEslintNodeConfigInternal(options),
		...getEslintBaseConfig(options)
	);

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintNodeConfigInternal = (_options = {}) =>
	defineConfig({
		name: "@haltcase/Node.js",

		languageOptions: {
			globals: {
				...globals.node
			}
		}
	});
