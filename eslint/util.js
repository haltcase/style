export const nameCompatConfigs = (name, configs) =>
	configs.map((config) => ({ name, ...config }));
