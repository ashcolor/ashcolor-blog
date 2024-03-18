---
createdAt: "2024/03/06"
updatedAt: "2024/03/18"
title: "【UtaFormatix】VOCALOID/Synthesizer V/CeVIOのプロジェクトデータを相互変換する方法"
description: "UtaFormatixを使ってVOCALOID/Synthesizer V/CeVIOのプロジェクトデータを相互変換する方法について詳しく解説します。"
category: "DTM"
tags:
  - "VOCALOID"
  - "Synthesizer V"
  - "CeVIO"
  - "UTAU"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/blog/dtm/uta-formatix/thumbnail.png"
isRecommend: false
---

## はじめに

VOCALOIDが流行して以来、様々な合成音声ソフトが登場してきました。
一方、各ソフトのプロジェクトデータは異なるフォーマットで保存されるため、[ソフト間でデータを使い回せない]{.marker}場合が多々あります。

今回紹介する**UtaFormatix**を使用すると、[音声合成ソフトのプロジェクトデータを別のフォーマットに変換することができます]{.marker}。
この記事では、UtaFormatixの使い方や仕様についてまとめました。

## UtaFormatixとは

**UtaFormatix**は[科林/sdercolin](https://twitter.com/sder_colin)さんが開発した、[歌声合成ソフトのプロジェクトデータを相互変換できるサイト]{.marker}です。

### UtaFormatix

:link-card{url="https://sdercolin.github.io/utaformatix3/"}

Webアプリとして公開されているため、ブラウザさえあれば[インストール不要ですぐに使うことができます]{.marker}。

## UtaFormatixの使い方

UtaFormatixを使ってプロジェクトデータを変換する手順を説明します。
基本的には画面に出てくる指示通りの操作を行えば簡単に変換を行うことができます。

### 変換手順

1. [UtaFormatix](https://sdercolin.github.io/utaformatix3/)にアクセスします。

1. ファイルアップロード領域に変換するファイルをドロップするか、クリックしてファイルを選択します。

   ![プロジェクトインポート](https://d2s4ypph6g1t06.cloudfront.net/img/blog/dtm/uta-formatix/step1.png)

1. 出力形式を選択します。

   ![出力形式を選ぶ](https://d2s4ypph6g1t06.cloudfront.net/img/blog/dtm/uta-formatix/step2.png)

1. 必要に応じて設定を変更します。（基本的にはそのままで大丈夫です。）
   `次へ`ボタンをクリックします。

   ![設定](https://d2s4ypph6g1t06.cloudfront.net/img/blog/dtm/uta-formatix/step3.png)

1. 処理が完了しました。
   `エクスポート`ボタンをクリックするとファイルをダウンロードすることができます。

   ![エクスポート](https://d2s4ypph6g1t06.cloudfront.net/img/blog/dtm/uta-formatix/step4.png)

### 設定項目について

変換時の設定では、以下の項目を設定することができます。

| 項目                                             | 備考                                                                                                                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 歌詞のSuffix除去・変換<br>（日本語歌詞のみ対応） | 歌詞の日本語↔ローマ字を相互に変換することができます。<br>例えば変換元を「単独音（ひらがな）」、変換先を「単独音（ローマ字）」とすると「ら」と入力された歌詞は「ra」に変換されます。 |
| 中国語歌詞（漢字）を Pinyin に変換               | 中国語歌詞（漢字）を中国語の発音記号であるPinyinに変換します。                                                                                                                       |
| 歌詞を置き換える                                 | フィルターに合致する歌詞を置き換えることができます。                                                                                                                                 |
| 歌詞を歌詞または発音記号にマッピング             | 指定した歌詞を他の歌詞、または発音記号に変換することができます。                                                                                                                     |
| 短い休符を埋める                                 | ノートの間に短い休符がある場合、前のノートを伸ばして隙間を埋めます。                                                                                                                 |
| ピッチパラメータを変換                           | ピッチやビブラートのパラメータを変換後のデータに含めます。                                                                                                                           |
| プロジェクトをズームイン・ズームアウト           | 実際の速度を変更しないようBPMとノートの長さを変更します。<br>例えば、BPMが60の曲に因子2を設定して処理すると、BPMは120になりノートの長さは2倍になります。                             |

最初はデフォルトのまま出力、変換後のファイルを見て修正したい箇所がある場合に設定を見直すのがオススメです。

## UtaFormatixの機能詳細

### 対応フォーマット

インポート・エクスポートをサポートするフォーマットは以下の通りです。

| フォーマット  | インポート | エクスポート | 用途                  |
| ------------- | ---------- | ------------ | --------------------- |
| MID(VOCALOID) | ⭕         | ⭕           | VOCALOID1             |
| VSQ           | ⭕         | ⭕           | VOCALOID2             |
| VSQX          | ⭕         | ⭕           | VOCALOID3/4           |
| VPR           | ⭕         | ⭕           | VOCALOID5             |
| PPSF          | ⭕         | ❌           | Piapro Studio NT      |
| SVP           | ⭕         | ⭕           | synthesizer V Studio  |
| S5P           | ⭕         | ⭕           | synthesizer V         |
| CCS           | ⭕         | ⭕           | CeVIO Creative Studio |
| MusicXML      | ⭕         | ⭕           | CeVIO Creative Studio |
| UST           | ⭕         | ⭕           | UTAU                  |
| USTX          | ⭕         | ⭕           | OpenUTAU              |
| DV            | ⭕         | ⭕           | DeepVocal             |
| MID(STANDARD) | ⭕         | ⭕           | 標準MIDIファイル      |
| UFDATA        | ⭕         | ⭕           | UtaFormatix           |

上記の通り、[主要な音声合成ソフトは全て対応している]{.marker}ことが分かります。

ちなみに、Piapro Studio NTで使用されている`.ppsf`形式のエクスポートには対応していませんが、Piapro Studio NTはVSQXをインポートすることができるため、特に問題はありません。

[ピッチ]{.marker}は下記の表で⭕がある部分のみ、変換することができます。

| フォーマット         | ピッチインポート | ビブラートインポート | ピッチエクスポート |
| -------------------- | ---------------- | -------------------- | ------------------ |
| VSQ/VSQX/VPR/MID(V1) | ⭕               | ❌                   | ⭕                 |
| UST(mode2)           | ⭕               | ⭕                   | ⭕                 |
| UST(mode1)           | ⭕               | -                    | ⭕                 |
| USTX                 | ⭕               | ⭕                   | ⭕                 |
| CCS                  | ⭕               | ❌                   | ⭕                 |
| SVP                  | ⭕               | ⭕                   | ⭕                 |
| S5P                  | ⭕               | ❌                   | ⭕                 |
| DV                   | ⭕               | ⭕                   | ⭕                 |

ビブラートはフォーマットによってはインポートできないため、注意してください。

### 変換時に保持される/されない項目

各音声合成ソフトで[共通の仕様については変換後も保持]{.marker}されます。
一方で[ソフト間で仕様が異なるパラメータについては変換時に保持されない]{.marker}ことに注意してください。

:::point-list{title="変換時に保持される項目"}

- トラック
- ノート
- テンポ変更
- 拍子記号
- ピッチパラメータ（一部のパラメータのみ）

:::

:::point-list{title="変換時に保持されない項目" listStyle="❌"}

- 音量
- 強さ
- ノートベロシティ
- 性別
- その他のソフト特有の項目

:::

## まとめ

この記事では、音声合成ソフトのプロジェクトデータを変換することができるUtaFormatixの使い方や仕様についてまとめました。

ブラウザで簡単に使いはじめることができる上、対応フォーマットが多く大変便利なツールとなっています。

プロジェクトデータの変換が必要になったときはぜひ使ってみてください。

:affiliate-block{title="初音ミク V4X" imageUrl="https://m.media-amazon.com/images/I/51u8gPLu3qL._SL160_.jpg" asin="B01G6XK6VM"}

:affiliate-block{title="初音ミク NT" imageUrl="https://m.media-amazon.com/images/I/51LBuhS7xbL._SL160_.jpg" asin="B08MVV4S57"}

:affiliate-block{title="Synthesizer V Studio Pro" imageUrl="https://m.media-amazon.com/images/I/41nl+l0DddL._SL160_.jpg" asin="B08B34MWKF" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ013608.html"}

:affiliate-block{title="Synthesizer V Studio Pro スターターパック" imageUrl="https://m.media-amazon.com/images/I/51jy+o9TSXL._SL160_.jpg" asin="B08B3CNY2D"}

:affiliate-block{title="音楽的同位体 可不(KAFU) スターター|ダウンロード版" imageUrl="https://m.media-amazon.com/images/I/51yP6udmYFS._SL160_.jpg" asin="B097Y3T79R" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ014592.html"}
