import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Particles from './Particles'
import ParallaxCanvas from './ParallaxCanvas'
import Marquee from './Marquee'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-end pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />
        <Particles />
        <ParallaxCanvas />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-red-700 mb-4">
              <span className="h-2 w-2 rounded-full bg-red-600" /> Live learning platform
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Elevate learning with X‑Cubed
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              A cinematic, interactive education platform—beautifully crafted with motion, depth, and clarity.
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
          </motion.div>
        </div>

        <Marquee />
      </div>
    </section>
  )
}
