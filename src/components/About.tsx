import { GraduationCap } from 'lucide-react'
import { Section } from './Section'
import { education, skills, profile } from '../data/content'
import { PhotoGallery } from './PhotoGallery'

export function About() {
  return (
    <Section id="about" index="01." title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="leading-relaxed text-[var(--color-text-dim)]">
            I'm a Software Engineer with an MS in Computer Science and Engineering from UC San Diego, focused on{' '}
            <span className="text-[var(--color-text)]">distributed systems, backend infrastructure, and the
            operational side of ML</span>: the services, pipelines, and tooling that keep models and APIs
            reliable once they leave a notebook. My approach to production code is simple: think about failure
            modes first, then optimize.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-text-dim)]">
            Alongside that, I've done graduate research in causal inference and published two papers in
            applied ML. The two feed each other, I care most about projects at their intersection: systems
            built to run ML reliably, not just prove once that it can.
          </p>

          <div className="mt-8 space-y-4">
            {education.map((e) => (
              <div key={e.school} className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">{e.degree}</p>
                  <p className="text-sm text-[var(--color-text-dim)]">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">
                    {e.period} · {e.gpa}
                  </p>
                  {e.honors && (
                    <p className="mt-1 text-xs italic text-[var(--color-accent-dim)]">{e.honors}</p>
                  )}
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

      <div className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
        <p className="font-serif text-2xl italic text-[var(--color-accent-dim)]">Outside of work</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-text-dim)]">{profile.outsideOfWork}</p>
        <div className="mt-5 mb-8 flex flex-wrap gap-2">
          {profile.hobbies.map((h) => (
            <span
              key={h}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-sm text-[var(--color-text-dim)]"
            >
              {h}
            </span>
          ))}
        </div>

        <PhotoGallery photos={profile.gallery} />
      </div>
    </Section>
  )
}
