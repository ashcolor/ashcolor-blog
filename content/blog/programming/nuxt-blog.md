---
createdAt: "2023/08/25"
updatedAt: "2024/01/19"
title: "NuxtJSを使ってブログを作ってみた【Nuxt Content/TailwindCSS/daisyUI】"
description: "NuxtJSを使用してブログを作成した際の技術スタック・メリット・デメリットを紹介します。"
category: "プログラミング"
subCategory: "Nuxt.js"
tags:
  - "NuxtJS"
  - "Vue.js"
  - "TailwindCSS"
  - "ブログ"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_nuxt-blog_thumbnail.webp"
isRecommend: true
---

## はじめに

今回はNuxtJSを使ってブログを作成してみたので、使用したライブラリやNuxtJSでブログを作成するメリット等をまとめました。

::point-list{title="この記事の要約"}

- NuxtJSを使ったブログはコーディングに慣れた人向き
- VSCodeの拡張機能を活用しながらマークダウン記法で記事をライティング可能
- ブログ機能はWordPressに劣る、自作が必須

::

## 成果物

今まさにご覧いただいているのが今回作成したブログになります。

:link-card{url="https://blog.ashcolor.jp/"}

ソースコードはGitHubに公開しています。

:link-card{url="https://github.com/ashcolor/ashcolor-blog"}

## 技術スタック

### フレームワーク

