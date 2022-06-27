module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'new-cap': 0,
    'react/prop-types': 0,
    camelcase: 0,
    'linebreak-style': 0,
    'space-before-function-paren': 'off',
    'eslint multiline-ternary': 'off'
  }
}
