import { motion } from 'framer-motion'
import { Section } from './Section'
import { experience, research } from '../data/content'
import { Highlight } from '../lib/highlight'
import type { Role, Research as ResearchT } from '../data/content'

function TimelineItem({ item, index }: { item: Role | ResearchT; index: number }) {
  const org = 'company' in item ? item.company : item.org
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      className="relative pb-10 pl-8 last:pb-0"
    >
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
      <span className="absolute left-0 top-4 bottom-0 w-px -translate-x-1/2 bg-[var(--color-border)]" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-semibold text-[var(--color-text)]">
          {item.title} · <span className="text-[var(--color-accent)]">{org}</span>
        </h3>
        <span className="font-mono text-xs text-[var(--color-text-faint)]">{item.period}</span>
      </div>

      <ul className="mt-3 space-y-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
            <span>
              <Highlight text={b} />
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span key={t} className="rounded border border-[var(--color-border)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-faint)]">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <Section id="experience" index="02." title="Experience">
      <div>
        {experience.map((role, i) => (
          <TimelineItem key={role.company} item={role} index={i} />
        ))}
      </div>

      <div className="mt-4 mb-8 flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">Research</span>
        <span className="h-px flex-1 bg-[var(--color-border)]" />
      </div>

      <div>
        {research.map((role, i) => (
          <TimelineItem key={role.org} item={role} index={i} />
        ))}
      </div>
    </Section>
  )
}
