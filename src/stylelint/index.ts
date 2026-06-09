import { defineConfig } from "stylelint-define-config";

import { stylelintBase } from "./_base.ts";

export default defineConfig({
	...stylelintBase,

	rules: {
		...stylelintBase.rules,

		// Disable identifier casing rules
		// Variant presets like `modules` and `standard` can be used to enable these
		"custom-media-pattern": null,
		"custom-property-pattern": null,
		"keyframes-name-pattern": null,
		"selector-class-pattern": null
	}
});
