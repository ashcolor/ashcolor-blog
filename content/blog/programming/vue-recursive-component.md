---
createdAt: "2024/01/29"
updatedAt: "2024/02/19"
title: "Vueで再帰的コンポーネントを作成する方法【Vue3】"
description: "Vue3で再帰的コンポーネントを作成する方法を解説します。"
category: "プログラミング"
subCategory: "Vue.js"
tags:
  - "Vue.js"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_vue-define-model_vue.webp"
isRecommend: false
---

## はじめに

この記事ではVue.jsで再帰的コンポーネントの作成方法を解説します。

再帰的コンポーネントとは、あるコンポーネントが自身を呼び出しているようなコンポーネントを指します。
例えば、ディレクトリ構造やスレッド形式のコメント欄等をコンポーネント化する際に使うことが考えられます。

今回は、ディレクトリ構造を表現するコンポーネントを作成してみます。

## 再帰的コンポーネントの基本

Vue.jsで再帰的コンポーネントを作成するのは簡単です。

コンポーネントはデフォルトで自身を呼び出すことができます。
例えば、`FooBar.vue` というファイル名のコンポーネントは、そのテンプレート内で `<FooBar/>` として呼び出せます。

自身を呼び出すだけではコンポーネントが無限に描画されていくので、あとは描画の条件を`v-if`などを利用して制御します。

## ディレクトリ構造を再帰的コンポーネントで再現する

再帰的コンポーネントの例として、ディレクトリ構造を表現するコンポーネントを作成します。
コンポーネントの見た目は以下のようになります。

![今回作成するコンポーネント](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_vue-recursive-component_sample.webp)

ディレクトリ構造を再現する再帰的コンポーネント`DirectoryTree.vue`は、以下のように作成しました。
（CSSは一部省略）

```vue [DirectoryTree.vue]
<script setup lang="ts">
interface Props {
  type: string;
  name: string;
  children?: Array<any>;
}

const props = withDefaults(defineProps<Props>(), {
  type: "",
  name: "",
  children: () => [],
});
</script>

<template>
  <template v-if="props.type === 'directory'">
    <li>
      <span class="directory">{{ props.name }}</span>
      <ul>
        <div v-for="child in props.children">
          <DirectoryTree
            :type="child.type"
            :name="child.name"
            :children="child.children"
          ></DirectoryTree>
        </div>
      </ul>
    </li>
  </template>

  <template v-else>
    <li>
      <span class="file">
        {{ props.name }}
      </span>
    </li>
  </template>
</template>
```

`props`の`type`が`directory`のときはディレクトリのため再度、自身のコンポーネント名である<DirectoryTree>を呼び出します。
`props`の`type`が`directory`のときはファイルのため、ファイル名のみを描画しています。

このコンポーネントを呼び出す親コンポーネント`App.vue`は、以下のように作成しました。

```vue [App.vue]
<script setup lang="ts">
import { ref } from "vue";
import DirectoryTree from "./DirectoryTree.vue";

const tree = ref([
  {
    type: "directory",
    name: "Dir1",
    children: [
      {
        type: "file",
        name: "File1",
      },
      {
        type: "directory",
        name: "Dir2",
        children: [
          {
            type: "file",
            name: "File2",
          },
          {
            type: "directory",
            name: "Dir3",
            children: [
              {
                type: "file",
                name: "File3",
              },
              {
                type: "file",
                name: "File4",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "file",
    name: "File5",
  },
]);
</script>

<template>
  <DirectoryTree :type="'directory'" :name="'/'" :children="tree"></DirectoryTree>
</template>
```

ディレクトリ構造を持つリアクティブな変数を`tree`として定義します。

DirectoryTreeに`tree`を受け渡すことで、ディレクトリ構造を描画することができます。

上記のコードは以下のプレイグラウンドで確認することができます。

:link-card{url="https://play.vuejs.org/#eNqtVE1y0zAUvsobbZrONAm0ZWOcMIWWGVhAB7qruzC2nKooskeS02QyWTDDDTgAV+QIPMmWLTtuyoIsMtb7/d7P97bkoigmq5KSgIQqkazQoKguC+CxWMwiolVE5pFgyyKXGrYgaQY7yGS+hCN0O3rd6C6ZpInO5eZGUlpbTKYdqUlkPCKR5EJp0MZyZmKObiMBsDV/AHpT0AAikjrfiJxUGhEvrQajvmyEyT3jqaQiABvE/OpAfrCMcdq4+LHeo6INBrBrvgai7EPqwTrtKAag9QIfhNiH2Q3uQz0QdRhyD/bZnvIJ6AOJni2hX8Z+sn4p/yPL+T9kuXuyna3GSStJ9bLYBtD4+V/VMuNxd4xbH04rgiGd8KHpsuCxpvgy0cMOUVzuwORAFh41QzyKSKM02Yxy6gvd3Ax3TaRaMw+7VMS04dTDQE6Q6sjKjC0mDyoXeA9skRFJ8mWB5cjPhWbI2ogEbjQRiTnPHz9amZYlrTuFPvc0+T4gf1BrI4vItaSKylU7RUQbywXVlfrq6ye6xu9GuczT0nT5gPILVTkvDcbK7G0pUoTt2Vm0H+y1YmJxo67WmgrlijJA2wlHBG/VuwOlt3DPJmfWLxI77OLewXvusgpNZRYnFK5lXih/tZSWiBM3xy2WJ3BjfhPAhZTxJozFZo4aROGua2HjzeCR6ftLmsUl12qU0owJalOF9n8+Oj7p7nNvl+tnew9GxzCbw63hw+6ZvW5esBqzDIu2mCYmE8xmM+jstWMCZ/WXfakiFpDwWCl0927ZfLutKpwYoLDbIQw09V1L7r3wnbIV4shyiZFsOcBEHcNV16BonAZ56X6On9bdltUysbGpaVrZmMeAjcfayq4F1LUd4LEHdool+h2YNi0Ip3VbO6zvz4hy1RwkbwzdIVT3zkvTn0Tj5k9kGEAPTaj0hlPAQ1TQ1FqX3FFuiYRjuH4v7P4DFHGaIhvGTHDc6LFCQuoATs+LtTWwRADgzPlzpjRaYfxxtekiF9Q3NWAnzYYFwTeKq0KdO3IKrwVmiMif379+RGTP1fTlsNfP1gt7Y6DMye4vz7jXHg=="}

## まとめ

今回は再帰的コンポーネントの作成方法を解説しました。
Vue.jsではあるコンポーネント内で自身を呼び出すことができるため、簡単に再帰的コンポーネントを作成することができます。

既に誰かがまとめていると思ったのですが、Vue3かつ`<script setup>`構文で書かれた例がまだなかったためまとめてみました。
参考になれば幸いです。

## 参考

- Vue.js公式 再帰的コンポーネント

:link-card{url="https://ja.vuejs.org/api/sfc-script-setup.html#recursive-components"}
