<script setup lang="ts">
defineProps<{
    tweetId: string;
}>();

function formatJaDatetime(createdAt: Date): string {
    return createdAt.toLocaleString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Tokyo",
    });
}
</script>

<template>
    <ScriptXEmbed :tweet-id="tweetId" class="my-4">
        <template #loading>
            <div class="flex h-24 items-center justify-center rounded-xl border border-base-300">
                <span class="loading loading-spinner loading-sm"></span>
            </div>
        </template>
        <template #error>
            <div class="rounded-xl border border-base-300 p-4 text-sm text-base-content/50">
                ツイートを読み込めませんでした
            </div>
        </template>
        <template
            #default="{
                userName,
                userHandle,
                userAvatar,
                isVerified,
                text,
                createdAt,
                photos,
                video,
                tweetUrl,
            }"
        >
            <a
                :href="tweetUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block rounded-xl border border-base-300 p-4 no-underline transition-colors hover:bg-base-200"
            >
                <!-- ヘッダー -->
                <div class="mb-3 flex items-start gap-3">
                    <img
                        :src="userAvatar"
                        :alt="userName"
                        class="m-0 h-10 w-10 rounded-full object-cover"
                    />
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-1">
                            <span class="truncate font-bold text-base-content">{{ userName }}</span>
                            <svg
                                v-if="isVerified"
                                viewBox="0 0 24 24"
                                class="h-4 w-4 shrink-0 fill-sky-500"
                                aria-label="認証済み"
                            >
                                <path
                                    d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                                />
                            </svg>
                        </div>
                        <span class="text-sm text-base-content/60">@{{ userHandle }}</span>
                    </div>
                    <!-- X ロゴ -->
                    <svg
                        viewBox="0 0 24 24"
                        class="h-5 w-5 shrink-0 fill-base-content"
                        aria-hidden="true"
                    >
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                    </svg>
                </div>

                <!-- 本文 -->
                <p class="mb-3 whitespace-pre-wrap text-sm leading-relaxed text-base-content">
                    {{ text }}
                </p>

                <!-- 画像 -->
                <div
                    v-if="photos && photos.length"
                    :class="[
                        'mb-3 overflow-hidden rounded-xl',
                        photos.length === 1 ? 'grid grid-cols-1' : 'grid grid-cols-2 gap-0.5',
                    ]"
                >
                    <img
                        v-for="photo in photos"
                        :key="photo.url"
                        :src="photo.url"
                        alt="ツイート画像"
                        class="m-0 h-full w-full object-cover"
                        :style="photos.length === 1 ? 'max-height: 300px' : 'max-height: 150px'"
                    />
                </div>

                <!-- 動画 -->
                <div v-if="video" class="mb-3 overflow-hidden rounded-xl">
                    <video
                        controls
                        :poster="video.posterProxied"
                        class="m-0 w-full"
                        style="max-height: 300px"
                        @click.prevent.stop
                    >
                        <source
                            v-for="variant in video.variants"
                            :key="variant.src"
                            :src="variant.src"
                            :type="variant.type"
                        />
                    </video>
                </div>

                <!-- フッター -->
                <div class="flex items-center gap-4 text-xs text-base-content/50">
                    <span>{{ formatJaDatetime(createdAt) }}</span>
                </div>
            </a>
        </template>
    </ScriptXEmbed>
</template>
