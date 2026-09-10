import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

const ROLES = ['backend systems', 'ML infrastructure', 'distributed services', 'data pipelines']

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-24 pb-16 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-xs text-[var(--color-text-dim)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-good)]" />
          MS CSE @ UC San Diego · open to SWE &amp; ML infra roles
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-6xl">
          Sara Chaudhari
        </h1>

        <p className="mt-4 font-mono text-lg text-[var(--color-accent)] sm:text-xl">
          I build{' '}
          <span key={roleIndex} className="inline-block">
            {ROLES[roleIndex]}
          </span>
          <span className="caret">_</span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-dim)] sm:text-lg">
          {profile.blurb}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 font-mono text-sm font-medium text-[#0a0c10] transition-transform hover:-translate-y-0.5"
          >
            View projects
            <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Get in touch
          </a>

          <div className="ml-0 flex items-center gap-4 pt-2 sm:ml-4 sm:pt-0">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent)]"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent)]"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
