"use client";

import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Header from '@/components/Header';
import Image from 'next/image';

export default function ServicePage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2">
      <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Service" 
          titleJa="サービス" 
          description="相乗的な最適解の徹底的な追求" 
        />
        
        <div className="mb-16 md:mx-16 mx-4">
          <p className="text-[var(--foreground)]/80 mb-10 ">再現性のあるプロセスでソリューションを提供します。各サービスは単体でも組み合わせても提供可能です。</p>
          
          <div className="space-y-4">
            <a href="#ux-design" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--background)]/20 transition-all duration-300 rounded-lg p-4 pl-0" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#ux-design')?.scrollIntoView({ behavior: 'smooth' });
            }}>
             <Image src="/ux-design-icon.svg" alt="UX Design Icon" width={36} height={36} className="mr-3" />

            <div className="flex-1 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">UXデザイン</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">ユーザー中心設計による体験価値の最大化</p>
              </div>
              <div className="ml-2 transform group-hover:rotate-270 transition-transform duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            </a>
            
            <a href="#corporate-design" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--background)]/20 transition-all duration-300 rounded-lg p-4 pl-0" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#corporate-design')?.scrollIntoView({ behavior: 'smooth' });
            }}>
             <Image src="/corporate-design-icon.svg" alt="Corporate Design Icon" width={36} height={36} className="mr-3" />

            <div className="flex-1 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">コーポレートデザイン</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">企業理念に直結するアイデンティティの構築</p>
              </div>
              <div className="ml-2 transform group-hover:rotate-270 transition-transform duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            </a>
            
            <a href="#architecture-design" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--background)]/20 transition-all duration-300 rounded-lg p-4 pl-0" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#architecture-design')?.scrollIntoView({ behavior: 'smooth' });
            }}>
             <Image src="/architecture-design-icon.svg" alt="Architecture Design Icon" width={36} height={36} className="mr-3" />

            <div className="flex-1 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">アーキテクチャデザイン</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">要求機能の提案と実現と最適化</p>
              </div>
              <div className="ml-2 transform group-hover:rotate-270 transition-transform duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            </a>
          </div>
        </div>

        <div className="space-y-24 mb-16 md:mx-16 mx-4 pt-10">
          {/* UXデザイン */}
          <section id="ux-design" className="md:pb-20 pb-10 border-b border-[var(--foreground)]/10">
          <div className="relative group md:py-6 py-4 md:px-4 px-3 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)] border border-[var(--foreground)]/40 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-30 z-0"></div>
            <div className="relative z-10 flex items-center w-full">
            <Image src="/ux-design-icon.svg" alt="UX Design Icon" width={36} height={36} className="mr-3" />

              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-4xl mb-1">UXデザイン</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">ユーザー中心設計による体験価値の最大化</p>
                </div>
              </div>
            </div>
          </div>


          <div className="relative w-full h-auto aspect-video overflow-hidden rounded-xl mt-4 mb-8 md:mb-12">
                          <Image
                             src="/ux-design.jpg"
                             alt="UX Design Image"
                             fill
                             sizes="100vw, 50vw"
                             className="md:object-contain object-cover group-hover:scale-105 transition-transform duration-500"
                             />
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
              <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">プラズミズムのUXデザインは、4つのプロセス「設計→実装→検証→改良」を短いサイクルで繰り返すことで、ユーザー体験を継続的に向上させます。データに基づく意思決定と再現性のあるプロセスを通じて、ビジネス成果に直結するデザインを実現します。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">01</span>
                    徹底したユーザー中心設計
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ユーザーリサーチと行動データ分析に基づき、真のニーズを発見。感覚ではなく事実に基づいた設計で、使いやすさと満足度を最大化します。ユーザーインタビューやユーザビリティテストを通じて実際の行動パターンを理解し、より直感的なインターフェースを実現します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">02</span>
                    ビジネス目標と連動したKPI設計
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    美しさだけでなく、ビジネス成果に直結する指標を設計。コンバージョン率や継続率など、重要なKPIの向上に焦点を当てた改善を実施します。ユーザーの行動データを分析し、意思決定のポイントを特定することで、効果的な体験改善を実現します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">03</span>
                    デザインシステムの構築と運用
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    再利用可能なコンポーネントとパターンを体系化し、一貫性のある体験と効率的な開発を両立。スケーラブルな設計で長期的価値を創出します。デザインとコードの一貫性を確保し、開発チームとの協業をスムーズにすることで、品質と開発速度を向上させます。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">04</span>
                    反復的な検証と改良
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    短期サイクルで検証と改良を繰り返し、リリース後も継続的に最適化。ユーザーの行動変化や新たなニーズに柔軟に対応します。A/Bテストやヒートマップ分析などの手法を用いて、仮説検証を行い、科学的アプローチでユーザー体験を進化させます。
                  </p>
                </div>
              </div>
            </div>
            
            {/* なぜプラズミズムを選ぶべきか */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">なぜプラズミズムを選ぶべきか</h3>
              <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>設計から実装までをシームレスに繋ぐエンジニアリング視点を持ったデザイン</li>
                  <li>可能性は尽きないという理念のもと、最適解を徹底的に追求するオペレーション</li>
                  <li>データと検証に基づく客観的な意思決定プロセス</li>
                  <li>少数精鋭だからこそ可能な一貫した品質と迅速なフィードバックループ</li>
                </ul>
              </div>
            </div>
            
            {/* 実績 */}
            {/* <div className="mb-16">
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
            </div> */}
            
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
          
          {/* Corporate design */}
          <section id="corporate-design" className="md:pb-20 pb-10 border-b border-[var(--foreground)]/10">
          <div className="relative group md:py-6 py-4 md:px-4 px-3 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)] border border-[var(--foreground)]/40 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-30 z-0"></div>
            <div className="relative z-10 flex items-center w-full">
            <Image src="/corporate-design-icon.svg" alt="Corporate Design Icon" width={36} height={36} className="mr-3" />

              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-4xl mb-2">コーポレートデザイン</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">企業理念に直結するアイデンティティの構築</p>
                </div>
              </div>
            </div>
          </div>


          <div className="relative w-full h-auto aspect-video overflow-hidden rounded-xl mt-4 mb-8 md:mb-12">
                          <Image
                             src="/corporate-design.jpg"
                             alt="Corporate Design Image"
                             fill
                             sizes="100vw, 50vw"
                             className="md:object-contain object-cover group-hover:scale-105 transition-transform duration-500"
                             />
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
                    <p className="text-sm md:text-base">企業の強みや価値が顧客に伝わっていない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">ブランドイメージが統一されておらず、認知度が低い</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">競合との差別化ができていない</p>
                  </div>
                  <div className="flex items-start p-4">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">社内外でブランドの認識にばらつきがある</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* プラズミズムが提供するソリューション */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">プラズミズムが提供するソリューション</h3>
              <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">プラズミズムのコーポレートデザインは、企業理念と価値観を核に、一貫性のあるビジュアルアイデンティティを構築します。「知識は裏切らない」という価値観に基づき、綿密な調査と分析を行い、企業の本質を表現するデザインを長期的視点で伴走的に構築していきます。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">01</span>
                    ブランド戦略策定
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    企業の存在意義とビジョンを明確化し、市場分析と競合調査に基づいた独自のポジショニングを確立。企業の本質的価値を再定義し、一貫したメッセージを設計します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">02</span>
                    ビジュアルアイデンティティ構築
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    企業理念を視覚的に表現するロゴや配色、タイポグラフィ等のアイデンティティを設計。デジタルとリアルの両空間で一貫して機能する柔軟かつ強固なビジュアルシステムを構築します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">03</span>
                    コミュニケーション戦略立案
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ブランドストーリーやメッセージング、コピーライティングなど、ターゲットとの効果的なコミュニケーション方法を設計。企業価値が正しく伝わる言語表現とトーン&マナーを確立し、一貫したコミュニケーションを実現します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">04</span>
                    ブランド体験の統合と浸透
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ウェブサイト、印刷物、空間デザインなど、あらゆる顧客接点におけるブランド体験を統合。社内外へのブランド教育プログラムを通じて、一貫したブランド表現を促進し、長期的なブランド価値の向上と定着を支援します。
                  </p>
                </div>
              </div>
            </div>
            
            {/* なぜプラズミズムを選ぶべきか */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">なぜプラズミズムを選ぶべきか</h3>
              <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>企業の本質と向き合い、真の価値を引き出す深い洞察力</li>
                  <li>ブランド戦略とデジタル実装を一貫して行える総合的な視点</li>
                  <li>「良いものは多くない」という価値観に基づく厳選された選択肢の提案</li>
                  <li>デジタルとリアルを融合した現代的なブランド体験の設計</li>
                </ul>
              </div>
            </div>
            
            {/* 実績 */}
            {/* <div className="mb-16">
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
            </div> */}
            
            {/* よくあるご質問 */}
            <div>
              <h3 className="text-2xl mb-6">コーポレートデザインに関するよくある質問</h3>
              <div className="border-t border-[var(--foreground)]/10">
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. ブランディングにはどのくらいの期間がかかりますか？</h4>
                  <p className="text-[var(--foreground)] text-sm md:text-base leading-relaxed">
                    プロジェクトの規模や範囲によりますが、基本的なブランド戦略とビジュアルアイデンティティの構築には2〜3ヶ月程度かかります。その後の展開や浸透フェーズも含めると、総合的なブランディングは継続的なプロセスとなります。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. リブランディングと新規ブランディングの違いは何ですか？</h4>
                  <p className="text-[var(--foreground)] text-sm md:text-base leading-relaxed">
                    リブランディングは既存のブランドを見直し再構築するプロセスで、新規ブランディングはゼロから構築するプロセスです。プラズミズムではどちらにおいても、現状分析から始め、最適なブランド戦略を提案します。
                  </p>
                </div>

                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. ブランディングの成功をどのように測定しますか？</h4>
                  <p className="text-[var(--foreground)] text-sm md:text-base leading-relaxed">
                    ブランド認知度、ユーザーエンゲージメント、顧客満足度、市場シェア変化など、プロジェクトの目標に応じた複数のKPIを設定します。定量的・定性的な指標を組み合わせて継続的に測定し、効果検証とブランド戦略の調整を行います。
                  </p>
                </div>

                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. コーポレートデザインの契約形態はどのようなものがありますか？</h4>
                  <p className="text-[var(--foreground)] text-sm md:text-base leading-relaxed">
                    主に一括契約と準委任契約の2種類があります。基本的なブランディングは80万円〜350万円の一括契約で、ブランドの育成や発展には月額での準委任契約をお勧めしています。長期的なブランド価値の向上には、継続的な関与が効果的です。
                  </p>
                </div>

                <div className="py-8">
                  <h4 className="text-xl mb-4">Q. 既存のデザインガイドラインがある場合はどう対応しますか？</h4>
                  <p className="text-[var(--foreground)] text-sm md:text-base leading-relaxed">
                    既存のガイドラインを尊重しつつ、必要に応じて拡張や最適化を行います。企業の歴史や既存のブランド資産を活かしながら、時代や市場の変化に合わせた改良を提案し、ブランドの一貫性と進化のバランスを取ります。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* アーキテクチャデザイン */}
          <section id="architecture-design" className="pb-20">
          <div className="relative group md:py-6 py-4 md:px-4 px-3 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)] border border-[var(--foreground)]/40 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-30 z-0"></div>
            <div className="relative z-10 flex items-center w-full">
            <Image src="/architecture-design-icon.svg" alt="Architecture Design Icon" width={36} height={36} className="mr-3" />

              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-4xl mb-2">アーキテクチャデザイン</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">要求機能の提案と実現と最適化</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-auto aspect-video overflow-hidden rounded-xl mt-4 mb-8 md:mb-12">
                          <Image
                             src="/architecture-design.jpg"
                             alt="Architecture Design Image"
                             fill
                             sizes="100vw, 50vw"
                             className="md:object-contain object-cover group-hover:scale-105 transition-transform duration-500"
                             />
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
                    <p className="text-sm md:text-base">システムの拡張性や柔軟性に課題がある</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">セキュリティリスクが不安</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">インフラコストの最適化ができていない</p>
                  </div>
                  <div className="flex items-start p-4">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">運用監視の体制が整っていない</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* プラズミズムが提供するソリューション */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">プラズミズムが提供するソリューション</h3>
              <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">プラズミズムのアーキテクチャデザインは、ビジネスの成長と変化に柔軟に対応できるシステム基盤を設計します。「設計→実装→検証→改良」の一貫したプロセスを通じて、安全性と拡張性を兼ね備えた最適なシステム構成を実現し、長期的な技術的負債を最小化します。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">01</span>
                    システム設計と最適化
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ビジネス要件とテクノロジートレンドを踏まえた最適なシステム設計を提案。スケーラビリティ、セキュリティ、コスト効率を考慮した持続可能なアーキテクチャを構築します。マイクロサービスやサーバーレスなど、適切なアプローチを選定し、将来の拡張性も確保します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">02</span>
                    自動化とインフラ構築
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    インフラのコード化（IaC）とCI/CDパイプラインの整備により、デプロイメントプロセスを自動化。監視システムの構築で安定運用を実現し、障害発生時の迅速な対応体制を確立します。Terraform、AWS CloudFormationなどのツールを活用し、一貫性のある環境構築を可能にします。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">03</span>
                    セキュリティ設計と実装
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    多層防御の考え方に基づく包括的なセキュリティ対策を実施。ネットワークセキュリティ、アイデンティティ管理、データ保護、脆弱性管理など、全ての層でセキュリティを確保します。定期的な脅威モデリングとリスク評価により、変化する脅威に対応可能な堅牢なシステムを構築します。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">04</span>
                    データ戦略とアナリティクス
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ビジネスインテリジェンスとデータ活用基盤の設計・構築。大規模データの効率的な収集・処理・分析のためのアーキテクチャを設計し、データドリブンな意思決定を支援します。ETLプロセスの自動化やデータウェアハウス構築など、データの価値を最大化する基盤を整備します。
                  </p>
                </div>
              </div>
            </div>
            
            {/* なぜプラズミズムを選ぶべきか */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">なぜプラズミズムを選ぶべきか</h3>
              <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>フロントエンドからインフラまでを見通した統合的な設計視点</li>
                  <li>「知識は裏切らない」という価値観に基づく最新技術と実績ある手法の適切な選択</li>
                  <li>セキュリティと拡張性を最優先とした長期的に持続可能なシステム構築</li>
                  <li>ビジネス目標と技術的制約のバランスを取った実行可能なソリューション提案</li>
                </ul>
              </div>
            </div>
            
            {/* 実績 */}
            {/* <div className="mb-16">
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
            </div> */}
            
            {/* よくあるご質問 */}
            <div>
              <h3 className="text-2xl mb-6">アーキテクチャデザインに関するよくある質問</h3>
              <div className="border-t border-[var(--foreground)]/10">
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. アーキテクチャデザインにはどのくらいの期間がかかりますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    システム規模や複雑さによって異なりますが、標準的には要件定義から詳細設計まで3〜6ヶ月程度を見込んでいます。段階的な設計計画を策定し、ビジネスへの影響を最小限に抑えながら進めます。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. セキュリティ対策はどのように行われますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    多層防御の考え方に基づき、ネットワークセキュリティ、アクセス制御、暗号化、脆弱性管理など包括的な対策を実施します。定期的なセキュリティ監査やペネトレーションテストも行い、継続的な改善を図ります。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. 既存システムとの互換性は担保されますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    事前に詳細な互換性評価を行い、必要に応じてアダプターやAPIの開発、データ変換ツールの導入などで互換性を確保します。移行後も安定運用できるよう、十分なテスト期間を設けています。
                  </p>
                </div>

                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. アーキテクチャデザインの契約形態はどのようなものがありますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    初期設定費として30万円〜100万円の一括契約と、月額10万円〜25万円の運用保守契約があります。システム規模や要件によって費用は変動しますが、長期的な視点で最適な投資計画を提案します。エンタープライズ規模のシステムについては個別にご相談ください。
                  </p>
                </div>

                <div className="py-8">
                  <h4 className="text-xl mb-4">Q. クラウド選定はどのように行いますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ビジネス要件、予算、技術的要件を総合的に評価し、AWS、Azure、GCPなどから最適なプラットフォームを選定します。特定のクラウドに依存しない設計も可能で、マルチクラウドやハイブリッドクラウド戦略についても支援します。将来の移行コストや拡張性も考慮した提案を行います。
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