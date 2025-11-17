import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollSections() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <section ref={ref} className="relative py-24">
      <motion.div style={{ scale, y, opacity }} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-red-100 bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold">Learn by doing</h3>
              <p className="mt-2 text-gray-700">Scroll to explore interactive lessons that combine theory, practice, and feedback in one flow.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"/> Live coding sandboxes</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"/> Inline quizzes & checkpoints</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"/> Instant hints powered by AI</li>
              </ul>
            </div>
            <div className="relative min-h-[280px]">
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#fee2e2,white,#fecaca,white)] animate-[spin_8s_linear_infinite] opacity-60" />
              <div className="absolute inset-6 rounded-2xl bg-white border border-red-100 shadow flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-red-600/90 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
