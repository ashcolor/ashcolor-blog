import tailwindcss from "@tailwindcss/vite";
import { definePerson } from "nuxt-schema-org/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    vite: {
        plugins: [tailwindcss()],
    },
    runtimeConfig: {
        r2AccountId: "",
        r2AccessKeyId: "",
        r2SecretAccessKey: "",
    },
    nitro: {
        compatibilityDate: "2025-07-15",
        prerender: {
            routes: ["/sitemap.xml"],
        },
        preset: "cloudflare_module",
        cloudflare: {
            deployConfig: true,
            wrangler: {
                compatibility_flags: ["nodejs_compat_v2"],
                d1_databases: [
                    {
                        binding: "DB",
                        database_name: "ashcolor-blog",
                        database_id: "ca7dbda4-eff8-4c06-976b-78c83c51316c",
                    },
                ],
            },
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

    modules: [
        "@nuxt/eslint",
        // "@nuxtjs/eslint-module",
        "@nuxt/content",
        "nuxt-schema-org",
        "nuxt-gtag",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "@nuxt/image",
        "@nuxt/icon",
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
        build: {
            markdown: {
                remarkPlugins: { "remark-breaks": {} },
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
        identity: definePerson({
            name: "あっしゅからー",
            image: "/img/author.png",
            description: "システムエンジニア / DTMer",
            url: "https://twitter.com/ashcolor06",
            sameAs: ["https://github.com/ashcolor"],
        }),
    },

    // eslint: {
    // lintOnStart: false,
    // },
});
