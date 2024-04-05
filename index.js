'use strict';

// 0 = off
// 1 = warn
// 2 = error

const recommendedRules = {
    "dot-notation": "error",
    "one-var": ["error", "never"],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-shadow": "error",
    "no-undef": "warn",
    "no-unused-vars": [ "warn", { "args": "none" }],
    "no-console": "off",
    "no-path-concat": "error",
    "no-cond-assign": ["error", "except-parens"],
    "no-constant-condition": ["error", { "checkLoops": false }],
    "prefer-const": ["error", {"ignoreReadBeforeAssign": true}],
    "no-var": "error",
    "object-shorthand": ["warn", "always"],
    "prefer-template": "warn"
};

// This is here so we know how this "rules" section is used in the future
// - You can enable this rule by adding: `"haraka/no-newline-no-curly-if": 2` to your module's list of rules.
// The rule prevents: `if (bool)\n  do_thing()` and forces if()s with no curly to be on a single line.
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
