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
    () => {
        const query = queryContent("/blog/");

        query.limit(LIMIT);
        query.sort({ createdAt: -1 });
        query.without(["body"]);

        if (props.currentPath) {
            query.where({
                _path: { $ne: props.currentPath },
            });
        }

        if (props.category) {
            query.where({ category: props.category });
        }

        if (props.tags.length) {
            query.where({ tags: { $in: props.tags } });
        }

        return query.find();
    },
    {
        server: false,
    }
);
</script>
<template>
    <div v-if="pending">
        <div class="loading loading-spinner mx-auto my-8 block text-primary"></div>
    </div>
    <template v-else>
        <div v-if="articles.length > 0" class="flex flex-col gap-8">
            <ArticleCardHorizontal
                v-for="article in articles"
                :key="article._path"
                :link-path="article._path"
                :thumbnail="article.thumbnail"
                :title="article.title"
                :category="article?.category"
                :tags="article.tags"
                :created-at="article.createdAt"
                :updated-at="article.updatedAt"
            ></ArticleCardHorizontal>
        </div>
        <div v-else>
            <p class="text-center">該当する記事がみつかりませんでした</p>
        </div>
    </template>
</template>
