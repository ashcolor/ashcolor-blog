<template>
    <!-- 画像や音声などブロック要素を含むため p ではなく div にする
        （p の中に div があると HTML パース時に p が閉じられ hydration mismatch になる） -->
    <div class="py-4"><slot /></div>
</template>
