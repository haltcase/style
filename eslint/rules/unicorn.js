const {
	levels: { error, off }
} = require("../constants");

module.exports = {
	plugins: ["unicorn"],
	rules: {
		/**
		 * Improve regexes by making them shorter, consistent, and safer.                                                                                                                                                    | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
		 */
		"unicorn/better-regex": error,
		/**
		 * Enforce a specific parameter name in catch clauses.                                                                                                                                                               | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
		 */
		"unicorn/catch-error-name": error,
		/**
		 * Use destructured variables over properties.                                                                                                                                                                       | ✅  | 🔧 | 💡 |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
		 */
		"unicorn/consistent-destructuring": error,
		/**
		 * Move function definitions to the highest possible scope.                                                                                                                                                          | ✅  |    |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
		 */
		"unicorn/consistent-function-scoping": error,
		/**
		 * Enforce correct `Error` subclassing.                                                                                                                                                                              |    | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
		 */
		"unicorn/custom-error-definition": error,
		/**
		 * Enforce no spaces between braces.                                                                                                                                                                                 | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
		 */
		"unicorn/empty-brace-spaces": error,
		/**
		 * Enforce passing a `message` value when creating a built-in error.                                                                                                                                                 | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
		 */
		"unicorn/error-message": error,
		/**
		 * Require escape sequences to use uppercase values.                                                                                                                                                                 | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
		 */
		"unicorn/escape-case": error,
		/**
		 * Add expiration conditions to TODO comments.                                                                                                                                                                       | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
		 */
		"unicorn/expiring-todo-comments": error,
		/**
		 * Enforce explicitly comparing the `length` or `size` property of a value.                                                                                                                                          | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
		 */
		"unicorn/explicit-length-check": error,
		/**
		 * Require consistent filename case for all linted files.
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
		 */
		"unicorn/filename-case": [
			error,
			{
				case: "kebabCase"
			}
		],
		/**
		 * Enforce specific import styles per module.                                                                                                                                                                        | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
		 */
		"unicorn/import-style": error,
		/**
		 * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.                                                                                                           | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
		 */
		"unicorn/new-for-builtins": error,
		/**
		 * Enforce specifying rules to disable in `eslint-disable` comments.                                                                                                                                                 | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
		 */
		"unicorn/no-abusive-eslint-disable": error,
		/**
		 * Prevent passing a function reference directly to iterator methods.                                                                                                                                                | ✅  |    | 💡 |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
		 */
		"unicorn/no-array-callback-reference": error,
		/**
		 * Prefer `for…of` over the `forEach` method.                                                                                                                                                                        | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
		 */
		"unicorn/no-array-for-each": error,
		/**
		 * Disallow using the `this` argument in array methods.                                                                                                                                                              | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
		 */
		"unicorn/no-array-method-this-argument": error,
		/**
		 * Enforce combining multiple `Array#push()` into one call.                                                                                                                                                          | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
		 */
		"unicorn/no-array-push-push": error,
		/**
		 * Disallow `Array#reduce()` and `Array#reduceRight()`.
		 *
		 * Disabled because `reduce` is useful for functional programming patterns.                                                                                                                                                              | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
		 */
		"unicorn/no-array-reduce": off,
		/**
		 * Disallow member access from await expression.                                                                                                                                                                     | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
		 */
		"unicorn/no-await-expression-member": error,
		/**
		 * Do not use leading/trailing space between `console.log` parameters.                                                                                                                                               | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
		 */
		"unicorn/no-console-spaces": error,
		/**
		 * Do not use `document.cookie` directly.                                                                                                                                                                            | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
		 */
		"unicorn/no-document-cookie": error,
		/**
		 * Disallow empty files.                                                                                                                                                                                             | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
		 */
		"unicorn/no-empty-file": error,
		/**
		 * Do not use a `for` loop that can be replaced with a `for-of` loop.                                                                                                                                                | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
		 */
		"unicorn/no-for-loop": error,
		/**
		 * Enforce the use of Unicode escapes instead of hexadecimal escapes.                                                                                                                                                | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md
		 */
		"unicorn/no-hex-escape": error,
		/**
		 * Require `Array.isArray()` instead of `instanceof Array`.                                                                                                                                                          | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md
		 */
		"unicorn/no-instanceof-array": error,
		/**
		 * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.                                                                                                                             | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
		 */
		"unicorn/no-invalid-remove-event-listener": error,
		/**
		 * Disallow identifiers starting with `new` or `class`.                                                                                                                                                              |    |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
		 */
		"unicorn/no-keyword-prefix": error,
		/**
		 * Disallow `if` statements as the only statement in `if` blocks without `else`.                                                                                                                                     | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
		 */
		"unicorn/no-lonely-if": error,
		/**
		 * Disallow negated conditions.                                                                                                                                                                                      | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
		 */
		"unicorn/no-negated-condition": error,
		/**
		 * Disallow nested ternary expressions.                                                                                                                                                                              | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
		 */
		"unicorn/no-nested-ternary": error,
		/**
		 * Disallow `new Array()`.                                                                                                                                                                                           | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
		 */
		"unicorn/no-new-array": error,
		/**
		 * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.                                                                                                                 | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
		 */
		"unicorn/no-new-buffer": error,
		/**
		 * Disallow the use of the `null` literal.                                                                                                                                                                           | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
		 */
		"unicorn/no-null": error,
		/**
		 * Disallow the use of objects as default parameters.                                                                                                                                                                | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
		 */
		"unicorn/no-object-as-default-parameter": error,
		/**
		 * Disallow `process.exit()`.                                                                                                                                                                                        | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
		 */
		"unicorn/no-process-exit": error,
		/**
		 * Disallow classes that only have static members.                                                                                                                                                                   | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
		 */
		"unicorn/no-static-only-class": error,
		/**
		 * Disallow `then` property.                                                                                                                                                                                         | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
		 */
		"unicorn/no-thenable": error,
		/**
		 * Disallow assigning `this` to a variable.                                                                                                                                                                          | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
		 */
		"unicorn/no-this-assignment": error,
		/**
		 * Disallow comparing `undefined` using `typeof`.                                                                                                                                                                    | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
		 */
		"unicorn/no-typeof-undefined": error,
		/**
		 * Disallow awaiting non-promise values.                                                                                                                                                                             | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
		 */
		"unicorn/no-unnecessary-await": error,
		/**
		 * Disallow unreadable array destructuring.                                                                                                                                                                          | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
		 */
		"unicorn/no-unreadable-array-destructuring": error,
		/**
		 * Disallow unreadable IIFEs.                                                                                                                                                                                        | ✅  |    |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
		 */
		"unicorn/no-unreadable-iife": error,
		/**
		 * Disallow unused object properties.                                                                                                                                                                                |    |    |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
		 */
		"unicorn/no-unused-properties": error,
		/**
		 * Disallow useless fallback when spreading in object literals.                                                                                                                                                      | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
		 */
		"unicorn/no-useless-fallback-in-spread": error,
		/**
		 * Disallow useless array length check.                                                                                                                                                                              | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
		 */
		"unicorn/no-useless-length-check": error,
		/**
		 * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks                                                                                                                    | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
		 */
		"unicorn/no-useless-promise-resolve-reject": error,
		/**
		 * Disallow unnecessary spread.                                                                                                                                                                                      | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
		 */
		"unicorn/no-useless-spread": error,
		/**
		 * Disallow useless case in switch statements.                                                                                                                                                                       | ✅  |    | 💡 |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
		 */
		"unicorn/no-useless-switch-case": error,
		/**
		 * Disallow useless `undefined`.                                                                                                                                                                                     | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
		 */
		"unicorn/no-useless-undefined": error,
		/**
		 * Disallow number literals with zero fractions or dangling dots.                                                                                                                                                    | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
		 */
		"unicorn/no-zero-fractions": error,
		/**
		 * Enforce proper case for numeric literals.                                                                                                                                                                         | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
		 */
		"unicorn/number-literal-case": error,
		/**
		 * Enforce the style of numeric separators by correctly grouping digits.                                                                                                                                             | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
		 */
		"unicorn/numeric-separators-style": error,
		/**
		 * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.                                                                                                                                    | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
		 */
		"unicorn/prefer-add-event-listener": error,
		/**
		 * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.                                                                                                                            | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
		 */
		"unicorn/prefer-array-find": error,
		/**
		 * Prefer `Array#flat()` over legacy techniques to flatten arrays.                                                                                                                                                   | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
		 */
		"unicorn/prefer-array-flat": error,
		/**
		 * Prefer `.flatMap(…)` over `.map(…).flat()`.                                                                                                                                                                       | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
		 */
		"unicorn/prefer-array-flat-map": error,
		/**
		 * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.                                                                                            | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md
		 */
		"unicorn/prefer-array-index-of": error,
		/**
		 * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.                                                                                                                                       | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
		 */
		"unicorn/prefer-array-some": error,
		/**
		 * Prefer `.at()` method for index access and `String#charAt()`.                                                                                                                                                     | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
		 */
		"unicorn/prefer-at": error,
		/**
		 * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.                                                                                             | ✅  |    |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md
		 */
		"unicorn/prefer-blob-reading-methods": error,
		/**
		 * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.                                                                                           | ✅  |    | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
		 */
		"unicorn/prefer-code-point": error,
		/**
		 * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.                                                                                                                                       | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
		 */
		"unicorn/prefer-date-now": error,
		/**
		 * Prefer default parameters over reassignment.                                                                                                                                                                      | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
		 */
		"unicorn/prefer-default-parameters": error,
		/**
		 * Prefer `Node#append()` over `Node#appendChild()`.                                                                                                                                                                 | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
		 */
		"unicorn/prefer-dom-node-append": error,
		/**
		 * Prefer using `.dataset` on DOM elements over calling attribute methods.                                                                                                                                           | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md
		 */
		"unicorn/prefer-dom-node-dataset": error,
		/**
		 * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.                                                                                                                                             | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
		 */
		"unicorn/prefer-dom-node-remove": error,
		/**
		 * Prefer `.textContent` over `.innerText`.                                                                                                                                                                          | ✅  |    | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
		 */
		"unicorn/prefer-dom-node-text-content": error,
		/**
		 * Prefer `EventTarget` over `EventEmitter`.                                                                                                                                                                         | ✅  |    |    |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
		 */
		"unicorn/prefer-event-target": error,
		/**
		 * Prefer `export…from` when re-exporting.                                                                                                                                                                           | ✅  | 🔧 | 💡 |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
		 */
		"unicorn/prefer-export-from": error,
		/**
		 * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence.                                                                                                           | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
		 */
		"unicorn/prefer-includes": error,
		/**
		 * Prefer reading a JSON file as a buffer.                                                                                                                                                                           |    | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
		 */
		"unicorn/prefer-json-parse-buffer": error,
		/**
		 * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.                                                                                                                                                          | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
		 */
		"unicorn/prefer-keyboard-event-key": error,
		/**
		 * Prefer using a logical operator over a ternary.                                                                                                                                                                   | ✅  |    | 💡 |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
		 */
		"unicorn/prefer-logical-operator-over-ternary": error,
		/**
		 * Enforce the use of `Math.trunc` instead of bitwise operators.                                                                                                                                                     | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
		 */
		"unicorn/prefer-math-trunc": error,
		/**
		 * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`. | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
		 */
		"unicorn/prefer-modern-dom-apis": error,
		/**
		 * Prefer modern `Math` APIs over legacy patterns.                                                                                                                                                                   | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
		 */
		"unicorn/prefer-modern-math-apis": error,
		/**
		 * Prefer JavaScript modules (ESM) over CommonJS.                                                                                                                                                                    | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
		 */
		"unicorn/prefer-module": error,
		/**
		 * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.                                                                                                                                      | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
		 */
		"unicorn/prefer-native-coercion-functions": error,
		/**
		 * Prefer negative index over `.length - index` when possible.                                                                                                                                                       | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
		 */
		"unicorn/prefer-negative-index": error,
		/**
		 * Prefer using the `node:` protocol when importing Node.js builtin modules.                                                                                                                                         | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
		 */
		"unicorn/prefer-node-protocol": error,
		/**
		 * Prefer `Number` static properties over global ones.                                                                                                                                                               | ✅  | 🔧 | 💡 |
		 *
		 * Require using the `node:` protocol when importing Node.js built-in modules.
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
		 */
		"unicorn/prefer-number-properties": error,
		/**
		 * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.                                                                                                                       | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
		 */
		"unicorn/prefer-object-from-entries": error,
		/**
		 * Prefer omitting the `catch` binding parameter.                                                                                                                                                                    | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
		 */
		"unicorn/prefer-optional-catch-binding": error,
		/**
		 * Prefer borrowing methods from the prototype instead of the instance.                                                                                                                                              | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
		 */
		"unicorn/prefer-prototype-methods": error,
		/**
		 * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`.                                                                         | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
		 */
		"unicorn/prefer-query-selector": error,
		/**
		 * Prefer `Reflect.apply()` over `Function#apply()`.                                                                                                                                                                 | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
		 */
		"unicorn/prefer-reflect-apply": error,
		/**
		 * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.                                                                                                                                                 | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
		 */
		"unicorn/prefer-regexp-test": error,
		/**
		 * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.                                                                                                                          | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
		 */
		"unicorn/prefer-set-has": error,
		/**
		 * Prefer using `Set#size` instead of `Array#length`.                                                                                                                                                                | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md
		 */
		"unicorn/prefer-set-size": error,
		/**
		 * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.                                                                                           | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
		 */
		"unicorn/prefer-spread": error,
		/**
		 * Prefer `String#replaceAll()` over regex searches with the global flag.                                                                                                                                            | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
		 */
		"unicorn/prefer-string-replace-all": error,
		/**
		 * Prefer `String#slice()` over `String#substr()` and `String#substring()`.                                                                                                                                          | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
		 */
		"unicorn/prefer-string-slice": error,
		/**
		 * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.                                                                                                                                          | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
		 */
		"unicorn/prefer-string-starts-ends-with": error,
		/**
		 * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.                                                                                                                 | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
		 */
		"unicorn/prefer-string-trim-start-end": error,
		/**
		 * Prefer `switch` over multiple `else-if`.                                                                                                                                                                          | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
		 */
		"unicorn/prefer-switch": error,
		/**
		 * Prefer ternary expressions over simple `if-else` statements.                                                                                                                                                      | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
		 */
		"unicorn/prefer-ternary": error,
		/**
		 * Prefer top-level await over top-level promises and async function calls.                                                                                                                                          | ✅  |    | 💡 |
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
		 */
		"unicorn/prefer-top-level-await": error,
		/**
		 * Enforce throwing `TypeError` in type checking conditions.                                                                                                                                                         | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
		 */
		"unicorn/prefer-type-error": error,
		/**
		 * Prevent abbreviations.                                                                                                                                                                                            | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
		 */
		"unicorn/prevent-abbreviations": error,
		/**
		 * Enforce consistent relative URL style.                                                                                                                                                                            | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
		 */
		"unicorn/relative-url-style": error,
		/**
		 * Enforce using the separator argument with `Array#join()`.                                                                                                                                                         | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
		 */
		"unicorn/require-array-join-separator": error,
		/**
		 * Enforce using the digits argument with `Number#toFixed()`.                                                                                                                                                        | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
		 */
		"unicorn/require-number-to-fixed-digits-argument": error,
		/**
		 * Enforce using the `targetOrigin` argument with `window.postMessage()`.                                                                                                                                            |    |    | 💡 |
		 *
		 * Disabled upstream: can't distinguish `window.postMessage` and `{Worker,MessagePort,Client,BroadcastChannel}#postMessage()`
		 * See https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1396
		 *
		 * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md
		 */
		"unicorn/require-post-message-target-origin": off,
		/**
		 * Enforce better string content.                                                                                                                                                                                    |    | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
		 */
		"unicorn/string-content": error,
		/**
		 * Enforce consistent brace style for `case` clauses.                                                                                                                                                                | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
		 */
		"unicorn/switch-case-braces": error,
		/**
		 * Fix whitespace-insensitive template indentation.                                                                                                                                                                  | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
		 */
		"unicorn/template-indent": error,
		/**
		 * Enforce consistent case for text encoding identifiers.                                                                                                                                                            | ✅  | 🔧 | 💡 |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
		 */
		"unicorn/text-encoding-identifier-case": error,
		/**
		 * Require `new` when throwing an error.                                                                                                                                                                             | ✅  | 🔧 |    |
		 *
		 * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
		 */
		"unicorn/throw-new-error": error
	}
};
