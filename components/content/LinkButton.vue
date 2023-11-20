<script setup lang="ts">
interface Props {
    url: string;
    title: string;
}

const props = withDefaults(defineProps<Props>(), {
    url: "",
    title: "",
});
</script>

<template>
    <NuxtLink :href="props.url" target="_blank" class="btn btn-primary btn-block my-4">
        {{ props.title }}
    </NuxtLink>
</template>
