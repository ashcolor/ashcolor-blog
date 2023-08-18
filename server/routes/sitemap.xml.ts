import { SitemapStream, streamToPromise } from "sitemap";
import { serverQueryContent } from "#content/server";
import { BLOG_CATEGORIES } from "@/utils/const";

export default defineEventHandler(async (event) => {
    const docs = await serverQueryContent(event).find();
    const sitemap = new SitemapStream({
        hostname: import.meta.env.VITE_NUXT_PUBLIC_SITE_URL,
    });

    sitemap.write({
        url: "/",
    });

    for (const category of BLOG_CATEGORIES) {
        sitemap.write({
            url: category.path,
        });
    }

    for (const doc of docs) {
        if (doc._path?.startsWith("_")) continue;
        sitemap.write({
            url: doc._path,
            // lastMod: doc.updatedAt,
        });
    }
    sitemap.end();

    return streamToPromise(sitemap);
});
