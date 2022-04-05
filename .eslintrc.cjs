/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['eslint:recommended', './index.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
