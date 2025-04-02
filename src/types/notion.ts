// Notionのデータ型定義

// Notionリッチテキスト
export interface NotionRichText {
    type: string;
    text?: {
      content: string;
      link?: {
        url: string;
      } | null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href?: string | null;
  }
  
  // Notionプロパティの型
  export interface NotionProperties {
    [key: string]: {
      id: string;
      type: string;
      title?: Array<NotionRichText>;
      rich_text?: Array<NotionRichText>;
      files?: Array<{
        name: string;
        type: string;
        file?: {
          url: string;
          expiry_time: string;
        };
        external?: {
          url: string;
        };
      }>;
      url?: string;
      select?: {
        id: string;
        name: string;
        color: string;
      };
      multi_select?: Array<{
        id: string;
        name: string;
        color: string;
      }>;
      date?: {
        start: string;
        end: string | null;
      };
    };
  }
  
  // Notionページ
  export interface NotionPage {
    id: string;
    created_time: string;
    last_edited_time: string;
    properties: NotionProperties;
    cover?: {
      type: string;
      file?: {
        url: string;
        expiry_time: string;
      };
      external?: {
        url: string;
      };
    } | null;
  }
  
  // Notionブロック
  export interface NotionBlock {
    id: string;
    type: string;
    [key: string]: any; // 各ブロックタイプに応じたプロパティ
  }
  
  // レンダリング用ブロック型
  export interface RenderableBlock {
    id: string;
    type: string;
    paragraph?: {
      rich_text: NotionRichText[];
    };
    heading_1?: {
      rich_text: NotionRichText[];
    };
    heading_2?: {
      rich_text: NotionRichText[];
    };
    heading_3?: {
      rich_text: NotionRichText[];
    };
    bulleted_list_item?: {
      rich_text: NotionRichText[];
    };
    numbered_list_item?: {
      rich_text: NotionRichText[];
    };
    image?: {
      type: string;
      file?: {
        url: string;
      };
      external?: {
        url: string;
      };
      caption: NotionRichText[];
    };
    divider?: Record<string, never>;
    quote?: {
      rich_text: NotionRichText[];
    };
    code?: {
      rich_text: NotionRichText[];
      language: string;
    };
  }
  
  // 実績データ
  export interface Achievement {
    id: string;
    page: NotionPage;
    blocks?: RenderableBlock[];
  } 