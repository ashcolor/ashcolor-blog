<script setup lang="ts">
import { Icon } from "@iconify/vue";

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
        <!-- <div class="relative"> -->
        <figure class="relative h-48">
            <div class="absolute left-0 top-0 bg-base-200 px-2 py-0.5">
                <div class="flex grow-0 flex-row items-center gap-1 text-sm">
                    <Icon icon="bi:folder" />
                    <p>{{ props.category }}</p>
                </div>
            </div>
            <img :src="props.thumbnail" :alt="props.title" />
        </figure>
        <!-- </div> -->
        <div class="card-body">
            <h3 class="card-title">{{ props.title }}</h3>
            <div class="flex flex-row gap-2 text-sm text-slate-500">
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
