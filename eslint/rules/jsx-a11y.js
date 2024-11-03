/**
 * @import { Linter } from "eslint"
 */

/**
 * These are enabled by `jsx-a11y/recommended`, but we've made the decision to
 * disable them.
 *
 * @type {Linter.RulesRecord}
 */
const disabledRules = {
	// This rule has been deprecated, but not yet removed.
	"jsx-a11y/no-onchange": "off"
};

/**
 * @type {Linter.RulesRecord}
 */
export const jsxA11yRules = {
	...disabledRules
};
