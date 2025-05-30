<script setup lang="ts">
interface Props {
    linkPath: string;
    thumbnail: string | null;
    title: string;
    category: string | null;
    createdAt: string | null;
    updatedAt: string | null;
}

const props = withDefaults(defineProps<Props>(), {
    linkPath: "",
    thumbnail: "",
    title: "",
    category: "",
    createdAt: null,
    updatedAt: null,
});
</script>

<template>
    <NuxtLink :to="props.linkPath" class="card card-compact w-96 min-w-96 bg-base-100">
        <figure class="relative h-48">
            <div class="absolute left-0 top-0 bg-base-200 px-2 py-0.5 text-sm">
                <IconWithText name="bi:folder">
                    {{ props.category }}
                </IconWithText>
            </div>
            <img :src="props.thumbnail" :alt="props.title" loading="lazy" />
        </figure>
        <div class="card-body !gap-0.5 !px-0 !py-4">
            <h3 class="card-title">{{ props.title }}</h3>
            <div class="flex flex-row gap-2 text-sm text-slate-500">
                <IconWithText v-if="props.createdAt" name="ph:clock">
                    {{ Util.formatDate(props.createdAt) }}
                </IconWithText>
                <IconWithText v-if="props.updatedAt" name="ph:clock-clockwise">
                    {{ Util.formatDate(props.updatedAt) }}
                </IconWithText>
            </div>
        </div>
    </NuxtLink>
</template>
