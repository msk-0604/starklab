import { images, siteConfig } from "@/lib/site";
import { Photo } from "./Photo";
import { ScrollReveal } from "./ScrollReveal";

/** ヒーローに重なる白いカード + 写真（参考サイトの「SERVICE / 事業内容」ブロック） */
export function Concept() {
  return (
    <section id="concept" className="relative bg-surface pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-20">
        <ScrollReveal className="relative z-10 -mt-24 sm:-mt-32">
          <div className="bg-white px-7 pb-12 pt-10 shadow-[var(--shadow-card)] sm:px-12 sm:pb-16 sm:pt-12">
            <p className="text-center font-en text-lg uppercase tracking-[0.12em] sm:text-xl">
              Concept
            </p>
            <span className="mx-auto mt-3 block h-px w-8 bg-foreground" aria-hidden="true" />
            <h2 className="mt-4 text-center text-[1.75rem] font-bold tracking-[0.04em] text-accent sm:text-[2.1rem]">
              私たちについて
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[2.1] tracking-[0.05em] text-foreground/85 sm:text-base">
              <p>
                {siteConfig.name}
                は、中小企業・個人事業主の皆さまのための定額制ホームページ制作サービスです。
              </p>
              <p>
                「ホームページは必要だけれど、初期費用が高い」「作った後の管理が分からない」。そんなお悩みに応えるため、制作から公開、保守、更新までを月額定額でまるごとお引き受けします。
              </p>
              <p>
                ホームページを、もっと身近な経営の力に。本業に集中していただけるよう、Webのことは私たちにお任せください。
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <Photo
            src={images.concept}
            className="aspect-[16/10] w-full shadow-[var(--shadow-card)] lg:mt-16"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
