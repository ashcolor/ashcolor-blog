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

## 環境構築

### インストール

```bash
yarn install
```

### ローカルサーバの起動

```bash
yarn dev
```

http://localhost:3000

## 本番ビルドの確認

```bash
yarn generate
npx serve .output/public
```

## デプロイ

mainブランチへマージすることによって自動的に本番環境に反映される

[プルリクエストの作成](https://github.com/ashcolor/ashcolor-blog/compare/main...develop)

## 記事作成時の注意点

### コンポーネント

mdファイルで使用することのできるコンポーネントは以下に記載

http://localhost:3000/_story
