module.exports = {
  pluginSearchDirs: false,
  plugins: [],
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  bracketSpacing: false,
  arrowParens: 'avoid',
  insertPragma: false,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
}
