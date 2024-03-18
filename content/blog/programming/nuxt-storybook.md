---
createdAt: "2023/11/22"
updatedAt: "2024/03/18"
title: "Nuxt3プロジェクトにStorybookを導入する手順とエラー時の対応方法を詳しく解説【nuxt/storybookモジュール】"
description: "NuxtJSを使用してブログを作成した際の技術スタック・メリット・デメリットを紹介します。"
category: "プログラミング"
subCategory: "Nuxt.js"
tags:
  - "NuxtJS"
  - "Storybook"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/nuxt-storybook/thumbnail.png"
isRecommend: true
---

## はじめに

2023年9月20日、Nuxt3用のStorybookモジュールである**nuxt/storybook**の**v7.0.0**がリリースされ、[**Nuxt3**に対応]{.marker}しました 🎉

この記事では、**nuxt/storybook** モジュールを使用して、[Nuxt3 プロジェクトに Storybook を導入する方法]{.marker}をまとめています。
また、Nuxt3 プロジェクトで頻繁に使用されている **Pinia** と **TailwindCSS** を導入して、Storybook 上で動作するかについても確認しました。

## 背景

**nuxt/storybook** は元々、Nuxt2 用に作成されており、[しばらくの間は Nuxt3 には対応していません]{.marker}でした。

Nuxt モジュールを使用せず、Nuxt3 に Storybook をインストールすることも可能ではありましたが、[設定が必要な項目が多く、他のモジュールを入れたときにエラーが出ることが多々ありました]{.marker}。

私自身も何度かトライしてみましたらが、[エラーが解消しなかったため Storybook 自体の導入を見送っていた状態]{.marker}でした。

そして 2023年9月20 日、ついに[Nuxt3 に対応した nuxt/storybook モジュールの v7.0.0 がリリース]{.marker}となりました。

Nuxt3 用の **nuxt/storybook** の導入により、Storybook を導入する手順がどのように変化したか、そして導入時の注意点についてまとめていきます。

## 手順

### 実行環境

実行環境は以下の通りです。

| 環境            | バージョン |
| --------------- | ---------- |
| Node            | v20.9.0    |
| package manager | pnpm       |
| NuxtJS          | 3.8.1      |

::call-out{type="warning"}

package manager を npm、または yarn にした場合、`npx storybook-nuxt init`の実行時に以下のエラーが発生しました。

```bash
node:events:492
      throw er; // Unhandled 'error' event
      ^

Error: spawn yarn ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:286:19)
    at onErrorNT (node:internal/child_process:484:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
Emitted 'error' event on ChildProcess instance at:
    at ChildProcess._handle.onexit (node:internal/child_process:292:12)
    at onErrorNT (node:internal/child_process:484:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'spawn yarn',
  path: 'yarn',
  spawnargs: [ 'install' ]
}
```

解決方法が分からなかったため、package manager は pnpm にしました。
上記のコマンドの実行が完了した後は、yarn に戻すことが可能です。

::

### Nuxt3 プロジェクトの作成

まずは、Nuxt3 プロジェクトを作成します。

カレントディレクトリに展開するように、以下のコマンドを実行します。

```bash
npx nuxi@latest init .
```

開発環境を起動します。

```bash
pnpm dev -o
```

<http://localhost:3000/> にアクセスすると初期画面が表示されました。

![Nuxt3の初期画面](https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/nuxt-storybook/browser1.png)

### Storybook の導入

#### Storybook のインストール

次に Storybook モジュールをインストールします。

```bash
npx storybook-nuxt init --enable-module --start
```

```bash
╭─────────────────────────────────────────────────────╮                                                                           2:32:34
│                                                     │
│   Storybook 7.5.3 for @storybook-vue/nuxt started   │
│   558 ms for manager and 14 s for preview           │
│                                                     │
│    Local:            http://localhost:6006/         │
│    On your network:  http://172.23.176.1:6006/      │
│                                                     │
╰─────────────────────────────────────────────────────╯
```

以下の処理がまとめて実行されました。

- 必要なパッケージのインストール
- `package.json` へ storybook 起動用コマンドの追記
- `nuxt.config.ts` へモジュール読み込みの追記
- `.storybook/main.ts` と `.storybook/preview.ts` の作成
- `stories` ディレクトリの生成（コンポーネントと Story ファイルのサンプル）
- Storybook の起動

<http://localhost:6006/> をブラウザで開きます。

![ブラウザコンソールにエラー](https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/nuxt-storybook/browser2.png)

ブラウザコンソールに以下のエラーが表示されました。

```bash
Error: Couldn't find any stories in your Storybook.
```

`stories` ディレクトリの指定方法に誤りがあるようなので修正します。

`.storybook/main.ts`

```diff [.storybook/main.ts]
  stories: [
-    "..\stories/**/*.mdx",
-    "..\stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
+    "../stories/**/*.mdx",
+    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
```

一度 `Ctrl + C` で Storybook を終了した後に、`pnpm run storybook`コマンドで再度起動します。

![Storybookの起動を確認](https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/nuxt-storybook/browser3.png)

Storybook の起動を確認できました 🎉
Vue.js や Nuxt の API、コンポーネントの自動インポートも機能しています。

