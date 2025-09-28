<script setup lang="ts">
import { codeToHtml } from "shiki";

const props = defineProps({
    code: {
        type: String,
        default: "",
    },
    language: {
        type: String,
        default: null,
    },
    filename: {
        type: String,
        default: null,
    },
    highlights: {
        type: Array as () => number[],
        default: () => [],
    },
    meta: {
        type: String,
        default: null,
    },
    class: {
        type: String,
        default: null,
    },
});

const isLoading = ref(true);
const codeHtml = ref("");
const isShell = ref(["bash", "sh", "zsh", "PowerShell", "Shell"].includes(props.language));

const loadCode = async () => {
    codeHtml.value = await codeToHtml(props.code.replace(/\n$/, ""), {
        lang: props.language,
        theme: "github-dark",
    });
    isLoading.value = false;
};

onMounted(async () => {
    await loadCode();
});
</script>

<template>
    <ClientOnly>
        <div class="my-4">
            <div class="tabs tabs-lift tabs-sm">
                <label
                    class="tab !bg-primary flex-row justify-start gap-1"
                    :class="{
                        hidden: !props.filename,
                    }"
                >
                    <input type="radio" class="cursor-default" checked="checked" />
                    <Icon
                        :name="isShell ? 'mdi:keyboard-arrow-right' : 'mdi:file-outline'"
                        class="text-primary-content"
                    ></Icon>
                    <span class="text-primary-content">{{ props.filename }}</span>
                </label>
                <div class="tab-content">
                    <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
                    <div v-if="isLoading" :class="props.class" class="prose-code">読み込み中</div>
                    <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
                    <div v-else :class="props.class" class="prose-code" v-html="codeHtml"></div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style>
.prose-code {
    background-color: #fbfbfb;
    color: #36332e;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    width: 100%;
}
pre {
    display: flex;
    flex: 1;
    line-height: 1.625;
    margin: 0;
    overflow-x: auto;
    padding: 16px;
}
pre code {
    width: 100%;
    padding-inline-end: 30px;
    display: flex;
    flex: 1;
    flex-direction: column;
}
pre code .line {
    display: inline-table;
    min-height: 1rem;
}
</style>
