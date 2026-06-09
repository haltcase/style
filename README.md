# `@haltcase/style` &middot; [![npm version](https://img.shields.io/npm/v/@haltcase/style?style=flat-square)](https://npmx.dev/package/@haltcase/style) [![license](https://img.shields.io/npm/l/@haltcase/style?style=flat-square)](https://npmx.dev/package/@haltcase/style) [![@haltcase/style](https://img.shields.io/static/v1?label=style&message=haltcase&color=0ca5ed&style=flat-square)](https://haltcase.dev/style)

> Style guide and configurations for tools in the web ecosystem.

- [Oxlint](#oxlint)
- [Oxfmt](#oxfmt)
- [TypeScript](#typescript)
- [Stylelint](#stylelint)
- [Vite+](#vite)

> [!NOTE]
>
> This package only provides configurations. To use them, you must also install relevant tools like
> Oxlint and Oxfmt (or Vite+ which includes both).

## Installation

Install `@haltcase/style` with your preferred package manager:

```shell
pnpm add --save-dev @haltcase/style
```

This package enables rules that require Oxlint v1.73.0+. If you're using Vite+, you may need to add
an override to ensure the correct version of Oxlint is used. For example, with pnpm, add the
following to your `pnpm-workspace.yaml`:

```yaml
overrides:
  "vite-plus>oxlint": "^1.73.0"
```

Additionally, it uses ESLint `jsPlugins` that require TypeScript 6. If you otherwise use TypeScript
7, you'll need to configure package aliases to install
[TypeScript 7 and TypeScript 6 side by side](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-rc/#running-side-by-side-with-typescript-6.0):

```json
{
	"devDependencies": {
		"typescript": "npm:@typescript/typescript6@^6.0.0",
		"typescript-7": "npm:typescript@rc"
	}
}
```

## Usage

### Oxlint

```js
// oxlint.config.ts
import createOxlintConfig from "@haltcase/style/oxlint";

export default createOxlintConfig({
	node: true
});
```

Then, run `pnpm oxlint`.

### Oxfmt

```js
// oxfmt.config.ts
import createOxfmtConfig from "@haltcase/style/oxfmt";

export default createOxfmtConfig();
```

Then, run `pnpm oxfmt`.

### Vite+

If you use Vite+, configure both Oxlint and Oxfmt in `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from "vite-plus";
import { createOxfmtConfig, createOxlintConfig } from "@haltcase/style";

export default defineConfig({
	fmt: createOxfmtConfig(),
	lint: createOxlintConfig({
		node: true,
		react: true
	})
});
```

Then, run `vp check`.

### TypeScript

Several Typescript configs are available to cover various scenarios:

| Name                                 | Description                                                                                              |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `@haltcase/style/typescript/base`    | Baseline config, intended to be extended from.                                                           |
| `@haltcase/style/typescript/bundler` | For use in bundled projects, most commonly [Vite](https://vitejs.dev/) + [React](https://react.dev).     |
| `@haltcase/style/typescript/next`    | For use in [Next.js](https://nextjs.org/) projects. See the [Next.js](#nextjs) section for more details. |
| `@haltcase/style/typescript/node`    | Default Node config, currently targeting Node 24.                                                        |
| `@haltcase/style/typescript/node-ts` | Addon for other Node configs for use with Node's built-in TypeScript support.                            |
| `@haltcase/style/typescript/node22`  | For projects targeting Node 22.                                                                          |
| `@haltcase/style/typescript/node24`  | For projects targeting Node 24.                                                                          |
| `@haltcase/style/typescript/web`     | For use in web projects.                                                                                 |

Typically, you'll only need to extend from one of these:

```jsonc
// tsconfig.json
{
	"extends": "@haltcase/style/typescript/node"
}
```

You can also combine them with an `extends` array:

```jsonc
// tsconfig.json
{
	"extends": ["@haltcase/style/typescript/node", "@haltcase/style/typescript/web"]
}
```

> [!TIP]
>
> Run `tsc --showConfig` to see the result of the combined configs.

### Stylelint

To format and check CSS with Stylelint, install the `stylelint` package and set your configuration
to extend from `@haltcase/style/stylelint`.

> [!NOTE]
>
> Stylelint is a peer dependency you'll need to install at the root of your project.
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
>
> See the [Stylelint documentation](https://stylelint.io/user-guide/configure) for other
> configuration options.

#### Stylelint configs

There are several configs you can extend from. The default config does not enforce a specific naming
convention for classes, IDs, etc. This is intended to allow flexibility between conventional CSS,
where `kebab-case` is standard, and CSS Modules or CSS-in-JS, where `camelCase` is more common.

There are alternate entry points if you would like to enforce a specific naming convention:
`standard` for kebab case and `modules` for camel case.

| Name                                 | Description                                         |
| ------------------------------------ | --------------------------------------------------- |
| `@haltcase/style/stylelint`          | Do not enforce a naming convention for identifiers. |
| `@haltcase/style/stylelint/modules`  | Enforce `camelCase` identifiers.                    |
| `@haltcase/style/stylelint/standard` | Enforce conventional `kebab-case` identifiers.      |

##### Tailwind

If you use Tailwind, you can additionally extend from `@haltcase/style/stylelint/tailwind`:

```json
{
	"stylelint": {
		"extends": ["@haltcase/style/stylelint", "@haltcase/style/stylelint/tailwind"]
	}
}
```

### Specific workloads

#### Next.js

For Next.js projects, the `next` option defaults to `true` when the `next` package is detected.
However, you can set it manually:

```ts
// oxlint.config.ts
import createOxlintConfig from "@haltcase/style/oxlint";

export default createOxlintConfig({
	next: true
});
```

See the [Oxlint section](#oxlint) for more details.

If you're using TypeScript, you can extend from the Next.js-specific config:

```jsonc
// tsconfig.json
{
	"extends": "@haltcase/style/typescript/next"
}
```

#### TanStack Start and Router

For TanStack Start and Router projects, the `tanstackStart` and `tanstackRouter` options default to
`true` when the necessary packages are detected. However, you can set them manually:

```ts
// oxlint.config.ts
import createOxlintConfig from "@haltcase/style/oxlint";

export default createOxlintConfig({
	// Defaults to true if `@tanstack/react-router` and `@tanstack/eslint-plugin-router` are installed.
	tanstackRouter: true,
	// Defaults to true if `tanstackRouter` packages and `@tanstack/react-start` are installed.
	tanstackStart: true
});
```

See the [Oxlint section](#oxlint) for more details.

If you're using TypeScript, you can extend from the standard bundler config:

```jsonc
// tsconfig.json
{
	"extends": "@haltcase/style/typescript/bundler"
}
```
