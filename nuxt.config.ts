import tailwindcss from "@tailwindcss/vite";
import { readdirSync } from "node:fs";
import { definePerson } from "nuxt-schema-org/schema";
import { fileURLToPath } from "node:url";
import rehypeUnwrapBlockParagraph from "./content-plugins/rehype-unwrap-block-paragraph.mjs";

// crawlLinks だけではトップから辿れない記事が漏れるため、content/blog 配下の全記事を prerender 対象にする
const blogRoutes = readdirSync("content/blog", { recursive: true, encoding: "utf-8" })
    .filter((file) => file.endsWith(".md"))
    .map((file) => `/blog/${file.replaceAll("\\", "/").replace(/\.md$/, "")}`);

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
        // dev の fs キャッシュだと /blog（ファイル）と /blog/xxx（ディレクトリ）が衝突して ENOENT になるため memory にする
        devStorage: {
            "cache:nuxt:payload": { driver: "memory" },
        },
        prerender: {
            crawlLinks: true,
            routes: ["/", "/sitemap.xml", ...blogRoutes],
        },
        preset: "cloudflare_module",
        cloudflare: {
            deployConfig: true,
            wrangler: {
                compatibility_flags: ["nodejs_compat"],
                // 末尾スラッシュなしの URL（canonical・sitemap）を redirect せず直接返す
                assets: { html_handling: "drop-trailing-slash" },
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
        "@nuxt/scripts",
    ],

    scripts: {
        registry: {
            xEmbed: {},
            youtubePlayer: {},
        },
    },
    components: {
        dirs: [
            {
                path: "~/components/content",
                global: true,
            },
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
                rehypePlugins: {
                    // content のパースは instance、MDC のランタイム import は src を参照する
                    "rehype-unwrap-block-paragraph": {
                        instance: rehypeUnwrapBlockParagraph,
                        // 生成コードに埋め込まれるため、Windows でもバックスラッシュにならないようにする
                        src: fileURLToPath(
                            new URL(
                                "./content-plugins/rehype-unwrap-block-paragraph.mjs",
                                import.meta.url
                            )
                        ).replaceAll("\\", "/"),
                    },
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
        },
    },

    gtag: {
        id: "G-Z20F8MTC2Q",
        // app/plugins/gtag-lazy.client.ts で遅延初期化する
        initMode: "manual",
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
