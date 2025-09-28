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
    <NuxtLink
        :to="props.linkPath"
        class="card card-side card-compact w-full overflow-hidden border bg-base-100"
    >
        <figure class="relative w-1/5 shrink-0">
            <img :src="props.thumbnail" :alt="props.title" class="absolute" loading="lazy" />
        </figure>
        <div class="card-body !gap-0.5">
            <h3 class="card-title text-base">{{ props.title }}</h3>
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
