<script setup lang="ts">
interface Props {
    src: string;
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
});
</script>

<template>
    <ClientOnly>
        <div class="my-8 flex flex-col place-items-center gap-2">
            <video
                :src="props.src"
                class="max-h-[48rem] min-h-0 grow-0 border"
                autoplay
                loop
                muted
                playsinline
                controls
            />
            <p v-if="props.title" class="text-sm text-slate-500">{{ props.title }}</p>
        </div>
    </ClientOnly>
</template>
