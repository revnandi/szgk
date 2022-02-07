module.exports = {
  env: {
      jest: true,
      browser: true,
      node: true
  },
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'max-len': ['error', { 'code': 200 }],
    'newline-per-chained-call': ['error'],
    'react/require-default-props': ['off'],
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-indent" : ["error", 4],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        tabWidth: 4,
        singleQuote: true
      },
    ],
}
};