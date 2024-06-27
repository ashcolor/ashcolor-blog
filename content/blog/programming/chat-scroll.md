---
createdAt: "2023/08/01"
updatedAt: ""
title: "メッセージ送受信時にスクロール位置を最下部に維持する処理を実装【TypeScript/Vue.js】"
description: "チャットUIによくあるメッセージ送受信時にスクロール位置を最下部に維持する処理を実装する方法を解説します。"
category: "プログラミング"
subCategory: "Vue.js"
tags:
  - "JavaScript"
  - "TypeScript"
  - "Vue.js"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_chat-scroll_thumbnail.avif"
isRecommend: true
---

## 概要

SlackやLINE、ChatGPTのようなチャットのUIでは最新のメッセージが最下部になっていることが多いです。

上記のUIでは新規のメッセージが追加されたとき、
元のスクロール位置が最下部 → 最下部を維持
元のスクロール位置が最下部以外 → 元のスクロール位置を維持
という仕様になっています。

### 動作イメージ

![動作イメージ](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_chat-scroll_chat-scroll.gif)

この機能をVue.jsで実装したので、実装方法を記載します。

### 完成品

[Vue3（Composition API）]{.marker}で作成しました。

以下のリンク先でコードとプレビューを確認できます。

[Vue-SFC-Playground](https://play.vuejs.org/#eNqNVc1u00AQfpWRL91IiZNWHJBxAkGq1EMjJOgNc3DiTbzC9lq7a6clyqW58RTwFkiAeJgIicdg1uvfuC1covXMt/PNzDc72VnzNLXzjFqO5cqVYKkCSVWWQuQnm6lnKelZMy9hccqFgh0Iuh7C1lercAgrHqeZosEQeLLgWYJH2MNa8Bg8C2N61gsv8ZIVT6SCmErpb6iEqY7hzoXw71ypBEs2sxlJ6BY6JvJ8YK9ZFBHPOh6+Hg+H4/334+HH8f6bZw0GGNdE9YNgYQJjXKLorXLARBjAdAY7L4Ga2c79KKN2msmwQOoo+36Gc0H9y4jGNFFlrlc3i+vSMiMN9ypiaLmibBOWSDJpvNhMHkVPe2942nZVTibfFe65es2Vwm5O61YT0tQlUCeRANFngIWvQttfStImNiXDqJNrbayTMJYBuHCugxWNMQnVwraJ+40qW4tqXOb4ec2kogkVKJ7h8KwhEKpdDhSIJhicpoHVFkhb+WJDlV27MSGAMi/AjuhWCSrZJ/pmKanIqcCrepDedoyEYDDBqGxzmtuGQRMaxPvJh5clbUGGuH7fpuU1u+1rctO6tOltbg7ksa51CyrRVSmLTPmK8aQpJi4t/WoQb+amHroKi3V1u9lKGoCtgZyOXDURJcETmlfykBoKoHjq9NJ5aAiHzZ0lDf2cceHg7pAx5yrEoancZWfx0B6ZE1lOCNuSVF39pxhDXHGrkEWBHmEHlNAmmS2VoNR8mpDFjzs2GxP3I34oGqeRryh+AbgBy/XDxg3ap/IsbIUvZeMc+egtFq2urricj9ZcNAhgSb3IaqCB1h8Au10Fgn3ZKsSMG1Bzbp2WGUqewCvUZ/URKZulSs5Olu/ZAMlPbH9+/fz9+Ys7NmHq8lvFzNrKO5hkZ3Xu950M9bGtr8Z3lumjeNwRDVjv1geQp4OuL/T27QP3qmZ2MumOdHujYthGlf+8Uw97qVxfK3fcGjL8lOouohiApzRAi92eJvN0tyxQoQMXzybpbfESQtNTuJjkYWFYchFQfHXn6S1IHrHAPBh8LOuIb0d3+H9aJKiHvhh5zYlk1v4vzvbmAg==)

## 実装方法

以下の流れで実装します。

1. メッセージエリアの作成
1. 最下部へのスクロール
1. 最下部にスクロールしているかの判定

### メッセージエリアの作成

まずは、メッセージを表示する領域とメッセージを追加するためのボタンを用意します。

```vue [App.ts]
<script setup lang="ts">
const messages = ref<Array<string>>([]);
const addMessage = (text: string) => {
  messages.value.push(text);
};

const messageAreaElement = ref<HTMLElement>();
</script>

<template>
  <div ref="messageAreaElement" class="message-area">
    <div v-for="message in messages">
      <div>
        {{ message }}
      </div>
    </div>
  </div>
  <button @click="addMessage('メッセージ')">メッセージ追加</button>
</template>

<style scoped>
.message-area {
  width: 240px;
  height: 20vh;
  border: 1px solid;
  overflow-y: scroll;
}
</style>
```

refオブジェクトを宣言したあと、操作したいDOM要素の`ref`属性に宣言した変数を渡すとDOMにアクセスできるようになります。

### 最下部へのスクロール

次にメッセージエリアにメッセージが追加されたらスクロール位置を最下部に変更する処理を実装します。

```vue [App.ts]
<script setup lang="ts">
...
onMounted(() => {
  const observer = new MutationObserver((mutation) => {
    messageAreaElement.value.scrollTo({
      top: 10000
      behavior: "smooth",
    });
  });
  observer.observe(messageAreaElement.value, {
    childList: true
  });
});
</script>
```

`MutationObserver`を`childList: true`として呼び出すと、DOMに要素が追加されたことを検知できます。

`scrollTo()`を使うとスクロール位置を変更できます。
スクロール位置は`top:スクロールするピクセル数`で指定するのですが、最大値を超えていたらスクロールできる最大値に設定されるため、ここでは仮に大きめな値を入れてあります。（後で正しい値に修正します。）

### 最下部にスクロールしているかの判定

最下部にスクロールしているかの判定に必要な変数を用意します。

```vue [App.ts]
<script setup lang="ts">
...
const clientHeight = ref(0);
const scrollHeight = ref(0);
const scrollTop = ref(0);

onMounted(() => {
  messageAreaElement.value.addEventListener("scroll", (event: Event) => {
    scrollTop.value = event.target.scrollTop;
  });

  const resizeObserver = new ResizeObserver((entries) => {
    const target = entries[0]?.target;
    clientHeight.value = target.clientHeight;
  });
  resizeObserver.observe(messageAreaElement.value);

  const observer = new MutationObserver((mutation) => {
    scrollHeight.value = newScrollHeight;
  });
});
</script>
```

`clientHeight`は見た目上の要素の高さです。
`resizeObserver`を使うことによって`clientHeight`の変更を検知します。

`scrollHeight`はoverflowしていて画面上に表示されない部分を含めた要素の中身の高さです。
`MutationObserver`を使うことによって、メッセージエリアに要素が追加されたときの`scrollHeight`の変更を検知します。

`scrollTop`は垂直方向にスクロールされている距離です。
`scroll`イベントが発生したときに`scrollTop`の変更を検知します。

次にスクロール位置が最下部になっているかの判定をします。

```vue [App.ts]
<script setup lang="ts">
...
const isScrollAtBottom = computed(() => {
  return (
    Math.abs(scrollHeight.value - clientHeight.value - scrollTop.value) < 1
  );
});
...
</script>
```

理論上は`scrollHeight - clientHeight - scrollTop`が`0`のときにスクロール位置が最下部になります。
`===`で判定していないのは、`scrollTop`は小数を含む可能性があるのに対して、`scrollHeight`と`clientHeight`は整数に丸められるため、スクロール量が閾値に十分に近いかで判定する必要があるからです。[^scroll]

[^scroll]: [Element.scrollHeight | 要素が完全にスクロールされたかどうかの判定](https://developer.mozilla.org/ja/docs/Web/API/Element/scrollHeight#%E8%A6%81%E7%B4%A0%E3%81%8C%E5%AE%8C%E5%85%A8%E3%81%AB%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%95%E3%82%8C%E3%81%9F%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B%E3%81%AE%E5%88%A4%E5%AE%9A)

あとはメッセージ追加時に`isScrollAtBottom`がtrueのときだけスクロール位置を最下部にする処理を実行するようにします。

```vue [App.ts]
<script setup lang="ts">
...
onMounted(() => {
  ...
  const observer = new MutationObserver((mutation) => {
    const newScrollHeight = mutation[0].target.scrollHeight;
    if (isScrollAtBottom.value) {
      messageAreaElement.value.scrollTo({
        top: newScrollHeight - clientHeight.value,
        behavior: "smooth",
      });
    }
    ...
});
</script>
```

#### 完成

全体のコードは以下のようになります。

```vue [App.ts]
<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";

const messages = ref<Array<string>>([]);
const addMessage = (text: string) => {
  messages.value.push(text);
};

const messageAreaElement = ref<HTMLElement>();
const clientHeight = ref(0);
const scrollHeight = ref(0);
const scrollTop = ref(0);

const isScrollAtBottom = computed(() => {
  return Math.abs(scrollHeight.value - clientHeight.value - scrollTop.value) < 1;
});

onMounted(() => {
  messageAreaElement.value.addEventListener("scroll", (event: Event) => {
    scrollTop.value = event.target.scrollTop;
  });

  const resizeObserver = new ResizeObserver((entries) => {
    const target = entries[0]?.target;
    clientHeight.value = target.clientHeight;
  });
  resizeObserver.observe(messageAreaElement.value);

  const observer = new MutationObserver((mutation) => {
    const newScrollHeight = mutation[0].target.scrollHeight;
    if (isScrollAtBottom.value) {
      messageAreaElement.value.scrollTo({
        top: newScrollHeight - clientHeight.value,
        behavior: "smooth",
      });
    }
    scrollHeight.value = newScrollHeight;
  });
  observer.observe(messageAreaElement.value, { childList: true, subtree: true });
});
</script>

<template>
  <div ref="messageAreaElement" class="message-area">
    <div v-for="message in messages">
      <div>
        {{ message }}
      </div>
    </div>
  </div>
  <button @click="addMessage('メッセージ')">メッセージ追加</button>
</template>

<style scoped>
.message-area {
  width: 240px;
  height: 20vh;
  border: 1px solid;
  overflow-y: scroll;
}
</style>
```

最後に`scrollTo({top: 10000})`の`top`の指定を`scrollHeight - clientHeight`としました。

## 補足

### DOMNodeInsertedについて

DOMの追加は`DOMNodeInserted`でも検知できるようですが、こちらは現在deprecatedのようです。[^DOMNodeInserted]
[^DOMNodeInserted]:[W3C | DOMNodeInserted](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeInserted)

### Intersection Observer APIについて

ここでは記載しませんが、仕様によってはIntersection Observer APIを使った実装もありかもしれません。

[Intersection Observer APIを使って、ページの最下部までスクロールしたかを判定する](https://tech.arms-soft.co.jp/entry/2021/06/16/090000)

### behaviorオプションについて

`scrollTo()`のオプションで`behavior: "smooth"`とすると、スクロール動作が滑らかになります。

ただし、ChatGPTのような一文字ずつ文字が増加するUIの場合、スクロールが完了する前に次のスクロール位置判定処理が走ってしまい、スクロール位置は最下部に固定されない場合があります。

対策としては、スクロール判定の距離を短くしたり、文字の更新の間隔を長めにするなどが考えられます。
見た目にこだわらないのであれば、`smooth`オプションを付けないのが楽です。

## 参考

- [MDN Web Docs | Element.scrollTo()](https://developer.mozilla.org/ja/docs/Web/API/Element/scrollTo)
- [MDN Web Docs | Element.clientHeight](https://developer.mozilla.org/ja/docs/Web/API/Element/clientHeight)
- [MDN Web Docs | Element.scrollHeight](https://developer.mozilla.org/ja/docs/Web/API/Element/scrollHeight)
- [MDN Web Docs | Element: scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)
- [MDN Web Docs | scroll イベント](https://developer.mozilla.org/ja/docs/Web/API/Document/scroll_event)
- [MDN Web Docs | ResizeObserver](https://developer.mozilla.org/ja/docs/Web/API/ResizeObserver)
- [MDN Web Docs | MutationObserver](https://developer.mozilla.org/ja/docs/Web/API/MutationObserver)

### 出典
