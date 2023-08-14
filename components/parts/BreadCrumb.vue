<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Navigation {
    title: string;
    icon: string;
    path: string;
}
interface Props {
    navigations: Array<Navigation>;
}

const props = withDefaults(defineProps<Props>(), {
    navigations: () => [],
});
</script>

<template>
    <div class="breadcrumbs border-b border-base-300 px-2 text-sm text-neutral">
        <ul class="text-xs">
            <li>
                <NuxtLink to="/" class="flex flex-row gap-1">
                    <Icon icon="bi:house"></Icon>
                    ホーム
                </NuxtLink>
            </li>
            <li v-for="navigation in props.navigations" :key="navigation.title">
                <NuxtLink v-if="navigation.path" :to="navigation.path" class="flex flex-row gap-1">
                    <Icon v-if="navigation.icon" :icon="navigation.icon"></Icon>
                    <span>
                        {{ navigation.title }}
                    </span>
                </NuxtLink>
                <div v-else class="flex flex-row items-center gap-1">
                    <Icon v-if="navigation.icon" :icon="navigation.icon"></Icon>
                    <span>
                        {{ navigation.title }}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
