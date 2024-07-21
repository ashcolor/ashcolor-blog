<template>
    <!-- eslint-disable tailwindcss/no-custom-classname -->
    <ClientOnly>
        <table class="table table-xs my-8">
            <thead>
                <tr>
                    <th>キー</th>
                    <th>機能</th>
                    <th>備考</th>
                </tr>
            </thead>
            <tbody>
                <tr class="key-white">
                    <td>C0</td>
                    <td>サステイン</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>C#0</td>
                    <td>ナチュラル・ハーモニクス</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>D0</td>
                    <td>パーム・ミュート</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>D#0</td>
                    <td>スライドイン / スライドアウト</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>E0</td>
                    <td>レガート・スライド</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>F0</td>
                    <td>ハンマリングオン / プルオフ</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>F#0</td>
                    <td>スライドギター</td>
                    <td></td>
                </tr>
                <tr class="bg-slate-200 text-accent-content">
                    <td>-</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>F5</td>
                    <td>スクラッチ</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>F#5</td>
                    <td>スラップ・ノイズ</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>G5</td>
                    <td>サイレント・プレス</td>
                    <td>弦にそっと触れるノイズ<br />サステイン中のノートをミュート可能</td>
                </tr>
                <tr class="key-black">
                    <td>G#5</td>
                    <td>ストローク・ミュート</td>
                    <td>サステイン中のノートをミュート可能</td>
                </tr>
                <tr class="key-white">
                    <td>A5</td>
                    <td>ダウン・ストローク・ノイズ 1</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>A#5</td>
                    <td>アップ・ストローク・ノイズ 1</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>B5</td>
                    <td>ダウン・ストローク・ノイズ 2</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>C6</td>
                    <td>アップ・ストローク・ノイズ 2</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>C#6</td>
                    <td>Strummer Mode Toggle</td>
                    <td>
                        コード演奏を行うStrumモードのON/OFFを切り替え<br />Vel 1-63：OFF<br />Vel
                        64-127：ON
                    </td>
                </tr>
                <tr class="key-white">
                    <td>D6</td>
                    <td>Poly Repeater 1</td>
                    <td>発音中のノート、または直前に入力されたノートを繰り返し演奏</td>
                </tr>
                <tr class="key-black">
                    <td>D#6</td>
                    <td>Auto Legato Mode</td>
                    <td>
                        Auto Legato Mode Switch機能によるレガートの表現方法切替<br />Vel
                        1-63：Automatic Hammer On and Pull Off<br />Vel 64-127：Automatic Slide
                    </td>
                </tr>
                <tr class="key-white">
                    <td>E6</td>
                    <td>Poly Repeater 2</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>F6</td>
                    <td>
                        Electric Guitar：ピック・スクレイプ<br />Acoustic
                        Guitar：ヒット・トップ（オープン）<br />Metal Guitar：ピック・スクレイプ
                    </td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>F#6</td>
                    <td>
                        Electric Guitar：なし<br />Acoustic Guitar：ヒット・トップ（クローズ）<br />Metal
                        Guitar：FX スライド 1
                    </td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>G6</td>
                    <td>
                        Electric Guitar：なし<br />Acoustic Guitar：ヒット・リム<br />Metal
                        Guitar：FX スライド 2
                    </td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>G#6</td>
                    <td>Open String First</td>
                    <td>
                        開放弦を使用可能な場合に優先して使用<br />Open String
                        First機能のON/OFFを切り替え<br />Vel 1-63：OFF<br />Vel 64-127：ON
                    </td>
                </tr>
                <tr class="key-white">
                    <td>A6</td>
                    <td>Tab Player Toggle</td>
                    <td>
                        Tab Playerパネルに読み込まれているフレーズの再生/停止を切替<br />Vel
                        1-63：停止<br />Vel 64-127：再生
                    </td>
                </tr>
                <tr class="key-black">
                    <td>A#6</td>
                    <td>Riff Play Toggle</td>
                    <td>
                        Rifferパネルに読み込まれているフレーズの再生/停止を切替<br />Vel
                        1-63：停止<br />Vel 64-127：再生
                    </td>
                </tr>
                <tr class="key-white">
                    <td>B6</td>
                    <td>Capo Logic Mode</td>
                    <td>
                        フレットポジションを自動で調整するCAPO LOGIC機能のモードを設定<br />Vel
                        1-63：メロディモード<br />Vel 64-127：コードモード
                    </td>
                </tr>
            </tbody>
        </table>
    </ClientOnly>
</template>
