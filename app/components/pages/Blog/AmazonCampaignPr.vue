<script lang="ts" setup>
const isShow = new Date() < AMAZON_SALE_END_DATE;
</script>

<template>
    <div v-if="isShow">
        <ProseH3>Amazon ポイントアップキャンペーン</ProseH3>
        <div class="flex flex-col gap-2">
            <p class="flex flex-row items-baseline gap-2">
                <span class="text-xl">
                    {{ AMAZON_SALE_START_DATE.getMonth() + 1 }}/{{
                        AMAZON_SALE_START_DATE.getDate()
                    }}
                </span>
                <span>({{ JAPANESE_DAYS[AMAZON_SALE_START_DATE.getDay()] }})</span>
                <span>～</span>
                <span class="text-xl">
                    {{ AMAZON_SALE_END_DATE.getMonth() + 1 }}/{{ AMAZON_SALE_END_DATE.getDate() }}
                </span>
                <span>({{ JAPANESE_DAYS[AMAZON_SALE_END_DATE.getDay()] }})</span>
            </p>
            <p class="flex flex-row items-baseline gap-2">
                <span>最大</span>
                <span class="text-2xl">{{ AMAZON_SALE_MAX_POINT_UP }}</span>
                <span>%</span>
                <span>ポイントアップ</span>
            </p>
            <a
                class="btn btn-lg btn-block grow bg-[#ffd814] hover:bg-[#ffd814]"
                :href="AMAZON_SALE_URL"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon name="bi:amazon"></Icon>
                キャンペーンにエントリー
            </a>
        </div>
    </div>
</template>

<style scoped></style>
