import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import pluginQuery from '@tanstack/eslint-plugin-query';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  // JS
  js.configs.recommended,

  // react-query

  {
    ...pluginQuery.configs.flat
  },

  // Prettier
  {
    plugins: {
      prettier
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  },

  // Simple Import Sort
  {
    plugins: {
      import: eslintPluginImport,
      'simple-import-sort': eslintPluginSimpleImportSort
    },
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error'
    }
  },

  // React
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...eslintPluginReact.configs.flat['jsx-runtime'],
    languageOptions: {
      ...eslintPluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
        ...globals.node
      }
    },
    plugins: {
      react: eslintPluginReact
    },
    rules: {
      ...eslintPluginReact.configs.flat.rules,
      'react/jsx-key': 'error',
      'react/jsx-pascal-case': ['error'],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-array-index-key': 'warn'
    }
  },

  // TypeScript

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules
    }
  },

  // next.js

  {
    name: 'ESLint Config - nextjs',
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@next/next': pluginNext
    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules
    }
  }
];
