module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        node: true,
        es6: true,
        browser: true
    },
    extends: [
        // add more generic rulesets here, such as:
        // "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:vue/essential"
        // "plugin:vue/recommended" // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        // override/add rules settings here, such as:
        "vue/no-multiple-template-root": "off",
        'no-console': 'off'
    },
};