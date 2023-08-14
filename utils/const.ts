export const BLOG_TITLE = "あしゅログ";

export const BLOG_SUBTITLE = "システムエンジニア / DTMerのブログ";

export const BLOG_CATEGORIES = [
    {
        key: "gadget",
        name: "ガジェット",
        path: "/blog/gadget",
        thumbnail:
            "https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/gadget/desk-tour/overall.jpg",
        isShowList: true,
    },
    {
        key: "programming",
        name: "プログラミング",
        path: "/blog/programming",
        thumbnail:
            "https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/gadget/desk-tour-computer-accessories/key-cap.jpg",
        isShowList: true,
    },
    {
        key: "dtm",
        name: "DTM",
        path: "/blog/dtm",
        thumbnail:
            "https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/dtm/my-vst/thumbnail.png",
        isShowList: true,
    },
    {
        key: "random-note",
        name: "雑記",
        path: "/blog/random-note",
        thumbnail: "",
        isShowList: false,
    },
];

export const BLOG_CATEGORY_MAP = new Map(
    BLOG_CATEGORIES.map((category) => [category.key, category.name])
);

export const AMAZON_ASSOCIATE_ID = "ashcolor-22";

export const RAKUTEN_ASSOCIATE_ID = "349366b6.92086da6.349366b7.0d318a37";
