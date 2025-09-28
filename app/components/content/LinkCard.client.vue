<script setup lang="ts">
interface Props {
    title?: string;
    url: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    url: "",
});

const { data, pending } = await useLazyAsyncData("ogp" + props.url, () => {
    const query = { url: props.url };
    return $fetch("/api/ogp", {
        query,
    });
});
</script>

<template>
    <NuxtLink
        :href="props.url"
        target="_blank"
        class="card card-side card-compact my-4 max-h-32 border bg-base-100"
    >
        <div class="card-body justify-between overflow-hidden">
            <div class="flex flex-col gap-2">
                <p>{{ data?.ogTitle ?? props.title }}</p>
                <p class="line-clamp-2 text-xs text-slate-500">{{ data?.ogDescription }}</p>
            </div>
            <p class="grow-0 text-xs">{{ data?.ogUrl ?? props.url }}</p>
        </div>
        <figure v-if="data?.ogImage?.[0]" class="relative !hidden shrink-0 sm:!flex sm:w-1/5">
            <img
                :src="data?.ogImage?.[0]?.url"
                :alt="data?.ogTitle"
                class="absolute"
                loading="lazy"
            />
        </figure>
    </NuxtLink>
</template>
