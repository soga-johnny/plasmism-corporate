import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Header from '@/components/Header';
import FeatureScene from '@/components/FeatureCube';
import ScrollingTitle from '@/components/ScrollingTitle';

export default function FeaturePage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
      <Header />
    <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
      <PageTitle 
        titleEn="Feature" 
        titleJa="特徴" 
        description="少数精鋭だからこそ実現する、幅広い経験と深い専門性があります。" 
      />
      
      <div className="space-y-12 md:px-16 px-4 pt-10">

      <section className="relative">
        <div className="sticky top-0 inset-0 z-[-10] h-screen -mb-[100vh] w-full">
          <FeatureScene />
        </div>

      <section className="border-b border-[var(--foreground)]/10 md:pb-40 pb-12">
          <div className="flex flex-col items-center text-center">
              <div className="rounded-lg">
                <h2 className="text-3xl md:text-7xl leading-tight mb-6">
                一貫したプロセスで<br/>
                価値を創造する
                </h2>
                <p className="text-[var(--foreground)]/80 text-sm md:text-base font-light leading-relaxed">
                設計・実装・検証・改善のサイクルで、ユーザー体験を進化させる
                </p>
              </div>
          </div>
        </section>
        {/* 1-1 設計セクション */}
        <section className="border-b border-[var(--foreground)]/10 md:pt-40 pt-20 md:pb-20 pb-10 relative overflow-visible overflow-x-hidden">
          {/* 背景テキスト */}
            <ScrollingTitle text="Design" />

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
                    顧客視点で本質的な課題を捉える
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base font-light leading-relaxed mb-8">
                    クライアントからの直接指名案件のみを扱うことで、ビジネスの本質的な課題に向き合います。小規模なチーム編成だからこそ、柔軟な発想とスピード感のある設計プロセスを実現。UI/UXデザインからコーポレートブランディング、クラウドインフラまで一貫した視点で設計します。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base font-light">
                      <li>ユーザーの行動分析に基づいた直感的なインターフェース設計</li>
                      <li>企業価値を明確に表現するブランドアイデンティティの構築</li>
                      <li>安全性と拡張性を兼ね備えたクラウド環境の設計</li>
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
          <ScrollingTitle text="Implementation" />

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
                <h2 className="text-3xl md:text-4xl mb-4">実装</h2>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-3xl leading-loose mb-4">
                    技術的な実現性と将来性を見据えた実装
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base font-light leading-relaxed mb-8">
                    設計フェーズで確立したコンセプトを忠実かつ柔軟に実装します。最新の技術スタックを活用しながらも、保守性と拡張性を常に念頭に置き、長期的な視点でのプロダクト開発を行います。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base font-light">
                      <li>最新フレームワークと実績あるライブラリの最適な組み合わせ</li>
                      <li>スケーラブルなコンポーネント設計とモジュール化</li>
                      <li>保守性を考慮したクリーンなコード実装とドキュメント化</li>
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
          <ScrollingTitle text="Testing" />

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
                <h2 className="text-3xl md:text-4xl mb-4">検証</h2>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-3xl leading-loose mb-4">
                    客観的なデータと<br/>
                    ユーザー体験の検証
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base font-light leading-relaxed mb-8">
                    実装したプロダクトが当初の課題を解決できているかを多角的に検証します。定量的なデータ分析とユーザーフィードバックの両面から評価を行い、改善点を明確化します。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base font-light">
                      <li>A/Bテストによるユーザー行動分析と改善策の検討</li>
                      <li>ヒートマップやユーザーフローの可視化と分析</li>
                      <li>パフォーマンス指標の測定と最適化提案</li>
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
          <ScrollingTitle text="Improvement" />

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
                <h2 className="text-3xl md:text-4xl mb-4">改良</h2>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-3xl leading-loose mb-4">
                    継続的な改善による<br/>
                    価値の最大化
                  </p>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base font-light leading-relaxed mb-8">
                    検証フェーズで得られた知見をもとに、プロダクトの継続的な改良を行います。市場環境やユーザーニーズの変化に柔軟に対応し、常に最適な状態を維持するためのアップデートを提案・実施します。
                  </p>
                  <div className="bg-[var(--foreground)]/4 rounded-2xl md:py-8 py-4 px-4 border border-[var(--foreground)]/10">
                    <ul className="list-disc pl-6 space-y-4 text-sm md:text-base font-light">
                      <li>検証データに基づいた優先度の高い改善提案</li>
                      <li>ユーザーフィードバックを活かした機能拡張</li>
                      <li>最新技術トレンドを取り入れたアップデート計画</li>
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

        <section className="pb-10 bg-[var(--background)] rounded-3xl md:p-20 p-6 border border-[var(--foreground)]/10 mb-20 md:mb-40">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="mb-8 bg-[var(--foreground)]/4 rounded-xl p-4">
                    <h2 className="border-l-4 border-[var(--foreground)]/30 md:pl-4 pl-2 md:text-xl text-base text-[var(--foreground)]">仕事の進め方</h2>
                  </div>
                  
           {/* UIUXデザインの場合 */}
           <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">UIUXデザインの場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">01</div>
                  <h4 className="text-xl mb-3 text-center">ユーザー調査と分析</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>行動分析とリサーチ</li>
                    <li>ペルソナ設計</li>
                    <li>ユーザーインタビュー</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">02</div>
                  <h4 className="text-xl mb-3 text-center">設計と構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>情報アーキテクチャ設計</li>
                    <li>ワイヤーフレーム作成</li>
                    <li>インタラクション設計</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">03</div>
                  <h4 className="text-xl mb-3 text-center">ビジュアルとプロトタイプ</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>UI設計とスタイリング</li>
                    <li>ビジュアル要素の統一</li>
                    <li>インタラクティブプロトタイプ作成</li>
                  </ul>
                </div>
                  <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">04</div>
                  <h4 className="text-xl mb-3 text-center">テストと改善</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>ユーザビリティテスト</li>
                    <li>フィードバック収集</li>
                    <li>継続的な改善</li>
                  </ul>
                </div>
              </div>
            </div>

           {/* コーポレートブランディングの場合 */}
           <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">コーポレートブランディングの場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">01</div>
                  <h4 className="text-xl mb-3 text-center">ブランド戦略</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>企業価値とビジョン明確化</li>
                    <li>市場調査・競合分析</li>
                    <li>ブランドポジショニング</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">02</div>
                  <h4 className="text-xl mb-3 text-center">アイデンティティ構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>ブランドコンセプト策定</li>
                    <li>ロゴ・カラー・タイポグラフィ設計</li>
                    <li>ブランドガイドライン策定</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">03</div>
                  <h4 className="text-xl mb-3 text-center">ブランド表現</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>コミュニケーション戦略</li>
                    <li>ウェブ・印刷物・SNSなどの表現統一</li>
                    <li>マーケティング素材制作</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">04</div>
                  <h4 className="text-xl mb-3 text-center">浸透と維持</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>社内外へのブランド教育</li>
                    <li>一貫性のあるブランド体験提供</li>
                    <li>認知度向上の施策実施</li>
                  </ul>
                </div>
              </div>
            </div>

               {/* クラウドインフラ構築の場合 */}
               <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">クラウドインフラ構築の場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">01</div>
                  <h4 className="text-xl mb-3 text-center">要件定義と設計</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>ビジネス要件の把握</li>
                    <li>安全性と拡張性の設計</li>
                    <li>コスト分析と最適化計画</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">02</div>
                  <h4 className="text-xl mb-3 text-center">環境構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>クラウドプラットフォーム選定</li>
                    <li>システムアーキテクチャ設計</li>
                    <li>ネットワークとセキュリティ設定</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">03</div>
                  <h4 className="text-xl mb-3 text-center">実装とテスト</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>インフラのコード化(IaC)</li>
                    <li>自動化パイプライン構築</li>
                    <li>パフォーマンスと負荷テスト</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">04</div>
                  <h4 className="text-xl mb-3 text-center">運用と最適化</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
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

        
        {/* 2 仕事の進め方 */}
        <section className="relative overflow-visible overflow-x-hidden">
          <div className="relative z-10">
          <div className="mt-20 border-b border-[var(--foreground)]/10">
        <h1 className="text-4xl mb-6">仕事の進め方</h1>
        <p className="mb-20 font-extralight text-sm md:text-base">クライアントの負担軽減に向け、コミュニケーションコストやヒューマンエラーを極力まで削るガイドラインを作成しています。</p>
      </div>
            
            {/* UIUXデザインの場合 */}
              <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">UIUXデザインの場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">01</div>
                  <h4 className="text-xl mb-3 text-center">ユーザー調査と分析</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>行動分析とリサーチ</li>
                    <li>ペルソナ設計</li>
                    <li>ユーザーインタビュー</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">02</div>
                  <h4 className="text-xl mb-3 text-center">設計と構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>情報アーキテクチャ設計</li>
                    <li>ワイヤーフレーム作成</li>
                    <li>インタラクション設計</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">03</div>
                  <h4 className="text-xl mb-3 text-center">ビジュアルとプロトタイプ</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>UI設計とスタイリング</li>
                    <li>ビジュアル要素の統一</li>
                    <li>インタラクティブプロトタイプ作成</li>
                  </ul>
                </div>
                  <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">04</div>
                  <h4 className="text-xl mb-3 text-center">テストと改善</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>ユーザビリティテスト</li>
                    <li>フィードバック収集</li>
                    <li>継続的な改善</li>
                  </ul>
                </div>
              </div>
            </div>

           {/* コーポレートブランディングの場合 */}
           <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">コーポレートブランディングの場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">01</div>
                  <h4 className="text-xl mb-3 text-center">ブランド戦略</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>企業価値とビジョン明確化</li>
                    <li>市場調査・競合分析</li>
                    <li>ブランドポジショニング</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">02</div>
                  <h4 className="text-xl mb-3 text-center">アイデンティティ構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>ブランドコンセプト策定</li>
                    <li>ロゴ・カラー・タイポグラフィ設計</li>
                    <li>ブランドガイドライン策定</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">03</div>
                  <h4 className="text-xl mb-3 text-center">ブランド表現</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>コミュニケーション戦略</li>
                    <li>ウェブ・印刷物・SNSなどの表現統一</li>
                    <li>マーケティング素材制作</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">04</div>
                  <h4 className="text-xl mb-3 text-center">浸透と維持</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>社内外へのブランド教育</li>
                    <li>一貫性のあるブランド体験提供</li>
                    <li>認知度向上の施策実施</li>
                  </ul>
                </div>
              </div>
            </div>

               {/* クラウドインフラ構築の場合 */}
               <div className="md:py-20 py-10 border-b border-[var(--foreground)]/10">
              <h3 className="md:text-4xl text-2xl md:mb-12 mb-6">クラウドインフラ構築の場合</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">01</div>
                  <h4 className="text-xl mb-3 text-center">要件定義と設計</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>ビジネス要件の把握</li>
                    <li>安全性と拡張性の設計</li>
                    <li>コスト分析と最適化計画</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">02</div>
                  <h4 className="text-xl mb-3 text-center">環境構築</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>クラウドプラットフォーム選定</li>
                    <li>システムアーキテクチャ設計</li>
                    <li>ネットワークとセキュリティ設定</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">03</div>
                  <h4 className="text-xl mb-3 text-center">実装とテスト</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>インフラのコード化(IaC)</li>
                    <li>自動化パイプライン構築</li>
                    <li>パフォーマンスと負荷テスト</li>
                  </ul>
                </div>
                <div className="flex flex-col bg-[var(--foreground)]/5 p-10 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-xl text-[var(--foreground)]/70 mb-2 text-center">04</div>
                  <h4 className="text-xl mb-3 text-center">運用と最適化</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-light text-[var(--foreground)]/80">
                    <li>モニタリングと監視体制</li>
                    <li>コスト管理とリソース最適化</li>
                    <li>継続的な改善とスケーリング</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 3 費用に関して */}
        <section className="md:pb-20 pb-10 relative overflow-visible overflow-x-hidden">
          <div className="relative z-10">
          <div className="mt-20 border-b border-[var(--foreground)]/10">
        <h1 className="text-4xl mb-6">費用に関して</h1>
        <p className="mb-20 font-extralight text-sm md:text-base">以下の料金はおおよその目安であり、プロジェクトの内容によって柔軟にカスタマイズ可能です。</p>
      </div>
            
            {/* UIUXデザインの場合 */}
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
            
            {/* コーポレートブランディングの場合 */}
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

             {/* クラウドインフラ構築の場合 */}
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
        </section>
      </div>
    </div>
    <Footer />
  </main>
  );
} 