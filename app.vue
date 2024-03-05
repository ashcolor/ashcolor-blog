<script setup lang="ts">
useHead({
    htmlAttrs: { "data-theme": "mytheme" },
});

const { loading } = useNuxtPageLoading();
</script>

<template>
    <NuxtLayout>
        <div v-show="loading" class="my-32 flex place-content-center">
            <span class="loading loading-spinner loading-lg"></span>
        </div>
        <!--  内部リンク遷移するとエラーになる問題の対応策 -->
        <!-- @see https://github.com/nuxt/nuxt/issues/13350#issuecomment-1397297746  -->
        <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
</template>
