<script setup lang="ts">
interface Props {
    linkPath: string;
    thumbnail: string;
    title: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

const props = withDefaults(defineProps<Props>(), {
    linkPath: "",
    thumbnail: "",
    title: "",
    category: "",
    createdAt: "",
    updatedAt: "",
});
</script>

<template>
    <NuxtLink :to="props.linkPath" class="card card-compact w-96 min-w-[24rem] bg-base-100">
        <figure class="relative h-48">
            <div class="absolute left-0 top-0 bg-base-200 px-2 py-0.5 text-sm">
                <IconWithText icon="bi:folder">
                    {{ props.category }}
                </IconWithText>
            </div>
            <img :src="props.thumbnail" :alt="props.title" loading="lazy" />
        </figure>
        <div class="card-body !gap-0.5 !px-0 !py-4">
            <h3 class="card-title">{{ props.title }}</h3>
            <div class="flex flex-row gap-2 text-sm text-slate-500">
                <IconWithText v-if="props.createdAt" icon="ph:clock">
                    {{ props.createdAt }}
                </IconWithText>
                <IconWithText v-if="props.updatedAt" icon="ph:clock-clockwise">
                    {{ props.updatedAt }}
                </IconWithText>
            </div>
        </div>
    </NuxtLink>
</template>
