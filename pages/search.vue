<script setup lang="ts">
useHead({
    link: [
        {
            rel: "canonical",
            href: `${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}/search`,
        },
    ],
});

useSeoMeta({
    title: `記事検索 | ${BLOG_TITLE}`,
    ogTitle: `記事検索 | ${BLOG_TITLE}`,
});

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
        <ProseH2>記事一覧</ProseH2>
        <div class="my-8 flex flex-col">
            <SearchArticles></SearchArticles>
        </div>
    </NuxtLayout>
</template>
