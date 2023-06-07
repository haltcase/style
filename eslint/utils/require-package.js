// @ts-check
const pkgJson = require("../../package.json");

/**
 * @returns {string} The name of the package manager.
 */
const readPackageManager = () => {
	const match = process.env.npm_config_user_agent?.match(/^(?<pm>\w+)\//);
	return match?.groups ? match.groups?.pm : "npm";
};

/**
 * @param {string} configName
 * @param {string} packageName
 */
module.exports = (configName, packageName) => {
	try {
		require.resolve(packageName);
	} catch {
		const packageManager = readPackageManager();
		const command =
			packageManager === "yarn" || packageManager === "pnpm"
				? "add"
				: "install";
		const dev = packageManager === "yarn" ? "--dev" : "--save-dev";

		/* eslint-disable no-console */
		console.error(
			`The \`${configName}\` config requires an optional peer dependency, which has not been installed.`
		);
		console.error();
		console.error("To install it, run:");
		console.error(
			`- ${packageManager} ${command} ${dev} ${packageName}@${pkgJson.peerDependencies[packageName]}`
		);
		/* eslint-enable no-console */

		process.exit(1);
	}
};
