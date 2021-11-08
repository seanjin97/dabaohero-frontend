module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'max-len': ['error', { code: 120 }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
        ],
        extensions: ['.vue', '.js'],
      },
    },
  },
};
