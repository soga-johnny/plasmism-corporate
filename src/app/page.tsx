"use client"

import Footer from '@/components/Footer';
import CubeInteractive from '@/components/CubeObject';
// import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { useRef, useEffect } from 'react';
import ScrollingTitle from '@/components/ScrollingTitle';

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
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center py-16 md:py-24 bg-[var(--background)] rounded-xl">
         {/* PageTitle style title */}
         <div className="mb-12 md:mb-16 border-b border-[var(--foreground)]/10 pb-4 md:pb-6">
          <p className="text-md mb-2 font-serif text-[var(--foreground)]">● PRODUCT</p>
          <h2 className="md:text-4xl text-2xl text-[var(--foreground)]">プロダクト</h2>
           <p className="mt-2 md:text-sm text-xs text-[var(--foreground)]/80">ソリッドベンチャーとして他事業との有機的な連携</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-16 mb-12 md:mb-16">
          {/* Product Item 1 */}
          <div className="group flex flex-col">
            <Link href="/product#lean-designer" className="block mb-6 relative overflow-hidden rounded-xl border border-[var(--foreground)]/10 shadow-sm hover:shadow-xl transition-all duration-300">
              <Image
                src="/lean-designer.jpg"
                alt="Lean Designer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex justify-end">
                 <span className="text-white text-xs md:text-sm border border-white/60 rounded-full px-4 py-1.5 backdrop-blur-md bg-black/50 shadow-md">詳細を見る</span>
              </div>
            </Link>
             <h3 className="text-xl md:text-2xl font-light mb-3 text-[var(--foreground)] group-hover:text-[var(--foreground)]/90 transition-colors">Lean Designer</h3>
            <p className="text-sm font-light text-[var(--foreground)]/70 mb-4 leading-relaxed">
              開発専門のハイエンドUI/UXソリューション。AIを活用したデザイン計画書生成機能と、柔軟なコンポーネントシステムで、複雑な要件定義から実装までの開発プロセス全体を効率化し、高品質なプロダクト開発を力強く支援します。
            </p>
            <Link
              href="/product#lean-designer"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin group mt-auto hover:underline underline-offset-4"
            >
              Webサイトを見る <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
          {/* Product Item 2 */}
           <div className="group flex flex-col">
            <Link href="/product#containeer" className="block mb-6 relative overflow-hidden rounded-xl border border-[var(--foreground)]/10 shadow-sm hover:shadow-xl transition-all duration-300">
              <Image
                src="/containeer.jpg"
                alt="Containeer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex justify-end">
                 <span className="text-white text-xs md:text-sm border border-white/60 rounded-full px-4 py-1.5 backdrop-blur-md bg-black/50 shadow-md">詳細を見る</span>
              </div>
            </Link>
            <h3 className="text-xl md:text-2xl font-light mb-3 text-[var(--foreground)] group-hover:text-[var(--foreground)]/90 transition-colors">Containeer</h3>
            <p className="text-sm font-light text-[var(--foreground)]/70 mb-4 leading-relaxed">
              世界中から厳選されたXRコンテンツを展示するバーチャルギャラリーWEBメディア。従来の枠を超えたインタラクティブな体験を通じて、デジタルアートや空間デザインの新たなインスピレーションと出会う場を提供します。
            </p>
            <Link
              href="/product#containeer"
               className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin group mt-auto hover:underline underline-offset-4"
            >
              Webサイトを見る <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/product"
             className="inline-flex items-center text-[var(--foreground)] border border-[var(--foreground)]/30 px-8 py-3 rounded-full hover:bg-[var(--foreground)]/10 transition-all duration-300 text-sm font-thin group hover:border-[var(--foreground)]/50 hover:shadow-md"
          >
            プロダクト一覧を見る
             <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

       {/* SERVICE Section (Moved Down & Adjusted Height) */}
      {/* Added a subtle background pattern class placeholder: 'bg-dots-pattern' */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center py-16 md:py-24 bg-[var(--background)] relative isolate">
        {/* Placeholder for a subtle background pattern/texture */}
        {/* <div className="absolute inset-0 -z-10 bg-dots-pattern opacity-5"></div> */}

        {/* PageTitle style title */}
        <div className="mb-12 md:mb-16 border-b border-[var(--foreground)]/10 pb-4 md:pb-6">
          <p className="text-md mb-2 font-serif text-[var(--foreground)]">● SERVICE</p>
          <h2 className="md:text-4xl text-2xl text-[var(--foreground)]">サービス</h2>
          <p className="mt-2 md:text-sm text-xs text-[var(--foreground)]/80">相乗的な最適解の徹底的な追求</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Service Item 1 - Added Icon */}
          <Link href="/service#ux-design" className="group flex flex-col p-8 bg-[var(--foreground)]/5 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 hover:bg-[var(--foreground)]/10 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl text-[var(--foreground)]/30 mr-3 font-thin">01</span>
                <h3 className="text-xl md:text-2xl font-light group-hover:text-[var(--foreground)]/90 transition-colors mt-1">UXデザイン</h3>
              </div>
              {/* Icon Placeholder */}
               <svg className="w-6 h-6 text-[var(--foreground)]/30 group-hover:text-[var(--foreground)]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
            </div>
            <p className="text-[var(--foreground)]/70 text-sm md:text-base font-light mb-6 group-hover:text-[var(--foreground)]/80 transition-colors leading-relaxed">
              ユーザーリサーチとデータ分析に基づき、直感的で使いやすいインターフェースと最適なユーザー体験を設計。ビジネス成果に直結する価値を創出します。
            </p>
            <div className="flex justify-end items-center mt-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
              <span className="text-xs mr-2 text-[var(--foreground)]/60 group-hover:text-[var(--foreground)]/70">詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
          {/* Service Item 2 - Added Icon */}
           <Link href="/service#corporate-design" className="group flex flex-col p-8 bg-[var(--foreground)]/5 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 hover:bg-[var(--foreground)]/10 transition-all duration-300 hover:shadow-lg">
             <div className="flex justify-between items-start mb-4">
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl text-[var(--foreground)]/30 mr-3 font-thin">02</span>
                <h3 className="text-xl md:text-2xl font-light group-hover:text-[var(--foreground)]/90 transition-colors mt-1">コーポレートデザイン</h3>
              </div>
              {/* Icon Placeholder */}
              <svg className="w-6 h-6 text-[var(--foreground)]/30 group-hover:text-[var(--foreground)]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21M3 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21M21 21v-3.375c0-.621-.504-1.125-1.125-1.125h-3.75c-.621 0-1.125.504-1.125 1.125V21" /></svg>
            </div>
            <p className="text-[var(--foreground)]/70 text-sm md:text-base font-light mb-6 group-hover:text-[var(--foreground)]/80 transition-colors leading-relaxed">
              企業の理念や価値観を反映したロゴ、ビジュアルアイデンティティを構築。あらゆる顧客接点で一貫したブランドイメージを確立し、企業価値を高めます。
            </p>
            <div className="flex justify-end items-center mt-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
               <span className="text-xs mr-2 text-[var(--foreground)]/60 group-hover:text-[var(--foreground)]/70">詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
          {/* Service Item 3 - Added Icon */}
           <Link href="/service#architecture-design" className="group flex flex-col p-8 bg-[var(--foreground)]/5 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/40 hover:bg-[var(--foreground)]/10 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-baseline">
                 <span className="text-4xl md:text-5xl text-[var(--foreground)]/30 mr-3 font-thin">03</span>
                <h3 className="text-xl md:text-2xl font-light group-hover:text-[var(--foreground)]/90 transition-colors mt-1">アーキテクチャデザイン</h3>
              </div>
               {/* Icon Placeholder */}
              <svg className="w-6 h-6 text-[var(--foreground)]/30 group-hover:text-[var(--foreground)]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <p className="text-[var(--foreground)]/70 text-sm md:text-base font-light mb-6 group-hover:text-[var(--foreground)]/80 transition-colors leading-relaxed">
              スケーラビリティ、セキュリティ、コスト効率を考慮し、ビジネスの成長を支える持続可能なシステム基盤を設計。将来の変化にも柔軟に対応します。
            </p>
             <div className="flex justify-end items-center mt-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
               <span className="text-xs mr-2 text-[var(--foreground)]/60 group-hover:text-[var(--foreground)]/70">詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/service"
            className="inline-flex items-center text-[var(--foreground)] border border-[var(--foreground)]/30 px-8 py-3 rounded-full hover:bg-[var(--foreground)]/10 transition-all duration-300 text-sm font-thin group hover:border-[var(--foreground)]/50 hover:shadow-md"
          >
            サービス一覧を見る
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* RECRUIT Section (Adjusted Height) */}
       <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center py-16 md:py-24 bg-[var(--background)]">
          {/* PageTitle style title */}
         <div className="mb-12 md:mb-16 border-b border-[var(--foreground)]/10 pb-4 md:pb-6">
            <p className="text-md mb-2 font-serif text-[var(--foreground)]">● RECRUIT</p>
            <h2 className="md:text-4xl text-2xl text-[var(--foreground)]">採用情報</h2>
             <p className="mt-2 md:text-sm text-xs text-[var(--foreground)]/80">尽きない探究と革新の瞬間を共有</p>
         </div>

         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--foreground)]/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow-reverse"></div>
          <div className="relative flex-grow flex items-center justify-center bg-gradient-to-br from-[var(--foreground)]/5 via-transparent to-[var(--foreground)]/5 rounded-2xl p-10 md:p-16 border border-[var(--foreground)]/10 overflow-hidden shadow-inner shadow-[var(--foreground)]/5">
            <div className="absolute inset-0 opacity-[0.07] z-0 mix-blend-overlay">
              <Image src="/background.png" layout="fill" objectFit="cover" alt="Background texture" className="scale-150 blur-lg"/>
            </div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <p className="text-lg md:text-xl font-light leading-relaxed md:leading-loose mb-12 text-[var(--foreground)]/90 max-w-3xl mx-auto">
                「豊かな毎日を、コンピューターと情報表現で、真摯にデザインする」<br className="hidden md:block" />
                このミッションに共感し、想像を超える豊かさを共に創造する仲間を求めています。<br />
                あなたの情熱とスキルで、未来のデザインを一緒に描きませんか？
              </p>
              <Link
                href="/recruit"
                className="inline-block bg-[var(--foreground)] text-[var(--background)] px-12 py-4 rounded-full hover:bg-[#BC2611] hover:scale-[1.03] transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BC2611]"
              >
                採用情報を見る
              </Link>
            </div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
