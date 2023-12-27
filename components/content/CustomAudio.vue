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
        <audio controls :src="props.src">
            <a :href="props.src"> {{ props.title }} </a>
        </audio>
        <p v-if="props.title" class="text-sm font-thin">{{ props.title }}</p>
    </div>
</template>
