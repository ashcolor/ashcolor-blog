<script setup lang="ts">
if (import.meta.env.PROD) {
    navigateTo({
        path: "/",
    });
}

definePageMeta({
    layout: "studio",
});

const route = useRoute();

const { data: article } = await useAsyncData(route.path, () =>
    queryCollection("studio").path(route.path).first()
);

const links = article.value?.body?.toc?.links;
</script>

<template>
    <div class="grid grid-cols-12">
        <div class="col-span-12 flex flex-col gap-4 lg:col-span-8">
            <ContentRenderer v-if="article" :value="article" />
        </div>
        <div class="col-span-4 hidden px-4 lg:block">
            <div class="sticky top-24 flex flex-col">
                <div class="card max-h-[80vh] overflow-y-auto border">
                    <div class="card-body">
                        <h2 class="card-title"><Icon name="bi:list-ul" />目次</h2>
                        <div>
                            <ul>
                                <li v-for="link in links" :key="link.text">
                                    <a :href="`#${link.id}`"> ・&nbsp;{{ link.text }} </a>
                                    <ul
                                        v-if="link.children"
                                        class="my-2 flex flex-col gap-1 pl-5 text-sm"
                                    >
                                        <li
                                            v-for="childrenLink in link.children"
                                            :key="childrenLink.id"
                                        >
                                            <a :href="`#${childrenLink.id}`">
                                                └&nbsp;{{ childrenLink.text }}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
