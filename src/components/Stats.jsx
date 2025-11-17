const stats = [
  { value: '50k+', label: 'Active learners' },
  { value: '1,200+', label: 'Lessons shipped' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '120+', label: 'Enterprise teams' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">{s.value}</div>
              <div className="mt-1 text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
