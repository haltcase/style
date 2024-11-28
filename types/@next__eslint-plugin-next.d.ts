declare module "@next/eslint-plugin-next" {
	import type { ESLint, Linter } from "eslint";

	const defaultExport: ESLint.Plugin & {
		configs: {
			recommended: Linter.Config;
			["core-web-vitals"]: Linter.Config;
		};
	};

	export = defaultExport;
}
