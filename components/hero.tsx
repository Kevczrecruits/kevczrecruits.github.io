import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-36 text-center sm:pt-44">
      <p className="font-mono text-xs lowercase tracking-widest text-slate-400">
        {profile.role} · {profile.location}
      </p>

      {/* Memoryland-style liquid display heading with ethereal blur layer behind */}
      <div className="relative mt-6">
        <h1
          aria-hidden="true"
          className="absolute inset-0 select-none text-balance text-5xl font-black tracking-tighter text-slate-900/40 blur-[10px] sm:text-7xl"
        >
          {profile.name}
        </h1>
        <h1 className="relative text-balance text-5xl font-black tracking-tighter text-slate-900 sm:text-7xl">
          {profile.name}
        </h1>
      </div>

      {/* Frosted description card */}
      <div className="mt-10 max-w-xl rounded-2xl border border-white/40 bg-white/15 px-6 py-5 shadow-sm backdrop-blur-md">
        <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
          {profile.statement}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#work"
          className="rounded-full bg-slate-900 px-5 py-2.5 font-mono text-xs lowercase tracking-widest text-white transition-transform hover:scale-[1.03]"
        >
          view work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/40 bg-white/15 px-5 py-2.5 font-mono text-xs lowercase tracking-widest text-slate-600 shadow-sm backdrop-blur-md transition-colors hover:text-slate-900"
        >
          get in touch
        </a>
      </div>
    </section>
  )
}
