# あしゅログ（個人ブログ）

- [本番環境](https://blog.ashcolor.jp/)
- [ステージング環境](https://stg-blog.ashcolor.jp/)

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
pnpm install
```

### ローカルサーバの起動

```bash
pnpm dev
```

http://localhost:3000

### Playwrightのデバッグ

```bash
pnpm exec playwright test  --ui
```

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

contentディレクトリ内のマークダウンファイルで使用できるコンポーネントは以下に記載

[マークダウン一覧](http://localhost:3000/studio/story)

### 画像

以下のツールを使用してアップロードする

[画像アップロード](http://localhost:3000/studio/tool#画像アップロード)

### アフィリエイトブロックの作成

以下のツールを使用する

[アフィリエイトブロック生成ツール](http://localhost:3000/studio/tool#アフィリエイトブロック生成)
