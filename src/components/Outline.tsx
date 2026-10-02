import { formatYen, siteConfig } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

/** 概要（所在地・電話番号は特商法ページのみに表示する方針のため載せない） */
export function Outline() {
  const rows = [
    { label: "屋号", value: siteConfig.name },
    { label: "代表", value: siteConfig.owner },
    { label: "事業内容", value: "ホームページ制作・運用サービス（サブスクリプション型）" },
    {
      label: "料金",
      value: `初期費用${formatYen(siteConfig.pricing.initial)}円／月額${formatYen(siteConfig.pricing.monthly)}円（税込）`,
    },
    { label: "メール", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <section id="outline" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-10">
        <SectionHeading en="Outline" ja="概要" />

        <ScrollReveal className="mt-12" delay={1}>
          <dl className="border-y border-accent px-2 py-4 sm:px-6">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="text-[15px] font-medium tracking-[0.05em] text-muted sm:text-base">
                  {row.label}
                </dt>
                <dd className="break-all text-[15px] tracking-[0.04em] sm:text-base">
                  {row.href ? (
                    <a href={row.href} className="text-accent underline-offset-4 hover:underline">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
