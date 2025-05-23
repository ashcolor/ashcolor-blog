<script setup lang="ts">
import { BLOG_TITLE, BLOG_CATEGORIES } from "@/utils/const";

const route = useRoute();

let fullPath = route.fullPath;
if (fullPath.endsWith("/")) {
    fullPath = fullPath.slice(0, -1);
}

useHead({
    link: [
        {
            rel: "canonical",
            href: `${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}${fullPath}`,
        },
    ],
});

const { data: article } = await useAsyncData(route.path, () =>
    queryCollection("blog").path(route.path).first()
);

const title = computed(() => `${article.value?.title} | ${BLOG_TITLE}`);
const url = computed(() => `${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}${article.value?.path}`);

useSeoMeta({
    title: title.value,
    ogTitle: title.value,
    description: article.value?.description,
    ogDescription: article.value?.description,
    ogImage: article.value?.thumbnail,
    ogUrl: url.value,
    ogType: "article",
    ogSiteName: BLOG_TITLE,
    twitterCard: "summary_large_image",
});

useHead({
    script: [
        {
            tagPosition: "bodyClose",
            type: "text/javascript",
            src: "https://platform.twitter.com/widgets.js",
            defer: true,
            onload: () => {
                if (!twttr) return;
                twttr.widgets.load();
            },
        },
    ],
});

const navigations = computed(() => {
    return [
        {
            title: article.value?.category,
            icon: "bi:folder",
            path: BLOG_CATEGORIES.find((c) => c.name === article.value?.category)?.path,
        },
        {
            title: article.value?.title,
            icon: "bi:file-earmark-text",
        },
    ];
});
</script>

<template>
    <div v-if="article">
        <div class="mb-8">
            <BreadCrumb :navigations="navigations"></BreadCrumb>
            <ProseH1>{{ article?.title }}</ProseH1>
            <div class="flex flex-row items-center gap-2 overflow-auto text-sm text-slate-500">
                <IconWithText v-if="article?.createdAt" name="ph:clock">
                    {{ Util.formatDate(article.createdAt) }}
                </IconWithText>
                <IconWithText v-if="article?.updatedAt" name="ph:clock-clockwise">
                    {{ Util.formatDate(article.updatedAt) }}
                </IconWithText>
                <div class="flex flex-row gap-1 py-2">
                    <NuxtLink
                        v-for="tag in article?.tags"
                        :key="tag"
                        :to="`/search?word=${encodeURI(tag)}`"
                        class="badge badge-sm gap-1"
                    >
                        <Icon name="bi:tag"></Icon>
                        {{ tag }}
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-12">
            <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
                <div class="mx-auto mb-8">
                    <NuxtImg
                        preload
                        :src="article?.thumbnail"
                        alt="サムネイル"
                        fetchpriority="high"
                        height="400"
                        width="800"
                        class="max-h-64 object-contain md:max-h-96"
                    />
                </div>
                <div class="text-sm text-slate-500">
                    ※当ブログの記事にはアフィリエイトリンクを使用している場合があります。
                </div>
                <div class="col-span-4 mb-8 block lg:hidden">
                    <BlogPageToc :links="article?.body?.toc?.links || []"></BlogPageToc>
                </div>
                <ContentRenderer :value="article" />

                <div class="divider"></div>

                <SnsShareContainer :title="title" :url="url"></SnsShareContainer>

                <div class="divider"></div>

                <BlogAmazonCampaignPr></BlogAmazonCampaignPr>

                <ProseH3>関連記事</ProseH3>
                <BlogRelationArticles
                    :current-path="article?.path"
                    :category="article?.category"
                    :tags="article?.tags"
                ></BlogRelationArticles>

                <ProseH3>オススメ記事</ProseH3>
                <BlogRecommendArticles
                    :current-path="article?.path"
                    :category="article?.category"
                    :tags="article?.tags"
                ></BlogRecommendArticles>

                <ProseH3>このブログを運営している人</ProseH3>
                <BlogProfile></BlogProfile>
            </div>
            <div class="col-span-4 hidden px-4 lg:block">
                <div class="sticky top-24 flex flex-col">
                    <BlogPageToc :links="article?.body?.toc?.links || []"></BlogPageToc>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex flex-col gap-4">
        <h1 class="text-xl">お探しのページが見つかりませんでした</h1>
        <ProseA to="/">TOPへ</ProseA>
    </div>
</template>
