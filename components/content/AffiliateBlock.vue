<script setup lang="ts">
import { AMAZON_ASSOCIATE_ID } from "@/utils/const";

interface Props {
    title: string;
    imageUrl: string;
    // for amazon
    asin?: string;
    // for DlSite
    dlSiteLink?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    imageUrl: "",
    asin: "",
    dlSiteLink: "",
});

const amazonUrl = computed(
    () => `https://www.amazon.co.jp/dp/${props.asin}/?tag=${AMAZON_ASSOCIATE_ID}`
);

const dlSiteUrl = computed(() => Util.affiliateDlSiteUrl(props.dlSiteLink));

const amazonCampaignText = () => {
    if (AMAZON_SALE_START_DATE <= new Date() && new Date() < AMAZON_SALE_END_DATE)
        return "ポイントアップキャンペーン中";
    return false;
};

const dlSiteCampaignText = () => {
    const endDate = new Date("2024-05-08T13:59:00");
    if (new Date() < endDate && props.title.includes("Synthesizer V")) {
        return "Synthesizer V セット割キャンペーン中！";
    }
    return false;
};
</script>

<template>
    <!-- 複数のカスタムコンポーネントを使用した際、
        画像が別コンポーネントの画像に切り替わる不具合が出たためClientOnlyにしてfix -->
    <ClientOnly>
        <div
            class="my-4 flex flex-col place-items-stretch gap-4 border p-4 sm:flex-row sm:items-center sm:justify-center"
        >
            <a
                v-if="imageUrl"
                :href="props.asin ? amazonUrl : dlSiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="self-center"
            >
                <img
                    nuxt-client
                    :src="props.imageUrl"
                    :alt="props.title"
                    class="max-w-48"
                    loading="lazy"
                />
            </a>
            <div class="flex grow flex-col gap-2">
                <div class="text-lg font-bold">
                    {{ props.title }}
                </div>
                <div class="flex flex-col gap-2 sm:flex-row">
                    <div v-if="props.asin" class="flex grow flex-col justify-end">
                        <p v-if="amazonCampaignText()" class="text-center text-sm text-red-500">
                            ＼&nbsp;{{ amazonCampaignText() }}&nbsp;／
                        </p>
                        <a
                            class="btn w-full bg-[#ffd814] hover:bg-[#ffd814]"
                            :href="amazonUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Amazonで購入
                        </a>
                    </div>
                    <div v-if="props.dlSiteLink" class="flex grow flex-col justify-end">
                        <p v-if="dlSiteCampaignText()" class="text-center text-sm text-red-500">
                            ＼&nbsp;{{ dlSiteCampaignText() }}&nbsp;／
                        </p>
                        <a
                            class="btn w-full bg-[#039] text-white hover:bg-[#039]"
                            :href="dlSiteUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DLsiteで購入
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>
