<script setup lang="ts">
import { AMAZON_ASSOCIATE_ID } from "@/utils/const";

interface Props {
    title: string;
    asin: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    asin: "",
});

const amazonUrl = computed(() => {
    return `https://www.amazon.co.jp/dp/${props.asin}/?tag=${AMAZON_ASSOCIATE_ID}`;
});

const amazonImageUrl = computed(() => {
    return `https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${props.asin}&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=${AMAZON_ASSOCIATE_ID}&language=ja_JP`;
});

const rakutenAffiliateUrl = computed(() => {
    const rakutenSearhUrl = `https://search.rakuten.co.jp/search/mall/${props.title}/`;
    return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_ASSOCIATE_ID}/?pc=${encodeURI(
        rakutenSearhUrl
    )}`;
});
</script>

<template>
    <div class="my-4 flex flex-row items-center justify-center gap-4 border-2 border-base-300 p-4">
        <a v-if="props.asin" :href="amazonUrl" target="_blank" rel="noopener noreferrer">
            <img :src="amazonImageUrl" />
        </a>
        <div class="flex grow flex-col gap-2">
            <div class="text-lg font-bold">
                {{ props.title }}
            </div>
            <div class="flex flex-row gap-2">
                <span v-if="props.asin">
                    <a
                        class="btn bg-[#ff9900] text-primary-content hover:bg-[#ff9900]"
                        :href="amazonUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Amazonで探す
                    </a>
                </span>
                <span>
                    <a
                        class="btn bg-[#bf0000] text-primary-content hover:bg-[#bf0000]"
                        :href="rakutenAffiliateUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        楽天市場で探す
                    </a>
                </span>
            </div>
            <div>
                <p class="text-xs">※アフィリエイトリンクを使用しています。</p>
            </div>
        </div>
    </div>
</template>
