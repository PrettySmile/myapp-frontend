import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{ js, mjs, cjs, ts, jsx, tsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    env: {
      jest: true, // 啟用 Jest 測試環境 //todo 待實作及待驗證
    },
    plugins: ['jest'], // 啟用 Jest 插件
  },
  {
    rules: {
      // 1. 設定縮排為 2 格
      'indent': ['error', 2],

      // 2. 強制使用單引號（'）而非雙引號（"）
      'quotes': ['error', 'single'],

      // 3. 要求每行結尾加上分號（;）
      'semi': ['error', 'always'],

      // 4. 禁止使用 `var`，強制改用 `let` 或 `const`
      'no-var': 'error',

      // 5. 禁止行尾多餘空格
      'no-trailing-spaces': 'error',

      // 6. 逗號風格：最後一個屬性後面 **不要** 加逗號
      'comma-dangle': ['error', 'never'],
      // 確保逗號後面有空格
      'comma-spacing': ['error', { 'after': true }],

      // 7. 箭頭函數的參數若只有一個，**不要** 括號
      'arrow-parens': ['error', 'as-needed'],

      // 8. 大括號風格（例如 `if` 的大括號），使用 **"1TBS"** 樣式
      'brace-style': ['error', '1tbs'],

      // 9. 強制 `const` 使用在未重新指派的變數
      'prefer-const': 'error',

      // 10. 禁止 console.log（但允許 console.warn / console.error）
      // "no-console": ["error", { allow: ["warn", "error"] }]

      // Other
      'react/react-in-jsx-scope': 'off'  // 使用React 19，已不再需要手動引入React套件，所以禁用此規則
    }
  }
];