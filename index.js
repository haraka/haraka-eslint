import globals from 'globals'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.mocha,
        CONT: 'readonly',
        STOP: 'readonly',
        DENY: 'readonly',
        DENYSOFT: 'readonly',
        DENYDISCONNECT: 'readonly',
        DISCONNECT: 'readonly',
        OK: 'readonly',
        NEXT_HOOK: 'readonly',
        DELAY: 'readonly',
        DENYSOFTDISCONNECT: 'readonly',
      },
    },
    rules: {
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-undef': 'warn',
      'no-console': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-unused-vars': ['warn', { caughtErrorsIgnorePattern: 'ignore' }],
    },
  },
]
