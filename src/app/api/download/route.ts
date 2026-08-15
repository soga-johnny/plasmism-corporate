import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/resend';

interface DownloadFormData {
  company: string;
  name: string;
  email: string;
  phone?: string;
  document_type: string;
  industry: string;
  message?: string;
}

const documentTypeMap: { [key: string]: string } = {
  company: "会社概要",
  service: "サービス資料",
  case: "事例集",
  all: "全資料",
};

const industryMap: { [key: string]: string } = {
  it: "IT・通信",
  manufacturing: "製造業",
  retail: "小売・流通",
  finance: "金融・保険",
  service: "サービス業",
  other: "その他",
};

export async function POST(request: NextRequest) {
  try {
    const formData: DownloadFormData = await request.json();
    const { company, name, email, phone, document_type, industry, message } = formData;

    if (!company || !name || !email || !document_type || !industry) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const requestedDocument = documentTypeMap[document_type] || "不明な資料";
    const userIndustry = industryMap[industry] || "不明な業種";

    await sendEmail({
      to: process.env.CONTACT_TO_EMAIL!,
      subject: '【Plasmism】資料ダウンロード申請',
      replyTo: email,
      text: `
以下の内容で資料ダウンロード申請がありました。
資料を手動で送付してください。

--------------------
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
希望資料: ${requestedDocument}
業種: ${userIndustry}
備考:
${message || '未入力'}
--------------------
      `.trim(),
    });

    try {
      await sendEmail({
        to: email,
        subject: '【Plasmism】資料ダウンロード申請ありがとうございます',
        text: `
${name} 様

この度は、${requestedDocument} の資料ダウンロード申請をいただき、誠にありがとうございます。

ご入力いただいたメールアドレス宛に、担当者より資料を送付させていただきます。
恐れ入りますが、今しばらくお待ちくださいませ。

万が一、数日経ってもメールが届かない場合は、お手数ですが再度お問い合わせいただけますと幸いです。

ご申請内容:
--------------------
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
希望資料: ${requestedDocument}
業種: ${userIndustry}
備考:
${message || '未入力'}
--------------------

--------------------
Plasmism株式会社
info@plasmism.com
https://plasmism.com/
--------------------
        `.trim(),
      });
    } catch (autoReplyError) {
      console.error('Error sending download auto-reply email:', autoReplyError);
      if (autoReplyError instanceof Error) {
        console.error(autoReplyError.message);
        console.error(autoReplyError.stack);
      }
    }

    return NextResponse.json({ message: 'Download request processed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing download request:', error);
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    }
    return NextResponse.json({ message: 'Error processing download request', error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
