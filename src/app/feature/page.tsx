import { Metadata } from 'next';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Header from '@/components/Header';
import FeatureScene from '@/components/FeatureCube';
import ScrollingTitle from '@/components/ScrollingTitle';

export const metadata: Metadata = {
  title: "私たちの特徴",
  description: "プラズミズム独自の強みや特徴について解説します。少数精鋭だからこそ実現する、再現性のある戦略的アプローチをご覧ください。",
  openGraph: {
    title: "私たちの特徴",
    description: "プラズミズム独自の強みや特徴について解説します。少数精鋭だからこそ実現する、再現性のある戦略的アプローチをご覧ください。",
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: 'Plasmism OGP Image',
      },
    ],
  },
  twitter: {
    title: "私たちの特徴",
    description: "プラズミズム独自の強みや特徴について解説します。少数精鋭だからこそ実現する、再現性のある戦略的アプローチをご覧ください。",
    images: ['/ogp.png'],
  },
};

export default function FeaturePage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2">
      <Header />
    <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
      <PageTitle 
        titleEn="Feature" 
        titleJa="特徴" 
        description="少数精鋭だからこそ実現する、再現性のある戦略的アプローチ" 
      />
      
      <div className="space-y-12 md:px-16 px-4 pt-10">

      <section className="relative md:mb-20 mb-10">
      <div className="sticky top-0 inset-0 z-[-10] h-screen -mb-[100vh] w-screen left-0 right-0 -mx-[calc(50vw-50%)]">
          <FeatureScene />
        </div>

      <section className="border-b border-[var(--foreground)]/10 md:pb-40 pb-12 md:pt-32 pt-0">
          <div className="flex flex-col items-center text-center">
              <div className="rounded-lg md:max-w-[780px]">
                <h2 className="text-3xl md:text-7xl leading-tight md:mb-12 mb-4">
                磨き上げた最適解を<br/>
                デザインするための<br/>
                一貫したプロセス
                </h2>
                <p className="text-[var(--foreground)] text-sm md:text-base leading-relaxed">
                プラズミズムでは、4つのプロセス「設計 → 実装 → 検証 → 改良」を
