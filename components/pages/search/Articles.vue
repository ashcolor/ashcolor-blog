<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { createReusableTemplate } from "@vueuse/core";

const [DefinePaginationTemplate, PaginationTemplate] = createReusableTemplate();

const LIMIT = 6;

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

const articleCount = ref(1);
const totalPage = computed(() => {
    return Math.ceil(articleCount.value / LIMIT);
});

const {
    data: articles,
    execute: fetchArticle,
    pending,
} = await useAsyncData(
    async () => {
        const query = queryContent("blog");
        const countQuery = queryContent("blog");

        query.where(where.value);
        countQuery.where(where.value);

        articleCount.value = await countQuery.count();

        query.limit(LIMIT);
        query.without(["body"]);

        const sort =
            typeof params.sort === "string" ? Util.kebabToCamelCase(params.sort) : "createdAt";
        const orderValue = params.order === "asc" ? 1 : -1;
        query.sort({ [sort]: orderValue });

        query.skip(LIMIT * (currentPage.value - 1));

        return await query.find();
    },
    { immediate: false }
);

const isNextPageAvailable = computed(() => {
    return currentPage.value !== totalPage.value;
});

watch(currentPage, async (newPage) => {
    params.page = newPage.toString();
    await fetchArticle();
});

const onClickSearchButton = async () => {
    currentPage.value = 1;
    params.category = searchCategory.value;
    params.word = searchWord.value;
    await fetchArticle();
};

onMounted(async () => {
    await fetchArticle();
});
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
                    class="select join-item select-bordered select-sm w-full max-w-xs"
                >
                    <option value="">すべて</option>
                    <option v-for="category in BLOG_CATEGORIES" :key="category.name">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <div class="join">
                <div class="btn join-item btn-sm pointer-events-none cursor-default">
                    <Icon icon="bi:search"></Icon>
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
        <div v-else-if="pending">
            <p class="text-center">
                <span class="loading loading-spinner loading-lg text-primary"></span>
            </p>
        </div>
        <div v-else>
            <p class="text-center">該当する記事がみつかりませんでした</p>
        </div>
        <PaginationTemplate></PaginationTemplate>
    </div>
</template>
