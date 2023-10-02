<script setup lang="ts">
interface Props {
    title: string;
    url: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    url: "",
});

const encodedTitle = computed(() => encodeURIComponent(props.title));
const isValidUrl = computed(() => Util.isValidUrl(props.url));
const url = computed(() => (isValidUrl.value ? new URL(props.url) : ""));
const encodedHref = computed(() => encodeURIComponent(url.value.href));
const encodedHostPath = computed(() =>
    encodeURIComponent(`${url.value.host}${url.value.pathname}`)
);

const twitterURL = computed(
    () => `https://twitter.com/intent/tweet?url=${encodedHref.value}&text=${encodedTitle.value}`
);
const facebookURL = computed(
    () => `https://www.facebook.com/sharer/sharer.php?u=${encodedHref.value}`
);
const lineURL = computed(
    () => `https://social-plugins.line.me/lineit/share?url=${encodedHref.value}`
);
const hatenabookmarkURL = computed(() => `https://b.hatena.ne.jp/entry/s/${encodedHostPath.value}`);
</script>

<template>
    <div class="my-2 flex flex-col gap-4">
        <p class="text-center">この記事をSNSで共有する</p>
        <div class="flex flex-row justify-center gap-4">
            <div>
                <SnsButton
                    icon="mingcute:social-x-fill"
                    :color="'#0f1419'"
                    :href="twitterURL"
                ></SnsButton>
            </div>
            <div>
                <SnsButton
                    icon="simple-icons:facebook"
                    :color="'#1877f2'"
                    :href="facebookURL"
                ></SnsButton>
            </div>
            <div>
                <SnsButton icon="simple-icons:line" :color="'#06c755'" :href="lineURL"></SnsButton>
            </div>
            <div>
                <SnsButton
                    icon="simple-icons:hatenabookmark"
                    :color="'#00a4de'"
                    :href="hatenabookmarkURL"
                ></SnsButton>
            </div>
            <div>
                <CopyButton :text="url?.href"></CopyButton>
            </div>
        </div>
    </div>
</template>
