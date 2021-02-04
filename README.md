# haraka-eslint

[![Build Status][ci-img]][ci-url]
[![Windows Build Status][ci-win-img]][ci-win-url]
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
"lint": "npx eslint *.js test/*.js"
"lintfix": "npx eslint --fix *.js test/*.js"
```

4. Add to the "script" section of .travis.yml:

`npm run lint`

## Usage

To check your project against lint rules:

`npm run lint`

Step #4 above does this automatically when Travis is set up.

If you agree with the lint suggestions, you can run `npm run lintfix` and the changes will be made to your files automatically.

If you disagree, you can add custom rules to your .eslintrc.json file.


<!-- leave these buried at the bottom of the document -->
[ci-img]: https://github.com/haraka/haraka-eslint/workflows/CI%20Tests/badge.svg
[ci-url]: https://github.com/haraka/haraka-eslint/actions?query=workflow%3A%22CI+Tests%22
[ci-win-img]: https://github.com/haraka/haraka-eslint/workflows/Tests%20-%20Windows/badge.svg
[ci-win-url]: https://github.com/haraka/haraka-eslint/actions?query=workflow%3A%22Tests+-+Windows%22
[clim-img]: https://codeclimate.com/github/haraka/haraka-eslint/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-eslint
[npm-img]: https://nodei.co/npm/eslint-plugin-haraka.png
[npm-url]: https://www.npmjs.com/package/eslint-plugin-haraka
