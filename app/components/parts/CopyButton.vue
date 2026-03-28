<script setup lang="ts">
interface Props {
    text: string;
}

const props = withDefaults(defineProps<Props>(), {
    text: "",
});

const { copy, copied } = useClipboard({
    copiedDuring: 5 * 1000,
});
</script>

<template>
    <button class="btn btn-sm font-normal" @click="copy(props.text)">
        <Icon :name="copied ? 'bi:clipboard-check-fill' : 'bi:clipboard'"></Icon>
        URLをコピー
    </button>
</template>
