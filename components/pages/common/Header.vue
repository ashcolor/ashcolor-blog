<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { BLOG_TITLE, BLOG_CATEGORIES } from "@/utils/const";

const headerCategories = BLOG_CATEGORIES.filter((category) => category.isShowList);
</script>

<template>
    <div class="navbar border-b bg-base-100/75">
        <div class="container m-auto">
            <div class="navbar-start flex w-full flex-row lg:w-1/2">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost px-2 sm:px-4 lg:hidden">
                        <Icon icon="bi:list" width="24"></Icon>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu dropdown-content rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
                    >
                        <li
                            v-for="category in BLOG_CATEGORIES"
                            :key="category.name"
                            class="link-hover link"
                        >
                            <NuxtLink :to="category.path">{{ category.name }}</NuxtLink>
                        </li>
                        <li><NuxtLink to="/profile">運営者情報</NuxtLink></li>
                        <li><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
                    </ul>
                </div>
                <NuxtLink to="/" class="btn btn-ghost px-2 font-logo text-xl normal-case sm:px-4">{{
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
                        <NuxtLink :to="category.path">{{ category.name }}</NuxtLink>
                    </li>
                    <li><NuxtLink to="/profile">運営者情報</NuxtLink></li>
                    <li><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
                </ul>
            </div>
            <div class="navbar-end hidden lg:flex">
                <NuxtLink to="/search" class="btn btn-ghost">
                    <Icon icon="bi:search" width="16"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
