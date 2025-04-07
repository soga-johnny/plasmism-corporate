import Footer from '@/components/Footer';
import CompanyOverview from '@/components/CompanyOverview'; // Assuming CompanyOverview is relevant
import PageTitle from '@/components/PageTitle';
// import Image from 'next/image';
import RecruitInfo from '@/components/RecruitInfo';
import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "会社概要",
  description: "プラズミズムの基本的な会社情報（所在地、設立年月日、代表者など）と、私たちのデジタル上の拠点についてご案内します。",
  openGraph: {
    title: "会社概要",
    description: "プラズミズムの基本的な会社情報（所在地、設立年月日、代表者など）と、私たちのデジタル上の拠点についてご案内します。",
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
    title: "会社概要",
    description: "プラズミズムの基本的な会社情報（所在地、設立年月日、代表者など）と、私たちのデジタル上の拠点についてご案内します。",
    images: ['/ogp.png'],
  },
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2">
      <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Company" 
          titleJa="会社案内" 
          description="デジタル上の位置情報" 
        />
        
        <div className="space-y-12 mb-16 md:mx-16 mx-4 pt-10">

          {/* 会社概要の詳細情報 */}
          <section className="pb-20">
            <CompanyOverview />
          </section>
          
          {/* 採用情報 */}
          <section className="pb-20">
            <RecruitInfo />
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 