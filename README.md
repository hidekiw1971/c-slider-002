# module（共通部品）

## js slider

- javascript で標準スライダーを作成

## イメージ画像

<img width="424" alt="image" src="https://user-images.githubusercontent.com/99580997/156355990-e9dc09cf-5298-4c49-b468-51b60bb339b4.png">

## portfolio url:

- https://css-md-0015.wtb.cfbx.jp/

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> xxx をコピペ。

## 注意事項

- sp 版のみ作成なので、sp size で確認して下さい。

## 参考にしたサイト

- 【2021 年版】favicon（ファビコン）の設定方法と画像の作り方
- https://zenn.dev/pacchiy/articles/e4dcd7bd29d387
- Favicon ジェネレーターについて
- https://favicon-generator.mintsu-dev.com/

## 更新履歴

- 2022/3/7 リポジトリ名変更(js-slider-001 -> c-slider-002)
- 2022/3/3 初版 ノーマル版作成完了（tb size 版を作成したが、レスポンシブ対応ができてない。js 側で対応するのはかなり面倒？どうするのだろうか？）
- 2022/3/2 初版 ノーマル版作成完了（sp size 版 pre、next ボタン追記）
- 2022/3/2 初版 ノーマル版作成完了（sp size 版）

## 環境・使い方

- ダウンロードしたフォルダを開く
- ターミナルを開き、 npm i とコマンドを入力
- node_modules と package-lock.json が生成されるのを確認する
- 「 npx gulp 」とコマンドを入力すると動き出します

## 仕様

- 自動スクロール
- pre、next ボタン付き

## 備考

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
