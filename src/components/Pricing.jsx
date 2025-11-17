import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 'Free', desc: 'For trying the platform', cta: 'Get started', features: ['Up to 50 learners', 'Basic analytics', 'Email support'] },
  { name: 'Pro', price: '$99/mo', desc: 'For growing teams', cta: 'Start Pro', features: ['Unlimited courses', 'Advanced analytics', 'SSO & roles'] },
  { name: 'Enterprise', price: 'Let’s talk', desc: 'For large orgs', cta: 'Contact sales', features: ['Custom SLAs', 'Security reviews', 'Dedicated success'] }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-white to-red-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pricing</h2>
          <p className="mt-3 text-gray-700">Simple, transparent plans that scale with your learning programs.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 bg-white shadow-sm ${t.name==='Pro' ? 'border-red-300 ring-2 ring-red-200' : 'border-red-100'}`}>
              {t.name==='Pro' && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-full bg-red-600 text-white">Popular</div>}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-gray-900">{t.price}</div>
              <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-red-600 text-white font-semibold px-4 py-2 hover:bg-red-700 transition-colors">{t.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* flowing line visual */}
      <svg className="absolute inset-x-0 -bottom-8 w-full" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path d="M0 40 C300 0, 900 80, 1200 40" fill="none" stroke="#fecaca" strokeWidth="2" />
      </svg>
    </section>
  )
}
