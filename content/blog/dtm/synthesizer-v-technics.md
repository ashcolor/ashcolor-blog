---
createdAt: "2023/12/27"
updatedAt: ""
title: "Synthesizer V簡単で効果的な調声テクニック3選"
description: "Synthesizer Vの簡単で効果的な調声テクニックを3つ紹介します。"
category: "DTM"
subCategory: "Synthesizer V"
tags:
  - "Synthesizer V"
  - "SynthV"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v_thumbnail.webp"
isRecommend: true
---

## はじめに

Synthesizer Vは[ベタ打ちでもピッチや音色がAIにより自動生成]{.marker}されます。
しかし、ちょっとした調声を行うとより人間に近い感情豊かな歌唱を再現することも可能です。

この記事では、Synthesizer Vで調声をする際に使える[簡単で効果的なテクニックを3つ紹介]{.marker}します。

## 調声テクニック3選

### 母音を消す

歌い出し以外のカ行、サ行、タ行等は[母音を消すと自然に聞こえるようになる]{.marker}ことがあります。
例えば「なくて」の「**く**」、「です」の「**す**」、「ひとつ」の「**つ**」などです。

母音だけを消す場合はまず、文字を入力したあとに[音素記号をダブルクリック]{.marker}します。
そのあとに該当の「a」「i」「u」「e」「o」を消してください。

![音素を編集して一部の母音を消した状態](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-technics_museika1.webp)

母音を消しただけだと、[子音の長さに違和感]{.marker}がある場合があります。
その場合は該当のノートを選択した状態で、[ノートプロパティパネルの**音素**の部分を確認]{.marker}します。

![ノートプロパティ 音素](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-technics_museika2.webp)

先に`ノートを音節で均等に分割`のチェックボックスを外して、`長さ`を調整します。
子音をよく聞かせたい場合は、[子音の長さを長めにすると強調]{.marker}されて聞こえるようになります。

ノート自体の長さとの兼ね合いもあるので、[実際に再生しながら微調整]{.marker}するのがいいでしょう。

実際に母音を消す前と後でどのように変化するのか聞いてみましょう。

