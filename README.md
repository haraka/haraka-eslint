# haraka-eslint

[![Build Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]

## Install

In your Haraka module:

1. Add to NPM dependencies:

`npm install --save-dev @haraka/eslint-config`

2. Configure eslint:

```sh
cat  <<EOLINT > .eslintrc.yaml
env:
  node: true
  es6: true
  es2022: true
extends: "@haraka"
EOLINT
```

3. Add to the "scripts" section of `package.json`:

```json
"lint": "npx eslint@8 *.js test"
"lint:fix": "npx eslint@8 --fix *.js test"
```

4. Within your CI workflow:

`npm run lint`

## Usage

To check your project against lint rules:

`npm run lint`

Step #4 above does this automatically when CI tests are set up.

If you agree with the lint suggestions, you can run `npm run lint:fix` and the changes will be made to your files automatically.

Custom rules can be added to the .eslintrc file.

<!-- leave these buried at the bottom of the document -->

[ci-img]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-eslint/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-eslint/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-eslint
