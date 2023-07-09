<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { BLOG_TITLE } from "@/utils/const";
</script>

<template>
    <header class="sticky top-0 z-50">
        <div class="navbar bg-base-200">
            <div class="container m-auto">
                <div class="navbar-start w-full lg:w-1/2">
                    <div class="dropdown">
                        <label tabindex="0" class="btn-ghost btn lg:hidden">
                            <Icon icon="bi:list" width="24"></Icon>
                        </label>
                        <ul
                            tabindex="0"
                            class="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
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
                    <NuxtLink to="/" class="btn-ghost btn font-logo text-xl normal-case">{{
                        BLOG_TITLE
                    }}</NuxtLink>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
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
                <div class="navbar-end hidden lg:flex">
                    <NuxtLink to="https://twitter.com/ashcolor06" target="_blank" class="btn">
                        <Icon icon="bi:twitter" width="24"></Icon>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>
