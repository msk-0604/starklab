import { strengths } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";

export function Strengths() {
  return (
    <section id="reason" className="relative overflow-hidden bg-accent py-20 text-white sm:py-28">
      <span
        className="pointer-events-none absolute -right-6 top-6 select-none font-en text-[9rem] font-bold uppercase leading-none text-white/[0.06] sm:text-[14rem]"
        aria-hidden="true"
      >
        Reason
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 lg:px-20">
        <ScrollReveal className="text-center">
          <p className="font-en text-lg uppercase tracking-[0.12em] sm:text-xl">Reason</p>
          <span className="mx-auto mt-3 block h-px w-8 bg-white" aria-hidden="true" />
          <h2 className="mt-4 text-[1.75rem] font-bold tracking-[0.04em] sm:text-[2.1rem]">
            選ばれる3つの理由
          </h2>
        </ScrollReveal>

        <ol className="mt-16 grid gap-6 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <ScrollReveal
              key={item.en}
              as="li"
              delay={index as 0 | 1 | 2}
              className="flex flex-col bg-white px-7 pb-10 pt-9 text-foreground sm:px-9"
            >
              <div className="flex items-end justify-between border-b border-border pb-5">
                <p className="font-en text-sm uppercase tracking-[0.14em] text-accent">
                  {item.en}
                </p>
                <p className="font-en text-6xl font-bold leading-none text-accent/15">
                  0{index + 1}
                </p>
              </div>
              <h3 className="mt-6 whitespace-pre-line text-xl font-bold leading-[1.6] tracking-[0.05em]">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[2] tracking-[0.03em] text-muted">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
