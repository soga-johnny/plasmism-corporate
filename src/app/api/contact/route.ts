import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/resend';

interface ContactFormData {
  company: string;
  name: string;
  email: string;
  url: string;
  purpose: string;
  contact_type: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    const { company, name, email, url, purpose, contact_type, message } = formData;

    if (!company || !name || !email || !purpose || !contact_type || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    
    // 予算のマッピング
    const budgetMap: { [key: string]: string } = {
      low: "〜100万円",
      medium: "100万円〜300万円",
      high: "300万円〜500万円",
      enterprise: "500万円〜",
    };
    const budget = budgetMap[purpose] || "未選択";

    // コンペ有無のマッピング
    const competitionMap: { [key: string]: string } = {
      yes: "あり",
      no: "なし",
    };
    const competition = competitionMap[contact_type] || "未選択";

    await sendEmail({
      to: process.env.CONTACT_TO_EMAIL!,
      subject: '【Plasmism】Webサイトからのお問い合わせ',
      replyTo: email,
      text: `
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
改善対象のURL: ${url || '未入力'}
予算: ${budget}
コンペの実施有無: ${competition}

お問い合わせ内容:
${message}
      `.trim(),
    });

    try {
      await sendEmail({
        to: email,
        subject: '【Plasmism】お問い合わせありがとうございます',
        text: `
${name} 様

この度はお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

--------------------
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
改善対象のURL: ${url || '未入力'}
予算: ${budget}
コンペの実施有無: ${competition}
お問い合わせ内容:
${message}
--------------------

内容を確認の上、担当者より2〜3営業日以内にご連絡させていただきます。
今しばらくお待ちくださいませ。

--------------------
Plasmism株式会社
info@plasmism.com
https://plasmism.com/
--------------------
        `.trim(),
      });
    } catch (autoReplyError) {
      console.error('Error sending auto-reply email:', autoReplyError);
      if (autoReplyError instanceof Error) {
        console.error(autoReplyError.message);
        console.error(autoReplyError.stack);
      }
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    }
    return NextResponse.json({ message: 'Error sending email', error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
