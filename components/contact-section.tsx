import { profile } from '@/lib/portfolio-data'

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto mt-32 max-w-5xl px-4 pb-24 scroll-mt-28">
      <div className="rounded-2xl border border-white/40 bg-white/15 p-8 text-center shadow-sm backdrop-blur-md sm:p-14">
        <span className="font-mono text-xs lowercase tracking-widest text-slate-400">
          contact
        </span>

        <div className="relative mx-auto mt-6 max-w-2xl">
          <h2
            aria-hidden="true"
            className="absolute inset-0 select-none text-balance text-3xl font-black tracking-tighter text-slate-900/40 blur-[10px] sm:text-5xl"
          >
            let&apos;s build your team.
          </h2>
          <h2 className="relative text-balance text-3xl font-black tracking-tighter text-slate-900 sm:text-5xl">
            let&apos;s build your team.
          </h2>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-slate-900 px-6 py-3 font-mono text-xs lowercase tracking-widest text-white transition-transform hover:scale-[1.03]"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs lowercase tracking-widest text-slate-400 transition-colors hover:text-slate-900"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-xs lowercase tracking-widest text-slate-300">
        © {new Date().getFullYear()} {profile.name} — built with next.js
      </p>
    </section>
  )
}
