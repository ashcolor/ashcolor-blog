<script setup lang="ts">
const { data, pending } = useLazyAsyncData(
    () => queryContent("/data/synthesizer-v-singer").findOne(),
    {
        server: false,
    }
);

const singers = computed(() => {
    if (!data.value.body) return [];
    return data.value?.body;
});

const languageFilter = ref<string>("");
const genderFilter = ref<string>("");
const illustFilter = ref<string>("");

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

    if (illustFilter.value) {
        tmpSingers = tmpSingers.filter((singer) => {
            return singer.illust === illustFilter.value;
        });
    }

    tmpSingers.sort((a, b) => {
        return a[sort.value] < b[sort.value] ? 1 : -1;
    });

    return tmpSingers;
});
</script>

<template>
    <div class="my-16 flex flex-col gap-4">
        <p class="font-bold">歌声データベース一覧</p>

        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">ソート</span>
            </label>
            <select v-model="sort" class="select select-bordered select-sm w-full max-w-xs">
                <option value="release">発売日</option>
                <option value="company">会社</option>
            </select>
        </div>

        <div class="flex flex-col justify-evenly gap-2 md:flex-row">
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
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">立ち絵</span>
                </label>
                <select
                    v-model="illustFilter"
                    class="select select-bordered select-sm w-full max-w-xs"
                >
                    <option value="">すべて</option>
                    <option value="あり">あり</option>
                    <option value="なし">なし</option>
                </select>
            </div>
        </div>
        <div v-if="pending">
            <div class="loading loading-spinner mx-auto my-8 block text-primary"></div>
        </div>
        <template v-else>
            <div class="flex flex-col gap-4">
                <div class="overflow-x-auto">
                    <table class="table table-xs">
                        <thead>
                            <tr>
                                <th>発売日</th>
                                <th>名前</th>
                                <th>発売元</th>
                                <th>対応言語</th>
                                <th>性別</th>
                                <th>立ち絵</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="singer in filteredSingers" :key="singer.name">
                                <td>{{ singer.release }}</td>
                                <td class="font-bold">{{ singer.name }}</td>
                                <td>{{ singer.company }}</td>
                                <td>{{ singer.language }}</td>
                                <td
                                    :class="{
                                        'text-red-500': singer.gender === '女声',
                                        'text-blue-500': singer.gender === '男声',
                                    }"
                                >
                                    {{ singer.gender }}
                                </td>
                                <td>{{ singer.illust === "あり" ? "あり" : "-" }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </template>
    </div>
</template>
