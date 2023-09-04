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
    <NuxtLink :to="props.linkPath" class="card-compact card card-side w-full border bg-base-100">
        <figure class="w-32 shrink-0 grow-0 object-cover">
            <img :src="props.thumbnail" :alt="props.title" />
        </figure>
        <div class="card-body !gap-0.5">
            <h3 class="card-title text-base">{{ props.title }}</h3>
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
