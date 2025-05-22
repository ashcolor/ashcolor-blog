<script setup lang="ts">
import { BLOG_TITLE } from "@/utils/const";

const route = useRoute();

const { data: article } = await useAsyncData(route.path, () =>
    queryCollection("other").path(`/other${route.path}`).first()
);

useSeoMeta({
    title: `${article.value?.title} | ${BLOG_TITLE}`,
    ogTitle: `${article.value?.title} | ${BLOG_TITLE}`,
});
</script>

<template>
    <div v-if="article">
        <ProseH1 class="text-center">{{ BLOG_TITLE }}</ProseH1>
        <div class="mb-8">
            <ProseH1>{{ article.title }}</ProseH1>
            <p class="text-sm font-light">{{ article.createdAt }}</p>
        </div>
        <div class="grid grid-cols-12">
            <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
                <div class="col-span-4 mb-8 block lg:hidden">
                    <BlogPageToc :links="article?.body?.toc?.links || []"></BlogPageToc>
                </div>
                <ContentRenderer :value="article" />
            </div>
            <div class="col-span-4 hidden px-4 lg:block">
                <div class="sticky top-24 flex flex-col">
                    <BlogPageToc :links="article?.body?.toc?.links || []"></BlogPageToc>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex flex-col gap-4">
        <div class="flex flex-col gap-4">
            <h1 class="text-xl">お探しのページが見つかりませんでした</h1>
            <ProseA to="/">TOPへ</ProseA>
        </div>
    </div>
</template>
