export function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`${className} fill-none stroke-current`}
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`${className} fill-current`} aria-hidden="true">
      <path d="M7.7 13.3 4.4 10l-1.4 1.4 4.7 4.7L17.4 6.4 16 5l-8.3 8.3Z" />
    </svg>
  );
}
