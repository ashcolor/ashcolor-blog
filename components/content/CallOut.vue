<script setup lang="ts">
interface Props {
    type?: "info" | "success" | "warning" | "error";
}

const props = withDefaults(defineProps<Props>(), {
    type: "info",
});

const typeClass = computed(() => {
    const typeClassMapping = {
        info: "border-info",
        success: "border-success",
        warning: "border-warning",
        error: "border-error",
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
    <div class="alert my-4 bg-base-100" :class="[typeClass]">
        <Icon :name="icon"></Icon>
        <span><slot /></span>
    </div>
</template>
