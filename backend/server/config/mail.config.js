import config from "../config/config"

require('dotenv').config();
const FRONT_URL = process.env.FRONT_URL;

const textSignup = `様\n
FANTATIONカスタマーサポートでございます。\n
この度はFANTATIONにご登録いただきありがとうございます。\n
FANTATIONでオーナー権の購入やお取引をいただくには、\n
本人認証が必要となります。\n
マイページにログインいただき、本人認証の手続きをお願い致します。\n
${FRONT_URL}/login\n
ご不明な点がございましたらお気軽にご連絡くださいませ。\n
○●------------------------------------------●○\n
FANTATIONカスタマーサポート\n
Mail：${config.support_mail}\n
LINE：https://lin.ee/AMTD31g\n
URL：${FRONT_URL}/\n
○●------------------------------------------●○`;

const textSupport = `様\n
FANTATIONカスタマーサポートでございます。\n
お問い合わせを受け付けさせていただきました。\n
サポート担当より順次確認の上、土日祝を除く当日～1営業日以内にご回答を差し上げます。\n
ご回答まで今しばらくお待ちくださいませ。\n
○●------------------------------------------●○\n
FANTATIONカスタマーサポート\n
Mail：${config.support_mail}\n
LINE：https://lin.ee/AMTD31g\n
URL：${FRONT_URL}/\n
○●------------------------------------------●○`;

const textResetPassword = (url) => `FANTATIONをご利用いただき、ありがとうございます。\n
\n
パスワード再設定のご案内です。\n
下記URLにアクセスいただき、パスワードを再設定してください。\n
↓↓ \n
${url} \n
URLの有効期限は、このメールを受信してから8時間です。\n
\n
サポートが必要な場合は、お手数ですが以下のお問い合わせ先へご連絡ください。\n
${config.support_mail} \n
\n
引き続きFANTATIONをご利用下さい。 \n
\n
※本メールは送信専用です。返信することはできません。\n
※本メールに心当たりのない場合や、ご意見ご質問等は下記へご連絡ください。\n
\n
○●------------------------------------------●○\n
FANTATIONカスタマーサポート\n
Mail：${config.support_mail}\n
LINE：https://lin.ee/AMTD31g\n
URL：${FRONT_URL}/\n
○●------------------------------------------●○`;


const registerTempMsg = (url) => `この度は、Fantationの会員登録にお申し込みいただき、ありがとうございます。\n
仮登録が完了しました。\n
\n
ご本人様確認のため下記URLにアクセスいただき、本登録を完了させてください。\n
↓↓\n
${url} \n
URLの有効期限は、このメールを受信してから24時間です。\n
有効期限切れとなった場合は仮登録メールを再送信してお手続きをお願いいたします。\n
再送信はサービスにログインのうえ、再度リクエストしてください。\n
${FRONT_URL}/login   \n
\n
※本メールは送信専用です。返信することはできません。\n
※本メールに心当たりのない場合や、ご意見ご質問等は下記へご連絡ください。\n
\n
○●------------------------------------------●○\n
FANTATIONカスタマーサポート\n
Mail：${config.support_mail}\n
LINE：https://lin.ee/AMTD31g\n
URL：${FRONT_URL}/\n
○●------------------------------------------●○
`

export {
    textSignup,
    textSupport,
    registerTempMsg,
    textResetPassword
}