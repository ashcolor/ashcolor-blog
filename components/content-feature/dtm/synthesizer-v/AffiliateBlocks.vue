<script setup lang="ts">
const affiliateBlocks = [
    {
        title: "Synthesizer V Studio 2 Pro スターターパック",
        imageUrl: "https://m.media-amazon.com/images/I/417oOhAvY5L._SL160_.jpg",
        asin: "B0DVGBXQWD",
    },
    {
        title: "Synthesizer V Studio 2 Pro",
        imageUrl: "https://m.media-amazon.com/images/I/41AMgVyK6DL._SL160_.jpg",
        asin: "B0DVH27V2D",
    },
    {
        title: "Synthesizer V 2 AI miki",
        imageUrl: "https://m.media-amazon.com/images/I/415qpDGofBL._SL160_.jpg",
        asin: "B0DVGV742C",
    },
    {
        title: "Synthesizer V 2 AI 氷山キヨテル",
        imageUrl: "https://m.media-amazon.com/images/I/41CNRe2o05L._SL160_.jpg",
        asin: "B0DVGF9C4K",
    },
    {
        title: "Synthesizer V 2 AI 宮舞モカ",
        imageUrl: "https://m.media-amazon.com/images/I/41MhkbXDMGL._SL160_.jpg",
        asin: "B0DVGJFPC3",
    },
    {
        title: "Synthesizer V AI 重音テト パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/417GBcwOqaL._SL160_.jpg",
        asin: "B0BYZ417DW",
    },
    {
        title: "Synthesizer V AI 重音テト ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01001000/VJ01000376_img_main.webp",
        asin: "B0CJ4PZFV9",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01000376.html",
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
