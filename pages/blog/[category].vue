<script setup lang="ts">
import { BLOG_CATEGORIES, BLOG_CATEGORY_MAP } from "@/utils/const";

const route = useRoute();
const category = typeof route.params.category === "string" ? route.params.category : "";
const categoryName = BLOG_CATEGORY_MAP.get(category);
const categoryThumbnail = BLOG_CATEGORIES.find((c) => c.key === category)?.thumbnail;

useSeoMeta({
    title: `${categoryName} | ${BLOG_TITLE}`,
    ogTitle: `${categoryName} | ${BLOG_TITLE}`,
    description: BLOG_SUBTITLE,
    ogDescription: BLOG_SUBTITLE,
    ogImage: categoryThumbnail,
    ogUrl: `${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}/blog/${category}`,
    ogType: "website",
    ogSiteName: BLOG_TITLE,
    twitterCard: "summary_large_image",
});

// const { data: articleTags, pending } = await useLazyAsyncData(
//     () => {
//         return queryContent(`/blog/${category}`).only("tags").find();
//     },
//     {
//         default: () => [],
//         server:false
//     }
// );

// const tags = articleTags.map((article) => article.tags).flat();
// const tagCounts = new Map();

// tags.forEach((tag) => {
//     if (tagCounts.has(tag)) {
//         tagCounts.set(tag, tagCounts.get(tag) + 1);
//     } else {
//         tagCounts.set(tag, 1);
//     }
// });

const navigations = computed(() => {
    return [
        {
            title: categoryName,
            icon: "bi:folder",
            path: BLOG_CATEGORIES.find((c) => c.name === category)?.path,
        },
    ];
});
</script>

<template>
    <BreadCrumb :navigations="navigations"></BreadCrumb>
    <ProseH1 class="my-4 text-center font-logo text-4xl">{{ categoryName }}</ProseH1>
    <div
        class="hero mx-[calc(50%_-_50vw)] my-8 h-96 w-screen"
        :style="`background-image: url(${categoryThumbnail})`"
    >
        <div class="hero-overlay"></div>
        <div class="hero-content text-center text-neutral-content"></div>
    </div>
    <ProseH2>オススメ記事</ProseH2>
    <div class="flex flex-col">
        <div class="my-6">
            <TopRecommendArticles :category="categoryName"></TopRecommendArticles>
        </div>
    </div>
    <ProseH2>新着記事</ProseH2>
    <div class="flex flex-col">
        <div class="my-6">
            <TopRecentArticles :category="categoryName"></TopRecentArticles>
        </div>
        <NuxtLink
            :to="`/search?category=${categoryName}`"
            class="btn btn-outline btn-primary btn-wide self-center"
            >もっと見る
        </NuxtLink>
    </div>
    <ProseH2>ブログについて</ProseH2>
    <ProseH3>このブログを運営している人</ProseH3>
    <BlogProfile></BlogProfile>
</template>
