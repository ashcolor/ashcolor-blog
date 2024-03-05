<script setup lang="ts">
useHead({
    htmlAttrs: { "data-theme": "mytheme" },
});
</script>

<template>
    <NuxtLayout>
        <!--  内部リンク遷移するとエラーになる問題の対応策 -->
        <!-- @see https://github.com/nuxt/nuxt/issues/13350#issuecomment-1397297746  -->
        <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
</template>
