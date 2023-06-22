// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: ["@/assets/css/tailwind.css"],
    build: {},
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "@nuxtjs/eslint-module",
        "@nuxt/content",
    ],
    components: {
        dirs: ["~/components/content", "~/components/pages", "~/components/parts"],
    },
    eslint: {
        // yarn dev開始にlintを実行するか
        lintOnStart: false,
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true,
        markdown: {
            remarkPlugins: ["remark-breaks"],
        },
    },
});