:custom-audio{title="無声化前" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_museika_default.mp3"}

:custom-audio{title="無声化後" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_museika_museika.mp3"}

簡単な作業で機械っぽさが一気に消えるテクニックなので、ぜひ実践してみてください。

### 裏声（ファルセット）

Synthesizer Vで高音を打ち込んだ際に、[地声になるか裏声になるかは歌声データベースとボーカルスタイルによって異なります]{.marker}。
「**裏声にしたいのに地声になる…**」ことや、逆に「**地声にしたいのに裏声になる…**」と困った方も多いのではないでしょうか。

地声/裏声をコントロールする方法はいくつかあるので、方法と実際の声の変化を紹介します。

#### テンションを下げる

**テンションパラメータ**は声の緊張感を調整するためのパラメータですが、[テンションを下げることで裏声のような声質を出す]{.marker}ことができます。

実際に、テンションパラメータを下げた例を聞いてみましょう。

:custom-audio{title="テンション：0" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_uragoe_default.mp3"}

:custom-audio{title="テンション：-1.000" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_uragoe_tension.mp3"}

声の緊張感が下がったのと合わせて、[裏声のような声質]{.marker}になったのが確認できます。

テンションは他のパラメータと比べて分かりやすく声色が変わり扱いやすいパラメータのため、裏声の調声に使うのにもオススメです。

#### ボーカルスタイルを変更する

同一の歌声データベースで同じ高さの音を出しても、[**ボーカルスタイル**によって地声/裏声が変わる場合があります]{.marker}。
目安としては力強い歌い方である**Open**等は地声になりやすく、優しい歌い方である**Soft**等は比較的低い音程でも裏声になりやすいです。

実際にボーカルスタイルだけを変えた例を聞いてみましょう。

:custom-audio{title="ボーカルスタイル：Mai デフォルト" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_uragoe_default.mp3"}

:custom-audio{title="ボーカルスタイル：Mai Soft" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_uragoe_vocal_style.mp3"}

ボーカルスタイルは画面下部の[**パラメータパネル**を使うと曲の途中で変更することができる]{.marker}ので、地声/裏声を調整したい部分だけ値を変更しましょう。

#### トーンシフトを変更する

**トーンシフト**は声の[「**声区**」を実際の音程からずらす]{.marker}ためのパラメータです。

パラメータを変更したときの声の変化は以下の動画を確認してみてください。

:you-tube-iframe{videoId=TNOLxr62Np0 title="トーンシフト" start=237}

トーンシフトで地声/裏声をコントロールするには、

- 裏声になっている箇所を[**地声**で歌わせたい場合はトーンシフトを**下げる**]{.marker}、
- 地声になっている箇所を[**裏声**で歌わせたい場合はトーンシフトを**上げる**]{.marker}

という風にパラメータを変更します。

実際にトーンシフトを変えた例を聞いてみましょう。

:custom-audio{title="トーンシフト：0 cents" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_uragoe_default.mp3"}

:custom-audio{title="トーンシフト：+400 cents" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_uragoe_tone_shift.mp3"}

トーンシフトを上げることによって裏声っぽい声になったのが確認できます。
ただ、[他のパラメータと比べると効果が分かりづらい]{.marker}かなと感じます。

歌声データベースによって、パラメータを変更したときの効果は異なるので、上記の3つの手法を実際に試してみて一番よく聞こえるのを採用するのがオススメです。

### エッジボイス

[**エッジボイス**とは声帯を閉じながら発声することで出る声]{.marker}のこと言います。
歌では[フレーズはじめによく使われる]{.marker}ことがある歌唱技術です。

エッジボイスの声は以下の動画を確認すると分かりやすいです。

:you-tube-iframe{videoId=NJ96jircBiU title="【出し方解説】秘技エッジボイスでバラードAメロが神になる説【ボーカルフライ】" start=35}

Synthesizer Vには[「**cl**」という特殊な**音素記号**が用意]{.marker}されています。

[この記号をア行の発音の前に付ける]{.marker}ことで、エッジボイスを再現することができます。
（または文字の前に「'(半角クオーテーション)」を付けても「cl」が付与されます。）

![文字を「'あ」と入力すると音素記号は「cl a」となる](https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_synthesizer-v-technics_edge.webp)

実際にア行の発音の前に「cl」を付けると、どのようになるのか聞いてみましょう。

:custom-audio{title="clなし" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_edge_default.mp3"}

:custom-audio{title="clあり" src="https://d2s4ypph6g1t06.cloudfront.net/audio/dtm_synthesizer-v-technics_edge_edge.mp3"}

歌いはじめにエッジボイスが入ることによって、[表現豊かな歌唱]{.marker}に聞こえるようになったのではないでしょうか。

使う場面は限られますが、凝った調声をしたい場合はぜひ試してみてください。

## まとめ

この記事では、Synthesizer Vで調声をする際に使える[簡単で効果的なテクニックを3つ紹介]{.marker}しました。

簡単にまとめると以下の通りです。

::point-list{title="Synthesizer V 調声テクニック3選"}

- 歌い出し以外のカ行、サ行、タ行は、**母音を消す**と自然に聞こえる場合あり
- 歌い出しのア行の前に音素記号「cl」を付けると、**エッジボイス**を再現
- **裏声**は、「テンション」「ボーカルスタイル」「トーンシフト」を調整して再現

::

調声の参考になれば幸いです。

<DtmSynthesizerVAffiliateBlocks></DtmSynthesizerVAffiliateBlocks>

<DtmSynthesizerVAmazonSearch></DtmSynthesizerVAmazonSearch>

<DtmSynthesizerVDlSiteSearch></DtmSynthesizerVDlSiteSearch>
