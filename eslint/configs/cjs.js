import { config } from "typescript-eslint";

import { getEslintBaseConfig } from "./internal/base.js";
import { getEslintCommonJsConfigInternal } from "./internal/commonjs.js";

/**
 * @type {import("./internal/base.js").HaltcaseStyleCreator}
 */
export const getEslintCommonJsConfig = (options) =>
	config(
		...getEslintBaseConfig(options),
		...getEslintCommonJsConfigInternal(options)
	);
