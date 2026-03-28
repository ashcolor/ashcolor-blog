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
                <tr class="bg-accent text-accent-content">
                    <td>C1-B2</td>
                    <td>Selectモード：コードスロット選択<br />Detectモード：コード検出</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>C3</td>
                    <td>リズム・パターン 1</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>C#3</td>
                    <td>リズム・パターン 2</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>D3</td>
                    <td>ピッキング 6弦</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>D#3</td>
                    <td>リズム・パターン 3</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>E3</td>
                    <td>ピッキング 5弦</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>F3</td>
                    <td>ピッキング 4弦</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>F#3</td>
                    <td>リズム・パターン 4</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>G3</td>
                    <td>ピッキング 3弦</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>G#3</td>
                    <td>リズム・パターン 5</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>A3</td>
                    <td>ピッキング 2弦</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>A#3</td>
                    <td>リズム・パターン 6</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>B3</td>
                    <td>ピッキング 1弦</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>C4</td>
                    <td>ダウン・ストラム</td>
                    <td>
                        Vel 1-63：4～6弦<br />Vel 64-95：3～6弦<br />Vel 96-126：1～6弦<br />127：アップ・ストラム1～4弦
                    </td>
                </tr>
                <tr class="key-black">
                    <td>C#4</td>
                    <td>リズム・パターン 7</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>D4</td>
                    <td>ダウン・ストラム</td>
                    <td>
                        Vel 1-63：2～4弦<br />Vel 64-95：2～5弦<br />Vel 96-126：1～4弦<br />127：アップ・ストラム1～4弦
                    </td>
                </tr>
                <tr class="key-black">
                    <td>D#4</td>
                    <td>リズム・パターン 8</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>E4</td>
                    <td>アップ・ストラム</td>
                    <td>
                        Vel 1-31：2～4弦<br />Vel 32-63：1～3弦<br />Vel 64-95：1～4弦<br />Vel
                        96-126：1～6弦
                    </td>
                </tr>
                <tr class="key-white">
                    <td>F4</td>
                    <td>ミュート・ボイス1</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>F#4</td>
                    <td>ミュート・ボイス2</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>G4</td>
                    <td>ダウン・ミュートストラム</td>
                    <td>Vel 1-63：4～6弦<br />Vel 64-95：3～6弦<br />Vel 96-126：1～6弦</td>
                </tr>
                <tr class="key-black">
                    <td>G#4</td>
                    <td>なし</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>A4</td>
                    <td>ダウン・ミュートストラム</td>
                    <td>Vel 1-63：2～4弦<br />Vel 64-95：2～5弦<br />Vel 96-126：1～4弦</td>
                </tr>
                <tr class="key-black">
                    <td>A#4</td>
                    <td>なし</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>B4</td>
                    <td>アップ・ミュートストラム</td>
                    <td>
                        Vel 1-31：2～4弦<br />Vel 32-63：1～3弦<br />Vel 64-95：1～4弦<br />Vel
                        96-126：1～6弦
                    </td>
                </tr>
                <tr class="key-white">
                    <td>C5</td>
                    <td>なし</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>C#5</td>
                    <td>Set Strum Time</td>
                    <td>ストローク時間の設定<br />ベロシティーが高いほど、時間が短くなる</td>
                </tr>
                <tr class="key-white">
                    <td>D5</td>
                    <td>Chord Mode キースイッチ</td>
                    <td>Vel 1-63：Selectモード<br />Vel 64-127：Detectモード</td>
                </tr>
            </tbody>
        </table>
    </ClientOnly>
</template>
