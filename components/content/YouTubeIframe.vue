<script setup lang="ts">
interface Props {
    videoId: string;
    title: string;
    // TODO mdから呼ばれる際には常にstringになる
    start?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
    videoId: "",
    title: "",
    start: 0,
});
</script>

<template>
    <!-- TODO アスペクト比から%を計算する -->
    <div class="my-8 flex flex-col place-items-center gap-2">
        <div class="relative w-full pb-[56.25%]">
            <!-- @https://www.ankursheel.com/blog/full-width-you-tube-video-embed -->
            <iframe
                class="absolute m-auto size-full"
                :src="`https://www.youtube.com/embed/${props.videoId}?start=${props.start}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
            ></iframe>
        </div>
        <p v-if="props.title" class="text-sm font-thin">{{ props.title }}</p>
    </div>
</template>
