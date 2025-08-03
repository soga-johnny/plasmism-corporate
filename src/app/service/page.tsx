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
            <a href="#product-design" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--background)]/20 transition-all duration-300 rounded-lg p-4 pl-0" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#product-design')?.scrollIntoView({ behavior: 'smooth' });
            }}>
             <Image src="/ux-design-icon.svg" alt="Product Design Icon" width={36} height={36} className="mr-3" />

            <div className="flex-1 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">プロダクトデザイン</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">新規プロダクト開発とMVPのUX最適化伴走支援</p>
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
          </div>
        </div>

        <div className="space-y-24 mb-16 md:mx-16 mx-4 pt-10">
          {/* プロダクトデザイン */}
          <section id="product-design" className="md:pb-20 pb-10 border-b border-[var(--foreground)]/10">
          <div className="relative group md:py-6 py-4 md:px-4 px-3 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)] border border-[var(--foreground)]/40 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-30 z-0"></div>
            <div className="relative z-10 flex items-center w-full">
            <Image src="/ux-design-icon.svg" alt="Product Design Icon" width={36} height={36} className="mr-3" />

              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-4xl mb-1">プロダクトデザイン</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">新規プロダクト開発とMVPのUX最適化伴走支援</p>
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
                    <p className="text-sm md:text-base">新規プロダクトのアイデアはあるが、どう形にしていいかわからない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">MVPを開発したが、ユーザーの反応が芳しくない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">プロダクトのユーザビリティテストや改善サイクルが回せていない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">開発リソースが限られているため、デザインに十分な時間をかけられない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">ターゲットユーザーのニーズや行動パターンが把握できていない</p>
                  </div>
                  <div className="flex items-start p-4 border-b border-[var(--foreground)]/10">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">競合調査や市場分析ができておらず、差別化要因が不明確</p>
                  </div>
                  <div className="flex items-start p-4">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">プロダクトのスケール戦略やロードマップが描けていない</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* プラズミズムが提供するソリューション */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">プラズミズムが提供するソリューション</h3>
              <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">プラズミズムのプロダクトデザインは、アイデアからMVP、そしてスケールまでの全フェーズを伴走支援します。「仮説構築→プロトタイピング→検証→改良」のサイクルを通じて、市場に受け入れられるプロダクトの開発を実現し、継続的な成長を支援します。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">01</span>
                    アイデア検証とコンセプト設計
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    市場調査とユーザーリサーチを通じて、プロダクトアイデアの妥当性を検証。ターゲットユーザーの真のニーズを発見し、独自の価値提案を設計します。競合分析やペルソナ設計により、明確なプロダクトコンセプトを構築し、開発の方向性を定めます。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">02</span>
                    MVPの設計と最適化
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    仮説検証に必要な最小限の機能を特定し、効率的なMVP開発を支援。ユーザビリティテストやフィードバック収集を通じて、継続的にプロダクトを改善します。限られたリソースで最大の学習効果を得られるよう、戦略的な機能設計を行います。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">03</span>
                    データドリブンな改善サイクル
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    ユーザー行動データやKPI分析に基づく継続的な改善を実施。A/Bテストや定性調査を組み合わせ、仮説検証のサイクルを確立します。データに基づく意思決定により、プロダクトマーケットフィットの実現と成長を加速させます。
                  </p>
                </div>
                <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                  <h4 className="text-xl mb-4 flex items-center">
                    <span className="text-[var(--foreground)]/50 text-xl mr-3">04</span>
                    スケール戦略の策定と実行
                  </h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    プロダクトの成長段階に応じた機能拡張や新市場への展開戦略を策定。スケーラブルなデザインシステムの構築により、効率的な開発体制を確立します。長期的なプロダクトロードマップを設計し、持続的な競争優位性を構築します。
                  </p>
                </div>
              </div>
            </div>
            
            {/* なぜプラズミズムを選ぶべきか */}
            <div className="mb-16">
              <h3 className="text-2xl mb-6">なぜプラズミズムを選ぶべきか</h3>
              <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>アイデア段階からスケールまでを見通した総合的なプロダクト戦略立案</li>
                  <li>可能性は尽きないという理念のもと、革新的なソリューションの徹底的な追求</li>
                  <li>データと仮説検証に基づく科学的なプロダクト開発手法</li>
                  <li>少数精鋭だからこそ可能な迅速な意思決定と柔軟な対応力</li>
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
              <h3 className="text-2xl mb-6">プロダクトデザインに関するよくある質問</h3>
              <div className="border-t border-[var(--foreground)]/10">
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. プロダクト開発の初期段階から依頼できますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    はい、アイデア段階からサポート可能です。むしろ初期段階からプロダクトデザイナーが参画することで、市場のニーズを捉えた最適なプロダクト設計が実現でき、後の大幅な方向転換を防げます。市場調査、ユーザーリサーチ、コンセプト設計からMVP開発まで一貫してサポートします。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. MVPの失敗要因分析と改善も対応できますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    はい、既存MVPの詳細分析から改善提案まで対応しています。ユーザー行動データの分析、ユーザビリティテスト、競合調査を通じて課題を特定。仮説ベースの改善施策を実施し、継続的な最適化を支援します。データドリブンなアプローチでプロダクトマーケットフィットの実現を目指します。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. 開発チームとの連携はどのように行いますか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    アジャイル開発プロセスに合わせた協業体制を構築します。デザインシステムやプロトタイプの提供、スプリント計画への参加、開発中の仕様調整など、開発チームと密接に連携。技術的制約を理解した実装可能なデザインを提供し、効率的なプロダクト開発を実現します。
                  </p>
                </div>
                
                <div className="border-b border-[var(--foreground)]/10 py-8">
                  <h4 className="text-xl mb-4">Q. 準委任契約での長期伴走は可能ですか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    はい、準委任契約での長期的な伴走支援を提供しています。プロダクトの成長段階に応じて柔軟にサポート内容を調整でき、継続的な改善と新機能開発を効率的に進められます。週3日や週5日など、必要なリソース量に応じた契約形態で対応可能です。
                  </p>
                </div>
                
                <div className="py-8">
                  <h4 className="text-xl mb-4">Q. スケール段階でのサポートも可能ですか？</h4>
                  <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed">
                    はい、プロダクトのスケール段階も重要な支援領域です。成長に合わせたデザインシステムの拡張、新市場への展開戦略、チーム体制の最適化などを支援。長期的なプロダクトロードマップの策定により、持続的な成長を実現します。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Corporate design */}
          <section id="corporate-design" className="pb-20">
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

        </div>
      </div>
      
      <Footer />
    </main>
  );
} 