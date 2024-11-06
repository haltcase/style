import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";
import { getEslintCommonJsConfigInternal } from "./internal/commonjs.js";

/**
 * @param {import("./internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintCommonJsConfig = (options) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintCommonJsConfigInternal(options)
	);
