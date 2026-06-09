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

type OxlintPassthroughOptions = Omit<OxlintConfig, "overrides">;

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
	 * Add, remove, or otherwise reconfigure rules for specific files or groups of files.
	 * These overrides supercede any rules configured by preset options (e.g., `node` or `react`).
	 */
	overrides?: OxlintOverride[];
}

export const createOxlintConfig = (options: CreateOxlintConfigOptions = {}): OxlintConfig => {
	const {
		env,
		extends: userExtends = [],
		globals,
		ignorePatterns: userIgnores = [],
		options: lintOptions,
		overrides = [],
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

	if (isTypescriptEnabled) configs.push(...typescriptConfig);
	if (isReactEnabled) configs.push(...reactConfig);
	if (isNodeEnabled) configs.push(...nodeConfig);
	if (isTestingEnabled) configs.push(...testingConfig);
	if (isNextEnabled) configs.push(...nextConfig);
	if (isTanstackRouterEnabled) configs.push(...tanstackRouterConfig);
	if (isTanstackStartEnabled) configs.push(...tanstackStartConfig);

	const ignorePatterns = [...userIgnores];

	return {
		env,
		extends: configs,
		globals,
		ignorePatterns,
		overrides,
		options: {
			typeAware: isTypescriptEnabled,
			typeCheck: isTypescriptEnabled,
			...lintOptions
		},
		settings
	};
};
