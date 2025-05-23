<script setup lang="ts">
interface Props {
    url: string;
}

const props = withDefaults(defineProps<Props>(), {
    url: "",
});

const { data: article, pending } = await useLazyAsyncData(props.url, () =>
    queryCollection("blog").path(props.url).first()
);
</script>

<template>
    <div class="py-4">
        <ArticleCardHorizontal
            v-if="!pending && article"
            :key="article.id"
            :link-path="article.path"
            :thumbnail="article.thumbnail || null"
            :title="article.title"
            :category="article.category || null"
            :tags="article.tags"
            :created-at="article.createdAt || null"
            :updated-at="article.updatedAt || null"
        ></ArticleCardHorizontal>
        <div v-else></div>
    </div>
</template>
