"use strict";

const {
	levels: { error }
} = require("./eslint/constants");

module.exports = {
	extends: ["./eslint/node", "./eslint/cjs"],
	overrides: [
		{
			files: ["eslint/rules/**"],
			rules: {
				"sort-keys": error
			}
		}
	]
};
