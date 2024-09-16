/**
 * These are enabled by `import-x/recommended`, but are better handled by
 * TypeScript and `typescript-eslint`.
 *
 * @type {import("eslint-define-config").Rules}
 */
const disabledRules = {
	"import-x/default": "off",
	"import-x/export": "off",
	"import-x/namespace": "off",
	"import-x/no-unresolved": "off"
};

/**
 * @type {import("eslint-define-config").Rules}
 */
export const typescriptImportRules = {
	...disabledRules
};
