---
createdAt: "2024/03/07"
updatedAt:
title: "Vite、TailwindCSS v4環境を構築【Tailwind CSS v4-alpha】"
description: "Vite + Tailwind CSS v4環境を構築する手順とv3との違いをまとめました。"
category: "WEBシステム開発"
subCategory: "Tailwind CSS"
tags:
  - "Tailwind CSS"
  - "Vite"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_tailwind-css-v4-install_tailwind-css.webp"
isRecommend: false
---

## はじめに

2024年3月7日、TailwindCSS v4-alphaが公開されました🎉

:link-card{url="https://tailwindcss.com/blog/tailwindcss-v4-alpha"}

TailwindCSS v4では、ViteプロジェクトにTailwind CSSを導入する際に必要な設定が減り、今までよりも簡単にインストールできるようになりました。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Playing with an early Tailwind CSS v4 alpha in a <a href="https://twitter.com/vite_js?ref_src=twsrc%5Etfw">@vite_js</a> project —<br><br>🚫 No `postcss.config.js file<br>🚫 No `tailwind.config.js` file<br>🚫 No configuring `content` globs<br>🚫 No `@​tailwind` directives in your CSS<br><br>The future is clean ✨<br><br>Hoping to open-source this week for the bold 🤙🏻 <a href="https://t.co/zY7vyF1iTs">pic.twitter.com/zY7vyF1iTs</a></p>&mdash; Adam Wathan (@adamwathan) <a href="https://twitter.com/adamwathan/status/1764383146559017048?ref_src=twsrc%5Etfw">March 3, 2024</a></blockquote>

この記事では、実際にVIteプロジェクトにTailwindCSS v4-alphaを導入して、設定方法の変更点を確認します。

## Vite + TailwindCSS v4環境の構築

:::call-out

以下は2024年3月7日時点のalpha版の手順です。
正式版では変更となっている可能性があることに注意してください。

:::

今回はTypeScript、フレームワークを使用しないVanilla環境を作成します。

### Viteプロジェクトの作成

Viteプロジェクトの作成

```bash
npm create vite@latest tailwind-css-v4 -- --template vanilla
```

ディレクトリの移動

```bash
cd tailwind-css-v4
```

### TailwindCSS v4のインストール

TailwindCSSとViteプラグインのインストール

```bash
npm install tailwindcss@next @tailwindcss/vite@next
```

`vite-config.js`を以下の内容で作成

```js [vite-config.js]
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'export default defineConfig({
  plugins: [tailwindcss()],
})
```

`style.css`の先頭に以下を追加

```css [style.css]
@import "tailwindcss";
```

設定はこれだけです。
次に実際に動作するか確認します。

### 動作確認

開発サーバの起動

```bash
npm run dev
```

以下の画面が表示されます。

![初期画面](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_tailwind-css-v4-install_before.webp)

`index.html`にTailwindCSSのクラスを追加してみます。

```diff [index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
-    <div id="app"></div>
+    <div class="bg-black" id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

![bg-blackが有効になっている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_tailwind-css-v4-install_after.webp)

`bg-black`が有効になって背景色が黒色になりました。

## v3とのインストール方法の違い

TailwindCSS v3のインストール手順は、以下に記載されています。

:link-card{url="https://tailwindcss.com/docs/guides/vite"}

v3→v4の変化は以下の通りです。

:::point-list{title="TailwindCSS v3とv4のインストール方法の違い"}

- `postcss`と`autoprefixer`のインストールが不要に
- `postcss.config.js`ファイルが不要に
- `tailwind.config.js`ファイルが不要に
- 対象とするファイルのパス指定が不要に
- `@tailwind`の記載を既存のCSSファイルに記載可能に

:::

`tailwind.config.js`がないとブレークポイントや色のカスタマイズができないと思われるかもしれませんが、そこはCSS変数で設定できるようになっています。

```css [style.css]
@import "tailwindcss";

@theme {
  --font-family-display: "Satoshi", "sans-serif";

  --breakpoint-3xl: 1920px;

  --color-neon-pink: oklch(71.7% 0.25 360);
  --color-neon-lime: oklch(91.5% 0.258 129);
  --color-neon-cyan: oklch(91.3% 0.139 195.8);
}
```

```html [index.html]
<div class="max-w-lg 3xl:max-w-xl">
  <h1 class="font-display text-4xl">
    Data to <span class="text-neon-cyan">enrich</span> your online business
  </h1>
</div>
```

プラグインやカスタムユーティリティの追加は、正式版までに何らかの方法で追加できるようになるとのことです。

## まとめ

この記事ではViteプロジェクトにTailwindCSS v4-alphaを導入してみて、設定方法がどのように変更になったのかを確認しました。

TailwindCSS v4では他にも機能追加や改善があるようなので、正式リリースが楽しみです。

## 参考

- Open-sourcing our progress on Tailwind CSS v4.0

:link-card{url="https://tailwindcss.com/blog/tailwindcss-v4-alpha"}
