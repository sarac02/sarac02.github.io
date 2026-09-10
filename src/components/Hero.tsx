import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileDown, Mail } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

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
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-6xl">
            Sara Chaudhari
          </h1>

          <p className="mt-4 font-serif text-2xl italic text-[var(--color-accent-dim)] sm:text-3xl">
            I build <span key={roleIndex}>{ROLES[roleIndex]}</span>
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

            <div className="flex items-center gap-4 pt-2 sm:pt-0">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto max-w-sm md:ml-auto md:mr-0">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-2xl bg-[var(--color-surface)]" />
            <img
              src={profile.heroPhoto}
              alt="Sara Chaudhari at her UC San Diego graduation"
              className="aspect-[4/5] w-full rounded-2xl border border-[var(--color-border)] object-cover object-top shadow-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
