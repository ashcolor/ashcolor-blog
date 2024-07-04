---
createdAt: "2024/06/12"
updatedAt: ""
title: "Vueのスコープ付きCSSで子コンポーネントにCSSを適用する【Vue3】"
description: "スコープ付きCSSで子コンポーネントにCSSを適用する方法を説明します。"
category: "プログラミング"
subCategory: "Vue.js"
tags:
  - "Vue.js"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_vue-define-model_vue.webp"
isRecommend: false
---

## 前提

スコープ付きCSSはファイル内の要素にだけ適用されるため、子コンポーネントにはCSSが適用されません。

```vue [Parent.vue]
<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const msg = ref("Hello World!");
</script>

<template>
  <div>
    <p>親コンポーネント</p>
    <div class="parent">
      <Child></Child>
    </div>
  </div>
</template>

<style scoped>
.parent p {
  <!-- 適用されない -- >
  background-color: red;
}
</style>
```

```vue [Child.vue]
<template>
  <div>
    <p>子コンポーネント</p>
  </div>
</template>
```

## 解決方法

`:deep()` 擬似クラスを使用します。

```vue [Parent.vue]
<style scoped>
.parent :deep(p) {
  background-color: red;
}
</style>
```

### プレイグラウンド

以下のURLから動作を確認することができます。

[Vue SFC Playground](https://play.vuejs.org/#eNp9UrFO5DAQ/ZU5NwsSlxR31V5Y6Q4hHRSAAInGTXBmQ8CxLdtZFq22YRsaJH6AlgKJipa/WSHxGYwdCCsBG6WYmfdm/Gb0JuyvMcmoQdZnmRO2Mh4c+sYMuKpqo62HCVgcwhSGVtfQI2qvg2DjpJIFvEFJGtMwjShcCa2ch9qVsB5GrPT+o5QajrSVxY/eKldZ2r5Ib1HisTYy90gZQFZUozYwg5e7+/nl43xG/+189jSfXcf4KkuDypYLQubOrXNmcovKcxYRwqKkQdZKa+lpN/stytKFtyl1/kIiOKENhpaknQn9AtGsmNVJ6D3OxVlpdaOKn0JLbfu0YvGHq2lcKwygTrbGPI1Rw6pMTp1WdOTYzJnQtakk2l3jKzoTZ32ISMByutL5dqx52+Dae12coDj7on7qxqHG2Z5Fh3aEnHWYz22JdI4Abx7s4JjiDqx10UhiLwH30WnZBI0t7R8tTLIXeFHtVvRDpcpDtzn2qNz7UkFoYE4jnzPyxsaS1T/k/kp+xz66KF2xM9Ynmy7x0IKL2o+89Pxws9RL35iCTV8B5+wcLw==)

## 補足

Vue2では`>>>`、`/deep/`、`::v-deep()`を使うことができました。

```vue [Parent.vue]
<style scoped>
.parent >>> p {
  background-color: red;
}

.parent /deep/ p {
  background-color: red;
}

.parent ::v-deep(p) {
  background-color: red;
}
</style>
```

Vue3でも動作しますが、非推奨となっています。

## 参考

- [Vue.js:deepセレクター](https://ja.vuejs.org/api/sfc-css-features#deep-selectors)
- [vuejs/rfcs 0023-scoped-styles-changes.md
  ](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)
