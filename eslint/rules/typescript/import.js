/**
 * @import { Linter } from "eslint"
 */

/**
 * These are enabled by `import-x/recommended`, but are better handled by
 * TypeScript and `typescript-eslint`.
 *
 * @type {Linter.RulesRecord}
 */
const disabledRules = {
	"import-x/default": "off",
	"import-x/export": "off",
	"import-x/namespace": "off",
	"import-x/no-unresolved": "off"
};

/**
 * @type {Linter.RulesRecord}
 */
export const typescriptImportRules = {
	...disabledRules
};
