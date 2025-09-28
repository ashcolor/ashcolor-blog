<script setup lang="ts">
interface Props {
    currentPath?: string;
    category?: string;
    tags?: Array<string>;
}

const props = withDefaults(defineProps<Props>(), {
    currentPath: "",
    category: "",
    tags: () => [],
});

const LIMIT = 6;

const { data: articles, pending } = await useLazyAsyncData(
    "recommented-articles" + props.currentPath + props.category,
    () => {
        const query = queryCollection("blog");
        query.select(
            "id",
            "path",
            "title",
            "category",
            "tags",
            "thumbnail",
            "createdAt",
            "updatedAt"
        );
        query.where("isRecommend", "=", true);
        if (props.currentPath) {
            query.where("path", "<>", props.currentPath);
        }
        if (props.category) {
            query.where("category", "=", props.category);
        }
        query.order("createdAt", "DESC");
        query.limit(LIMIT);
        return query.all();
    }
);
</script>
<template>
    <div v-if="pending">
        <div class="loading loading-spinner mx-auto my-8 block text-primary"></div>
    </div>
    <template v-else>
        <div v-if="articles && articles.length > 0" class="flex flex-col gap-8">
            <ArticleCardHorizontal
                v-for="article in articles"
                :key="article.id"
                :link-path="article.path"
                :thumbnail="article.thumbnail || null"
                :title="article.title"
                :category="article.category || null"
                :tags="article.tags"
                :created-at="article.createdAt || null"
                :updated-at="article.updatedAt || null"
            ></ArticleCardHorizontal>
        </div>
        <div v-else>
            <p class="text-center">該当する記事がみつかりませんでした</p>
        </div>
    </template>
</template>
