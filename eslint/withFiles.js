/**
 * @import { Linter } from "eslint"
 */

/**
 *
 * @param {Linter.Config[]} configArray
 * @param {string[]} files
 * @returns {Linter.Config[]}
 */
export const withFiles = (configArray, files) =>
	configArray.map((config) => ({
		...config,
		files
	}));
