import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";
// import Header from '@/components/Header';
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://plasmism.com'), // ドメインは仮置きです。後で修正してください。
  title: {
    default: "Plasmism",
    template: "%s | Plasmism",
  },
  description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。",
  openGraph: {
    title: "Plasmism",
    description: "プラズミズムは、最適解の設計・実装・検証・改良をコンピューターと情報表現でデザインする会社です。",
    url: "https://plasmism.com", // ドメインは仮置きです。後で修正してください。
    siteName: "Plasmism",
    images: [
      {
        url: '/ogp.png', // `/` から始まるパスを指定
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
    // site: '@site', // 必要であればTwitterアカウントを追加
    // creator: '@creator', // 必要であればTwitterアカウントを追加
    images: ['/ogp.png'], // `/` から始まるパスを指定
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        <LayoutProvider>{children}</LayoutProvider>
        <Analytics />
      </body>
    </html>
  );
}
