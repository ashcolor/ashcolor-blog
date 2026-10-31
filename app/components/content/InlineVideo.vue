<script setup lang="ts">
interface Props {
    src: string;
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
});

// 画面に入るまで動画を読み込まない（初期表示の転送量削減）
const videoRef = ref<HTMLVideoElement>();
const isVisible = ref(false);
const { stop } = useIntersectionObserver(
    videoRef,
    ([entry]) => {
        if (entry?.isIntersecting) {
            isVisible.value = true;
            stop();
        }
    },
    { rootMargin: "200px" }
);
</script>

<template>
    <div class="my-8 flex flex-col place-items-center gap-2">
        <video
            ref="videoRef"
            :src="isVisible ? props.src : undefined"
            class="max-h-[48rem] min-h-0 grow-0 border"
            preload="none"
            autoplay
            loop
            muted
            playsinline
            controls
        />
        <p v-if="props.title" class="text-sm text-slate-500">{{ props.title }}</p>
    </div>
</template>
