<script setup lang="ts">
interface Props {
    category?: string;
}

const props = withDefaults(defineProps<Props>(), {
    category: "",
});

const LIMIT = 6;

const { data: articles, pending } = useLazyAsyncData(() => {
    const query = queryContent("/blog/");

    query.limit(LIMIT);
    query.sort({ createdAt: -1 });

    if (props.category) {
        query.where({ category: props.category });
    }

    return query.find();
});
</script>
<template>
    <div v-if="pending" class="">
        <div class="loading loading-spinner mx-auto my-8 block text-primary"></div>
    </div>
    <template v-else>
        <div
            v-if="articles.length > 0"
            class="flex flex-col flex-wrap place-content-center gap-8 md:flex-row"
        >
            <ArticleCardVertical
                v-for="article in articles"
                :key="article._path"
                :link-path="article._path"
                :thumbnail="article.thumbnail"
                :title="article.title"
                :category="article?.category"
                :tags="article.tags"
                :created-at="article.createdAt"
                :updated-at="article.updatedAt"
            ></ArticleCardVertical>
        </div>
        <div v-else>
            <p class="text-center">該当する記事がみつかりませんでした</p>
        </div>
    </template>
</template>
