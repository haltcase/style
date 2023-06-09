"use strict";

const {
	levels: { error }
} = require("../constants");

module.exports = {
	plugins: ["eslint-plugin-tsdoc"],
	rules: {
		/**
		 * Require TSDoc comments conform to the TSDoc specification.
		 *
		 * 🚫 Not fixable - https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
		 */
		"tsdoc/syntax": error
	}
};
