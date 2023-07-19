<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    type: "info" | "success" | "warning" | "error";
}

const props = withDefaults(defineProps<Props>(), {
    type: "info",
});

const typeClass = computed(() => {
    const typeClassMapping = {
        info: "alert-info",
        success: "alert-success",
        warning: "alert-warning",
        error: "alert-error",
    };

    return `${typeClassMapping[props.type]}`;
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
    <div class="alert my-4" :class="[typeClass]">
        <Icon :icon="icon"></Icon>
        <span><slot /></span>
    </div>
</template>
