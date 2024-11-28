declare module "eslint-plugin-react-hooks" {
	import type { ESLint, Linter } from "eslint";

	const defaultExport: ESLint.Plugin & {
		configs: {
			recommended: Linter.Config;
		};
	};

	export = defaultExport;
}
