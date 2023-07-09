export const BLOG_TITLE = "あしゅログ（仮）";

export const BLOG_SUBTITLE = "💻システムエンジニア/🎹DTMerのブログ";

export const BLOG_CATEGORIES = [
    {
        key: "gadget",
        name: "ガジェット",
        path: "/blog/gadget",
    },
    {
        key: "programming",
        name: "プログラミング",
        path: "/blog/programming",
    },
    {
        key: "dtm",
        name: "DTM",
        path: "/blog/dtm",
    },
    {
        key: "random-note",
        name: "雑記",
        path: "/blog/random-note",
    },
];

export const BLOG_CATEGORY_MAP = new Map(
    BLOG_CATEGORIES.map((category) => [category.key, category.name])
);
