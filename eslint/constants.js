"use strict";

module.exports = {
	levels: {
		off: "off",
		warn: "warn",
		error: "error"
	},
	ecmaVersion: 2021,

	javascriptFiles: ["*.js?(x)", "*.mjs"],
	commonJsFiles: ["*.?(c)js"],
	typescriptFiles: ["*.ts?(x)"],

	nextJsPageFiles: ["**/{pages,app}/**/*.{m,}{js,ts}x"],
	nextJsApiRoutes: ["**/{pages,app}/api/**/*.{m,}{js,ts}"]
};
