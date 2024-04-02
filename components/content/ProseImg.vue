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
    class: {
        type: String,
        default: "",
        require: false,
    },
    href: {
        type: String,
        default: "",
    },
});

const refinedSrc = computed(() => {
    if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
    }
    return props.src;
});

const isShowModal = ref(false);
</script>

<template>
    <div class="my-8 flex max-h-[48rem] flex-col place-items-center gap-2">
        <a v-if="href" :href="props.href">
            <img
                :src="refinedSrc"
                :width="width"
                :height="height"
                :alt="alt"
                class="in min-h-0 grow-0 border"
                :class="props.class"
                loading="lazy"
            />
        </a>
        <img
            v-else
            :src="refinedSrc"
            :width="width"
            :height="height"
            :alt="alt"
            class="min-h-0 grow-0 cursor-zoom-in border"
            :class="props.class"
            loading="lazy"
            @click="isShowModal = true"
        />
        <p v-if="alt" class="text-sm font-thin">{{ props.alt }}</p>
        <dialog
            v-if="isShowModal"
            id="my_modal_1"
            class="modal bg-black/40"
            open
            @click="isShowModal = false"
        >
            <button class="btn btn-square btn-ghost absolute right-2 top-2 text-primary-content">
                <Icon name="mdi:close" size="48px" />
            </button>
            <div class="modal-box max-h-screen w-auto max-w-none p-0">
                <img :src="refinedSrc" :alt="alt" loading="lazy" />
            </div>
        </dialog>
    </div>
</template>
