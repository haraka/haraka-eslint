"use strict";

// 0 = off
// 1 = warn
// 2 = error

const envs = {
  node: true,
  es6: true,
  mocha: true,
};

const globals = {
  OK: true,
  CONT: true,
  DENY: true,
  DENYSOFT: true,
  DENYDISCONNECT: true,
  DENYSOFTDISCONNECT: true,
};

const recommendedRules = {
  "dot-notation": "error",
  "one-var": ["error", "never"],
  "no-empty": ["error", { allowEmptyCatch: true }],
  "no-shadow": "error",
  "no-undef": "warn",
  "no-unused-vars": ["warn", { args: "none" }],
  "no-console": "off",
  "no-path-concat": "error",
  "no-cond-assign": ["error", "except-parens"],
  "no-constant-condition": ["error", { checkLoops: false }],
  "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
  "no-var": "error",
  "object-shorthand": ["warn", "always"],
  "prefer-template": "warn",
};

module.exports = {
  env: envs,
  root: true,
  extends: "eslint:recommended",
  globals: globals,
  rules: {
    "no-newline-no-curly-if": require("./rules/no-newline-no-curly-if"),
  },
  configs: {
    recommended: {
      env: envs,
      extends: "eslint:recommended",
      globals: globals,
      rules: recommendedRules,
    },
  },
};
