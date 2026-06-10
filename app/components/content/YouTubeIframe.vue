<script setup lang="ts">
// YouTube 埋め込みは記事本文中（MDC）から呼ばれ、多くがファーストビュー外にある。
// 中身（YouTubeIframeContent）を visible 戦略で遅延 hydration し、画面に入るまで
// マウント・サムネ画像取得・スクリプト読み込みを遅らせて初期描画の負荷を抑える。
const LazyYouTubeIframeContent = defineLazyHydrationComponent(
    "visible",
    () => import("./YouTubeIframeContent.vue")
);

interface Props {
    videoId: string;
    title?: string;
    start?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
    videoId: "",
    title: "",
    start: 0,
});
</script>

<template>
    <LazyYouTubeIframeContent
        :video-id="props.videoId"
        :title="props.title"
        :start="props.start"
        :hydrate-on-visible="{ rootMargin: '200px' }"
    />
</template>
