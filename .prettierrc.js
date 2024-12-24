/** @type {import("prettier").Config} */
export default {
  arrowParens: 'always',
  endOfLine: 'auto',
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  tailwindConfig: './tailwind.config.ts',
  trailingComma: 'none',
  useTabs: false
};
