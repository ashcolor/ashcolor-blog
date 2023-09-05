<script setup lang="ts">
interface Props {
    url: string;
}

const props = withDefaults(defineProps<Props>(), {
    url: "",
});

const params = { url: props.url };
const query = new URLSearchParams(params);

const { state } = useAsyncState(async () => {
    const response = await fetch(`${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}/api/ogp?${query}`);
    if (response.ok) {
        return await response?.json();
    }
}, null);
</script>

<template>
    <div v-if="!state">
        <NuxtLink :href="props.url" target="_blank"></NuxtLink>
    </div>
    <NuxtLink
        v-else
        :href="state?.ogUrl ?? state?.requestUrl"
        target="_blank"
        class="card card-side card-compact my-2 max-h-[8rem] border bg-base-100"
    >
        <div class="card-body justify-between overflow-hidden">
            <div class="flex flex-col gap-2">
                <p>{{ state?.ogTitle }}</p>
                <p class="line-clamp-2 text-xs text-slate-500">{{ state?.ogDescription }}</p>
            </div>
            <p class="grow-0 text-xs">{{ state?.ogUrl ?? state?.requestUrl }}</p>
        </div>
        <figure v-if="state?.ogImage?.[0]" class="relative !hidden shrink-0 sm:!flex sm:w-[20%]">
            <img
                :src="state?.ogImage?.[0]?.url"
                :alt="state?.ogTitle"
                class="absolute"
                loading="lazy"
            />
        </figure>
    </NuxtLink>
</template>
