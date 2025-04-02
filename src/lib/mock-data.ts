// 実績一覧のモックデータ
export const mockAchievements = [
    {
      id: 'achievement-1',
      properties: {
        Title: {
          title: [{ plain_text: 'NAMINORI' }]
        },
        Description: {
          rich_text: [{ plain_text: '説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります。' }]
        },
        Date: {
          date: { start: '2023-12-15' }
        },
        Category: {
          select: { name: 'ウェブ開発' }
        },
        Scope: {
          rich_text: [{ plain_text: 'リブランディング/UIデザイン' }]
        },
        Client: {
          rich_text: [{ plain_text: '株式会社シンシア' }]
        },
        URL: {
          url: 'https://creative-tim.com/twc-sample-sheet/'
        },
        Cover: {
          files: [
            {
              name: 'cover-image',
              type: 'external',
              external: { url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' }
            }
          ]
        }
      },
      cover: {
        external: { url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' }
      }
    },
    {
      id: 'achievement-2',
      properties: {
        Title: {
          title: [{ plain_text: 'NAMINORI' }]
        },
        Description: {
          rich_text: [{ plain_text: '説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります。' }]
        },
        Date: {
          date: { start: '2023-10-05' }
        },
        Category: {
          select: { name: 'ブランディング' }
        },
        Scope: {
          rich_text: [{ plain_text: 'ブランディング/パッケージデザイン' }]
        },
        Client: {
          rich_text: [{ plain_text: '株式会社テクノロジー' }]
        },
        URL: {
          url: 'https://creative-tim.com/twc-sample-sheet/'
        },
        Cover: {
          files: [
            {
              name: 'cover-image',
              type: 'external',
              external: { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
            }
          ]
        }
      },
      cover: {
        external: { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
      }
    },
    {
      id: 'achievement-3',
      properties: {
        Title: {
          title: [{ plain_text: 'NAMINORI' }]
        },
        Description: {
          rich_text: [{ plain_text: '説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります。' }]
        },
        Date: {
          date: { start: '2023-08-20' }
        },
        Category: {
          select: { name: 'アプリ開発' }
        },
        Scope: {
          rich_text: [{ plain_text: 'アプリ開発/UXデザイン' }]
        },
        Client: {
          rich_text: [{ plain_text: '株式会社デジタルソリューション' }]
        },
        URL: {
          url: 'https://creative-tim.com/twc-sample-sheet/'
        },
        Cover: {
          files: [
            {
              name: 'cover-image',
              type: 'external',
              external: { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
            }
          ]
        }
      },
      cover: {
        external: { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
      }
    }
  ];
  
  // 実績詳細のモックデータ
  export const mockAchievementDetails = {
    'achievement-1': {
      page: {
        id: 'achievement-1',
        properties: {
          Title: {
            title: [{ plain_text: 'NAMINORI' }]
          },
          Description: {
            rich_text: [{ plain_text: '案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります。' }]
          },
          Date: {
            date: { start: '2023-12-15' }
          },
          Category: {
            select: { name: 'ウェブ開発' }
          },
          Scope: {
            rich_text: [{ plain_text: 'リブランディング/UIデザイン' }]
          },
          Client: {
            rich_text: [{ plain_text: '株式会社シンシア' }]
          },
          URL: {
            url: 'https://creative-tim.com/twc-sample-sheet/'
          },
          Cover: {
            files: [
              {
                name: 'cover-image',
                type: 'external',
                external: { url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' }
              }
            ]
          }
        },
        cover: {
          external: { url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' }
        }
      },
      blocks: [
        {
          id: 'block-1',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              { 
                plain_text: '案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-2',
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [
              { 
                plain_text: '解決事項が入ります解決事項が入ります解決事項が入ります解決事項が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-3',
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [
              { 
                plain_text: '解決事項が入ります解決事項が入ります解決事項が入ります解決事項が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-4',
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [
              { 
                plain_text: '解決事項が入ります解決事項が入ります解決事項が入ります解決事項が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-8',
          type: 'image',
          image: {
            type: 'external',
            external: {
              url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
            },
            caption: [{ plain_text: 'プロジェクトイメージ' }]
          }
        }
      ]
    },
    'achievement-2': {
      page: {
        id: 'achievement-2',
        properties: {
          Title: {
            title: [{ plain_text: 'NAMINORI' }]
          },
          Description: {
            rich_text: [{ plain_text: '案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります。' }]
          },
          Date: {
            date: { start: '2023-10-05' }
          },
          Category: {
            select: { name: 'ブランディング' }
          },
          Scope: {
            rich_text: [{ plain_text: 'ブランディング/パッケージデザイン' }]
          },
          Client: {
            rich_text: [{ plain_text: '株式会社テクノロジー' }]
          },
          URL: {
            url: 'https://creative-tim.com/twc-sample-sheet/'
          },
          Cover: {
            files: [
              {
                name: 'cover-image',
                type: 'external',
                external: { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
              }
            ]
          }
        },
        cover: {
          external: { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
        }
      },
      blocks: [
        {
          id: 'block-1',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              { 
                plain_text: '案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-2',
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [
              { 
                plain_text: '解決事項が入ります解決事項が入ります解決事項が入ります解決事項が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-3',
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [
              { 
                plain_text: '解決事項が入ります解決事項が入ります解決事項が入ります解決事項が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        }
      ]
    },
    'achievement-3': {
      page: {
        id: 'achievement-3',
        properties: {
          Title: {
            title: [{ plain_text: 'NAMINORI' }]
          },
          Description: {
            rich_text: [{ plain_text: '案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります。' }]
          },
          Date: {
            date: { start: '2023-08-20' }
          },
          Category: {
            select: { name: 'アプリ開発' }
          },
          Scope: {
            rich_text: [{ plain_text: 'アプリ開発/UXデザイン' }]
          },
          Client: {
            rich_text: [{ plain_text: '株式会社デジタルソリューション' }]
          },
          URL: {
            url: 'https://creative-tim.com/twc-sample-sheet/'
          },
          Cover: {
            files: [
              {
                name: 'cover-image',
                type: 'external',
                external: { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
              }
            ]
          }
        },
        cover: {
          external: { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' }
        }
      },
      blocks: [
        {
          id: 'block-1',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              { 
                plain_text: '案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります案件概要が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-2',
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [
              { 
                plain_text: '解決事項が入ります解決事項が入ります解決事項が入ります解決事項が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        },
        {
          id: 'block-3',
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [
              { 
                plain_text: '解決事項が入ります解決事項が入ります解決事項が入ります解決事項が入ります。',
                annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false }
              }
            ]
          }
        }
      ]
    }
  }; 