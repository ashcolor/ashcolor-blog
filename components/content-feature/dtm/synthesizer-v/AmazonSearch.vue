<script setup lang="ts">
const searchLink = "https://amzn.to/49nYcbu";
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
                            class="btn btn-lg w-full bg-[#ffd814] hover:bg-[#ffd814] shadow-lg"
                        >
                            <Icon name="bi:search"></Icon>
                            Amazon で Synthesizer V を検索
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>
