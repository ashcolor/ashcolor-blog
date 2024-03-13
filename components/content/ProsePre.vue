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

const codeHtml = await codeToHtml(props.code.replace(/\n$/, ""), {
    lang: props.language,
    theme: "github-dark",
});
</script>

<template>
    <div class="my-4">
        <div v-if="props.filename" class="tabs">
            <div
                class="tab flex cursor-default flex-row justify-start gap-1 bg-primary text-primary-content"
            >
                <Icon name="mdi:file-outline"></Icon>
                <span>{{ props.filename }}</span>
            </div>
        </div>
        <div
            v-else-if="
                props.filename ||
                ['bash', 'sh', 'zsh', 'PowerShell', 'Shell'].includes(props.language)
            "
            class="tab flex cursor-default flex-row justify-start gap-1 bg-primary text-primary-content"
        >
            <Icon name="mdi:keyboard-arrow-right"></Icon><span>{{ props.language }}</span>
        </div>
        <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
        <div :class="props.class" class="prose-code" v-html="codeHtml"></div>
    </div>
</template>

<style>
.prose-code {
    backdrop-filter: var(--prose-code-block-backdropFilter);
    background-color: var(--prose-code-block-backgroundColor);
    color: var(--prose-code-block-color);
    font-size: var(--prose-code-block-fontSize);
    overflow: hidden;
    position: relative;
    width: 100%;
}
pre {
    display: flex;
    flex: 1;
    line-height: var(--typography-lead-relaxed);
    margin: 0;
    overflow-x: auto;
    padding: var(--prose-code-block-pre-padding);
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
