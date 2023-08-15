<script setup lang="ts">
import { withBase } from "ufo";
import { useRuntimeConfig, computed } from "#imports";

const props = defineProps({
    src: {
        type: String,
        default: "",
    },
    alt: {
        type: String,
        default: "",
    },
    width: {
        type: [String, Number],
        default: undefined,
    },
    height: {
        type: [String, Number],
        default: undefined,
    },
});

const refinedSrc = computed(() => {
    if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
    }
    return props.src;
});
</script>

<template>
    <div class="my-8 flex max-h-[48rem] flex-col place-items-center gap-2">
        <img
            :src="refinedSrc"
            :alt="alt"
            :width="width"
            :height="height"
            class="min-h-0 grow-0 border"
            loading="lazy"
        />
        <p v-if="alt" class="text-sm font-thin">{{ props.alt }}</p>
    </div>
</template>
