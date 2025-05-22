<script lang="ts" setup></script>

<template>
    <div class="navbar shadow-sm bg-base-100/75">
        <div class="container m-auto flex flex-row">
            <div class="navbar-start flex w-full flex-row lg:w-1/2">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost px-2 sm:px-4 lg:hidden">
                        <Icon name="bi:list" size="24px"></Icon>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu dropdown-content menu-md mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        <li><NuxtLink to="/studio/story">コンポーネント一覧</NuxtLink></li>
                        <li><NuxtLink to="/studio/tool">記事作成ツール</NuxtLink></li>
                    </ul>
                </div>
                <NuxtLink to="/" class="btn btn-ghost px-2 font-logo text-xl normal-case sm:px-4">{{
                    BLOG_TITLE
                }}</NuxtLink>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><NuxtLink to="/studio/story">コンポーネント一覧</NuxtLink></li>
                    <li><NuxtLink to="/studio/tool">記事作成ツール</NuxtLink></li>
                </ul>
            </div>
            <div class="navbar-end hidden lg:flex">
                <NuxtLink to="/" class="btn btn-ghost">
                    <Icon name="ph:browser-duotone" size="16px"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
