<script setup lang="ts">
import type { BlogCollectionItem, CollectionQueryBuilder } from "@nuxt/content";
import { createReusableTemplate } from "@vueuse/core";

const [DefinePaginationTemplate, PaginationTemplate] = createReusableTemplate();

const LIMIT = 12;

const params = useUrlSearchParams("history");
const currentPage = ref(parseInt(typeof params.page === "string" ? params.page : "1"));
const searchCategory = ref(typeof params.category === "string" ? params.category : "");
const searchWord = ref(typeof params.word === "string" ? params.word : "");

const filterQuery = (query: CollectionQueryBuilder<BlogCollectionItem>) => {
    if (searchCategory.value) {
        query.where("category", "=", searchCategory.value);
    }
    if (searchWord.value) {
        query.orWhere((query) =>
            query
                .where("tags", "LIKE", `%${searchWord.value}%`)
                .where("title", "LIKE", `%${searchWord.value}%`)
        );
    }
    return query;
};

const query = computed(() => {
    const query = queryCollection("blog");
    query.select("id", "path", "title", "category", "tags", "thumbnail", "createdAt", "updatedAt");
    filterQuery(query);
    return query;
});

const {
    data: articles,
    execute: fetchArticle,
    pending,
} = await useLazyAsyncData(() => {
    const newQuery = query.value;
    newQuery.order("createdAt", "DESC");
    newQuery.skip(LIMIT * (currentPage.value - 1));
    newQuery.limit(LIMIT);
    return newQuery.all();
});

const articleCount = computedAsync(async () => {
    const newQuery = query.value;
    const count = await newQuery.count();
    return count;
});

const totalPage = computed(() => {
    return Math.ceil(articleCount.value / LIMIT);
});

const isNextPageAvailable = computed(() => {
    return currentPage.value !== totalPage.value;
});

watch(currentPage, (newPage) => {
    params.page = newPage.toString();
    fetchArticle();
});

const onClickSearchButton = () => {
    currentPage.value = 1;
    params.category = searchCategory.value;
    params.word = searchWord.value;
    fetchArticle();
};
</script>
<template>
    <DefinePaginationTemplate>
        <div class="join justify-center">
            <button
                class="btn join-item"
                :class="{ 'btn-disabled': currentPage === 1 }"
                @click="currentPage--"
            >
                <Icon name="bi:chevron-left"></Icon>
            </button>
            <div class="btn join-item pointer-events-none">
                {{ currentPage }}&nbsp;/&nbsp;{{ totalPage }}&nbsp;ページ
            </div>
            <button
                class="btn join-item"
                :class="{ 'btn-disabled': !isNextPageAvailable }"
                @click="currentPage++"
            >
                <Icon name="bi:chevron-right"></Icon>
            </button>
        </div>
    </DefinePaginationTemplate>

    <div class="flex flex-col gap-8">
        <div class="flex flex-row flex-wrap gap-4">
            <div class="join">
                <div class="btn join-item btn-sm pointer-events-none">
                    <IconWithText name="bi:folder">カテゴリ</IconWithText>
                </div>
                <select
                    v-model="searchCategory"
                    class="join-item select select-bordered select-sm w-full max-w-xs"
                >
                    <option value="">すべて</option>
                    <option v-for="category in BLOG_CATEGORIES" :key="category.name">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <div class="join">
                <div class="btn join-item btn-sm pointer-events-none cursor-default">
                    <Icon name="bi:search"></Icon>
                </div>
                <input
                    v-model="searchWord"
                    class="input join-item input-bordered input-sm grow"
                    placeholder="例：キーボード"
                    @keydown.enter="onClickSearchButton()"
                />
            </div>
            <button class="btn btn-sm" @click="onClickSearchButton()">検索</button>
        </div>
        <PaginationTemplate></PaginationTemplate>
        <div v-if="pending">
            <p class="text-center">
                <span class="loading loading-spinner loading-lg text-primary"></span>
            </p>
        </div>
        <template v-else>
            <div
                v-if="articles && articles?.length > 0"
                class="flex flex-col flex-wrap place-content-center gap-8 md:flex-row"
            >
                <ArticleCardVertical
                    v-for="article in articles"
                    :key="article.id"
                    :link-path="article.path"
                    :thumbnail="article.thumbnail || null"
                    :title="article.title"
                    :category="article.category || null"
                    :tags="article.tags"
                    :created-at="article.createdAt || null"
                    :updated-at="article.updatedAt || null"
                ></ArticleCardVertical>
            </div>
            <div v-else>
                <p class="text-center">該当する記事がみつかりませんでした</p>
            </div>
        </template>
        <PaginationTemplate></PaginationTemplate>
    </div>
</template>
