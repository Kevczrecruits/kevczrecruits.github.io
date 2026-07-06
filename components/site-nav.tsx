import { nav, profile } from '@/lib/portfolio-data'

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/40 bg-white/15 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
        <a
          href="#top"
          className="font-mono text-xs lowercase tracking-widest text-slate-500 transition-colors hover:text-slate-900"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs lowercase tracking-widest text-slate-400 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          <span className="font-mono text-xs lowercase tracking-widest text-slate-400">
            {profile.status}
          </span>
        </div>
      </nav>
    </header>
  )
}
