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
