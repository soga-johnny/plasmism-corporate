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
        <div className="sticky top-0 h-screen z-0">
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
            className="w-full h-[500vh] max-w-[1440px] my-80 mx-auto px-6 md:px-16 flex flex-col justify-center pt-80 pb-24 bg-background"
          >
            <section className="py-[100vh] mt-[110vh] w-full">
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

          <section className="py-screen my-[120vh] w-full">
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
      
      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24 bg-[var(--background)]/5 rounded-t-[40px]">
        <h2 className="text-3xl md:text-5xl font-thin mb-16 text-center text-[var(--foreground)]">SERVICE</h2>
        <div className="space-y-4 mb-12">
          <Link href="/service#consulting" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/20 transition-all duration-300 rounded-lg p-4">
            <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
              <span className="text-lg md:text-2xl text-[var(--foreground)]/50 group-hover:text-[var(--foreground)]/80 transition-colors">01</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-light mb-1 group-hover:text-[var(--foreground)]/90 transition-colors">事業開発・技術顧問</h3>
              <p className="text-[var(--foreground)]/70 text-sm font-light group-hover:text-[var(--foreground)]/80 transition-colors">ビジネス成長を加速する戦略的ITパートナー</p>
            </div>
            <div className="ml-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
          <Link href="/service#contract-development" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/20 transition-all duration-300 rounded-lg p-4">
            <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
              <span className="text-lg md:text-2xl text-[var(--foreground)]/50 group-hover:text-[var(--foreground)]/80 transition-colors">02</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-light mb-1 group-hover:text-[var(--foreground)]/90 transition-colors">受託開発</h3>
              <p className="text-[var(--foreground)]/70 text-sm font-light group-hover:text-[var(--foreground)]/80 transition-colors">高品質なソフトウェア開発をワンストップで提供</p>
            </div>
            <div className="ml-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
          <Link href="/service#technology-partnership" className="flex items-center group border-b border-[var(--foreground)]/10 pb-4 hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/20 transition-all duration-300 rounded-lg p-4">
            <div className="w-12 md:w-16 text-right pr-4 md:pr-6">
              <span className="text-lg md:text-2xl text-[var(--foreground)]/50 group-hover:text-[var(--foreground)]/80 transition-colors">03</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-light mb-1 group-hover:text-[var(--foreground)]/90 transition-colors">技術パートナーシップ</h3>
              <p className="text-[var(--foreground)]/70 text-sm font-light group-hover:text-[var(--foreground)]/80 transition-colors">長期的な視点で技術力向上を伴走支援</p>
            </div>
            <div className="ml-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <Link 
            href="/service"
            className="inline-block text-[var(--foreground)] border border-[var(--foreground)]/30 px-6 py-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors duration-300 text-sm font-thin"
          >
            サービス一覧を見る
          </Link>
        </div>
      </section>
      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24 bg-[var(--background)]">
        <h2 className="text-3xl md:text-5xl font-thin mb-16 text-center text-[var(--foreground)]">PRODUCT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-12">
          <div className="group">
            <Link href="/product#lean-designer" className="block mb-5 relative overflow-hidden rounded-lg">
              <Image 
                src="/images/product1.webp" 
                alt="Lean Designer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm border border-white/50 rounded-full px-4 py-1">詳細を見る</span>
              </div>
            </Link>
            <h3 className="text-xl md:text-2xl font-light mb-2 text-[var(--foreground)]">Lean Designer</h3>
            <p className="text-sm font-light text-[var(--foreground)]/70 mb-4 leading-relaxed">
              開発専門のハイエンドUI/UXソリューション。AIがデザイン計画書を生成し、開発プロセスを効率化します。
            </p>
            <Link 
              href="/product#lean-designer"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin group-hover:text-[var(--foreground)]"
            >
              詳細を見る <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
          <div className="group">
            <Link href="/product#containeer" className="block mb-5 relative overflow-hidden rounded-lg">
              <Image 
                src="/images/product2.webp" 
                alt="Containeer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <span className="text-white text-sm border border-white/50 rounded-full px-4 py-1">詳細を見る</span>
              </div>
            </Link>
            <h3 className="text-xl md:text-2xl font-light mb-2 text-[var(--foreground)]">Containeer</h3>
            <p className="text-sm font-light text-[var(--foreground)]/70 mb-4 leading-relaxed">
              バーチャルコンテンツのWEBギャラリーメディア。世界中のXRコンテンツをインタラクティブに体験できます。
            </p>
            <Link 
              href="/product#containeer"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin group-hover:text-[var(--foreground)]"
            >
              詳細を見る <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Link 
            href="/product"
            className="inline-block text-[var(--foreground)] border border-[var(--foreground)]/30 px-6 py-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors duration-300 text-sm font-thin"
          >
            プロダクト一覧を見る
          </Link>
        </div>
      </section>
      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24 bg-[var(--background)]/5 rounded-b-[40px]">
        <h2 className="text-3xl md:text-5xl font-thin mb-16 text-center text-[var(--foreground)]">ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-12">
          {/* Achievement 1 */}
          <Link href="/achievements/coming-soon" className="group block">
            <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-lg">
              <Image 
                src="/images/achievement1.webp" 
                alt="Achievement 1 Image"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm border border-white/50 rounded-full px-4 py-1">詳細を見る</span>
              </div>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-1 group-hover:text-[var(--foreground)]/80 transition-colors">プロジェクトタイトル1</h3>
            <p className="text-sm font-light text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]/80 transition-colors">カテゴリ</p>
          </Link>
          {/* Achievement 2 */}
          <Link href="/achievements/coming-soon" className="group block">
            <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-lg">
              <Image 
                src="/images/achievement2.webp" 
                alt="Achievement 2 Image"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                 sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm border border-white/50 rounded-full px-4 py-1">詳細を見る</span>
              </div>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-1 group-hover:text-[var(--foreground)]/80 transition-colors">プロジェクトタイトル2</h3>
            <p className="text-sm font-light text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]/80 transition-colors">カテゴリ</p>
          </Link>
          {/* Achievement 3 */}
          <Link href="/achievements/coming-soon" className="group block">
             <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-lg">
              <Image 
                src="/images/achievement3.webp" 
                alt="Achievement 3 Image"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm border border-white/50 rounded-full px-4 py-1">詳細を見る</span>
              </div>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-1 group-hover:text-[var(--foreground)]/80 transition-colors">プロジェクトタイトル3</h3>
            <p className="text-sm font-light text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]/80 transition-colors">カテゴリ</p>
          </Link>
        </div>
        <div className="text-center">
          <Link 
            href="/achievements"
            className="inline-block text-[var(--foreground)] border border-[var(--foreground)]/30 px-6 py-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors duration-300 text-sm font-thin"
          >
            実績一覧を見る
          </Link>
        </div>
      </section>
      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24 bg-[var(--background)]">
        <div className="relative bg-[var(--foreground)]/5 rounded-lg p-10 md:p-16 border border-[var(--foreground)]/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10 z-0">
              <Image src="/background.png" layout="fill" objectFit="cover" alt="Background texture" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-thin mb-6 text-[var(--foreground)]">RECRUIT</h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-10 text-[var(--foreground)]/80 max-w-xl mx-auto">
              プラズミズムは、想像を超える豊かさを共に創造する仲間を求めています。
              あなたの情熱とスキルで、未来のデザインを一緒に描きませんか？
            </p>
            <Link 
              href="/recruit"
              className="inline-block bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full hover:bg-[#BC2611] hover:scale-105 transition-all duration-300 text-sm font-thin"
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
