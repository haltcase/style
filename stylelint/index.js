// @ts-check
/* eslint-disable import-x/no-default-export */

import { defineConfig } from "stylelint-define-config";

import { stylelintBase } from "./_base.js";

export default defineConfig({
	...stylelintBase,

	rules: {
		...stylelintBase.rules,

		// disable identifier casing rules
		"custom-media-pattern": null,
		"custom-property-pattern": null,
		"keyframes-name-pattern": null,
		"selector-class-pattern": null
	}
});
