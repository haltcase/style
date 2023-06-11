"use strict";

const { commonJsFiles, commonJsOverrides } = require("./constants");

module.exports = {
	overrides: [
		{
			files: commonJsFiles,
			...commonJsOverrides
		}
	]
};
