import { GraduationCap } from 'lucide-react'
import { Section } from './Section'
import { education, skills, profile } from '../data/content'

export function About() {
  return (
    <Section id="about" index="01." title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="leading-relaxed text-[var(--color-text-dim)]">
            I'm a Software Engineer with an MS in Computer Science and Engineering from UC San Diego, focused on{' '}
            <span className="text-[var(--color-text)]">distributed systems, backend infrastructure, and the
            operational side of ML</span>: the services, pipelines, and tooling that keep models and APIs
            reliable once they leave a notebook. My approach to production code is to think about failure
            modes first, then optimize.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-text-dim)]">
            Outside of backend work, I've done graduate research in causal inference and published two papers
            in applied ML. I like projects that sit at the intersection of the two: systems that have to run
            ML reliably, not just run it once.
          </p>

          <div className="mt-8 space-y-4">
            {education.map((e) => (
              <div key={e.school} className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">{e.degree}</p>
                  <p className="text-sm text-[var(--color-text-dim)]">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">
                    {e.period} · {e.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">Toolbox</p>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-sm font-medium text-[var(--color-text)]">{group.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-xs text-[var(--color-text-dim)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid items-center gap-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 md:grid-cols-[1fr_1.2fr]">
        <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
          <img
            src={profile.travel}
            alt="Sara on a hike overlooking a beach in Nusa Penida, Indonesia"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="font-serif text-2xl italic text-[var(--color-accent-dim)]">Outside of work</p>
          <p className="mt-4 leading-relaxed text-[var(--color-text-dim)]">{profile.outsideOfWork}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.hobbies.map((h) => (
              <span
                key={h}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-sm text-[var(--color-text-dim)]"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
