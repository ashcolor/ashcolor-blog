<script setup lang="ts">
interface Props {
    title: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
});
</script>

<template>
    <div class="collapse collapse-arrow border">
        <input type="checkbox" />
        <div class="collapse-title bg-base-200">
            {{ props.title }}
        </div>
        <div class="collapse-content">
            <slot />
        </div>
    </div>
</template>
