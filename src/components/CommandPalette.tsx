import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Mail, FileText, Hash, Folder } from 'lucide-react'
import { profile, projects } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

type Item = {
  id: string
  label: string
  hint: string
  icon: ReactNode
  action: () => void
}

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const items = useMemo<Item[]>(() => {
    const nav: Item[] = [
      { id: 'nav-about', label: 'About', hint: 'section', icon: <Hash size={15} />, action: () => scrollTo('about') },
      { id: 'nav-experience', label: 'Experience', hint: 'section', icon: <Hash size={15} />, action: () => scrollTo('experience') },
      { id: 'nav-projects', label: 'Projects', hint: 'section', icon: <Hash size={15} />, action: () => scrollTo('projects') },
      { id: 'nav-publications', label: 'Publications', hint: 'section', icon: <Hash size={15} />, action: () => scrollTo('publications') },
      { id: 'nav-contact', label: 'Contact', hint: 'section', icon: <Hash size={15} />, action: () => scrollTo('contact') },
    ]

    const projectItems: Item[] = projects
      .filter((p) => p.github)
      .map((p) => ({
        id: `project-${p.name}`,
        label: p.name,
        hint: 'project · opens GitHub',
        icon: <Folder size={15} />,
        action: () => window.open(p.github, '_blank', 'noreferrer'),
      }))

    const links: Item[] = [
      { id: 'link-github', label: 'GitHub profile', hint: 'external', icon: <GithubIcon size={15} />, action: () => window.open(profile.github, '_blank', 'noreferrer') },
      { id: 'link-linkedin', label: 'LinkedIn', hint: 'external', icon: <LinkedinIcon size={15} />, action: () => window.open(profile.linkedin, '_blank', 'noreferrer') },
      { id: 'link-email', label: profile.email, hint: 'email', icon: <Mail size={15} />, action: () => { window.location.href = `mailto:${profile.email}` } },
      { id: 'link-resume', label: 'Download resume', hint: 'PDF', icon: <FileText size={15} />, action: () => window.open(profile.resume, '_blank', 'noreferrer') },
    ]

    return [...nav, ...projectItems, ...links]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((i) => i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q))
  }, [items, query])

  function handleQueryChange(value: string) {
    setQuery(value)
    setSelected(0)
  }

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((s) => Math.min(s + 1, filtered.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((s) => Math.max(s - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const item = filtered[selected]
        if (item) {
          item.action()
          onClose()
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, filtered, selected, onClose])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-24 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-2xl"
          >
            <div className="flex items-center gap-2.5 border-b border-[var(--color-border)] px-4 py-3">
              <Search size={16} className="shrink-0 text-[var(--color-text-faint)]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Jump to a section, project, or link..."
                className="w-full bg-transparent font-mono text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-faint)]"
              />
              <kbd className="shrink-0 rounded border border-[var(--color-border)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-text-faint)]">
                esc
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center font-mono text-sm text-[var(--color-text-faint)]">No results</p>
              )}
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setSelected(i)}
                  onClick={() => {
                    item.action()
                    onClose()
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    i === selected ? 'bg-[var(--color-accent)]/10 text-[var(--color-text)]' : 'text-[var(--color-text-dim)]'
                  }`}
                >
                  <span className={i === selected ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-faint)]'}>
                    {item.icon}
                  </span>
                  <span className="flex-1 truncate text-sm">{item.label}</span>
                  <span className="shrink-0 font-mono text-[11px] text-[var(--color-text-faint)]">{item.hint}</span>
                  {i === selected && <ArrowRight size={13} className="shrink-0 text-[var(--color-accent)]" />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
