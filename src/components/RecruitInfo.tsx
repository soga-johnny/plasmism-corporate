'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function RecruitInfo() {
  return (
    <section className="w-full">
      
      <div className="space-y-10">
        {/* Notionページへの遷移ボタン */}
        <div className="mb-12">
        {/* Notionページへの遷移ボタン */}
        <Link
                href="https://same-ranunculus-85c.notion.site/Plasmism-1bf43fbe1206801bb0efd6d37bf01449"
                target="_blank"
                rel="noopener noreferrer"
             className="group block rounded-3xl hover:bg-[#3c3335] hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden border border-transparent hover:border-[#4a4043]"
             style={{
              backgroundImage: `url('/background.png')`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'calc(100% - 20%) calc(100% - 20%)',
              backgroundColor: 'rgba(43, 35, 37, 1)'
            }}
             >
             <div className="flex flex-col md:flex-row items-center px-6 py-12 md:px-12 md:py-24">
                {/* Text Content */}
                <div className="flex-1 mb-6 md:mb-0 md:mr-24">
                    <p className="text-md mb-3 font-serif text-white/80">● Recruit</p>
                    <h2 className="md:text-5xl text-3xl text-white mb-6">採用情報</h2>
                     <p className="text-sm md:text-base text-white/60">
                        事業の拡大に伴い、Plasmismでは社外パートナーや協業先との連携も増えており、これら新たな取り組みを支えるための採用に一層力を入れています。
                     </p>
                </div>

                {/* Image and Arrow Container */}
                <div className="relative w-full md:w-1/3 flex-shrink-0 flex md:flex-row flex-col items-center justify-between">
                     {/* Image */}
                     <div className="relative md:w-4/5 w-full aspect-[4/3] rounded-xl overflow-hidden md:mr-8 mr-0">
                         <Image
                             src="/recruit-image.jpg"
                             alt="採用情報イメージ"
                             fill
                             sizes="(max-width: 768px) 80vw, 30vw"
                             className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                         />
                     </div>
                     {/* Arrow - Styled like Product section */}
                     <div className="flex items-center md:justify-center justify-end md:pl-6 md:border-l border-white/20 md:h-[200px] h-auto md:w-auto w-full md:py-0 py-6">
                        <svg className="w-10 h-10 text-white/70 group-hover:text-white transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                             {/* Top-right arrow path */}
                             <path d="M7 17l9.172-9.172M7 7h10v10" />
                         </svg>
                    </div>
                 </div>
            </div>
        </Link>
        </div>

                  {/* 私たちの働き方 */}
                  <section className="pb-20 px-8">
            <h2 className="text-2xl md:text-4xl mb-12">私たちの働き方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">リモートワーク</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  基本的にリモートワークを推奨しています。自宅やコワーキングスペースなど、最も集中できる環境で働くことができます。必要に応じてオフィスでの対面ミーティングも行いますが、デジタルツールを活用したコラボレーションを重視しています。
                </p>
              </div>
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">フレックスタイム</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  コアタイムを設けつつも、個人の生活リズムや最も生産性が高い時間帯に合わせて柔軟に働くことができます。プロジェクトの進行状況やチームとの連携を考慮した上で、自己管理能力を発揮できる環境です。
                </p>
              </div>
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">スキル開発支援</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  新しい技術や手法の習得を奨励し、書籍購入や各種勉強会、オンラインコースの受講費用をサポートしています。社内での知識共有セッションも定期的に開催し、互いに学び合える文化を大切にしています。
                </p>
              </div>
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">チーム文化</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  肩書きや経験よりもアイデアと実行力を重視し、フラットな組織文化を目指しています。意見やフィードバックを自由に交換できる環境で、それぞれの専門性を活かしながら協力して問題解決に取り組みます。
                </p>
              </div>
            </div>
          </section>
        
        {/* プラズミズムで働くメリット */}
        <div className="mb-12 px-8">
          <h3 className="md:text-3xl text-2xl mb-8 border-b border-[var(--foreground)]/10 pb-4">プラズミズムで働くメリット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">01</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  クライアントと直接対話しながら少人数でプロジェクトを進めるため、個人の貢献度が高く、スキルの成長スピードが速いです。
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">02</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  限られたリソースで効率的に成果を出すスタートアップならではの環境で、コミュニケーション能力、交渉力、問題解決力、判断力、計画力などの実践的なスキルが身につきます。
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">03</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  無駄な会議や単純作業を極力減らし、スキル向上につながる業務に時間を使えるよう工夫しています。
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">04</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  質の高い制作実績を重視する文化があり、会社で働きながら個人のポートフォリオも充実させることができます。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* プラズミズムに向いている方 */}
        <div className='px-8'>
          <h3 className="md:text-3xl text-2xl mb-8 border-b border-[var(--foreground)]/10 pb-4">プラズミズムに向いている方</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">01</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  デザインや実装だけでなく、要件ヒアリングや課題整理、提案など上流工程にも積極的に携わりたい方。
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">02</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  ルーティンワークではなく、常に新しい挑戦ができる環境でスキルを伸ばしていきたい方。
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">03</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                  革新的なWeb表現や最新技術の探求に情熱を持つクリエイティブな方。
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)]/5 rounded-xl p-6 border border-[var(--foreground)]/10">
              <div className="flex items-start mb-4">
                <div className="bg-[var(--foreground)]/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  <span className="text-sm">04</span>
                </div>
                <p className="text-sm text-[var(--foreground)]/80 leading-relaxed">
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