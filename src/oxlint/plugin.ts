import { definePlugin } from "@oxlint/plugins";

import { paddingBetweenStatements } from "./vendor/gnkz/rules/padding-between-statements.ts";

const plugin = definePlugin({
	meta: { name: "haltcase" },
	rules: {
		"padding-between-statements": paddingBetweenStatements
	}
});

export default plugin;
