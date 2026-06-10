import { parse } from "node-html-parser";

// Cloudflare Workers 上では Node ネイティブ依存の open-graph-scraper が動かないため、
// Web 標準の fetch + node-html-parser での meta タグ抽出に置き換えている（ランタイム非依存）。

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const url = query?.url;

    if (!url || typeof url !== "string") {
        throw createError({
            statusCode: 400,
            statusMessage: "url query is required",
        });
    }

    let html: string;
    try {
        const response = await fetch(url, {
            headers: {
                // OGP を返さないサイト対策に一般的な UA を付与する
                "user-agent":
                    "Mozilla/5.0 (compatible; ashcolor-blog-ogp/1.0; +https://blog.ashcolor.jp)",
                accept: "text/html,application/xhtml+xml",
            },
            redirect: "follow",
        });

        if (!response.ok) {
            throw new Error(`status ${response.status}`);
        }
        html = await response.text();
    } catch {
        throw createError({
            statusCode: 400,
            statusMessage: "get OGP failed",
        });
    }

    const root = parse(html);

    // <meta property="og:title" content="..."> / <meta name="description" content="...">
    // のどちらの形式も拾えるよう property と name を見る。先勝ちで重複を無視する。
    const meta: Record<string, string> = {};
    for (const el of root.querySelectorAll("meta")) {
        const key = el.getAttribute("property") ?? el.getAttribute("name");
        const content = el.getAttribute("content");
        if (key && content !== undefined && !(key in meta)) {
            meta[key] = content;
        }
    }

    const documentTitle = root.querySelector("title")?.text.trim() ?? "";

    const ogTitle = meta["og:title"] ?? documentTitle;
    const ogDescription = meta["og:description"] ?? meta["description"] ?? "";
    const ogUrl = meta["og:url"] ?? url;
    const ogImageUrl = meta["og:image"] ?? meta["og:image:url"] ?? "";

    // open-graph-scraper のレスポンス形に合わせる（LinkCard が参照しているため）
    return {
        ogTitle,
        ogDescription,
        ogUrl,
        ogImage: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    };
});
