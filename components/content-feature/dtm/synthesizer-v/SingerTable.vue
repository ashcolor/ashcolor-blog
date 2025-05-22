<script setup lang="ts">
const { data, pending } = useLazyAsyncData(() => queryCollection("singer").first());

const singers = computed(() => {
    if (!data.value?.body) return [];
    return data.value?.body;
});

const languageFilter = ref<string>("");
const genderFilter = ref<string>("");

const sort = ref<string>("release");

const filteredSingers = computed(() => {
    let tmpSingers = singers.value;

    if (languageFilter.value) {
        tmpSingers = tmpSingers.filter((singer) => {
            const languages = singer.language.split(",");
            return languages.includes(languageFilter.value);
        });
    }

    if (genderFilter.value) {
        tmpSingers = tmpSingers.filter((singer) => {
            return singer.gender === genderFilter.value;
        });
    }

    tmpSingers.sort((a, b) => {
        return a[sort.value] < b[sort.value] ? 1 : -1;
    });

    return tmpSingers;
});
</script>

<template>
    <!-- eslint-disable tailwindcss/no-custom-classname -->
    <ClientOnly>
        <div class="my-8 flex flex-col gap-4">
            <p class="font-bold">歌声データベース一覧</p>

            <div class="flex flex-col justify-evenly gap-2 md:flex-row">
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">ソート</span>
                    </label>
                    <select v-model="sort" class="select select-bordered select-sm w-full max-w-xs">
                        <option value="release">発売日</option>
                        <option value="company">発売元</option>
                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">収録言語</span>
                    </label>
                    <select
                        v-model="languageFilter"
                        class="select select-bordered select-sm w-full max-w-xs"
                    >
                        <option value="">すべて</option>
                        <option value="日本語">日本語</option>
                        <option value="英語">英語</option>
                        <option value="中国語">中国語</option>
                        <option value="スペイン語">スペイン語</option>
                        <option value="韓国語">韓国語</option>
                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">性別</span>
                    </label>
                    <select
                        v-model="genderFilter"
                        class="select select-bordered select-sm w-full max-w-xs"
                    >
                        <option value="">すべて</option>
                        <option value="男声">男声</option>
                        <option value="女声">女声</option>
                    </select>
                </div>
            </div>
            <div v-if="pending">
                <div class="loading loading-spinner mx-auto my-8 block text-primary"></div>
            </div>
            <template v-else>
                <div class="flex flex-col gap-4">
                    <div class="max-h-96 overflow-auto md:max-h-[768px]">
                        <table class="table table-xs">
                            <thead>
                                <tr>
                                    <th>発売日</th>
                                    <th>名前</th>
                                    <th>Ver.</th>
                                    <th>発売元</th>
                                    <th>収録言語</th>
                                    <th>音声提供者</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="singer in filteredSingers"
                                    :key="`${singer.name}${singer.version}`"
                                >
                                    <td>{{ singer.release }}</td>
                                    <td class="font-bold">
                                        <a
                                            v-if="singer.dlsite_url"
                                            :href="Util.affiliateDlSiteUrl(singer.dlsite_url)"
                                            class="link tooltip"
                                            data-tip="DLsiteで見る"
                                            target="_blank"
                                        >
                                            <p>{{ singer.name }}</p>
                                            <img
                                                v-if="singer.image_url"
                                                :src="singer.image_url"
                                                class="max-h-20 border"
                                                :alt="singer.name"
                                            />
                                        </a>
                                        <p v-else>{{ singer.name }}</p>
                                    </td>
                                    <td>{{ singer.version }}</td>
                                    <td>{{ singer.company }}</td>
                                    <td>{{ singer.language }}</td>
                                    <td
                                        :class="{
                                            'text-red-500': singer.gender === '女声',
                                            'text-blue-500': singer.gender === '男声',
                                        }"
                                    >
                                        {{ singer.voice }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </template>
            <div class="self-end">
                <span class="text-sm text-slate-500">PR</span>
            </div>
        </div>
    </ClientOnly>
</template>
