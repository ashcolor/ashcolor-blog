<script setup lang="ts">
import { AMAZON_ASSOCIATE_ID } from "@/utils/const";

interface Props {
    title: string;
    asin: string;
    imageUrl: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    asin: "",
    imageUrl: "",
});

const amazonUrl = computed(() => {
    return `https://www.amazon.co.jp/dp/${props.asin}/?tag=${AMAZON_ASSOCIATE_ID}`;
});
</script>

<template>
    <div class="my-4 flex flex-row items-center justify-center gap-4 border p-4">
        <a v-if="imageUrl" :href="amazonUrl" target="_blank" rel="noopener noreferrer">
            <img :src="imageUrl" :alt="props.title" />
        </a>
        <div class="flex grow flex-col gap-2">
            <div class="text-lg font-bold">
                {{ props.title }}
            </div>
            <div class="flex flex-row gap-2">
                <span v-if="props.asin" class="grow">
                    <a
                        class="btn bg-[#ff9900] text-white hover:bg-[#ff9900]"
                        :href="amazonUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Amazonで探す
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>
