# `@haltcase/style` &middot; [![Version](https://flat.badgen.net/npm/v/@haltcase/style)](https://www.npmjs.com/package/@haltcase/style) [![License](https://flat.badgen.net/npm/license/@haltcase/style)](https://www.npmjs.com/package/@haltcase/style) [![GitHub Actions](https://flat.badgen.net/github/checks/haltcase/style)](https://github.com/haltcase/style/actions)

> Style guide and configurations for tools in the web ecosystem.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)

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

> Some ESLint scenarios require additional peer dependencies.
> See the [ESLint](#eslint) section.

## usage

### Prettier

> **Note**
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

> **Note**
> ESLint is a peer dependency you'll need to install
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

Several ESLint configs are available which can be combined.

Start with at least one of these base configs, which should always be first in `extends`:

- `@haltcase/style/eslint/browser`
- `@haltcase/style/eslint/node`

> **Note**
> You can scope configs so they only target specific files.
>
> See: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@haltcase/style/eslint/jest`
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
information, you'll need to provide the path to your `tsconfig.json`.

For more information, see: https://typescript-eslint.io/docs/linting/type-linting

```js
const { resolve } = require("path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
	root: true,
	extends: [
		require.resolve("@haltcase/style/eslint/node"),
		require.resolve("@haltcase/style/eslint/typescript")
	],
	parserOptions: {
		project
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

To use the shared TypeScript config, set the following in `tsconfig.json`.

```json
{
	"extends": "@haltcase/style/typescript"
}
```

## contributing

Please read our [contributing](https://github.com/haltcase/style/blob/main/CONTRIBUTING.md)
guide before creating a pull request.
