<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    listStyle: {
        type: String,
        default: "✅",
    },
});

const quotedListStyle = computed(() => {
    return `"${props.listStyle}"`;
});
</script>

<template>
    <div class="my-4 border p-8">
        <div v-if="props.title" class="mb-4">
            <p class="text-sm text-slate-500">{{ props.title }}</p>
        </div>
        <div>
            <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
            <ul class="point-list flex flex-col gap-2">
                <ContentSlot :use="$slots.default" unwrap="ul" />
            </ul>
        </div>
    </div>
</template>

<style scoped>
ul.point-list :deep(li) {
    list-style-type: none;
}

ul.point-list :deep(li::before) {
    content: v-bind(quotedListStyle);
    padding-right: 0.5rem;
}
</style>
