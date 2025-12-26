import { defineConfig } from "eslint/config";

import { getEslintBaseConfig } from "./internal/base.js";
import { getEslintCommonJsConfigInternal } from "./internal/commonjs.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintCommonJsConfig = (options) =>
	defineConfig(
		...getEslintBaseConfig(options),
		...getEslintCommonJsConfigInternal(options)
	);
