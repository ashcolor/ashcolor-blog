---
createdAt: "2023/10/26"
updatedAt: "2023/11/26"
title: "Synthesizer V日本語ラップ対応！詳細と使い方を解説"
description: "Synthesizer Vに新しく搭載された日本語ラップについて解説します。"
category: "DTM"
subCategory: "Synthesizer V"
tags:
  - "Synthesizer V"
  - "SynthV"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v_thumbnail.avif"
isRecommend: false
---

2023/10/26、Synthesizer V Studio のバージョン 1.10.0 にて、[日本語ラップ機能]{.marker}が搭載されました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">本日、Synthesizer V AI歌声データベースのアップデータを公開いたします。<br><br>今回のアップデートでは、日本語でのラップに対応できるようになりました。 <a href="https://t.co/pr3eyRLcrB">pic.twitter.com/pr3eyRLcrB</a></p>&mdash; Dreamtonics 公式 (@dreamtonics_jp) <a href="https://twitter.com/dreamtonics_jp/status/1717451009960849761?ref_src=twsrc%5Etfw">October 26, 2023</a></blockquote>

この記事では、ラップ機能について詳しく解説します。

## ラップ機能とは

Synthesizer V のラップ機能について、公式では以下のように説明されています。

> ピッチの自動調整に、新たに「ラップ」モードが搭載されました。アップデート後に、パラメータパネルにラップのインターフェースが追加されます。
> ラップモードに切り替えることで、ラップのイントネーションを正確かつ簡単にコントロールすることが可能です。
> 「ラップ」モードの導入により、AI リテイク、ボーカルスタイル、多言語歌声合成といった既存の機能と組み合わせて、ラップボーカルのカスタマイズができるようになりました。

要約すると、[ラップのような抑揚のあるピッチを自動生成できる]{.marker}ようになり、[ラップのイントーネーションのコントロールも簡単にできる]{.marker}ようになりました。

ラップ機能を使用した歌声は、以下の公式デモ曲で確認することができます。

:you-tube-iframe{title="【Synthesizer V AI Eri】Not Yet【公式デモ曲】（フル）" videoId="Yrs4rF_V92s"}

ラップ独特のピッチの遷移が生成されていることが確認できます。

音声合成ソフトでラップを表現しようとすると、ピッチを 1 音ずつ設定する必要があり手間がかかっていました。
それが自動でピッチを付与できるようになるため、[簡単にラップを歌わせることが可能]{.marker}になります。

## ラップ機能の対応ライブラリ

ラップ機能は、基本的に[全ての歌声ライブラリで使用可能]{.marker}です。

ただし、TOKYO6 の[**小春六花 AI**,**夏色花梨 AI**, **花隈千冬 AI**は未対応]{.marker}で、次回アップデートでの対応を予定しているとのことです。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">本日Synthesizer V AI ライブラリの日本語ラップ対応のアップデートが行われましたが弊社キャラクターライブラリ（小春六花、夏色花梨、花隈千冬）については、次回アップデートでの対応を予定しております。<a href="https://twitter.com/hashtag/SynthesizerV?src=hash&amp;ref_src=twsrc%5Etfw">#SynthesizerV</a> <a href="https://twitter.com/hashtag/%E5%B0%8F%E6%98%A5%E5%85%AD%E8%8A%B1?src=hash&amp;ref_src=twsrc%5Etfw">#小春六花</a> <a href="https://twitter.com/hashtag/%E5%A4%8F%E8%89%B2%E8%8A%B1%E6%A2%A8?src=hash&amp;ref_src=twsrc%5Etfw">#夏色花梨</a> <a href="https://twitter.com/hashtag/%E8%8A%B1%E9%9A%88%E5%8D%83%E5%86%AC?src=hash&amp;ref_src=twsrc%5Etfw">#花隈千冬</a> <a href="https://t.co/lNpJVx0dc3">https://t.co/lNpJVx0dc3</a></p>&mdash; TOKYO6 Information (@tokyo6info) <a href="https://twitter.com/tokyo6info/status/1717456112856031479?ref_src=twsrc%5Etfw">October 26, 2023</a></blockquote>

