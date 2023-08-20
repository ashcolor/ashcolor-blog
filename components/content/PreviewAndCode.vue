<script setup lang="ts">
import { Icon } from "@iconify/vue";

const tabState = ref("preview");
</script>

<template>
    <div class="grid">
        <div class="tabs z-10 -mb-px">
            <button
                class="tab tab-lifted"
                :class="{ 'tab-active': tabState === 'preview' }"
                @click="tabState = 'preview'"
            >
                Preview
            </button>
            <button
                class="tab tab-lifted"
                :class="{ 'tab-active': tabState === 'code' }"
                @click="tabState = 'code'"
            >
                Code
            </button>
            <div
                class="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]"
            ></div>
        </div>
        <div class="rounded-b-box rounded-tr-box relative overflow-x-auto bg-base-300">
            <div
                v-show="tabState === 'preview'"
                class="rounded-b-box rounded-tr-box min-h-[6rem] w-full border border-base-300 bg-base-100 p-4"
            >
                <slot name="preview"></slot>
            </div>
            <div
                v-show="tabState === 'code'"
                class="rounded-b-box rounded-tr-box min-h-[6rem] w-full border border-base-300 bg-base-100 px-4"
            >
                <span class="flex gap-4">
                    <slot name="code" class="border-none"></slot>
                </span>

                <Icon icon="clip-board"></Icon>
            </div>
        </div>
    </div>
</template>
