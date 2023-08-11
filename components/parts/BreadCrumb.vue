<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Navigation {
    title: string;
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
    <div class="breadcrumbs border-b border-primary px-2 text-sm">
        <ul class="text-xs">
            <li>
                <NuxtLink to="/" class="flex flex-row gap-1">
                    <Icon icon="bi:house"></Icon>
                    ホーム
                </NuxtLink>
            </li>
            <li v-for="navigation in props.navigations" :key="navigation.path">
                <NuxtLink class="flex flex-row gap-1">
                    <Icon icon="bi:folder-fill"></Icon>
                    <NuxtLink :to="navigation.path">
                        {{ navigation.title }}
                    </NuxtLink>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
