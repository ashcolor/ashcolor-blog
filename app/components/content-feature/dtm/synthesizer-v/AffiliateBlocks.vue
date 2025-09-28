<script setup lang="ts">
const affiliateBlocks = [
    {
        title: "Synthesizer V Studio 2 Pro スターターパック",
        imageUrl: "https://m.media-amazon.com/images/I/417oOhAvY5L._SL160_.jpg",
        asin: "B0DVGBXQWD",
        dlSiteLink: "",
    },
    {
        title: "Synthesizer V Studio 2 Pro",
        imageUrl: "https://m.media-amazon.com/images/I/41AMgVyK6DL._SL160_.jpg",
        asin: "B0DVH27V2D",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01004024.html",
    },
    {
        title: "Synthesizer V 2 AI Megpoid ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01005000/VJ01004826_img_main.webp",
        asin: "",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01004826.html",
    },
    {
        title: "Synthesizer V 2 AI Megpoid パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/412gDwzVjlL._SL160_.jpg",
        asin: "B0FLJRJ7ZS",
        dlSiteLink: "",
    },
    {
        title: "Synthesizer V 2 AI 音街ウナ ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01005000/VJ01004828_img_main.webp",
        asin: "",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01004828.html",
    },
    {
        title: "Synthesizer V 2 AI 音街ウナ パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/41SQ0MtMCGL._SL160_.jpg",
        asin: "B0FLJTT8WN",
        dlSiteLink: "",
    },
    {
        title: "Synthesizer V 2 AI 夢ノ結唱 ROSE ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01004000/VJ01003885_img_main.webp",
        asin: "B0DYT3QD9C",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01003885.html",
    },
    {
        title: "Synthesizer V 2 AI miki ダウンロード版",
        imageUrl: "https://m.media-amazon.com/images/I/51N7iKS8SHL._SL160_.jpg",
        asin: "B0F2SS4PH2",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01004027.html",
    },
    {
        title: "Synthesizer V 2 AI miki パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/415qpDGofBL._SL160_.jpg",
        asin: "B0DVGV742C",
        dlSiteLink: "",
    },
    {
        title: "Synthesizer V 2 AI 氷山キヨテル ダウンロード版",
        imageUrl: "https://m.media-amazon.com/images/I/51IfKSLpZcL._SL160_.jpg",
        asin: "B0F2SG7K27",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01004026.html",
    },
    {
        title: "Synthesizer V 2 AI 氷山キヨテル パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/41CNRe2o05L._SL160_.jpg",
        asin: "B0DVGF9C4K",
        dlSiteLink: "",
    },
    {
        title: "Synthesizer V 2 AI 宮舞モカ ダウンロード版",
        imageUrl: "https://m.media-amazon.com/images/I/51hpu2HZ8+L._SL160_.jpg",
        asin: "B0F2SMJP7B",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01004025.html",
    },
    {
        title: "Synthesizer V 2 AI 宮舞モカ パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/41MhkbXDMGL._SL160_.jpg",
        asin: "B0DVGJFPC3",
        dlSiteLink: "",
    },
    {
        title: "Synthesizer V AI 重音テト ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01001000/VJ01000376_img_main.webp",
        asin: "B0CJ4PZFV9",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01000376.html",
    },
    {
        title: "Synthesizer V AI 重音テト パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/417GBcwOqaL._SL160_.jpg",
        asin: "B0BYZ417DW",
    },
];
</script>

<template>
    <AffiliateBlock
        v-for="block in affiliateBlocks"
        :key="block.title"
        :title="block.title"
        :image-url="block.imageUrl"
        :asin="block.asin"
        :dl-site-link="block.dlSiteLink"
    ></AffiliateBlock>
</template>
