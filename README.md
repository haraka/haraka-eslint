# haraka-eslint

[![Build Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]

[![NPM][npm-img]][npm-url]

## Install

In your Haraka plugin:

1. Add to NPM dependencies:
    `npm install --save-dev eslint eslint-plugin-haraka`

2. Install an eslint config file:

```sh
tee .eslintrc.yaml <<EOLINT
plugins: [ haraka ]
extends: [ eslint:recommended, plugin:haraka/recommended ]
EOLINT
```

3. Add within the "scripts" section of `package.json`:

```json
"lint": "npx eslint *.js test"
"lintfix": "npx eslint --fix *.js test"
```

4. Within your CI workflow:

`npm run lint`

## Usage

To check your project against lint rules:

`npm run lint`

Step #4 above does this automatically when CI tests are set up.

If you agree with the lint suggestions, you can run `npm run lintfix` and the changes will be made to your files automatically.

If you disagree, you can add custom rules to your .eslintrc file.


<!-- leave these buried at the bottom of the document -->
[ci-img]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-eslint/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-eslint
[npm-img]: https://nodei.co/npm/eslint-plugin-haraka.png
[npm-url]: https://www.npmjs.com/package/eslint-plugin-haraka
