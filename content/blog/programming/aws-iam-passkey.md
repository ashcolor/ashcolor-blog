---
createdAt: "2024/08/22"
updatedAt: ""
title: "AWS IAMでPasskeyが利用可能に Windows PCで指紋認証を設定してみました"
description: "AWS IAMでPasskeyが利用可能になりました。Windows PCで指紋認証を設定してみたので解説します。"
category: "プログラミング"
subCategory: "AWS"
tags:
  - "AWS"
  - "Windows"
thumbnail: "https://d2s4ypph6g1t06.cloudfront.net/img/pc/2024-08-22_11-12-41_nvre36gj.webp"
isRecommend: true
---

## はじめに

2024年6月11日、[AWS IAMの2番目の認証要素としてパスキーをサポート]{.marker}しました。

:link-card{url="https://aws.amazon.com/jp/about-aws/whats-new/2024/06/aws-identity-access-management-passkey-authentication-factor/"}

これで、Apple MacBookの**Touch ID**やWindowsの**Windows Hello**などの組み込み認証がサポートされ、[認証要素として指紋、顔、デバイスPINを使用することができます]{.marker}。

::call-out{type="info"}

パスキー対応の発表当時はWindows Helloによる設定でエラーが発生していましたが、8/20時点で解消されていることを確認しました。

::

今までは「認証アプリケーション」か「ハードウェア TOTP トークン」が必要だったため認証が面倒でした。
指紋認証や顔認証がサポートされたことで、ログインが楽になりました。

## 設定方法

今回は**Windows Hello**の**指紋認証**を設定します。

## 指紋認証リーダー

**指紋認証リーダー**が必要になるため、先に用意しておきます。
私は以下の製品を使用しました。

:affiliate-block{title="サンワダイレクト USB 指紋認証リーダー 400-FPRD1" imageUrl="https://m.media-amazon.com/images/I/41YplL53H5L._SL160_.jpg" asin="B09LHCBN3S"}

延長ケーブルを使用すると、好きな場所に配置できるので便利です。

:affiliate-block{title="UGREEN USB 延長ケーブル USB3.0 2.0M" imageUrl="https://m.media-amazon.com/images/I/412S9bYqWXL._SL160_.jpg" asin="B086ZJB2JN"}

### Windowsの設定

Windows側の設定をします。

1. Windowsの`設定`→`アカウント`→`サインイン オプション`を開く

   ![サインイン オプション](https://d2s4ypph6g1t06.cloudfront.net/img/pc/2024-08-22_11-14-36_ini076zj.webp)

1. `指紋認証 (Windows Hello)`の項目の`セットアップ`をクリック

1. 画面の指示に従って指紋を登録

### AWSの設定

1. MFAを設定したいアカウントでログインした状態で右上の`ユーザ名`→`セキュリティ認証情報`の順にクリック

1. `多要素認証 (MFA)`の項目に右側にある`MFAデバイスの割り当て`をクリック

1. デバイス名を入力、MFA deviceに`パスキーまたはセキュリティキー`が選択されていることを確認して`次へ`をクリック

   ![デバイスオプション `パスキーまたはセキュリティキー`が追加されている](https://d2s4ypph6g1t06.cloudfront.net/img/pc/2024-08-22_11-12-41_nvre36gj.webp)

1. `Windows セキュリティ`ウィンドウが表示されるので、`指紋`が選択されていることを確認して指紋認証リーダーにタッチ

   ![Windows セキュリティ](https://d2s4ypph6g1t06.cloudfront.net/img/pc/2024-08-22_11-42-42_0rgu010w.webp)

1. `保存されたパスキー`ウィンドウが表示されたら、`OK`をクリック

### ログイン

1. 通常通りユーザ名（またはメールアドレス）とパスワードを入力してログイン

1. `Windows セキュリティ`ウィンドウが表示されたら`指紋`が選択されていることを確認して指紋認証リーダーにタッチ

これで指紋認証によるログインができるようになりました。

## 補足

### 顔認証

パスキーでは**顔認証**の設定も可能です。

ただし、[顔認証を使用するにはIR対応のカメラが必要]{.marker}となります。
IR対応のカメラは種類が少なく、私が普段使用しているWebカメラも対応していませんでした。

IR対応のカメラは以下のようなものがあります。

:affiliate-block{title="エレコム WEBカメラ UCAM-CF20FBBK" imageUrl="https://m.media-amazon.com/images/I/41ZU3PnNaDL._SL160_.jpg" asin="B08TG5SBH7"}

Macbookに関してもFace IDに対応していないことを考えると、別途IR対応のWebカメラが必要と思われます。
