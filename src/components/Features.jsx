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
    <section id="platform" className="relative py-24 bg-white">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for modern education</h2>
          <p className="mt-3 text-gray-700">Everything you need to author, deliver, and measure learning in one platform.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-red-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-red-50 text-red-700 grid place-items-center mb-4 group-hover:bg-red-100">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
