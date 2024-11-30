export const ecmaVersion = 2021;

export const commonJsOnlyFiles = ["**/*.cjs"];
export const commonJsFiles = ["**/*.{c,}js"];
export const javascriptFiles = ["**/*.{m,}js{x,}"];
export const typescriptFiles = ["**/*.{m,}ts{x,}"];
export const javascriptJsxFiles = ["**/*.{m,}jsx"];
export const typescriptJsxFiles = ["**/*.{m,}tsx"];
export const jsxFiles = ["**/*.{c,m,}{js,ts}x"];

export const configFiles = ["**/*.config.{m,}{js,ts}"];
export const scriptFiles = ["**/scripts/*", "**/prisma/*"];

export const nextJsPageFiles = ["**/{pages,app}/**/*.{m,}{js,ts}x"];
export const nextJsApiRoutes = [
	"**/pages/api/**/*.{m,}{js,ts}",
	"**/app/**/route.{m,}{js,ts}x"
];
export const nextJsMetadataFiles = [
	"**/app/{apple-,}icon.{js,ts}x",
	"**/app/manifest.{js,ts}",
	"**/app/robots.{js,ts}",
	"**/app/sitemap.{js,ts}",
	"**/app/{opengraph,twitter}-image.{js,ts}x"
];

export const allSupportedFiles = ["**/*.{c,m,}{js,ts}{x,}"];
