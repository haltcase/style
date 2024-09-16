# `@haltcase/style` &middot; [![npm version](https://img.shields.io/npm/v/@haltcase/style?style=flat-square)](https://www.npmjs.com/package/@haltcase/style) [![license](https://img.shields.io/npm/l/@haltcase/style?style=flat-square)](https://www.npmjs.com/package/@haltcase/style) [![@haltcase/style](https://img.shields.io/static/v1?label=style&message=haltcase&color=0ca5ed&style=flat-square)](https://haltcase.dev/style)

> Style guide and configurations for tools in the web ecosystem.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)
- [Stylelint](#stylelint)

> This package originated from [Vercel's style guide](https://github.com/vercel/style-guide).

## installation

Install `@haltcase/style` with your preferred package manager:

```sh
# npm
npm i --save-dev @haltcase/style

# pnpm
pnpm i --save-dev @haltcase/style

# yarn
yarn add --dev @haltcase/style
```

> [!NOTE]
> Some scenarios require additional peer dependencies.
> See the [Prettier](#prettier) and [ESLint](#eslint) sections.

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

Several ESLint configs are available which can be combined.

Start with at least one of these base configs, which should always be first in `extends`:

- `@haltcase/style/eslint/browser`
- `@haltcase/style/eslint/node`

> [!TIP]
> You can scope configs so they only target specific files.
>
> See: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@haltcase/style/eslint/cjs`
- `@haltcase/style/eslint/next` (requires `@next/eslint-plugin-next` to be installed at the same version as `next`)
- `@haltcase/style/eslint/playwright-test`
- `@haltcase/style/eslint/react`
- `@haltcase/style/eslint/typescript` (requires `typescript` to be installed and [additional configuration](#configuring-eslint-for-typescript))

Be sure to use `require.resolve` to reference these configs &mdash; ESLint requires absolute paths ([eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

For example, to use the shared ESLint config(s) in a Next.js project, set the
following in `.eslintrc.js`.

```js
module.exports = {
	extends: [
		require.resolve("@haltcase/style/eslint/browser"),
		require.resolve("@haltcase/style/eslint/react"),
		require.resolve("@haltcase/style/eslint/next")
	]
};
```

#### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type
information, so you'll need to use `project: true` and `tsconfigRootDir` or
explicitly supply the path(s) to your `tsconfig.json` per the typescript-eslint
documentation.

For more information, see: https://typescript-eslint.io/linting/typed-linting/

```js
module.exports = {
	root: true,
	extends: [
		require.resolve("@haltcase/style/eslint/node"),
		require.resolve("@haltcase/style/eslint/typescript")
	],
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname
	},
	settings: {
		"import/resolver": {
			typescript: {
				project
			}
		}
	}
};
```

#### Configuring custom components for `jsx-a11y`

It's common practice for React apps to have shared components like `Button`
that wrap native elements. You can pass this information along to `jsx-a11y`
via the `components` setting.

The below list is not exhaustive.

```js
module.exports = {
	root: true,
	extends: [require.resolve("@haltcase/style/eslint/react")],
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
};
```

#### Scoped configuration with `overrides`

ESLint configs can be scoped to include/exclude specific paths. This ensures
that rules don't "leak" into places where those rules don't apply.

In this example, Jest rules are only being applied to files matching Jest's
default test match pattern.

```js
module.exports = {
	extends: [require.resolve("@haltcase/style/eslint/node")],
	overrides: [
		{
			files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
			extends: [require.resolve("@haltcase/style/eslint/jest")]
		}
	]
};
```

##### A note on file extensions

By default, all TypeScript rules are scoped to files ending with `.ts` and
`.tsx`.

However, when using overrides, file extensions must be included or ESLint will
only include `.js` files.

```js
module.exports = {
	overrides: [
		{
			files: ["directory/**/*.[jt]s?(x)"],
			rules: {
				"my-rule": "off"
			}
		}
	]
};
```

### TypeScript

Several Typescript configs are available to cover various scenarios:

| Name                                 | Description                                                                                          |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `@haltcase/style/typescript/base`    | Baseline config, intended to be extended from.                                                       |
| `@haltcase/style/typescript/bundler` | For use in bundled projects, most commonly [Vite](https://vitejs.dev/) + [React](https://react.dev). |
| `@haltcase/style/typescript/next`    | For use in [Next.js](https://nextjs.org/) projects.                                                  |
| `@haltcase/style/typescript/node`    | Default Node config, currently targeting Node 20.                                                    |
| `@haltcase/style/typescript/node18`  | For projects targeting Node 18.                                                                      |
| `@haltcase/style/typescript/node20`  | For projects targeting Node 20.                                                                      |
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
