// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };

module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    //   },
    // ],
    // 'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
    'no-var': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    curly: 'error',
  },
  ignorePatterns: ['metro.config.js'],
};
