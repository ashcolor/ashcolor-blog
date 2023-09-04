<script setup lang="ts">
import { Icon } from "@iconify/vue";

const LIMIT = 6;

const params = useUrlSearchParams("history");
const page = ref(parseInt(typeof params.page === "string" ? params.page : "1"));
const searchCategory = ref(typeof params.category === "string" ? params.category : "");
const searchWord = ref(typeof params.word === "string" ? params.word : "");

const unprocessedArticles = ref<Array<Object>>([]);
const fetchArticle = async () => {
    const query = queryContent("blog");

    if (searchCategory.value) {
        query.where({ category: searchCategory.value });
    }

    if (searchWord.value) {
        query.where({
            $or: [
                {
                    title: { $regex: searchWord.value },
                },
                {
                    tags: { $in: searchWord.value },
                },
            ],
        });
    }

    // TODO カウントを実装して全体のページ数を表示する
    // const count = await query.only(["_id"]).find();
    // console.log(count.length);

    query.limit(LIMIT + 1);

    const sort = typeof params.sort === "string" ? Util.kebabToCamelCase(params.sort) : "createdAt";
    const orderValue = params.order === "asc" ? 1 : -1;
    query.sort({ [sort]: orderValue });

    query.skip(LIMIT * (page.value - 1));

    unprocessedArticles.value = await query.find();
};

const articles = computed(() => {
    if (typeof unprocessedArticles.value !== "object") return [];
    return unprocessedArticles.value.slice(0, LIMIT);
});

const isNextPageAvailable = computed(() => {
    if (typeof unprocessedArticles.value !== "object") return false;
    return unprocessedArticles.value.length > LIMIT;
});

watch(page, async (newPage) => {
    params.page = newPage.toString();
    await fetchArticle();
});

const onClickSearchButton = async () => {
    page.value = 1;
    params.category = searchCategory.value;
    params.word = searchWord.value;
    await fetchArticle();
};

await fetchArticle();
</script>
<template>
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
                    class="input input-bordered join-item input-sm grow"
                    placeholder="例：キーボード イヤホン"
                />
            </div>
            <button class="btn btn-sm" @click="onClickSearchButton()">検索</button>
        </div>
        <div>{{ page }}&nbsp;ページ</div>
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
                :category="article.category"
                :tags="article.tags"
                :created-at="article.createdAt"
                :updated-at="article.updatedAt"
            ></ArticleCardVertical>
        </div>
        <div v-else>
            <p class="text-center">該当する記事がみつかりませんでした</p>
        </div>
        <div class="join justify-center">
            <button class="btn join-item" :class="{ 'btn-disabled': page === 1 }" @click="page--">
                «
            </button>
            <div class="btn join-item pointer-events-none">{{ page }}&nbsp;ページ</div>
            <button
                class="btn join-item"
                :class="{ 'btn-disabled': !isNextPageAvailable }"
                @click="page++"
            >
                »
            </button>
        </div>
    </div>
</template>
