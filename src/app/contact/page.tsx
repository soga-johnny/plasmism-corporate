"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { useState } from 'react';

export default function ContactPage() {
  const [charCount, setCharCount] = useState(0);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    url: '',
    purpose: '',
    contact_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    setFormData(prev => ({ ...prev, message: e.target.value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // SES API未実装のためコメントアウト -> コメント解除
    try {
      const response = await fetch('/api/contact', { // ここでAPIルートを呼び出す
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // // aws-ses.ts のダミー関数を直接呼ぶ（一時的な代替）-> 削除
      // await sendContactEmail(formData);
      // const response = { ok: true }; // ダミーレスポンス -> 削除

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ // フォームをリセット
          name: '',
          email: '',
          company: '',
          url: '', // urlとpurposeを追加
          purpose: '',
          message: '',
          contact_type: '',
        });
        setCharCount(0);
      } else {
        // const errorData = await response.json(); // エラーハンドリングを強化
        // console.error('Submission failed:', errorData);
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' })); // レスポンスボディがない場合のエラーを防ぐ
        console.error('Submission failed:', errorData.message || response.statusText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
    
    /* // コメントアウト中の代替処理（何もしない）-> 削除
    console.log("Form submission is currently disabled.", formData);
    // 仮で成功したことにする（開発用）
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ 
      name: '',
      email: '',
      company: '',
      url: '',
      purpose: '',
      message: '',
      contact_type: '',
    });
    setCharCount(0);
    */

  };

  return (
      <main className="min-h-screen flex flex-col text-[var(--foreground)] md:py-12 pt-2 pb-24">
        <Header />
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-2 pb-12">
        <PageTitle 
          titleEn="Contact" 
          titleJa="お問い合わせ・ご相談" 
          description="制作のご相談・お問い合わせは、必要事項をご入力の上ご連絡ください。2〜3営業日以内に担当者がメールで返信します。" 
        />
        <p className="max-w-[720px] mx-auto mb-8 font-extralight text-sm md:text-base">営業・セールスその他の方は、<a href="https://forms.gle/Znqu5mha2zg1J4ds8" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">採用・協業用フォーム</a>をご利用ください。</p>
        <p className="max-w-[720px] mx-auto mb-8 font-extralight text-sm md:text-base">※は必須項目です。</p>

        <div className="space-y-8 mb-16 max-w-[720px] mx-auto pt-10">
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="company" className="block text-md font-light">
                会社名<span className="text-sm ml-1">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="例) Plasmism株式会社"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="name" className="block text-md font-light">
                お名前<span className="text-sm ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="例) 山田 太郎"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="block text-md font-light">
                メールアドレス<span className="text-sm ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="例) example@plasmism.com"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="url" className="block text-md font-light">
                改善対象のURL
              </label>
              <input
                type="url"
                id="url"
                value={formData.url}
                onChange={handleInputChange}
                placeholder="例) https://plasmism.com/"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="purpose" className="block text-md font-light">
                予算<span className="text-sm ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  id="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="appearance-none w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] pr-10"
                  required
                >
                  <option value="">おおよその予算を選択してください</option>
                  <option value="low">〜100万円</option>
                  <option value="medium">100万円〜300万円</option>
                  <option value="high">300万円〜500万円</option>
                  <option value="enterprise">500万円〜</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg className="h-4 w-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="contact_type" className="block text-md font-light">
                コンペの実施有無<span className="text-sm ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  id="contact_type"
                  value={formData.contact_type}
                  onChange={handleInputChange}
                  className="appearance-none w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] pr-10"
                  required
                >
                  <option value="">コンペの有無を選択してください</option>
                  <option value="yes">あり</option>
                  <option value="no">なし</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg className="h-4 w-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-1 h-[160px]">
                <label htmlFor="message" className="block text-md font-light">
                相談したい内容<span className="text-sm ml-1">*</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleTextChange}
                rows={6}
                placeholder="ご相談内容をご記入ください"
                className="w-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded-md py-8 px-3 text-[var(--foreground)] placeholder-[var(--foreground)]/30 resize-none"
                maxLength={2000}
                required
              ></textarea>
              <div className="text-right text-sm text-[var(--foreground)]/50">
                {charCount} / 2000
              </div>
            </div>
            
            <div className="pt-30">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#BC2611] hover:bg-[#a01f1f] transition-colors text-white font-light rounded-md py-4 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? '送信中...' : '送信する'}</span>
                {!isSubmitting && (
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                )}
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500">お問い合わせありがとうございます。内容を確認の上、ご連絡いたします。</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500">送信に失敗しました。しばらくしてから再度お試しいただくか、別の方法でお問い合わせください。</p>
            )}
            
            <div className="text-sm text-center text-[var(--foreground)]/70 pt-4">
              メールを送信した場合、<span className="underline">プライバシーポリシー</span>について同意したものとみなされます。
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 