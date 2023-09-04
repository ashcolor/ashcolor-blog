<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ACCOUNTS, BLOG_SUBTITLE } from "@/utils/const";
</script>

<template>
    <div class="navbar min-h-0 border-b bg-base-200 py-0.5">
        <div class="container m-auto">
            <div class="navbar-start w-full lg:w-1/2">
                <p class="text-xs">{{ BLOG_SUBTITLE }}</p>
            </div>
            <div class="navbar-end hidden lg:flex">
                <NuxtLink
                    v-for="account in ACCOUNTS"
                    :key="account.name"
                    :to="account.url"
                    target="_blank"
                    class="btn btn-ghost btn-xs"
                >
                    <Icon :icon="account.icon" width="16"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
