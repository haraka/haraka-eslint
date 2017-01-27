# haraka-eslint
eslint rules for Haraka projects

## Install

In your Haraka plugin:

1. Add to NPM dependencies:
    `npm install --save-dev eslint eslint-plugin-haraka`
2. Install an eslint config file:
`tee .eslintrc.json <<EOLINT
{
  "plugins": [
    "haraka"
  ],
  "extends": ["eslint:recommended", "plugin:haraka/recommended"],
}
`
3. Add within the "scripts" section of `package.json`:
`
"lint": "./node_modules/.bin/eslint *.js test/**/*.js"
"lintfix": "./node_modules/.bin/eslint --fix *.js test/**/*.js"
`
4. Add to the "script" section of .travis.yml:
    `npm run lint`

## Usage

To check your project against lint rules:

`npm run lint`

Step #4 above does this automatically when Travis is set up.

If you agree with the lint suggestions, you can run `npm run lintfix` and the changes will be made to your files automatically.

If you disagree, you can add custom rules to your .eslintrc.json file.
