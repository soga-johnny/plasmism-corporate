import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import RecruitInfo from '@/components/RecruitInfo';
import Image from 'next/image';
import Header from '@/components/Header';
export default function RecruitPage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
      <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Recruit" 
          titleJa="採用情報" 
          description="プラズミズムでは、共に革新的なデジタル体験を創造する仲間を募集しています。" 
        />
        
        <div className="space-y-12 mb-16 md:mx-16 mx-4 pt-10">
          {/* 採用情報ヘッダーセクション */}
          <section className="border-b border-[var(--foreground)]/10 pb-20">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="flex space-x-4 mb-8">
                  <div className="border border-[var(--foreground)]/20 bg-[var(--foreground)]/10 rounded-full px-4 py-3">
                    <h2 className="text-md">採用情報</h2>
                  </div>
                  <div className="border border-[var(--foreground)]/10 rounded-full -ml-8 px-4 py-3">
                    <h2 className="text-md">キャリア</h2>
                  </div>
                </div>
                <div className="rounded-lg">
                  <p className="text-3xl md:text-5xl leading-tight">
                    想像もできなかった豊かさを<br/>
                    一緒に創造する<br/>
                    仲間を募集しています
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-2 md:ml-2 w-full md:w-auto">
                <Image 
                  src="/sample1.png"
                  alt="Recruit Image"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover aspect-square w-full md:w-[300px]"
                />
              </div>
            </div>
          </section>
          
          {/* 私たちの働き方 */}
          <section className="pb-20">
            <h2 className="text-4xl md:text-5xl mb-12">私たちの働き方</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">リモートワーク</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  基本的にリモートワークを推奨しています。自宅やコワーキングスペースなど、最も集中できる環境で働くことができます。必要に応じてオフィスでの対面ミーティングも行いますが、デジタルツールを活用したコラボレーションを重視しています。
                </p>
              </div>
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">フレックスタイム</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  コアタイムを設けつつも、個人の生活リズムや最も生産性が高い時間帯に合わせて柔軟に働くことができます。プロジェクトの進行状況やチームとの連携を考慮した上で、自己管理能力を発揮できる環境です。
                </p>
              </div>
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">スキル開発支援</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  新しい技術や手法の習得を奨励し、書籍購入や各種勉強会、オンラインコースの受講費用をサポートしています。社内での知識共有セッションも定期的に開催し、互いに学び合える文化を大切にしています。
                </p>
              </div>
              <div className="bg-[var(--foreground)]/5 rounded-xl p-8 border border-[var(--foreground)]/10">
                <h3 className="text-2xl mb-4">チーム文化</h3>
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                  肩書きや経験よりもアイデアと実行力を重視し、フラットな組織文化を目指しています。意見やフィードバックを自由に交換できる環境で、それぞれの専門性を活かしながら協力して問題解決に取り組みます。
                </p>
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