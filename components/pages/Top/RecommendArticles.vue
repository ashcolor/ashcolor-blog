<script setup lang="ts">
const LIMIT = 3;

const query = queryContent("blog");

query.limit(LIMIT);
query.sort({ updatedAt: -1 });
query.where({ isRecommend: true });

const articles = await query.find();
</script>
<template>
    <div
        v-if="articles.length > 0"
        class="flex flex-col flex-wrap place-content-center gap-8 md:flex-row"
    >
        <ArticleCard
            v-for="article in articles"
            :key="article._path"
            :link-path="article._path"
            :thumbnail="article.thumbnail"
            :title="article.title"
            :category="article.category"
            :tags="article.tags"
            :updated-at="article.updatedAt"
        ></ArticleCard>
    </div>
    <div v-else>
        <p class="text-center">該当する記事がみつかりませんでした</p>
    </div>
</template>
