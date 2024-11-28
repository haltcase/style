declare module "eslint-plugin-jsx-a11y" {
	import type { ESLint, Linter } from "eslint";

	const defaultExport: ESLint.Plugin & {
		flatConfigs: {
			recommended: Linter.Config;
		};
	};

	export = defaultExport;
}
