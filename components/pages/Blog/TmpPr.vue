<script lang="ts" setup>
const endDate = new Date("2024-03-23T23:59:00");
const isShow = new Date() < endDate;
const href = "https://amzn.to/3IR2zk0";
</script>

<template>
    <div v-if="isShow">
        <ProseH3>PR</ProseH3>
        <ProseH4>Amazon 新生活SALE FINAL</ProseH4>
        <div class="flex flex-col gap-2">
            <p>
                <span class="text-xl">3月29日</span>(金) 9:00 ～
                <span class="text-xl">4月1日</span>(月) 23:59
            </p>
            <p>
                <span>
                    パソコン・周辺機器・PCソフトは
                    <span class="marker">最大10%</span>
                    ポイントアップ
                </span>
            </p>
            <a
                class="btn btn-block grow bg-[#ffd814] hover:bg-[#ffd814]"
                :href="href"
                target="_blank"
                rel="noopener noreferrer"
            >
                キャンペーンにエントリー
            </a>
        </div>
    </div>
</template>

<style scoped></style>
