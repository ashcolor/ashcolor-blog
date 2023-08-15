<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <footer class="footer justify-evenly bg-base-200 p-10 text-base-content">
        <div class="flex w-full flex-col gap-4">
            <span class="footer-title">BLOG</span>
            <NuxtLink
                v-for="category in BLOG_CATEGORIES"
                :key="category.name"
                :to="category.path"
                class="link-hover link"
            >
                {{ category.name }}
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
            <span class="footer-title">Information</span>
            <NuxtLink to="/profile" class="link-hover link">運営者情報</NuxtLink>
            <NuxtLink to="/contact" class="link-hover link">お問い合わせ</NuxtLink>
            <NuxtLink to="/privacy-policy" class="link-hover link">プライバシーポリシー</NuxtLink>
        </div>
        <div class="flex flex-col">
            <span class="footer-title">Social</span>
            <div class="grid grid-flow-col gap-4">
                <NuxtLink to="https://twitter.com/ashcolor06" target="_blank" aria-label="X">
                    <Icon icon="bi:twitter" width="24"></Icon>
                </NuxtLink>
            </div>
        </div>
    </footer>
    <footer class="footer footer-center rounded bg-base-200 p-10 text-base-content">
        <div>
            <p>Copyright © 2023 あっしゅからー - All right reserved</p>
        </div>
    </footer>
</template>
