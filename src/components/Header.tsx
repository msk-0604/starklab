"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_4px_24px_rgba(15,29,34,0.08)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 sm:px-10 ${
          scrolled ? "h-16 sm:h-[4.5rem]" : "h-16 sm:h-24"
        }`}
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} トップへ`}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="メインナビ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-[15px] font-bold text-foreground transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-accent hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-2 inline-flex items-center rounded-sm bg-accent px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-accent-hover"
          >
            お問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-white lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col px-5 py-6" aria-label="モバイルナビ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-baseline justify-between border-b border-border py-4"
              onClick={() => setOpen(false)}
            >
              <span className="text-base font-bold text-foreground">{link.label}</span>
              <span className="font-en text-sm uppercase tracking-[0.12em] text-accent">
                {link.en}
              </span>
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-accent px-7 py-4 text-[15px] font-bold text-white"
            onClick={() => setOpen(false)}
          >
            無料相談・お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
