<script setup lang="ts">
const searchLink = "https://www.dlsite.com/soft/genres/works?genrekey=voicetool202506";
const affiliateUrl = computed(() => Util.affiliateDlSiteUrl(searchLink));
</script>

<template>
    <div
        class="my-4 flex flex-col place-items-stretch gap-4 border p-8 sm:flex-row sm:items-center sm:justify-center"
    >
        <div class="flex grow flex-col gap-2">
            <div class="flex flex-col gap-2 sm:flex-row">
                <div class="flex grow flex-col justify-end">
                    <a
                        class="btn btn-lg w-full bg-[#039] text-white hover:bg-[#039] shadow-lg"
                        :href="affiliateUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="bi:search"></Icon>
                        DLsite で 音声合成ソフト を検索
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
