import type { OxlintConfig } from "oxlint";

const disabledRules = {
	"import/group-exports": "off",
	"import/exports-last": "off",
	"import/no-anonymous-default-export": "off",
	"import/no-named-export": "off",
	"import/no-nodejs-modules": "off",
	"import/no-relative-parent-imports": "off",
	"import/prefer-default-export": "off"
} satisfies OxlintConfig["rules"];

export const importRules = {
	...disabledRules,

	/**
	 * Disallow non-import statements appearing before import statements.
	 */
	"import/first": "error",
	"import/max-dependencies": [
		"error",
		{
			ignoreTypeImports: true,
			max: 50
		}
	],
	/**
	 * Require a newline after the last import.
	 */
	"import/newline-after-import": [
		"error",
		{
			considerComments: true,
			count: 1,
			exactCount: true
		}
	],
	/**
	 * Disallow import of modules using absolute paths.
	 */
	"import/no-absolute-path": "error",
	/**
	 * Disallow cyclical dependencies between modules.
	 */
	"import/no-cycle": "error",
	/**
	 * Disallow default exports.
	 */
	"import/no-default-export": "error",
	/**
	 * Combine separate imports of resolved paths.
	 */
	"import/no-duplicates": [
		"error",
		{
			considerQueryString: true
		}
	],
	/**
	 * Disallow the use of extraneous packages.
	 * NOT YET IMPLEMENTED - https://github.com/oxc-project/oxc/issues/1117
	 */
	// "import/no-extraneous-dependencies": ["error", { includeTypes: true }],
	/**
	 * Disallow mutable exports.
	 */
	"import/no-mutable-exports": "error",
	/**
	 * Disallow importing packages through relative paths.
	 * NOT YET IMPLEMENTED - https://github.com/oxc-project/oxc/issues/1117
	 */
	// "import/no-relative-packages": "error",
	"import/no-unassigned-import": [
		"error",
		{
			allow: ["**/*.css", "**/*.d.ts", "server-only"]
		}
	],
	/**
	 * Disallow a module from importing itself.
	 */
	"import/no-self-import": "error"
	/**
	 * Ensures that there are no useless path segments.
	 * NOT YET IMPLEMENTED - https://github.com/oxc-project/oxc/issues/1117
	 */
	// "import/no-useless-path-segments": ["error"]
} satisfies OxlintConfig["rules"];
