module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json'
            },
        }
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'import/extensions': [2, 'ignorePackages', {
            js: 'never',
            ts: 'never'
        }],
        'import/no-unresolved': 'off'
    },
};
