"use client"

import Footer from '@/components/Footer';
import CubeInteractive from '@/components/CubeObject';
// import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { useRef, useEffect } from 'react';
import ScrollingTitle from '@/components/ScrollingTitle';
import { Metadata } from 'next';

// メタデータをエクスポート
export const metadata: Metadata = {
  // title: "トップページ", // layout.tsxのdefaultを使用するためコメントアウト
  // description: "トップページのディスクリプション", // layout.tsxのdescriptionを使用するためコメントアウト
  openGraph: {
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
    images: ['/ogp.png'],
  }
};

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // セクションが表示されたら light クラスを削除 (デフォルトのダークテーマが適用される)
          document.documentElement.classList.remove('light');
        } else {
          // セクションがビューポートから見えなくなったら light クラスを追加
          // entry.boundingClientRect による追加チェックは不要
          document.documentElement.classList.add('light');
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = aboutSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // コンポーネントがアンマウントされたときにライトテーマに戻す
      document.documentElement.classList.add('light');
    };
  }, []);

  return (
    <main className="flex flex-col text-[var(--foreground)]">
      <Header />
      <section className="relative w-full mb-80">
        <div className="sticky top-0 h-screen z-0 mb-48">
          <CubeInteractive />
        </div>
        <div className="absolute top-0 w-full h-screen mix-blend-color-dodge flex items-center justify-center text-center px-4">
            <div>
              <Image src="/logo-dark.svg" width={1080} height={360} alt="Logo" className="w-[400px] md:w-[1080px] text-center mb-4" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-xs md:mb-0 mb-12 md:text-sm text-[var(--foreground)]">
                Scroll Down
              </p>
            </div>
          </div>

        <div className="relative z-10">
          <div
            ref={aboutSectionRef}
            className="w-full max-w-[1440px] md:mt-40 md:mb-40 mt-40 mb-12 mx-auto px-6 md:px-16 flex flex-col justify-center pt-64 md:pb-24 pb-2 bg-background"
          >
            <section className="md:pb-screen pb-screen md:mb-[120vh] mb-[180vh] w-full">
            <ScrollingTitle text="OUR VISION" />
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-1/2">
                <div className="flex space-x-4 mb-8">
                  <div className="border border-[var(--foreground)]/20 bg-[var(--foreground)]/10 rounded-full px-4 py-3">
                    <h2 className="md:text-md text-xs">ビジョン</h2>
                  </div>
                  <div className="border border-[var(--foreground)]/10 rounded-full -ml-8 px-4 py-3">
                    <h2 className="md:text-md text-xs">あるべき目指す世界</h2>
                  </div>
                </div>
                <div className="md:w-full rounded-lg border-b border-[var(--foreground)]/10 pb-10 mb-10">
                  <p className="text-xl md:text-4xl leading-tight font-light">
                  想像もできなかった豊かさを、<br/>
                  いつどの瞬間であっても、<br/>
                  噛み締めて実感できる、
                  そんな世界。<br/>
                  </p>
                </div>
                <p className="md:w-full text-[var(--foreground)] text-sm md:text-base font-light leading-relaxed mb-20">
                  プラズミズムは、テクノロジーと人々がよりシームレスに共存できる世界を目指し、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。
                  </p>
                  <Link href="/about" className="w-1/2 bg-[var(--foreground)] hover:bg-[#BC2611] hover:scale-105 hover:text-[var(--foreground)] transition-all duration-300 text-[var(--background)] rounded-md py-3 px-4 flex items-center justify-between text-sm border border-[var(--background)]/20">
              私たちについて <span className="ml-2 border-l border-[var(--background)]/50 hover:border-[var(--foreground)]/50 pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
              </div>
            </div>
          </section>

          <section className="md:pb-24 pb-2 md:mb-64 mb-2 w-full">
          <ScrollingTitle text="OUR FEATURE" />
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-1/2">
                <div className="flex space-x-4 mb-8">
                  <div className="border border-[var(--foreground)]/20 bg-[var(--foreground)]/10 rounded-full px-4 py-3">
                    <h2 className="md:text-md text-xs">特徴</h2>
                  </div>
                  <div className="border border-[var(--foreground)]/10 rounded-full -ml-8 px-4 py-3">
                    <h2 className="md:text-md text-xs">再現性のある戦略的アプローチ</h2>
                  </div>
                </div>
                <div className="md:w-full rounded-lg border-b border-[var(--foreground)]/10 pb-10 mb-10">
                  <p className="text-xl md:text-4xl leading-tight font-light">
                  磨き上げた最適解を
                  デザインするための
                  一貫したプロセス
                  </p>
                </div>
                <p className="md:w-full text-[var(--foreground)] text-sm md:text-base font-light leading-relaxed mb-20">
                経験と実績からブラッシュアップしたオリジナルの課題解決プロセスである、設計・実装・検証・改良のサイクルで、新しい価値を速く、強くデザインします。
                  </p>
                  <Link href="/feature" className="w-1/2 bg-[var(--foreground)] hover:bg-[#BC2611] hover:scale-105 hover:text-[var(--foreground)] transition-all duration-300 text-[var(--background)] rounded-md py-3 px-4 flex items-center justify-between text-sm border border-[var(--background)]/20">
              特徴 <span className="ml-2 border-l border-[var(--background)]/50 hover:border-[var(--foreground)]/50 pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
              </div>
              {/* <div className="mt-8 md:mt-2 md:ml-2 w-full md:w-auto">
                <Image 
                  src="/sample1.png"
                  alt="Mission Image"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover aspect-square w-full md:w-[300px]"
                />
              </div> */}
            </div>
          </section>
          </div>
        </div>

      </section>
      
      
      {/* PRODUCT Section (Moved Up & Adjusted Height) */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-center py-16 md:py-24 rounded-xl">
         {/* PageTitle style title */}
         <div className="mb-12 md:mb-16 border-b border-[var(--foreground)]/10 pb-4 md:pb-6">
          <p className="text-md mb-2 font-serif text-[var(--foreground)]">● Product</p>
          <h2 className="md:text-4xl text-2xl text-[var(--foreground)]">プロダクト</h2>
           <p className="mt-2 md:text-sm text-xs text-[var(--foreground)]/80">ソリッドベンチャーとして他事業との有機的な連携</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-16 mb-12 md:mb-16">
          {/* Product Item 1 */}
          <div className="group flex flex-col">
          <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                  <span className="text-[var(--foreground)] text-sm">1</span>
                </div>
            <div>
             <h3 className="text-2xl md:text-4xl mb-2 text-[var(--foreground)] group-hover:text-[var(--foreground)]/90 transition-colors">Lean Designer</h3>
            <p className="text-sm text-[var(--foreground)] leading-relaxed">
              開発専門のハイエンドUI/UXソリューション
            </p>
            </div>
            </div>
            <Link href="/product#lean-designer" className="block mb-6 relative overflow-hidden rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 transition-all duration-300">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src="/lean-designer.jpg"
                alt="Lean Designer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
              />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
                       </div>
                         <div className="md:p-6 p-4 flex justify-end items-center">
                  <div className="flex items-center text-[var(--foreground)]/80 text-sm group-hover:text-[var(--foreground)] transition-colors">
                    詳細を見る
                    <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
            </Link>
          </div>
          {/* Product Item 2 */}
           <div className="group flex flex-col">
            {/* Added title block similar to Product 1 */}
            <div className="flex items-center mb-8">
             <div className="w-3 h-12 bg-[var(--background)] border border-[var(--foreground)] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
               <span className="text-[var(--foreground)] text-sm">2</span>
             </div>
             <div>
               <h3 className="text-2xl md:text-4xl mb-2 text-[var(--foreground)] group-hover:text-[var(--foreground)]/90 transition-colors mt-1">Containeer</h3>
               <p className="text-sm text-[var(--foreground)] leading-relaxed">
                 バーチャルコンテンツのWEBギャラリーメディア
               </p>
             </div>
            </div>
            <Link href="/product#containeer" className="block mb-6 relative overflow-hidden rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 transition-all duration-300">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src="/containeer.jpg"
                alt="Containeer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
              />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
                           </div>
                              <div className="md:p-6 p-4 flex justify-end items-center">
                  <div className="flex items-center text-[var(--foreground)]/80 text-sm group-hover:text-[var(--foreground)] transition-colors">
                    詳細を見る
                    <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
            </Link>
          </div>
        </div>
      </section>

       {/* SERVICE Section (Moved Down & Adjusted Height) */}
      {/* Added a subtle background pattern class placeholder: 'bg-dots-pattern' */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-center py-16 md:py-24 bg-[var(--background)] relative isolate md:rounded-2xl rounded-xl">
        {/* Placeholder for a subtle background pattern/texture */}
        {/* <div className="absolute inset-0 -z-10 bg-dots-pattern opacity-5"></div> */}

        {/* PageTitle style title */}
        <div className="mb-12 md:mb-16 border-b border-[var(--foreground)]/10 pb-4 md:pb-6">
          <p className="text-md mb-2 font-serif text-[var(--foreground)]">● Service</p>
          <h2 className="md:text-4xl text-2xl text-[var(--foreground)]">サービス</h2>
          <p className="mt-2 md:text-sm text-xs text-[var(--foreground)]/80">相乗的な最適解の徹底的な追求</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Service Item 1 - Added Icon */}
          <Link href="/service#ux-design" className="group flex flex-col p-8 bg-[var(--foreground)]/5 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 hover:bg-[var(--foreground)]/10 transition-all duration-300">
            <div className="flex justify-start items-center mb-6">
                <svg className="w-8 h-8 text-[var(--foreground)] mr-2 mt-2 group-hover:text-[var(--foreground)]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>

                <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90 transition-colors mt-1">UXデザイン</h3>
            </div>
            <p className="text-[var(--foreground)]/70 text-sm md:text-base font-light mb-6 group-hover:text-[var(--foreground)]/80 transition-colors leading-relaxed">
              ユーザーリサーチとデータ分析に基づき、直感的で使いやすいインターフェースと最適なユーザー体験を設計。ビジネス成果に直結する価値を創出します。
            </p>
              <div className="flex justify-end items-center mt-auto">
                <span className="text-xs mr-2 text-[var(--foreground)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">詳細を見る</span>
                {/* Footer's rotating arrow SVG, adjusted size */}
                <svg className="w-8 h-8 text-[var(--foreground)]/70 group-hover:text-[var(--foreground)] transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                   <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
             </div>
          </Link>
          {/* Service Item 2 - Apply Layout & Hover changes */}
           <Link href="/service#corporate-design" className="group flex flex-col p-8 bg-[var(--foreground)]/5 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 hover:bg-[var(--foreground)]/10 transition-all duration-300">
             {/* Layout adjusted to match UX Design item */}
             <div className="flex justify-start items-center mb-6">
                 <svg className="w-8 h-8 text-[var(--foreground)] mr-2 mt-2 group-hover:text-[var(--foreground)]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21M3 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21M21 21v-3.375c0-.621-.504-1.125-1.125-1.125h-3.75c-.621 0-1.125.504-1.125 1.125V21" /></svg>
                 <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90 transition-colors mt-1">コーポレートデザイン</h3>
             </div>
             <p className="text-[var(--foreground)]/70 text-sm md:text-base font-light mb-6 group-hover:text-[var(--foreground)]/80 transition-colors leading-relaxed">
               企業の理念や価値観を反映したロゴ、ビジュアルアイデンティティを構築。あらゆる顧客接点で一貫したブランドイメージを確立し、企業価値を高めます。
             </p>
             {/* Adjusted hover effect: Text fades in, arrow rotates */}
             <div className="flex justify-end items-center mt-auto">
                <span className="text-xs mr-2 text-[var(--foreground)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">詳細を見る</span>
                {/* Footer's rotating arrow SVG, adjusted size */}
                <svg className="w-8 h-8 text-[var(--foreground)]/70 group-hover:text-[var(--foreground)] transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                   <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
             </div>
           </Link>
           {/* Service Item 3 - Apply Layout & Hover changes */}
            <Link href="/service#architecture-design" className="group flex flex-col p-8 bg-[var(--foreground)]/5 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 hover:bg-[var(--foreground)]/10 transition-all duration-300">
             {/* Layout adjusted to match UX Design item */}
             <div className="flex justify-start items-center mb-6">
                 <svg className="w-8 h-8 text-[var(--foreground)] mr-2 mt-2 group-hover:text-[var(--foreground)]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
                 <h3 className="text-xl md:text-2xl group-hover:text-[var(--foreground)]/90 transition-colors mt-1">アーキテクチャデザイン</h3>
             </div>
             <p className="text-[var(--foreground)]/70 text-sm md:text-base font-light mb-6 group-hover:text-[var(--foreground)]/80 transition-colors leading-relaxed">
               スケーラビリティ、セキュリティ、コスト効率を考慮し、ビジネスの成長を支える持続可能なシステム基盤を設計。将来の変化にも柔軟に対応します。
             </p>
              {/* Adjusted hover effect: Text fades in, arrow rotates */}
             <div className="flex justify-end items-center mt-auto">
                <span className="text-xs mr-2 text-[var(--foreground)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">詳細を見る</span>
                {/* Footer's rotating arrow SVG, adjusted size */}
                <svg className="w-8 h-8 text-[var(--foreground)]/70 group-hover:text-[var(--foreground)] transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                   <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
             </div>
            </Link>
        </div>
        <div className="w-full flex justify-center text-center mt-8">
        <Link href="/feature" className="w-1/2 bg-[var(--background)] hover:bg-[#BC2611] hover:scale-105 hover:text-[var(--background)] transition-all duration-300 text-[var(--foreground)] rounded-md py-3 px-4 flex items-center justify-between text-sm border border-[var(--foreground)]/40">
              サービス一覧 <span className="ml-2 border-l border-[var(--foreground)]/50 hover:border-[var(--background)] pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
        </div>
      </section>

      {/* RECRUIT Section (Adjusted Height) */}
       <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center py-16 md:py-24">
          {/* PageTitle style title */}
         <div className="mb-12 md:mb-16 border-b border-[var(--foreground)]/10 pb-4 md:pb-6">
            <p className="text-md mb-2 font-serif text-[var(--foreground)]">● Recruit</p>
            <h2 className="md:text-4xl text-2xl text-[var(--foreground)]">採用情報</h2>
             <p className="mt-2 md:text-sm text-xs text-[var(--foreground)]/80">尽きない探究と革新の瞬間を共有</p>
         </div>

         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--foreground)]/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow-reverse"></div>
         <div className="space-y-10">
        {/* Notionページへの遷移ボタン */}
        <div className="mb-12">
          <Link 
            href="https://same-ranunculus-85c.notion.site/Plasmism-1bf43fbe1206801bb0efd6d37bf01449" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[var(--foreground)]/10 hover:bg-[var(--foreground)]/15 transition-all border border-[var(--foreground)]/20 rounded-xl px-8 py-6 flex flex-col md:flex-row md:justify-between md:items-center w-full"
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl mb-2">採用情報の詳細</h3>
              <p className="text-sm text-[var(--foreground)]/60">採用情報の詳細はNotionページでご確認いただけます</p>
            </div>
            <div className="flex items-center pt-4 md:pt-0 border-t md:border-t-0 border-[var(--foreground)]/10">
              <span className="mr-2 text-[var(--foreground)]/60">詳細を見る</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 5l7 7-7 7M5 12h15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
        
        {/* プラズミズムで働くメリット */}
        <div className="mb-12">
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
        <div>
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

      <Footer />
    </main>
  );
}
