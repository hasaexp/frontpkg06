Web FrontEnd Package for LP (Vue.js version)
====

LP(ランディングページ)を作るためのwebpackパッケージです。

## Description
パッケージの中身は以下のとおりです。  

- Pug
- Sass
- Vue.js(単一ファイルコンポーネントも使えます)
- Babel
- ESLint
- 51.2KB未満の画像ファイルはDataUrl形式で埋め込み
- ビルド時にURL関数の値を絶対URLに書き換え
- ビルド時にdistフォルダを自動クリーンアップ
- フォントのバンドル

## Requirement
当パッケージを使うにはNode.js(npm)のインストールが必要です。  
<a href="https://nodejs.org/ja/" target="_blank">Node.jsの公式ページ</a>

## Usage
```
$ npm run start # webpack-dev-serverが起動。こちらで開発します。
$ npm run build # 公開用データをdistフォルダに生成します。
```
npm run buildを実行するとURL関数をリライトします。URLを適宜変更してください。

## Install
ファイルをダウンロードしたら、以下のコマンドでインストールしてください。
```
$ npm install
```