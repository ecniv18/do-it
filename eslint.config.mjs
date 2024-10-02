import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        require: 'readonly', // ignores the require function on no-undef rules, require module is used only on common js, we used module js using import/export
      },
    },
  },
  {
    ...pluginJs.configs.recommended,
    ignores: ['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js'], // Make sure all configs have ignores if needed
    rules: {
      eqeqeq: 'off',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-unused-vars': 'warn',
    },
  },
];
