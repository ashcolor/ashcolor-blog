export const BLOG_TITLE = "あしゅログ";
export const BLOG_SUBTITLE = "システムエンジニア / DTMerのブログ";
export const BLOG_CATEGORIES = [
    {
        key: "gadget",
        name: "ガジェット",
        path: "/blog/gadget",
        thumbnail: "https://img.blog.ashcolor.jp/img/pc/2025-12-10_22-25-37_bngk8eai.webp",
        iconName: "bi:keyboard",
        isShowList: true,
    },
    {
        key: "programming",
        name: "システム開発",
        path: "/blog/programming",
        thumbnail:
            "https://img.blog.ashcolor.jp/img/pc/gadget_desk-tour-computer-accessories_key-cap.webp",
        iconName: "bi:code-slash",
        isShowList: true,
    },
    {
        key: "dtm",
        name: "DTM",
        path: "/blog/dtm",
        thumbnail: "https://img.blog.ashcolor.jp/img/pc/dtm_my-vst_thumbnail.webp",
        iconName: "bi:music-note-beamed",
        isShowList: true,
    },
    {
        key: "notion",
        name: "Notion",
        path: "/blog/notion",
        thumbnail: "https://img.blog.ashcolor.jp/img/pc/notion_formulas_thumbnail.webp",
        iconName: "",
        isShowList: false,
    },
    {
        key: "random-note",
        name: "雑記",
        path: "/blog/random-note",
        thumbnail: "https://img.blog.ashcolor.jp/img/pc/2025-12-10_22-25-37_bngk8eai.webp",
        iconName: "",
        isShowList: false,
    },
];
export const BLOG_CATEGORY_MAP = new Map(
    BLOG_CATEGORIES.map((category) => [category.key, category.name])
);
export const ACCOUNTS = [
    {
        name: "Twitter",
        icon: "mingcute:social-x-line",
        url: "https://twitter.com/ashcolor06",
    },
    {
        name: "GitHub",
        icon: "mdi:github",
        url: "https://github.com/ashcolor",
    },
    {
        name: "メール",
        icon: "fluent:mail-16-filled",
        url: "mailto:ashcolor27@gmail.com",
    },
];

export const IMAGE_PATH_BASE = "https://img.blog.ashcolor.jp";

export const AMAZON_ASSOCIATE_ID = "ashcolor-22";
export const DLSITE_ASSOCIATE_ID = "ashcolor";
export const RAKUTEN_ASSOCIATE_ID = "349366b6.92086da6.349366b7.0d318a37";
export const AMAZON_SALE_URL = "https://amzn.to/47dmc0Y";
export const AMAZON_SALE_START_DATE = new Date("2025-02-28T09:00:00");
export const AMAZON_SALE_END_DATE = new Date("2025-03-04T23:59:00");
export const AMAZON_SALE_MAX_POINT_UP = 7.5;

export const JAPANESE_DAYS = ["日", "月", "火", "水", "木", "金", "土"];
