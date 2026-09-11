import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center sm:p-16"
      >
        <p className="font-serif text-lg italic text-[var(--color-accent)]">05. Contact</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-[var(--color-text)] sm:text-4xl">
          Say hello.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-dim)]">
          I'm looking for full-time software engineering and ML infrastructure roles. Got a role
          I should know about, a systems problem worth talking through, or you just want to say
          hi, my inbox is always open.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--color-on-accent)] transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5">
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
        </div>
      </motion.div>
    </section>
  )
}
