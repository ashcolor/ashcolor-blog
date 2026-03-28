<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id?: string }>();
const heading = 5;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<template>
    <h5 :id="id" class="mb-4 mt-8 text-lg font-medium">
        <a v-if="id && generate" :href="`#${id}`">
            <slot />
        </a>
        <slot v-else />
    </h5>
</template>
