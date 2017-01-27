var fs = require('fs');

var requiredRules = {
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
    "no-empty": ["error", { "allowEmptyCatch": true }]
    "no-label-var": 2,
    "no-shadow": 2,
    "no-unused-vars": [ 1, { "args": "none" }],
    "space-before-function-paren": [2, { "anonymous": "always", "named": "always" }]
};

// they might not always be the same...
var recommendedRules = requiredRules;

JSON.parse(fs.readFileSync('.eslintrc.json'));

module.exports = {
    rules: requiredRules,
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
