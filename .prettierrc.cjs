// @ts-check
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: ['@prettier/plugin-pug'],

  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',

  pugAttributeSeparator: 'as-needed',
  pugSortAttributes: 'asc',

  vueIndentScriptAndStyle: false,
}