declare module "@eslint-community/eslint-plugin-eslint-comments" {
	import type { ESLint, Linter } from "eslint";

	const defaultExport: ESLint.Plugin & {
		configs: {
			recommended: Linter.Config;
		};
	};

	export = defaultExport;
}
