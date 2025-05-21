import tailwindcss from "@tailwindcss/vite";
import { BLOG_TITLE, BLOG_CATEGORIES } from "./utils/const";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    unhead: {
        legacy: true,
    },
    vite: {
        plugins: [tailwindcss()],
    },
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
            link: [
                { rel: "icon", href: "/icon-192x192.png" },
                { rel: "apple-touch-icon", href: "/apple-touch-icon-180x180.png" },
            ],
        },
    },
    css: ["@/assets/css/main.css"],

    build: {},
    // extends: "@nuxt-themes/typography",

    modules: [
        "@nuxtjs/eslint-module",
        "@nuxtjs/google-fonts",
        "@nuxt/content",
        "nuxt-schema-org",
        "nuxt-gtag",
        "nuxt-icon",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "@nuxt/image",
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
            langs: [
                "markdown",
                "html",
                "css",
                "javascript",
                "js",
                "jsx",
                "ts",
                "php",
                "vue",
                "python",
                "bash",
                "diff",
            ],
        },
    },

    googleFonts: {
        text: BLOG_TITLE + BLOG_CATEGORIES.map((category) => category.name).join(""),
        families: {
            "M+PLUS+Rounded+1c": true,
        },
    },

    gtag: {
        id: "G-Z20F8MTC2Q",
    },

    site: {
        url: "https://blog.ashcolor.jp",
        name: "あっしゅからーのブログ",
    },

    schemaOrg: {
        identity: "Person",
    },

    eslint: {
        lintOnStart: false,
    },
});
