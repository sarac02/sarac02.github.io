import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileDown } from 'lucide-react'
import { profile } from '../data/content'

const ROLES = ['backend systems', 'ML infrastructure', 'distributed services', 'data pipelines']

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pt-32 pb-20 sm:px-8 sm:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="min-w-0 order-2 md:order-1"
        >
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-6xl">
            Sara Chaudhari
          </h1>

          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 font-display text-2xl font-medium text-[var(--color-accent)] sm:text-3xl">
            <span>I build</span>
            <span className="relative inline-grid">
              <span className="invisible whitespace-nowrap">
                {ROLES.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0 whitespace-nowrap"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-text-dim)] sm:text-lg">
            {profile.blurb}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-on-accent)] transition-transform hover:-translate-y-0.5"
            >
              <FileDown size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto max-w-sm md:ml-auto md:mr-0">
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border-2 border-[var(--color-accent)]" />
            <img
              src={profile.heroPhoto}
              alt="Sara Chaudhari at her UC San Diego graduation"
              className="aspect-[4/5] w-full border border-[var(--color-border)] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
