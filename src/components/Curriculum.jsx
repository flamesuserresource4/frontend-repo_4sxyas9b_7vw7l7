import { motion } from 'framer-motion'

const tracks = [
  { name: 'Foundations', desc: 'Math literacy, algebra, and critical thinking', color: 'from-red-100 to-white' },
  { name: 'STEM Labs', desc: 'Physics, chemistry, and hands-on experiments', color: 'from-white to-red-50' },
  { name: 'Data & AI', desc: 'Statistics, Python, and ML fundamentals', color: 'from-red-50 to-white' },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Curriculum</h2>
          <p className="mt-3 text-gray-700">Purpose-built pathways aligned to real-world outcomes.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${t.color} border border-red-100 shadow-sm`}>
              <div className="text-sm text-red-600 font-semibold">Track</div>
              <h3 className="mt-1 text-xl font-bold">{t.name}</h3>
              <p className="mt-2 text-gray-700">{t.desc}</p>
              <div className="mt-6 h-24 bg-[radial-gradient(circle,rgba(239,68,68,0.15)_1px,transparent_1px)] bg-[length:18px_18px] rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
