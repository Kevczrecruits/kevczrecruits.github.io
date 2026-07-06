import { experience, profile } from '@/lib/portfolio-data'

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto mt-32 max-w-5xl px-4 scroll-mt-28">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
          experience
        </h2>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-white/40 bg-white/15 px-5 py-2.5 font-mono text-xs lowercase tracking-widest text-slate-600 shadow-sm backdrop-blur-md transition-colors hover:text-slate-900"
        >
          download resume ↓
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/15 shadow-sm backdrop-blur-md">
        {experience.map((item, i) => (
          <div
            key={item.company}
            className={`flex flex-col gap-2 p-6 transition-colors hover:bg-white/30 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:p-8 ${
              i !== 0 ? 'border-t border-white/40' : ''
            }`}
          >
            <div className="sm:w-2/3">
              <h3 className="text-xl font-black tracking-tighter text-slate-900">
                {item.role}
              </h3>
              <p className="font-mono text-xs lowercase tracking-widest text-slate-400">
                {item.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.summary}</p>
            </div>
            <span className="font-mono text-xs tracking-widest text-slate-400">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
