import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { Section } from './Section'
import { projects } from '../data/content'
import { GithubIcon } from './icons'

export function Projects() {
  return (
    <Section id="projects" index="03." title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08, ease: 'easeOut' }}
            className="group flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-border-hover)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-[var(--color-text)]">{p.name}</h3>
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  className="shrink-0 text-[var(--color-text-faint)] transition-colors group-hover:text-[var(--color-accent)]"
                >
                  <GithubIcon size={18} />
                </a>
              ) : (
                <span className="flex shrink-0 items-center gap-1 text-[var(--color-text-faint)]" title={p.privateNote}>
                  <Lock size={14} />
                </span>
              )}
            </div>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-dim)]">{p.description}</p>

            <ul className="mt-3 space-y-1.5">
              {p.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-2 text-[13px] leading-relaxed text-[var(--color-text-dim)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-[var(--color-border)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-faint)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
