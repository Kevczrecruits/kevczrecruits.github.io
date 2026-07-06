export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Ambient physics accents — slow, blurred, diluted color blobs */}
      <div className="absolute -left-32 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-cyan-200/25 blur-[120px] animate-drift-a" />
      <div className="absolute right-[-15%] top-[20%] h-[42rem] w-[42rem] rounded-full bg-blue-200/20 blur-[120px] animate-drift-b" />
      <div className="absolute bottom-[-15%] left-[25%] h-[36rem] w-[36rem] rounded-full bg-yellow-100/35 blur-[120px] animate-drift-c" />

      {/* Ultra-subtle vector grid canvas overlay */}
      <div className="absolute inset-0 grid-canvas" />
    </div>
  )
}
