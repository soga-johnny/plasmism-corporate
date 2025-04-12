import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import RecruitInfo from '@/components/RecruitInfo';
import Image from 'next/image';
import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "採用情報",
  description: "プラズミズムでは新しい仲間を募集しています。尽きない探究と革新の瞬間を共有しませんか？募集職種や応募方法はこちらをご覧ください。",
  openGraph: {
    title: "採用情報",
    description: "プラズミズムでは新しい仲間を募集しています。尽きない探究と革新の瞬間を共有しませんか？募集職種や応募方法はこちらをご覧ください。",
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
    title: "採用情報",
    description: "プラズミズムでは新しい仲間を募集しています。尽きない探究と革新の瞬間を共有しませんか？募集職種や応募方法はこちらをご覧ください。",
    images: ['/ogp.png'],
  },
};

export default function RecruitPage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2">
      <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto md:px-2 pb-12">
        <PageTitle 
          titleEn="Recruit" 
          titleJa="採用情報" 
          description="尽きない探究と革新の瞬間を共有" 
        />
        
        <div className="space-y-12 mb-16 md:mx-16 pt-10">
          {/* 採用情報ヘッダーセクション */}
          <section className="pb-20 px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <div className="flex space-x-4 mb-8">
                      <div className="border border-[var(--foreground)]/20 bg-[var(--foreground)]/10 rounded-full px-4 py-3">
                        <h2 className="md:text-md text-xs">ミッション</h2>
                      </div>
                      <div className="border border-[var(--foreground)]/10 rounded-full -ml-8 px-4 py-3">
                        <h2 className="md:text-md text-xs">存在意義</h2>
                      </div>
                    </div>
                    <div className="rounded-lg">
                      <p className="text-2xl md:text-5xl leading-tight tracking-tighter">
                        豊かな毎日を、<br/>
                        コンピューターと情報表現で、<br/>
                        真摯にデザインする。
                      </p>
                    </div>
                </div>
                <div className="mt-8 md:mt-16 md:ml-8 flex items-center justify-center">
                    <Image 
                      src="/logo-dark.svg"
                      alt="プラズミズムロゴ"
                      width={300}
                      height={300}
                      className="w-auto h-auto"
                    />
                    {/* <Image 
                      src="/logo-white.svg"
                      alt="プラズミズムロゴ"
                      width={300}
                      height={300}
                      className="block dark:hidden w-auto h-auto"
                    /> */}
                </div>
              </div>
          </section>

                    {/* 採用情報の詳細 */}
                    <section className="pb-20">
            <RecruitInfo />
          </section>
          
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 