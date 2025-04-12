import { Metadata } from 'next';
import PageTitle from '@/components/PageTitle';
import CompanyOverview from '@/components/CompanyOverview';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutScene from '@/components/AboutCube';
import AboutBrandIdentitySection from '@/components/AboutBrandIdentitySection';

export const metadata: Metadata = {
  title: "私たちについて",
  description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。会社概要、ビジョン、ミッション、メンバーをご紹介します。",
  openGraph: {
    title: "私たちについて",
    description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。会社概要、ビジョン、ミッション、メンバーをご紹介します。",
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
    title: "私たちについて",
    description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。会社概要、ビジョン、ミッション、メンバーをご紹介します。",
    images: ['/ogp.png'],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 relative">
            <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12 relative z-10"> 
          <PageTitle 
          titleEn="About" 
          titleJa="私たちについて" 
          description="最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社" 
        />

      <div className="md:space-y-12 space-y-6 md:px-16 px-4 pt-10">
      
      <section className="relative md:mb-20 mb-10">
      <div className="sticky top-0 inset-0 z-[-10] h-screen -mb-[100vh] w-screen left-0 right-0 -mx-[calc(50vw-50%)]">
        <AboutScene />
      </div>

      <section className="border-b border-[var(--foreground)]/10 md:pb-40 pb-12 md:pt-32 pt-0">
          <div className="flex flex-col items-center text-center">
              <div className="rounded-lg md:max-w-[780px]">
                <h2 className="text-3xl md:text-7xl leading-tight md:mb-12 mb-4">
                デジタルとの共存を<br/>
                自律的なシステムで<br/>
                徹底的に追求
                </h2>
                <p className="text-[var(--foreground)] text-sm md:text-base leading-relaxed">
                プラズミズムでは、豊かな毎日をデザインするための
                7つの価値観を柱に、課題解決に真摯に向き合う文化を大切にしています。<br/><br/>
                「可能性は尽きない」という信念のもと、
                ベクトルの分散しない事業活動を心がけています。
                </p>
              </div>
          </div>
        </section>


        {/* <div className="md:space-y-12 space-y-6 mb-16 md:mx-16 mx-4"> */}
          <section className="border-b border-[var(--foreground)]/10 py-10 md:py-20">
            <div className="flex flex-col md:flex-row justify-between">
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
          </section>

          <section className="border-b border-[var(--foreground)]/10 py-10 md:py-20">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="flex space-x-4 mb-8">
                  <div className="border border-[var(--foreground)]/20 bg-[var(--foreground)]/10 rounded-full px-4 py-3">
                    <h2 className="md:text-md text-xs">ビジョン</h2>
                  </div>
                  <div className="border border-[var(--foreground)]/10 rounded-full -ml-8 px-4 py-3">
                    <h2 className="md:text-md text-xs">あるべき目指す世界</h2>
                  </div>
                </div>
                <div className="rounded-lg">
                  <p className="text-2xl md:text-5xl leading-tight tracking-tighter">
                    想像もできなかった豊かさを、<br/>
                    いつどの瞬間であっても、<br/>
                    噛み締めて実感できる、<br/>
                    そんな世界。
                  </p>
                </div>
              </div>
              {/* <div className="mt-8 md:mt-12 md:ml-2 w-full md:w-auto">
                <Image 
                  src="/sample1.png"
                  alt="Mission Image" // Changed alt text for clarity
                  width={300}
                  height={300}
                  className="rounded-lg object-cover aspect-square w-full md:w-[300px]"
                />
              </div> */}
            </div>
          </section>
          
          <section className="md:py-20 py-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="flex space-x-4 mb-8">
                  <div className="border border-[var(--foreground)]/20 bg-[var(--foreground)]/10 rounded-full px-4 py-3">
                    <h2 className="md:text-md text-xs">バリュー</h2>
                  </div>
                  <div className="border border-[var(--foreground)]/10 rounded-full -ml-8 px-4 py-3">
                    <h2 className="md:text-md text-xs">そのために大切にする価値観</h2>
                  </div>
                </div>
                <div className="rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="text-lg text-[var(--foreground)]/50 mr-4">1</div>
                      <p className="text-2xl md:text-5xl">過去には戻れない</p>
                    </div>
                    <p className="text-base text-[var(--foreground)]/70 mt-2 pl-6">全ての生物が、今この瞬間から抜け出すことはできない。</p>
                    <div className="border-t border-[var(--foreground)]/10 pt-6 flex items-center">
                      <div className="text-lg text-[var(--foreground)]/50 mr-4">2</div>
                      <p className="text-2xl md:text-5xl">どこにも敵はいない</p>
                    </div>
                    <p className="text-base text-[var(--foreground)]/70 mt-2 pl-6">すべては関係性によるもので、敵というものは存在しない。</p>
                    <div className="border-t border-[var(--foreground)]/10 pt-6 flex items-center">
                      <div className="text-lg text-[var(--foreground)]/50 mr-4">3</div>
                      <p className="text-2xl md:text-5xl">意志は盗まれない</p>
                    </div>
                    <p className="text-base text-[var(--foreground)]/70 mt-2 pl-6">他者がどのような手段を用いようとも、意志を奪うことはできない。</p>
                    <div className="border-t border-[var(--foreground)]/10 pt-6 flex items-center">
                      <div className="text-lg text-[var(--foreground)]/50 mr-4">4</div>
                      <p className="text-2xl md:text-5xl">知識は裏切らない</p>
                    </div>
                    <p className="text-base text-[var(--foreground)]/70 mt-2 pl-6">使い続けられる選択肢は、経験や学びからしか生み出されない。</p>
                    <div className="border-t border-[var(--foreground)]/10 pt-6 flex items-center">
                      <div className="text-lg text-[var(--foreground)]/50 mr-4">5</div>
                      <p className="text-2xl md:text-5xl">ほとんどが伝わらない</p>
                    </div>
                    <p className="text-base text-[var(--foreground)]/70 mt-2 pl-6">意思疎通が最も難しいものであることは、これまでもこれからも変わらない。</p>
                    <div className="border-t border-[var(--foreground)]/10 pt-6 flex items-center">
                      <div className="text-lg text-[var(--foreground)]/50 mr-4">6</div>
                      <p className="text-2xl md:text-5xl">良いものは多くない</p>
                    </div>
                    <p className="text-base text-[var(--foreground)]/70 mt-2 pl-6">有り余る選択肢の中で、良いと言い切れるものはごく僅かしかない。</p>
                    <div className="border-t border-[var(--foreground)]/10 pt-6 flex items-center">
                      <div className="text-lg text-[var(--foreground)]/50 mr-4">7</div>
                      <p className="text-2xl md:text-5xl">可能性は尽きない</p>
                    </div>
                    <p className="text-base text-[var(--foreground)]/70 mt-2 pl-6">どのような状況であっても、考え抜くことに限界は存在しない。</p>
                  </div>
                
                </div>
              </div>
              {/* <div className="mt-8 md:mt-2 md:ml-2 w-full md:w-auto">
                <Image 
                  src="/sample1.png"
                  alt="Values Image"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover aspect-square w-full md:w-[300px]"
                />
              </div> */}
            </div>
          </section>
          {/* </div>
          </div>
          </section> */}
          </section>
  
          {/* <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12 relative z-10">  */}

          <AboutBrandIdentitySection />

<section className="mb-20 md:mb-40">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full">
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-4xl mb-12">ボードメンバー</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-8">
                  <h3 className="text-sm mb-3">CEO</h3>
                  <p className="text-xl md:text-2xl text-[var(--foreground)] mb-1">曽我 ジョニー</p>
                  <h3 className="text-sm mb-3">Johnny Soga</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  大阪府生まれ。建設業出身からの独学でイラストレーター / Webデザイナーとして独立。沖縄広告賞にて金賞を受賞。<br/>
                  業務領域を拡大し、複数社スタートアップにてUI/UXデザインを主軸に、XRデザイン・フロントエンドエンジニアリング・Webマーケティング・PdMを経験。合同会社For Twoにて、CDOとしてプロダクトを開発面・戦略面からグロース支援。
CDOを2年経験の後、より良い顧客体験を追求したく、2024年にPlasmism株式会社を設立。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-8">
                  <h3 className="text-sm mb-3">COO</h3>
                  <p className="text-xl md:text-2xl text-[var(--foreground)] mb-1">道畑 勝利</p>
                  <h3 className="text-sm mb-3">Katsutoshi Michihata</h3>

                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  大阪生まれ。高専卒業後、鉄道会社に入社。その後、鉄道会社を退職し、高専専攻科を経て大阪大学工学研究科に進学。博士課程に在学中。<br/>
鉄道会社では、画像診断を用いた基礎研究、システム管理業務、社員教育に従事。
研究では、燃料電池からキャリア教育と自然科学から社会科学まで幅広く活動中。
また、丹波篠山市のB級品黒枝豆を用いた商品開発を行い、海外マーケティングを経験。
大阪大学発のベンチャー企業でWebサービス設計、スタートアップ企業でマーケティングも経験。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-8">
                  <h3 className="text-sm mb-3">LEAD DESIGNER</h3>
                  <p className="text-xl md:text-2xl text-[var(--foreground)] mb-1">伊藤 悠希</p>
                  <h3 className="text-sm mb-3">Yuki Ito</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  愛媛出身、東京在住。コーヒーが好き。
新卒で制作会社にデザイナーとして参画し、三菱地所、花王、ドコモなどのナショナルクライアントを中心にデザイン支援をする。<br/>
以降同業種で数社経験し、Web、App、SaaS、のUI、VIデザインを幅広く経験。7名のクリエイティブチームを束ねるリードデザイナーとして、Design Opsにも力を入れる。<br/>
現在は屋号「aaam」で独立して活動しながら、Plasmismにてデザインリードを務める。<br/>
デザインの定義が拡張され、曖昧な今、肩書を越境した働き方を楽しんでいる。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-8">
                  <h3 className="text-sm mb-3">BRAND DESIGNER</h3>
                  <p className="text-xl md:text-2xl text-[var(--foreground)] mb-1">猿田 博毅</p>
                  <h3 className="text-sm mb-3">Hiroki Saruta</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  山梨出身、好きなものはアニメ、車、スポーツ。東京の専門学校でグラフィックデザインを学ぶ。<br/>
新卒で制作会社にてデザイナーとして、医療、音楽、飲食など多岐にわたる業界でのクリエイティブを経験。
現在はUIデザイナーとして働きつつ、フリーランスでグラフィックとWebデザイナーとしても活動中。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-8">
                  <h3 className="text-sm mb-3">BRAND DESIGNER</h3>
                  <p className="text-xl md:text-2xl text-[var(--foreground)] mb-1">増田 愛弓</p>
                  <h3 className="text-sm mb-3">Ayumi Masuda</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  神奈川県出身／東京都在住。
新卒でイッセイミヤケグループに入社後、IT企業に転職。<br/>Webマーケター・ディレクターとして各種コンバージョンを測定しながらモバイルコンテンツの企画・運用を担当。その後リクルート（出向）ではWebプランナーとしてユーザーヒアリングやマッピング等の業務に携わる。
現在はデザイナーとしてSNS広告やDTPデザイン、LP等の制作を行なっている。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-8">
                  <h3 className="text-sm mb-3">BRAND DESIGNER</h3>
                  <p className="text-xl md:text-2xl text-[var(--foreground)] mb-1">河合 美幸</p>
                  <h3 className="text-sm mb-3">Miyuki Kawai</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  東京生まれ。好きな物は駄菓子。幼稚園教諭二種免許・保育士資格取得後、都内の保育所等で保育士として8年従事。<br/>
                  現在は子育て支援事業所の運営メンバーとして働く傍ら、フリーランスのwebデザイナーとして活動中。
                  </p>
                </div>
                <div className="mb-4 pb-4">
                  <h3 className="text-sm mb-3">STRATEGY ADVISOR</h3>
                  <p className="text-xl md:text-2xl text-[var(--foreground)] mb-1">廣政 和也</p>
                  <h3 className="text-sm mb-3">Kazuya Hiromasa</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  三菱電機株式会社に入社後、メルカリ、AIベンチャーなど多岐にわたる業界、業務を経験。ITスタートアップでは創業メンバーとして事業開発を担当、60名のチームのマネジメントも経験。<br/>
                  2024年に株式会社STAR AIにジョイン。新規事業の立ち上げから成長フェーズまで幅広くサポートしてきた経験と知識を活かし、スタートアップ企業のアドバイザーも行なっている。
                  </p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* <section>
            <h2 className="md:text-3xl text-2xl mb-6">ボードメンバー</h2>
            <div className="p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-4">
                  <h3 className="text-sm mb-3">CEO</h3>
                  <p className="text-3xl md:text-4xl text-[var(--foreground)] mb-1">曽我 ジョニー</p>
                  <h3 className="text-sm mb-3">Johnny Soga</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  大阪府生まれ。建設業出身からの独学でイラストレーター / Webデザイナーとして独立。沖縄広告賞にて金賞を受賞。<br/>
                  業務領域を拡大し、複数社スタートアップにてUI/UXデザインを主軸に、XRデザイン・フロントエンドエンジニアリング・Webマーケティング・PdMを経験。合同会社For Twoにて、CDOとしてプロダクトを開発面・戦略面からグロース支援。
CDOを2年経験の後、より良い顧客体験を追求したく、2024年にPlasmism株式会社を設立。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-4">
                  <h3 className="text-sm mb-3">COO</h3>
                  <p className="text-3xl md:text-4xl text-[var(--foreground)] mb-1">道畑 勝利</p>
                  <h3 className="text-sm mb-3">Katsutoshi Michihata</h3>

                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  高専卒業後、鉄道会社に入社。鉄道会社を退職し、高専専攻科課程を経て、大阪大学大学院工学研究科に進学。博士課程に在学中。<br/>
鉄道会社では、画像診断を用いた基礎研究に従事し、全社規模での研究発表会にて賞を受賞。並行して新入社員・出向社員教育やシステム管理業務にも従事。研究活動では、燃料電池をテーマにした研究活動で国際学会も経験。<br/>
現在は、これまでの経歴を生かしたキャリア教育をテーマに研究中。学外プロジェクトとして、B級品黒枝豆を活用し、商品開発・販売・海外マーケティングを経験。また、CO2の削減をテーマにしたビジネスアイデアコンテストで最優秀賞を受賞。大阪大学発のベンチャー企業でインターン生としてWebサービス設計を1年半経験。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-4">
                  <h3 className="text-sm mb-3">LEAD DESIGNER</h3>
                  <p className="text-3xl md:text-4xl text-[var(--foreground)] mb-1">伊藤 悠希</p>
                  <h3 className="text-sm mb-3">Yuki Ito</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  愛媛出身、東京在住。コーヒーが好き。
新卒で制作会社にデザイナーとして参画し、三菱地所、花王、ドコモなどのナショナルクライアントを中心にデザイン支援をする。<br/>
以降同業種で数社経験し、Web、App、SaaS、のUI、VIデザインを幅広く経験。7名のクリエイティブチームを束ねるリードデザイナーとして、Design Opsにも力を入れる。<br/>
現在は屋号「aaam」で独立して活動しながら、Plasmismにてデザインリードを務める。<br/>
デザインの定義が拡張され、曖昧な今、肩書を越境した働き方を楽しんでいる。
                  </p>
                </div>
                <div className="mb-4 border-b border-[var(--foreground)]/10 pb-4">
                  <h3 className="text-sm mb-3">STRATEGY ADVISOR</h3>
                  <p className="text-3xl md:text-4xl text-[var(--foreground)] mb-1">廣政 和也</p>
                  <h3 className="text-sm mb-3">Kazuya Hiromasa</h3>
                  <p className="text-[var(--foreground)] text-xs md:text-sm font-light leading-relaxed">
                  三菱電機株式会社に入社後、メルカリ、AIベンチャーなど多岐にわたる業界、業務を経験。ITスタートアップでは創業メンバーとして事業開発を担当、60名のチームのマネジメントも経験。<br/>
                  2024年に株式会社STAR AIにジョイン。新規事業の立ち上げから成長フェーズまで幅広くサポートしてきた経験と知識を活かし、スタートアップ企業のアドバイザーも行なっている。
                  </p>
                </div>
              </div>
            </div>
          </section> */}
          </div>
          
          <div className="w-full md:px-16 px-4 mx-auto px-4 md:px-2 md:pb-12 pb-6 relative z-10"> {/* コンテンツが前面に来るように z-10 を追加 */}
            <CompanyOverview />
          </div>
      </div>
      
      <Footer />
    </main>
  );
} 