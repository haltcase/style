import { config } from "typescript-eslint";

import { getEslintBrowserConfigInternal } from "./configs/browser.js";
import { getEslintBaseConfig } from "./configs/internal/base.js";
import { getEslintNextConfigInternal } from "./configs/next.js";
import { getEslintNodeConfigInternal } from "./configs/node.js";
import { getEslintReactConfigInternal } from "./configs/react.js";

/**
 * @param {import("./configs/internal/base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintConfig = (options) =>
	config(
		...getEslintBaseConfig(options),
		...(options.browser ? getEslintBrowserConfigInternal(options) : []),
		...(options.node ? getEslintNodeConfigInternal(options) : []),

		...(options.nextjs ? getEslintNextConfigInternal(options) : []),
		...(options.react && !options.nextjs
			? getEslintReactConfigInternal(options)
			: [])
	);

// eslint-disable-next-line import-x/no-default-export
export default getEslintConfig;

export { getEslintBrowserConfig } from "./configs/browser.js";
export { getEslintCommonJsConfig } from "./configs/cjs.js";
export { getEslintNextConfig } from "./configs/next.js";
export { getEslintNodeConfig } from "./configs/node.js";
export { getEslintReactConfig } from "./configs/react.js";
export { getEslintTypescriptConfig } from "./configs/typescript.js";
export { withFiles } from "./withFiles.js";
