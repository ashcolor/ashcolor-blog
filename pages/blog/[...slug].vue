<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <NuxtLayout>
        <ContentDoc>
            <template #default="{ doc }">
                <div class="mb-8">
                    <div class="flex flex-row gap-1">
                        <NuxtLink
                            v-if="doc.category"
                            :to="`/blog/${doc.category}`"
                            class="badge badge-neutral gap-1"
                        >
                            <Icon icon="bi:folder-fill"></Icon>
                            {{ doc.category }}
                        </NuxtLink>
                        <NuxtLink
                            v-for="tag in doc.tags"
                            :key="tag"
                            :to="`/search?word=${tag}`"
                            class="badge gap-1"
                        >
                            <Icon icon="bi:tag"></Icon>
                            {{ tag }}
                        </NuxtLink>
                    </div>
                    <ProseH1>{{ doc.title }}</ProseH1>
                    <div class="text-mute flex flex-row items-center gap-2 text-sm">
                        <div v-if="doc.createdAt" class="flex flex-row items-center gap-1">
                            <Icon icon="bi:pencil-square"></Icon>
                            <span>{{ doc.createdAt }}</span>
                        </div>
                        <div v-if="doc.updatedAt" class="flex flex-row items-center gap-1">
                            <Icon icon="bi:arrow-counterclockwise"></Icon>
                            <span>{{ doc.updatedAt }}</span>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12">
                    <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
                        <div class="mx-auto mb-8">
                            <img :src="doc.thumbnail" />
                        </div>
                        <div class="col-span-4 mb-8 block lg:hidden">
                            <PageToc></PageToc>
                        </div>
                        <ContentRenderer :value="doc" />
                    </div>
                    <div class="col-span-4 hidden px-4 lg:block">
                        <div class="sticky top-24 flex flex-col">
                            <PageToc></PageToc>
                        </div>
                    </div>
                </div>
            </template>
            <template #not-found>
                <div class="flex flex-col gap-4">
                    <h1 class="text-xl">お探しのページが見つかりませんでした</h1>
                    <ProseA to="/">TOPへ</ProseA>
                </div>
            </template>
        </ContentDoc>
    </NuxtLayout>
</template>
