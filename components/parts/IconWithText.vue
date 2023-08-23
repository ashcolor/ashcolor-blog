<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    icon: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: "",
});
</script>

<template>
    <div class="flex flex-row items-center gap-1">
        <Icon :icon="props.icon"></Icon>
        <span>
            <slot />
        </span>
    </div>
</template>
