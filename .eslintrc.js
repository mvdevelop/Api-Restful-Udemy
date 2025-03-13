
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es2024: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off"
  },
};
