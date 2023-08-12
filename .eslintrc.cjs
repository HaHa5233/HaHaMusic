/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential', // vue3的规范
    'eslint:recommended', // eslint默认推荐的规范
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '.eslintrc-auto-import.json'
  ],
  rules: {
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
    'no-undef': 'off',
    'no-mixed-spaces-and-tabs': 'off',

  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}