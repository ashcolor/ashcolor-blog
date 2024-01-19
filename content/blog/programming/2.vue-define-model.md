---
createdAt: "2024/01/07"
updatedAt: "2024/01/19"
title: "【Vue.js 3.4】defineModelを活用した入力コンポーネントの作成方法"
description: "Vue.js 3.4で追加されたdefineModelの使い方を紹介しています。"
category: "プログラミング"
subCategory: "Vue.js"
tags:
  - "Vue.js"
thumbnail: "https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/programming/vue-define-model/vue.png"
isRecommend: false
---

## はじめに

2023年12月29日、**Vue.js 3.4**がリリースとなりました🎉

3.4で追加された機能は以下のブログで確認できます。

:link-card{url="https://blog.vuejs.org/posts/vue-3-4"}

この記事ではVue.js 3.4の中で特に便利だと感じた`defineModel`について、実例を交えながら使い方を解説します。

## defineModelを使った入力コンポーネントの作成

`input`を含むコンポーネントに含むコンポーネントを作成する場合、今までは引数を定義するための`props`と、親コンポーネントへ値を受け渡す関数を定義するための`emits`、どちらも記述する必要がありました。

今回追加された`defineModel`を使うと`props`と`emits`を記述することなく、入力コンポーネントを実現することができます。

以下に例を示します。

![今回作成するコンポーネント](https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/programming/vue-define-model/define-model.png)

インプット部分が子コンポーネントとなっており、子コンポーネントのインプットに入力された内容を親コンポーネントに表示しています。

このコンポーネントを従来の記法と`defineModel`を活用した記法で作成してみます。

### 従来の記法

`App.vue`

```vue [App.vue]
<script setup>
import Child from "./Child.vue";
import { ref } from "vue";

const msg = ref("Hello World!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <Child v-model="msg" />
</template>
```

`Child.vue`

```vue [Child.vue]
<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input :value="props.modelValue" @input="(e) => emit('update:modelValue', e.target.value)" />
</template>
```

子コンポーネント内で`props`を定義することで親コンポーネントから値を受け取り、`emits`を定義することで親コンポーネントへ値を送れるようにしています。

また、`props`で定義した値は書き込みが出来ないため、`v-model`に設定することができません。
代わりに、`:value`に`props`を設定することによって値を表示、`@input`に入力時の処理を書いています。

### defineModelを活用した記法

App.vueは上記と同じです。

`Child.vue`

```vue [Child.vue]
<script setup>
const model = defineModel();
</script>

<template>
  <input v-model="model" />
</template>
```

`props`と`emits`を記述する代わりに、`defineModel`を記述することで変数の受け取りと変更ができるようになります。

また、`v-model`の値は変更可能なので、そのまま`input`タグの`v-model`に`defineModel`で定義した変数を渡すことができます。

上記のコードは、以下のプレイグラウンドで動作させることができます。

:link-card{url="https://play.vuejs.org/#eNqFUstqwzAQ/BVVF6eQ2pTcghNoQ6At9EFb6EWXYK8dpbIk9EgDxv/elZy4KYTkJO3ODDurUUvvtE63HuiU5rYwXDtiwXk9Z5I3WhlHFmsuSlIZ1ZAkzWIVBMlAaImBinR7Sg8xWShpHWlsTWYBHyUPIIQiX8qI8iq5ZjLP+nk4CQsHjRYrB1gRkq9v520bxV2XZ1jFbu9ke9OoEsSMUcQZJRmCeXakp2PqLI6veJ1urJK4Whv0jBaq0VyAedWOoz1GpyQiAVuhu5+n2HPGw/jQL9ZQfJ/ob+wu9Bh9M2DBbIHRAXMrU4Pr4eXHC+zwPoDo3gtknwHfwSrhg8eedu9libaPeNHtY3x/LutPu9w5kPawVDAamF3kM4qZLM6s/md3kk6ijskOX3HI+sTn2McbksCAS6i4hOdQjS5Ey6X27jjEcDL6P0Ta/QLnct5h"}

### 複数のv-modelを渡す方法

複数の`v-model`を使用する場合は、`v-model引数`を用いて`v-model:変数名`と記述します。

子コンポーネントでは`defineModel`に引数を与えて`defineModel('変数名')`と記述します。

以下に例を示します。

`App.vue`

```vue [App.vue]
<script setup>
import { ref } from "vue";
import UserName from "./UserName.vue";

const first = ref("John");
const last = ref("Doe");
</script>

<template>
  <h1>{{ first }} {{ last }}</h1>
  <UserName v-model:first-name="first" v-model:last-name="last" />
</template>
```

`UserName.vue`

```vue [UserName.vue]
<script setup>
const firstName = defineModel("firstName");
const lastName = defineModel("lastName");
</script>

<template>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
</template>
```

上記のコードは、以下のプレイグラウンドで動作させることができます。

:link-card{url="https://play.vuejs.org/#eNqFkstuwjAQRX/F8iZUAqKKHQpIfbAoUmnVx86bKEzANLEt26FUkf+9Y4MDSAg2UWbu9fjckVv6oNRw2wAd08wUmitLDNhGTZngtZLakpZoKIkjpZY1SdCadNK3Ab3IazhowzQ2/ES0MVFIYSwpucbvxA/qJXO5FsldlKr8qDxL8EKW7kEQAQsLtapyC1gRkq3vp217mOccwf8wwLksRSlYIoMvCNkOarmEahyODAT2J4yGgtFzhx8UDf5/r6c4NEs7CNqnpxkvbO0kcVjNhCyh5AJe/SW9pBPOV3DJGvu3dsKFaiyxf8qTW9gheQwVs4Z90BDm5oF47cF/Ht4aZC75argxUmD61g9ktJC14hXoN2U5ZmJ0TILitbyq5O889KxuoB/7xRqKnwv9jdn5HqPvGnDVWwTpNJvrFSCul2efi4DeiRigqdB9RfwAI6vGM+5tj41YIvaJL9C+hOfNxerLzHYWhImhPKh3uuBnFJ/A05XoR9zRcBTOMeGo+wcs+yse"}

### TypeScriptでの使用

`defineModel`は型引数を取ることができます。

```vue [Child.vue]
<script setup lang="ts">
const model = defineModel<string>();
</script>
```

型引数を記述することによって、`defineModel`が受け入れられる型を制限することができます。

### まとめ

この記事ではVue.js 3.4の中で特に便利だと感じた`defineModel`について、実例を交えながら使い方を解説しました。
`defineModel`を知っていると入力コンポーネントを短く分かりやすく書くことができるので、ぜひ使ってみてください。

:affiliate-block{title="Vue 3　フロントエンド開発の教科書" imageUrl="https://m.media-amazon.com/images/I/51EEdM8QBtL._SL160_.jpg" asin="B0BG3YF6ZY"}

## 参考

- Announcing Vue 3.4

:link-card{url="https://blog.vuejs.org/posts/vue-3-4"}

- Component v-model

:link-card{url="https://ja.vuejs.org/guide/components/v-model.html"}

- defineModel

:link-card{url="https://ja.vuejs.org/api/sfc-script-setup#definemodel"}
