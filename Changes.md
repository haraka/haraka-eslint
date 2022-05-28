
#### N.N.N - YYYY-MM-DD


#### 1.0.15 - 2022-05-28

- style: replace integers with off|warn|error
- chore(ci): update configs
- chore(pkg): add .release submodule


#### 1.0.14 - 2021-02-03

* CI travis -> Github Actions
* dep eslint >= 7 (was 6)
* ecmaVersion 2017 -> 2018


#### 1.0.13 - 2019-11-22

* eslint prefers 'warn' to 'warning' <sigh>


#### 1.0.12 - 2019-11-22

* add prefer-template rule
* add eslint parserOptions: ecmaVersion: 2017
* convert .eslintrc.json to .eslintrc.yaml


#### 1.0.11 - 2019-07-09

* add brace-style rule


#### 1.0.10 - 2019-06-22

* remove node 6 testing


#### 1.0.9 - 2017-09-16

* remove no-useless-escape rule


#### 1.0.8 - 2017-09-13

* import rules from haraka/Haraka


#### 1.0.7 - 2017-06-16

* Fixes the format of an eslint plugin. The "rules" section is for custom
  rules (i.e. the code for defining the rules), not for enforced rules.


#### 1.0.6 - 2017-06-15

* eslint 4 enables no-useless-escape. Reduces error to warning until that rule
  is less brain damaged.


#### 1.0.5 - 2017-02-01

* fixed missing comma at end of no-empty rule
* added "no-undef": 1  (warnings only)


#### 1.0.3 - 2017-01-27

* Updated rules from Haraka main repo
* renamed .eslintrc to .eslintrc.json
* added travis testing
* added install and usage sections to README
* added env:es6=true
* added space-before-function-paren rule
