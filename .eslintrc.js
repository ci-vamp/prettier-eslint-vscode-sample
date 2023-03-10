module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['api/*', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'import',
    'react',
    '@typescript-eslint',
    'react-native',
    'eslint-comments',
    'eslint-plugin-newline-destructuring',
  ],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', 'all'],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-unused-disable': 'warn',
    'jest/valid-title': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'ignore',
          caseInsensitive: false,
        },
      },
    ],
    'newline-destructuring/newline': [
      'error',
      {
        items: 2,
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],
    'no-multi-spaces': 'error',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        // use <root>/path/to/folder/tsconfig.json
        project: '<root>/tsconfig.json',
      },
    },
  },
};
