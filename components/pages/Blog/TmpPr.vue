<script lang="ts" setup>
const isShow = AMAZON_SALE_START_DATE <= new Date() && new Date() < AMAZON_SALE_END_DATE;
const href = "https://amzn.to/3IR2zk0";
</script>

<template>
    <div v-if="isShow">
        <ProseH3>PR</ProseH3>
        <ProseH4>Amazon ポイントアップキャンペーン</ProseH4>
        <div class="flex flex-col gap-2">
            <p>
                <span class="text-xl"
                    >{{ AMAZON_SALE_START_DATE.getMonth() + 1 }}月{{
                        AMAZON_SALE_START_DATE.getDate()
                    }}日</span
                >(金) 9:00 ～
                <span class="text-xl"
                    >{{ AMAZON_SALE_END_DATE.getMonth() + 1 }}月{{
                        AMAZON_SALE_END_DATE.getDate()
                    }}日</span
                >(月) 23:59
            </p>
            <p>
                <span>
                    <span class="marker">最大8%</span>
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
