# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/).

### Unreleased

### [2.0.2] - 2025-01-07

- update codeclimate config for eslint 9

### [2.0.1] - 2025-01-07

- deps(peer): don't pin versions

### [2.0.0] - 2025-01-07

- BREAKING: depend on eslint 9
- deps: declare peerDeps on @eslint/js and @eslint/eslintrc
- index: globals reflect actual values (vs true)
- index: bump es2022 -> es2024

### [1.1.5] - 2024-04-22

- add env.es2022=true
- remove env.es2023, not supported by all eslint 8 versions

### [1.1.4] - 2024-04-22

- doc(CONTRIBUTORS): added
- add env.es2023=true
- add rule: no-unused-vars: 1

### [1.1.3] - 2024-04-07

- add env.es2020=true
- add parserOptions.ecmaVersion = latest

#### [1.1.1] - 2024-04-06

- remove rule no-newline-no-curly-if
- remove haraka:recommended
- remove rules included in eslint:recommended

#### [1.1.0] - 2024-04-06

- chore: update to eslint 8 standards
- publish as @haraka/eslint-config
- add lint & prettier scripts
- add Haraka globals, root:true, and envs
- doc(README): update

#### [1.0.16] - 2024-04-05

- chore: remove eslint deprecated formatting rules
  - see https://eslint.org/blog/2023/10/deprecating-formatting-rules/
- chore: remove .npmignore, populate [files] in package.json
- chore: add CodeQL workflow for GitHub code scanning (#27)
- ci: update to use shared workflows
- doc(README): fix badge URL, update usage

#### [1.0.15] - 2022-05-28

- style: replace integers with off|warn|error
- chore(ci): update configs
- chore(pkg): add .release submodule

#### 1.0.14 - 2021-02-03

- CI travis -> Github Actions
- dep eslint >= 7 (was 6)
- ecmaVersion 2017 -> 2018

#### 1.0.13 - 2019-11-22

- eslint prefers 'warn' to 'warning'

#### 1.0.12 - 2019-11-22

- add prefer-template rule
- add eslint parserOptions: ecmaVersion: 2017
- convert .eslintrc.json to .eslintrc.yaml

#### [1.0.11] - 2019-07-09

- add brace-style rule

#### 1.0.10 - 2019-06-22

- remove node 6 testing

#### 1.0.9 - 2017-09-16

- remove no-useless-escape rule

#### 1.0.8 - 2017-09-13

- import rules from haraka/Haraka

#### 1.0.7 - 2017-06-16

- Fixes the format of an eslint plugin. The "rules" section is for custom
  rules (i.e. the code for defining the rules), not for enforced rules.

#### 1.0.6 - 2017-06-15

- eslint 4 enables no-useless-escape. Reduces error to warning until that rule
  is less brain damaged.

#### 1.0.5 - 2017-02-01

- fixed missing comma at end of no-empty rule
- added "no-undef": 1 (warnings only)

#### 1.0.3 - 2017-01-27

- Updated rules from Haraka main repo
- renamed .eslintrc to .eslintrc.json
- added travis testing
- added install and usage sections to README
- added env:es6=true
- added space-before-function-paren rule

[1.0.11]: https://github.com/haraka/haraka-eslint/releases/tag/1.0.11
[1.0.15]: https://github.com/haraka/haraka-eslint/releases/tag/1.0.15
[1.0.16]: https://github.com/haraka/haraka-eslint/releases/tag/v1.0.16
[1.1.0]: https://github.com/haraka/haraka-eslint/releases/tag/v1.1.0
[1.1.1]: https://github.com/haraka/haraka-eslint/releases/tag/v1.1.1
[1.1.3]: https://github.com/haraka/haraka-eslint/releases/tag/v1.1.3
[1.1.4]: https://github.com/haraka/haraka-eslint/releases/tag/v1.1.4
[1.1.5]: https://github.com/haraka/haraka-eslint/releases/tag/v1.1.5
[2.0.0]: https://github.com/haraka/haraka-eslint/releases/tag/v2.0.0
[2.0.1]: https://github.com/haraka/haraka-eslint/releases/tag/v2.0.1
[2.0.2]: https://github.com/haraka/haraka-eslint/releases/tag/v2.0.2
