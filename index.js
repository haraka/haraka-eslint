"use strict";

module.exports = {
  env: {
    node: true,
    es6: true,
    mocha: true,
    es2024: true,
    // es2023: true, /* enable with mocha 9 */
    // es2024: true, /* enable after 2024-04-30, when node 18 LTS ends */
  },
  root: true,
  extends: ["eslint:recommended"],
  globals: {
    CONT: "readonly",
    STOP: "readonly",
    DENY: "readonly",
    DENYSOFT: "readonly",
    DENYDISCONNECT: "readonly",
    DISCONNECT: "readonly",
    OK: "readonly",
    NEXT_HOOK: "readonly",
    DELAY: "readonly",
    DENYSOFTDISCONNECT: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 0 = off // 1 = warn // 2 = error
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-undef": "warn",
    "no-console": "off",
    "no-constant-condition": ["error", { checkLoops: false }],
    "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
  },
};
