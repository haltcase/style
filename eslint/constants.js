"use strict";

module.exports = {
	levels: {
		off: "off",
		warn: "warn",
		error: "error"
	},
	ecmaVersion: 2021,

	commonJsFiles: ["*.?(c)js"],
	javascriptFiles: ["*.js?(x)", "*.mjs"],
	typescriptFiles: ["*.ts?(x)"],

	configFiles: ["**/*.config.{m,}{js,ts}"],
	scriptFiles: [["**/scripts/*", "**/prisma/*"]],

	nextJsPageFiles: ["**/{pages,app}/**/*.{m,}{js,ts}x"],
	nextJsApiRoutes: ["**/{pages,app}/api/**/*.{m,}{js,ts}"]
};
