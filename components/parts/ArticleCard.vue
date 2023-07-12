<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    linkPath: string;
    thumbnail: string;
    title: string;
    category: string;
    tags: Array<string>;
    updatedAt: string;
}

const props = withDefaults(defineProps<Props>(), {
    linkPath: "",
    thumbnail: "",
    title: "",
    category: "",
    tags: () => [],
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

            <div class="text-mute flex grow-0 flex-row items-center gap-2 text-sm">
                <Icon icon="bi:folder" />
                <p>{{ props.category }}</p>
            </div>
            <p class="text-mute flex grow-0 flex-row items-center gap-2 text-sm">
                <Icon icon="bi:arrow-counterclockwise" class="inline"></Icon>
                <span>{{ props.updatedAt }}</span>
            </p>
            <!-- <div class="flex flex-row items-center gap-1 text-sm text-mute">
                <Icon icon="bi:tags" />
                <div class="flex flex-row gap-2">
                    <span v-for="tag in props.tags" :key="tag" class="badge text-mute">
                        {{ tag }}
                    </span>
                </div>
            </div> -->
        </div>
    </NuxtLink>
</template>
