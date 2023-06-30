<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
    path: "/blog",
    // where: [{ layout: "article" }],
    // limit: 5,
    // sort: [{ date: -1 }],
};
</script>

<template>
    <NuxtLayout>
        <ProseH1 class="text-center font-banana">{{ BLOG_TITLE }}</ProseH1>
        <ProseH3>新着記事</ProseH3>
        <ProseH3>オススメ記事</ProseH3>
        <ContentList :query="query">
            <template #default="{ list }">
                <div class="flex flex-col flex-wrap place-content-center gap-8 md:flex-row">
                    <!-- {{ article.category }} -->
                    <template v-for="article in list" :key="article._path">
                        <NuxtLink
                            :to="article._path"
                            class="card w-96 min-w-[24rem] border bg-base-100"
                        >
                            <figure>
                                <img :src="article.thumbnail" :alt="article.title" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">{{ article.title }}</h2>
                                <div class="flex flex-row gap-2">
                                    <span v-for="tag in article.tags" :key="tag" class="badge">
                                        {{ tag }}
                                    </span>
                                </div>
                                <p
                                    class="flex flex-row items-center gap-1 align-baseline text-sm font-thin"
                                >
                                    <Icon icon="bi:arrow-counterclockwise" class="inline"></Icon>
                                    <span>{{ article.updatedAt }}</span>
                                </p>
                            </div>
                        </NuxtLink>
                    </template>
                </div>
            </template>
            <template #not-found>
                <p>No articles found.</p>
            </template>
        </ContentList>
    </NuxtLayout>
</template>
