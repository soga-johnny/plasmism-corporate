'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutBrandIdentitySection() {
  const brandIdentitySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1080;
    const thresholdValue = isMobile ? 0.1 : 0.2;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const htmlElement = document.documentElement;
        if (entry.isIntersecting) {
          htmlElement.classList.remove('light');
        } else {
          // Consider interaction with Footer observer if necessary
          htmlElement.classList.add('light');
        }
      },
      {
        rootMargin: '0px',
        threshold: thresholdValue,
      }
    );

    const currentRef = brandIdentitySectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Reset to light theme when component unmounts
      document.documentElement.classList.add('light');
    };
  }, []);

  return (
    <section 
      ref={brandIdentitySectionRef} 
      className="pb-10 rounded-3xl md:p-20 p-8 md:mt-102 mt-56 md:mb-[560px] mb-72 relative"
      style={{
        backgroundImage: `url('/background.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'calc(100% - 20%) calc(100% - 20%)',
        backgroundColor: 'rgba(43, 35, 37, 0.9)'
      }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="mb-8 bg-[var(--foreground)]/4 rounded-xl p-6">
              <h2 className="border-l-2 border-[var(--foreground)]/30 pl-4 md:text-xl text-base text-[var(--foreground)]">ブランドアイデンティティ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <div className="bg-[var(--background)] rounded-lg overflow-hidden mb-3 border border-[var(--foreground)]/10">
                  <Image
                    src="/logo-vi.png"
                    alt="企業ロゴ"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-md text-[var(--foreground)]/60">企業ロゴ</p>
              </div>

              <div className="flex flex-col">
                <div className="bg-[var(--background)] rounded-lg overflow-hidden mb-3 border border-[var(--foreground)]/10">
                  <Image
                    src="/typography-vi.png"
                    alt="書体"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-md text-[var(--foreground)]/60">書体</p>
              </div>

              <div className="flex flex-col">
                <div className="bg-[var(--background)] rounded-lg overflow-hidden mb-3 border border-[var(--foreground)]/10">
                  <Image
                    src="/colorscheme-vi.png"
                    alt="ブランドカラー"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-md text-[var(--foreground)]/60">ブランドカラー</p>
              </div>

              <div className="flex flex-col">
                <div className="bg-[var(--background)] rounded-lg overflow-hidden mb-3 border border-[var(--foreground)]/10">
                  <Image
                    src="/comingsoon-vi.png"
                    alt="リブランディングに込めた想い"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md text-[var(--foreground)]/60">リブランディングに込めた想い</p>
                  <svg className="w-6 h-6 text-[var(--foreground)]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 