- [NuxtJS 3](https://nuxt.com/)

フレームワークは**NuxtJSのバージョン3**を使用しています。

![NuxtJS](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_nuxt-blog_thumbnail.webp)

NuxtJSはVue.jsと同様に[バージョン2→3になった際に大幅な変更]{.marker}が加えられました。
使いやすくなった反面、リリース当初は付随するライブラリがバージョン3に追いついておらず、まだ実務で使用するのは難しいと言われていました。
しかし、現在は[周辺のライブラリを充実]{.marker}しており、実務でも充分に使いやすい環境が整ってきています。

今回のブログでNuxtJS 3を選定したのも、NuxtJS関連のモジュールが非常に充実してきており、試しに使ってみたかったのが主な理由です。

### Nuxtモジュール

- [Nuxt Content](https://content.nuxtjs.org/guide/writing/content-directory/)
- [Nuxt SEO](https://nuxtseo.com/)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
- [ESLint](https://nuxt.com/modules/eslint)
- [Google-Fonts](https://google-fonts.nuxtjs.org/)
- [Simple-Robots](https://nuxt.com/modules/simple-robots)
- [Gtag](https://nuxt.com/modules/gtag)

NuxtJSには[モジュール機能が備わっており]{.marker}、NuxtJS用に作成されたモジュールを簡単に導入することができます。

モジュールはNuxtJS公式の[Modules](https://nuxt.com/modules)ページにカテゴリ別にまとめられています。

今回のブログ作成の肝となっている**Nuxt Content**といった[機能を追加するモジュール]{.marker}やTailwindCSSやGoogle Fontsといった[ツールの導入を支援するモジュール]{.marker}、Simple-RobotsやGtagといった[サイトの設定を簡単にできるモジュール]{.marker}などがあります。

2023/08/23現在で150以上のモジュールがあります。
よく使用されるライブラリや汎用的な機能は既にモジュール化されている場合があるので、実装の前に検索しておくのがオススメです。

#### Nuxt Contentについて

Nuxt Contentは[公式ページ](https://content.nuxtjs.org/)によると以下のように説明されています。

> Nuxt Content reads the content/ directory in your project, parses .md, .yml, .csv and .json files to create a powerful data layer for your application. Use Vue components in Markdown with the MDC syntax.

重要なポイントをまとめると以下のようになります。

::point-list{title="Nuxt Contentとは"}

- NuxtJS用の[コンテンツ作成]{.marker}のためのモジュール
- **Markdown/YML/CSV/JSON**形式で記載できるCMS
- **MDC記法**によりマークダウン内で[Vueコンポーネントが使用可能]{.marker}
- APIを利用して[記事一覧の取得や検索]{.marker}も可能

::

例えば、[この記事のソースコード](https://github.com/ashcolor/ashcolor-blog/blob/develop/content/blog/programming/0.nuxt-blog.md?plain=1)を確認してみると、[マークダウンで記載しているためHTMLタグがありません]{.marker}。

```md [content/blog/programming/0.nuxt-blog.md]
## はじめに

はじめまして、私は[職業はシステムエンジニア、趣味はDTM]{.marker}の**あっしゅからー**と申します。

今回はNuxt Contentを使ってブログを作成してみたので、使用したライブラリやポイントや注意点等をまとめました。
```

マークダウンで記載した内容はNuxt Contentの機能によりHTMLに変換されます。

また、HTMLタグに変換される際にどのようなHTMLタグやCSSで出力するかは、[`components/content`内のコンポーネントを変更することで自由に修正することができます]{.marker}。

例えば見出し1（# 見出し1）であれば以下のようにカスタマイズしています。

```vue [components/content/ProseH1.vue]
<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id?: string }>();
const heading = 1;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<template>
  <h1 :id="id" class="my-4 py-2 text-2xl font-bold">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
```

マークダウン形式により記事のライティングのしやすさを維持しつつ、**NuxtJS**や**Vue.js**の機能を活用することで柔軟にカスタマイズをすることが可能になっています。

### CSSフレームワーク

- [tailwindcss](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

CSSフレームワークはユーティリティファーストの**TailwindCSS**を使用しています。

また、TailwindCSSのプラグインとして**daisyUI**を使用しています。

![daisyUI](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_nuxt-blog_daisyui.webp)

daisyUIは[JSに依存しないCSSオンリーのライブラリ]{.marker}で、主要なUIコンポーネントをクラスを付けるだけで実装することができます。

例えば、TailwindCSSでボタンを実装するためには以下のようなクラスを付ける必要があります。

```html
<button
  class="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
>
  Tailwind Button
</button>
```

daisyUIでは2つのクラスを付けるだけで簡単に実装することができます。

```html
<button class="btn btn-primary">daisyUI Button</button>
```

<button class="btn btn-primary">
  daisyUI Button
</button>

### その他のライブラリ

- [sitemap](https://www.npmjs.com/package/sitemap)
- [VueUse](https://vueuse.org/)
- [iconify](https://iconify.design/)

**VueUse**はVue.js用のユーティリティコレクションです。

**iconify**は有名なアイコンセットを横断的に検索して簡単に表示できるライブラリです。
[使用できるアイコンは150,000を超えており]{.marker}、どのようなアイコンも全て呼び出せるので便利です。

### インフラ

デプロイ先は**Vercel**にしました。

最初は**AWS Amplify Hosting**にホスティングしていました。

しかし、NuxtJSのオプションで[SSRをオフ]{.marker}にすると[Google Search Consoleがsitemap.xmlを認識しない]{.marker}というトラブルが発生しました。
原因を調べてはみたのですが、解決策がはっきりしなかったため、[SSRモードで動かせるようにNode環境にデプロイ]{.marker}しました。

既に他のプロジェクトでもVercelは使っており、[設定の手間がほぼなくデプロイできる]{.marker}のも魅力です。

## WordPressと比べたときのNuxtJSでブログを作成するメリット・デメリット

実際にNuxtJSでブログを作成してみて感じた点をまとめていきます。

ブログ作成と言えばまだWordPressを使用することが多いため、特に[WordPressと比較したメリット・デメリット]{.marker}を書いていきます。

### NuxtJSでブログを作成するメリット

#### NuxtJSとVue.jsの機能を活用できる

NuxtJSを使用する一番のメリットはやはり[**NuxtJS**や**Vue.js**の機能を最大限活用できる]{.marker}ことです。

ページ共通で使用するコンポーネントを作成したい場合、WordPressだけだとあまり複雑なことができません。
一方でVue.jsは、ユーザーインターフェイス構築のためのフレームワークなだけ合って、[HTML・CSS・JSが組み合わさったコンポーネントを自由に組み立てることができます]{.marker}。

また、NuxtJSの機能としては[レンダリングモードを柔軟に選ぶことができたり]{.marker}、[必要に応じてモジュールを追加することができたり]{.marker}、便利な機能が多く揃っています。

NuxtJS・Vue.jsについて学習する手間はありますが、既に慣れている方であればNuxtJSでブログを作成する際の機能をフル活用することができます。

#### npmで管理されたライブラリを使用できる

使用しているモジュールの一覧を見ていただいても分かる通り、このブログを作成にするにあたり[多くのnpmライブラリ]{.marker}を使用しました。

CSSフレームワークは様々なライブラリが存在しており、何を使いたいかは個人によって異なります。
使い慣れているフレームワーク、新規で使ってみたいフレームワーク等、[好きなライブラリを気軽に導入できる]{.marker}のは嬉しい点です。

他にも、上記で記載した[VueUse](https://vueuse.org/)や[iconify](https://iconify.design/)を使えが、汎用的な機能をやUIを完結に記載できるのも便利です。

#### VSCodeで記事を作成できる

![VSCode](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_nuxt-blog_vscode.webp)

VSCodeには様々な拡張機能があります。

例えば、[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)はスペルチェックをしてくれる拡張機能で、辞書にない単語の場合はアンダーラインを引いてくれます。

他にも[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)を使えば、「見出しの数字が飛んでいないか？」「不要な改行が入っていないか？」といったマークダウンの文法のミスを見つけやすくできます。

拡張機能によるチェックはプログラミングの際に役に場面が多かったですが、ブログのライティングの際も[スペルや文法へ意識を取られることなく記事の内容を考えることに集中できる]{.marker}ため、文章を書くときも便利だと感じました。

WordPressもVSCodeで記事を作成することもできます。
しかし、WordPressの元々のエディタはグラフィカルに記事を作成できるというメリットがあるため、わざわざ時間をかけてVSCodeに移行するメリットは少ないと感じました。

[マークダウンで記事を書きたい場合はNuxtJS]{.marker}、[GUI上で記事を書きたい場合はWordPress]{.marker}が良いです。

### NuxtJSでブログを作成するデメリット

#### デプロイ作業がGitベースになる

Nuxt Contentは**File-based CMS**を謳っている通り、ブログ記事はファイルで管理することになります。
よって記事を反映するには[ステージング環境用のブランチにコミット]{.marker}→[プルリクエストを出して本番環境用のブランチにマージ]{.marker}という流れになります。

Gitに慣れている人がライティングする分には問題ないですが、複数人で運用する際にGitを使ったことがない人に[Gitの使い方を教えるコストがかかります]{.marker}。

一方で[WordPressであればブラウザ上でライティングから公開作業まで行える]{.marker}ため、Gitの知識不要で利用することができます。
（Gitを利用せずにWordPressを使用することがいいかという問題もありますが）

後々になってライティングを担当する人が増える可能性がある場合はWordPressで構築しておいた方がいいかもしれません。

#### ブログ用機能の自作が必要

NuxtJSではnpmを使用することができるものの、[ブログに特化した機能はWordPressに比べて弱い]{.marker}と感じました。

例えば、記事内の目次を作成しようとすると「Nuxt ContentのAPIを調べる→目次用のコンポーネントを作成する→コンポーネントの機能やデザインを考える」といった工程が必要となり、[実装にかなり時間がかかってしまいました]{.marker}。
一方でWordPressであれば[Table of Contents Plus](https://ja.wordpress.org/plugins/table-of-contents-plus/)のようなプラグインを導入すれば、少しの設定で目次を簡単に実装することができます。

他にも**SNS共有ボタン**・**人気記事ランキング**・**Sitemapの作成**、などブログを運用するために必要な機能は多いのですが、[WordPressではプラグインを導入すれば簡単に解決できることが多い]{.marker}です。

NuxtJSでしっかりとしたブログを作成するためには、[自前で機能を実装できるための時間と知識が必要]{.marker}だと感じました。

#### コメント機能

[WordPressにはデフォルトで閲覧者がコメントできる機能]{.marker}が備わっています。

![WordPressのコメント機能](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_nuxt-blog_comment.webp)

一方でNuxtJSでコメント機能を実装するには、[DB設計・APIの設計・UIの設計等をする必要があり、かなりの労力]{.marker}です。
APIはバックエンドが必要となるため、Nodeが動作する環境でデプロイするか、他の言語で開発する必要があります。

正直、[コメント機能が必須なブログを作成するのであればWordPressを選択してしまった方が圧倒的に楽]{.marker}です。

## まとめ

今回はNuxtJSでブログを作成してみた際の技術スタックとメリット等をまとめてみました。

NuxtJSでのブログ作成はWordPressでのブログ作成とは、[ライティング方法から記事の公開方法まであらゆる点が異なります]{.marker}。

どちらの方法もメリット・デメリットがあるため、どちらの方がうまく運用できるか考えながら選択するのがよさそうです。

:affiliate-block{title="Nuxt 3　フロントエンド開発の教科書" imageUrl="https://m.media-amazon.com/images/I/51iYGXW72WL._SL160_.jpg" asin="B0CH7Z912B"}
