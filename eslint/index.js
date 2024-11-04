import { config } from "typescript-eslint";
import { getEslintBaseConfig } from "./configs/internal/base.js";
import { getEslintBrowserConfig } from "./configs/browser.js";
import { getEslintCommonJsConfig } from "./configs/cjs.js";
import { getEslintNextConfig } from "./configs/next.js";
import { getEslintNodeConfig } from "./configs/node.js";
import { getEslintReactConfig } from "./configs/react.js";
import { getEslintTypescriptConfig } from "./configs/typescript.js";
import { withFiles } from "./withFiles.js";

export {
	getEslintBaseConfig,
	getEslintBrowserConfig,
	getEslintCommonJsConfig,
	getEslintNextConfig,
	getEslintNodeConfig,
	getEslintReactConfig,
	getEslintTypescriptConfig,
	withFiles
};

/**
 * @param {import("./configs/internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintConfig = (options) =>
	config(
		...getEslintBaseConfig(options),
		...(options.browser ? getEslintBrowserConfig(options) : []),
		...(options.node ? getEslintNodeConfig(options) : [])
	);

export default getEslintConfig;
