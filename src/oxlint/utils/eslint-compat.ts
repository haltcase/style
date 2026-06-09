import type { DummyRule, DummyRuleMap, ExternalPluginEntry } from "oxlint";

type PartialRuleMap = Partial<DummyRuleMap> | undefined;

export const resolveRuleMap = (rules: PartialRuleMap): DummyRuleMap => {
	if (!rules) {
		return {};
	}

	return Object.fromEntries(
		Object.entries(rules).flatMap(([ruleName, ruleConfig]) => {
			if (ruleConfig === undefined) {
				return [];
			}

			let resolvedRuleConfig: DummyRule = "error";

			if (Array.isArray(ruleConfig)) {
				const [_firstElement, ...rest] = ruleConfig;
				resolvedRuleConfig = ["error", ...rest];
			} else {
				// Keep disabled rules disabled
				if (ruleConfig === "off" || ruleConfig === 0) {
					resolvedRuleConfig = "off";
				}

				// Treat all other rules as errors
				resolvedRuleConfig = "error";
			}

			return [[ruleName, resolvedRuleConfig]];
		})
	);
};

export const resolveJsPlugin = (name: string, specifier: string = name): ExternalPluginEntry => {
	const strippedName = name.replace(/^eslint-plugin-/, "");

	try {
		const resolved = import.meta.resolve(specifier);

		return {
			name: strippedName,
			specifier: resolved
		};
	} catch {
		return {
			name: strippedName,
			specifier
		};
	}
};