コマンド一発で設定がほぼ完了するのは素晴らしいですね。

ただし、新規にコンポーネントを作成した場合は、Storybook を再起動しないと読み込まなかったため注意が必要です。
（作成済みのコンポーネントを編集した場合の HMR は有効でした。）

### Pinia の導入

[**Pinia** は Vue 用の状態管理ライブラリ]{.marker}です。
Pinia を使用する場合も、Storybook が正常に動作するか確認してみます。

#### Pinia のインストール手順

Pinia モジュールをインストールします。

```bash
pnpm i @pinia/nuxt
```

`nuxt.config.ts` を書き換えます。

```typescript [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/storybook"],
});
```

ストアを作成します。

`stores/useCounterStore.ts`

```typescript [stores/useCounterStore.ts]
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };

  return { count, increment };
});
```

コンポーネント側からストアを呼び出します。

<!-- `stories/MyWelcome.vue` -->

```vue [stories/MyWelcome.vue]
<script setup>
import { useCounterStore } from "@/stores/useCounterStore";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();

const { count } = storeToRefs(counterStore);
const { increment } = counterStore;
</script>

<template>
  <p>{{ count }}</p>
  <button @click="increment">+</button>
  <h1>Welcome Nuxt to Storybook</h1>
  <NuxtWelcome />
</template>
```

ブラウザコンソールにエラーが出ました。

```bash
"getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
```

Pinia の初期化がうまくいっていないようです。
`.storybook/preview.ts` に以下を追加します。

```typescript [.storybook/preview.ts]
import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";
import type { Preview } from "@storybook/vue3";

~~~

const pinia = createPinia();

setup((app) => {
  app.use(pinia);
});
```

Storybook を再起動します。

![ストア変数が表示された](https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/nuxt-storybook/browser4.png){width=400}

ストアから呼び出した変数が表示されました 🎉

### TailwindCSS の導入

[**TailwindCSS** はユーティリティファーストの CSS フレームワーク]{.marker}です。
TailwindCSS を使用する場合も、Storybook が正常に動作するか確認してみます。

#### TailwindCSS のインストール手順

TailwindCSS モジュールをインストールします。

```bash
pnpm i -D @nuxtjs/tailwindcss
```

`nuxt.config.ts`を書き換えます。

```typescript [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/storybook"],
});
```

TailwindCSS の初期化を行います。

```bash
npx tailwindcss init
```

`./tailwind.config.js`が作成されます。

#### `components` ディレクトリへの移行

Storybook の初期化時に生成されるコンポーネントは`stories`ディレクトリ内に生成されます。
しかし、`stories` ディレクトリは TailwindCSS のデフォルトソースパスに含まれていません。

また、実際のプロジェクトでは `components` にコンポーネントを配置するので、サンプルコンポーネントである `MyWelcome.vue` を `components` ディレクトリに移動します。

```bash
mkdir components
mv stories/MyWelcome.vue  components/MyWelcome.vue
```

Story ファイルのインポートを修正します。

```diff [stories/MyNuxtWelcome.stories.ts]
- import MyNuxtWelcome from './MyWelcome.vue'
+ import MyNuxtWelcome from "@/components/MyWelcome.vue";
```

コンポーネントに TailwindCSS のクラスを付与してみます。

```vue [components/MyWelcome.vue]
<template>
  <h1 class="bg-blue-50">Welcome Nuxt to Storybook</h1>
  <NuxtWelcome />
</template>
```

Storybook を再起動した後に、ブラウザで確認してみます。

![bg-blue-50が有効になっている](https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/nuxt-storybook/browser5.png)

TailwindCSS のクラスである `bg-blue-50` が有効になっていることを確認できました。

::call-out{type="info"}

Story ファイルも `components` ディレクトリ内に配置する場合は、`.storybook/main.ts`を以下のように修正します。

```typescript [.storybook/main.ts]
const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  ...
};
```

::

::call-out{type="info"}

`stories` ディレクトリにコンポーネントを配置したい場合は、`tailwind.config.js`を以下のように修正します。

```javascript [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./stories/**/*.vue",
  ],
  ...
};
```

::

## まとめ

今回は新しくリリースされた[**nuxt/storybook**の**v7.0.0**使用した Storybook の導入方法]{.marker}についてまとめました。

[Storybook の設定がコマンドひとつで完了]{.marker}するようになっており、想像以上に Storybook の導入は簡単になっていました。
また、Nuxt3 プロジェクトにはかかせない Pinia や TailwindCSS のモジュールの導入もスムーズに行うことができるのもありがたいです。

ただし、記事内に記載しましたが、[公式のドキュメントのままの手順だとエラーになる部分がありました]{.marker}。
また、公式の Examples にある [Pinia](https://storybook.nuxtjs.org/examples/pinia) と [Vuetify](https://storybook.nuxtjs.org/examples/vuetify)が Not Found になっていました。
まだ、リリースされて日が浅いので、今後のアップデートで改善されていくかもしれません。
アップデートがあれば記事も修正していきます。

以上、お役に立てれば幸いです。

## 参考

- nuxt/storybook

:link-card{url="https://storybook.nuxtjs.org/"}
