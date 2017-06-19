# 1.0.7 - 2017-06-16

* Fixes the format of an eslint plugin. The "rules" section is for custom
  rules (i.e. the code for defining the rules), not for enforced rules.

# 1.0.6 - 2017-06-15

* eslint 4 enables no-useless-escape. Reduces error to warning until that rule
  is less brain damaged.

# 1.0.5 - 2017-02-01

* fixed missing comma at end of no-empty rule
* added "no-undef": 1  (warnings only)

# 1.0.3 - 2017-01-27

* Updated rules from Haraka main repo
* renamed .eslintrc to .eslintrc.json
* added travis testing
* added install and usage sections to README
* added env:es6=true
* added space-before-function-paren rule
