// @ts-check

import { config } from "typescript-eslint";

import { getEslintNodeConfig } from "./eslint/configs/node.js";

export default config(
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
