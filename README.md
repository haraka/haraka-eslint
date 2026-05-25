# haraka-eslint

[![Build Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]

## Install

In your Haraka module:

1. Add to NPM dependencies:

`npm install --save-dev @haraka/eslint-config eslint`

2. Configure ESLint with a flat config (`eslint.config.mjs`):

```js
import haraka from '@haraka/eslint-config'

export default [
  ...haraka,
  {
    // project-specific overrides
    rules: {
      'no-unused-vars': ['warn', { caughtErrorsIgnorePattern: '^ignore' }],
    },
  },
]
```

3. Add to the "scripts" section of `package.json`:

```json
"lint": "npx eslint *.js test",
"lint:fix": "npx eslint --fix *.js test"
```

4. Within your CI workflow:

`npm run lint`

## Upgrading from 2.x

The 3.x release migrates `@haraka/eslint-config` from the legacy `.eslintrc`
shape to a flat-config array. Consumers no longer need `@eslint/eslintrc` /
`FlatCompat`. Replace the old wrapper:

```js
// before
import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({ baseDirectory: __dirname, ... })
export default [...compat.extends('@haraka'), { /* overrides */ }]
```

with:

```js
// after
import haraka from '@haraka/eslint-config'
export default [
  ...haraka,
  {
    /* overrides */
  },
]
```

Peer dependency is now `eslint@^10`.

## Usage

To check your project against lint rules:

`npm run lint`

If you agree with the lint suggestions, run `npm run lint:fix` and the
changes will be made to your files automatically.

Custom rules can be added directly in the consumer's `eslint.config.mjs`.

<!-- leave these buried at the bottom of the document -->

[ci-img]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-eslint/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-eslint
