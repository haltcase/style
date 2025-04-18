// @ts-check
/* eslint-disable import-x/no-default-export */

import { defineConfig } from "stylelint-define-config";

import { stylelintBase } from "./_base.js";

const camelCaseRegex = /^[a-z][a-zA-Z0-9]+$/;

export default defineConfig({
	...stylelintBase,

	rules: {
		...stylelintBase.rules,

		"custom-media-pattern": camelCaseRegex,

		// custom properties (variables) should still be kebab-case
		// "custom-property-pattern": camelCaseRegex,

		"keyframes-name-pattern": camelCaseRegex,
		"selector-class-pattern": camelCaseRegex,

		// allow the `:global` CSS Modules pseudo-class
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"]
			}
		]
	}
});
