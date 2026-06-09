import { basename, resolve } from "node:path";

import { createOxfmtConfig } from "@haltcase/style/oxfmt";
import { createOxlintConfig } from "@haltcase/style/oxlint";
import { defineConfig } from "vite-plus";

export const packagePath = (isPublish: boolean, subPath: string): string =>
	isPublish ? `./dist/${subPath.replace(/\.ts$/, ".js")}` : `./src/${subPath}`;

const browserPatterns = ["packages/**/{browser,*.browser}.test.ts"];
const nodeModulesPatterns = ["**/node_modules/**"];

export default defineConfig({
	resolve: {
		tsconfigPaths: true
	},
	fmt: createOxfmtConfig(),
	lint: createOxlintConfig({
		node: true,
		overrides: [
			{
				files: [".github/scripts/**/*.ts", "scripts/**/*.ts"],
				rules: {
					"node/no-sync": "off",
					"no-console": "off"
				}
			},

			{
				files: ["src/stylelint/*.ts"],
				excludeFiles: ["src/stylelint/_*.ts"],
				rules: {
					"import/no-default-export": "off"
				}
			}
		]
	}),
	pack: {
		attw: {
			profile: "esm-only",
			excludeEntrypoints: ["./.editorconfig"]
		},
		copy: ["src/typescript", "src/editorconfig/.editorconfig"],
		deps: {
			skipNodeModulesBundle: true
		},
		dts: true,
		entry: ["src/**/*.{js,ts,jsx,tsx}"],
		exports: {
			devExports: true,
			customExports: (exports, context) => {
				exports["./typescript/*"] = packagePath(context.isPublish, "typescript/tsconfig.*.json");
				exports["./.editorconfig"] = packagePath(context.isPublish, "editorconfig/.editorconfig");

				for (const entrypoint in exports) {
					// Treat entrypoint filenames that start with an underscore as
					// private and do not export
					if (basename(entrypoint).startsWith("_")) {
						delete exports[entrypoint];
					}
				}

				return exports;
			}
		},
		fixedExtension: false,
		// Disable hashing because it makes no sense in a library. We want the output
		// to be stable and not change with every build.
		hash: false,
		shims: true,
		tsconfig: resolve(import.meta.dirname, "./tsconfig.json"),
		unbundle: true,
		workspace: true
	},
	staged: {
		"*": "vp check --fix"
	},
	test: {
		projects: [
			{
				extends: true,
				test: {
					name: "node",
					include: ["packages/**/*.test.ts"],
					exclude: [...browserPatterns, ...nodeModulesPatterns],
					environment: "node"
				}
			},
			{
				extends: true,
				test: {
					name: "browser",
					include: browserPatterns,
					exclude: nodeModulesPatterns,
					environment: "jsdom"
				},
				resolve: {
					conditions: ["browser"],
					mainFields: ["browser", "module", "main"]
				}
			}
		]
	}
});
