import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge'; // Use edge runtime for better performance

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Get query parameters
  const title = searchParams.get('title') || 'Plasmism Inc.'; // Default title
  // Add more parameters as needed (e.g., description, image URL)
  // const description = searchParams.get('description');

  try {
    return new ImageResponse(
      (
        // Image template using Tailwind CSS like syntax (or inline styles)
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1C1819', // Background color similar to the site
            color: 'white',
            fontFamily: 'sans-serif',
            padding: '40px',
          }}
        >
          {/* You can add a logo here */}
          {/* <img src="URL_TO_YOUR_LOGO.svg" width="100" height="20" alt="" /> */}
          <div
            style={{
              fontSize: '60px',
              marginTop: '30px',
              lineHeight: 1.2,
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            {title}
          </div>
          {/* 
          {description && (
            <div style={{ fontSize: '30px', marginTop: '20px', color: 'rgba(255, 255, 255, 0.7)' }}>
              {description}
            </div>
          )} 
          */}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // You might need to configure fonts here if using custom fonts
        // fonts: [
        //   {
        //     name: 'Type_Sans',
        //     data: fontData,
        //     style: 'normal',
        //   },
        // ],
      },
    );
  } catch (e) {
    if (e instanceof Error) {
      console.error('Failed to generate OG image:', e.message);
    } else {
      console.error('Failed to generate OG image with unknown error:', e);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 