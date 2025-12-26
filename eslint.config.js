// @ts-check

import { defineConfig } from "eslint/config";

import { getEslintNodeConfig } from "./eslint/configs/node.js";

export default defineConfig(
	...getEslintNodeConfig(),

	{
		name: "Rules dictionaries",
		files: ["eslint/rules/**"],
		rules: {
			"sort-keys": [
				"error",
				"asc",
				{
					allowLineSeparatedGroups: true
				}
			]
		}
	}
);
