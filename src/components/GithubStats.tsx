import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

type Stats = { publicRepos: number; followers: number }

function useCountUp(target: number, durationMs = 900) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (target === 0) return
    let start: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, durationMs])

  return value
}

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('https://api.github.com/users/sarac02')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (!cancelled) {
          setStats({ publicRepos: data.public_repos ?? 0, followers: data.followers ?? 0 })
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const repos = useCountUp(stats?.publicRepos ?? 0)

  if (failed) return null

  return (
    <motion.a
      href={profile.github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-xs text-[var(--color-text-dim)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-good)]" />
      {stats ? (
        <>
          <span className="text-[var(--color-text)]">{repos}</span> public repos on GitHub
        </>
      ) : (
        'loading GitHub stats…'
      )}
    </motion.a>
  )
}