## ラップ機能の使い方

ラップ機能は、[ノートプロパティのピッチモードを**ラップ**にすることで使用できる機能]{.marker}です。

![ノートプロパティ ピッチモードにラップ追加](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-rap_setting.avif)

ノートを**ラップ**モードにすると[ラップ用のピッチが生成]{.marker}されます。

![ピッチモードによるピッチの違い（左：歌唱モード、右：ラップモード）](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-rap_rap.avif)

歌唱モードとラップモードで生成される音程が異なることが確認できます。

ピッチモードはラップとなるため、[歌唱モードやマニュアルモードにあるプロパティは設定できなくなる]{.marker}ため注意が必要です。
ただし、歌声にパネルにある**デフォルト - 歌唱モード**にある、**ビブラートの強度**と**アタック・リリースの自動調整**のプロパティはラップのノートにも反映されるようです。

## ラップのパラメータ

ノートのピッチモードをラップにすると、以下の 2 つのパラメータを設定することができます。

| 名前             | 説明           |
| ---------------- | -------------- |
| イントネーション | 音程の変化     |
| トーン           | 基準となる音程 |

また、パラメータパネルで**ラップイントネーション**を開くと、[設定したパラメータが矢印で表示]{.marker}されます。
[矢印の線の部分を移動すると**トーン**]{.marker}、[矢印の終端部分を移動すると**イントネーション**]{.marker}の値を変更することができます。

### イントネーション

**イントネーション**では、[ノートの語尾に向けての音程の変化]{.marker}を設定できます。

![イントネーションによるピッチの変化（左：-5.00、右：+0.500）](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-rap_intonation.avif)

### トーン

**トーン**では、[基準となる音程]{.marker}を設定できます。

![トーンによるピッチの変化（左：-1.000、右：+1.000）](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-rap_tone.avif)

基準となる音程はノートを配置する音程でも設定できるため、トーンは細かい音程を設定するのに使うのがオススメです。

## まとめ

この記事では、Synthesizer V Studio のラップ機能の詳細と使い方について解説しました。
参考になれば幸いです。

:affiliate-block{title="Synthesizer V Studio Pro" imageUrl="https://m.media-amazon.com/images/I/41nl+l0DddL._SL160_.jpg" asin="B08B34MWKF" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ013608.html"}

:affiliate-block{title="Synthesizer V Studio Pro スターターパック" imageUrl="https://m.media-amazon.com/images/I/51jy+o9TSXL._SL160_.jpg" asin="B08B3CNY2D"}

:affiliate-block{title="Synthesizer V AI Megpoid パッケージ版" asin="B0CNSLGNH7" imageUrl="https://m.media-amazon.com/images/I/41PINo4+UcL._SL160_.jpg"}

:affiliate-block{title="Synthesizer V AI Megpoid ダウンロード版" asin="B0CS5T4KZ4" imageUrl="https:///img.dlsite.jp/modpub/images2/work/professional/VJ01002000/VJ01001252_img_main.jpg" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ01001252.html"}

:affiliate-block{title="Synthesizer V AI 重音テト パッケージ版" imageUrl="https://m.media-amazon.com/images/I/417GBcwOqaL._SL160_.jpg" asin="B0BYZ417DW"}

:affiliate-block{title="Synthesizer V AI 重音テト ダウンロード版" imageUrl="https://img.dlsite.jp/modpub/images2/work/professional/VJ01001000/VJ01000376_img_main.webp" asin="B0CJ4PZFV9" dlSiteLink="https://www.dlsite.com/soft/work/=/product_id/VJ01000376.html"}

<DtmSynthesizerVAmazonSearch></DtmSynthesizerVAmazonSearch>

<DtmSynthesizerVDlSiteSearch></DtmSynthesizerVDlSiteSearch>
