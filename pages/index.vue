<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { BLOG_TITLE } from "@/utils/const";

const articleTags = await queryContent("/blog").only("tags").find();
const tags = articleTags.map((article) => article.tags).flat();
const tagCounts = new Map();

tags.forEach((tag) => {
    if (tagCounts.has(tag)) {
        tagCounts.set(tag, tagCounts.get(tag) + 1);
    } else {
        tagCounts.set(tag, 1);
    }
});

const listCategories = BLOG_CATEGORIES.filter((category) => category.isShowList);
</script>

<template>
    <NuxtLayout>
        <ProseH1 class="my-4 text-center font-logo text-4xl">{{ BLOG_TITLE }}</ProseH1>
        <div class="text-center font-logo text-slate-500">
            <p>{{ BLOG_SUBTITLE }}</p>
        </div>
        <div
            class="hero mx-[calc(50%_-_50vw)] my-16 h-[50vh] w-screen bg-[url('https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/gadget/desk-tour/overall.jpg')]"
        >
            <div class="hero-overlay opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <!-- <h1 class="mb-5 text-2xl font-bold">クリエイター向けブログ</h1>
                    <p class="mb-5">役立つガジェット・情報を紹介します。</p> -->
                </div>
            </div>
        </div>
        <ProseH3>オススメ記事</ProseH3>
        <div class="flex flex-col">
            <div class="my-8">
                <TopRecommendArticles></TopRecommendArticles>
            </div>
        </div>
        <ProseH3>新着記事</ProseH3>
        <div class="flex flex-col">
            <div class="my-8">
                <TopRecentArticles></TopRecentArticles>
            </div>
            <NuxtLink to="/search" class="btn-primary btn-outline btn-wide btn self-center"
                >もっと見る
            </NuxtLink>
        </div>
        <ProseH3>記事を探す</ProseH3>

        <div class="flex flex-col xl:flex-row">
            <div class="shrink-0 basis-1/2">
                <ProseH4>カテゴリーから探す</ProseH4>
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
                            <div class="hero-overlay opacity-90"></div>
                            <div class="hero-content text-center text-neutral-content">
                                <div class="max-w-md">
                                    <p class="text-xl font-thin">{{ category.name }}</p>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="shrink-0 basis-1/2">
                <div>
                    <ProseH4>ワード検索</ProseH4>
                    <div class="join w-full">
                        <div class="join-item btn pointer-events-none cursor-default">
                            <Icon icon="bi:search"></Icon>
                        </div>
                        <input
                            class="input-bordered input join-item grow"
                            placeholder="例：キーボード イヤホン"
                        />
                        <button class="join-item btn">Search</button>
                    </div>
                    <ProseH4>タグから探す</ProseH4>
                    <div class="flex flex-row flex-wrap gap-2 border p-4">
                        <NuxtLink
                            v-for="tagCount in tagCounts"
                            :key="tagCount[0]"
                            :to="`/search?word=${tagCount[0]}`"
                            class="badge badge-outline"
                        >
                            {{ tagCount[0] }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- <ProseH3>この記事を書いた人</ProseH3> -->
        <!-- <div></div> -->
    </NuxtLayout>
</template>
