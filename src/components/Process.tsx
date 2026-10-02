import { processSteps } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <SectionHeading
          en="Flow"
          ja="制作の流れ"
          lead="お問い合わせから公開・運用まで、シンプルな5ステップで進めます。"
        />

        <ol className="mt-14 grid gap-4 lg:grid-cols-5 lg:gap-0">
          {processSteps.map((item, index) => (
            <ScrollReveal
              key={item.step}
              as="li"
              delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}
              className="relative"
            >
              <div
                className={`flex h-full gap-5 bg-white px-6 py-7 lg:flex-col lg:gap-0 lg:px-6 lg:py-9 ${
                  index < processSteps.length - 1 ? "lg:mr-5" : ""
                }`}
              >
                <div className="shrink-0">
                  <p className="font-en text-xs uppercase tracking-[0.2em] text-muted">Step</p>
                  <p className="font-en text-5xl font-bold leading-none text-accent">
                    0{item.step}
                  </p>
                </div>
                <div className="lg:mt-6 lg:border-t lg:border-border lg:pt-6">
                  <h3 className="text-lg font-bold tracking-[0.05em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-[1.9] tracking-[0.03em] text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <span
                  className="absolute right-0 top-1/2 hidden h-0 w-0 -translate-y-1/2 border-y-[10px] border-l-[10px] border-y-transparent border-l-accent lg:block"
                  aria-hidden="true"
                />
              )}
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
