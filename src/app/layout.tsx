import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://plasmism.com'),
  title: {
    default: "Plasmism",
    template: "%s | Plasmism",
  },
  description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。",
  openGraph: {
    title: "Plasmism",
    description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。",
    url: "https://plasmism.com",
    siteName: "Plasmism",
    images: [
      {
        url: '/ogp.webp',
        width: 1200,
        height: 630,
        alt: 'Plasmism OGP Image',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Plasmism",
    description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。",
    images: ['/ogp.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="light">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        <LayoutProvider>{children}</LayoutProvider>
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-91TSE07FZP"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-91TSE07FZP');
          `}
        </Script>
      </body>
    </html>
  );
}
