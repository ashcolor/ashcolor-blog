<script setup lang="ts">
import { Icon } from "@iconify/vue";

const route = useRoute();
const content = await queryContent(route.path).findOne();
const links = content.body.toc?.links;
</script>

<template>
    <div class="card max-h-[80vh] overflow-y-auto border">
        <div class="card-body">
            <h2 class="card-title"><Icon icon="bi:list-ul" />目次</h2>
            <div>
                <ul v-if="links" class="my-2 flex flex-col gap-2 text-base">
                    <li v-for="link in links" :key="link.text">
                        <a :href="`#${link.id}`"> ・&nbsp;{{ link.text }} </a>
                        <ul v-if="link.children" class="my-2 flex flex-col gap-1 pl-5 text-sm">
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
