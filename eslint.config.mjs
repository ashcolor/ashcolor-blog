import eslintConfigPrettier from "eslint-config-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
    {
        files: ["**/*.vue"],
        rules: {
            "vue/no-multiple-template-root": 0,
            "vue/no-v-html": 0,
            "vue/html-self-closing": 0,
            "vue/no-required-prop-with-default": 0,
            "vue/multi-word-component-names": 0,
        },
    },
    {
        files: ["**/*.js", "**/*.ts", "**/*.vue"],
        rules: {
            "@typescript-eslint/no-unused-vars": 0,
            "@typescript-eslint/no-extraneous-class": 0,
            "@typescript-eslint/no-static-only-class": 0,
            "import/named": 0,
            "lint/complexity/noStaticOnlyClass": 0,
        },
    },
    eslintConfigPrettier,
]);
