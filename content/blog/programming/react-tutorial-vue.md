---
createdAt: "2024/06/22"
updatedAt:
title: "React公式チュートリアルをVueでも書いて比較してみた"
description: "React公式チュートリアルをVueで書いて、コードを比較してみます。"
category: "システム開発"
subCategory: ""
tags:
  - "React.js"
  - "Vue.js"
thumbnail: "https://img.blog.ashcolor.jp/img/pc/programming_react-vue_react-vue.webp"
isRecommend: true
---

## はじめに

**React**と**Vue**はどちらも人気の[JavaScriptライブラリ/フレームワーク]{.marker}です。
それぞれメリット・デメリットがあり、フロントエンドの技術選定の際にどちらを採用するか悩むことも多いと思います。

この記事では、[Reactの公式チュートリアルである「三目並べ」をVueでも書いてみて、ReactとVueのコードを比較]{.marker}してみます。

Reactの公式チュートリアルはこちらです。

:link-card{url="https://ja.react.dev/learn/tutorial-tic-tac-toe"}

![Reactの公式チュートリアル 三目並べ](https://img.blog.ashcolor.jp/img/pc/programming_react-vue_tic-tac-toe.webp)

## 作成したコードについて

チュートリアル内ではJavaScriptは単一ファイルになっていますが、今回は比較しやすくするためにReactもVueも[コンポーネントごとにファイルを分けます]{.marker}。

[ReactはCodeSandbox、VueはVue SFC Playground]{.marker}にコードを置いているので、すぐに動作確認できます。

### バージョン

コーディング時のバージョンは以下の通りです。

| フレームワーク | バージョン |
| -------------- | ---------- |
| react          | 18.3       |
| Vue            | 3.4        |

### Reactのコード

[CodeSandbox](https://codesandbox.io/s/react-dev-forked-5vnlg5)

### Vueのコード

[Vue SFC Playground](https://play.vuejs.org/#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)

## コード比較

コンポーネントごとにコードを比較してみます。

### App.js/App.vue

**App.js/App.vue**は、[エントリーファイルとなるコンポーネント]{.marker}です。
ゲーム全体で使用する変数もここで定義しています。

#### Reactコード

```jsx[App.js]
import { useState } from "react";
import Board from "./Board";
import Moves from "./Moves";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          <Moves history={history} onMoveClick={jumpTo} />
        </ol>
      </div>
    </div>
  );
}
```

#### Vueコード

```vue[App.vue]
<script setup>
  import { ref, computed } from "vue";
  import Board from "./Board.vue";
  import Moves from "./Moves.vue";

  const history = ref([Array(9).fill(null)]);
  const currentMove = ref(0);
  const xIsNext = computed(() => {
    return currentMove.value % 2 === 0;
  });
  const currentSquares = computed(() => {
    return history.value[currentMove.value];
  });

  function handlePlay(nextSquares) {
    const nextHistory = [...history.value.slice(0, currentMove.value + 1), nextSquares];
    history.value = nextHistory;
    currentMove.value = nextHistory.length - 1;
  }

  function jumpTo(nextMove) {
    currentMove.value = nextMove;
  }
</script>

<template>
  <div className="game">
    <div className="game-board">
      <Board :xIsNext="xIsNext" :squares="currentSquares" @onPlay="handlePlay" />
    </div>
    <div className="game-info">
      <Moves :history="history" @onMoveClick="jumpTo" />
    </div>
  </div>
</template>
```

Reactで`useState`を使用している変数は、Vueでは`ref`を使用して定義しています。
また、計算して算出される値はVueでは`computed`を使用して定義しています。

HTMLの記述は[ReactではJSX]{.marker}、[VueではHTMLベースのテンプレート構文]{.marker}になっています。

### Board.js/Board.vue

**Board.js/Board.vue**は、[三目並べの盤面を定義するコンポーネント]{.marker}です。

#### Reactコード

```jsx[Board.js]
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
```

#### Vueコード

```vue[Board.vue]
<script setup>
  import { computed } from "vue";
  import Square from "./Square.vue";

  const props = defineProps({
    xIsNext: Boolean,
    squares: Array,
  });

  const emit = defineEmits(["onPlay"]);

  const winner = computed(() => calculateWinner(props.squares));

  const status = computed(() => {
    if (winner.value) {
      return "Winner: " + winner.value;
    } else {
      return "Next player: " + (props.xIsNext ? "X" : "O");
    }
  });

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (winner.value || props.squares[i]) {
      return;
    }
    const nextSquares = props.squares.slice();
    if (props.xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    emit("onPlay", nextSquares);
  }
</script>

<template>
  <div class="status">{{ status }}</div>
  <div class="board-row">
    <Square :value="props.squares[0]" @onSquareClick="() => handleClick(0)" />
    <Square :value="props.squares[1]" @onSquareClick="() => handleClick(1)" />
    <Square :value="props.squares[2]" @onSquareClick="() => handleClick(2)" />
  </div>
  <div class="board-row">
    <Square :value="props.squares[3]" @onSquareClick="() => handleClick(3)" />
    <Square :value="props.squares[4]" @onSquareClick="() => handleClick(4)" />
    <Square :value="props.squares[5]" @onSquareClick="() => handleClick(5)" />
  </div>
  <div class="board-row">
    <Square :value="props.squares[6]" @onSquareClick="() => handleClick(6)" />
    <Square :value="props.squares[7]" @onSquareClick="() => handleClick(7)" />
    <Square :value="props.squares[8]" @onSquareClick="() => handleClick(8)" />
  </div>
</template>
```

コンポーネントの引数は、[ReactではJavaScriptの関数と同じように記載]{.marker}できますが、[Vueは`defineProps`と`defineEmits`という構文で記載]{.marker}する必要があります。

### Square.js/Square.vue

**Square.js/Square.vue**は、[三目並べの盤面内のそれぞれのマスを定義するコンポーネント]{.marker}です。

#### Reactコード

```jsx[Square.js]
export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

#### Vueコード

```vue[Square.vue]
<script setup>
  const props = defineProps({
    value: String,
  });

  const emit = defineEmits(["onSquareClick"]);
</script>

<template>
  <button className="square" @click="emit('onSquareClick')">{{ props.value }}</button>
</template>
```

こちらもコンポーネントの引数の定義方法に差があります。

### Moves.js/Moves.vue

**Moves.js/Moves.vue**は、[ゲーム履歴の表示と履歴へ遷移するためのボタンを表示するコンポーネント]{.marker}です。

#### Reactコード

```jsx[Moves.js]
export default function Moves({ history, onMoveClick }) {
  return history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => onMoveClick(move)}>{description}</button>
      </li>
    );
  });
}
```

#### Vueコード

```vue[Moves.vue]
<script setup>
  import { computed } from "vue";

  const props = defineProps({
    history: Array,
  });

  const emit = defineEmits(["onMoveClick"]);

  const moves = computed(() => {
    return props.history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = "Go to move #" + move;
      } else {
        description = "Go to game start";
      }
      return { description, move };
    });
  });
