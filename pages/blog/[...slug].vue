<script setup lang="ts">
import { Icon } from "@iconify/vue";

const route = useRoute();

const article = await queryContent(route.path)
    .findOne()
    .catch(() => null);
</script>

<template>
    <NuxtLayout>
        <div v-if="article">
            <div class="mb-8">
                <div class="flex flex-row flex-wrap gap-1">
                    <NuxtLink
                        v-if="article.category"
                        :to="`/blog/${article.category}`"
                        class="badge badge-neutral gap-1"
                    >
                        <Icon icon="bi:folder-fill"></Icon>
                        {{ article.category }}
                    </NuxtLink>
                    <NuxtLink
                        v-for="tag in article.tags"
                        :key="tag"
                        :to="`/search?word=${tag}`"
                        class="badge gap-1"
                    >
                        <Icon icon="bi:tag"></Icon>
                        {{ tag }}
                    </NuxtLink>
                </div>
                <ProseH1>{{ article.title }}</ProseH1>
                <div class="text-mute flex flex-row items-center gap-2 text-sm">
                    <div v-if="article.createdAt" class="flex flex-row items-center gap-1">
                        <Icon icon="bi:pencil-square"></Icon>
                        <span>{{ article.createdAt }}</span>
                    </div>
                    <div v-if="article.updatedAt" class="flex flex-row items-center gap-1">
                        <Icon icon="bi:arrow-counterclockwise"></Icon>
                        <span>{{ article.updatedAt }}</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
                    <div class="mx-auto mb-8">
                        <img :src="article.thumbnail" />
                    </div>
                    <div class="col-span-4 mb-8 block lg:hidden">
                        <PageToc></PageToc>
                    </div>
                    <ContentRenderer :value="article" />
                    <div class="divider"></div>
                    <BlogSnsShareContainer></BlogSnsShareContainer>
                </div>
                <div class="col-span-4 hidden px-4 lg:block">
                    <div class="sticky top-24 flex flex-col">
                        <PageToc></PageToc>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col gap-4">
            <h1 class="text-xl">お探しのページが見つかりませんでした</h1>
            <ProseA to="/">TOPへ</ProseA>
        </div>
    </NuxtLayout>
</template>
