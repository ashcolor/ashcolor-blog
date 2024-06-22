<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: "",
    },
    target: {
        type: String,
        default: "_blank",
        required: false,
    },
});
</script>

<template>
    <NuxtLink
        :href="href"
        :target="target"
        class="text-blue-600 underline underline-offset-2 visited:text-purple-600"
    >
        <slot />
    </NuxtLink>
</template>
