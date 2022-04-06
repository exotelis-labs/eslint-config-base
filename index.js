/* eslint-env node */

module.exports = {
  plugins: ['prettier'],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
      },
    ],
  },
};
