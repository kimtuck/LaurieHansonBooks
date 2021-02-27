module.exports = {
    root: true,

    env: {
        node: true
    },

    parserOptions: {
        parser: 'babel-eslint'
    },

    plugins: ['import'],

    extends: ['plugin:vue/recommended', 'eslint:all', '@vue/prettier'],

    settings: {
        'import/resolver': {
            webpack: {
                // https://cli.vuejs.org/guide/webpack.html#using-resolved-config-as-a-file

                config: './node_modules/@vue/cli-service/webpack.config.js'
            }
        }
    },

    rules: {
        // eslint-plugin-vue uncategorized and extension rules https://eslint.vuejs.org/rules/

        'vue/camelcase': 'error',

        'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: true }],

        'vue/dot-notation': 'error',

        'vue/eqeqeq': 'error',

        'vue/html-comment-content-newline': 'error',

        'vue/html-comment-content-spacing': 'error',

        'vue/html-comment-indent': ['error', 4],

        'vue/html-self-closing': [
            'error',

            {
                html: { void: 'any', normal: 'always', component: 'always' },

                svg: 'always',

                math: 'always'
            }
        ],

        'vue/no-deprecated-data-object-declaration': 'error',

        'vue/no-deprecated-html-element-is': 'error',

        'vue/no-deprecated-inline-template': 'error',

        'vue/no-deprecated-props-default-this': 'error',

        'vue/no-deprecated-scope-attribute': 'error',

        'vue/no-deprecated-vue-config-keycodes': 'error',

        'vue/no-duplicate-attr-inheritance': 'error',

        'vue/no-empty-component-block': 'error',

        'vue/no-empty-pattern': 'error',

        'vue/no-irregular-whitespace': 'error',

        'vue/no-multiple-objects-in-class': 'error',

        'vue/no-potential-component-option-typo': 'error',

        'vue/no-reserved-component-names': [
            'error',

            { disallowVueBuiltInComponents: true, disallowVue3BuiltInComponents: true }
        ],

        'vue/no-sparse-arrays': 'error',

        'vue/no-unsupported-features': ['error', { version: '^2.6.12' }],

        'vue/no-useless-concat': 'error',

        'vue/no-useless-mustaches': 'error',

        'vue/no-useless-v-bind': 'error',

        'vue/padding-line-between-blocks': 'error',

        'vue/prefer-template': 'error',

        //'vue/require-direct-export': 'error',

        //'vue/static-class-names-order': 'error',

        'vue/v-for-delimiter-style': 'error',

        'vue/v-on-function-call': 'error',

        // disabled until violations are fixed - change 'off' to 'error' when fixed and move to the top list

        'vue/match-component-file-name': ['off', { extensions: ['vue'], shouldMatchCase: false }],

        'vue/no-boolean-default': ['off', 'default-false'],

        'vue/no-deprecated-filter': 'off',

        'vue/no-deprecated-functional-template': 'off',

        'vue/no-deprecated-slot-attribute': 'off',

        'vue/no-deprecated-slot-scope-attribute': 'off',

        'vue/no-unused-properties': ['off', { groups: ['props', 'data', 'computed', 'methods'] }],

        'vue/no-static-inline-styles': 'off',

        'vue/no-template-target-blank': 'off',

        'vue/no-unregistered-components': ['off', { ignorePatterns: ['rbc-base-button', 'rbc-base-link'] }],

        'vue/require-name-property': 'off',


        'vue/no-v-model-argument': 'off',
        'vue/no-unsupported-features': 'off',
        
        // core eslint rules https://eslint.org/docs/rules/

        curly: ['error', 'all'],

        'grouped-accessor-pairs': ['error', 'getBeforeSet'],

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // 'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

        'no-undef': ['error', { typeof: true }],

        'no-useless-computed-key': ['error', { enforceForClassMembers: true }],

        'one-var': ['error', 'never'],

        'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'block-like', next: '*' }],

        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],

        // disabled until violations are fixed

        'array-callback-return': ['off', { checkForEach: true }],

        camelcase: 'off',

        'class-methods-use-this': 'off',

        'consistent-return': 'off',

        'consistent-this': 'off',

        'func-names': 'off',

        'func-style': 'off',

        'guard-for-in': 'off',

        'max-classes-per-file': 'off',

        'max-params': 'off',

        'new-cap': 'off',

        'no-await-in-loop': 'off',

        'no-confusing-arrow': ['off', { allowParens: false }],

        'no-empty-function': ['off', { allow: ['arrowFunctions'] }],

        'no-extend-native': 'off',

        'no-import-assign': 'off',

        'no-invalid-this': 'off',

        'no-lonely-if': 'off',

        'no-magic-numbers': [
            'off',

            { ignore: [-1, 0, 1], ignoreArrayIndexes: true, ignoreDefaultValues: true, enforceConst: true }
        ],

        'no-multi-assign': 'off',

        'no-negated-condition': 'off',

        'no-param-reassign': 'off',

        'no-promise-executor-return': 'off',

        'no-prototype-builtins': 'off',

        'no-return-assign': 'off',

        'no-return-await': 'off',

        'no-tabs': 'off',

        'no-template-curly-in-string': 'off',

        'no-throw-literal': 'off',

        'no-undefined': 'off',

        'no-underscore-dangle': 'off',

        'no-unsafe-negation': ['off', { enforceForOrderingRelations: true }],

        'no-unused-expressions': 'off',

        'no-useless-concat': 'off',

        'no-useless-constructor': 'off',

        'prefer-named-capture-group': 'off',

        'prefer-promise-reject-errors': 'off',

        'prefer-regex-literals': ['off', { disallowRedundantWrapping: true }],

        'prefer-rest-params': 'off',

        radix: 'off',

        'require-atomic-updates': 'off',

        'require-await': 'off',

        // intentionally disabled

        'block-scoped-var': 'off', // var is not allowed

        'capitalized-comments': 'off',

        complexity: 'off',

        'id-denylist': 'off',

        'id-length': 'off',

        'id-match': 'off',

        'init-declarations': 'off',

        'line-comment-position': 'off',

        'max-depth': 'off',

        'max-lines': 'off',

        'max-lines-per-function': 'off',

        'max-nested-callbacks': 'off',

        'max-statements': 'off',

        'multiline-comment-style': 'off',

        'no-delete-var': 'off', // var is not allowed

        'no-duplicate-imports': 'off', // will use eslint-plugin-import instead

        'no-eq-null': 'off',

        'no-extra-label': 'off', // label is not allowed

        'no-inline-comments': 'off',

        'no-inner-declarations': 'off',

        'no-label-var': 'off', // label is not allowed

        'no-multi-str': 'off',

        'no-nested-ternary': 'off',

        'no-plusplus': 'off',

        'no-redeclare': 'off', // var is not allowed

        'no-restricted-exports': 'off',

        'no-restricted-globals': 'off',

        'no-restricted-imports': 'off',

        'no-restricted-properties': 'off',

        'no-restricted-syntax': 'off',

        'no-ternary': 'off',

        'no-unused-labels': 'off', // label is not allowed

        'no-use-before-define': 'off', // var is not allowed

        'no-warning-comments': 'off',

        'prefer-destructuring': 'off',

        'require-unicode-regexp': 'off',

        'sort-imports': 'off', // will use eslint-plugin-import instead

        'sort-keys': 'off',

        // eslint-plugin-import - https://github.com/benmosher/eslint-plugin-import

        'import/default': 'error',

        'import/dynamic-import-chunkname': 'error',

        'import/export': 'error',

        'import/exports-last': 'error',

        'import/extensions': ['error', 'never', { vue: 'always' }],

        'import/first': 'error',

        'import/group-exports': 'error',

        'import/named': 'error',

        'import/namespace': 'error',

        'import/newline-after-import': 'error',

        'import/no-absolute-path': 'error',

        'import/no-duplicates': 'error',

        'import/no-mutable-exports': 'error',

        'import/no-named-as-default': 'error',

        'import/no-named-default': 'error',

        'import/no-namespace': 'error',

        'import/no-restricted-paths': [
            'error',

            {
                zones: [
                    {
                        target: './common',

                        from: './src',

                        message: 'Modules under common are not allowed to import from modules under src'
                    },

                    {
                        target: './common',

                        from: './registration',

                        message: 'Modules under common are not allowed to import from modules under registration'
                    },

                    {
                        target: './src',

                        from: './registration',

                        message: 'Modules under src are not allowed to import from modules under registration'
                    },

                    {
                        target: './registration',

                        from: './src',

                        message: 'Modules under registration are not allowed to import from modules under src'
                    }
                ]
            }
        ],

        'import/no-self-import': 'error',

        'import/no-unresolved': ['error', { commonjs: true }],

        // 'import/no-unused-modules': [
        //    'error',
        //    { missingExports: false, unusedExports: true, ignoreExports: ['**/__mocks__/**', '**/store/modules/**'] },
        // ],

        'import/no-useless-path-segments': 'error',

        'import/no-webpack-loader-syntax': 'error',

        'import/order': [
            'off',

            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'unknown'],

                alphabetize: { order: 'asc', caseInsensitive: false },

                'newlines-between': 'never'
            }
        ],

        'import/prefer-default-export': 'error',

        // disabled until violations are fixed - change 'off' to 'error' when fixed and move to the top list

        'import/no-unassigned-import': 'off',

        'import/no-cycle': 'off'
    },

    overrides: [
        {
            files: ['**/src/**'],

            rules: {
                'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.unit.js', '**/css/plugins/**'] }]
            }
        },

        {
            files: ['**/api/**'],

            rules: {
                // most api files contain a single export, but we don't want to rename the file to match the default export

                'import/prefer-default-export': 'off'
            }
        },

        {
            files: ['**/*.unit.js', '**/tests/unit/**/*.js', '**/__mocks__/**/*.js', 'test-*.base.js'],

            env: {
                jest: true
            },

            plugins: ['jest-formatting'],

            extends: ['plugin:jest/all'],

            rules: {
                // eslint-plugin-jest rules https://github.com/jest-community/eslint-plugin-jest

                'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],

                'jest/prefer-expect-assertions': ['error', { onlyFunctionsWithAsyncKeyword: true }],

                // disabled until violations are fixed - rules are listed in order of priority to enable

                'jest/valid-expect': ['off', { alwaysAwait: true }],

                'jest/prefer-called-with': 'off',

                'jest/prefer-spy-on': 'off',

                // intentionally disabled

                'jest/lowercase-name': 'off',

                'jest/no-hooks': 'off',

                // eslint-plugin-jest-formatting - https://github.com/dangreenisrael/eslint-plugin-jest-formatting

                'jest-formatting/padding-around-after-all-blocks': 'error',

                'jest-formatting/padding-around-after-each-blocks': 'error',

                'jest-formatting/padding-around-before-all-blocks': 'error',

                'jest-formatting/padding-around-before-each-blocks': 'error',

                'jest-formatting/padding-around-describe-blocks': 'error',

                'jest-formatting/padding-around-test-blocks': 'error'
            }
        },

        {
            files: ['**/*.unit.js', '**/tests/unit/*.js'],

            globals: {
                jsdom: true,

                duringDispatch: true,

                spyOnAction: true,

                createWrapperFactory: true,

                createStoreFactory: true,

                getStoreContexts: true
            }
        },

        {
            files: ['**/tests/e2e/**/*.js'],

            env: {
                protractor: true,

                jasmine: true
            },

            rules: {
                // disabled until violations are fixed - delete when violations are fixed

                'no-shadow': ['off']
            }
        }
    ]
};
