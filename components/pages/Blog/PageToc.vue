<script setup lang="ts">
import type { TocLink } from "@nuxt/content/dist/runtime/types";

interface Props {
    links: Array<TocLink>;
}

const props = withDefaults(defineProps<Props>(), {
    links: () => [],
});

const linksWithoutFootnote = computed(() =>
    props.links.filter((link: TocLink) => link.id !== "footnote-label")
);
</script>

<template>
    <div class="card max-h-[80vh] overflow-y-auto border">
        <div class="card-body">
            <h2 class="card-title"><Icon name="bi:list-ul" />目次</h2>
            <div>
                <ul v-if="linksWithoutFootnote" class="my-2 flex flex-col gap-2 text-base">
                    <li v-for="link in linksWithoutFootnote" :key="link.text">
                        <a :href="`#${link.id}`"> ・&nbsp;{{ link.text }} </a>
                        <ul v-if="link.children" class="my-2 flex flex-col gap-3 pl-5 text-sm">
                            <li v-for="childrenLink in link.children" :key="childrenLink.id">
                                <a :href="`#${childrenLink.id}`">
                                    └&nbsp;{{ childrenLink.text }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
