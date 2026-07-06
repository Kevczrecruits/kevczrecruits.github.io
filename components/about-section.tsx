import { about, interests } from '@/lib/portfolio-data'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto mt-32 max-w-5xl px-4 scroll-mt-28">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* About card */}
        <div className="rounded-2xl border border-white/40 bg-white/15 p-8 shadow-sm backdrop-blur-md lg:col-span-2">
          <span className="font-mono text-xs lowercase tracking-widest text-slate-400">
            {about.heading}
          </span>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-pretty text-lg leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Interests card */}
        <div className="rounded-2xl border border-white/40 bg-white/15 p-8 shadow-sm backdrop-blur-md">
          <span className="font-mono text-xs lowercase tracking-widest text-slate-400">
            {interests.heading}
          </span>
          <ul className="mt-6 space-y-3">
            {interests.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm leading-relaxed text-slate-600"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
