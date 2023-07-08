<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    type: "info" | "success" | "warning" | "error";
}

const props = withDefaults(defineProps<Props>(), {
    type: "info",
});

const classType = computed(() => {
    return `alert-${props.type}`;
});

const icon = computed(() => {
    const typeToIcon = {
        info: "bi:info-circle",
        success: "bi:check-circle",
        warning: "bi:exclamation-circle",
        error: "bi:x-circle",
    };
    return typeToIcon[props.type];
});
</script>

<template>
    <div class="alert my-4" :class="[classType]">
        <Icon :icon="icon"></Icon>
        <span><slot /></span>
    </div>
</template>
