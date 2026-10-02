import { problems } from "@/lib/site";
import { CheckIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Problems() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <SectionHeading en="Problem" ja="こんなお悩みありませんか？" />

        <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <ScrollReveal
              key={problem}
              as="li"
              delay={(index % 3) as 0 | 1 | 2}
              className="flex items-start gap-4 bg-white px-6 py-7"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent">
                <CheckIcon className="h-3 w-3" />
              </span>
              <p className="text-[15px] font-medium leading-[1.8] tracking-[0.03em]">{problem}</p>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal className="mt-14 text-center">
          <span className="mx-auto block h-12 w-px bg-accent" aria-hidden="true" />
          <p className="mt-6 text-xl font-bold leading-relaxed tracking-[0.05em] sm:text-[1.65rem]">
            そのお悩み、
            <span className="border-b-4 border-accent-light/60 text-accent">Stark Lab</span>
            がまとめて解決します。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
