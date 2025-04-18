import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
// import { getAllAchievements } from '../../lib/notion'; // 未使用のためコメントアウト
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Metadata } from 'next';
// import Header from '@/components/Header'; // 未使用のため削除

export const metadata: Metadata = {
  title: "実績紹介",
  description: "プラズミズムがこれまでに手がけたデザインプロジェクトや実績をご紹介します。具体的な事例をご覧ください。",
  openGraph: {
    title: "実績紹介",
    description: "プラズミズムがこれまでに手がけたデザインプロジェクトや実績をご紹介します。具体的な事例をご覧ください。",
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
    title: "実績紹介",
    description: "プラズミズムがこれまでに手がけたデザインプロジェクトや実績をご紹介します。具体的な事例をご覧ください。",
    images: ['/ogp.png'],
  },
};

export default async function AchievementsPage() {

  // const achievementsData = await getAllAchievements(); // Notion API 呼び出しをコメントアウト
  const achievementsData: PageObjectResponse[] = []; // ダミーデータとして空配列を設定
  
  return (

    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Achievements" 
          titleJa="実績" 
          description="デザインの実績です。" 
        />
        {/* 実績一覧（2カラムグリッド） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {/* Notion API 無効化中の表示 */}
          {achievementsData && achievementsData.length > 0 ? (
            achievementsData.filter((p): p is PageObjectResponse => 'properties' in p).map((achievement: PageObjectResponse) => {
              // ページIDを取得
              const id = achievement.id;
              
              // プロパティを取得
              const properties = achievement.properties;
              const titleProp = properties.Title;
              const descriptionProp = properties.Description;
              const coverProp = properties.Cover;

              const title = titleProp?.type === 'title' ? titleProp.title[0]?.plain_text : 'Untitled';
              const description = descriptionProp?.type === 'rich_text' ? descriptionProp.rich_text[0]?.plain_text : '';
              
              // サムネイル画像の取得
              let coverImage: string | undefined;
              
              // Cover プロパティがある場合は優先して使用
              if (coverProp?.type === 'files' && coverProp.files?.[0]) {
                const coverFile = coverProp.files[0];
                if (coverFile.type === 'external' && coverFile.external) {
                  coverImage = coverFile.external.url;
                } else if (coverFile.type === 'file' && coverFile.file) {
                  coverImage = coverFile.file.url;
                }
              }
              
              // プロパティにない場合はページのカバー画像を使用
              if (!coverImage) {
                if (achievement.cover?.type === 'external') {
                  coverImage = achievement.cover.external.url;
                } else if (achievement.cover?.type === 'file') {
                  coverImage = achievement.cover.file.url;
                }
              }

              coverImage = coverImage || '/not-found.png'; // フォールバック画像

              return (
                <Link href={`/achievements/${id}`} key={id} className="block group relative">
                  <div className="flex flex-col h-full p-4 rounded-xl transition-all duration-300 hover:bg-[var(--foreground)]/5 border border-transparent hover:border-[var(--foreground)]/10">
                    <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded-lg">
                      <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1080px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-300"></div>
                    </div>
                    <h2 className="text-2xl font-light mb-2 transition-colors duration-300 group-hover:text-[var(--foreground)]">{title}</h2>
                    <p className="text-sm text-[var(--foreground)]/70 line-clamp-2 transition-colors duration-300 group-hover:text-[var(--foreground)]/90">{description}</p>
                    <div className="absolute right-6 bottom-6 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--foreground)]/70 group-hover:text-[var(--foreground)] flex items-center text-sm">
                      詳細を見る
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[var(--foreground)]/70">現在、実績情報を準備中です。</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
} 