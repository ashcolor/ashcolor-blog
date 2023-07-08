<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <NuxtLayout>
        <ContentDoc>
            <template #default="{ doc }">
                <div class="mb-8">
                    <ProseH1>{{ doc.title }}</ProseH1>
                    <p class="flex flex-row items-center gap-1 text-sm text-gray-400">
                        <Icon icon="bi:arrow-counterclockwise" class="inline"></Icon>
                        <span>{{ doc.updatedAt }}</span>
                    </p>
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
