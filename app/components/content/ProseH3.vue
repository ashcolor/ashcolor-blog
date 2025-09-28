<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id?: string }>();
const heading = 3;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<template>
    <ClientOnly>
        <h3
            :id="id"
            class="mb-4 mt-8 scroll-mt-24 border-b-2 border-primary py-4 text-xl font-bold"
        >
            <a v-if="id && generate" :href="`#${id}`">
                <slot />
            </a>
            <slot v-else /></h3
    ></ClientOnly>
</template>
