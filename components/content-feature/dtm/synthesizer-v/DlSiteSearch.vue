<script setup lang="ts">
const searchLink =
    "https://www.dlsite.com/soft/fsr/=/language/jp/keyword/synthesizer+v/age_category/general/work_category/pc/order%5B0%5D/trend/options_and_or/and/options%5B0%5D/JPN/options%5B1%5D/NM/per_page/30/page/1/from/topsearch.more";
const affiliateUrl = computed(() => Util.affiliateDlSiteUrl(searchLink));
</script>

<template>
    <div
        class="my-4 flex flex-col place-items-stretch gap-4 border p-8 sm:flex-row sm:items-center sm:justify-center"
    >
        <div class="flex grow flex-col gap-2">
            <!-- <div class="text-lg font-bold">DLsiteでSynthesizer V商品を検索</div> -->
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
