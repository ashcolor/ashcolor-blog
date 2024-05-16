<script setup lang="ts">
import { createReusableTemplate } from "@vueuse/core";

const [DefinePaginationTemplate, PaginationTemplate] = createReusableTemplate();

const LIMIT = 12;

const params = useUrlSearchParams("history");
const currentPage = ref(parseInt(typeof params.page === "string" ? params.page : "1"));
const searchCategory = ref(typeof params.category === "string" ? params.category : "");
const searchWord = ref(typeof params.word === "string" ? params.word : "");

const where = computed(() => {
    const where = {};
    if (searchCategory.value) {
        where.category = searchCategory.value;
    }

    if (searchWord.value) {
        where.$or = [
            {
                title: { $regex: searchWord.value },
            },
            {
                tags: { $in: searchWord.value },
            },
        ];
    }

    return where;
});

const { data: articleCount, execute: fetchCount } = useLazyAsyncData(() => {
    const countQuery = queryContent("blog");
    countQuery.where(where.value);
    return countQuery.count();
});

const totalPage = computed(() => {
    return Math.ceil(articleCount.value / LIMIT);
});

const {
    data: articles,
    execute: fetchArticle,
    pending,
} = useLazyAsyncData(() => {
    const query = queryContent("blog");

    query.where(where.value);

    query.limit(LIMIT);
    query.without(["body"]);

    const sort = typeof params.sort === "string" ? Util.kebabToCamelCase(params.sort) : "createdAt";
    const orderValue = params.order === "asc" ? 1 : -1;
    query.sort({ [sort]: orderValue });

    query.skip(LIMIT * (currentPage.value - 1));

    return query.find();
});

const isNextPageAvailable = computed(() => {
    return currentPage.value !== totalPage.value;
});

watch(currentPage, (newPage) => {
    params.page = newPage.toString();
    fetchArticle();
    fetchCount();
});

const onClickSearchButton = () => {
    currentPage.value = 1;
    params.category = searchCategory.value;
    params.word = searchWord.value;
    fetchArticle();
    fetchCount();
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
                «
            </button>
            <div class="btn join-item pointer-events-none">
                {{ currentPage }}&nbsp;/&nbsp;{{ totalPage }}&nbsp;ページ
            </div>
            <button
                class="btn join-item"
                :class="{ 'btn-disabled': !isNextPageAvailable }"
                @click="currentPage++"
            >
                »
            </button>
        </div>
    </DefinePaginationTemplate>

    <div class="flex flex-col gap-8">
        <div class="flex flex-row flex-wrap gap-4">
            <div class="join">
                <div class="btn join-item btn-sm pointer-events-none">カテゴリ</div>
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
                    <Icon name="bi:search" size="24px"></Icon>
                </div>
                <input
                    v-model="searchWord"
                    class="input join-item input-bordered input-sm grow"
                    placeholder="例：キーボード イヤホン"
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
                v-if="articles?.length > 0"
                class="flex flex-col flex-wrap place-content-center gap-8 md:flex-row"
            >
                <ArticleCardVertical
                    v-for="article in articles"
                    :key="article._path"
                    :link-path="article._path"
                    :thumbnail="article.thumbnail"
                    :title="article.title"
                    :category="article.category"
                    :tags="article.tags"
                    :created-at="article.createdAt"
                    :updated-at="article.updatedAt"
                ></ArticleCardVertical>
            </div>
            <div v-else>
                <p class="text-center">該当する記事がみつかりませんでした</p>
            </div>
        </template>
        <PaginationTemplate></PaginationTemplate>
    </div>
</template>
