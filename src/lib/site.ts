/**
 * Stark Lab サイト設定
 * ※ 所在地・電話番号は特定商取引法に基づく表記ページのみで使用します。
 */
export const siteConfig = {
  name: "Stark Lab",
  tagline: "初期費用0円。月額22,000円でホームページ制作。",
  description:
    "制作・公開・保守・更新まで全てお任せ。中小企業・個人事業主向けの定額ホームページ制作サービスです。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://starklab.jp",
  owner: "山本 真樹",
  email: "yamamasaki0604@icloud.com",
  /** 特商法ページのみ表示 */
  address: "滋賀県大津市坂本6丁目15-28",
  /** 特商法ページのみ表示 */
  phone: "080-9064-0604",
  pricing: {
    initial: 0,
    monthly: 22000,
    currency: "JPY" as const,
  },
  paymentMethod: "クレジットカード（Stripe）",
} as const;

/**
 * サイト内の写真。差し替える場合は public/images に置いて "/images/xxx.jpg" のように指定してください。
 * 読み込めない場合はグラデーションが表示されます。
 */
export const images = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  concept: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  production: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  management: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  support: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  footer: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80",
} as const;

export const serviceGroups = [
  {
    en: "Web Production",
    ja: "ホームページ制作",
    image: images.production,
    lead: "業種やお客様の強みに合わせて、構成からデザイン、コーディングまで一貫して制作します。見た目の美しさだけでなく、問い合わせにつながる導線づくりを大切にしています。",
    items: [
      { title: "オリジナルデザイン", description: "業種・ブランドに合わせたデザインで制作します。" },
      { title: "スマホ対応", description: "全ページをレスポンシブ対応。どの端末でも見やすく表示します。" },
      { title: "お問い合わせフォーム", description: "集客につながるフォームを設置し、機会損失を防ぎます。" },
      { title: "SEO基本設定・高速表示", description: "検索エンジン向けの基本設定と、表示速度を重視した構成で仕上げます。" },
    ],
  },
  {
    en: "Server Management",
    ja: "サーバー・ドメイン管理",
    image: images.management,
    lead: "ホームページの公開に必要なサーバーやドメイン、SSLの契約・設定・管理をすべて代行します。難しい専門用語や手続きに悩む必要はありません。",
    items: [
      { title: "サーバー管理", description: "サーバーの契約から運用管理までを代行します。" },
      { title: "ドメイン管理", description: "独自ドメインの取得・更新・管理もお任せください。" },
      { title: "SSL対応", description: "安全なHTTPS通信を標準装備しています。" },
      { title: "バックアップ", description: "万一に備え、サイトのデータを保全します。" },
    ],
  },
  {
    en: "Support",
    ja: "保守・更新サポート",
    image: images.support,
    lead: "ホームページは公開してからが本番です。日々の更新や保守を継続的にサポートし、情報が常に新しく、信頼されるサイトであり続けるようお手伝いします。",
    items: [
      { title: "保守管理", description: "公開後の安定運用を継続的にサポートします。" },
      { title: "更新サポート", description: "テキストや画像の差し替えなど、更新作業に対応します。" },
      { title: "ご相談窓口", description: "ホームページに関するお困りごとをメールでご相談いただけます。" },
    ],
  },
] as const;

export const pricingIncludes = [
  "ホームページ制作",
  "サーバー管理",
  "ドメイン管理",
  "SSL",
  "保守",
  "更新対応",
  "バックアップ",
  "スマホ対応",
] as const;

export const processSteps = [
  { step: 1, title: "お問い合わせ", description: "フォームまたはメールでご連絡ください" },
  { step: 2, title: "ヒアリング", description: "ご要望・業種・目標を丁寧にお伺いします" },
  { step: 3, title: "デザイン・制作", description: "構成からデザイン、コーディングまで制作" },
  { step: 4, title: "公開", description: "内容をご確認のうえ、サイトを公開します" },
  { step: 5, title: "運用・保守開始", description: "更新・保守を継続的にサポートします" },
] as const;

