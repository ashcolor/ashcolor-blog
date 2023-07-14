<script setup lang="ts">
const encodedTitle = encodeURIComponent(document.title);

const url = new URL(window.location.href);
const encodedHref = encodeURIComponent(url.href);
const encodedHostPath = encodeURIComponent(`${url.host}${url.pathname}`);

const twitterURL = computed(
    () => `http://twitter.com/share?url=${encodedHref}&text=${encodedTitle}`
);
const facebookURL = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodedHref}`);
const lineURL = computed(() => `https://social-plugins.line.me/lineit/share?url=${encodedHref}`);
const hatenabookmarkURL = computed(() => `https://b.hatena.ne.jp/entry/s/${encodedHostPath}`);
</script>

<template>
    <div class="my-2 flex flex-col gap-4">
        <p class="text-center">この記事をSNSで共有する</p>
        <div class="flex flex-row justify-center gap-4">
            <div>
                <SnsButton :icon="'twitter'" :color="'#1da1f2'" :href="twitterURL"></SnsButton>
            </div>
            <div>
                <SnsButton :icon="'facebook'" :color="'#1877f2'" :href="facebookURL"></SnsButton>
            </div>
            <div>
                <SnsButton :icon="'line'" :color="'#06c755'" :href="lineURL"></SnsButton>
            </div>
            <div>
                <SnsButton
                    :icon="'hatenabookmark'"
                    :color="'#00a4de'"
                    :href="hatenabookmarkURL"
                ></SnsButton>
            </div>
            <div>
                <CopyButton :text="url.href"></CopyButton>
            </div>
        </div>
    </div>
</template>
