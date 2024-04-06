"use strict";

module.exports = {
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  root: true,
  extends: "eslint:recommended",
  globals: {
    OK: true,
    CONT: true,
    DENY: true,
    DENYSOFT: true,
    DENYDISCONNECT: true,
    DENYSOFTDISCONNECT: true,
  },
  rules: {
    // 0 = off // 1 = warn // 2 = error
    "no-newline-no-curly-if": require("./rules/no-newline-no-curly-if"),
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-undef": "warn",
    "no-console": "off",
    "no-constant-condition": ["error", { checkLoops: false }],
    "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
  },
};
