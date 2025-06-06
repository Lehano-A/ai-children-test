import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'

export default [
  // Базовые правила ESLint
  js.configs.recommended,

  // Правила для TypeScript
  ...tseslint.configs.recommended,

  // Правила для React
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },

  // Глобальные настройки для всех файлов
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
]
