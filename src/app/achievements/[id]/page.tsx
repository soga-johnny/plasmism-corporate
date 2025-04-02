import Footer from '@/components/Footer';
import { getAllAchievements, getAchievementById } from '@/lib/notion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { renderNotionBlock } from '@/lib/notion-renderer';
import { PageObjectResponse, BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const id = params.id;
               
    if (!id) {
      return {
        title: '実績が見つかりません | プラズミズム',
        description: '指定された実績は見つかりませんでした。',
      };
    }
    
    const achievement = await getAchievementById(id);
    
    if (!achievement || !achievement.page) {
      return {
        title: '実績が見つかりません | プラズミズム',
        description: '指定された実績は見つかりませんでした。',
      };
    }
    
    const page = achievement.page as PageObjectResponse;
    const title = page.properties?.Title?.type === 'title' ? page.properties.Title.title[0]?.plain_text : '実績詳細';
    const description = page.properties?.Description?.type === 'rich_text' ? page.properties.Description.rich_text[0]?.plain_text : '';
    
    return {
      title: `${title} | プラズミズム`,
      description: description,
    };
  } catch {
    return {
      title: '実績詳細 | プラズミズム',
      description: 'プラズミズムの実績詳細です。',
    };
  }
}

// 静的パスの生成（ビルド時にプリレンダリングするパス）
export async function generateStaticParams() {
  const achievements = await getAllAchievements();
  
  return achievements
    .filter((p): p is PageObjectResponse => 'properties' in p)
    .map((achievement: PageObjectResponse) => ({
      id: achievement.id,
    }));
}

// 実績詳細ページ
export default async function AchievementPage({ params }: { params: { id: string } }) {
  try {
    const id = params.id;
               
    if (!id) {
      notFound();
    }
    
    const achievementData = await getAchievementById(id);
    
    if (!achievementData || !achievementData.page) {
      notFound();
    }

    const page = achievementData.page as PageObjectResponse;
    const blocks = achievementData.blocks as BlockObjectResponse[];
    
    const properties = page.properties;
    const titleProp = properties.Title;
    const descriptionProp = properties.Description;
    const scopeProp = properties.Scope;
    const clientProp = properties.Client;
    const urlProp = properties.URL;
    const coverProp = properties.Cover;

    const title = titleProp?.type === 'title' ? titleProp.title[0]?.plain_text : 'Untitled';
    const description = descriptionProp?.type === 'rich_text' ? descriptionProp.rich_text[0]?.plain_text : '';
    const scope = scopeProp?.type === 'rich_text' ? scopeProp.rich_text[0]?.plain_text : 'Nothing';
    const client = clientProp?.type === 'rich_text' ? clientProp.rich_text[0]?.plain_text : 'Nothing';
    const urlPropValue = urlProp?.type === 'url' ? urlProp.url : null;
    const url = urlPropValue ?? (urlProp?.type === 'rich_text' ? urlProp.rich_text[0]?.plain_text : null) ?? 'Nothing';
    
    let coverImage: string | undefined;
    if (coverProp?.type === 'files' && coverProp.files?.[0]) {
      const coverFile = coverProp.files[0];
      if (coverFile.type === 'external') {
        coverImage = coverFile.external.url;
      } else if (coverFile.type === 'file') {
        coverImage = coverFile.file.url;
      }
    }
    if (!coverImage) {
      if (page.cover?.type === 'external') {
        coverImage = page.cover.external.url;
      } else if (page.cover?.type === 'file') {
        coverImage = page.cover.file.url;
      }
    }
    coverImage = coverImage || '/not-found.png';

    // ★ ブロックをレンダリングするためのヘルパー関数
    const renderBlocks = (blocksToRender: BlockObjectResponse[]) => {
      const elements: React.ReactNode[] = [];
      let i = 0;
      while (i < blocksToRender.length) {
        const block = blocksToRender[i];
        const isBulletedListItem = block.type === 'bulleted_list_item';
        const isNumberedListItem = block.type === 'numbered_list_item';

        if (isBulletedListItem) {
          const listItems: React.ReactNode[] = [];
          // 同じタイプの連続するリストアイテムを収集
          while (i < blocksToRender.length && blocksToRender[i].type === 'bulleted_list_item') {
            listItems.push(
              <li key={blocksToRender[i].id} className="mb-1">
                {renderNotionBlock(blocksToRender[i])}
              </li>
            );
            i++;
          }
          elements.push(<ul key={`ul-${block.id}`} className="list-disc pl-5 mb-4">{listItems}</ul>);
          continue; // continue で次のループへ（インデックスは while 内で進んでいる）
        } else if (isNumberedListItem) {
          const listItems: React.ReactNode[] = [];
          // 同じタイプの連続するリストアイテムを収集
          while (i < blocksToRender.length && blocksToRender[i].type === 'numbered_list_item') {
            listItems.push(
              <li key={blocksToRender[i].id} className="mb-1">
                {renderNotionBlock(blocksToRender[i])}
              </li>
            );
            i++;
          }
          elements.push(<ol key={`ol-${block.id}`} className="list-decimal pl-5 mb-4">{listItems}</ol>);
          continue; // continue で次のループへ
        } else {
          // リスト以外の通常のブロック
          elements.push(
            <div key={block.id || `content-${i}`}>
              {renderNotionBlock(block)}
            </div>
          );
        }
        i++; // 通常ブロックまたはリスト処理後、次のブロックへ
      }
      return elements;
    };

    return (
      <main className="min-h-screen flex flex-col text-white md:py-12 pt-2 pb-24">
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
          <div className="mb-8">
            <Link href="/achievements" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span>実績一覧に戻る</span>
            </Link>
          </div>

          {/* ヘッダー */}
          <div className="mb-12">
            <h1 className="text-4xl font-light mb-6">{title}</h1>
            
            <div className="grid grid-cols-[80px_1fr] gap-y-2 text-sm mb-8">
              <div className="font-light">Scope</div>
              <div className="font-light">： {scope}</div>
              
              <div className="font-light">Client</div>
              <div className="font-light">： {client}</div>
              
              <div className="font-light">URL</div>
              <div>： <a href={url !== 'Nothing' ? url : '#'} target="_blank" rel="noopener noreferrer" className={`text-blue-400 hover:underline ${url === 'Nothing' ? 'opacity-50 cursor-not-allowed' : ''}`}>{url !== 'Nothing' ? url : '-'}</a></div>
            </div>
            
            <p className="text-base text-white/80 mb-8">{description}</p>
            
            <div className="w-full h-[1px] bg-white/10 my-8"></div>
          </div>

          {/* 本文コンテンツ */}
          <div className="prose prose-invert max-w-none mb-12">
            {/* 大きな画像表示エリア */}
            <div className="relative w-full aspect-video bg-white mt-16 rounded-md">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            
            <div className="mt-8">
              {/* ★ ヘルパー関数を使ってレンダリング */}
              {renderBlocks(blocks)}
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/achievements" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span>実績一覧に戻る</span>
            </Link>
          </div>       
        </div>
        <Footer />
      </main>
    );
  } catch (_error) {
    console.error('Page rendering error:', _error);
    notFound();
  }
} 