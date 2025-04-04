"use client";

import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { useState } from 'react';

export default function DownloadPage() {
  const [charCount, setCharCount] = useState(0);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  return (
    <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Download" 
          titleJa="会社資料ダウンロード" 
          description="弊社のサービス資料をダウンロードいただけます。必要事項をご入力の上、送信ボタンをクリックしてください。" 
        />
        <p className="max-w-[720px] mx-auto mb-8 font-extralight text-sm md:text-base">※は必須項目です。</p>
        <p className="max-w-[720px] mx-auto mb-8 font-extralight text-sm md:text-base">資料ダウンロード後、担当者から追加情報のご案内をさせていただく場合があります。</p>
        
        <div className="space-y-8 mb-16 max-w-[720px] mx-auto pt-10">
          <form className="space-y-12">
            <div className="space-y-1">
              <label htmlFor="company" className="block text-sm">
                会社名<span className="text-xs ml-1">*</span>
              </label>
              <input
                type="text"
                id="company"
                placeholder="例) Plasmism株式会社"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm">
                お名前<span className="text-xs ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="例) 山田 太郎"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm">
                メールアドレス<span className="text-xs ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="例) example@plasmism.com"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="例) 03-1234-5678"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="document_type" className="block text-sm">
                希望資料<span className="text-xs ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  id="document_type"
                  className="appearance-none w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] pr-10"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>ダウンロードする資料を選択してください</option>
                  <option value="company">会社概要</option>
                  <option value="service">サービス資料</option>
                  <option value="case">事例集</option>
                  <option value="all">全資料</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg className="h-4 w-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="industry" className="block text-sm">
                業種<span className="text-xs ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  id="industry"
                  className="appearance-none w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] pr-10"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>業種を選択してください</option>
                  <option value="it">IT・通信</option>
                  <option value="manufacturing">製造業</option>
                  <option value="retail">小売・流通</option>
                  <option value="finance">金融・保険</option>
                  <option value="service">サービス業</option>
                  <option value="other">その他</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg className="h-4 w-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-1 h-[160px]">
              <label htmlFor="message" className="block text-sm">
                備考
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="その他ご要望などございましたらご記入ください"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30 resize-none"
                maxLength={2000}
                onChange={handleTextChange}
              ></textarea>
              <div className="text-right text-sm text-[var(--foreground)]/50">
                {charCount} / 2000
              </div>
            </div>
            
            <div className="pt-30">
              <button
                type="submit"
                className="w-full bg-[#BC2611] hover:bg-[#a01f1f] transition-colors text-white font-light rounded-md py-4 flex items-center justify-center group"
              >
                <span>資料をダウンロード</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            
            <div className="text-sm text-center text-[var(--foreground)]/70 pt-4">
              送信ボタンをクリックすることで、<span className="underline">プライバシーポリシー</span>に同意したものとみなされます。
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 