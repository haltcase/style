import type { UserConfig } from "vite-plus";

import { createOxfmtConfig } from "../oxfmt/index.ts";
import type { CreateOxlintConfigOptions } from "../oxlint/index.ts";
import { createOxlintConfig } from "../oxlint/index.ts";

interface CreateVitePlusConfigOptions extends Partial<UserConfig> {
	lintOptions?: CreateOxlintConfigOptions;
}

export const createVitePlusConfig = (options?: CreateVitePlusConfigOptions): UserConfig => ({
	...options,
	fmt: createOxfmtConfig(options?.fmt),
	lint: {
		...createOxlintConfig(options?.lintOptions),
		...options?.lint
	}
});
