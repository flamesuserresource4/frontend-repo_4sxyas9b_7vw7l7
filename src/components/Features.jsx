import { motion } from 'framer-motion'
import { Play, BarChart3, Sparkles, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Interactive Courses',
    description:
      'Guided modules with videos, quizzes, and coding exercises to drive real skill growth.',
    icon: Play,
  },
  {
    title: 'Analytics that matter',
    description:
      'Track comprehension and completion with cohort and individual insights at a glance.',
    icon: BarChart3,
  },
  {
    title: 'Personalized Paths',
    description:
      'Adaptive learning journeys that meet learners where they are and accelerate outcomes.',
    icon: Sparkles,
  },
  {
    title: 'Enterprise‑grade',
    description:
      'SSO, roles, and permissions with secure data practices built in from day one.',
    icon: ShieldCheck,
  },
]

export default function Features() {
  return (
    <section id="platform" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      <div className="absolute -inset-x-20 -top-40 h-60 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for modern education</h2>
          <p className="mt-3 text-gray-700">Everything you need to author, deliver, and measure learning in one platform.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-red-100 p-6 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="h-11 w-11 rounded-lg bg-red-50 text-red-700 grid place-items-center mb-4 group-hover:bg-red-100">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.description}</p>
              <div className="mt-6 h-1 w-0 bg-red-500 group-hover:w-full transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
