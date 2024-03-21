<script setup lang="ts">
import { AMAZON_ASSOCIATE_ID } from "@/utils/const";

interface Props {
    title: string;
    imageUrl: string;
    // for amazon
    asin?: string;
    // for DlSite
    dlSiteLink?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    asin: "",
    dlSiteLink: "",
    imageUrl: "",
});

const amazonUrl = computed(() => {
    return `https://www.amazon.co.jp/dp/${props.asin}/?tag=${AMAZON_ASSOCIATE_ID}`;
});

const encodedUri = computed(() => encodeURIComponent(props.dlSiteLink));

const dlSiteUrl = computed(() => {
    return `https://www.dlsite.com/soft/dlaf/=/aid/${DLSITE_ASSOCIATE_ID}/url/${encodedUri.value}`;
});
</script>

<template>
    <div
        class="my-4 flex flex-col place-items-stretch gap-4 border p-4 sm:flex-row sm:items-center sm:justify-center"
    >
        <a
            v-if="imageUrl"
            :href="amazonUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="self-center"
        >
            <img :src="imageUrl" :alt="props.title" class="max-w-48" loading="lazy" />
        </a>
        <div class="flex grow flex-col gap-2">
            <div class="text-lg font-bold">
                {{ props.title }}
            </div>
            <div class="flex flex-col gap-2 sm:flex-row">
                <a
                    v-if="props.asin"
                    class="btn grow bg-[#ffd814] hover:bg-[#ffd814]"
                    :href="amazonUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Amazonで購入
                </a>
                <a
                    v-if="props.dlSiteLink"
                    class="btn grow bg-[#039] text-white hover:bg-[#039]"
                    :href="dlSiteUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DLsiteで購入
                </a>
            </div>
        </div>
    </div>
</template>
