<script setup lang="ts">
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

const playerVars = computed(() => ({
    autoplay: 0,
    playsinline: 1,
    start: Number(props.start) || 0,
}));
</script>

<template>
    <ClientOnly>
        <div class="my-8 flex flex-col place-items-center gap-2">
            <div class="relative w-full" style="aspect-ratio: 16/9">
                <ScriptYouTubePlayer
                    :video-id="props.videoId"
                    :player-vars="playerVars"
                    thumbnail-size="hqdefault"
                    :webp="false"
                    style="width: 100%; height: 100%"
                >
                    <template #placeholder="{ placeholder }">
                        <div class="absolute inset-0">
                            <img
                                :src="placeholder"
                                alt="動画のサムネイル"
                                class="m-0 h-full w-full object-cover"
                            />
                            <!-- YouTube 公式風の再生ボタン -->
                            <div
                                class="absolute left-1/2 top-1/2 h-[48px] w-[68px] -translate-x-1/2 -translate-y-1/2"
                            >
                                <svg viewBox="0 0 68 48" width="68" height="48">
                                    <path
                                        fill="#f00"
                                        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                                    />
                                    <path fill="#fff" d="M45 24 27 14v20" />
                                </svg>
                            </div>
                        </div>
                    </template>
                </ScriptYouTubePlayer>
            </div>
            <p v-if="props.title" class="text-sm font-thin">{{ props.title }}</p>
        </div>
    </ClientOnly>
</template>
