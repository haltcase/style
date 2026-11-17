import { isPackageExists } from "local-pkg";
import type { OxlintConfig, OxlintOverride } from "oxlint";

import { baseConfig } from "./configs/base.ts";
import { nextConfig } from "./configs/next.ts";
import { nodeConfig } from "./configs/node.ts";
import { reactConfig } from "./configs/react.ts";
import { tanstackRouterConfig } from "./configs/tanstack-router.ts";
import { tanstackStartConfig } from "./configs/tanstack-start.ts";
import { testingConfig } from "./configs/testing.ts";
import { typescriptConfig } from "./configs/typescript.ts";

const reactPackages = [
	"react",
	"react-dom",
	// The following packages imply a React project; apply React rules to these apps.
	// `tanstackRouter` option remains opt-in because it requires the optional peer dep
	// `@tanstack/eslint-plugin-router`.
	"@tanstack/react-router",
	"@tanstack/react-start"
] as const;

export const tanstackPackages = [
	"@tanstack/react-router",
	"@tanstack/react-start",
	"@tanstack/eslint-plugin-router"
] as const;

const typescriptPackages = ["@typescript/native-preview", "typescript"] as const;

type OxlintPassthroughOptions = Omit<
	OxlintConfig,
	"categories" | "overrides" | "plugins" | "rules"
>;

export interface CreateOxlintConfigOptions extends OxlintPassthroughOptions {
	typescript?: boolean;
	react?: boolean;
	/**
	 * Enable rules for TanStack Router projects. This implies `react` and
	 * configures React rules as well.
	 */
	tanstackRouter?: boolean;
	/**
	 * Enable rules for TanStack Start projects. This implies `react` and
	 * `tanstackRouter` and configures those rules as well.
	 */
	tanstackStart?: boolean;
	/**
	 * Enable rules for Next.js projects. This implies `react` and configures React rules as well.
	 */
	next?: boolean;
	node?: boolean;
	testing?: boolean;
	/**
	 * Enable additional native plugins alongside the default and preset plugins.
	 */
	plugins?: OxlintConfig["plugins"];
	/**
	 * Configure rules for all files. These take precedence over rules set at the top level of
	 * extended configs and presets. Matching overrides take precedence over these rules.
	 */
	rules?: OxlintConfig["rules"];
	/**
	 * Add, remove, or otherwise reconfigure rules for specific files or groups of files.
	 * These overrides take precedence over matching preset overrides and top-level rules.
	 */
	overrides?: OxlintOverride[];
}

export const createOxlintConfig = (options: CreateOxlintConfigOptions = {}): OxlintConfig => {
	const {
		env,
		extends: userExtends = [],
		globals,
		ignorePatterns: userIgnores = [],
		jsPlugins,
		options: lintOptions,
		overrides = [],
		plugins: userPlugins,
		rules,
		settings,

		typescript: isTypescriptEnabled = typescriptPackages.some((pkg) => isPackageExists(pkg)),
		react: isReactEnabled = reactPackages.some((pkg) => isPackageExists(pkg)),
		tanstackRouter: isTanstackRouterEnabled = tanstackPackages
			.filter((pkg) => pkg !== "@tanstack/react-start")
			.every((pkg) => isPackageExists(pkg)),
		tanstackStart: isTanstackStartEnabled = tanstackPackages.every((pkg) => isPackageExists(pkg)),
		next: isNextEnabled = isPackageExists("next"),
		node: isNodeEnabled = false,
		testing: isTestingEnabled = false
	} = options;

	const configs: OxlintConfig[] = [...userExtends, ...baseConfig];

	if (isTypescriptEnabled) {
		configs.push(...typescriptConfig);
	}

	if (isReactEnabled) {
		configs.push(...reactConfig);
	}

	if (isNodeEnabled) {
		configs.push(...nodeConfig);
	}

	if (isTestingEnabled) {
		configs.push(...testingConfig);
	}

	if (isNextEnabled) {
		configs.push(...nextConfig);
	}

	if (isTanstackRouterEnabled) {
		configs.push(...tanstackRouterConfig);
	}

	if (isTanstackStartEnabled) {
		configs.push(...tanstackStartConfig);
	}

	if (userPlugins) {
		configs.push({ plugins: userPlugins });
	}

	const ignorePatterns = [...userIgnores];

	return {
		env,
		extends: configs,
		globals,
		ignorePatterns,
		jsPlugins,
		overrides,
		options: {
			typeAware: isTypescriptEnabled,
			typeCheck: isTypescriptEnabled,
			...lintOptions
		},
		rules,
		settings
	};
};
