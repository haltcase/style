import { defineConfig } from "eslint/config";

import { commonJsFiles, commonJsOnlyFiles } from "../../constants.js";

/**
 * @type {import("./base.js").HaltcaseStyleCreator}
 */
export const getEslintCommonJsConfigInternal = (options = {}) =>
	defineConfig({
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
