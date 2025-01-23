---
createdAt: "2025/01/24"
updatedAt: ""
title: "新型SynthV開発中！Synthesizer V Studio 2 情報まとめ"
description: "Synthesizer V Studio 2 の情報をまとめました。"
category: "DTM"
subCategory: "Synthesizer V"
tags:
  - "Synthesizer V"
  - "SynthV"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v_thumbnail.webp"
isRecommend: true
---

## はじめに

2024年12月、[**Synthesizer V Studio 2**が開発中であることが発表されました。]{.marker}
その後、以下の動画でSynthesizer V Studio 2の詳細が明らかになってきました。

:you-tube-iframe{title="Synthesizer V Studio 2: Exclusive Preview" videoId="MU_7vgvRbkY"}

この記事では、[**Synthesizer V Studio 2**の情報をまとめます]{.marker}。

::call-out{type="info"}

この記事は、開発中の情報を元に作成しているため、実際の製品と仕様が異なる場合があります。

::

## 改善点・新機能

Synthesizer V Studio 2の[改善点・新機能]{.marker}についてまとめます。

### 歌声生成速度の改善

バージョン2では、[歌声の生成速度が改善]{.marker}されました。
バージョン1に比べると、なんと[ 300% 早くなった]{.marker}とのことです。

バージョン1の歌声生成は少し時間がかかります。
1つのノートの音程を変更しただけでも、少し待たないと再生できませんでした。

バージョン2では、[ノートの編集後に再生できるまでの時間が短くなりました]{.marker}。
また、[再生中にパラメータを変更しても歌声が途切れることなく、すぐに変更内容が反映]{.marker}されています。

以下の動画で歌声生成速度の速さが確認できます。

:you-tube-iframe{title="Synthesizer V Studio 2: Exclusive Preview" videoId="MU_7vgvRbkY" start=656}

AIによる生成ということで、生成時間がある程度かかることは仕方のないものだと思っていたので、ここまでの改善があるのは驚きました。

### 新しいボーカルスタイルの機能

**ボーカルスタイル**は、シンガーの歌声にバリエーションを持たせる機能です。

バージョン2では、各ボーカルスタイルに対して[「ピッチ」「声色」「発音」のパラメータが加わり]{.marker}、ボーカルスタイルごとにどの[パラメータをどのくらい適用するかを調整できる]{.marker}ようになりました。

