import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-10 flex items-baseline gap-3"
      >
        <span className="flex h-6 items-center rounded border border-[var(--color-accent)] px-1.5 font-mono text-xs font-medium text-[var(--color-accent)]">
          {index}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
        <span className="h-px flex-1 bg-[var(--color-border)]" />
      </motion.div>
      {children}
    </section>
  )
}
