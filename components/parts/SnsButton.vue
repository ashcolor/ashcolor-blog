<script setup lang="ts">
interface Props {
    label: string;
    iconName: string;
    color: string;
    href: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: "",
    name: "",
    color: "",
    href: "",
});
</script>

<template>
    <NuxtLink
        :to="props.href"
        target="_blank"
        class="btn btn-sm p-2 text-white"
        :aria-label="props.label"
    >
        <Icon :name="`${props.iconName}`" size="16px"></Icon>
    </NuxtLink>
</template>

<style scoped>
a {
    background-color: v-bind(props.color);
}
</style>
