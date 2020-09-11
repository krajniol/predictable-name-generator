module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'curly': 'error',
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-global-assign': 'error',
        'no-implicit-globals': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-self-compare': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'wrap-iife': 'error',
        'yoda': 'error',

        // Strict Mode
        'strict': ['error', 'global'],

        // Variables
        'no-unused-vars': 'off',
        'no-use-before-define': ['error', 'nofunc'],

        // Stylistic Issues
        'array-element-newline': ['error', 'always'],
        'array-bracket-spacing': 'error',
        'block-spacing': 'error',
        'camelcase': 'error',
        'comma-dangle': 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'func-call-spacing': 'error',
        'indent': ['error', 2],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'lines-around-comment': 'error',
        'new-cap': 'error',
        'no-nested-ternary': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'ignore'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'switch-colon-spacing': 'error',
    }
};