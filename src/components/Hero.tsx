import Link from "next/link";
import { formatYen, images, siteConfig } from "@/lib/site";
import { ArrowIcon } from "./Icons";

export function Hero() {
  const { initial, monthly } = siteConfig.pricing;

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-16 text-white sm:pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="photo animate-hero-zoom absolute inset-0"
          style={{
            backgroundImage: `url("${images.hero}"), linear-gradient(160deg, #1d4f55 0%, #0f1d22 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,26,0.82)_0%,rgba(10,22,26,0.55)_55%,rgba(10,22,26,0.35)_100%)]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-5 pb-40 pt-16 sm:min-h-[calc(100svh-6rem)] sm:px-10 sm:pb-48 lg:px-20">
        <h1>
          <span className="sr-only">
            {siteConfig.name}｜{siteConfig.tagline}
          </span>
          <span
            className="block font-en text-[3.4rem] font-bold uppercase leading-[1.02] tracking-[0.01em] sm:text-[5.5rem] lg:text-[7rem]"
            aria-hidden="true"
          >
            <span className="hero-line">
              <span>Web Design</span>
            </span>
            <span className="hero-line">
              <span className="[animation-delay:0.12s]">And</span>
            </span>
            <span className="hero-line">
              <span className="[animation-delay:0.24s]">Support</span>
            </span>
          </span>
        </h1>

        <p className="animate-hero-2 mt-7 text-lg font-bold tracking-[0.06em] sm:text-2xl">
          中小企業のホームページを、制作から運用までまるごと。
        </p>
        <p className="animate-hero-3 mt-4 max-w-2xl text-[15px] leading-[1.9] tracking-[0.04em] text-white/80 sm:text-base">
          初期費用{formatYen(initial)}円・月額{formatYen(monthly)}円（税込）。サーバー・ドメイン・SSL・保守・更新まで、すべて月額料金に含まれています。
        </p>

        <div className="animate-hero-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="group inline-flex items-center justify-center gap-4 rounded-sm bg-accent px-9 py-4 text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-accent-hover"
          >
            無料相談はこちら
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center rounded-sm border border-white/60 px-9 py-4 text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
          >
            料金を見る
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-10 right-6 hidden flex-col items-center gap-3 sm:flex lg:right-10"
        aria-hidden="true"
      >
        <span className="font-en text-[11px] uppercase tracking-[0.3em] text-white/70 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-white/25">
          <span className="animate-scroll-line absolute inset-0 bg-white" />
        </span>
      </div>
    </section>
  );
}
