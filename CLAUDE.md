# MOMENTUM — 開発ガイド

## プロジェクト概要
足立 開（Adachi Kai）の自己管理PWA「MOMENTUM」。
日記・クエスト・習慣・タスク・目標・ポモドーロタイマーを一元管理する。

- **本番URL**: https://life-taracker.web.app
- **GitHub**: https://github.com/Adakai87/momentum
- **構成**: index.html 1ファイルにHTML/CSS/JS全部入り（約11000行）。ビルドシステムなし。

---

## デプロイ（編集後は必ずこれ）
```bash
cp index.html www/index.html
firebase deploy --only hosting
```

## GitHubへpush
```bash
git add index.html www/index.html
git commit -m "変更内容"
git push
```

---

## 技術スタック
- Firebase Hosting / Firestore / Auth（Googleログイン）
- lucide icons、Chart.js（CDN）
- CSSカスタムプロパティ: `--accent` `--surface` `--border` `--text-muted` など

---

## アーキテクチャ

### データ
- `state` オブジェクトがアプリ全体のデータを保持
- `save(type)` → localStorage + Firestore に自動保存
- キー名はすべて `lft_` プレフィックス

### 主要関数
| 関数 | 役割 |
|---|---|
| `renderDashboard()` | ダッシュボード再描画 |
| `renderPomodoro()` | ポモドーロタイマー描画 |
| `renderQuest()` | クエストタブ描画 |
| `completeDaily(id, btn)` | クエスト完了・XP付与 |
| `getTodayFocusQuests(qd, today)` | 今日の3択フォーカス取得 |
| `buildFocusHero(...)` | フォーカスカードHTML生成 |
| `showXpPopupV2(el, xp, skill, color)` | XPポップアップ＋パーティクル |
| `save(type)` | データ保存（localStorage + Firestore） |

---

## 現在の主な機能

### ダッシュボード
- モーニングヒーロー（挨拶・日付・今日の進捗リング）
- ポモドーロ + 今日のフォーカス 横並びグリッド
- 習慣クイックチェック（ピル形式）
- KPI行・スキル・習慣チェーン・ウォッチリスト

### クエスト
- 今日の3択フォーカス（日別自動選択・再抽選機能）
- スキル別XP・レベルアップシステム
- XPポップアップv2（パーティクル演出）

### ポモドーロタイマー
- 140px大型リング・縦レイアウト
- フォーカスカードと同じ高さに揃えている（`height:100%`）
- 集中25分 / 休憩5分（可変）

---

## CSS注意点
- **`.fpd`（進捗ドット）**: 未完了クラスは `fpd-empty`。`empty` はグローバルCSSと衝突するので使わない
- **`.pom-card`**: `height:100%; box-sizing:border-box` でグリッドセルいっぱいに伸ばしている
- **`#pomodoro-root`**: `display:flex; flex-direction:column; height:100%` が必要
- **`.dash-pom-focus`**: `grid-template-columns:1fr 1fr` でポモドーロとフォーカスを横並び

---

## 行動指針
- 確認は最小限。軽微な変更は報告のみでOK
- 編集 → `cp index.html www/index.html && firebase deploy` まで自律的に進める
- デプロイ後は必ずブラウザで動作確認する
