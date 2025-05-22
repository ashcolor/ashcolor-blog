import { SitemapStream, streamToPromise } from "sitemap";
import { BLOG_CATEGORIES } from "@/utils/const";

export default defineEventHandler(async (event) => {
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

    const blogs = await queryCollection(event, "blog").all();
    const others = await queryCollection(event, "other").all();
    const docs = blogs.concat(others);

    for (const doc of docs) {
        if (doc.path?.startsWith("/_")) continue;

        const lastModString = doc.updatedAt || doc.createdAt;
        sitemap.write({
            url: doc.path,
            lastmod: lastModString ? `${lastModString.replace(/\//g, "-")}T09:00:00.000+09:00` : "",
        });
    }
    sitemap.end();

    return streamToPromise(sitemap);
});
