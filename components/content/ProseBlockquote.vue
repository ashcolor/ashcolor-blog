<!-- @see https://github.com/nuxt-themes/typography/blob/main/components/global/ProseBlockquote.vue -->
<template>
    <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
    <blockquote class="prose-blockquote">
        <slot />
    </blockquote>
</template>

<style lang="ts" scoped>
css({
    blockquote: {
        fontFamily: "{typography.font.body}",
        margin: "{prose.blockquote.margin}",
        paddingInlineStart: "{prose.blockquote.paddingInlineStart}",
        quotes: "{prose.blockquote.quotes}",
        color: "#666666",
        borderInlineStartWidth: "{prose.blockquote.border.width}",
        borderInlineStartStyle: "{prose.blockquote.border.style}",
        borderInlineStartColor: "{prose.blockquote.border.color}",
        "p:first-of-type::before": { content: "''" },
        "p:last-of-type::after": { content: "''" },
    },
});
</style>
