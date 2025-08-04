'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2">
      <Header />
    <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
      <PageTitle 
        titleEn="Product" 
        titleJa="プロダクト" 
        description="ソリッドベンチャーとして他事業との有機的な連携" 
      />
      
      <div className="mb-16 md:mx-16 mx-4">
        <p className="text-[var(--foreground)]/80 mb-10">確実な市場理解のあるセグメントで、サービスとのエコシステムを大切にしたプロダクトデザインを徹底しています。</p>
        
        <div className="space-y-4">
          <a href="#lean-designer" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--background)]/20 transition-all duration-300 rounded-lg md:p-4 p-2" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#lean-designer')?.scrollIntoView({ behavior: 'smooth' });
          }}>
                <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">1</span>
                </div>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">Lean Designer Beta</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">プロダクト構想フェーズ専門コンセプトシートAI生成サービス</p>
              </div>
              <div className="ml-2 transform group-hover:rotate-270 transition-transform duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </a>
          
          <a href="#catalyst-me" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--background)]/20 transition-all duration-300 rounded-lg md:p-4 p-2" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#catalyst-me')?.scrollIntoView({ behavior: 'smooth' });
          }}>
                  <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">2</span>
                </div>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">Catalyst.me</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">応援されるポートフォリオサイト制作</p>
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
        {/* Lean Designer */}
        <section id="lean-designer" className="md:pb-20 pb-10">
          <div className="relative group md:py-6 py-4 md:px-4 px-3 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)] border border-[var(--foreground)]/40 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--background)] z-0"></div>
            <div className="relative z-10 flex items-center w-full">
            <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">1</span>
                </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-4xl mb-2">Lean Designer Beta</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">プロダクト構想フェーズ専門コンセプトシートAI生成サービス</p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="mb-16">
            <h3 className="text-2xl mb-6">アイデアを3分で隅々まで可視化する</h3>
            <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">プロダクトの解像度を上げるためのイメージをビジュアライズするAIソリューション</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">01</span>
                </div>
                <h4 className="text-center text-lg mb-4">コンセプトシートの<br />AI生成</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                プロダクト開発で想定される必要な戦略を考案して視覚化する「コンセプトシート」を作成。戦略策定に特化して各セクションのAI精度を細かくファインチューニング。視座高くプロダクトを精査できる。
                </p>
              </div>
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">02</span>
                </div>
                <h4 className="text-center text-lg mb-4">選択可能な<br />デザインシステム</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                コンセプトシートのデザインを2種類のスタイルから選択可能。デザインはコンセプトシートのクオリティを落とさないように、ビジュアル的にも情報設計的にも最適なデザインシステムを０から考案。
                </p>
              </div>
            </div>
          </div>
 
            <div className="mt-6">
              <Link 
                href="https://lean-designer.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block w-full bg-[var(--foreground)]/5 rounded-lg border border-[var(--foreground)]/10 overflow-hidden hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={'/lean-designer.jpg'}
                    alt="Lean Designer"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
                </div>
                <div className="md:p-6 p-4 flex justify-end items-center">
                  <div className="flex items-center text-[var(--foreground)]/60 text-sm group-hover:text-[var(--foreground)] transition-colors">
                    詳細を見る
                    <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
        </section>
        
       {/* Catalyst.me */}
       <section id="catalyst-me" className="md:pb-20 pb-10 border-b border-[var(--foreground)]/10">
       <div className="relative group md:py-6 py-4 md:px-4 px-3 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)] border border-[var(--foreground)]/40 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--background)] z-0"></div>
            <div className="relative z-10 flex items-center w-full">
            <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">2</span>
                </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-4xl mb-2">Catalyst.me</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">応援されるポートフォリオサイト制作</p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="mb-16">
            <h3 className="text-2xl mb-6">&quot;挑戦&quot;や&quot;想い&quot;を言葉とデザインで可視化</h3>
            <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">小さな挑戦から大きな夢まで、想いを宣言し、かたちにしていく</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">01</span>
                </div>
                <h4 className="text-center text-lg mb-4">想いを伝える<br />サイト制作</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                「何に取り組んでいるのか」だけではなく、「なぜそれをやっているのか」「どんな未来を描いているのか」といった想いをくみ取り、世界にひとつだけのWebサイトとして可視化します。
                </p>
              </div>
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">02</span>
                </div>
                <h4 className="text-center text-lg mb-4">更新・発信が<br />しやすい</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                制作したサイトは、ご自身での文章追加や画像変更が簡単にできるように設計。活動の報告など長期的に発信の拠点として使っていただけます。また、SNSとの連携も可能で、効果的に発信可能です。
                </p>
              </div>
            </div>
          </div>
 
            <div className="mt-6">
              <Link 
                href="https://catalyst-me.studio.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block w-full bg-[var(--foreground)]/5 rounded-lg border border-[var(--foreground)]/10 overflow-hidden hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={'/catalyst.me.jpg'}
                    alt="Catalyst.me"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
                </div>
                <div className="md:p-6 p-4 flex justify-end items-center">
                  <div className="flex items-center text-[var(--foreground)]/60 text-sm group-hover:text-[var(--foreground)] transition-colors">
                    詳細を見る
                    <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
        </section>
      </div>
    </div>
    
    <Footer />
  </main>
  );
} 