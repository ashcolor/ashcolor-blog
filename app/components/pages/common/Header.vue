<script setup lang="ts">
import { BLOG_TITLE, BLOG_CATEGORIES } from "@/utils/const";

const headerCategories = BLOG_CATEGORIES.filter((category) => category.isShowList);
const menuDropDownRef = ref<HTMLDetailsElement | null>(null);

const onMenuClick = () => {
    if (!menuDropDownRef.value) {
        return;
    }
    menuDropDownRef.value.open = false;
};
</script>

<template>
    <div class="navbar shadow-sm bg-base-100/75 backdrop-blur">
        <div class="container m-auto flex flex-row">
            <div class="navbar-start flex w-full flex-row lg:w-1/2">
                <details ref="menuDropDownRef" class="dropdown lg:hidden">
                    <summary class="btn btn-ghost px-2 sm:px-4">
                        <Icon name="bi:list" size="24px"></Icon>
                    </summary>
                    <ul
                        class="menu dropdown-content menu-md mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        @click="onMenuClick"
                    >
                        <li>
                            <div class="menu-title">BLOG</div>
                            <ul>
                                <li
                                    v-for="category in headerCategories"
                                    :key="category.name"
                                    class="link-hover link"
                                >
                                    <NuxtLink :to="category.path">
                                        <Icon :name="category.iconName" />{{ category.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="menu-title">INFORMATION</div>
                            <ul>
                                <li><NuxtLink to="/profile">運営者情報</NuxtLink></li>
                                <li><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
                            </ul>
                        </li>
                    </ul>
                </details>
                <NuxtLink to="/" class="btn btn-ghost px-2 text-xl normal-case sm:px-4">{{
                    BLOG_TITLE
                }}</NuxtLink>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li
                        v-for="category in headerCategories"
                        :key="category.name"
                        class="link-hover link"
                    >
                        <NuxtLink :to="category.path">
                            <Icon :name="category.iconName" />
                            {{ category.name }}</NuxtLink
                        >
                    </li>
                    <li><NuxtLink to="/profile">運営者情報</NuxtLink></li>
                    <li><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
                </ul>
            </div>
            <div class="navbar-end">
                <NuxtLink to="/search" aria-label="記事検索" class="btn btn-ghost">
                    <Icon name="bi:search" size="16px"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
