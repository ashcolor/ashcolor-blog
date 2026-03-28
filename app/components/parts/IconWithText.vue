<script setup lang="ts">
interface Props {
    name: string;
}

const props = withDefaults(defineProps<Props>(), {
    name: "",
});
</script>

<template>
    <div class="flex flex-row items-center gap-1">
        <Icon :name="props.name"></Icon>
        <span>
            <slot />
        </span>
    </div>
</template>
