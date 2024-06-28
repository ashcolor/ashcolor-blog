---
createdAt: "2023/11/26"
updatedAt: "2024/04/07"
title: "Synthesizer V ARA対応！Cubaseで使用する方法"
description: "Synthesizer V の ARA プラグイン を Cubase で使用する方法と注意点を解説します。"
category: "DTM"
subCategory: "Synthesizer V"
tags:
  - "Synthesizer V"
  - "SynthV"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v_thumbnail.avif"
isRecommend: false
---

この記事では歌声合成ソフトウェアである [**Synthesizer V**の **ARA プラグイン** を **Cubase** で使用する方法]{.marker}を解説します。

## はじめに

2024 年 4 月 4 日、Synthesizer V Studio **1.11.0** がリリースされました。

このアップデートでは、**ARA プラグイン**と**ボーカル MIDI 変換機能**が追加されています。

**ARA プラグイン** の導入では、DAW との連携が強化され[再生、ループ、テンポの同期]{.marker}や、[DAW 内のオーディオクリップと Synthesizer V Studio のノートグループのリンク]{.marker}が可能となりました。

**ボーカル MIDI 変換機能**の追加では、[ボーカルのオーディオデータを元に Synthesizer V の歌唱データを生成]{.marker}することができるようになりました。

この記事では、ARA プラグインをCubaseで使用する方法について詳しく解説します。

## Cubase で Synthesizer V Studio ARA プラグインを使う方法

Studio One、Logic は Dreamtonics 公式の YouTube 動画で使い方が紹介されています。

:link-card{url="https://www.youtube.com/watch?v=0ijQ9nLPGe0"}

一方、Cubase で ARA プラグインを使用する方法は紹介されていませんでした。

そこで私自身が実際に Cubase で ARA プラグインを使用してみた際の手順と注意点についてまとめてみます。

### ARA のプラグインモードについて

先に **ARA のプラグインモード** について説明します。

ARA プラグインを使う際のモードは以下の 2 種類があります。

| モード                | 機能                                                                         | 用途                               |
| --------------------- | ---------------------------------------------------------------------------- | ---------------------------------- |
| 高位の ARA 機能モード | 再生、ループ、テンポの同期<br>オーディオクリップとノートグループのマッピング | オーディオ MIDI 変換使用時         |
| ARA ブリッジモード    | 再生、ループ、テンポの同期                                                   | 既存プロジェクト<br>新規打ち込み時 |

[モードによって仕様が異なる]{.marker}ため、[用途によって使い分ける]{.marker}のがよさそうだと感じました。

上記の表に記載した通り、既にオーディオの歌唱データがある場合が **高位の ARA 機能モード** 、それ以外の場合は **ARA ブリッジモード** を使用するのが使いやすかったです。

それぞれのモードの適用方法について記載していきます。

### 高位の ARA 機能モード

高位の ARA 機能モードでは、[再生、ループ、テンポの同期]{.marker}と[オーディオクリップとノートグループのマッピング]{.marker}が行われます。
現時点では、[既にオーディオの歌唱データがある場合]{.marker}に使用するのがオススメです。

#### 高位の ARA 機能モードの適用手順

1. トラックリストを右クリック → `Audio トラックを追加`をクリック

   ![トラックリストを右クリック](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-1.avif)

1. 必要に応じてプロパティを変更して、`トラックを追加`をクリック

   ![トラックを追加ウィンドウ](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-2.avif)

1. 追加したトラックを選択して、トラックインスペクター（画面左部）を表示

   ![トラックインスペクター](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-3.avif)

1. `エクステンションなし`と表示されている部分をクリックして、`Synthesizer V Studio ARA Plugin`を選択

   ![Synthesizer V Studio ARA Pluginを選択](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-5.avif)

1. トラックにオーディオデータをドラッグ & ドロップ

   右上に丸いマークが付いていればエクステンションが有効になっています。

   ![イベントの右上に丸いマークが付いている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-6.avif)

1. オーディオイベントをダブルクリック

   Synthesizer V Studio のインターフェイスが表示されます。

   ![Synthesizer V Studio のインターフェイス](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-6-2.avif)

1. Synthesizer V Studio 画面上のオーディオを右クリック → `オーディオをノートに変換`をクリック

   ![オーディオをノートに変換](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-7.avif)

1. 必要に応じてプロパティを変更したら、`確定`をクリック

   ![ボーカルMIDI変換ウィンドウ](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-8.avif)

1. 変換結果が表示される
   ![変換結果が表示されている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-9.avif)

#### 高位の ARA 機能モードの注意点

高位の ARA 機能モードであれば、DAW 上のイベントと Synthesizer V Studio のノートグループが同期されています。
一方で、以下のような注意点があります。

::point-list{title="高位の ARA 機能モードの注意点" list-style="❌"}

- DAW のオーディオトラック上のイベントが空の場合はエクステンションが有効化されない
- オーディオイベントやノートグループを任意の長さに変更することができない

::

特に、[空のイベントに対してエクステンションが有効にならない]{.marker}のが不便で、[鉛筆ツールでイベントを書いてもそのイベントから Synthesizer V Studio を起動することができません]{.marker}でした。

既存のオーディオデータがある場合は問題ない場合が多いですが、[新規に打ち込みをする場合は任意の範囲に打ち込みをすることが難しくなります]{.marker}。

そこで、新規に打ち込みをする場合や既存のプロジェクトの場合は、**ARA ブリッジモード** がオススメです。

### ARA ブリッジモード

ARA ブリッジモードでは、[再生、ループ、テンポの同期]{.marker}のみ行われます。

#### ARA ブリッジモードの適用手順

