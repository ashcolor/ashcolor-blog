---
createdAt: "2024/04/08"
updatedAt: ""
title: "手軽に使えるVueプレイグラウンド環境。Vue SFC Playground解説"
description: "Vue公式のプレイグラウンド環境であるVue SFC Playgroundの機能や使い方・メリットについて説明します。"
category: "プログラミング"
subCategory: "Vue.js"
tags:
  - "Vue.js"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_vue-define-model_vue.avif"
isRecommend: false
---

この記事では、Vue公式のプレイグラウンド環境である**Vue SFC Playground**の機能や使い方・メリットについて説明します。

## Vue SFC Playgroundとは

**Vue SFC Playground**はVueのプレイグラウンド環境です。
ブラウザ上にVueの環境が用意されており、インストール不要でVueのコードを試すことができます。

ライブラリの挙動を確認したい場合、通常であれば「環境構築→パッケージインストール→開発サーバ起動」という作業する必要があり面倒です。
Vue SFC Playgroundであれば、ブラウザでURLを叩くだけですぐに使いはじめることができます。

## Vue SFC Playgroundの使い方

Vue SFC Playgroundを使う際は以下のURLを開くだけでOKです。

:link-card{url="https://play.vuejs.org"}

また、[Vue公式ページ](https://vuejs.org/) のPlaygroundをクリックしても開くことができます。

![Vue公式ページ](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_vue-playground_vue-playground.avif)

## Vue SFC Playgroundの機能

Vue SFC Playgroundの画面にはエディタとプレビューが大きく表示されています。

上記以外にもいくつかの便利な機能を使うことができます。

### バージョン切り替え

ヘッダーの`TypeScript`、`Vue Version`の部分にはTypeScriptとVueのそれぞれのバージョンが表示されています。
この部分をクリックするとそれぞれのバージョンを任意に切り替えることができます。

最新バージョンの機能をいち早く試したり、バージョンによる挙動の違いを比較したりする場合に非常に便利です。

### ダウンロード

ヘッダー右上にあるダウンロードボタンをクリックすると、コードをダウンロードすることができます。

ダウンロードされたzipファイルを解凍すると以下のようなファイルが含まれています。

![ダウンロードされるファイル](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_vue-playground_download.avif)

開発に必要なファイルが一通り揃った状態でダウンロードできるため、そのまま開発に使用することができます。

### URLベースの共有

Vue SFC Playgroundで編集してもコードはサーバに保存されません。
代わりに、リアルタイムでエンコードされてURLが変化します。

コードを共有する場合はヘッダーのコピーボタンをクリックして、URLを共有するだけです。
プロジェクトの管理という概念が不要で、非常にわかりやすい仕様となっています。

### エディタの機能

Vue SFC PlaygroundのエディタはMicrosoftが開発しているMonaco Editorが組み込まれています。

:link-card{url="https://microsoft.github.io/monaco-editor/"}

Monaco EditorはVSCodeを元に作成されており、以下のような機能があります。

- コード補完
- ブラウザエラーの直接表示
- コードハイライト

上記の機能のおかげで、ブラウザ上でありながらもローカル環境でVSCodeを使用しているときに近い感覚でコーディングできます。

## Vue SFC Playgroundを使うメリット

### すぐにコーディングをはじめられる

Vue SFC PlaygroundはURLをクリックするだけですぐに使いはじめることができます。

プレイグラウンド環境と言えば、[stackblitz.com](http://stackblitz.com/) や [codesandbox.io](http://codesandbox.io/) などの環境がありますが、汎用的なサイトではインストールの実行が必要になります。
一方で、Vue SFC PlaygroundはVueに最適化されており、インストールも不要ですぐにコーディングを開始することができます。

また、必要十分な機能だけがあるため、初見でも簡単に使いはじめることができるのでオススメです。

### 手軽に共有できる

コードを共有したい場合は、コーディング中のURLを相手に共有するだけです。
プロジェクトの作成や、権限の設定といった面倒な操作は必要ありません。

URLごとに環境があるような状態なので、小さい環境をいくつも作成するときに便利です。
例えば、Vueの機能ごとにVue SFC Playgroundでサンプルを作成して、URLを保存しておけばいつでも見返すことが可能です。

## まとめ

この記事では、Vue公式のプレイグラウンド環境であるVue SFC Playgroundの機能や使い方・メリットについて説明しました。

手軽に使いはじめられて、簡単に共有ができる使いやすいプレイグラウンドとなっているため、ぜひ試しに使ってみてください。
