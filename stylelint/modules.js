// @ts-check

"use strict";

const defineConfig = require("stylelint-define-config").defineConfig;

const base = require("./_base.js");

const camelCaseRegex = /^(?<=^|[^A-Z_a-z])_*[a-z]+[A-Z_a-z]*$/;

module.exports = defineConfig({
	...base,

	rules: {
		...base.rules,

		"custom-media-pattern": camelCaseRegex,

		// custom properties (variables) should still be kebab-case
		// "custom-property-pattern": camelCaseRegex,

		"keyframes-name-pattern": camelCaseRegex,
		"selector-class-pattern": camelCaseRegex
	}
});
