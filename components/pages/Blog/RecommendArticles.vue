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

const query = queryContent("/blog/");

query.limit(LIMIT);
query.sort({ createdAt: -1 });

query.where({ isRecommend: true });

if (props.currentPath) {
    query.where({
        _path: { $ne: props.currentPath },
    });
}

if (props.category) {
    query.where({ category: props.category });
}

if (props.tags.length) {
    console.log("tag");

    query.where({ tags: { $in: props.tags } });
}

const articles = await query.find();
</script>
<template>
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
