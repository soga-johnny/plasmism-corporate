# プラズミズム株式会社 コーポレートサイト

このリポジトリは、プラズミズム株式会社のコーポレートサイトのソースコードを管理しています。Next.jsをベースにした最新のウェブ技術を活用し、パフォーマンスと視覚的体験に優れたコーポレートサイトを構築しています。

## 🚀 プロジェクト概要

このコーポレートサイトは、「豊かな毎日を、コンピューターと情報表現で、真摯にデザインする」というミッションを持つプラズミズム株式会社の公式ウェブサイトです。

私たちは「設計 → 実装 → 検証 → 改良」という4つのプロセスを短いスパンで繰り返し、クライアントの課題に対する最適解をデザインします。7つの価値観（「過去には戻れない」「どこにも敵はいない」「意志は盗まれない」「知識は裏切らない」「ほとんどが伝わらない」「良いものは多くない」「可能性は尽きない」）を柱に、デジタルとの共存を追求し、自律的なシステム構築による課題解決に取り組んでいます。

3Dアニメーションや洗練されたUIを通じて企業ブランドを視覚的に表現し、少数精鋭だからこそ実現できる、再現性のある戦略的アプローチを提案します。

## 💻 技術スタック

- **フレームワーク**: [Next.js 15](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **UIライブラリ**: [React 19](https://react.dev/)
- **スタイリング**: [Tailwind CSS 4](https://tailwindcss.com/)
- **アニメーション**: 
  - [Framer Motion](https://www.framer.com/motion/)
  - [Three.js](https://threejs.org/) / [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- **外部サービス連携**:
  - [Notion API](https://developers.notion.com/) - コンテンツ管理
  - [AWS SES](https://aws.amazon.com/ses/) - メール送信
  - [Vercel Analytics](https://vercel.com/analytics) - 分析
- **デプロイ**: [Vercel](https://vercel.com/)

## 🔮 3Dキューブアニメーション実装詳細

サイト全体のブランドアイデンティティを表現する3Dキューブアニメーションは、Three.js と React Three Fiber を使用して実装されています。主要な特徴は以下の通りです：

### メインページの変形キューブ (CubeObject.tsx)
- **スクロール連動アニメーション**: スクロール進行度に基づいた3段階の変形アニメーション
  - ステージ1: 単一の反射キューブ（初期表示）
  - ステージ2: 動的なマテリアル変化と回転
  - ステージ3: 複数の小さなキューブに分割
- **マテリアルの段階的変化**: `MeshPhysicalMaterial`と`MeshStandardMaterial`を使用し、透過性、反射率、金属感などのプロパティを動的に変更
- **InstancedMesh**: パフォーマンス最適化のため、ステージ3では複数のキューブを効率的に描画
- **レスポンシブデザイン**: デバイスサイズに応じたアニメーション調整
- **正規化されたスクロール進行度**: ステージ間のスムーズな遷移

```typescript
// スクロール進行度を正規化するヘルパー関数
const normalizeProgress = (progress: number, start: number, end: number) => {
  if (progress < start) return 0;
  if (progress > end) return 1;
  if (end === start) return 0;
  return (progress - start) / (end - start);
};
```

### 特徴ページのキューブ群 (FeatureCube.tsx)
- **複数キューブの配置**: 4つのキューブを配置し、会社の4つのプロセスを視覚的に表現
- **浮遊アニメーション**: 時間に基づいた正弦波による浮遊効果
- **独立した回転**: 各キューブが独自の回転を持ち、グループ全体も回転
- **レスポンシブ調整**: 画面サイズに応じたスケーリングと位置調整

### 会社概要ページのキューブ (AboutCube.tsx)
- **反射効果**: 会社のアイデンティティを表現する特殊な光学的効果を持つ半透明キューブ
- **固定スケール**: ページコンテンツと調和した適切なサイズ設定
- **環境マッピング**: 現実的な反射のための環境マッピング

### 共通の最適化手法
- **レンダリング品質の最適化**: `dpr`設定による解像度調整
- **ジオメトリの再利用**: `RoundedBoxGeometry`の効率的な使用
- **ポストプロセッシング**: `EffectComposer`と`Noise`エフェクトによる視覚的深み
- **ロード進捗管理**: `useProgress`と`useLoadingStore`によるローディング状態の追跡

## 📁 プロジェクト構成

```
src/
├── app/                     # Next.js Appルーター
│   ├── page.tsx             # ホームページ
│   ├── layout.tsx           # ルートレイアウト
│   ├── globals.css          # グローバルスタイル
│   ├── about/               # 会社概要ページ
│   ├── service/             # サービスページ
│   ├── product/             # 製品ページ
│   ├── feature/             # 特徴ページ
│   ├── achievements/        # 実績ページ
│   ├── company/             # 会社情報ページ
│   ├── contact/             # お問い合わせページ
│   ├── recruit/             # 採用情報ページ
│   ├── privacy/             # プライバシーポリシーページ
│   └── api/                 # APIエンドポイント
├── components/              # 再利用可能なコンポーネント
│   ├── Header.tsx           # ヘッダーコンポーネント
│   ├── Footer.tsx           # フッターコンポーネント
│   ├── CubeObject.tsx       # メインページの3D立方体オブジェクト
│   ├── FeatureCube.tsx      # 特徴セクション用3Dオブジェクト
│   ├── AboutCube.tsx        # 会社概要セクション用3Dオブジェクト
│   ├── CustomCursor.tsx     # カスタムカーソルコンポーネント
│   └── ...                  # その他コンポーネント
├── lib/                     # ユーティリティ関数と外部APIクライアント
│   ├── notion.ts            # Notion API連携
│   ├── aws-ses.ts           # AWS SES連携
│   └── ...                  # その他ユーティリティ
└── types/                   # TypeScriptの型定義
```

## 🏃‍♂️ 開発の始め方

開発サーバーを起動するには:

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（Turbopackを使用）
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと結果が表示されます。

## 🔍 主要機能

- **3Dインタラクティブ要素**: Three.jsとReact Three Fiberを使用した没入型ユーザー体験
- **レスポンシブデザイン**: すべてのデバイスサイズに最適化されたレイアウト
- **アニメーション**: Framer Motionを使用したスムーズなページトランジションと要素アニメーション
- **コンテンツ管理**: Notion APIを活用したコンテンツ管理
- **問い合わせフォーム**: AWS SESを使用したメール送信機能

## 🚢 デプロイ

このプロジェクトは、Vercel Platformを使用してデプロイされています。詳細については、[Next.jsデプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)を参照してください。

## 🔧 環境変数

本番環境では、以下の環境変数を設定する必要があります:

- `NOTION_API_KEY` - Notion API認証キー
- `NOTION_DATABASE_ID` - コンテンツを格納するNotionデータベースID
- `AWS_ACCESS_KEY_ID` - AWS認証用アクセスキー
- `AWS_SECRET_ACCESS_KEY` - AWS認証用シークレットキー
- `AWS_REGION` - AWSリージョン（SES用）
