<script setup lang="ts">
import { BLOG_TITLE, BLOG_SUBTITLE } from "@/utils/const";

useSeoMeta({
    title: `${BLOG_TITLE} | ${BLOG_SUBTITLE}`,
    ogTitle: `${BLOG_TITLE} | ${BLOG_SUBTITLE}`,
    description: BLOG_SUBTITLE,
    ogDescription: BLOG_SUBTITLE,
    ogImage: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/2025-06-14_15-10-26_l17dnhaz.webp",
    ogUrl: import.meta.env.VITE_NUXT_PUBLIC_SITE_URL,
    ogType: "website",
    ogSiteName: BLOG_TITLE,
    twitterCard: "summary_large_image",
});

const { data: articleTags, pending } = await useLazyAsyncData("tags", () =>
    queryCollection("blog").select("tags").all()
);

const famousTags = computed(() => {
    if (!articleTags.value) {
        return [];
    }
    const tags = articleTags.value?.map((article) => article.tags).flat();
    const tagCounts = new Map();

    tags.forEach((tag) => {
        if (tagCounts.has(tag)) {
            tagCounts.set(tag, tagCounts.get(tag) + 1);
        } else {
            tagCounts.set(tag, 1);
        }
    });

    return Array.from(tagCounts)
        .map((tag) => {
            return {
                name: tag[0],
                count: tag[1],
            };
        })
        .filter((tag) => {
            return tag.count > 1;
        });
});

const listCategories = BLOG_CATEGORIES.filter((category) => category.isShowList);

const searchWord = ref("");
const onClickSearchButton = () => {
    window.location.href = `/search?category=&word=${searchWord.value}`;
};
</script>

<template>
    <ProseH1 class="my-4 text-center font-logo text-4xl">{{ BLOG_TITLE }}</ProseH1>
    <div class="text-center text-slate-500">
        <p>{{ BLOG_SUBTITLE }}</p>
    </div>
    <div
        class="hero mx-[calc(50%_-_50vw)] my-8 h-[50vh] w-screen bg-[url('https://d2s4ypph6g1t06.cloudfront.net/img/pc/2025-06-14_15-10-26_l17dnhaz.webp')]"
    >
        <div class="hero-overlay"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <!-- <h1 class="mb-5 text-2xl font-bold">クリエイター向けブログ</h1>
                    <p class="mb-5">役立つガジェット・情報を紹介します。</p> -->
            </div>
        </div>
    </div>
    <ProseH2>オススメ記事</ProseH2>
    <div class="flex flex-col">
        <div class="my-8">
            <TopRecommendArticles></TopRecommendArticles>
        </div>
    </div>
    <ProseH2>新着記事</ProseH2>
    <div class="flex flex-col">
        <div class="my-8">
            <TopRecentArticles></TopRecentArticles>
        </div>
        <NuxtLink to="/search" class="btn btn-outline btn-primary btn-wide self-center"
            >もっと見る
        </NuxtLink>
    </div>
    <ProseH2>記事を探す</ProseH2>
    <div class="flex flex-col xl:flex-row">
        <div class="shrink-0 basis-1/2">
            <ProseH3>カテゴリーから探す</ProseH3>
            <div class="flex flex-row flex-wrap justify-evenly gap-2">
                <NuxtLink
                    v-for="category in listCategories"
                    :key="category.name"
                    :to="`/search?category=${category.name}`"
                    class="card"
                >
                    <div
                        class="hero h-[128px] w-[256px] bg-[url('')]"
                        :style="`background-image: url(${category.thumbnail});`"
                    >
                        <div class="hero-overlay"></div>
                        <div class="hero-content text-center text-primary-content">
                            <div class="max-w-md">
                                <p class="text-2xl">{{ category.name }}</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="shrink-0 basis-1/2">
            <div>
                <ProseH3>ワード検索</ProseH3>
                <div class="join w-full">
                    <div class="btn join-item pointer-events-none cursor-default">
                        <Icon name="bi:search"></Icon>
                    </div>
                    <input
                        v-model="searchWord"
                        class="input join-item input-bordered grow"
                        placeholder="例：キーボード"
                        @keydown.enter="onClickSearchButton()"
                    />
                    <button class="btn join-item" @click="onClickSearchButton()">検索</button>
                </div>
                <ProseH3>タグから探す</ProseH3>
                <div class="flex flex-row flex-wrap gap-3 border p-4 text-slate-500">
                    <div
                        v-if="pending"
                        class="loading loading-spinner mx-auto my-8 block text-primary"
                    ></div>
                    <template v-else>
                        <NuxtLink
                            v-for="tagCount in famousTags"
                            :key="tagCount.name"
                            :to="`/search?word=${encodeURI(tagCount.name)}`"
                            class="badge badge-outline"
                        >
                            {{ tagCount.name }}
                        </NuxtLink>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <ProseH2>このサイトについて</ProseH2>
    <ProseH3>このブログを運営している人</ProseH3>
    <BlogProfile></BlogProfile>
</template>
