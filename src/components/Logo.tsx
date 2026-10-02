type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

/** ワードマーク。tone="dark" は暗い背景用 */
export function Logo({ tone = "light", className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-1 font-en uppercase leading-none ${
        tone === "dark" ? "text-white" : "text-foreground"
      } ${className}`.trim()}
    >
      <span className="text-[1.7rem] font-bold tracking-[-0.01em]">Stark Lab</span>
      <span
        className={`h-2 w-2 rounded-full ${tone === "dark" ? "bg-accent-light" : "bg-accent"}`}
        aria-hidden="true"
      />
    </span>
  );
}
