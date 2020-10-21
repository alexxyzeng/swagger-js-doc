module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    indent: [2, 2],
    semi: 2,
    'max-len': ['error', { code: 120 }],
    'node/exports-style': ["error", "module.exports"],
    'node/file-extension-in-import': ["error", "always"],
    'node/prefer-global/buffer': ["error", "always"],
    'node/prefer-global/console': ["error", "always"],
    'node/prefer-global/process': ["error", "always"],
    'node/prefer-global/url-search-params': ["error", "always"],
    'node/prefer-global/url': ["error", "always"],
    'node/prefer-promises/dns': "error",
    'node/prefer-promises/fs': "error"
  },
};
