import { config } from "typescript-eslint";

import { commonJsFiles, commonJsOnlyFiles } from "../../constants.js";

/**
 * @param {import("./base.js").HaltcaseStyleOptions} [options]
 */
export const getEslintCommonJsConfig = (options = {}) =>
	config({
		name: "@haltcase/internal/CommonJS files",

		files: options.commonjs ? commonJsFiles : commonJsOnlyFiles,
		languageOptions: {
			parserOptions: {
				sourceType: "script"
			}
		},
		rules: {
			strict: ["error", "global"],
			"unicorn/prefer-module": "off"
		}
	});
