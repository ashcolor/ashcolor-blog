// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: ["@/assets/css/tailwind.css"],
    build: {},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/eslint-module",
        "@nuxtjs/google-fonts",
        "@nuxt/content",
        "@pinia/nuxt",
        "@vueuse/nuxt",
    ],

    components: {
        dirs: ["~/components/content", "~/components/pages", "~/components/parts"],
    },

    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true,
        markdown: {
            remarkPlugins: ["remark-breaks"],
        },
    },

    eslint: {
        // yarn dev開始にlintを実行するか
        lintOnStart: false,
    },

    googleFonts: {
        families: {
            "M+PLUS+Rounded+1c": true,
            "Noto+Sans+JP": true,
        },
    },

    devtools: {
        enabled: false,
    },
});
