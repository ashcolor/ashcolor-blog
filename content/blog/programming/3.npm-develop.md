---
createdAt: "2024/01/14"
updatedAt: "2024/01/19"
title: "【2024年版】フロントエンドの開発体験を向上させる10のnpmライブラリ"
description: "フロントエンドの開発体験を向上させるnpmライブラリを10個紹介します。"
category: "プログラミング"
subCategory: "npm"
tags:
  - "JavaScript"
  - "TypeScript"
  - "npm"
thumbnail: "https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/programming/npm-develop/thumbnail.png"
isRecommend: true
---

## はじめに

この記事では、フロントエンドの開発体験を向上させるnpmライブラリを10個紹介します。

「開発体験を向上」と書いた通り、ここでは機能の開発に使用するライブラリ・フレームワーク（Vue.js、Next.js等）は含めません。
特にモダンな開発環境に頻繁に導入されているライブラリに絞ってまとめました。

また、各ライブラリの紹介は概要程度に留め、詳細な使用方法はここでは解説しません。

### この記事で紹介するnpmライブラリ

| 種別                     | ライブラリ                                     |
| ------------------------ | ---------------------------------------------- |
| ビルド                   | [Vite](#vite)                                  |
| フォーマット             | [Prettier](#prettier)<br>[Biome](#biome)       |
| 静的解析                 | [ESLint](#eslint)<br>[Biome](#biome)           |
| Gitフック                | [husky](#husky)<br>[lint-staged](#lint-staged) |
| APIモック                | [msw](#msw)                                    |
| UIコンポーネントカタログ | [Storybook](#storybook)                        |
| ユニットテスト           | [Vitest](#vitest)                              |
| E2Eテスト                | [Playwright](#playwright)                      |

## 開発体験を向上させる10のツール

### Vite

**Vite**は高速なビルドツールです。

主に高速なHMRとESモジュールを利用した豊富な拡張機能を提供する開発サーバー、高度に最適化されたビルドツールの2つで構成されています。

以前はモジュールバンドラーであるWebpackが使われることが多かったですが、高速で複雑な設定不要で簡単に使うことができるViteの人気が上がっています。

#### vite

:link-card{url="https://ja.vitejs.dev/"}

### **Prettier**

**Prettier**はコードフォーマッターです。

フォーマットのルールを指定してフォーマットを自動化することで、コードの読みやすさの向上やコードの一貫性の維持をすることができます。

他のツールと組み合わせることで任意のタイミングでフォーマットを実行することも可能です。

#### Prettier

:link-card{url="https://prettier.io/"}

### **ESLint**

**ESLint**はコードの静的解析ツールです。

静的解析を行うことで、コーディングの際にエラーや警告を受け取ることができ、バグの早期発見やコードの一貫性の維持に期待できます。

#### ESLint

:link-card{url="https://eslint.org/"}

### **Biome**

Biomeはフォーマットと静的解析を高速に行うことができるツールです。

Rustで構築されており高速に動作することから、PrettierとESLintの代替として注目されています。

一方で、PrettierやESLintに存在していてBiomeにはないルールが存在していたり、js・ts・jsx・tsx・jsonのみのサポートのためHTML・Vue・Svelte・CSS・Markdownには対応していない等の問題もあります。

今後の開発が気になるライブラリです。

#### Biome

:link-card{url="https://biomejs.dev/ja/"}

### **husky・lint-staged**

**husky**はコミットやプッシュ時に任意の処理を実行するためのツールです。

**lint-staged**はGitでステージング状態のファイルに対してのみ任意の処理を実行するためのライブラリです。

husky・lint-stagedをPrettierやESLintと合わせて使うことで、コミット時に変更があったファイルにだけフォーマット・静的解析を行うことができます。

#### husky

:link-card{url="https://typicode.github.io/husky/"}

#### lint-staged

:link-card{url="https://github.com/lint-staged/lint-staged"}

### **msw**

**msw**は、APIのモックサーバーを作成するためのツールです。

実際のAPIのレスポンスの代わりにモックデータを返すことできるため、APIの実装前にフロントエンドの開発を進めることができます。

単純にレスポンスを返す他に、遅延の発生・任意のネットワークエラーの発生、クエリパラメータの取得等も行えるため、APIと連携する部分の開発が行いやすくなります。

#### msw

:link-card{url="https://mswjs.io/"}

### **Storybook**

**Storybook**はUIコンポーネントの開発とテストを支援するツールです。

Storyファイルというファイルを作成することで、UIコンポーネントを独立した状態で確認・テストすることができます。

![Storybook画面（公式サイトより）](https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/programming/npm-develop/storybook.png)

UIコンポーネントの一覧を作成したり、UIコンポーネントの概要・属性を簡単に把握することができるため、コンポーネントの開発に役立ちます。

個別のコンポーネントを独立して開発・テストでき、実際のアプリケーションとは別に進行することができます。これにより、コンポーネントの再利用性やテストの容易性が向上します。

#### Storybook

:link-card{url="https://storybook.js.org/"}

また、Chromaticというホスティングサービスと組み合わせることにより、コンポーネントの視覚的なリグレッションテストを行うこともできます。

#### Chromatic

:link-card{url="https://www.chromatic.com/"}

### **Vitest**

**Vitest**は高速なユニットテストフレームワークです。

既にViteを導入しているプロジェクトであれば共通の設定を適用してテストを行うことができます。（Vite以外のプロジェクトでも利用することは可能です。）

VItestが登場する前は、テストフレームワークとしてJestが使われることが多かったですが、より高速にテストを行うことができるVitestが注目されるようになりました。

#### vitest

:link-card{url="https://vitest.dev/"}

### **Playwright**

**Playwright**はE2Eテスト自動化フレームワークです。

Chrome、Safari、Firefoxに対応しており、E2Eテストを簡単に実行することができます。

#### Playwright

:link-card{url="https://playwright.dev/"}

## 番外編

npmライブラリではないが、合わせて知っておきたいツール等を紹介します。

### Bun

**Bun**はNode.jsやDenoと同じJavaScriptランタイムです。

![Bunのロゴ（公式サイトより）](https://ashcolor-blog.s3.ap-northeast-1.amazonaws.com/img/blog/programming/npm-develop/bun.png)

Bunの一番の特徴は実行速度です。
Safari用に構築されたパフォーマンス重視のJS エンジン**JavaScriptCore**を採用することにより、高速な動作を可能にしています。

また、Bunはバンドラー・テストランナー・Node.js互換のパッケージマネージャーも備えているため、すぐに開発環境を用意することができます。

Node.jsとの互換性もあるため、既存のプロジェクトにも導入しやすいです。

### Corepack

**Corepack**はNode.js v14.19.0から導入されたnpmやyarnなどのパッケージマネージャーを管理するツールです。

Corepackを有効にした状態で`package.json`に使用するパッケージを記載しておけば、指定したパッケージマネージャーを自動で使用することができます。

:link-card{url="https://nodejs.org/api/corepack.html"}

## まとめ

この記事では、フロントエンドの開発体験を向上させるnpmライブラリを10個紹介しました。

上記のライブラリは使用されることが多いですが、機能の開発をする上では必須ではありません。
むしろ、ライブラリを増やすことや運用やメンテナンスのコストを上げることに繋がる場合もあります。

各ライブラリの概要を把握した上で、必要に応じて導入を検討するのがいいでしょう。
