---
createdAt: "2023/08/01"
updatedAt:
title: "【Python】Cloud StorageにアップロードするオブジェクトのCache-Controlを変更する"
description: "PythonでCloud StorageにアップロードするオブジェクトのCache-Controlを変更する方法を解説します。"
category: "システム開発"
subCategory: "Cloud Storage"
tags:
  - "Python"
  - "Cloud Storage"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_cloud-storage-cache-control_ok.webp"
---

## 概要

PythonでCloud StorageにアップロードするオブジェクトのCache-Controlを変更する方法を記載します。

[公式のドキュメント](https://cloud.google.com/storage/docs/viewing-editing-metadata?hl=ja#edit)にPythonのサンプルコードがなく、詰まるポイントがあったので注意点についても解説します。

## 設定方法

### 全体のコード

```python [upload.py]
def main():
    _, temp_local_filename = tempfile.mkstemp()
    with codecs.open(temp_local_filename, 'w', 'utf_8') as f:
        f.write('テキスト')

    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = 'credencialsファイル名'
    client = storage.Client()
    bucket = client.get_bucket('バケット名')
    blob = bucket.blob('アップロード先ファイル名')
    blob.upload_from_filename(filename=temp_local_filename)
    blob.cache_control = 'no-cache'
    blob.patch()
    return "success"
```

### 正しい方法

```python [upload.py]
    blob.cache_control = 'no-cache'
    blob.patch()
```

設定されているか確認します。

```bash
$ curl -v "https://storage.googleapis.com/バケット名/ファイル名" 2>&1 | grep -i Cache-Control
* h2 header: cache-control: no-cache
< cache-control: no-cache
```

![正しく設定されている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_cloud-storage-cache-control_ok.webp)

Cache-Controlがno-cacheになりました。

### 間違った方法

metadataには

- [固定キーデータ](https://cloud.google.com/storage/docs/metadata?hl=ja#mutable)
- [カスタムメタデータ](https://cloud.google.com/storage/docs/metadata?hl=ja#custom-metadata)

があり、Cache-Controlは固定キーデータにあたります。以下のコードはカスタムメタデータを設定するため、Cache-Controlが正常に設定されません。

```python [upload.py]
    blob.metadata['Cache-Control'] = 'no-cache'
```

どのように設定されているか確認します。

```bash
$ curl -v "https://storage.googleapis.com/バケット名/ファイル名" 2>&1 | grep -i Cache-Control
* h2 header: cache-control: public, max-age=3600
* h2 header: x-goog-meta-cache-control: no-cache
< cache-control: public, max-age=3600
< x-goog-meta-cache-control: no-cache
```

x-goog-meta-cache-controlに設定されてしまっています。

![間違った設定をされている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/programming_cloud-storage-cache-control_ng.webp)

コンソールで見ても本来のCache-Controlとは別項目に値が設定されています。

## まとめ

オブジェクトのCache-Controlを変更する方法について解説しました。
設定値はCLIやコンソールから確認することができるため、正しく設定されているか確認をしましょう。

## 参考

- [Setting Content-Encoding header for Cloud Storage Uploads with upload_from_file](https://github.com/googleapis/google-cloud-python/issues/3099)
