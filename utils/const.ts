export const BLOG_TITLE = "あしゅログ";

export const BLOG_SUBTITLE = "システムエンジニア / DTMerのブログ";

export const BLOG_CATEGORIES = [
    {
        key: "gadget",
        name: "ガジェット",
        path: "/blog/gadget",
        thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/gadget/desk-tour/overall.jpg",
        isShowList: true,
    },
    {
        key: "programming",
        name: "プログラミング",
        path: "/blog/programming",
        thumbnail:
            "https://d2s4ypph6g1t06.cloudfront.net/img/blog/gadget/desk-tour-computer-accessories/key-cap.jpg",
        isShowList: true,
    },
    {
        key: "dtm",
        name: "DTM",
        path: "/blog/dtm",
        thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/dtm/my-vst/thumbnail.png",
        isShowList: true,
    },
    {
        key: "notion",
        name: "Notion",
        path: "/blog/notion",
        thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/notion/formulas/thumbnail.png",
        isShowList: false,
    },
    {
        key: "random-note",
        name: "雑記",
        path: "/blog/random-note",
        thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/gadget/desk-tour/overall.jpg",
        isShowList: false,
    },
];

export const BLOG_CATEGORY_MAP = new Map(
    BLOG_CATEGORIES.map((category) => [category.key, category.name])
);

export const AMAZON_ASSOCIATE_ID = "ashcolor-22";

export const DLSITE_ASSOCIATE_ID = "ashcolor";

export const RAKUTEN_ASSOCIATE_ID = "349366b6.92086da6.349366b7.0d318a37";

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

export const AMAZON_SALE_START_DATE = new Date("2024-05-31T09:00:00");
export const AMAZON_SALE_END_DATE = new Date("2024-06-03T23:59:00");
