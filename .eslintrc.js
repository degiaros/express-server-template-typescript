module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  'env': {
      'browser': true,
      'es6': true,
      'jest': true,
      'node': true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  'extends': [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
  ],
  'rules': {}
};