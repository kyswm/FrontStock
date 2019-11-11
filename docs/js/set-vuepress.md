---
title: VuePress の設定と機能追加一覧
date: 2019-11-11
description: VuePressのリファレンスの一部から使いそうな機能についてのまとめです
meta:
  - name: og:url
    content: https://mskyskw.com/js/index.html
  - name: og:type
    content: website
  - name: og:title
    content: VuePress の設定と機能追加一覧
  - name: og:description
    content: VuePressのリファレンスの一部から使いそうな機能についてのまとめです
  - name: og:image
    content: /og.png
---

# VuePress の設定と機能追加一覧

目次
[[toc]]

## 基本設定

サイト共通

- meta タグ
- OGP タグ
  ページごとに設定する系
- OGP タグ

- 記事冒頭にページ内目次
- サイドバーにページ内目次表示
- 日付（技術関連では重要）
- 単語のハイライト（薄グレーの）
- CodePen のようなサンプルコードと実行結果表示
- 記事内タグ
- タグ一覧
- SEO 関連
  - Google Analytics
- テーマカラーの変更（デフォルトは Vue の緑色）

[公式サイト](https://vuepress.vuejs.org/)

## なぜ VuePress を選んだか

## 基本的な導入手順

```sh{2}
# install
yarn global add vuepress
# OR npm install -g vuepress

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build
```

## 基本設定

- meta タグ
- OGP タグ
-

## 機能を追加してみる

### 入れたい機能

#### 最低限入れたい

- 記事冒頭にページ内目次
- サイドバーにページ内目次表示
- 日付（技術関連では重要）
- 単語のハイライト（薄グレーの）
- CodePen のようなサンプルコードと実行結果表示
- 記事内タグ
- タグ一覧
- SEO 関連
  - Google Analytics

#### 今後できれば入れたい

- テーマカラーの変更（デフォルトは Vue の緑色）

## つまづいた点

ディレクトリ構造
マークダウンをそこまで使い慣れていなかったので、純粋なマークダウン記法と VuePress の追加的機能を見分けること

## 作成してみて感じたこと

ちゃんと機能を把握しようと思うと英語のリファレンスを読む必要

## 運用してみて感じたこと

### 移行のしやすさについて

VuePress には Markdown-it が使われている点
TOC（目次）？
VuePress は Prism.js を使っていて、コードブロックのシンタックスハイライトが可能です

## 参考にさせていただいたサイト
