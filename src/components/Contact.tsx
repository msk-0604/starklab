"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

const initialState: ContactState = {
  ok: false,
  message: "",
};

const fields = [
  {
    name: "company",
    label: "会社名",
    type: "text",
    autoComplete: "organization",
    required: true,
  },
  {
    name: "name",
    label: "お名前",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    name: "email",
    label: "メールアドレス",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    name: "phone",
    label: "電話番号",
    type: "tel",
    autoComplete: "tel",
    required: true,
  },
] as const;

export function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <SectionHeading
          en="Contact"
          ja="お問い合わせ"
          lead="無料相談・ご質問など、お気軽にご連絡ください。内容を確認のうえ、担当よりご連絡いたします。"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <ScrollReveal>
            <div className="h-full bg-accent px-7 py-10 text-white sm:px-10">
              <p className="font-en text-sm uppercase tracking-[0.2em] text-white/70">
                Free Consultation
              </p>
              <p className="mt-3 text-xl font-bold leading-relaxed tracking-[0.05em]">
                ホームページのこと、
                <br />
                まずはお気軽にご相談ください。
              </p>
              <dl className="mt-10 space-y-6 border-t border-white/25 pt-8">
                <div>
                  <dt className="text-sm text-white/70">屋号</dt>
                  <dd className="mt-1 font-en text-2xl font-bold uppercase">{siteConfig.name}</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/70">担当</dt>
                  <dd className="mt-1 text-lg font-bold">{siteConfig.owner}</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/70">メールアドレス</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="break-all text-lg font-bold underline-offset-4 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <form action={formAction} className="border-t border-accent pt-8" noValidate>
              {/* honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className={labelClass}>
                      {field.label}
                      <RequiredBadge />
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required={field.required}
                      className={inputClass}
                      placeholder={field.label}
                    />
                    {state.errors?.[field.name] && (
                      <p className="mt-1.5 text-sm text-red-600" role="alert">
                        {state.errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <label htmlFor="message" className={labelClass}>
                  お問い合わせ内容
                  <RequiredBadge />
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={`${inputClass} resize-y`}
                  placeholder="ご相談内容をご記入ください"
                />
                {state.errors?.message && (
                  <p className="mt-1.5 text-sm text-red-600" role="alert">
                    {state.errors.message}
                  </p>
                )}
              </div>

              {state.message && (
                <p
                  className={`mt-6 px-4 py-3 text-sm ${
                    state.ok ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"
                  }`}
                  role="status"
                >
                  {state.message}
                </p>
              )}

              <p className="mt-6 text-xs leading-relaxed text-muted">
                送信いただいた個人情報は、
                <Link href="/privacy" className="text-accent underline underline-offset-2">
                  プライバシーポリシー
                </Link>
                に基づき適切に取り扱います。
              </p>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={pending}
                  className="group inline-flex w-full items-center justify-center gap-4 rounded-sm bg-accent px-12 py-4 text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-accent-hover disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                >
                  {pending ? "送信中..." : "送信する"}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const labelClass = "mb-2 flex items-center gap-2 text-sm font-bold tracking-[0.04em]";
const inputClass =
  "w-full border border-border bg-surface px-4 py-3.5 text-[15px] outline-none transition placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20";

function RequiredBadge() {
  return (
    <span className="bg-accent px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">必須</span>
  );
}
