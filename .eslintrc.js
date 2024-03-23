/**
 * @fileOverview Eslint configuration
 * @description Configuring ESLint for React Native projects with TypeScript.
 *              This file contains rules to maintain a consistent and clean code style.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 */
module.exports = {
  // Defining the parser for TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  // Plugins used for specific rules
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import', // Plugin to manage imports
    'prettier', // Plugin to integrate with Prettier
    'jest', // Plugin to integrate with Jest
    'unused-imports', // Plugin to integrate with Unused Imports
  ],
  // Settings Extensions and Plugins
  extends: [
    '@react-native', // React Native specific rules
    'airbnb-typescript/base', // Airbnb Style Guide for TypeScript
    'prettier', // Integration with Prettier
    'plugin:@typescript-eslint/recommended', // TypeScript recommendations
    'plugin:import/typescript', // Improvements in imports for TypeScript
    'plugin:prettier/recommended', // TypeScript recommendations
  ],
  root: true,
  env: {
    node: true,
    jest: true, // Indicates that Jest global variables are used
  },
  ignorePatterns: [
    '.eslintrc.js',
    'babel.config.js',
    'jest.config.js',
    'jest.setup.ts',
    'metro.config.js',
    'node_modules',
    'rn-cli.config.js',
    'react-native.config.js',
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // This tells ESLint to use tsconfig to resolve imports
    },
  },
  rules: {
    // Rules for ordering imports
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // Groups built-in Node.js imports and external module imports.
          'internal', // Refers to imports of internal modules of your project.
          ['parent', 'sibling', 'index', 'object'], // Groups relative imports: from the parent directory, siblings, indexes and objects.
        ],
        pathGroups: [
          // The following settings define how certain import patterns should be treated:
          {
            pattern: 'react', /// Pattern for React imports
            group: 'external', // Classifies them as external imports
            position: 'before', // Must appear before other external imports
          },
          {
            pattern: 'react-native', // Pattern for React Native imports
            group: 'external', // Classifies them as external imports
            position: 'before', // Must appear before other external imports
          },
          {
            pattern: 'react-*', // Pattern for any import that starts with 'react-'
            group: 'external', // Classifies them as external imports
            position: 'before', // Must appear before other external imports
          },
          {
            pattern: '@', // Pattern for imports from alias '@'
            group: 'external', // Classified as external
            position: 'before', // Before other externals
          },
          {
            pattern: '@/**', // Pattern for more specific imports from '@'
            group: 'internal', // Classified as internal
            position: 'before', // Before other internal imports
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'], // Excludes builtin Node.js imports from pathGroups
        'newlines-between': 'always', // Requires a new line between import groups
        alphabetize: {
          // Sort imports within each group alphabetically
          order: 'asc',// Ascending
          caseInsensitive: true, // Not case sensitive
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': 'error', // Ensures all imports are at the beginning of the file.
    'import/no-duplicates': 'error', // Prohibit repeated imports from the same module.
    'import/newline-after-import': 'error', // Requires an empty line after the last import block.
    '@typescript-eslint/no-explicit-any': 'error', // Prohibit the use of 'any'
    // Detect unused variables (including unused imports)
    'no-unused-vars': 'off', // Turn off the original ESLint rule
    'unused-imports/no-unused-imports': 'error', // Activate the plugin rule for unused imports
    // Additional eslint-plugin-import rule to detect unused imports
    'import/no-unused-modules': [
      1,
      {
        unusedExports: true,
      },
    ],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
