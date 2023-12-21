<script setup lang="ts">
import { DLSITE_ASSOCIATE_ID } from "@/utils/const";

interface Props {
    title: string;
    link: string;
    imageUrl: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    link: "",
    imageUrl: "",
});

const encodedUri = computed(() => encodeURIComponent(props.link));

const dlSiteUrl = computed(() => {
    return `https://www.dlsite.com/soft/dlaf/=/aid/${DLSITE_ASSOCIATE_ID}/url/${encodedUri.value}`;
});
</script>

<template>
    <div class="my-4 flex flex-row items-center justify-center gap-4 border p-4">
        <a :href="dlSiteUrl" target="_blank" rel="noopener noreferrer">
            <img :src="props.imageUrl" :alt="props.title" class="max-h-[8rem]" />
        </a>
        <div class="flex grow flex-col gap-2">
            <div class="text-lg font-bold">
                {{ props.title }}
            </div>
            <div class="flex flex-row gap-2">
                <a
                    class="btn bg-[#039] text-white hover:bg-[#039]"
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