途中までは高位の ARA 機能モードと同じです。

1. トラックリストを右クリック → `Audio トラックを追加`をクリック

   ![トラックリストを右クリック](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-1.avif)

1. 必要に応じてプロパティを変更して、`トラックを追加`をクリック

   ![トラックを追加ウィンドウ](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-2.avif)

1. 追加したトラックを選択して、トラックインスペクター（画面左部）を表示

   ![トラックインスペクター](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-3.avif)

1. `エクステンションなし`と表示されている部分をクリックして、`Synthesizer V Studio ARA Plugin`を選択

   ![Synthesizer V Studio ARA Pluginを選択](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-5.avif)

1. トラックに適当なオーディオデータをドラッグ & ドロップ

   [エクステンションが有効になっているトラックに適当なオーディオデータを配置することで、プロジェクト全体で ARA が有効になります。]{.marker}

   ![イベントの右上に丸いマークが付いている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_high-6.avif)

1. オーディオトラックは ARA プラグインの有効化のためだけに使用するため、トラックの`M`をクリックしてミュート

   ![トラックをミュート](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_bridge-0.avif)

   ここから先は、アップデート前と同様で Synthesizer V Studio の VST を追加する手順になります。

1. トラックリストを右クリック → `インストゥルメント トラックを追加`をクリック

   ![インストゥルメントトラックの追加](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_bridge-1.avif)

1. 必要に応じてプロパティを変更して、`トラックを追加`をクリック

   ![トラックを追加ウィンドウ](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_bridge-2.avif)

1. インストゥルメントを編集ボタン（鍵盤アイコン）をクリック

   Synthesizer V Studio インターフェイスの右上に`ARA Bridge Link`ボタンが表示されていれば、ARA ブリッジモードが有効化されています。

   ![Synthesizer V Studio インターフェイス 右上にARA Bridge Linkボタンが表示されている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-ara-cubase_bridge-3.avif)

#### ARA ブリッジモードの注意点

現時点では、Synthesizer V Studio ARA プラグインが有効になっているオーディオトラックに、[空ではないオーディオイベントがある場合]{.marker}に、プロジェクトの ARA Bridge Link が有効になる仕様のようです。

直感的な仕様ではないため、もしかしたら今後のアップデートで仕様が変わるかもしれません。

既存のプロジェクトの場合は 1. ~ 6. の手順を行うことで、比較的簡単に ARA Bridge Link を有効にすることができます。

## まとめ

この記事では歌声合成ソフトウェアである [**Synthesizer V**の **ARA プラグイン** を **Cubase** で使用する方法]{.marker}を解説しました。

ARA プラグインを導入することで、DAWとSynthesizer V Studioの再生・ループ・テンポの同期がされるのが非常に便利に感じました。

一方で、[高位の ARA 機能モードを使用する際、鉛筆モードで書いたイベントに対して ARA を適用できない]{.marker}点や、[ARA ブリッジモードを有効にするためには、空ではないオーディオイベントが必要]{.marker}な仕様は分かりづらいと思いました。

気になる方は上記の手順を参考にぜひ導入してみてください。

:affiliate-block{title="Synthesizer V Studio Pro" imageUrl="https://m.media-amazon.com/images/I/41nl+l0DddL._SL160_.jpg" asin="B08B34MWKF" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ013608.html"}

:affiliate-block{title="Synthesizer V Studio Pro スターターパック" imageUrl="https://m.media-amazon.com/images/I/51jy+o9TSXL._SL160_.jpg" asin="B08B3CNY2D"}

:affiliate-block{title="Synthesizer V AI Megpoid パッケージ版" asin="B0CNSLGNH7" imageUrl="https://m.media-amazon.com/images/I/41PINo4+UcL._SL160_.jpg"}

:affiliate-block{title="Synthesizer V AI Megpoid ダウンロード版" asin="B0CS5T4KZ4" imageUrl="https:///img.dlsite.jp/modpub/images2/work/professional/VJ01002000/VJ01001252_img_main.jpg" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ01001252.html"}

:affiliate-block{title="Synthesizer V AI 重音テト パッケージ版" imageUrl="https://m.media-amazon.com/images/I/417GBcwOqaL._SL160_.jpg" asin="B0BYZ417DW"}

:affiliate-block{title="Synthesizer V AI 重音テト ダウンロード版" imageUrl="https://img.dlsite.jp/modpub/images2/work/professional/VJ01001000/VJ01000376_img_main.webp" asin="B0CJ4PZFV9" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ01000376.html"}

<DtmSynthesizerVAmazonSearch></DtmSynthesizerVAmazonSearch>

<DtmSynthesizerVDlSiteSearch></DtmSynthesizerVDlSiteSearch>

## 参考

この記事を作成にするにあたり、以下のサイトを参考にしました。

- 公式：Synthesizer V Studio ARA Plugin ガイド

:link-card{url="https://docs.google.com/document/d/e/2PACX-1vQFr2S9WQXLiOqtwVdkPaWwuRiRYsaaBOzz728uA8u67LSP_ruSE6I8A6V9MrrjKBfFe8niPev2YpI0/pub"}

- Cubase オペレーションマニュアル：オーディオトラックのエクステンションの有効化

:link-card{url="https://steinberg.help/cubase_pro/v12/ja/cubase_nuendo/topics/ara_integration/extensions_for_audio_tracks_activating_t.html"}

- DTM ステーション：Synthesizer V が DTM 界にまた新たな革命!人の歌声から音程と歌詞を抽出して再合成。ARA 2 対応で DAW との有機的な融合も実現

:link-card{url="https://www.dtmstation.com/archives/63777.html"}
