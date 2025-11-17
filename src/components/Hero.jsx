import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-red-700 mb-4">
            <span className="h-2 w-2 rounded-full bg-red-600" /> Live learning platform
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Elevate learning with X‑Cubed
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            A modern education platform that blends interactive courses, assessments, and analytics — designed to help teams and students learn faster in a beautiful red and white interface.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center rounded-md bg-red-600 text-white px-5 py-3 font-semibold shadow hover:bg-red-700 transition-colors">Book a demo</a>
            <a href="#platform" className="inline-flex items-center rounded-md border border-red-300 px-5 py-3 font-semibold text-red-700 bg-white/80 hover:bg-white transition-colors">Explore platform</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-600"/> Real‑time progress</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-600"/> Interactive content</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-600"/> Actionable insights</div>
          </div>
        </div>
      </div>
    </section>
  )
}
