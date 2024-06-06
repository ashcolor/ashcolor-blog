<script setup lang="ts">
interface Props {
    url: string;
}

const props = withDefaults(defineProps<Props>(), {
    url: "",
});

const { data: article, pending } = await useLazyAsyncData(`quote-article-card-${props.url}`, () =>
    queryContent(props.url).without(["body"]).findOne()
);
</script>

<template>
    <div class="py-4">
        <ArticleCardHorizontal
            v-if="!pending && article"
            :key="article._path"
            :link-path="article._path"
            :thumbnail="article.thumbnail"
            :title="article.title"
            :category="article?.category"
            :tags="article.tags"
            :created-at="article.createdAt"
            :updated-at="article.updatedAt"
        ></ArticleCardHorizontal>
        <div v-else></div>
    </div>
</template>
