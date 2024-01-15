// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        prerender: {
            routes: ["/sitemap.xml"],
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "ja",
                prefix: "og: http://ogp.me/ns#",
            },
        },
    },
    css: ["@/assets/css/tailwind.css"],
    build: {},
    extends: "@nuxt-themes/typography",

    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/eslint-module",
        "@nuxtjs/google-fonts",
        "@nuxt/content",
        "nuxt-schema-org",
        "nuxt-simple-robots",
        "nuxt-gtag",
        "@pinia/nuxt",
        "@vueuse/nuxt",
    ],

    components: {
        dirs: [
            "~/components/content",
            "~/components/pages",
            "~/components/parts",
            {
                path: "~/components/content-feature",
                global: true,
            },
        ],
    },

    content: {
        markdown: {
            remarkPlugins: ["remark-breaks"],
        },
        highlight: {
            theme: "github-dark",
            preload: ["vue", "python"],
        },
    },

    eslint: {
        // pnpm dev開始にlintを実行するか
        lintOnStart: false,
    },

    googleFonts: {
        families: {
            "M+PLUS+Rounded+1c": true,
            "Noto+Sans+JP": true,
        },
    },

    gtag: {
        id: "G-Z20F8MTC2Q",
    },

    site: {
        url: "https://blog.ashcolor.jp",
        name: "あしゅログ",
    },
});
