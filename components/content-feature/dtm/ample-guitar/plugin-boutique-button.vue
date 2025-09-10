<script setup lang="ts">
const searchLink =
    "https://www.pluginboutique.com/manufacturers/213-Ample-Sound?a_aid=68799d2d146d8";
</script>

<template>
    <ClientOnly>
        <div
            class="my-4 flex flex-col place-items-stretch gap-4 border p-8 sm:flex-row sm:items-center sm:justify-center"
        >
            <div class="flex grow flex-col gap-2">
                <div class="flex flex-col gap-2 sm:flex-row">
                    <div class="flex grow flex-col justify-end">
                        <a
                            :href="searchLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-lg w-full text-white bg-[#00a3dd] hover:bg-[#007ca9]"
                        >
                            <Icon name="bi:search"></Icon>
                            Plugin BoutiqueでAmple Guitarを検索
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>
