<script setup lang="ts">
import { BLOG_CATEGORIES, BLOG_CATEGORY_MAP } from "@/utils/const";

const route = useRoute();
const category = typeof route.params.category === "string" ? route.params.category : "";
const categoryName = BLOG_CATEGORY_MAP.get(category);
const categoryThumbnail = BLOG_CATEGORIES.find((c) => c.key === category)?.thumbnail;

const articleTags = await queryContent(`/blog/${category}`).only("tags").find();
const tags = articleTags.map((article) => article.tags).flat();
const tagCounts = new Map();

tags.forEach((tag) => {
    if (tagCounts.has(tag)) {
        tagCounts.set(tag, tagCounts.get(tag) + 1);
    } else {
        tagCounts.set(tag, 1);
    }
});

const navigations = computed(() => {
    return [
        {
            title: categoryName,
            path: BLOG_CATEGORIES.find((c) => c.name === category)?.path,
        },
    ];
});
</script>

<template>
    <NuxtLayout>
        <BreadCrumb :navigations="navigations"></BreadCrumb>
        <ProseH1 class="my-4 text-center font-logo text-4xl">{{ categoryName }}</ProseH1>
        <div
            class="hero mx-[calc(50%_-_50vw)] my-16 h-96 w-screen"
            :style="`background-image: url(${categoryThumbnail})`"
        >
            <div class="hero-overlay opacity-60"></div>
            <div class="hero-content text-center text-neutral-content"></div>
        </div>
        <ProseH3>オススメ記事</ProseH3>
        <div class="flex flex-col">
            <div class="my-8">
                <TopRecommendArticles :category="categoryName"></TopRecommendArticles>
            </div>
        </div>
        <ProseH3>新着記事</ProseH3>
        <div class="flex flex-col">
            <div class="my-8">
                <TopRecentArticles :category="categoryName"></TopRecentArticles>
            </div>
            <NuxtLink to="/search" class="btn-primary btn-outline btn-wide btn self-center"
                >もっと見る
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>