![ボーカルスタイルパネル](https://d2s4ypph6g1t06.cloudfront.net/img/pc/2025-01-24_03-26-33_790b88x3.webp)

以下の動画で実際にパラメータを変更しているところを確認できます。

:you-tube-iframe{title="Synthesizer V Studio 2: Exclusive Preview" videoId="MU_7vgvRbkY" start=911}

例えば、音程はClearのボーカルスタイル、発音はSoftボーカルスタイルを適用するといった、[細かな歌声のスタイルの調整]{.marker}ができます。
試行錯誤しながらより好みな歌声を生成できるようになりそうです。

### AIリテイク機能の改善

**AIリテイク**は、AIの技術を用いて異なる歌い方を生成することができる機能です。

バージョン1の場合、AIリテイクできるのは「ピッチ」と「声色」のみでした。
バージョン2では新たに[「発音」も生成できる]{.marker}ようになりました。

また、[UIが大きく変更になり全てのパラメータに対して一括でリテイクを生成できる]{.marker}ようになりました。
ボタンも大きくなり、使い勝手が向上しています。

![AIリテイクパネル](https://d2s4ypph6g1t06.cloudfront.net/img/sp/2025-01-24_03-38-12_c6ww998j.webp)

以下の動画でAIリテイクを使用しているところを確認できます。

:you-tube-iframe{title="Synthesizer V Studio 2: Exclusive Preview" videoId="MU_7vgvRbkY" start=1405}

生成速度の改善とAIリテイクの機能の改善により、[AIリテイクの生成↔確認を素早くできます]{.marker}。
良いリテイクを生成する作業の効率が大幅に上がりそうです。

### 音素パネル

バージョン1の場合、発音タイミングはノートを選択したあとに発音記号の長さを割合で指定する必要があり、直感的な調整ができませんでした。

バージョン2では、[画面下部に音素パネルが表示]{.marker}されるようになり、[音素のタイミングと音量をドラッグするだけで調整できる]{.marker}ようになりました。

![音素パネル](https://d2s4ypph6g1t06.cloudfront.net/img/pc/2025-01-24_03-26-33_jp93c458.webp)

以下の動画で音素の調整をしているところを確認できます。

:you-tube-iframe{title="Synthesizer V Studio 2: Exclusive Preview" videoId="MU_7vgvRbkY" start=1627}

音素の発音タイミングと音量は変更する機会が多いため、作業の効率が上がりそうです。

### スマートピッチコントロール

バージョン1の場合、ピッチ関係のパラメータは「ピッチ推移:長さ - 左」や「ビブラート:ゆらぎ」など、どのような変化が起きるのか分からないものが多くありました。

バージョン2では、[ピアノロール上にピッチ制御点を追加]{.marker}でき、[制御点を通るピッチカーブが自動生成]{.marker}されるようになります。
ピッチ制御点をドラッグすると[生成されたピッチカーブがリアルタイムで表示]{.marker}されるため、再生せずにどのようなピッチになるか知ることができます。

![スマートピッチコントロール](https://d2s4ypph6g1t06.cloudfront.net/img/pc/2025-01-24_03-26-33_78vwaxen.webp)

以下の動画でスマートピッチコントロールを使用しているところを確認できます。

:you-tube-iframe{title="Synthesizer V Studio 2: Exclusive Preview" videoId="MU_7vgvRbkY" start=1923}

この機能により、[しゃくり・ドロップ・ビブラート等のあらゆるピッチ制御がピアノロール上で簡単に制御]{.marker}できるようになります。

### マウスオープニングパラメータ

バージョン2では、[新たに**マウスオープニングパラメータ**が追加]{.marker}されました。
マウスオープニングパラメータを使用すると、[口の開き具合を調整]{.marker}できます。

以下の動画でマウスオープニングパラメータを使用しているところを確認できます。

:you-tube-iframe{title="Synthesizer V Studio 2: Exclusive Preview" videoId="MU_7vgvRbkY" start=2355}

マウスオープニングパラメータによる変化は大きくはないですが、[微細な表現をしたい場合に有効]{.marker}そうです。

<!-- ### 新しい歌声データベース

2023-12-04
「Synthesizer V AI 氷山キヨテル」「Synthesizer V AI miki」の制作が決定。2024年の15周年に向けて制作
氷山キヨテル miki

PASTEL/HALOも4月の発表以来もう半年以上続報なし -->

<!-- ## SynthVのボーカルライブラリを使用することはできる？ -->

<!-- ## SynthVユーザは無料？ -->

## 発売時期や価格について

2025年1月現在、[発売時期や価格は未定]{.marker}です。

開発中の段階であり、大きなバージョンアップになるため発売まではまだ時間がかかるものと思われます。
Synthesizer V Studioユーザへの優待価格等があるかについても現時点では分かっていません。

## まとめ

この記事では、**Synthesizer V Studio 2**の情報をまとめました。

[機能面・UI面ともに大きく進化しており、好みの歌声をより効率よく制作できそう]{.marker}だと感じました。
今から発売が待ち遠しいです。

世界最大規模の楽器見本市である**NAMM 2025**でも情報が出るとのことなので、続報が入りましたら記事を更新する予定です。

<DtmSynthesizerVAffiliateBlocks></DtmSynthesizerVAffiliateBlocks>

<DtmSynthesizerVAmazonSearch></DtmSynthesizerVAmazonSearch>

<DtmSynthesizerVDlSiteSearch></DtmSynthesizerVDlSiteSearch>
