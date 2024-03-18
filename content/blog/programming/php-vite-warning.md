---
createdAt: "2024/02/13"
updatedAt: ""
title: "PHP+Vite+Reactの統合時に発生した「vite-plugin-react can't detect preamble. 」エラーの対応方法"
description: "PHPとVite+Reactを統合するときに発生した「vite-plugin-react can't detect preamble. 」エラーの対応方法と補足を解説します。"
category: "プログラミング"
subCategory: "php"
tags:
  - "PHP"
  - "CakePHP"
  - "Laravel"
  - "Vite"
  - "React"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/php-vite-warning/php-vite.png"
isRecommend: false
---

## 前提

CakePHPとVite+Reactを統合する際に、エラーとなった箇所があったため書き残します。
CakePHPとReactの統合は**ViteHelper plugin for CakePHP**を使用しました。

:link-card{url="https://github.com/brandcom/cakephp-vite"}

この方法はVite公式にも記載されている推奨の方法になります。

:link-card{url="https://ja.vitejs.dev/guide/backend-integration.html"}

### バージョン情報

- CakePHP 4.3
- Vite 5.1
- React 18.2

## エラー内容

ViteHelper plugin for CakePHPの手順通りに設定を行うと、ブラウザのコンソールに以下のエラーが表示されました。

```bash
Uncaught Error: vite-plugin-react can't detect preamble. Something is bad.
```

## 修正方法

fetchを行っている箇所の前（手順通りに構築している場合はレイアウトファイル）に以下を追加します。

```php
<script type="module">
    import RefreshRuntime from "http://localhost:3000/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
</script>
<?= $this->fetch('css') ?>
<?= $this->fetch('script') ?>
```

## 補足

今回のエラーと修正方法は以下のIssueに記載されていました。

:link-card{url="https://github.com/vitejs/vite/issues/1984"}

Viteの開発者であるEvan Youさんが、以下のようにコメントをしています。（Google翻訳済み、一部省略）

> PHP サーバー経由で HTML を提供しているのですね。
> 残念ながら、Vite プラグイン (この場合は@vitejs/plugin-react-refresh) は HTML の変更を挿入できません。
> Node.js を使用していないため、Vite のプログラム API を利用して HTML 変更を挿入することはできません。
> これ自体はバグではありませんが、改善する方法を検討する必要があります。

PHPサーバ経由でHTMLを提供している場合、HTMLの変更ができないためエラーが発生するようです。
私の場合はCakePHPとReactでしたが、他のPHP環境（Laravel等）や他のJavaScript環境（Vue等）でも同じエラーが発生するかもしれません。

## まとめ

CakePHPにViteを導入するあたりエラーが発生したため、この記事を書きました。
参考になれば幸いです。
