export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center font-mono text-xs text-[var(--color-text-faint)] sm:px-8">
        Built with React, TypeScript &amp; Tailwind · © {new Date().getFullYear()} Sara Chaudhari
      </div>
    </footer>
  )
}
