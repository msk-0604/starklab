import { serviceGroups } from "@/lib/site";
import { Photo } from "./Photo";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

/** 参考サイトの「OFFICE SOLUTIONS」「WEB MARKETING」のような、写真と文章の交互レイアウト */
export function Services() {
  return (
    <section id="services">
      <div className="bg-surface pt-20 sm:pt-28">
        <SectionHeading
          en="Service"
          ja="事業内容"
          lead={
            <>
              ホームページに必要なすべてを、月額定額でご提供します。
              <br className="hidden sm:block" />
              制作・管理・サポートの3つの柱で、お客様のビジネスを支えます。
            </>
          }
          className="px-5"
        />
      </div>

      {serviceGroups.map((group, index) => {
        const reversed = index % 2 === 1;
        return (
          <div
            key={group.en}
            className={reversed ? "bg-white py-20 sm:py-28" : "bg-surface py-20 sm:py-28"}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-20">
              <ScrollReveal className={reversed ? "lg:order-2" : ""}>
                <p className="font-en text-sm tracking-[0.2em] text-muted">
                  0{index + 1}
                </p>
                <h3 className="mt-1 font-en text-[2.4rem] font-bold uppercase leading-none tracking-[0.01em] text-accent sm:text-5xl">
                  {group.en}
                </h3>
                <p className="mt-3 text-lg font-bold tracking-[0.06em]">{group.ja}</p>
                <p className="mt-6 border-b border-accent pb-8 text-[15px] leading-[2] tracking-[0.04em] text-foreground/80">
                  {group.lead}
                </p>
                <dl className="mt-8 space-y-6">
                  {group.items.map((item) => (
                    <div key={item.title}>
                      <dt className="text-[17px] font-bold tracking-[0.05em]">{item.title}</dt>
                      <dd className="mt-1.5 text-[15px] leading-[1.9] tracking-[0.03em] text-muted">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>

              <ScrollReveal delay={1} className={reversed ? "lg:order-1" : ""}>
                <Photo
                  src={group.image}
                  className={`aspect-[4/5] w-full sm:aspect-[5/6] ${
                    reversed
                      ? "rounded-l-[5rem] sm:rounded-l-[8rem]"
                      : "rounded-r-[5rem] sm:rounded-r-[8rem]"
                  }`}
                />
              </ScrollReveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
