import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

interface DownloadFormData {
  company: string;
  name: string;
  email: string;
  phone?: string; // 電話番号は任意
  document_type: string;
  industry: string;
  message?: string; // 備考は任意
}

// ドキュメントタイプのマッピング
const documentTypeMap: { [key: string]: string } = {
    company: "会社概要",
    service: "サービス資料",
    case: "事例集",
    all: "全資料",
};

// 業種のマッピング
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

    // 必須項目のチェック
    if (!company || !name || !email || !document_type || !industry) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const requestedDocument = documentTypeMap[document_type] || "不明な資料";
    const userIndustry = industryMap[industry] || "不明な業種";

    // 管理者向け通知メール
    const adminEmailParams = {
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.CONTACT_TO_EMAIL!], // 通知先は共通
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: '【Plasmism】資料ダウンロード申請',
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `
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
            `,
          },
        },
      },
      ReplyToAddresses: [email],
    };

    const adminCommand = new SendEmailCommand(adminEmailParams);
    await sesClient.send(adminCommand);

    // ユーザー向け自動返信メール
    const autoReplyParams = {
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: '【Plasmism】資料ダウンロード申請ありがとうございます',
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `
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
            `,
          },
        },
      },
    };

    try {
      const autoReplyCommand = new SendEmailCommand(autoReplyParams);
      await sesClient.send(autoReplyCommand);
    } catch (autoReplyError) {
      console.error('Error sending download auto-reply email:', autoReplyError);
      // ここでもエラーはログに残すが、ユーザーへのレスポンスには影響させない
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