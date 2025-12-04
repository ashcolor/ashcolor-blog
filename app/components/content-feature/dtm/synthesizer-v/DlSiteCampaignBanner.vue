<script setup lang="ts">
const searchLink = "https://www.dlsite.com/soft/campaign/bulkbuy/=/key/ahs-set202511/";
const affiliateUrl = computed(() => Util.affiliateDlSiteUrl(searchLink));
</script>

<template>
    <ClientOnly>
        <!-- <div class="flex flex-col">
            <a :href="affiliateUrl" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://d2s4ypph6g1t06.cloudfront.net/img/pc/2025-11-01_14-05-51_37xr2xmt.webp"
                    alt="DLsiteで購入"
                    class="w-full"
                    loading="lazy"
                />
            </a>
            <div class="self-end text-sm text-slate-500">PR</div>
        </div> -->
    </ClientOnly>
</template>
