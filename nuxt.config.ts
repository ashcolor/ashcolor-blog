// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    nitro: {
        preset: "service-worker",
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "ja",
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
        "nuxt-simple-robots",
        "nuxt-simple-sitemap",
        "nuxt-gtag",
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
        highlight: {
            theme: {
                default: "github-light",
                dark: "github-dark",
            },
            preload: ["vue"],
        },
        experimental: {
            clientDB: true,
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

    site: {
        url: "https://blog.ashcolor.work",
    },

    sitemap: {
        autoLastmod: false,
        exclude: ["/_story"],
    },

    gtag: {
        id: "G-Z20F8MTC2Q",
    },

    devtools: {
        enabled: false,
    },
});
