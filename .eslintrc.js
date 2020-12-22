module.exports = {
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: [
    'airbnb-base',
  ],
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'error',
    'max-len': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    'no-console': 'warn',
    'no-underscore-dangle': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-useless-constructor': 'off',
    'import/prefer-default-export': 'off',
  }
};