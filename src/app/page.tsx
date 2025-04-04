import Footer from '@/components/Footer';
import CubeInteractive from '@/components/CubeObject';
// import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col text-[var(--foreground)]">
      <section className="relative w-full h-[200vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute h-[200vh] top-0 inset-0 z-0">
          <CubeInteractive />
        </div>
        <div className="absolute top-0 h-screen flex items-center justify-center flex-col z-10 max-w-4xl mix-blend-color-dodge">
          <div className="relative w-[320px] h-[200px] md:w-[1200px] md:h-[800px]">
            <Image
              src="/logo-dark.svg"
              alt="Being Intention"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-xs md:text-xs font-light text-[var(--foreground)]/80 md:mt-12 mt-4 mb-8">
            Scroll Down
          </p>
        </div>

        <div className="pt-[70vh] h-screen w-full max-w-[1440px] px-4 md:px-16 py-24">
          <div className="max-w-[1440px] px-4 md:px-16 py-24">
        <h2 className="text-3xl md:text-5xl font-thin mb-12">About</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-[var(--foreground)]/80">
              プラズミズムは、ソフトウェア開発とデザインの専門家集団です。
              最新技術とデザイン思考を駆使し、ビジネス課題の解決と新たな価値創造を支援します。
              クライアントの成功を第一に考え、信頼されるパートナーを目指します。
            </p>
            <Link 
              href="/about"
              className="inline-block text-[var(--foreground)] border border-[var(--foreground)]/30 px-6 py-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors duration-300 text-sm font-thin"
            >
              More
            </Link>
          </div>
        </div>
        </div>
      </div>
      </section>
      

      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24 bg-[var(--foreground)]/5 rounded-t-[40px]">
        <h2 className="text-3xl md:text-5xl font-thin mb-12 text-center">SERVICE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
            <h3 className="text-2xl font-thin mb-4">コンサルティング</h3>
            <p className="text-sm font-light leading-relaxed text-[var(--foreground)]/80 mb-6">
              事業戦略から技術選定、開発プロセスの改善まで、ビジネス成長に必要な技術的課題を解決します。
            </p>
            <Link 
              href="/service#consulting"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin"
            >
              詳細を見る →
            </Link>
          </div>
          <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
            <h3 className="text-2xl font-thin mb-4">受託開発</h3>
            <p className="text-sm font-light leading-relaxed text-[var(--foreground)]/80 mb-6">
              Webアプリケーション、モバイルアプリ、基幹システムなど、高品質なソフトウェア開発をワンストップで提供します。
            </p>
            <Link 
              href="/service#contract-development"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin"
            >
              詳細を見る →
            </Link>
          </div>
          <div className="bg-[var(--foreground)]/5 p-8 rounded-lg border border-[var(--foreground)]/10">
            <h3 className="text-2xl font-thin mb-4">技術パートナーシップ</h3>
            <p className="text-sm font-light leading-relaxed text-[var(--foreground)]/80 mb-6">
              お客様の技術チームの一員として、長期的な視点で開発支援や技術力向上をサポートします。
            </p>
            <Link 
              href="/service#technology-partnership"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin"
            >
              詳細を見る →
            </Link>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24">
        <h2 className="text-3xl md:text-5xl font-thin mb-12 text-center">PRODUCT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group">
            <Link href="/product#lean-designer" className="block mb-4 relative overflow-hidden rounded-lg">
              <Image 
                src="/images/product1.webp" 
                alt="Lean Designer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
            </Link>
            <h3 className="text-2xl font-thin mb-2">Lean Designer</h3>
            <p className="text-sm font-light text-[var(--foreground)]/80 mb-4">
              開発専門のハイエンドUI/UXソリューション。AIがデザイン計画書を生成し、開発プロセスを効率化します。
            </p>
            <Link 
              href="/product#lean-designer"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin"
            >
              詳細を見る →
            </Link>
          </div>
          <div className="group">
            <Link href="/product#containeer" className="block mb-4 relative overflow-hidden rounded-lg">
              <Image 
                src="/images/product2.webp" 
                alt="Containeer Product Image"
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
            </Link>
            <h3 className="text-2xl font-thin mb-2">Containeer</h3>
            <p className="text-sm font-light text-[var(--foreground)]/80 mb-4">
              バーチャルコンテンツのWEBギャラリーメディア。世界中のXRコンテンツをインタラクティブに体験できます。
            </p>
            <Link 
              href="/product#containeer"
              className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300 text-sm font-thin"
            >
              詳細を見る →
            </Link>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24 bg-[var(--foreground)]/5 rounded-b-[40px]">
        <h2 className="text-3xl md:text-5xl font-thin mb-12 text-center">ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group">
            <Link href="/achievements/achievement-1" className="block mb-4 relative overflow-hidden rounded-lg">
              <Image 
                src="/images/achievement1.webp" 
                alt="Achievement 1 Image"
                width={400}
                height={400}
                className="w-full h-auto object-cover aspect-square transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
            </Link>
            <h3 className="text-xl font-thin">プロジェクトタイトル1</h3>
            <p className="text-sm font-light text-[var(--foreground)]/80">カテゴリ</p>
          </div>
          <div className="group">
            <Link href="/achievements/achievement-2" className="block mb-4 relative overflow-hidden rounded-lg">
              <Image 
                src="/images/achievement2.webp" 
                alt="Achievement 2 Image"
                width={400}
                height={400}
                className="w-full h-auto object-cover aspect-square transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
            </Link>
            <h3 className="text-xl font-thin">プロジェクトタイトル2</h3>
            <p className="text-sm font-light text-[var(--foreground)]/80">カテゴリ</p>
          </div>
          <div className="group">
            <Link href="/achievements/achievement-3" className="block mb-4 relative overflow-hidden rounded-lg">
              <Image 
                src="/images/achievement3.webp" 
                alt="Achievement 3 Image"
                width={400}
                height={400}
                className="w-full h-auto object-cover aspect-square transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
            </Link>
            <h3 className="text-xl font-thin">プロジェクトタイトル3</h3>
            <p className="text-sm font-light text-[var(--foreground)]/80">カテゴリ</p>
          </div>
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
      
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-24">
        <h2 className="text-3xl md:text-5xl font-thin mb-12 text-center">RECRUIT</h2>
        <div className="text-center">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-[var(--foreground)]/80">
            私たちと一緒に、未来を創造する仲間を募集しています。
            あなたの情熱とスキルを、プラズミズムで活かしませんか？
          </p>
          <Link 
            href="/recruit"
            className="inline-block bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full hover:bg-[var(--foreground)]/80 transition-colors duration-300 text-sm font-thin"
          >
            採用情報を見る
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
