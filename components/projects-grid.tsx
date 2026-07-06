import { projects } from '@/lib/portfolio-data'

const sizeClasses: Record<string, string> = {
  wide: 'sm:col-span-2',
  tall: 'sm:row-span-2',
  normal: '',
}

export function ProjectsGrid() {
  return (
    <section id="work" className="mx-auto mt-32 max-w-5xl px-4 scroll-mt-28">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
          selected work
        </h2>
        <span className="font-mono text-xs lowercase tracking-widest text-slate-400">
          {projects.length} projects
        </span>
      </div>

      <div className="grid auto-rows-[minmax(11rem,auto)] grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className={`group flex flex-col justify-between rounded-2xl border border-white/40 bg-white/15 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:bg-white/30 ${
              sizeClasses[project.size ?? 'normal']
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs lowercase tracking-widest text-slate-400">
                {project.category}
              </span>
              <span className="font-mono text-xs tracking-widest text-slate-400">
                {project.year}
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-black tracking-tighter text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <span className="mt-4 inline-block font-mono text-xs lowercase tracking-widest text-slate-400 transition-colors group-hover:text-slate-900">
                view →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
