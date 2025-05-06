// @ts-check
/// <reference types="./node_modules/@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
export default {
  plugins: ['@prettier/plugin-pug'],

  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',

  pugAttributeSeparator: 'as-needed',
  pugSortAttributes: 'asc',

  vueIndentScriptAndStyle: false,
}
