import { ReactNode } from 'react';
import Image from 'next/image';
import { NotionRichText } from '@/types/notion';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

// Notionのブロックタイプに対応するコンポーネントを作成
export function renderNotionBlock(block: BlockObjectResponse): ReactNode {
  if (!('type' in block)) {
    return null;
  }
  const { type, id } = block;
  
  switch (type) {
    case 'paragraph':
      if ('paragraph' in block && block.paragraph) {
        return (
          <p key={id} className="mb-4">
            {block.paragraph.rich_text.map((text: NotionRichText, i: number) => renderRichText(text, i))}
          </p>
        );
      }
      break;

    case 'heading_1':
      if ('heading_1' in block && block.heading_1) {
        return (
          <h1 key={id} className="text-3xl font-bold mb-4">
            {block.heading_1.rich_text.map((text: NotionRichText, i: number) => renderRichText(text, i))}
          </h1>
        );
      }
      break;

    case 'heading_2':
      if ('heading_2' in block && block.heading_2) {
        return (
          <h2 key={id} className="text-2xl font-bold mb-3">
            {block.heading_2.rich_text.map((text: NotionRichText, i: number) => renderRichText(text, i))}
          </h2>
        );
      }
      break;

    case 'heading_3':
      if ('heading_3' in block && block.heading_3) {
        return (
          <h3 key={id} className="text-xl font-bold mb-2">
            {block.heading_3.rich_text.map((text: NotionRichText, i: number) => renderRichText(text, i))}
          </h3>
        );
      }
      break;

    case 'bulleted_list_item':
      if ('bulleted_list_item' in block && block.bulleted_list_item) {
        return (
          <>
            {block.bulleted_list_item.rich_text.map((text: NotionRichText, i: number) => renderRichText(text, i))}
          </>
        );
      }
      break;

    case 'numbered_list_item':
      if ('numbered_list_item' in block && block.numbered_list_item) {
        return (
          <>
            {block.numbered_list_item.rich_text.map((text: NotionRichText, i: number) => renderRichText(text, i))}
          </>
        );
      }
      break;

    case 'image':
      if ('image' in block && block.image) {
        const value = block.image;
        const imageUrl = value.type === 'external' ? value.external.url : value.file.url;
        const caption = value.caption.length > 0 ? value.caption[0].plain_text : '';
        
        return (
          <figure key={id} className="my-6">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={imageUrl}
                alt={caption || 'Image'}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {caption && <figcaption className="text-center text-sm mt-2 text-gray-500">{caption}</figcaption>}
          </figure>
        );
      }
      break;

    case 'divider':
      if ('divider' in block) {
        return <hr key={id} className="my-6 border-t border-gray-300" />;
      }
      break;

    case 'quote':
      if ('quote' in block && block.quote) {
        return (
          <blockquote key={id} className="pl-4 border-l-4 border-gray-300 my-4 italic">
            {block.quote.rich_text.map((text: NotionRichText, i: number) => renderRichText(text, i))}
          </blockquote>
        );
      }
      break;

    case 'code':
      if ('code' in block && block.code) {
        return (
          <pre key={id} className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
            <code>
              {block.code.rich_text.map((text: NotionRichText) => text.plain_text).join('')}
            </code>
          </pre>
        );
      }
      break;

    default:
      console.warn(`Unsupported block type: ${type}`, block);
      return null;
  }
  return null;
}

// リッチテキストをレンダリングするヘルパー関数
function renderRichText(text: NotionRichText, key: number): ReactNode {
  const { annotations, plain_text, href } = text;
  const { bold, italic, strikethrough, underline, code } = annotations;

  // ReactNodeとして扱う
  let content: ReactNode = plain_text;

  if (code) {
    content = <code className="bg-gray-100 text-red-500 px-1 py-0.5 rounded">{content}</code>;
  }
  if (bold) {
    content = <strong>{content}</strong>;
  }
  if (italic) {
    content = <em>{content}</em>;
  }
  if (strikethrough) {
    content = <del>{content}</del>;
  }
  if (underline) {
    content = <u>{content}</u>;
  }

  if (href) {
    return (
      <a key={key} href={href} className="text-blue-500 hover:underline">
        {content}
      </a>
    );
  }

  return <span key={key}>{content}</span>;
} 