<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    icon: string;
    color: string;
    href: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    color: "",
    href: "",
});
</script>

<template>
    <NuxtLink :to="props.href" target="_blank" class="btn btn-sm p-2 text-white">
        <Icon :icon="`simple-icons:${props.icon}`" width="16" height="16"></Icon>
    </NuxtLink>
</template>

<style scoped>
a {
    background-color: v-bind(props.color);
}
</style>
