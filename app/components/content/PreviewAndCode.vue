<script setup lang="ts">
const tabState = ref("preview");
</script>

<template>
    <div class="grid">
        <div class="tabs tabs-lifted z-10 -mb-px">
            <button
                class="tab"
                :class="{ 'tab-active': tabState === 'preview' }"
                @click="tabState = 'preview'"
            >
                Preview
            </button>
            <button
                class="tab"
                :class="{ 'tab-active': tabState === 'code' }"
                @click="tabState = 'code'"
            >
                Code
            </button>
            <div class="tab mr-6 flex-1 cursor-default [--tab-border-color:transparent]"></div>
        </div>
        <div class="relative overflow-x-auto rounded-r-box bg-base-300">
            <div
                v-show="tabState === 'preview'"
                class="min-h-24 w-full rounded-r-box border border-base-300 bg-base-100 p-4"
            >
                <slot name="preview"></slot>
            </div>
            <div
                v-show="tabState === 'code'"
                class="min-h-24 w-full rounded-r-box border border-base-300 bg-base-100 px-4"
            >
                <span class="flex gap-4">
                    <slot name="code" class="border-none"></slot>
                </span>

                <Icon name="bi:clipboard"></Icon>
            </div>
        </div>
    </div>
</template>
