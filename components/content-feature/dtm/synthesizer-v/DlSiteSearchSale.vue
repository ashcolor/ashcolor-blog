<script setup lang="ts">
const searchLink =
    "https://www.dlsite.com/soft/fsr/=/language/jp/keyword/Synthesizer%20V/age_category[0]/general/work_category[0]/pc/order/trend/options_and_or/and/options[0]/JPN/options[1]/NM/campaign/campaign/lang_options[0]/%E6%97%A5%E6%9C%AC%E8%AA%9E/lang_options[1]/%E8%A8%80%E8%AA%9E%E4%B8%8D%E8%A6%81/?unique_op=af&utm_medium=affiliate&utm_source=none";
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
                        class="btn btn-lg w-full bg-[#039] text-white hover:bg-[#039]"
                        :href="affiliateUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="bi:search"></Icon>
                        DLsite で Synthesizer V を検索
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
