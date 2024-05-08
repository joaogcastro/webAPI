module.exports = {
    languageOptions: {
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module'
        },
        globals: {
            es6: false,
            node: true,
            jest: true
        }
    },
    rules: {
        'array-bracket-spacing': [2, 'never', {}],
        'arrow-spacing': [2, {
            before: true,
            after: true
        }],
        'block-scoped-var': 2,
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        'comma-dangle': [2, 'never'],
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'comma-style': [2, 'last'],
        curly: [2, 'all'],
        'dot-notation': [2, { allowKeywords: true }],
        eqeqeq: 2,
        'eol-last': 2,
        'guard-for-in': 2,
        indent: [2, 4, { SwitchCase: 0, MemberExpression: 'off' }],
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': [2, {}],
        'new-cap': 0,
        'no-await-in-loop': 2,
        'no-bitwise': 2,
        'no-caller': 2,
        'no-compare-neg-zero': 2,
        'no-constant-condition': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': [2, { allowEmptyCatch: true }],
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-fallthrough': 2,
        'no-func-assign': 2,
        'no-invalid-regexp': 2,
        'no-invalid-this': 2,
        'no-irregular-whitespace': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': [2, { ignoreEOLComments: true }],
        'no-multi-str': 2,
        'no-obj-calls': 2,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-sequences': 2,
        'no-spaced-func': 2,
        'no-sparse-arrays': 2,
        'no-tabs': 2,
        'no-template-curly-in-string': 2,
        'no-trailing-spaces': 2,
        'no-undef-init': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'no-unused-expressions': [2, {
            allowShortCircuit: true,
            allowTernary: true
        }],
        'no-unused-vars': [2, { vars: 'local' }],
        'no-use-before-define': 0,
        'no-useless-call': 2,
        'no-with': 2,
        quotes: [2, 'single'],
        radix: 2,
        semi: 2,
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {
            words: false,
            nonwords: false
        }],
        strict: [2, 'global'],
        'valid-typeof': 2,
        'wrap-iife': [2, 'any']
    }
};
