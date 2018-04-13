module.exports = {
  root: true,
  extends: 'airbnb-base',
  plugins: ['import'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    'no-plusplus': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'one-var-declaration-per-line': ['error', 'initializations'],
  },
};
