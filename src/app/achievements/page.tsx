import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import { getAllAchievements } from '../../lib/notion';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const metadata = {
  title: '実績一覧 | プラズミズム',
  description: 'プラズミズムの実績一覧です。',
};

export default async function AchievementsPage() {

  const achievementsData = await getAllAchievements();
  return (

    <main className="min-h-screen flex flex-col text-white md:py-12 pt-2 pb-24">
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Achievements" 
          titleJa="実績" 
          description="デザインの実績です。" 
        />
        {/* 実績一覧（2カラムグリッド） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {achievementsData.length > 0 ? (
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
                  <div className="flex flex-col h-full p-4 rounded-xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
                    <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded-lg">
                      <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                    <h2 className="text-2xl font-light mb-2 transition-colors duration-300 group-hover:text-white">{title}</h2>
                    <p className="text-sm text-white/70 line-clamp-2 transition-colors duration-300 group-hover:text-white/90">{description}</p>
                    <div className="absolute right-6 bottom-6 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white/70 group-hover:text-white flex items-center text-sm">
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
              <p>実績データを読み込み中...</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
} 