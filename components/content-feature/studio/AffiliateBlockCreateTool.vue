<script setup lang="ts">
const title = ref("");
const asin = ref("");
const dlSiteLink = ref("");

const { data, execute } = await useLazyAsyncData(
    asin.value,
    () => {
        const query = { asin: asin.value };
        return $fetch(`/api/amazon-product-advertising?${query}`, {
            query,
        });
    },
    {
        immediate: false,
        server: false,
    }
);

const imageUrl = computed(() => {
    return data.value?.image?.Medium?.URL;
});

const code = computed(() => {
    const affiliateBlockProps = {
        title: title.value,
        imageUrl: imageUrl.value,
    };

    if (asin.value) {
        affiliateBlockProps.asin = asin.value;
    }

    if (dlSiteLink.value) {
        affiliateBlockProps.dlSiteLink = dlSiteLink.value;
    }

    const propsString = Object.entries(affiliateBlockProps)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");

    return `:affiliate-block{${propsString}}`;
});
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4 border p-2">
            <div class="flex flex-col justify-center gap-2">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">タイトル</span>
                    </div>
                    <input
                        v-model="title"
                        type="text"
                        placeholder="商品名"
                        class="input input-bordered w-full"
                    />
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">ASIN</span>
                    </div>
                    <input
                        v-model="asin"
                        type="text"
                        placeholder="ABCDEFGHIJ"
                        class="input input-bordered w-full max-w-xs"
                    />
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text"
                            ><a class="link" href="https://www.dlsite.com" target="_blank">DLsite</a
                            >用リンク</span
                        >
                    </div>
                    <input
                        v-model="dlSiteLink"
                        type="text"
                        placeholder="https://www.dlsite.com/home/work/=/product_id/AA00000000.html"
                        class="input input-bordered w-full"
                    />
                </label>
            </div>
            <div class="text-center">
                <button class="btn btn-primary btn-wide" @click="execute()">生成</button>
            </div>
        </div>
        <div class="place-self-center"><Icon name="fa:angle-double-down" size="16px"></Icon></div>
        <div>
            <PreviewAndCode>
                <template #preview>
                    <AffiliateBlock
                        :title="title"
                        :image-url="imageUrl"
                        :asin="asin"
                        :dl-site-link="dlSiteLink"
                    >
                    </AffiliateBlock>
                </template>
                <template #code>
                    <ProseCode>
                        {{ code }}
                    </ProseCode>
                </template>
            </PreviewAndCode>
        </div>
    </div>
</template>
