<script setup lang="ts">
import { Icon } from "@iconify/vue";

if (import.meta.env.PROD) {
    navigateTo({
        path: "/",
    });
}

const route = useRoute();

const { data: article } = await useAsyncData(() => queryContent(route.path).findOne());

const links = article.value?.body.toc?.links;
</script>

<template>
    <div class="navbar border-b bg-base-100">
        <div class="flex-none">
            <label class="btn btn-square btn-ghost lg:hidden" for="my-drawer-2">
                <Icon icon="bi:list" width="24"></Icon>
            </label>
        </div>
        <div class="flex-1">
            <a class="btn btn-ghost text-xl normal-case">{{ BLOG_TITLE }}</a>
        </div>
    </div>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <div class="container mx-auto mb-24 px-4">
                <ContentRenderer :value="article" />
            </div>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu h-full w-80 bg-base-200 p-4 text-base-content">
                <li v-for="link in links" :key="link.text">
                    <a :href="`#${link.id}`"> ・&nbsp;{{ link.text }} </a>
                    <ul v-if="link.children" class="my-2 flex flex-col gap-1 pl-5 text-sm">
                        <li v-for="childrenLink in link.children" :key="childrenLink.id">
                            <a :href="`#${childrenLink.id}`"> └&nbsp;{{ childrenLink.text }} </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
