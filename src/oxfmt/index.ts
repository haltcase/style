import { toMerged } from "es-toolkit";
import { isPackageExists } from "local-pkg";
import type { OxfmtConfig } from "oxfmt";

const defaults: Required<OxfmtConfig> = {
	arrowParens: "always",
	bracketSameLine: true,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	ignorePatterns: [
		".agent/skills",
		".changeset",
		"pnpm-lock.yaml",
		"yarn.lock",
		"package-lock.json"
	],
	insertFinalNewline: true,
	jsdoc: false,
	jsxSingleQuote: false,
	objectWrap: "preserve",
	overrides: [],
	printWidth: 100,
	proseWrap: "always",
	quoteProps: "as-needed",
	semi: true,
	singleAttributePerLine: false,
	singleQuote: false,
	sortImports: {},
	sortPackageJson: {
		sortScripts: true
	},
	sortTailwindcss: {
		attributes: ["classNames"],
		functions: ["clsx", "cn", "cx", "twMerge"]
	},
	svelte: false,
	tabWidth: 2,
	trailingComma: "none",
	useTabs: true,
	vueIndentScriptAndStyle: false
};

export type OxfmtInputConfig = OxfmtConfig | ((defaults: OxfmtConfig) => OxfmtConfig);

export const createOxfmtConfig = (options: OxfmtInputConfig = {}): OxfmtConfig => {
	const defaultOptions = structuredClone(defaults);

	if (isPackageExists("svelte")) {
		defaultOptions.svelte = {};
	}

	if (isPackageExists("@tanstack/react-router")) {
		defaultOptions.ignorePatterns.push("**/routeTree.gen.ts");
	}

	if (typeof options === "function") {
		return options(defaultOptions);
	}

	return toMerged(defaultOptions, options);
};
