<script setup lang="ts">
const props = defineProps({
    src: {
        type: String,
        default: "",
        required: true,
    },
    title: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <!-- 複数のカスタムコンポーネントを使用した際、
        音声が別コンポーネントの音声に切り替わる不具合が出たためClientOnlyにしてfix -->
    <ClientOnly>
        <div class="my-8 flex flex-col place-items-center gap-2">
            <audio controls :src="props.src">
                <a :href="props.src"> {{ props.title }} </a>
            </audio>
            <p v-if="props.title" class="text-sm">{{ props.title }}</p>
        </div>
    </ClientOnly>
</template>
