<script setup lang="ts">
const affiliateBlocks = [
    {
        title: "Synthesizer V Studio Pro",
        imageUrl: "https://m.media-amazon.com/images/I/41nl+l0DddL._SL160_.jpg",
        asin: "B08B34MWKF",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ013608.html",
    },
    {
        title: "Synthesizer V Studio Pro スターターパック",
        imageUrl: "https://m.media-amazon.com/images/I/51jy+o9TSXL._SL160_.jpg",
        asin: "B08B3CNY2D",
    },
    {
        title: "Synthesizer V AI 音街ウナ ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01004000/VJ01003035_img_main.jpg",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01003035.html",
    },
    {
        title: "Synthesizer V AI 音街ウナ パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/517TJjJ5agL._SL160_.jpg",
        asin: "B0DK972FMC",
    },
    {
        title: "Synthesizer V AI 宮舞モカ ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01003000/VJ01002763_img_main.jpg",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01002763.html",
        asin: "B0DG8GXPYD",
    },
    {
        title: "Synthesizer V AI 宮舞モカ パッケージ版",
        imageUrl: "https://m.media-amazon.com/images/I/41SNAzetUfL._SL160_.jpg",
        asin: "B0DFPNVB7V",
    },
    {
        title: "Synthesizer V ROSE(ローズ) ダウンロード版",
        imageUrl:
            "https://img.dlsite.jp/modpub/images2/work/professional/VJ01002000/VJ01001167_img_main.webp",
        asin: "B0BMTTT3V7",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01001167.html",
    },

    {
        title: "Synthesizer V AI Megpoid パッケージ版",
        asin: "B0CNSLGNH7",
        imageUrl: "https://m.media-amazon.com/images/I/41PINo4+UcL._SL160_.jpg",
    },
    {
        title: "Synthesizer V AI Megpoid ダウンロード版",
        asin: "B0CS5T4KZ4",
        imageUrl:
            "https:///img.dlsite.jp/modpub/images2/work/professional/VJ01002000/VJ01001252_img_main.jpg",
        dlSiteLink: "https://www.dlsite.com/soft/work/=/product_id/VJ01001252.html",
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
