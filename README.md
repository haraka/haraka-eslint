# haraka-eslint

[![Build Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]

[![NPM][npm-img]][npm-url]

## Install

In your Haraka plugin:

1. Install an eslint config file:

```sh
tee .eslintrc.yaml <<EOLINT
extends: [ @haraka ]
EOLINT
```

2. Add to the "scripts" section of `package.json`:

```json
"lint": "npx eslint@8 *.js test"
"lint:fix": "npx eslint@8 --fix *.js test"
```

3. Within your CI workflow:

`npm run lint`

## Usage

To check your project against lint rules:

`npm run lint`

Step #3 above does this automatically when CI tests are set up.

If you agree with the lint suggestions, you can run `npm run lint:fix` and the changes will be made to your files automatically.

You can add custom rules to your .eslintrc file.

<!-- leave these buried at the bottom of the document -->

[ci-img]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-eslint/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-eslint
[npm-img]: https://nodei.co/npm/@haraka/eslint-config.png
[npm-url]: https://www.npmjs.com/package/@haraka/eslint-config
