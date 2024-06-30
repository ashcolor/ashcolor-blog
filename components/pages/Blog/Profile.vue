<template>
    <div class="flex w-full flex-col gap-8 border p-8 sm:flex-row">
        <div class="flex items-center">
            <img
                src="/img/author.avif"
                alt="アイコン"
                width="150"
                height="150"
                class="aspect-square grow-0 rounded-full"
            />
        </div>
        <div class="flex flex-col gap-4">
            <div>
                <p class="text-sm text-slate-500">Webシステムエンジニア / DTMer</p>
                <p class="text-xl">あっしゅからー</p>
            </div>
            <div>
                <p>フリーランスでWebシステムエンジニアをやっています。</p>
                <p>趣味ではDTMをしていて、オリジナル曲をニコニコ動画やYouTubeに投稿しています。</p>
            </div>
            <div class="flex flex-row gap-4">
                <NuxtLink
                    v-for="account in ACCOUNTS"
                    :key="account.name"
                    :to="account.url"
                    :aria-label="account.name"
                    target="_blank"
                    class="btn btn-circle btn-outline btn-primary btn-sm"
                >
                    <Icon :name="account.icon" size="24px"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
