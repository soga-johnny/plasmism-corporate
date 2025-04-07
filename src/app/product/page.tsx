'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "プロダクト",
  description: "プラズミズムが開発・提供するプロダクトをご紹介します。ソリッドベンチャーとして他事業との有機的な連携を重視しています。Lean DesignerやContaineerなど。",
  openGraph: {
    title: "プロダクト",
    description: "プラズミズムが開発・提供するプロダクトをご紹介します。ソリッドベンチャーとして他事業との有機的な連携を重視しています。Lean DesignerやContaineerなど。",
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
    title: "プロダクト",
    description: "プラズミズムが開発・提供するプロダクトをご紹介します。ソリッドベンチャーとして他事業との有機的な連携を重視しています。Lean DesignerやContaineerなど。",
    images: ['/ogp.png'],
  },
};

export default function ProductPage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
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
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">Lean Designer</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">開発専門のハイエンドUI/UXソリューション</p>
              </div>
              <div className="ml-2 transform group-hover:rotate-270 transition-transform duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </a>
          
          <a href="#containeer" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/10 hover:border-[var(--background)]/20 transition-all duration-300 rounded-lg md:p-4 p-2" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#containeer')?.scrollIntoView({ behavior: 'smooth' });
          }}>
                  <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">2</span>
                </div>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90">Containeer</h3>
                <p className="text-[var(--foreground)]/60 text-sm md:text-base group-hover:text-[var(--foreground)]/80">バーチャルコンテンツのWEBギャラリーメディア</p>
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
                  <h3 className="text-2xl md:text-4xl mb-2">Lean Designer</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">開発専門のハイエンドUI/UXソリューション</p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="mb-16">
            <h3 className="text-2xl mb-6">デザインでかなえるクリティカルな課題解決、スマートな開発体験</h3>
            <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">あなたの開発プロジェクトに最適したUI/UXの要件定義をまとめたデザイン計画書をAIを活用して生成</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">01</span>
                </div>
                <h4 className="text-center text-lg mb-4">デザイン計画書の<br />生成</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                お客様の課題を洗い出し、最適なプランを提供するために設計された機能です。現状の課題やニーズを入力するだけで、プロジェクトに必要な要件を記載したデザイン計画書をAIが生成します。
                </p>
              </div>
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">02</span>
                </div>
                <h4 className="text-center text-lg mb-4">コンポーネント<br />システム</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                開発プロジェクトの進行状況やステージをセクションとして分類し、そのセクション内のコンポーネントを必要なものだけご選択いただくことができる仕組みを開発しました。
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
        
       {/* Containeer */}
       <section id="containeer" className="md:pb-20 pb-10 border-b border-[var(--foreground)]/10">
       <div className="relative group md:py-6 py-4 md:px-4 px-3 mb-8 rounded-lg sticky md:top-20 top-4 bg-[var(--background)] border border-[var(--foreground)]/40 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--background)] z-0"></div>
            <div className="relative z-10 flex items-center w-full">
            <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">2</span>
                </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-4xl mb-2">Containeer</h3>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base">バーチャルコンテンツのWEBギャラリーメディア</p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="mb-16">
            <h3 className="text-2xl mb-6">インスピレーションを全く新しいものにアップデートする</h3>
            <p className="text-[var(--foreground)]/80 mb-8 text-sm md:text-base">世界中からセレクトしたXRのコンテンツをバーチャルギャラリーとして展示するWEBメディアです。</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">01</span>
                </div>
                <h4 className="text-center text-lg mb-4">画面越しに堪能できる<br />インタラクティブコンテンツ</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                従来は難易度の高いインタラクティブなコンテンツをWEB上でも十分に体験できるようにゼロベースでUXを設計し、新しいギャラリーメディアの形を確立しました。
                </p>
              </div>
              <div className="w-full bg-[var(--foreground)]/5 p-6 rounded-lg border border-[var(--foreground)]/10">
                <div className="text-center mb-3">
                  <span className="text-[var(--foreground)]/50 text-xl">02</span>
                </div>
                <h4 className="text-center text-lg mb-4">厳選した<br />セレクション</h4>
                <p className="text-[var(--foreground)]/80 text-xs md:text-sm leading-relaxed">
                真摯に作品と向き合わている、デジタルアートにふさわしい作品をセレクトして掲載しています。
                </p>
              </div>
            </div>
          </div>
 
            <div className="mt-6">
              <Link 
                href="https://containeer.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block w-full bg-[var(--foreground)]/5 rounded-lg border border-[var(--foreground)]/10 overflow-hidden hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={'/containeer.jpg'}
                    alt="Containeer"
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