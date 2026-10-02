"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-10">
        <SectionHeading en="FAQ" ja="よくある質問" />

        <ScrollReveal className="mt-14 border-t border-accent" delay={1}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-border">
                <button
                  type="button"
                  className="flex w-full items-center gap-5 py-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-en text-2xl font-bold leading-none text-accent" aria-hidden="true">
                    Q
                  </span>
                  <span className="flex-1 text-[15px] font-bold tracking-[0.04em] sm:text-base">
                    {faq.question}
                  </span>
                  <span className="relative h-4 w-4 shrink-0 text-accent" aria-hidden="true">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-current" />
                    <span
                      className={`absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-current transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mb-6 flex gap-5 bg-surface px-5 py-5">
                      <span className="font-en text-2xl font-bold leading-none text-foreground/40" aria-hidden="true">
                        A
                      </span>
                      <p className="flex-1 text-[15px] leading-[1.9] tracking-[0.03em] text-foreground/85">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
