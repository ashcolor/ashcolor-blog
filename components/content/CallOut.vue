<script setup lang="ts">
interface Props {
    type?: "info" | "success" | "warning" | "error";
}

const props = withDefaults(defineProps<Props>(), {
    type: "info",
});

const typeClass = computed(() => {
    const typeClassMapping = {
        info: "text-info",
        success: "text-success",
        warning: "text-warning",
        error: "text-error",
    };

    return `${typeClassMapping[props.type]}`;
});

const icon = computed(() => {
    const typeToIcon = {
        info: "bi:info-circle-fill",
        success: "bi:check-circle-fill",
        warning: "bi:exclamation-circle-fill",
        error: "bi:x-circle-fill",
    };
    return typeToIcon[props.type];
});
</script>

<template>
    <div class="alert my-4 bg-[#f1f1ef]">
        <Icon :name="icon" :class="[typeClass]"></Icon>
        <div class="max-w-full overflow-auto">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.alert :deep(p) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>
