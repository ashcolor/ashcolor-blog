<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="navbar min-h-0 border-b bg-base-200">
        <div class="container m-auto">
            <div class="navbar-start w-full lg:w-1/2">
                <p class="text-xs">システムエンジニア/DTMerのブログ</p>
            </div>
            <div class="navbar-end hidden lg:flex">
                <NuxtLink
                    to="https://twitter.com/ashcolor06"
                    target="_blank"
                    class="btn-ghost btn-xs btn"
                >
                    <Icon icon="bi:twitter" width="16"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
