---
createdAt: "2023/08/01"
updatedAt: "2024/02/21"
title: "Ample Guitar 演奏モードと使用時の注意点"
description: "VST音源であるAmple Guitarの演奏モードと使う際の注意点についてまとめます。"
category: "DTM"
tags:
  - "ギター音源"
  - "Ample Guitar"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/dtm_ample-guitar_ag_lp.webp"
---

## はじめに

**Ample Guitar**は、リアルな楽器演奏を再現できるギター音源です。
本物のギターを再現するために様々な機能が搭載されています。

一方で、[目的の機能や音を出すのに苦労することが多い音源]{.marker}でもあります。

この記事では、[Ample Guitarの演奏モードと使用時のの注意点]{.marker}についてまとめます。

## Ample Guitarのモード

Ample Guitarには、[演奏に関する様々なモード]{.marker}が搭載されています。
同じノートを打ち込んでもモードによって音の鳴り方が変わるため、まずはモードについて理解しておく必要があります。

### Main / Strummer Mode

Main ModeとStrummerモードについて解説します。

#### Main Mode

**Main Mode**は、[メインとなる演奏モード]{.marker}です。

一般的な他の音源と同じように、基本的には打ち込んだノートの高さの音が鳴ります。
[主にソロやリフを演奏する際に使用]{.marker}します。

#### Strummer Mode

Strummer Modeは、[コード弾き専用のモード]{.marker}です。

コードを指定した後にストローク方法を指定することでコードを演奏することができます。
[ストローク演奏をする場合に使用]{.marker}します。

### Playing Mode

**Playing Mode**では、単音/複数音の指定ができます。

以下のように、**STANDARD MODE**と**KEYBOARD MODE**と**SOLO MODE**の3つのモードがあります。

| モード        | 複数音 | 同一弦での複数ノートの発音 |
| ------------- | ------ | -------------------------- |
| STANDARD MODE | ⭕     | ❌                         |
| KEYBOARD MODE | ⭕     | ⭕                         |
| SOLO MODE     | ❌     | ❌                         |

### Capo Logic Mode

**Capo Logic Mode**では、フレットポジションの自動調整機能のモードを変更します。
Capo Logic Modeを変更することで、自動調整されるフレットポジションの幅が変わります。

以下のように**メロディモード**と**コードモード**があります。

| モード         | フレットポジションの幅 |
| -------------- | ---------------------- |
| メロディモード | 2オクターブ            |
| コードモード   | コードモード           |

## Ample Guitarの注意点

Ample Guitarを使っていると、狙った音が鳴らないことが多くあります。
私が実際に使っていて、詰まったポイントと解決策について記載します。

### 指定した音が鳴らない

Ample Guitarは[UI上で変更できる設定をキースイッチによっても変更できる仕様]{.marker}になっています。
そのため、思いがけず設定値を変更した可能性があります。

特に多いのが、[Strummer Mode]{.marker}（C#6：Velが64以上でON、63以下でオフ）がオン/オフに変わってしまった場合です。

Strummer Modeでは、置いたノートの高さの音はそのままなりません。
Strummer Modeがオンになっているかは、Strummerパネルの左下にある電源ボタンで確認できます。

誤入力を防ぎたい場合は、ノートの最初にあらかじめStrummer Modeののキースイッチを入れておくのもいいかもしれません。

### 音がぼやける

Ample Guitarは[デフォルトでエフェクトがオン]{.marker}になっています。
FXパネルを開いてエフェクトがかかっているかを確認できます。

他のアンプシミュレータやエフェクトを使用する場合は、不要なエフェクトをオフにしましょう。

### 複数音を鳴らしたときに前に鳴らした音が消える

Ample Guitarには複数音をどのように鳴らすかを決めるPlaying Modeがあります。
詳しくは[Playing Mode](#playing-mode)に記載しています。

打ち込んだノートをそのまま鳴らしたい場合は、**KEYBOARD MODE**にしましょう。

### ベンドが一つの音にしか適用されない

複数音が鳴っているときにピッチベンドを変更した場合、[デフォルトでは一番低い音だけにピッチベンドが適用]{.marker}されます。
`設定`パネルの`システム`タブにある`Poly Bend`にチェックを入れると、全ての音にピッチベンドが適用されます。

### 指定したコードがならない

Strummer Modeを使用する際に、コードの指定とカッティングを指定するノートが同時のタイミングで打ち込まれていると、[コードの指定が間に合わずに前のコードの音がなる場合があります]{.marker。
この場合は、コード指定のノートをカッティング指定のノートより前に配置すると改善します。

この問題は、Ample Guitar LPで発生しましたが、Ample Guitar Tでは発生しませんでした。
音源によって仕様が異なるのかもしれません。

### Detectモードでオンコードの指定ができない

Detectモードでは、`C1`~`B1`の範囲でルート音も指定できる仕様になっています。

ただし、ルート音の指定はコード指定よりも後に行う必要があります。
ルート音を指定するときは、コード指定よりも少し前のタイミングにずらしましょう。

<!-- ### リリースタイム

リリースを調整する -->

## まとめ

この記事では、Ample Guitarのモードと注意点についてまとめました。

Ample Guitarは注意点も多いですが、使いこなすと非常にリアルな音を鳴らせる音源です。
この記事が参考になれば幸いです。

:affiliate-block{title="AMPLE SOUND AMPLE GUITAR 7 IN 1 ELECTRIC BUNDLE" imageUrl="https://m.media-amazon.com/images/I/41Ept0BjUEL._SL160_.jpg" asin="B0CK5J1KMR"}

:affiliate-block{title="AMPLE SOUND AMPLE GUITAR 5 IN 1 ACOUSTIC BUNDLE" imageUrl="https://m.media-amazon.com/images/I/51C3FjU2oDL._SL160_.jpg" asin="B0BR4ZS19T"}

:affiliate-block{title="AMPLE SOUND AMPLE GUITAR TC III" imageUrl="https://m.media-amazon.com/images/I/51pk40RVJAL._SL160_.jpg" asin="B0BR4ZSY4V"}

:affiliate-block{title="AMPLE SOUND AMPLE GUITAR SC III" imageUrl="https://m.media-amazon.com/images/I/51CLOuxm8uL._SL160_.jpg" asin="B0BR4XS8MP"}

:affiliate-block{title="AMPLE SOUND AMPLE GUITAR LP III" imageUrl="https://m.media-amazon.com/images/I/51qDhBQdg3L._SL160_.jpg" asin="B0BR4ZNMRJ"}

:affiliate-block{title="AMPLE SOUND AMPLE GUITAR T III" imageUrl="https://m.media-amazon.com/images/I/51+KOJelfxL._SL160_.jpg" asin="B0BR524T3Y"}
