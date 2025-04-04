"use client"

import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12 flex items-center justify-center">
        <div className="space-y-12 mb-16 md:mx-16 mx-4 pt-10 text-center">
          <section>
            <div className="flex flex-col items-center">
              <div className="rounded-lg">
                <h1 className="font-thin text-5xl md:text-7xl leading-tight mb-6">
                  Coming Soon
                </h1>
                <h2 className="font-thin text-2xl md:text-4xl leading-tight mb-6">
                  実績詳細ページ準備中
                </h2>
                <p className="text-[var(--foreground)]/80 text-sm md:text-base font-light leading-relaxed mb-12">
                  現在、実績の詳細ページを準備しております。公開まで今しばらくお待ちください。
                </p>
                <Link
                  href="/achievements"
                  className="inline-block border border-[var(--foreground)]/20 bg-[var(--foreground)]/10 rounded-full px-8 py-4 text-sm hover:bg-[var(--foreground)]/15 transition-colors duration-300"
                >
                  実績一覧に戻る
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
} 