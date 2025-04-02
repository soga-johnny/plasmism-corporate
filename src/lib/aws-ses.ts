// import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// // AWS SESクライアントの初期化（リージョンなどを設定）
// const sesClient = new SESClient({ region: "YOUR_AWS_REGION" }); // 例: "ap-northeast-1"

// // お問い合わせメールを送信する関数の例（後で実装）
// export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
//   const { name, email, message } = formData;

//   // 送信するメールの内容を設定
//   const params = {
//     Source: "YOUR_SENDER_EMAIL", // 送信元メールアドレス（SESで検証済み）
//     Destination: {
//       ToAddresses: ["YOUR_RECIPIENT_EMAIL"], // 送信先メールアドレス
//     },
//     Message: {
//       Subject: { Data: `お問い合わせがありました (${name}様)` },
//       Body: {
//         Text: {
//           Data: `お名前: ${name}\nメールアドレス: ${email}\n\nお問い合わせ内容:\n${message}`,
//         },
//         // Html: { Data: `HTML形式の本文` }, // 必要に応じてHTML形式も設定
//       },
//     },
//   };

//   try {
//     // const command = new SendEmailCommand(params);
//     // await sesClient.send(command);
//     console.log("Sending contact email via SES..."); // 開発用ログ
//     console.log("Form Data:", formData);
//     // メール送信成功時の処理（ここではコンソール出力のみ）
//     console.log("Email sent successfully (simulated).");
//     return { success: true };
//   } catch (error) {
//     console.error("Failed to send email via SES:", error);
//     return { success: false, error: "Failed to send email." };
//   }
// }

// --- 開発用のダミー関数 ---
export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
    console.log("Sending contact email (dummy function)...");
    console.log("Form Data:", formData);
    // 擬似的な成功応答
    await new Promise(resolve => setTimeout(resolve, 500)); // 擬似的な非同期処理
    console.log("Email sent successfully (simulated).");
    return { success: true };
} 