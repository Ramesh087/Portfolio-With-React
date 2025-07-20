import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])


// For developing a production-ready application

// import reactX from 'eslint-plugin-react-x';
// import reactDom from 'eslint-plugin-react-dom';
// export default tseslint.config([
//   { ignores: ['dist'] },
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: {
//       globals: { ...globals.browser, ...globals.node }
//     },
//   },
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       // Base configs
//       ...tseslint.configs.recommendedTypeChecked,
//       ...tseslint.configs.stylisticTypeChecked,
//       // React-specific configs
//       reactX.configs['recommended-typescript'],
//       reactDom.configs.recommended,
//     ],
//     languageOptions: {
//       parserOptions: {
//         project: ['./tsconfig.node.json', './tsconfig.app.json'],
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },
// ]); 
//  