</script>

<template>
  <ul>
    <li v-for="({ description, move }, index) in moves" :key="index">
      <button @click="emit('onMoveClick', move)">{{ description }}</button>
    </li>
  </ul>
</template>
```

[Reactは任意の位置でJSXを記載できる]{.marker}ため、簡潔なコードになっています。

`Moves.js/Moves.vue`内のボタンをクリックすると、`App.js/App.vue`の`currentMove`の値が変更されて、過去の手番に戻ります。
上記のコードではどちらも親コンポーネントの関数を子コンポーネントで実行することによって親コンポーネントの変数を変更しています。

##### Vueの双方向バインディングについて

Vueの場合は[双方向バインディングが可能]{.marker}なため、別の記載方法も考えられます。
`v-model`と`defineModel`を使用すると子コンポーネント側で親コンポーネント側の変数を直接変更できます。

以下がコードの例です。

```diff[App.vue]
...
- function jumpTo(nextMove) {
-   currentMove.value = nextMove;
- }
...
-         <Moves :history="history" @onMoveClick="jumpTo" />
+         <Moves :history="history" v-model="currentMove" />
...

```

```diff[Moves.vue]
...
- const emit = defineEmits(['onMoveClick'])
+ const currentMove = defineModel()
...
+ function onClick(nextMove) {
+   currentMove.value = nextMove;
+ }
...
-       <button @click="emit('onMoveClick', move)">
+       <button @click="onClick(move)">
...
```

双方向バインディングはメリット・デメリットがあるため、実際に使うかは検討が必要です。

## React/Vueのコードの違いを考察

ReactとVueのコードを比較して分かった[両者の特徴]{.marker}を記載してみます。

### React

::point-list{title="Reactの特徴" list-style="👍"}

- コンポーネントの引数は関数の引数としてシンプルに記述できる
- JavaScript内の任意の箇所でHTML（JSX）を記載できる

::

### Vue

::point-list{title="Vueの特徴" list-style="👍"}

- JavaScriptとHTMLの境界が分かりやすい
- HTMLのテンプレート構文がHTMLに似ているため理解しやすい

::

コードを比較してみると、[ReactはJavaScriptが軸]{.marker}となっており、[VueはHTMLを軸]{.marker}としている印象を受けました。
プロジェクトやメンバーの技術スタックが、[JavaScriptとHTMLどちらに寄っているかも選定の基準の一つとするのもあり]{.marker}かもしれません。

## まとめ

この記事では、Reactの公式チュートリアルである「三目並べ」をVueでも書いてみて、ReactとVueのコードを比較しました。
[ReactもVueもメリットがあるため、プロジェクトやメンバーに応じて選定を行うのが良さそう]{.marker}です。

参考になれば幸いです。
