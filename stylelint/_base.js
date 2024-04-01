// @ts-check

"use strict";

const defineConfig = require("stylelint-define-config").defineConfig;

module.exports = defineConfig({
	extends: [
		"stylelint-config-standard",
		"stylelint-config-html",
		"stylelint-config-clean-order"
	],
	rules: {
		"at-rule-empty-line-before": [
			"always",
			{
				except: ["blockless-after-same-name-blockless", "first-nested"],
				ignore: ["after-comment"]
			}
		],
		"custom-property-empty-line-before": [
			"always",
			{
				except: ["after-custom-property"],
				ignore: ["after-comment", "first-nested", "inside-single-line-block"]
			}
		],
		"declaration-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: [
					"after-comment",
					"after-declaration",
					"inside-single-line-block"
				]
			}
		],
		"rule-empty-line-before": [
			"always-multi-line",
			{
				except: ["first-nested"],
				ignore: ["after-comment"]
			}
		]
	}
});
