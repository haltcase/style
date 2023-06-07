const {
	levels: { error }
} = require("../constants");

module.exports = {
	rules: {
		/**
		 * Enforce import sort order.
		 *
		 * 🔧 Fixable - https://github.com/lydell/eslint-plugin-simple-import-sort#imports
		 */
		"simple-import-sort/imports": error,
		/**
		 * Enforce export sort order.
		 *
		 * 🔧 Fixable - https://github.com/lydell/eslint-plugin-simple-import-sort#exports
		 */
		"simple-import-sort/exports": error
	}
};
