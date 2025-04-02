'use client'

import Link from 'next/link'

export default function RecruitInfo() {
  return (
    <section className="w-full">
      <h2 className="text-4xl md:text-5xl font-thin mb-12">採用情報</h2>
      
      <div className="space-y-10">
        {/* Notionページへの遷移ボタン */}
        <div className="mb-12">
          <Link 
            href="https://same-ranunculus-85c.notion.site/Plasmism-1bf43fbe1206801bb0efd6d37bf01449" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/15 transition-all border border-white/20 rounded-xl px-8 py-6 flex flex-col md:flex-row md:justify-between md:items-center w-full"
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-thin mb-2">採用情報の詳細</h3>
              <p className="text-sm text-white/60">採用情報の詳細はNotionページでご確認いただけます</p>
            </div>
            <div className="flex items-center pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
              <span className="mr-2 text-white/60">詳細を見る</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 5l7 7-7 7M5 12h15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
        
        {/* プラズミズムで働くメリット */}
        <div className="mb-12">
          <h3 className="text-3xl font-thin mb-8 border-b border-white/10 pb-4">プラズミズムで働くメリット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">01</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  クライアントと直接対話しながら少人数でプロジェクトを進めるため、個人の貢献度が高く、スキルの成長スピードが速いです。
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">02</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  限られたリソースで効率的に成果を出すスタートアップならではの環境で、コミュニケーション能力、交渉力、問題解決力、判断力、計画力などの実践的なスキルが身につきます。
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">03</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  無駄な会議や単純作業を極力減らし、スキル向上につながる業務に時間を使えるよう工夫しています。
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">04</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  質の高い制作実績を重視する文化があり、会社で働きながら個人のポートフォリオも充実させることができます。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* プラズミズムに向いている方 */}
        <div>
          <h3 className="text-3xl font-thin mb-8 border-b border-white/10 pb-4">プラズミズムに向いている方</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">01</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  デザインや実装だけでなく、要件ヒアリングや課題整理、提案など上流工程にも積極的に携わりたい方。
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">02</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  ルーティンワークではなく、常に新しい挑戦ができる環境でスキルを伸ばしていきたい方。
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">03</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  革新的なWeb表現や最新技術の探求に情熱を持つクリエイティブな方。
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">04</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  クライアントの期待に応えるだけでなく、自分自身が誇りを持てる作品づくりにこだわりたい方。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 