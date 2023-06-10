"use strict";

const {
	commonJsFiles,
	levels: { error, off }
} = require("./constants");

module.exports = {
	overrides: [
		{
			files: commonJsFiles,
			parserOptions: {
				sourceType: "script"
			},
			rules: {
				strict: [error, "global"],
				"unicorn/prefer-module": off
			}
		}
	]
};
