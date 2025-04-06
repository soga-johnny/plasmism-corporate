"use client"

import Footer from '../components/Footer'
import Link from 'next/link'
import Header from '@/components/Header'
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col text-gray-900 bg-white md:py-12 pt-2 pb-24">
      <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <div className="space-y-12 mb-16 md:mx-16 mx-4 pt-10">
          {/* 404エラーセクション */}
          <section className="border-b border-gray-200 pb-20">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg">
                <h1 className="text-7xl md:text-9xl leading-tight mb-6">
                  404
                </h1>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6">
                  ページが見つかりませんでした
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-12">
                  お探しのページは移動または削除された可能性があります
                </p>
                <Link
                  href="/"
                  className="inline-block border border-gray-300 bg-gray-100 rounded-full px-8 py-4 text-sm hover:bg-gray-200 transition-colors duration-300"
                >
                  トップページに戻る
                </Link>
              </div>
            </div>
          </section>

          {/* おすすめコンテンツセクション */}
          <section className="pb-20">
            <h2 className="text-4xl md:text-5xl mb-12">おすすめコンテンツ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/feature" className="group">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="text-2xl mb-4">特徴</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    プラズミズムの特徴と強みについてご紹介します
                  </p>
                </div>
              </Link>
              <Link href="/recruit" className="group">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="text-2xl mb-4">採用情報</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    共に革新的なデジタル体験を創造する仲間を募集しています
                  </p>
                </div>
              </Link>
              <Link href="/contact" className="group">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="text-2xl mb-4">お問い合わせ</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    プロジェクトのご相談やお問い合わせはこちらから
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 