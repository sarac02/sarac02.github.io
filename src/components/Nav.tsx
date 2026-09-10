import { useEffect, useState } from 'react'
import { Menu, X, FileDown, Command } from 'lucide-react'
import { profile } from '../data/content'
import { useScrollProgress } from '../lib/useScrollProgress'
import { useActiveSection } from '../lib/useActiveSection'

const LINKS = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#publications', id: 'publications', label: 'Publications' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progress = useScrollProgress()
  const active = useActiveSection(['home', ...LINKS.map((l) => l.id)])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'bg-[var(--color-bg)]/90 shadow-[0_1px_0_var(--color-border)] backdrop-blur' : ''
      }`}
    >
      <div className="h-[2px] w-full bg-[var(--color-border)]/40">
        <div
          className="h-full bg-[var(--color-accent)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8">
        <a href="#home" className="font-display text-xl font-bold text-[var(--color-text)]">
          Sara <span className="text-[var(--color-accent)]">C.</span>
        </a>

        <ul className="hidden items-center gap-8 text-[15px] text-[var(--color-text-dim)] md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`border-b-2 pb-0.5 transition-colors hover:text-[var(--color-text)] ${
                  active === l.id
                    ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                    : 'border-transparent'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onOpenPalette}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-2.5 py-1.5 font-mono text-xs text-[var(--color-text-faint)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Open command palette"
          >
            <Command size={12} />
            K
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-3.5 py-1.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-[var(--color-text)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 text-sm text-[var(--color-text-dim)] md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="block py-2 text-[var(--color-accent)]">
              Resume ↗
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
