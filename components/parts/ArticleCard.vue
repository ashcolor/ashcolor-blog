<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    linkPath: string;
    thumbnail: string;
    title: string;
    category: string;
    tags: Array<string>;
    createdAt: string;
    updatedAt: string;
}

const props = withDefaults(defineProps<Props>(), {
    linkPath: "",
    thumbnail: "",
    title: "",
    category: "",
    tags: () => [],
    createdAt: "",
    updatedAt: "",
});
</script>

<template>
    <NuxtLink :to="props.linkPath" class="card w-96 min-w-[24rem] border bg-base-100">
        <figure class="h-48">
            <img :src="props.thumbnail" :alt="props.title" />
        </figure>
        <div class="card-body justify-center">
            <h2 class="card-title">{{ props.title }}</h2>

            <div class="flex grow-0 flex-row items-center gap-1 text-sm text-slate-500">
                <Icon icon="bi:folder" />
                <p>{{ props.category }}</p>
            </div>
            <!-- <div class="flex flex-row items-center gap-1 text-sm text-slate-500">
                <Icon icon="bi:tags" />
                <div class="flex flex-row gap-2">
                    <span v-for="tag in props.tags" :key="tag" class="badge text-slate-500">
                        {{ tag }}
                    </span>
                </div>
            </div> -->
            <div class="flex flex-row items-center gap-2 text-sm text-slate-500">
                <div v-if="props.createdAt" class="flex flex-row items-center gap-1">
                    <Icon icon="ph:clock"></Icon>
                    <span>{{ props.createdAt }}</span>
                </div>
                <div v-if="props.updatedAt" class="flex flex-row items-center gap-1">
                    <Icon icon="ph:clock-clockwise"></Icon>
                    <span>{{ props.updatedAt }}</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
