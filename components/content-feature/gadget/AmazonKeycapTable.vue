<script setup lang="ts">
const { data, pending } = useLazyAsyncData(() => queryCollection("keyCaps").first());

const keycaps = computed(() => {
    if (!data.value?.body) return [];
    return data.value?.body;
});
</script>

<template>
    <div class="my-16 flex flex-col gap-4">
        <p class="font-bold">Amazonで購入できるオススメのキーキャップ一覧</p>
        <div v-if="pending">
            <div class="loading loading-spinner mx-auto my-8 block text-primary"></div>
        </div>
        <template v-else>
            <div class="flex flex-col gap-4">
                <div class="max-h-[72rem] overflow-auto">
                    <table class="table table-pin-rows table-xs text-nowrap">
                        <thead>
                            <tr>
                                <th>画像</th>
                                <th>メーカー</th>
                                <th>商品名</th>
                                <th>素材</th>
                                <th>形状</th>
                                <th>印字</th>
                                <th>コンセプト</th>
                                <th>備考</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="keycap in keycaps" :key="keycap.name">
                                <td>
                                    <div
                                        class="flex flex-col place-content-center items-center gap-1"
                                    >
                                        <a
                                            :href="`https://www.amazon.co.jp/dp/${keycap.asin}/?tag=${AMAZON_ASSOCIATE_ID}`"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img :src="keycap.image" />
                                        </a>
                                        <a
                                            class="btn btn-xs hidden grow bg-[#ff9900] text-white hover:bg-[#ff9900] sm:inline-flex"
                                            :href="`https://www.amazon.co.jp/dp/${keycap.asin}/?tag=${AMAZON_ASSOCIATE_ID}`"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Amazonで購入
                                        </a>
                                    </div>
                                </td>
                                <td>{{ keycap.manufacturer }}</td>
                                <td>{{ keycap.name }}</td>
                                <td>{{ keycap.material }}</td>
                                <td>{{ keycap.shape }}</td>
                                <td>{{ keycap.printing }}</td>
                                <td>{{ keycap.concept }}</td>
                                <td>{{ keycap.notes }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </template>
    </div>
</template>
