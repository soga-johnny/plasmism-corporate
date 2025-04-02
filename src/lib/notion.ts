import { Client } from '@notionhq/client';
import { mockAchievements, mockAchievementDetails } from '@/lib/mock-data';

// モックデータを使用するかどうかのフラグ
const USE_MOCK_DATA = process.env.USE_MOCK_DATA === 'true';

// ★ 環境変数のチェック
if (!USE_MOCK_DATA && !process.env.NOTION_API_KEY) {
  throw new Error('Missing required environment variable: NOTION_API_KEY');
}
if (!USE_MOCK_DATA && !process.env.NOTION_ACHIEVEMENTS_DATABASE_ID) {
  throw new Error('Missing required environment variable: NOTION_ACHIEVEMENTS_DATABASE_ID');
}

// Notion APIのクライアントを初期化
// 注意: 実際の使用では環境変数から取得することをお勧めします
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// 実績データベースのID
const ACHIEVEMENTS_DATABASE_ID = process.env.NOTION_ACHIEVEMENTS_DATABASE_ID;

// 実績データベースから全ての記事を取得する関数
export async function getAllAchievements() {
  // モックデータを使用する場合
  if (USE_MOCK_DATA) {
    console.log('Using mock achievements data');
    return mockAchievements;
  }

  // ★ database_id が undefined でないことを保証
  const databaseId = ACHIEVEMENTS_DATABASE_ID ?? '';
  if (!databaseId) {
      console.error('ACHIEVEMENTS_DATABASE_ID is not defined in environment variables.');
      return mockAchievements; // or throw error
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId, // ★ 修正
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results;
  } catch (error) {
    console.error('Error fetching achievements from Notion:', error);
    // エラー時にもモックデータを返す
    console.log('Falling back to mock achievements data due to API error');
    return mockAchievements;
  }
}

// 特定のIDの実績を取得する関数
export async function getAchievementById(pageId: string) {
  // モックデータを使用する場合
  if (USE_MOCK_DATA) {
    console.log(`Using mock achievement data for ID: ${pageId}`);
    return mockAchievementDetails[pageId as keyof typeof mockAchievementDetails] || null;
  }

  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const blocks = await notion.blocks.children.list({ block_id: pageId });
    
    return {
      page,
      blocks: blocks.results,
    };
  } catch (error) {
    console.error(`Error fetching achievement with ID ${pageId}:`, error);
    // エラー時にもモックデータを返す
    console.log(`Falling back to mock achievement data for ID: ${pageId} due to API error`);
    return mockAchievementDetails[pageId as keyof typeof mockAchievementDetails] || null;
  }
} 