import { BookOpen } from 'lucide-react'
import { Section } from './Section'
import { publications } from '../data/content'

export function Publications() {
  return (
    <Section id="publications" index="04." title="Publications">
      <div className="space-y-3">
        {publications.map((pub) => (
          <div
            key={pub.title}
            className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <BookOpen size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
            <div>
              <p className="font-medium leading-snug text-[var(--color-text)]">{pub.title}</p>
              <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">{pub.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
