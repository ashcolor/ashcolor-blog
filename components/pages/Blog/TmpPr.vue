<script lang="ts" setup>
const isShow = new Date() < AMAZON_SALE_END_DATE;
</script>

<template>
    <div v-if="isShow">
        <ProseH3>PR</ProseH3>
        <ProseH4>Amazon ポイントアップキャンペーン</ProseH4>
        <div class="flex flex-col gap-2">
            <p>
                <span class="text-xl">
                    {{ AMAZON_SALE_START_DATE.getMonth() + 1 }}月{{
                        AMAZON_SALE_START_DATE.getDate()
                    }}日({{ JAPANESE_DAYS[AMAZON_SALE_START_DATE.getDay()] }})
                </span>
                <span>9:00</span>
                <span>&emsp;～&emsp;</span>
                <span class="text-xl">
                    {{ AMAZON_SALE_END_DATE.getMonth() + 1 }}月{{
                        AMAZON_SALE_END_DATE.getDate()
                    }}日({{ JAPANESE_DAYS[AMAZON_SALE_END_DATE.getDay()] }})
                </span>
                <span>23:59</span>
            </p>
            <p>
                <span>
                    <span class="marker">最大{{ AMAZON_SALE_MAX_POINT_UP }}%</span>
                    ポイントアップ
                </span>
            </p>
            <a
                class="btn btn-block grow bg-[#ffd814] hover:bg-[#ffd814]"
                :href="AMAZON_SALE_URL"
                target="_blank"
                rel="noopener noreferrer"
            >
                キャンペーンにエントリー
            </a>
        </div>
    </div>
</template>

<style scoped></style>
