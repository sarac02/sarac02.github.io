import { useEffect, useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { profile } from '../data/content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="font-mono text-sm font-bold text-[var(--color-text)]">
          sara<span className="text-[var(--color-accent)]">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm text-[var(--color-text-dim)] md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-[var(--color-text)]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-3 py-1.5 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
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
        <ul className="flex flex-col gap-1 border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 font-mono text-sm text-[var(--color-text-dim)] md:hidden">
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
