<script setup lang="ts">
import { BLOG_CATEGORIES } from "@/utils/const";

const showCategories = BLOG_CATEGORIES.filter((category) => category.isShowList);
</script>

<template>
    <footer class="footer sm:footer-horizontal justify-evenly bg-base-200 p-10 text-base-content">
        <div class="flex w-full flex-col gap-4">
            <span class="footer-title opacity-80">BLOG</span>
            <NuxtLink
                v-for="category in showCategories"
                :key="category.name"
                :to="category.path"
                class="link-hover link"
            >
                {{ category.name }}
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
            <span class="footer-title opacity-80">Information</span>
            <NuxtLink to="/profile" class="link-hover link">運営者情報</NuxtLink>
            <NuxtLink to="/contact" class="link-hover link">お問い合わせ</NuxtLink>
            <NuxtLink to="/privacy-policy" class="link-hover link">プライバシーポリシー</NuxtLink>
        </div>
        <div class="flex flex-col">
            <span class="footer-title opacity-80">Link</span>
            <div class="grid grid-flow-col gap-4">
                <NuxtLink
                    v-for="account in ACCOUNTS"
                    :key="account.name"
                    :to="account.url"
                    :aria-label="account.name"
                    target="_blank"
                    class="btn btn-ghost btn-sm"
                >
                    <Icon :name="account.icon" size="24px"></Icon>
                </NuxtLink>
            </div>
        </div>
    </footer>
    <footer class="footer footer-center rounded bg-base-200 p-10 text-base-content">
        <div>
            <p>Copyright © 2025 あっしゅからー - All right reserved</p>
        </div>
    </footer>
</template>
