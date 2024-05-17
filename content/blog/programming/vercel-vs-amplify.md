---
createdAt: "2024/05/17"
updatedAt: ""
title: "Vercel(Hobby)→AWS Amplify 移行して分かった両者の違い"
description: "VercelとAWS Amplifyの料金体系や機能の違いについて解説します。"
category: "プログラミング"
subCategory: "Vue.js"
tags:
  - "Vercel"
  - "Amplify"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/vercel-vs-amplify/vercel-amplify.png"
---

## はじめに

当ブログは**VercelのHobby**プランで運用していましたが、このたび**AWS Amplify**に移行しました。

この記事では、Vercel HobbyプランからAWS Amplifyに[移行を決めた理由]{.marker}と、実際に移行したあとに分かった[両者のプラットフォームの違い]{.marker}についてまとめました。

## Vercel→AWS Amplify 移行理由

移行を検討するきっかけになったのは、このブログでAmazonアソシエイトをはじめるためです。

[VercelのHobbyプランは商用利用不可]{.marker}のため、広告を貼ったりアフィリエイトを行ったりするにはProプランにする必要があります。

Proプランへのアップグレードも考えたのですが、既に使用した経験のあるAWS Amplifyの方が運用コストを抑えることができそうだったので、この機会にプラットフォームごと変えることにしました。

## コスト比較

### Vercel

Vercelには**Hobby・Pro・Enterprise**の3つのプランがあります。

:link-card{url="https://vercel.com/pricing"}

3つのプランの違いを簡単にまとめました。

|            | Hobby                | Pro                                                    | Enterprise                                                       |
| ---------- | -------------------- | ------------------------------------------------------ | ---------------------------------------------------------------- |
| 用途       | 非商用の個人利用向け | 商用またはチーム向け                                   | さらなるセキュリティ、サポート、パフォーマンスが必要なチーム向け |
| 金額       | 無料                 | 1ユーザあたり$20/月<br>※ただし制限を超えた分は従量課金 | Custom                                                           |
| 商用利用   | ❌                   | ⭕                                                     | ⭕                                                               |
| チーム利用 | ❌                   | ⭕                                                     | ⭕                                                               |

HobbyからProプランに変更する場合は、[最低でも$20/月のコスト]{.marker}がかかります。

Proプランにもデータ転送量やビルドの実行時間の制限があり制限を超えた分は従量課金になりますが、かなり余裕を持った制限となっています。

### AWS Amplify

AWS Amplifyは[従量課金]{.marker}となります。

:link-card{url="https://aws.amazon.com/jp/amplify/pricing/"}

ただし、[最初の1年間は制限内の利用であれば無料]{.marker}となっています。

従量課金の詳細は公式ドキュメントに記載されていますが、長くなるのでここでは割愛します。

料金の例として、以下のような記載があります。

- 300人のアクティブユーザー/日、600ビルド/月
  →**8.08USD/月**
- 10,000人のアクティブユーザー/日、6ビルド/月
  →**65.98 USD/月**

（詳細な計算式はドキュメントで確認できます。）

ちなみにこのブログの場合は以下の通りです。

- 100人のアクティブユーザ/日、ビルド10回/月
  →**約3.00 USD/月**

主に、ビルドとデプロイの時間とデータ転送(OUT)にお金がかかるため、月のビルド回数とアクティブユーザー数が分かれば概算を計算できます。

以上から分かるように、[アクセス数がそこまで多くないWebサイトでは従量課金であるAWS Amplifyの方がコストを抑えることができます]{.marker}。

## VercelとAWS Amplifyの違い

当ブログはNuxt.jsで運用していて、単純にサイトを公開するだけであればVercelでもAmplifyでも問題なく可能です。

実際に移行をしてみて、[使い勝手に関わる部分で機能の違いがあったのでまとめます]{.marker}。
また、簡易的なアプリケーションを想定しているため、Serverless Functionsやキャッシュ等には触れません。

### Vercel

#### Vercel Toolbar

Vercelの便利な機能として**Vercel Toolbar**があります。

:link-card{url="https://vercel.com/docs/workflow-collaboration/vercel-toolbar"}

Vercel Toolbarは、[デプロイ環境に表示される開発支援ツール]{.marker}です。
コメントやブランチ切り替えといった機能を、画面下部のツールから簡単に行うことができます。

![Vercel Toolbarから打ち込んだコメント](https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/vercel-vs-amplify/vercel1.png)

#### PRへの表示

VercelはGitHubと連携する設定をするだけでGitHubのリポジトリに**Vercel bot**が設定されます。
GitHubにプッシュするとPRのコメントでVercel botが表示されます。

![Vercel bot](https://d2s4ypph6g1t06.cloudfront.net/img/blog/programming/vercel-vs-amplify/vercel2.png)

ここでは[ビルドの進捗やPrevier環境のURL等が表示]{.marker}されるようになっており、マージ後の作業にすぐに取り掛かることができます。

#### ログイン認証が付いている

Vercelのプレビュー環境はデフォルトで**ログイン認証**がかかっています。

プレビュー環境はVercelのチーム内の人しか見ることはできず、逆に[Vercelにログイン済みであればパスワード不要でプレビュー環境を表示]{.markerすることができます。
（チーム外の人でも共有リンクによるアクセスの方法はあります。）

一方で、[パスワードによる認証はProプラン以上、IPアドレスによる認証はEnterpriseプラン以上のみが使用可能]{.marker}です。

### AWS Amplify

#### コストが低い

AWS Amplifyの一番の利点は[コストが低い]{.marker}ことでした。
上にも書きましたが、[VercelのProプランの$20の代わりに、Amplifyでは従量課金の金額$3ほどなので大幅にコストカット]{.marker}できています。

#### Basic認証を設定できる

Amplifyの`アクセスコントロールメニュー`では、ブランチごとに**Basic認証**をかけることができます。
AWSのユーザがなくてもアクセスできるため、融通が効きました。

[Vercelにも「パスワード保護」という機能がありますが、利用には月額150ドル追加費用]{.marker}がかかります。
（※詳細な認証方法は不明ですが、Basic認証とは違ってVercelのメンバーでないとログインできない仕様かもしれません。）

### まとめ

この記事では、[Vercel(Hobbyプラン) からAWS Amplifyに移行したときのコストや機能の違いを解説]{.marker}しました。

小規模なサイトであれば、[Amplifyの方がコストを抑えられる]{.marker}一方で、[Vercelの方がVercel botやVercel botといった便利な機能がある]{.marker}ことが分かりました。

必要に応じて使い分けるのが良さそうです。
Node環境をデプロイする際の、プラットフォーム選択の参考になれば幸いです。
