# あしゅログ（個人ブログ）

- [本番環境](https://blog.ashcolor.work/)
- [ステージング環境](https://test-blog.ashcolor.work/)

## ドキュメント

- [NuxtJS 3](https://nuxt.com/)
- [Nuxt Content](https://content.nuxtjs.org/guide/writing/content-directory/)
- [Nuxt SEO](https://nuxtseo.com/)
- [tailwindcss](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [iconify](https://iconify.design/)

> [!WARNING]
>
> - Nuxt Contentのバージョンを`2.8.2`から上げるとコードブロックのハイライトが消える不具合がある
>   see @https://github.com/nuxt/content/issues/2473 >
> - Vueのバージョンを3.4.8に止めないと画面の遷移時にエラーになる
>   see @https://github.com/nuxt/nuxt/issues/25214

## 環境構築

### インストール

```bash
pnpm install
```

### ローカルサーバの起動

```bash
pnpm dev
```

http://localhost:3000

## 本番ビルドの確認

```bash
pnpm build
pnpm preview
```

## デプロイ

`main` ブランチへマージすることによって自動的に本番環境に反映される

[プルリクエストの作成](https://github.com/ashcolor/ashcolor-blog/compare/main...develop)

## 記事作成時の注意点

### コンポーネント

md ファイルで使用することのできるコンポーネントは以下に記載

<http://localhost:3000/_story>

### OGP画像のサイズ

1200×630 がベスト

[参考](https://bluetraff.com/ogp_thumbnail/#toc3)

### アフィリエイトブロックの作成

以下のツールを使用する

[アフィリエイトブロック生成ツール](http://localhost:3000/_story#%E3%82%A2%E3%83%95%E3%82%A3%E3%83%AA%E3%82%A8%E3%82%A4%E3%83%88%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E7%94%9F%E6%88%90%E3%83%84%E3%83%BC%E3%83%AB)
