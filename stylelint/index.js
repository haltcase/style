// @ts-check

"use strict";

const defineConfig = require("stylelint-define-config").defineConfig;

const base = require("./_base.js");

module.exports = defineConfig({
	...base,

	rules: {
		...base.rules,

		// disable identifier casing rules
		"custom-media-pattern": null,
		"custom-property-pattern": null,
		"keyframes-name-pattern": null,
		"selector-class-pattern": null
	}
});
