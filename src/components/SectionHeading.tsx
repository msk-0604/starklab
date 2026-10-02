import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type SectionHeadingProps = {
  en: string;
  ja: string;
  lead?: ReactNode;
  className?: string;
};

/** 参考サイト風：小さな英字ラベル + 短い罫線 + ティールの日本語見出し（中央揃え） */
export function SectionHeading({ en, ja, lead, className = "" }: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mx-auto max-w-3xl text-center ${className}`.trim()}>
      <p className="font-en text-lg uppercase tracking-[0.12em] text-foreground sm:text-xl">
        {en}
      </p>
      <span className="mx-auto mt-3 block h-px w-8 bg-foreground" aria-hidden="true" />
      <h2 className="mt-4 text-[1.75rem] font-bold tracking-[0.04em] text-accent sm:text-[2.1rem]">
        {ja}
      </h2>
      {lead && (
        <p className="mt-6 text-[15px] leading-[2] tracking-[0.04em] text-muted sm:text-base">
          {lead}
        </p>
      )}
    </ScrollReveal>
  );
}
