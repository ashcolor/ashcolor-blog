<script setup lang="ts">
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

const isShell = ref(["bash", "sh", "zsh", "PowerShell", "Shell"].includes(props.language));
</script>

<template>
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
                <div class="prose-code">
                    <pre :class="props.class" class="prose-pre"><slot /></pre>
                </div>
            </div>
        </div>
    </div>
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
.prose-pre {
    background-color: #24292e;
    color: #e1e4e8;
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
