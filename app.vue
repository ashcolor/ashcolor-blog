<script setup lang="ts">
const siteTitle = "個人ブログ";
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${siteTitle}` : `${siteTitle}`;
    },
    htmlAttrs: { "data-theme": "corporate" },
});
</script>

<template>
    <NuxtPage />
</template>
