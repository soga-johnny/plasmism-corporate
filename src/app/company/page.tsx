import Footer from '@/components/Footer';
import CompanyOverview from '@/components/CompanyOverview'; // Assuming CompanyOverview is relevant
import PageTitle from '@/components/PageTitle';
// import Image from 'next/image';
import RecruitInfo from '@/components/RecruitInfo';
import Header from '@/components/Header';
export default function CompanyPage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
      <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Company" 
          titleJa="会社案内" 
          description="プラズミズムの会社概要と採用情報についてご案内します。" 
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