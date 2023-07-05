<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${BLOG_TITLE}` : `${BLOG_TITLE}`;
    },
    htmlAttrs: { "data-theme": "mytheme" },
});
</script>

<template>
    <NuxtPage />
</template>
