<script setup lang="ts">
const props = defineProps({
    src: {
        type: String,
        default: "",
        required: true,
    },
    title: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div class="my-8 flex flex-col place-items-center gap-2">
        <!-- 初期表示で音声ファイルを読み込まないよう preload="none" にする -->
        <audio controls preload="none" :src="props.src">
            <a :href="props.src"> {{ props.title }} </a>
        </audio>
        <p v-if="props.title" class="text-sm">{{ props.title }}</p>
    </div>
</template>
