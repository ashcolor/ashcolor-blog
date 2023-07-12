<script setup lang="ts">
interface Props {
    videoId: string;
    title: string;
}

const props = withDefaults(defineProps<Props>(), {
    videoId: "",
    title: "",
});
</script>

<!-- <script
    type="application/javascript"
    src="https://embed.nicovideo.jp/watch/sm2500648/script?w=640&h=360"
></script> -->

<template>
    <!-- TODO アスペクト比から%を計算する -->
    <div class="my-8 flex flex-col place-items-center gap-2">
        <div class="relative w-full pb-[56.25%]">
            <iframe
                class="absolute m-auto h-full w-full"
                :src="`http://embed.nicovideo.jp/watch/${props.videoId}`"
            ></iframe>
        </div>
        <p v-if="props.title" class="text-sm font-thin">{{ props.title }}</p>
    </div>
</template>
