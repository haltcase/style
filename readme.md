# `@haltcase/style` &middot; [![npm version](https://img.shields.io/npm/v/@haltcase/style?style=flat-square)](https://www.npmjs.com/package/@haltcase/style) [![license](https://img.shields.io/npm/l/@haltcase/style?style=flat-square)](https://www.npmjs.com/package/@haltcase/style) [![@haltcase/style](https://img.shields.io/static/v1?label=style&message=haltcase&color=0ca5ed&style=flat-square)](https://haltcase.dev/style)

> Style guide and configurations for tools in the web ecosystem.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)
- [Stylelint](#stylelint)

> This package originated from [Vercel's style guide](https://github.com/vercel/style-guide),
> but has since diverged in both architecture and rules.

## installation

Install `@haltcase/style` with your preferred package manager:

```sh
# pnpm
pnpm add --save-dev @haltcase/style

# npm
npm i --save-dev @haltcase/style

# yarn
yarn add --dev @haltcase/style
```

> [!NOTE]
> Some scenarios require additional peer dependencies.
> See the [Prettier](#prettier), [ESLint](#eslint), and [Stylelint](#stylelint) sections.

## usage

### Prettier

> [!NOTE]
> Prettier is a peer dependency you'll need to install
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

Add the following in `package.json`:

```json
{
	"prettier": "@haltcase/style/prettier"
}
```

### ESLint

> [!NOTE]
> ESLint is a peer dependency you'll need to install
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

> [!IMPORTANT]
> This config requires ESLint 9+ and the use of
> [flat config](https://eslint.org/docs/latest/extend/plugin-migration-flat-config).

At its simplest, your config might look like this for a general purpose
project:

```js
// eslint.config.js
import { getEslintConfig } from "@haltcase/style/eslint";

export default getEslintConfig();
```

TypeScript support is enabled by default by applying TypeScript-specific
configurations to files with TypeScript file extensions
(`ts`, `tsx`, `mts`, and `mtsx`). You may need to apply your own project-specific
configurations &mdash; see [Configuring ESLint for TypeScript](#configuring-eslint-for-typescript)
for details on how to do so.

#### ESLint customization

You can enable more rules for your project with configuration options:

```js
// eslint.config.js
import { getEslintConfig } from "@haltcase/style/eslint";

export default getEslintConfig({
	// for browser environments
	browser: true,

	// treat *.js files as CommonJS instead of ES Modules
	commonjs: true,

	// for Next.js projects (implies `react`)
	nextjs: true,

	// for Node.js projects
	node: true,

	// for React
	react: true
});
```

And, of course, you may include configs as any part of a larger one:

```js
// eslint.config.js
import { getEslintConfig } from "@haltcase/style/eslint";

export default [
	...getEslintConfig({
		nextjs: true
	}),

	{
		name: "Customizations",
		files: ["src/lib/**"],
		rules: {
			"no-unused-vars": "warn"
		}
	}
];
```

You can be more granular with your customizations by using the modular configs
also exported from `@haltcase/style/eslint`:

```js
// eslint.config.js
import {
	getEslintBaseConfig,
	getEslintBrowserConfig,
	getEslintNodeConfig,
	getEslintReactConfig,
	withFiles
} from "@haltcase/style/eslint";

export default [
	// use the base config for everything by default
	...getEslintBaseConfig(),

	// apply browser rules to some files
	...getEslintBrowserConfig().map((config) => ({
		...config,
		files: ["src/client-only/**/*.js"]
	})),

	// apply React rules to some files
	// (`withFiles` is equivalent to the above `map`)
	...withFiles(getEslintReactConfig(), ["src/frontend/**/*.{ts,js,tsx,jsx}"]),

	...withFiles(getEslintNodeConfig(), ["src/backend/**/*.{ts,js}"]),

	{
		name: "Customizations",
		files: ["src/lib/**"],
		rules: {
			"no-unused-vars": "warn"
		}
	}
];
```

> [!TIP]
> See the ESLint documentation for more details on using configs:
> https://eslint.org/docs/latest/use/configure/combine-configs

#### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type
information. By default, this config will configure `parserOptions` with
[`project: true`](https://typescript-eslint.io/packages/parser/#project).

You can customize this behavior with the `typescriptProject` option:

```js
import { getEslintConfig } from "@haltcase/style/eslint";

export default [
	...getEslintConfig({
		typescriptProject: [
			"./packages/**/tsconfig.json",
			"./separate-package/tsconfig.json"
		]
	})
];
```

If you need to further customize the TypeScript behavior, use a separate config
with your own options, for example:

```js
import { getEslintConfig } from "@haltcase/style/eslint";

export default [
	...getEslintConfig(),

	{
		files: ["*.{c,m,}ts{x,}"],
		parserOptions: {
			project: true,
			tsConfigRootDir: "/custom/config/directory"
		}
	}
];
```

For more information, see: https://typescript-eslint.io/linting/typed-linting/

#### Configuring custom components for `jsx-a11y`

It's common practice for React apps to have shared components like `Button`
that wrap native elements. You can pass this information along to `jsx-a11y`
via the `components` setting.

The below list is not exhaustive.

```js
import { getEslintConfig } from "@haltcase/style/eslint";

export default [
	getEslintConfig({
		react: true
	}),

	{
		settings: {
			"jsx-a11y": {
				components: {
					Article: "article",
					Button: "button",
					Image: "img",
					Input: "input",
					Link: "a",
					Video: "video"
				}
			}
		}
	}
];
```

##### A note on file extensions

By default, all TypeScript rules are scoped to files with extensions ending in
`ts` or `tsx`.

If you need to override configuration for TypeScript files, make sure to
specify the `files` property or ESLint will
[only target `*.js` files](https://eslint.org/docs/latest/use/configure/configuration-files#specifying-files-and-ignores).

```js
export default [
	...getEslintConfig(),

	{
		// apply this config to js, ts, jsx, and tsx files
		files: ["directory/**/*.[jt]s?(x)"],
		rules: {
			"my-rule": "off"
		}
	}
];
```

### TypeScript

Several Typescript configs are available to cover various scenarios:

| Name                                 | Description                                                                                          |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `@haltcase/style/typescript/base`    | Baseline config, intended to be extended from.                                                       |
| `@haltcase/style/typescript/bundler` | For use in bundled projects, most commonly [Vite](https://vitejs.dev/) + [React](https://react.dev). |
| `@haltcase/style/typescript/next`    | For use in [Next.js](https://nextjs.org/) projects.                                                  |
| `@haltcase/style/typescript/node`    | Default Node config, currently targeting Node 22.                                                    |
| `@haltcase/style/typescript/node18`  | For projects targeting Node 18.                                                                      |
| `@haltcase/style/typescript/node20`  | For projects targeting Node 20.                                                                      |
| `@haltcase/style/typescript/node22`  | For projects targeting Node 22.                                                                      |
| `@haltcase/style/typescript/web`     | For use in web projects.                                                                             |

Typically, you'll only need to extend from one of these:

```json
{
	"extends": "@haltcase/style/typescript/next"
}
```

You could also combine them with an `extends` array in [Typescript 5+](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/#supporting-multiple-configuration-files-in-extends):

```json
{
	"extends": [
		"@haltcase/style/typescript/node",
		"@haltcase/style/typescript/web"
	]
}
```

> [!TIP]
> Run `tsc --showConfig` to see the result of the combined configs.

#### TypeScript includes, excludes, and `paths` aliases

Some TypeScript configs set `include`, `exclude`, and `paths` for you with
common options. Currently:

| Name                                 | Description                                                                       |
| ------------------------------------ | --------------------------------------------------------------------------------- |
| `@haltcase/style/typescript/bundler` | Includes `@/*` → `src/*` path alias.                                              |
| `@haltcase/style/typescript/next`    | Includes `@/*` → `src/*` path alias and Next.js `include` and `exclude` settings. |

### Stylelint

To format and check CSS with Stylelint, install the `stylelint` package and
set your configuration to extend from `@haltcase/style/stylelint`.

> [!NOTE]
> Stylelint is a peer dependency you'll need to install
> at the root of your project.
>
> See: https://stylelint.io/user-guide/get-started

Add the following in `package.json`:

```json
{
	"stylelint": {
		"extends": "@haltcase/style/stylelint"
	}
}
```

> [!TIP]
> See the [Stylelint documentation](https://stylelint.io/user-guide/configure)
> for other configuration options.

#### Stylelint configs

There are several configs you can extend from. The default config does not
enforce a specific naming convention for classes, IDs, etc. This is intended
to allow flexibility between conventional CSS, where `kebab-case` is standard,
and CSS Modules or CSS-in-JS, where `camelCase` is more common.

There are alternate entry points if you would like to enforce a specific naming
convention: `standard` for kebab case and `modules` for camel case.

| Name                                 | Description                                         |
| ------------------------------------ | --------------------------------------------------- |
| `@haltcase/style/stylelint`          | Do not enforce a naming convention for identifiers. |
| `@haltcase/style/stylelint/modules`  | Enforce `camelCase` identifiers.                    |
| `@haltcase/style/stylelint/standard` | Enforce conventional `kebab-case` identifiers.      |

## contributing

Please read our [contributing](https://github.com/haltcase/style/blob/main/CONTRIBUTING.md)
guide before creating a pull request.
