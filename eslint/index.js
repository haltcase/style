import { config } from "typescript-eslint";

import { getEslintBrowserConfig } from "./configs/browser.js";
import { getEslintBaseConfig } from "./configs/internal/base.js";
import { getEslintNodeConfig } from "./configs/node.js";

/**
 * @param {import("./configs/internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintConfig = (options) =>
	config(
		...getEslintBaseConfig(options),
		...(options.browser ? getEslintBrowserConfig(options) : []),
		...(options.node ? getEslintNodeConfig(options) : [])
	);

// eslint-disable-next-line import-x/no-default-export
export default getEslintConfig;

export { getEslintBrowserConfig } from "./configs/browser.js";
export { getEslintCommonJsConfig } from "./configs/cjs.js";
export { getEslintBaseConfig } from "./configs/internal/base.js";
export { getEslintNextConfig } from "./configs/next.js";
export { getEslintNodeConfig } from "./configs/node.js";
export { getEslintReactConfig } from "./configs/react.js";
export { getEslintTypescriptConfig } from "./configs/typescript.js";
export { withFiles } from "./withFiles.js";
