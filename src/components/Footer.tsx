import Link from "next/link";
import { images, navLinks, siteConfig } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import { Logo } from "./Logo";

const legalLinks = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/tokushoho", label: "特定商取引法に基づく表記" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="photo absolute inset-0"
          style={{
            backgroundImage: `url("${images.footer}"), linear-gradient(160deg, #1d4f55 0%, #0f1d22 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[rgba(10,22,26,0.82)]" />
      </div>

      {/* CTA */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-center lg:px-20">
          <div>
            <p className="font-en text-4xl font-bold uppercase leading-none tracking-[0.01em] sm:text-6xl">
              Let&apos;s Talk
            </p>
            <p className="mt-4 text-[15px] leading-relaxed tracking-[0.04em] text-white/80 sm:text-base">
              初期費用0円で始めるホームページ制作。まずは無料相談から。
            </p>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-4 rounded-sm bg-white px-9 py-4 text-[15px] font-bold tracking-wide text-accent transition-colors hover:bg-accent-light hover:text-white"
          >
            無料相談はこちら
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-20">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 text-sm tracking-[0.05em] text-white/70">
            中小企業・個人事業主のための定額ホームページ制作サービス
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-16">
          <nav aria-label="フッターナビ">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="規約">
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs tracking-[0.05em] text-white/60 sm:px-10">
          © {year} {siteConfig.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
