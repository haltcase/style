import { defineConfig } from "stylelint-define-config";

export default defineConfig({
	extends: "@dreamsicle.io/stylelint-config-tailwindcss",
	rules: {
		"media-query-no-invalid": [
			true,
			{
				ignoreFunctions: ["theme"]
			}
		]
	}
});
