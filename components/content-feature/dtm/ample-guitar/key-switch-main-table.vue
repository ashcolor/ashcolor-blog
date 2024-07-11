<template>
    <!-- eslint-disable tailwindcss/no-custom-classname -->
    <ClientOnly>
        <table class="table table-xs">
            <thead>
                <tr>
                    <th>キー</th>
                    <th>機能</th>
                    <th>備考</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-accent text-accent-content">
                    <td>E1-D5</td>
                    <td>指定されたノートを発音</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>G0</td>
                    <td>String Force 6弦</td>
                    <td>ノートを演奏する際に使用する弦を指定</td>
                </tr>
                <tr class="key-black">
                    <td>G#0</td>
                    <td>String Force 5弦</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>A0</td>
                    <td>String Force 4弦</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>A#0</td>
                    <td>String Force 3弦</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>B0</td>
                    <td>String Force 2弦</td>
                    <td></td>
                </tr>
                <tr class="key-white">
                    <td>C1</td>
                    <td>String Force 1弦</td>
                    <td></td>
                </tr>
                <tr class="key-black">
                    <td>C#1</td>
                    <td>Capo Force</td>
                    <td>
                        演奏に使用するフレットポジションを指定<br />C#1入力後にE1-A#2を入力して指定
                    </td>
                </tr>
            </tbody>
        </table>
    </ClientOnly>
</template>
