export const BLOG_TITLE = "あしゅログ";

export const BLOG_SUBTITLE = "システムエンジニア / DTMerのブログ";

export const BLOG_CATEGORIES = [
    {
        key: "gadget",
        name: "ガジェット",
        path: "/blog/gadget",
        isShowHeader: true,
    },
    {
        key: "programming",
        name: "プログラミング",
        path: "/blog/programming",
        isShowHeader: true,
    },
    {
        key: "dtm",
        name: "DTM",
        path: "/blog/dtm",
        isShowHeader: true,
    },
    {
        key: "random-note",
        name: "雑記",
        path: "/blog/random-note",
        isShowHeader: false,
    },
];

export const BLOG_CATEGORY_MAP = new Map(
    BLOG_CATEGORIES.map((category) => [category.key, category.name])
);