export const problems = [
  "ホームページを作りたいが、初期費用に数十万円もかけられない",
  "作ったきり更新できず、情報が古いまま放置されている",
  "サーバーやドメイン、SSLなど専門的なことが分からない",
  "スマホで見ると崩れてしまい、問い合わせにつながらない",
  "ちょっとした修正のたびに見積もりが必要で頼みにくい",
  "誰に相談すればいいのか分からず、後回しになっている",
] as const;

export const strengths = [
  {
    en: "Zero Initial Cost",
    title: "初期費用0円で、\nすぐにスタート",
    description:
      "一般的に数十万円かかることも多いホームページ制作を、初期費用0円でお引き受けします。まとまった資金を用意しなくても、月額定額で本格的なホームページを持つことができます。",
  },
  {
    en: "All-in-One Support",
    title: "制作から運用まで、\nまるごとお任せ",
    description:
      "デザイン・コーディングはもちろん、サーバー・ドメイン・SSLの管理、保守、更新対応まで月額料金に含まれています。専門知識がなくても、本業に集中していただけます。",
  },
  {
    en: "Continuous Growth",
    title: "公開後も、\n一緒に育てていく",
    description:
      "ホームページは公開してからが本番です。テキストや画像の更新に対応し、事業の変化に合わせて情報を新しく保つことで、信頼され続けるサイトへ育てていきます。",
  },
] as const;

export const comparison = [
  { item: "初期費用", general: "数十万円〜が一般的", ours: "0円" },
  { item: "月額費用", general: "サーバー・保守が別途", ours: "22,000円（税込）にすべて込み" },
  { item: "サーバー・ドメイン管理", general: "お客様自身で契約・管理", ours: "すべて代行" },
  { item: "更新作業", general: "都度お見積もり", ours: "月額料金内で対応" },
  { item: "スマホ対応・SSL", general: "オプションの場合あり", ours: "標準対応" },
] as const;

export const faqs = [
  {
    question: "初期費用は本当に0円ですか？",
    answer: "はい。初期費用はいただいておりません。月額22,000円（税込）のみでご利用いただけます。",
  },
  {
    question: "月額料金には何が含まれていますか？",
    answer:
      "ホームページ制作、サーバー管理、ドメイン管理、SSL、保守、更新対応、バックアップ、スマホ対応が含まれています。",
  },
  {
    question: "更新もお願いできますか？",
    answer: "はい。テキストや画像の更新対応も月額料金に含まれています。",
  },
  {
    question: "スマホ対応していますか？",
    answer: "全ページ標準でスマートフォン・タブレットに対応しています。",
  },
  {
    question: "SEO対策はありますか？",
    answer: "タイトルや説明文、構造化データなど、検索エンジン向けの基本的なSEO設定を行います。",
  },
  {
    question: "契約期間の縛りはありますか？",
    answer:
      "最低契約期間は12か月です。12か月経過後は1か月ごとの自動更新となり、次回更新日の30日前までにご連絡いただければ解約できます。",
  },
  {
    question: "支払い方法を教えてください。",
    answer: "クレジットカード（Stripe）でのお支払いとなります。",
  },
  {
    question: "原稿や写真は用意する必要がありますか？",
    answer:
      "掲載したい文章や写真、ロゴなどをご提供いただきます。何を載せればよいか分からない場合も、ヒアリングを通じて一緒に整理しますのでご安心ください。",
  },
] as const;

export const navLinks = [
  { href: "/#services", label: "事業内容", en: "Service" },
  { href: "/#reason", label: "選ばれる理由", en: "Reason" },
  { href: "/#pricing", label: "料金", en: "Price" },
  { href: "/#process", label: "制作の流れ", en: "Flow" },
  { href: "/#faq", label: "よくある質問", en: "FAQ" },
  { href: "/#outline", label: "概要", en: "Outline" },
] as const;

export function formatYen(amount: number): string {
  return new Intl.NumberFormat("ja-JP").format(amount);
}
