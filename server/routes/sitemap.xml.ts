// import { SitemapStream, streamToPromise } from "sitemap";
// import { serverQueryContent } from "#content/server";
// import { BLOG_CATEGORIES } from "@/utils/const";

// export default defineEventHandler(async (event) => {
//     const sitemap = new SitemapStream({
//         hostname: import.meta.env.VITE_NUXT_PUBLIC_SITE_URL,
//     });

//     sitemap.write({
//         url: "/",
//     });

//     for (const category of BLOG_CATEGORIES) {
//         sitemap.write({
//             url: category.path,
//         });
//     }

//     const docs = await serverQueryContent(event).find();
//     for (const doc of docs) {
//         if (doc._path?.startsWith("/_")) continue;

//         const lastModString = doc.updatedAt || doc.createdAt;
//         sitemap.write({
//             url: doc._path,
//             lastmod: lastModString ? `${lastModString.replace(/\//g, "-")}T09:00:00.000+09:00` : "",
//         });
//     }
//     sitemap.end();

//     return streamToPromise(sitemap);
// });
