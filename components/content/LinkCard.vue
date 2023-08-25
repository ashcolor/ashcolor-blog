<script setup lang="ts">
interface Props {
    url: string;
}

const props = withDefaults(defineProps<Props>(), {
    url: "",
});

const params = { url: props.url };
const query = new URLSearchParams(params);

let data: Object | null = null;

try {
    const response = await fetch(`${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}/api/ogp?${query}`);

    if (response.ok) {
        data = await response?.json();
    }
} catch (error) {}
</script>

<template>
    <div v-if="!data">
        <NuxtLink :href="props.url" target="_blank"></NuxtLink>
    </div>
    <NuxtLink
        v-else
        :href="data?.ogUrl ?? data?.requestUrl"
        target="_blank"
        class="card card-side card-compact my-2 max-h-[8rem] border bg-base-100"
    >
        <div class="card-body justify-between">
            <div class="flex flex-col gap-2">
                <p>{{ data?.ogTitle }}</p>
                <p class="line-clamp-2 text-xs text-slate-500">{{ data?.ogDescription }}</p>
            </div>
            <p class="grow-0 text-xs">{{ data?.ogUrl ?? data?.requestUrl }}</p>
        </div>
        <figure v-show="!data?.ogImage" class="!hidden w-56 shrink-0 sm:!flex">
            <img :src="data?.ogImage[0]?.url" :alt="data?.ogTitle" />
        </figure>
    </NuxtLink>
</template>
