export const playwrightTestRules = {
	/**
	 * Require lowercase test names.
	 *
	 * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
	 */
	"playwright/prefer-lowercase-title": "error",
	/**
	 * Require using `toHaveLength` over explicitly checking lengths.
	 *
	 * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
	 */
	"playwright/prefer-to-have-length": "error",
	/**
	 * Require test cases and hooks to be inside a `test.describe` block.
	 *
	 * 🚫 Not fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
	 */
	"playwright/require-top-level-describe": "error"
};
