import Footer from '@/components/Footer';
import CompanyOverview from '@/components/CompanyOverview'; // Assuming CompanyOverview is relevant
import PageTitle from '@/components/PageTitle';
// import Image from 'next/image';
import RecruitInfo from '@/components/RecruitInfo';

export default function CompanyPage() {
  return (
    <main className="min-h-screen flex flex-col text-white md:py-12 pt-2 pb-24">
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Company" 
          titleJa="会社案内" 
          description="プラズミズムの会社概要と採用情報についてご案内します。" 
        />
        
        <div className="space-y-12 mb-16 md:mx-16 mx-4 pt-10">
          {/* 会社概要 */}
          {/* <section className="border-b border-white/7 pb-20">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="flex space-x-4 mb-8">
                  <div className="border border-white/20 bg-white/10 rounded-full px-4 py-3">
                    <h2 className="text-md font-thin">会社概要</h2>
                  </div>
                  <div className="border border-white/10 rounded-full -ml-8 px-4 py-3">
                    <h2 className="text-md font-thin">基本情報</h2>
                  </div>
                </div>
                <div className="rounded-lg">
                  <p className="font-thin text-3xl md:text-5xl leading-tight">
                    最適解をデザインし、<br/>
                    豊かさを創造する<br/>
                    テクノロジーカンパニー
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-2 md:ml-2 w-full md:w-auto">
                <Image 
                  src="/sample1.png"
                  alt="Company Image"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover aspect-square w-full md:w-[300px]"
                />
              </div>
            </div>
          </section> */}

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