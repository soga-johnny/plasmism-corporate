"use client"

import Footer from '@/components/Footer';
import CubeInteractive from '@/components/CubeObject';
// import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { useRef, useEffect, useState, useCallback } from 'react';
import ScrollingTitle from '@/components/ScrollingTitle';
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const serviceSectionRef = useRef<HTMLElement>(null);
  const [isServiceSectionInView, setIsServiceSectionInView] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // const scrollAmount = 616; // カード幅(600) + ギャップ(16) approx

  // const handleScroll = (direction: 'left' | 'right') => {
  //   if (scrollContainerRef.current) {
  //     const currentScroll = scrollContainerRef.current.scrollLeft;
  //     const newScroll = direction === 'left'
  //       ? currentScroll - scrollAmount
  //       : currentScroll + scrollAmount;
  //     scrollContainerRef.current.scrollTo({
  //       left: newScroll,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const checkDeviceSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);

    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);

  const opacityRange = isMobile ? [0, 0.05] : [0, 0.07];
  const opacity = useTransform(scrollYProgress, opacityRange, [1, 0]);

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
      document.documentElement.classList.add('light');
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsServiceSectionInView(entry.isIntersecting);
      },
      {
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0.01
      }
    );

    const currentServiceSection = serviceSectionRef.current;
    if (currentServiceSection) {
      observer.observe(currentServiceSection);
    }

    return () => {
      if (currentServiceSection) {
        observer.unobserve(currentServiceSection);
      }
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheelScroll = (event: globalThis.WheelEvent) => {
      if (!scrollContainer) return;

      const { deltaY } = event;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      if (Math.abs(deltaY) < 1) {
          return;
      }

      const isAtStart = scrollLeft < 1;
      const isAtEnd = scrollWidth <= clientWidth || scrollLeft >= scrollWidth - clientWidth - 1;

      if (deltaY > 0 && isAtEnd) {
        return;
      }
      if (deltaY < 0 && isAtStart) {
        return;
      }

      event.preventDefault();

      const scrollMultiplier = 1.5;
      scrollContainer.scrollLeft += deltaY * scrollMultiplier;
    };

    if (isServiceSectionInView && scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheelScroll, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheelScroll);
      }
    };
  }, [isServiceSectionInView]);

  const updateScrollability = useCallback(() => {
    const element = scrollContainerRef.current;
    if (element) {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const threshold = 5;
      setCanScrollLeft(scrollLeft > threshold);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - threshold);
    }
  }, []);

  useEffect(() => {
    updateScrollability();
    window.addEventListener('resize', updateScrollability);
    return () => window.removeEventListener('resize', updateScrollability);
  }, [updateScrollability]);

  useEffect(() => {
    const element = scrollContainerRef.current;
    if (element) {
      element.addEventListener('scroll', updateScrollability);
      return () => element.removeEventListener('scroll', updateScrollability);
    }
  }, [updateScrollability]);

  const getMaskStyle = () => {
    const fadeWidth = '100px';

    const gradientParts = [
      canScrollLeft ? `transparent 0%` : `black 0%`,
      canScrollLeft ? `black ${fadeWidth}` : `black 0%`,
      canScrollRight ? `black calc(100% - ${fadeWidth})` : 'black 100%',
      canScrollRight ? `transparent 100%` : 'black 100%'
    ];

    const gradient = `linear-gradient(to right, ${gradientParts.join(', ')})`;

    return {
      maskImage: gradient,
      WebkitMaskImage: gradient,
    };
  };

  return (
    <main className="flex flex-col text-[var(--foreground)] md:pb-12">
      <Header />
      <section className="relative w-full mb-40">
        <div className="sticky top-0 h-screen z-0 mb-48 will-change-transform transition-all duration-1000 ease-out">
          <CubeInteractive />
        </div>
        <motion.div
          className="absolute top-0 w-full h-screen mix-blend-color-dodge flex items-center justify-center text-center px-4"
          style={{ opacity }}
        >
            <div>
              <Image src="/logo-dark.svg" width={1080} height={360} alt="Logo" className="w-[400px] md:w-[1080px] text-center mb-4" />
              <p className="absolute md:bottom-8 bottom-26 left-0 right-0 text-center text-xs mb-0 md:text-sm text-[var(--foreground)]">
                Scroll Down
              </p>
            </div>
          </motion.div>

        <div className="relative z-10">
          <div
            ref={aboutSectionRef}
            className="w-full max-w-[1440px] md:mt-40 md:mb-40 mt-40 mb-12 mx-auto px-6 md:px-16 flex flex-col justify-center md:pt-80 pt-80 pb-2 bg-background"
          >
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:pb-screen pb-screen md:mb-[120vh] mb-[150vh] w-full"
            >
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
                    噛み締めて実感できる、そんな世界。<br/>
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
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:pb-24 pb-2 md:mb-64 mb-2 w-full"
            >
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
                    磨き上げた最適解をデザイン<br/>するための一貫したプロセス
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
            </motion.section>
            </div>
          </div>

        </section>
        
        
        {/* PRODUCT Section (Moved Up & Adjusted Height) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-[1440px] mx-auto flex flex-col justify-center py-8 md:py-24"
        >
           {/* PageTitle style title */}
           <div className="md:mt-10 mt-8 mb-8 md:mb-12 px-6 md:px-8 text-[#2B2325]">
            <p className="text-md mb-3 font-serif">● Product</p>
            <h2 className="md:text-6xl text-4xl">プロダクト</h2>
             <p className="mt-6 md:text-base text-sm text-[#2B2325]/80">確実な市場理解のあるセグメントで、サービスとのエコシステムを大切にしたプロダクトデザインを徹底しています。

</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-2 gap-y-1 md:gap-y-2 mb-12 md:mb-16">
            {/* Product Item 1 */}
            <div className='relative md:p-8 p-6 bg-[#F6F4F5] border-b border-r border-[#E2DFE0] rounded-3xl hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
            {/* Number Pill */}
              <div className="absolute md:top-4 top-2 md:left-12 left-8 text-white z-10">
                <div className="w-3 h-12 bg-[#2B2325] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                    <span className="text-white text-sm">1</span>
                  </div>
              </div>
            <Link href="/product#lean-designer" className="group block relative rounded-xl transition-all duration-300 aspect-[16/9]">
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-t-xl">
                <Image
                  src="/lean-designer.jpg"
                  alt="Lean Designer Product Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Bottom Content */}
              <div className="p-4 md:p-6 bg-[#2B2325] backdrop-blur-sm text-white flex justify-between items-center rounded-b-xl">
                <div>
                  <h4 className="text-2xl md:text-3xl font-light mb-2">Lean Designer</h4>
                  <p className="text-xs md:text-sm text-white/70 mb-2">開発専門のハイエンドUI/UXソリューション</p>
                </div>
                {/* Arrow */}
                <div className="flex justify-center ml-2">
                      <svg className="md:w-10 w-8 md:h-10 h-8 transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
              </div>
              </Link>
            </div>
            

            {/* Product Item 2 */}
            <div className='relative md:p-8 p-6 bg-[#F6F4F5] border-b border-r border-[#E2DFE0] rounded-3xl hover:bg-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
            {/* Number Pill */}
              <div className="absolute md:top-4 top-2 md:left-12 left-8 text-white z-10">
                <div className="w-3 h-12 bg-[#2B2325] rounded-full flex items-center justify-center md:mr-4 mr-3 py-8 px-3">
                    <span className="text-white text-sm">2</span>
                  </div>
              </div>
            <Link href="/product#containeer" className="group block relative rounded-xl transition-all duration-300 aspect-[16/9]">
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-t-xl">
                <Image
                  src="/containeer.jpg"
                  alt="Containeer Product Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Bottom Content */}
              <div className="p-4 md:p-6 bg-[#2B2325] backdrop-blur-sm text-white flex justify-between items-center rounded-b-xl">
                <div>
                  <h4 className="text-2xl md:text-3xl font-light mb-2">Containeer</h4>
                  <p className="text-xs md:text-sm text-white/70 mb-2">バーチャルコンテンツのWEBギャラリーメディア</p>
                </div>
                {/* Arrow */}
                <div className="flex justify-center ml-2">
                      <svg className="md:w-10 w-8 md:h-10 h-8 transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
              </div>
              </Link>
            </div>
          </div>
        </motion.section>

         {/* SERVICE Section */}
        <motion.section
          ref={serviceSectionRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full mx-auto flex flex-col justify-center min-h-screen"
        >
          <div className="w-full max-w-[1440px] mx-auto px-0 md:px-8 py-1 md:py-24">
            <div className="md:mt-10 mt-8 md:mb-8 mb-6 mx-6 md:mx-0 md:mb-12 text-[#2B2325]">
              <p className="text-md mb-3 font-serif">● Service</p>
              <h2 className="md:text-6xl text-4xl">サービス</h2>
              <p className="mt-6 md:text-base text-sm text-[#2B2325]/80">再現性のあるプロセスでソリューションを提供します。各サービスは単体でも組み合わせても提供可能です。</p>
            </div>

            <div
              ref={scrollContainerRef}
              className="w-full mx-auto md:overflow-x-auto mb-0 md:mb-0 md:pb-12 md:px-4 service-scroll-container relative overflow-visible"
              style={getMaskStyle()}
            >
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 py-4">
                  {/* Service Item 1: UX Design */}
                  <Link href="/service#ux-design" className="md:p-16 md:pr-0 p-8 group flex flex-col md:flex-row md:w-[860px] bg-[#F6F4F5] rounded-3xl hover:bg-[#F6F4F5]/80 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex-shrink-0">
                      {/* Content Container (Icon, Title, Text, Image): Takes up most space */}
                      <div className="flex flex-col flex-1 order-1">
                          {/* Text Area */}
                          <div className="pb-4 md:pb-6">
                       <div className="flex items-center mb-4">
                           <Image src="/ux-design-icon.svg" alt="UX Design Icon" width={40} height={40} className="mr-3" />
                           <h3 className="text-2xl md:text-4xl text-[#2B2325]">UXデザイン</h3>
                       </div>
                       <p className="text-[#2B2325]/80 text-sm md:text-base font-light mb-auto leading-relaxed">
                           ユーザーリサーチとデータ分析に基づき、直感的で使いやすいインターフェースと最適なユーザー体験を設計。ビジネス成果に直結する価値を創出します。
                       </p>
                          </div>
                          {/* Image Area */}
                          <div className="relative w-full h-auto aspect-video overflow-hidden rounded-xl mt-4">
                           <Image
                           src="/ux-design.jpg"
                           alt="UX Design Image"
                           fill
                           sizes="100vw, 50vw"
                           className="object-contain group-hover:scale-105 transition-transform duration-500"
                           />
                           </div>
                      </div>

                      {/* Arrow Container: Separate column on desktop */}
                      <div className="flex items-center justify-end p-0 md:p-6 mt-4 mb-2 md:px-8 md:ml-12 ml-0 order-2 md:border-l border-[#E2DFE0]">
                          <svg className="w-8 h-8 text-[#2B2325]/70 group-hover:text-[#2B2325] transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                      </div>
                  </Link>

                  {/* Service Item 2: Corporate Design */}
                   <Link href="/service#corporate-design" className="md:p-16 md:pr-0 p-8 group flex flex-col md:flex-row md:w-[860px] bg-[#F6F4F5] rounded-3xl hover:bg-[#F6F4F5]/80 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex-shrink-0">
                      {/* Content Container */}
                      <div className="flex flex-col flex-1 order-1">
                          {/* Text Area */}
                          <div className="pb-4 md:pb-6">
                         <div className="flex items-center mb-4">
                             <Image src="/corporate-design-icon.svg" alt="Corporate Design Icon" width={40} height={40} className="mr-3" />
                             <h3 className="text-2xl md:text-4xl text-[#2B2325]">コーポレートデザイン</h3>
                         </div>
                         <p className="text-[#2B2325]/80 text-sm md:text-base font-light mb-auto leading-relaxed">
                             企業の理念や価値観を反映したロゴ、ビジュアルアイデンティティを構築。あらゆる顧客接点で一貫したブランドイメージを確立し、企業価値を高めます。
                         </p>
                          </div>
                          {/* Image Area */}
                          <div className="relative w-full h-auto aspect-video overflow-hidden rounded-xl mt-4">
                           <Image
                              src="/corporate-design.jpg"
                              alt="Corporate Design Image"
                              fill
                              sizes="100vw, 50vw"
                              className="object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                          </div>
                      </div>

                      {/* Arrow Container */}
                      <div className="flex items-center justify-end p-0 md:p-6 mt-4 mb-2 md:px-8 md:ml-12 ml-0 order-2 md:border-l border-[#E2DFE0]">
                          <svg className="w-8 h-8 text-[#2B2325]/70 group-hover:text-[#2B2325] transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                      </div>
                  </Link>

                   {/* Service Item 3: Architecture Design */}
                  <Link href="/service#architecture-design" className="md:p-16 md:pr-0 p-8 group flex flex-col md:flex-row md:w-[860px] bg-[#F6F4F5] rounded-3xl hover:bg-[#F6F4F5]/80 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex-shrink-0">
                       {/* Content Container */}
                       <div className="flex flex-col flex-1 order-1">
                           {/* Text Area */}
                           <div className="pb-4 md:pb-6">
                        <div className="flex items-center mb-4">
                           <Image src="/architecture-design-icon.svg" alt="Architecture Design Icon" width={40} height={40} className="mr-3" />
                           <h3 className="text-2xl md:text-4xl text-[#2B2325]">アーキテクチャデザイン</h3>
                        </div>
                        <p className="text-[#2B2325]/80 text-sm md:text-base font-light mb-auto leading-relaxed">
                          スケーラビリティ、セキュリティ、コスト効率を考慮し、ビジネスの成長を支える持続可能なシステム基盤を設計。将来の変化にも柔軟に対応します。
                        </p>
                           </div>
                           {/* Image Area */}
                           <div className="relative w-full h-auto aspect-video overflow-hidden rounded-xl mt-4">
                            <Image
                               src="/architecture-design.jpg"
                               alt="Architecture Design Image"
                               fill
                               sizes="100vw, 50vw"
                               className="object-contain group-hover:scale-105 transition-transform duration-500"
                               />
                           </div>
                       </div>

                       {/* Arrow Container */}
                       <div className="flex items-center justify-end p-0 md:p-6 mt-4 mb-2 md:px-8 md:ml-12 ml-0 order-2 md:border-l border-[#E2DFE0]">
                          <svg className="w-8 h-8 text-[#2B2325]/70 group-hover:text-[#2B2325] transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                      </div>
                   </Link>
                  </div>
              </div>
          </div>
        </motion.section>

         {/* RECRUIT Section (Adjusted Height) */}
         <motion.section
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
           className="w-full max-w-[1440px] mx-auto px-0 md:px-16 flex flex-col justify-center py-16 md:py-24"
         >

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
          </motion.section>

          {/* MEDIA Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-center py-16 md:py-24"
          >
            {/* PageTitle style title */}
            <h2 className="text-2xl font-thin flex items-center mb-6">
              メディア実績
              <span className="ml-12 h-px flex-1 bg-[#2B2325]/10"></span>
            </h2>

            {/* Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-x-2 md:gap-y-6">
              {/* Media Item 1 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_mainichi.png"
                  alt="毎日新聞"
                  width={228}
                  height={45}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 2 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_voix.png"
                  alt="VOIX biz"
                  width={196}
                  height={68}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 3 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_newsyou.png"
                  alt="NEWS YOU-USE"
                  width={248}
                  height={33}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 4 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_livedoor.png"
                  alt="livedoor News"
                  width={222}
                  height={27}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 5 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_zaikei.png"
                  alt="財経新聞"
                  width={147}
                  height={30}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 6 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_mapion.png"
                  alt="Mapion"
                  width={198}
                  height={74}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 7 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_third.png"
                  alt="THIRD NEWS"
                  width={173}
                  height={68}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 8 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_tvtokyo.png"
                  alt="テレ東"
                  width={156}
                  height={56}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 9 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_xexeq.png"
                  alt="XEXEQ"
                  width={192}
                  height={57}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
              {/* Media Item 10 */}
              <div className="aspect-[3/2] relative bg-[#F6F4F5] rounded-xl p-4 md:p-6 flex items-center justify-center">
                <Image
                  src="/images/media/logo_nikkei.png"
                  alt="NIKKEI"
                  width={203}
                  height={64}
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
              </div>
            </div>
          </motion.section>

        <Footer />

        {/* Custom Scrollbar CSS */}
        <style jsx global>{`
          .service-scroll-container::-webkit-scrollbar {
            height: 6px;
            /* width: 6px; */ /* Width is less relevant for horizontal scrollbar */
            background-color: #E2DFE0; /* Light grey background matching border */
            border-radius: 3px;
          }
          .service-scroll-container::-webkit-scrollbar-thumb {
            background-color: #888; /* Grey thumb */
            border-radius: 3px;
          }
          .service-scroll-container::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* Darker grey thumb on hover */
          }
          /* Firefox */
          .service-scroll-container {
            scrollbar-width: thin;
            scrollbar-color: #888 #E2DFE0; /* thumb track */
          }
          /* Ensure the scroll container respects the global padding */
          @media (min-width: 768px) {
             .service-scroll-container {
               /* No specific hover effects needed by default */
             }
          }
        `}</style>
      </main>
    );
}

export default Home;
