<script setup lang="ts">
// XEmbed は記事本文中（MDC）から呼ばれ、多くがファーストビュー外にある。
// 中身（XEmbedContent）を visible 戦略で遅延 hydration し、画面に入るまで
// hydration を遅らせることで初期描画（LCP）のメインスレッドブロックを避ける。
// SSR で出力された HTML はそのまま残るため SEO・初期表示には影響しない。
const LazyXEmbedContent = defineLazyHydrationComponent(
    "visible",
    () => import("./XEmbedContent.vue")
);

defineProps<{
    tweetId: string;
}>();
</script>

<template>
    <LazyXEmbedContent :tweet-id="tweetId" :hydrate-on-visible="{ rootMargin: '200px' }" />
</template>
