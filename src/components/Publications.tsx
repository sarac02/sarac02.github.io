import { BookOpen, ExternalLink } from 'lucide-react'
import { Section } from './Section'
import { publications } from '../data/content'
import type { Publication } from '../data/content'

function PubCard({ pub }: { pub: Publication }) {
  return (
    <>
      <BookOpen size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-medium leading-snug text-[var(--color-text)]">
            {pub.title}
            {pub.link && (
              <ExternalLink
                size={13}
                className="ml-1.5 inline text-[var(--color-text-faint)] transition-colors group-hover:text-[var(--color-accent)]"
              />
            )}
          </p>
          {pub.type === 'poster' && (
            <span className="shrink-0 rounded border border-[var(--color-border)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-text-faint)]">
              Poster
            </span>
          )}
        </div>
        <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">{pub.venue}</p>
      </div>
    </>
  )
}

export function Publications() {
  return (
    <Section id="publications" index="04." title="Publications">
      <div className="space-y-3">
        {publications.map((pub) =>
          pub.link ? (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="group flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-border-hover)]"
            >
              <PubCard pub={pub} />
            </a>
          ) : (
            <div
              key={pub.title}
              className="group flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <PubCard pub={pub} />
            </div>
          ),
        )}
      </div>
    </Section>
  )
}
