<script setup lang="ts">
import { Icon } from "@iconify/vue";

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
        <Icon
            :icon="copied ? 'bi:clipboard-check-fill' : 'bi:clipboard'"
            width="16"
            height="16"
        ></Icon>
        URLをコピー
    </button>
</template>
