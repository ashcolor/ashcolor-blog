<script setup lang="ts">
interface Props {
    title?: string;
    url: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    url: "",
});
</script>

<template>
    <NuxtLink
        :href="props.url"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary my-4 w-full sm:w-auto"
    >
        {{ props.title }}
    </NuxtLink>
</template>
