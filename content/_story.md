<!-- markdownlint-disable MD001 MD018 MD024 -->

# マークダウン一覧

## Nuxt Content

### 見出し1

::preview-and-code
#preview

# 見出し1

#code

```markdown
# 見出し1
```

::

### 見出し2

::preview-and-code
#preview

## 見出し2

#code

```markdown
## 見出し2
```

::

### 見出し3

::preview-and-code
#preview

### 見出し3

#code

```markdown
### 見出し3
```

::

### 見出し4

::preview-and-code
#preview

#### 見出し4

#code

```markdown
#### 見出し4
```

::

### 見出し5

::preview-and-code
#preview

##### 見出し5

#code

```markdown
##### 見出し5
```

::

### 見出し6

::preview-and-code
#preview

###### 見出し6

#code

```markdown
###### 見出し6
```

::

### リンク

::preview-and-code
#preview

[リンク](https://example.com)

#code

```markdown
[リンク](https://example.com)
```

::

### 引用ブロック

::preview-and-code
#preview

> Block quote

#code

```markdown
> Block quote
```

::

### コード

::preview-and-code
#preview

```js [file.js]{4-6,7} meta-info=val
export default () => {
  console.log("Code block");
};
```

#code

````markdown
```js [file.js]{4-6,7} meta-info=val
export default () => {
  console.log("Code block");
};
```
````

::

### インラインコード

::preview-and-code
#preview

`code inline`.

`const codeInline: string = 'highlighted code inline'`{lang="ts"}

#code

```markdown
`code inline`.

`const codeInline: string = 'highlighted code inline'`{lang="ts"}
```

````

::

### 区切り線

::preview-and-code
#preview

Divider under.

---

Divider above.

#code

```markdown
Divider under.

---

Divider above.
```

::

### 画像

::preview-and-code
#preview

![A Cool Image](https://placehold.jp/300x300.png)

#code

```markdown
![A Cool Image](https://placehold.jp/300x300.png)
```

::

### 順序なしリスト

::preview-and-code
#preview

- Just
- An
- Unordered
- List

#code

```markdown
- Just
- An
- Unordered
- List
```

::

### リストアイテム

::preview-and-code
#preview

- List element

#code

```markdown
- List element
```

::

### 順序ありリスト

::preview-and-code
#preview

1. Foo
2. Bar
3. Baz

#code

```markdown
1. Foo
2. Bar
3. Baz
```

::

### 段落

::preview-and-code
#preview

Just a paragraph.

#code

```markdown
Just a paragraph.
```

::

### 太字

::preview-and-code
#preview

**Just a strong paragraph.**

#code

```markdown
**Just a strong paragraph.**
```

::

### 強調

::preview-and-code
#preview

_Just an italic paragraph._

#code

```markdown
_Just an italic paragraph._
```

::

### テーブル

::preview-and-code
#preview

| Key | Type      | Description |
| --- | --------- | ----------- |
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |

#code

```markdown
| Key | Type      | Description |
| --- | --------- | ----------- |
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |
```

::

## ユーザ定義

### マーカー

::preview-and-code
#preview

[マーカー]{.marker}を引く

#code

```markdown
[マーカー]{.marker}を引く
```

::

### コールバック

::preview-and-code
#preview

::call-out{type=info}

コールバック文章。

::

#code

```markdown
::call-out{type=info}

コールバック文章。

::
```

::

### ニコニコ動画

::preview-and-code
#preview

:niconico-iframe{videoId=sm2500648 title=【鏡音リン】　ココロ　【オリジナル曲】}

#code

```markdown
:niconico-iframe{videoId=sm2500648 title=【鏡音リン】　ココロ　【オリジナル曲】}
```

::

### YouTube

::preview-and-code
#preview

:you-tube-iframe{videoId=0TvZfxBh1dU title="ashcolor - Re:Re: feat.Hatsune Miku, Megurine Luka"}

#code

```markdown
:you-tube-iframe{videoId=0TvZfxBh1dU title="ashcolor - Re:Re: feat.Hatsune Miku, Megurine Luka"}
```

::

### ポイントリスト

::preview-and-code
#preview

::point-list{title=ポイントリスト listStyle=・}

- 項目1
- 項目2
- 項目3

::

#code

```markdown
::point-list{title=ポイントリスト listStyle=・}

- 項目1
- 項目2
- 項目3

::
```

::

### アフィリエイトブロック

::preview-and-code
#preview

:affiliate-block{title="IKEA(イケア) LAGKAPTEN テーブル ホワイト" asin="B09196WS7C"}

#code

```markdown
:affiliate-block{title="IKEA(イケア) LAGKAPTEN テーブル ホワイト" asin="B09196WS7C"}
```

::

### リンクカード

::preview-and-code
#preview

:link-card{url="https://github.com/ashcolor/ashcolor-blog"}

#code

```markdown
:link-card{url="https://github.com/ashcolor/ashcolor-blog"}
```

::

```

```
````
