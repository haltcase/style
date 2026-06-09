import { readFileSync } from "node:fs";

export const getEditorconfig = (): string =>
	// oxlint-disable-next-line node/no-sync -- synchronous read for initialization is ok for now (use import type "bytes" when available)
	readFileSync(new URL("../.editorconfig", import.meta.url), "utf8");