短いスパンで繰り返し回すことを重視します。<br/><br/>
軌道の修正がしやすく効率的に完成度を高められ、
事業に最大限の貢献ができると提案しています。
                </p>
              </div>
          </div>
        </section>
        
        {/* 1-1 設計セクション */}
        <section className="border-b border-[var(--foreground)]/10 md:pt-40 pt-20 md:pb-20 pb-10 relative overflow-visible overflow-x-hidden">
          {/* 背景テキスト */}
            <ScrollingTitle text="PLANNING" />

          <div className="flex flex-col md:flex-row justify-between relative z-10">
            <div className="md:flex md:mr-12 flex">
              {/* 左側のナンバリング - モバイルとPC共通 */}
              <div className="flex md:flex flex-col items-center mr-4 md:mr-10">
                {/* 1のボックス */}
                <div className="w-3 h-12 bg-[var(--foreground)] rounded-full flex items-center justify-center mb-2 py-8 px-3">
                  <span className="text-[var(--background)] text-sm">1</span>
                </div>
                {/* 縦線 */}
                <div className="h-full w-[1px] bg-[var(--foreground)]/10"></div>
                {/* 2のボックス */}
                <div className="w-3 h-12 rounded-full border border-[var(--foreground)] flex items-center justify-center mt-2 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">2</span>
                </div>
              </div>
              {/* コンテンツ部分 */}
              <div className="w-full md:w-1/2 md:mr-12">
                <h2 className="text-3xl md:text-5xl mb-4">設計</h2>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-3xl leading-loose mb-4">
                    生きた戦略の構築
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed mb-8">
                  ビジネス目標や利用環境、制約条件などを整理しながら、課題解決に向けた最適な道筋を組み立てるプロセスです。<br/><br/>
                  具体的に想定されるケースを解体し切った上で、その状況での最適解を組み立てます。<br/><br/>
                  実行可能なスケジュールやシステム構成を導き出し、問題への対処や拡張性の面まで見据えた計画を構築していきます。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                  <h3 className="text-lg md:text-xl ml-2 mb-4">具体例</h3>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                      <li>課題解決の為のストーリーをマッピングし、画面遷移や必要機能を一覧化</li>
                      <li>事業ドメインからオペレーションの課題まで、ステークホルダーとの課題認識一致化</li>
                      <li>求められている機能的な要件とビジネス的な要件を、実現可能性を整理しながら定義化</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-8 md:mt-2 md:max-w-[500px] w-full h-full">
              <Image 
                src="/sample1.png"
                alt="実装イメージ"
                width={400}
                height={600}
                className="rounded-lg object-cover aspect-square w-full h-full"
              />
            </div> */}
          </div>
        </section>

        {/* 1-2 実装セクション */}
        <section className="border-b border-[var(--foreground)]/10 md:pt-40 pt-20 md:pb-20 pb-10 relative overflow-visible overflow-x-hidden">
          {/* 背景テキスト */}
          <ScrollingTitle text="IMPLEMENTATION" />

          <div className="flex flex-col md:flex-row justify-between relative z-10">
            <div className="md:flex flex">
              {/* 左側のナンバリング */}
              <div className="flex md:flex flex-col items-center mr-4 md:mr-10">
                <div className="w-3 h-12 bg-[var(--foreground)] rounded-full flex items-center justify-center mb-2 py-8 px-3">
                  <span className="text-[var(--background)] text-sm">2</span>
                </div>
                <div className="h-full w-[1px] bg-[var(--foreground)]/10"></div>
                <div className="w-3 h-12 rounded-full border border-[var(--foreground)] flex items-center justify-center mt-2 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">3</span>
                </div>
              </div>
              {/* コンテンツ部分 */}
              <div className="w-full md:w-1/2 md:mr-12">
                <h2 className="text-3xl md:text-5xl mb-4">実装</h2>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-3xl leading-loose mb-4">
                    見える形への迅速な変換
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed mb-8">
                  設計で描いた戦略を実際に検証可能な見える形に変換するプロセスです。<br/><br/>
                  これに特化して連携されたチームワークで、アクションプランを&quot;機能&quot;や&quot;デザイン&quot;として具現化していきます。<br/><br/>
                  素早く、しかし丁寧に作り上げることで、質の良いフィードバックをいち早くいただけるように体制準備をしながら、的確にアウトプットしていきます。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                  <h3 className="text-lg md:text-xl ml-2 mb-4">具体例</h3>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                      <li>クリエイティブツールを活用しての詳細画面のビジュアライズやプロトタイプの作成</li>
                      <li>ロゴ・キービジュアルのムードボードやデザインサンプルを実制作、ステークホルダーに展開</li>
                      <li>要件に基づいたクラウド環境構築、ミニマムスケールでの技術検証、クライアントサイド実装</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-8 md:mt-2 md:max-w-[500px] w-full h-full">
              <Image 
                src="/sample1.png"
                alt="実装イメージ"
                width={400}
                height={600}
                className="rounded-lg object-cover aspect-square w-full h-full"
              />
            </div> */}
          </div>
        </section>
        
        {/* 1-3 検証セクション */}
        <section className="border-b border-[var(--foreground)]/10 md:pt-40 pt-20 md:pb-20 pb-10 relative overflow-visible overflow-x-hidden">
          {/* 背景テキスト */}
          <ScrollingTitle text="VALIDATION" />

          <div className="flex flex-col md:flex-row justify-between relative z-10">
            <div className="md:flex flex">
              {/* 左側のナンバリング */}
              <div className="flex md:flex flex-col items-center mr-4 md:mr-10">
                <div className="w-3 h-12 bg-[var(--foreground)] rounded-full flex items-center justify-center mb-2 py-8 px-3">
                  <span className="text-[var(--background)] text-sm">3</span>
                </div>
                <div className="h-full w-[1px] bg-[var(--foreground)]/10"></div>
                <div className="w-3 h-12 rounded-full border border-[var(--foreground)] flex items-center justify-center mt-2 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">4</span>
                </div>
              </div>
              {/* コンテンツ部分 */}
              <div className="w-full md:w-1/2 md:mr-12">
                <h2 className="text-3xl md:text-5xl mb-4">検証</h2>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-3xl leading-loose mb-4">
                    事実との整合性のある照合
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed mb-8">
                  仮説と検証リストを元に、ユーザーや関係者が実際にどう動くかを観察して測定するプロセスです。<br/><br/>
                  定量的に測定可能な指標を元に、明確に検証可能なボリュームに切り出して想定通りに機能している部分と変更を要する部分を精査。<br/><br/>
                  測定した内容は再現性を持ってドキュメンテーションし、次の改良ステップに役立つ確かなエビデンスを積み上げます。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                  <h3 className="text-lg md:text-xl ml-2 mb-4">具体例</h3>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                      <li>ユーザビリティテスト（ヒューリスティック評価／ユーザーインタビューなど）</li>
                      <li>サイト運用データからの離脱率や滞在時間のモニタリング</li>
                      <li>エラーログやセキュリティスキャンの監査</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-8 md:mt-2 md:max-w-[500px] w-full h-full">
              <Image 
                src="/sample1.png"
                alt="検証イメージ"
                width={400}
                height={600}
                className="rounded-lg object-cover aspect-square w-full h-full"
              />
            </div> */}
          </div>
        </section>
        
        {/* 1-4 改良セクション */}
        <section className="border-b border-[var(--foreground)]/10 md:pt-40 pt-20 md:pb-20 pb-10 relative overflow-visible overflow-x-hidden">
          {/* 背景テキスト */}
          <ScrollingTitle text="REFINEMENT" />

          <div className="flex flex-col md:flex-row justify-between relative z-10">
            <div className="md:flex flex">
              {/* 左側のナンバリング */}
              <div className="flex md:flex flex-col items-center mr-4 md:mr-10">
                <div className="w-3 h-12 bg-[var(--foreground)] rounded-full flex items-center justify-center mb-2 py-8 px-3">
                  <span className="text-[var(--background)] text-sm">4</span>
                </div>
                <div className="h-full w-[1px] bg-[var(--foreground)]/10"></div>
                <div className="w-3 h-12 rounded-full border border-[var(--foreground)] flex items-center justify-center mt-2 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">1</span>
                </div>
              </div>
              {/* コンテンツ部分 */}
              <div className="w-full md:w-1/2 md:mr-12">
                <h2 className="text-3xl md:text-5xl mb-4">改良</h2>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-3xl leading-loose mb-4">
                    徹底的な最適解の追求
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed mb-8">
                  検証のフィードバックをもとに、新たな仮説を立てて再び設計・実装に反映させるプロセスです。<br/><br/>
                  変更すべきポイントを明確にし、もう一度「設計」に戻って仮説を再設定することで、より深度のあるユーザーの課題にも寄り添うような形で最適解を追求できます。<br/><br/>
                  さらにより良い改良を目指すために、改めて設計コンセプト自体のブラッシュアップも行い、より速くより質高いサイクルになるようにナレッジをストックしていきます。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                  <h3 className="text-lg md:text-xl ml-2 mb-4">具体例</h3>
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                      <li>各画面遷移の全体最適化、リリースからの逆算的なスプリントスケジュールの調整</li>
                      <li>新たに見つかった課題を踏まえたカスタマージャーニーの再設計</li>
                      <li>セキュリティホールの対策や保守性向上のためのエピック立ち上げ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-8 md:mt-2 md:max-w-[500px] w-full h-full">
              <Image 
                src="/sample1.png"
                alt="改良イメージ"
                width={400}
                height={600}
                className="rounded-lg object-cover aspect-square w-full h-full"
              />
            </div> */}
          </div>
        </section>
        </section>

        <section className="pb-10 bg-[var(--background)] rounded-3xl md:p-20 p-6 border border-[var(--foreground)]/10 mb-2 md:mb-20">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="mb-8 bg-[var(--foreground)]/4 rounded-xl p-4">
                    <h2 className="border-l-4 border-[var(--foreground)]/30 md:pl-4 pl-2 md:text-xl text-base text-[var(--foreground)]">仕事の進め方</h2>
                  </div>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed mb-8">
                    ４つのプロセスを基幹としたプラズミズムの三つの事業それぞれの進め方です。
                  </p>
                  
           {/* UIUXデザインの場合 */}
           <div className="py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">UXデザインの場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">01 設計</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">ユーザー調査と分析</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>行動分析とリサーチ</li>
                    <li>ペルソナ設計</li>
                    <li>ユーザーインタビュー</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">02 実装</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">プロトタイピング</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>情報アーキテクチャ設計</li>
                    <li>ワイヤーフレーム作成</li>
                    <li>インタラクション設計</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">03 検証</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">ユーザビリティテスト</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>ヒューリスティック評価</li>
                    <li>ユーザーインタビュー</li>
                    <li>ユーザーストーリーマッピング</li>
                  </ul>
                </div>
                  <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">04 改良</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">フィードバック収集</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>レビュードキュメンテーション</li>
                    <li>イシュー整理</li>
                    <li>スプリントコンセプトブラッシュアップ</li>
                  </ul>
                </div>
              </div>
            </div>

           {/* コーポレートブランディングの場合 */}
           <div className="py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">コーポレートデザインの場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">01 設計</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">ブランド戦略構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>企業価値とビジョン明確化</li>
                    <li>市場調査・競合分析</li>
                    <li>ブランドポジショニング</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">02 実装</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">アイデンティティ構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>ブランドコンセプト策定</li>
                    <li>ロゴ・ビジュアルコンセプトドラフト作成</li>
                    <li>タッチポイントマッピング</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">03 検証</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">ユーザーインタビュー</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>ブランドコンセプトの検証</li>
                    <li>ブランドコンセプトのフィードバック収集</li>
                    <li>ブランドコンセプトのブラッシュアップ</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">04 改良</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">浸透と維持</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>社内外へのブランド教育</li>
                    <li>一貫性のあるブランド体験提供</li>
                    <li>認知度向上の施策実施</li>
                  </ul>
                </div>
              </div>
            </div>

               {/* クラウドインフラ構築の場合 */}
               <div className="pt-10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">アーキテクチャデザインの場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">01 設計</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">要件定義と設計</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>ビジネス要件の把握</li>
                    <li>安全性と拡張性の設計</li>
                    <li>コスト分析と最適化計画</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">02 実装</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">環境構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>クラウドプラットフォーム選定</li>
                    <li>システムアーキテクチャ設計</li>
                    <li>ネットワークとセキュリティ設定</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">03 検証</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">実装とテスト</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>インフラのコード化(IaC)</li>
                    <li>自動化パイプライン構築</li>
                    <li>パフォーマンスと負荷テスト</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-sm text-[var(--foreground)]/70 mb-2 text-center">04 改良</div>
                  <h4 className="md:text-2xl text-xl mb-3 text-center">運用と最適化</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[var(--foreground)]/80">
                    <li>モニタリングと監視体制</li>
                    <li>コスト管理とリソース最適化</li>
                    <li>継続的な改善とスケーリング</li>
                  </ul>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </section>

        
        {/* 3 費用に関して */}
        {/* <section className="md:pb-20 pb-10 relative overflow-visible overflow-x-hidden">
          <div className="relative z-10">
          <div className="mt-20 border-b border-[var(--foreground)]/10">
        <h1 className="text-4xl mb-6">費用に関して</h1>
        <p className="mb-20 font-extralight text-sm md:text-base">以下の料金はおおよその目安であり、プロジェクトの内容によって柔軟にカスタマイズ可能です。</p>
      </div>
            
            <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">UIUXデザインの場合</h3>
              <div className="bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10 mb-6">
                <ul className="list-none space-y-6 text-sm md:text-base font-light text-[var(--foreground)]/80">
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・準委任契約：月額60万円〜（週3日稼働の場合）</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・準委任契約：月額100万円〜（週5日稼働の場合）</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・スポット対応：要相談</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-none space-y-6 text-sm md:text-base font-light text-[var(--foreground)]/80">
                  <li className="flex items-center border-b border-[var(--foreground)]/10 pb-4">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">UI/UXデザインを準委任契約で提供する理由は、継続的な改善と柔軟な対応を実現するためです。
                    月額60万円〜100万円という費用には：</span>
                  </li>
                  <li className="flex items-center border-b border-[var(--foreground)]/10 pb-4">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・専門性の高いデザイナーの継続的な関与と柔軟な対応<br/>
・ユーザー行動分析に基づく継続的な改善設計<br/>
・ビジネス目標に即した体験設計と効果測定<br/>
・最新のデザイントレンドやツールへのアクセス<br/>
・ビジネス目標に即した体験設計と効果測定<br/>
・最新のデザイントレンドやツールへのアクセス</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">これらが含まれ、一度きりの制作ではなく、ユーザー体験の継続的な最適化を通じてビジネス成果を創出します。</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">コーポレートブランディングの場合</h3>
              <div className="bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10 mb-6">
                <ul className="list-none space-y-6 text-sm md:text-base font-light text-[var(--foreground)]/80">
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・コーポレートブランディング：80万円〜350万円</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-none space-y-6 text-sm md:text-base font-light text-[var(--foreground)]/80">
                  <li className="flex items-center border-b border-[var(--foreground)]/10 pb-4">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">80万円〜350万円というブランディング費用は、以下の価値を含んでいます：</span>
                  </li>
                  <li className="flex items-center border-b border-[var(--foreground)]/10 pb-4">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・市場調査と競合分析に基づいた戦略的なブランドポジショニング<br/>
・一貫性のあるビジュアルアイデンティティ設計<br/>
・顧客心理を考慮したブランドストーリーの構築<br/>
・長期的な企業成長を支える強固なブランド基盤の確立</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">これは単なるロゴ制作ではなく、ブランドを通じた長期的な企業価値創造への投資です。</span>
                  </li>
                </ul>
              </div>
            </div>

             <div className="md:pt-20 pt-10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">クラウドインフラ構築の場合</h3>
              <div className="bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10 mb-6">
                <ul className="list-none space-y-6 text-sm md:text-base font-light text-[var(--foreground)]/80">
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・初期設定費：30万円〜100万円</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・月額運用費：10万円〜25万円（エンタープライズは要相談）</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-none space-y-6 text-sm md:text-base font-light text-[var(--foreground)]/80">
                  <li className="flex items-center border-b border-[var(--foreground)]/10 pb-4">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">初期設定費30万円〜、月額10万円〜の費用には：</span>
                  </li>
                  <li className="flex items-center border-b border-[var(--foreground)]/10 pb-4">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">・ビジネス成長に合わせた柔軟なスケーラビリティの設計<br/>
・セキュリティリスクからの事業保護<br/>
・サービス安定性の確保によるビジネス機会損失の防止<br/>
・専門エンジニアによる最適化とトラブル対応</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[var(--foreground)]/90 font-light flex-1">が含まれています。適切なインフラ投資は、サービス停止やセキュリティインシデントによる損害を未然に防ぎ、ビジネスの持続的成長を支えます。</span>
                  </li>
                </ul>
              </div>
              <p className="text-md md:text-lg leading-loose mt-12">
              プラズミズムのサービス料金は、表面的な「制作物」だけでなく、ビジネス成功に不可欠な「戦略」「専門知識」「継続的な改善」の価値を反映しています。適切な投資により、長期的なブランド価値向上、ユーザー満足度の向上、安定したシステム基盤の構築が実現し、結果としてビジネスの持続的成長につながります。
                  </p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
    <Footer />
  </main>
  );
} 