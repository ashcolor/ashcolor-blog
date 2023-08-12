<script setup lang="ts">
const navigations = computed(() => {
    return [
        {
            title: "記事検索",
            icon: "bi:search",
            path: "/search",
        },
    ];
});
</script>

<template>
    <NuxtLayout>
        <BreadCrumb :navigations="navigations"></BreadCrumb>
        <ProseH1 class="text-center">記事検索</ProseH1>
        <ProseH3>記事一覧</ProseH3>
        <div class="my-8 flex flex-col">
            <SearchArticles></SearchArticles>
        </div>
    </NuxtLayout>
</template>
