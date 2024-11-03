module.exports = {
  parserOptions: {
    projectService: {
      defaultProject: 'tsconfig.json',
    }
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: [
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'mui-path-imports',
    'eslint-comments',
    'unicorn',
    'prefer-arrow',
  ],
  rules: {
    'eslint-comments/no-unused-disable': 'error',
    // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'import/prefer-default-export': 'off',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // conflicts with airbnb
    'unicorn/no-array-for-each': 'off',
    // conflicts with consistent return
    'unicorn/no-null': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/extensions': 'off',

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'prefer-arrow-callback': [`error`, { allowNamedFunctions: true }],
    'func-style': [`error`, `expression`, { allowArrowFunctions: true }],

    'react/function-component-definition': [
      `error`,
      {
        // Allow standard Template syntax
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    "react/jsx-filename-extension": ['error', { "extensions": [".tsx"] }],
    'react/require-default-props': 'off',
  },
};
