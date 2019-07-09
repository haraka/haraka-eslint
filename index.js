'use strict';

const recommendedRules = {
    "comma-dangle": [2, "only-multiline"],
    "dot-notation": 2,
    "indent": [2, 4, {"SwitchCase": 1}],
    "one-var": [2, "never"],
    "no-trailing-spaces": [2, { "skipBlankLines": false }],
    "keyword-spacing": [2, {
        "before": true,
        "after": true
    }],
    "no-delete-var": 2,
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-label-var": 2,
    "no-shadow": 2,
    "no-undef": 1,
    "no-unused-vars": [ 1, { "args": "none" }],
    "space-before-function-paren": [2, { "anonymous": "always", "named": "always" }],
    "no-console": 0,
    "no-path-concat": "error",
    "no-cond-assign": ["error", "except-parens"],
    "no-constant-condition": ["error", { "checkLoops": false }],
    "prefer-const": ["error", {"ignoreReadBeforeAssign": true}],
    "no-var": "error",
    "object-shorthand": ["warn", "always"]
};

// This is really here so we know how this "rules" section is used in the future
// - If you want to enable this rule you can by adding: `"haraka/no-newline-no-curly-if": 2` to
// your module's list of rules.
// The rule in case you're curious prevents: `if (bool)\n  do_thing()` and forces if()s with
// no curly to be on a single line.
const rules = {
    "no-newline-no-curly-if": require('./rules/no-newline-no-curly-if'),
};

module.exports = {
    rules: rules,
    configs: {
        recommended: {
            "env": {
                "node": true,
                "es6": true
            },
            rules: recommendedRules,
        }
    }
}
