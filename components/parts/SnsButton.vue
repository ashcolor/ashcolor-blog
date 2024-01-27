<script setup lang="ts">
interface Props {
    name: string;
    color: string;
    href: string;
}

const props = withDefaults(defineProps<Props>(), {
    name: "",
    color: "",
    href: "",
});
</script>

<template>
    <NuxtLink :to="props.href" target="_blank" class="btn btn-sm p-2 text-white">
        <Icon :name="`${props.name}`" size="16px"></Icon>
    </NuxtLink>
</template>

<style scoped>
a {
    background-color: v-bind(props.color);
}
</style>
