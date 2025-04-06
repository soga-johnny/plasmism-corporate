"use client";

import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
export default function ServicePage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
      <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Service" 
          titleJa="サービス" 
          description="ソリッドベンチャーとして他事業との有機的な連携" 
        />
        
        <div className="mb-16 md:mx-16 mx-4">
          <p className="text-[var(--foreground)]/80 mb-10 ">各サービスは単体でも、組み合わせても提供可能です。</p>
          
          <div className="space-y-4">
            <a href="#consulting" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-all duration-300 rounded-lg p-4" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#consulting')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
                <span className="text-lg md:text-2xl group-hover:text-[var(--foreground)]/90">01</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">Consulting</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">事業開発・技術顧問</p>
                </div>
                <div className="ml-4 transform group-hover:rotate-270 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="#contract-development" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-all duration-300 rounded-lg p-4" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contract-development')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
                <span className="text-lg md:text-2xl group-hover:text-[var(--foreground)]/90">02</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">Contract development</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">受託開発</p>
                </div>
                <div className="ml-4 transform group-hover:rotate-270 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="#technology-partnership" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-all duration-300 rounded-lg p-4" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#technology-partnership')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
                <span className="text-lg md:text-2xl group-hover:text-[var(--foreground)]/90">03</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">Technology partnership</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">技術パートナーシップ</p>
                </div>
                <div className="ml-4 transform group-hover:rotate-270 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="space-y-24 mb-16 md:mx-16 mx-4 pt-10">
          {/* Consulting */}
          <section id="consulting" className="md:pb-20 pb-10 border-b border-[var(--foreground)]/10">
            <div className="flex items-center group md:py-6 py-4 px-4 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)]/90 border border-[var(--foreground)]/10 z-10 bg-[url('/background.png')] bg-cover bg-center">
              <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
                <span className="text-lg md:text-2xl">01</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-4xl mb-2">Consulting</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">事業開発・技術顧問</p>
                </div>
              </div>
            </div>
            
            {/* こんな課題はありませんか？ */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">こんな課題はありませんか？</h3>
              <div className="bg-[var(--foreground)]/5 rounded-lg border border-[var(--foreground)]/10">
                <div className="space-y-0">
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">導線が複雑で、目的の情報に辿り着きにくい</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">サービスの使いにくさがユーザー離れを引き起こしている</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">機能は増えたが、ユーザー体験が複雑化してしまった</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">ユーザーニーズを的確に捉えた設計ができていない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">デザインに一貫性がなく、ブランドイメージが統一されていない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox=  "0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">制作会社に依頼すると都度見積もりが必要で柔軟な対応ができない</p>
                  </div>
                  <div className="flex items-start p-4">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">デザインと開発の連携がうまくいっていない</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* プラズミズムが提供するソリューション */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">プラズミズムが提供するソリューション</h3>
              <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">プラズミズムのUI/UXデザインサービスは、準委任契約で提供します。これにより、プロジェクト単位ではなく、継続的な改善に向けたパートナーシップを築くことができます。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-center mb-3">
                    <span className="text-[var(--foreground)]/50 text-xl">01</span>
                  </div>
                  <h4 className="text-center text-lg mb-4">徹底した<br />ユーザー中心設計</h4>
                  <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                    実際のユーザーインタビューやユーザビリティテストを通して、真のニーズを発見。データやリサーチを意思決定により、感覚ではなく事実に基づいたデザインを実現します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-center mb-3">
                    <span className="text-[var(--foreground)]/50 text-xl">02</span>
                  </div>
                  <h4 className="text-center text-lg mb-4">ビジネス目標と<br />連動したKPI設計</h4>
                  <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                    「見た目の良さ」だけでなく、ビジネス成果に直結するKPIを設計し、継続的な測定と改善を行います。コンバージョン率、継続率など、重要な指標の向上にコミットします。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-center mb-3">
                    <span className="text-[var(--foreground)]/50 text-xl">03</span>
                  </div>
                  <h4 className="text-center text-lg mb-4">デザインシステムの<br />構築と運用</h4>
                  <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                    UIコンポーネントの再利用性を高め、一貫性のあるユーザー体験と効率的な開発、開発スピードの向上と品質の安定化を両立します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                  <div className="text-center mb-3">
                    <span className="text-[var(--foreground)]/50 text-xl">04</span>
                  </div>
                  <h4 className="text-center text-lg mb-4">アジャイルな<br />開発プロセス</h4>
                  <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                    2週間単位のスプリントで企画・設計・検証のサイクルを高速で回し、リリース後も継続的な価値最大化に取り組みます。
                  </p>
                </div>
              </div>
            </div>
            
            {/* なぜプラズミズムを選ぶべきか */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">なぜプラズミズムを選ぶべきか</h3>
              <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>デザインだけでなく、実装まで一貫して対応できる技術力</li>
                  <li>ユーザー調査から改善までのプロセスをワンストップで提供</li>
                  <li>データに基づいた客観的な分析と提案</li>
                  <li>少数精鋭だからこそ可能な柔軟性と迅速な対応</li>
                </ul>
              </div>
            </div>
            
            {/* 実績 */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">実績</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--foreground)]/5 rounded-lg border border-[var(--foreground)]/10 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">  
                    <Image
                      src="/sample1.png"
                      alt="UIUXデザイン実績"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl mb-2 group-hover:text-[var(--foreground)] transition-colors duration-300">NAMINORI</h4>
                    <p className="text-[var(--foreground)] text-sm mb-4 group-hover:text-[var(--foreground)]/90 transition-colors duration-300">リブランディング/UIデザイン</p>
                    <Link href="/achievements/achievement-1" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] text-sm group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                      詳細を見る <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
                <div className="bg-[var(--foreground)]/5 rounded-lg border border-[var(--foreground)]/10 overflow-hidden hover:bg-[var(--foreground)]/10 transition-all duration-300 group">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/sample1.png"
                      alt="UIUXデザイン実績"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl mb-2 group-hover:text-[var(--foreground)] transition-colors duration-300">NAMINORI</h4>
                    <p className="text-[var(--foreground)] text-sm mb-4 group-hover:text-[var(--foreground)]/90 transition-colors duration-300">リブランディング/UIデザイン</p>
                    <Link href="/achievements/achievement-2" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] text-sm group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                      詳細を見る <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/achievements" className="inline-block text-[var(--foreground)]/60 hover:text-[var(--foreground)] text-sm border border-[var(--foreground)]/20 rounded-full px-6 py-2">
                  実績一覧を見る
                </Link>
              </div>
            </div>
            
            {/* よくあるご質問 */}
            <div>
              <h3 className="text-2xl mb-6">UXデザインに関するよくある質問</h3>
              <div className="border-t border-[var(--foreground)]/10">
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. 準委任契約での契約は可能ですか？また、具体的にどのような契約形態ですか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    準委任契約は、特定の成果物ではなく、専門スキルや知見を提供する契約形態です。これにより、プロジェクトの進行に応じて柔軟にスコープを調整でき、変化の早いビジネス環境に適応したサービス提供が可能になります。週3日や週5日など、必要なリソース量に応じた契約が可能です。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. デザインチームとは何ですか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    デザインチームとは、プロダクトやサービスの見た目（UI）や使いやすさ（UX）を設計・改善する専門チームです。見た目の美しさだけでなく、ユーザーが迷わず快適に使える体験をつくることを目的としています。役割としては、情報設計や導線設計、画面や操作の設計、体験の向上など、お客さまの課題に合わせて最適なチームを構成します。チームとしてプロジェクトに参画することで、品質の高いソリューションを提供します。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. プロダクトがまだ構想段階ですが、依頼できますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    はい、構想段階からのご相談も歓迎です。むしろ初期段階からUI/UXの専門家が参画することで、ユーザー視点を取り入れたプロダクト設計が可能になり、後々の大幅な改修を防ぐことができます。アイデア検証からプロトタイピング、本開発までシームレスにサポートします。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. 社内にデザイナーがいる場合でも支援は可能ですか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    はい、構想段階からのご相談も歓迎です。むしろ初期段階からUI/UXの専門家が参画することで、ユーザー視点を取り入れたプロダクト設計が可能になり、後々の大幅な改修を防ぐことができます。アイデア検証からプロトタイピング、本開発までシームレスにサポートします。
                  </p>
                </div>
                
                <div className="py-8">
                  <h4 className="text-xl mb-4">Q. 開発チームとの連携はどのように行いますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    私たちは開発プロセスと密接に連携したデザインワークフローを確立しています。開発チームの使用するツールへの統合、実装を考慮したデザイン提供、技術的制約の理解と解決策の提案など、デザインから開発へのスムーズな橋渡しを重視しています。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contract development */}
          <section id="contract-development" className="md:pb-20 pb-10 border-b border-[var(--foreground)]/10">
            <div className="flex items-center group md:py-6 py-4 px-4 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)]/90 border border-[var(--foreground)]/10 z-10 bg-[url('/background.png')] bg-cover bg-center">
              <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
                <span className="text-lg md:text-2xl">02</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-4xl mb-2">Contract development</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">受託開発</p>
                </div>
              </div>
            </div>
            
            {/* こんな課題はありませんか？ */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">こんな課題はありませんか？</h3>
              <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>企業の強みや価値が顧客に伝わっていない</li>
                  <li>ブランドイメージが統一されておらず、認知度が低い</li>
                  <li>競合との差別化ができていない</li>
                  <li>社内外でブランドの認識にばらつきがある</li>
                </ul>
              </div>
            </div>
            
            {/* プラズミズムが提供するソリューション */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">プラズミズムが提供するソリューション</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4">ブランド戦略策定</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    企業のビジョン・ミッション・バリューを明確化し、市場調査と競合分析に基づいた独自のブランドポジショニングを確立します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4">ビジュアルアイデンティティ構築</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ロゴ、カラーパレット、タイポグラフィなどのビジュアル要素を総合的にデザインし、一貫したブランドイメージを構築します。
                  </p>
                </div>
              </div>
            </div>
            
            {/* なぜプラズミズムを選ぶべきか */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">なぜプラズミズムを選ぶべきか</h3>
              <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>ブランディングとデジタル実装を一貫して行える強み</li>
                  <li>戦略的思考とクリエイティブの両方を兼ね備えたアプローチ</li>
                  <li>ブランドの本質を捉えた長期的な視点での設計</li>
                  <li>デジタルネイティブ時代に適応した表現方法の提案</li>
                </ul>
              </div>
            </div>
            
            {/* 実績 */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">実績</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/sample1.png"
                      alt="コーポレートブランディング実績"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl mb-2">NAMINORI</h4>
                    <p className="text-white/80 text-sm mb-4">ブランディング/パッケージデザイン</p>
                    <Link href="/achievements/achievement-2" className="text-white/60 hover:text-white text-sm">
                      詳細を見る →
                    </Link>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/sample1.png"
                      alt="コーポレートブランディング実績"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl mb-2">NAMINORI</h4>
                    <p className="text-white/80 text-sm mb-4">ブランディング/パッケージデザイン</p>
                    <Link href="/achievements/achievement-3" className="text-white/60 hover:text-white text-sm">
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/achievements" className="inline-block text-white/60 hover:text-white text-sm border border-white/20 rounded-full px-6 py-2">
                  実績一覧を見る
                </Link>
              </div>
            </div>
            
            {/* よくあるご質問 */}
            <div>
              <h3 className="text-2xl mb-6">コーポレートデザインに関するよくある質問</h3>
              <div className="border-t border-white/10">
                <div className="border-b border-white/10 py-8">
                  <h4 className="text-xl mb-4">Q. ブランディングにはどのくらいの期間がかかりますか？</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    プロジェクトの規模や範囲によりますが、基本的なブランド戦略とビジュアルアイデンティティの構築には2〜3ヶ月程度かかります。その後の展開や浸透フェーズも含めると、総合的なブランディングは継続的なプロセスとなります。
                  </p>
                </div>
                
                <div className="py-8">
                  <h4 className="text-xl mb-4">Q. リブランディングと新規ブランディングの違いは何ですか？</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    リブランディングは既存のブランドを見直し再構築するプロセスで、新規ブランディングはゼロから構築するプロセスです。プラズミズムではどちらにおいても、現状分析から始め、最適なブランド戦略を提案します。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* アーキテクチャデザイン */}
          <section id="cloud" className="pb-20">
            <div className="flex items-center group md:py-6 py-4 px-4 mb-8 rounded-lg sticky md:top-20 top-4 bg-[#251E1F]/90 border border-white/10 z-10 bg-[url('/background.png')] bg-cover bg-center">
              <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
                <span className="text-lg md:text-2xl">03</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-4xl mb-2">アーキテクチャデザイン</h3>
                  <p className="text-white/60 text-sm md:text-base">安定的で拡張性の高い技術基盤の確立</p>
                </div>
              </div>
            </div>
            
            {/* こんな課題はありませんか？ */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">こんな課題はありませんか？</h3>
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>システムの拡張性や柔軟性に課題がある</li>
                  <li>セキュリティリスクが不安</li>
                  <li>インフラコストの最適化ができていない</li>
                  <li>運用監視の体制が整っていない</li>
                </ul>
              </div>
            </div>
            
            {/* プラズミズムが提供するソリューション */}
            <div className="mb-16"> 
              <h3 className="text-2xl mb-6">プラズミズムが提供するソリューション</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h4 className="text-xl mb-4">最適なクラウド設計</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    ビジネスニーズに合わせたクラウドアーキテクチャを設計。スケーラビリティ、セキュリティ、コスト効率を考慮した最適な環境を構築します。
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h4 className="text-xl mb-4">自動化とモニタリング</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    インフラストラクチャのコード化（IaC）を導入し、デプロイメントの自動化と継続的なモニタリング体制を構築。安定したシステム運用を実現します。
                  </p>
                </div>
              </div>
            </div>
            
            {/* なぜプラズミズムを選ぶべきか */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">なぜプラズミズムを選ぶべきか</h3>
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>フロントエンドからインフラまでを一貫して理解した設計</li>
                  <li>セキュリティを最優先とした堅牢なシステム構築</li>
                  <li>コスト最適化を常に意識した設計と運用</li>
                  <li>自動化による運用効率の向上と安定性の確保</li>
                </ul>
              </div>
            </div>
            
            {/* 実績 */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">実績</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/sample1.png"
                      alt="クラウドインフラ実績"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl mb-2">NAMINORI</h4>
                    <p className="text-white/80 text-sm mb-4">クラウドインフラ構築</p>
                    <Link href="/achievements/achievement-3" className="text-white/60 hover:text-white text-sm">
                      詳細を見る →
                    </Link>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/sample1.png"
                      alt="クラウドインフラ実績"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl mb-2">NAMINORI</h4>
                    <p className="text-white/80 text-sm mb-4">クラウドインフラ構築</p>
                    <Link href="/achievements/achievement-1" className="text-white/60 hover:text-white text-sm">
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/achievements" className="inline-block text-white/60 hover:text-white text-sm border border-white/20 rounded-full px-6 py-2">
                  実績一覧を見る
                </Link>
              </div>
            </div>
            
            {/* よくあるご質問 */}
            <div>
              <h3 className="text-2xl mb-6">アーキテクチャデザインに関するよくある質問</h3>
              <div className="border-t border-white/10">
                <div className="border-b border-white/10 py-8">
                  <h4 className="text-xl mb-4">Q. アーキテクチャデザインにはどのくらいの期間がかかりますか？</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    システム規模や複雑さによって異なりますが、標準的には要件定義から詳細設計まで3〜6ヶ月程度を見込んでいます。段階的な設計計画を策定し、ビジネスへの影響を最小限に抑えながら進めます。
                  </p>
                </div>
                
                <div className="border-b border-white/10 py-8">
                  <h4 className="text-xl mb-4">Q. セキュリティ対策はどのように行われますか？</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    多層防御の考え方に基づき、ネットワークセキュリティ、アクセス制御、暗号化、脆弱性管理など包括的な対策を実施します。定期的なセキュリティ監査やペネトレーションテストも行い、継続的な改善を図ります。
                  </p>
                </div>
                
                <div className="py-8">
                  <h4 className="text-xl mb-4">Q. 既存システムとの互換性は担保されますか？</h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    事前に詳細な互換性評価を行い、必要に応じてアダプターやAPIの開発、データ変換ツールの導入などで互換性を確保します。移行後も安定運用できるよう、十分なテスト期間を設けています。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 