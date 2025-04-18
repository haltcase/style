// @ts-check
/* eslint-disable import-x/no-default-export */

import { defineConfig } from "stylelint-define-config";

export default defineConfig({
	extends: "stylelint-config-tailwindcss",
	rules: {
		"at-rule-no-deprecated": [
			true,
			{
				ignoreAtRules: ["apply"]
			}
		]
	}
});
