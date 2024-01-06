<script setup lang="ts">
import { Icon } from "@iconify/vue";

const route = useRoute();
const { data: article, pending } = useLazyAsyncData(() => {
    return queryContent(route.path).only(["body"]).findOne();
});

const links = computed(() => article.value?.body.toc?.links);

const filteredLinks = computed(() => {
    return links.value?.filter((link) => link.id !== "footnote-label");
});
</script>

<template>
    <div class="card max-h-[80vh] overflow-y-auto border">
        <div class="card-body">
            <h2 class="card-title"><Icon icon="bi:list-ul" />目次</h2>
            <div>
                <div v-if="pending">
                    <div class="loading loading-spinner mx-auto my-8 block text-primary"></div>
                </div>
                <template v-else>
                    <ul v-if="filteredLinks" class="my-2 flex flex-col gap-2 text-base">
                        <li v-for="link in filteredLinks" :key="link.text">
                            <a :href="`#${link.id}`"> ・&nbsp;{{ link.text }} </a>
                            <ul v-if="link.children" class="my-2 flex flex-col gap-3 pl-5 text-sm">
                                <li v-for="childrenLink in link.children" :key="childrenLink.id">
                                    <a :href="`#${childrenLink.id}`">
                                        └&nbsp;{{ childrenLink.text }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>
