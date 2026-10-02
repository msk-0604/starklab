import { comparison, formatYen, pricingIncludes, siteConfig } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "./Icons";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Pricing() {
  const { initial, monthly } = siteConfig.pricing;

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <SectionHeading
          en="Price"
          ja="料金プラン"
          lead="初期費用0円、わかりやすい月額定額制。追加費用を気にせずご利用いただけます。"
        />

        <ScrollReveal className="mt-14" delay={1}>
          <div className="grid border border-accent lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center bg-accent px-7 py-12 text-white sm:px-12">
              <p className="font-en text-sm uppercase tracking-[0.2em] text-white/70">
                Standard Plan
              </p>
              <p className="mt-2 text-xl font-bold tracking-[0.05em]">定額ホームページ制作プラン</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-end justify-between gap-4 border-b border-white/25 pb-5">
                  <span className="text-sm font-medium">初期費用</span>
                  <span className="font-en text-5xl font-bold leading-none">
                    {formatYen(initial)}
                    <span className="ml-1 font-sans text-lg font-bold">円</span>
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                  <span className="text-sm font-medium">
                    月額料金
                    <span className="ml-1 text-xs text-white/70">（税込）</span>
                  </span>
                  <span className="whitespace-nowrap font-en text-6xl font-bold leading-none sm:text-7xl">
                    {formatYen(monthly)}
                    <span className="ml-1 font-sans text-lg font-bold">円</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="px-7 py-10 sm:px-12 sm:py-12">
              <h3 className="text-base font-bold tracking-[0.05em]">月額料金に含まれる内容</h3>
              <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-muted">
                ※最低契約期間は12か月です。お支払いは{siteConfig.paymentMethod}となります。
              </p>
              <Link
                href="/#contact"
                className="group mt-8 inline-flex w-full items-center justify-center gap-4 rounded-sm bg-accent px-9 py-4 text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-accent-hover sm:w-auto"
              >
                無料相談はこちら
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-20" delay={1}>
          <h3 className="text-center text-xl font-bold tracking-[0.05em] sm:text-2xl">
            一般的なホームページ制作との比較
          </h3>
          <div className="mt-8">
            <table className="w-full border-collapse text-left text-[13px] sm:text-[15px]">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th scope="col" className="w-[26%] px-2 py-4 sm:px-4 text-sm font-bold text-muted">
                    項目
                  </th>
                  <th scope="col" className="w-[34%] px-2 py-4 sm:px-4 text-sm font-bold text-muted">
                    一般的な制作会社
                  </th>
                  <th scope="col" className="bg-accent-soft px-2 py-4 sm:px-4 font-en text-base font-bold uppercase sm:text-lg tracking-[0.04em] text-accent">
                    {siteConfig.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.item} className="border-b border-border">
                    <th scope="row" className="px-2 py-5 sm:px-4 font-bold">
                      {row.item}
                    </th>
                    <td className="px-2 py-5 sm:px-4 text-muted">{row.general}</td>
                    <td className="bg-accent-soft px-2 py-5 sm:px-4 font-bold text-accent">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">※一般的な制作会社の内容は目安であり、会社により異なります。</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
