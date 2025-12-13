/**
 * @import { type TypeScriptResolverOptions } from "eslint-import-resolver-typescript"
 */

/**
 * @typedef {Object} TypeScriptProjectConfig
 * @property {import("@typescript-eslint/types").ParserOptions} parserOptions
 * @property {TypeScriptResolverOptions} resolverOptions
 */

/**
 * @param {import("../base.js").TypeScriptProjectOptions} projectInput
 * @returns {TypeScriptProjectConfig}
 */
export const prepareTypeScriptProjectConfig = (projectInput) => {
	// eslint-disable-next-line unicorn/prefer-default-parameters -- default parameters don't handle `null`
	const project = projectInput ?? true;

	if (typeof project === "string" || Array.isArray(project)) {
		return {
			parserOptions: {
				project
			},
			resolverOptions: {
				project
			}
		};
	}

	if (typeof project === "object" && project !== null) {
		return {
			parserOptions: {
				projectService: project.projectService
			},
			resolverOptions: {
				project: project.tsconfigPaths
			}
		};
	}

	if (typeof project !== "boolean") {
		throw new TypeError(
			"Invariant violation: expected project to be a boolean"
		);
	}

	return {
		parserOptions: {
			project
		},
		resolverOptions: {}
	};
};
