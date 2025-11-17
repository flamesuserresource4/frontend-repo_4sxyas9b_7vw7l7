export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-red-600 to-red-700 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to accelerate learning?</h3>
              <p className="mt-3 text-white/90">Book a demo and see how X‑Cubed helps teams author content, engage learners, and measure outcomes with ease.</p>
            </div>
            <form className="bg-white/10 rounded-xl p-4 sm:p-6 space-y-3 backdrop-blur">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/80">Work email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="jane@company.com" />
              </div>
              <button type="submit" className="w-full rounded-md bg-white text-red-700 font-semibold px-4 py-2 hover:bg-red-50 transition-colors">Request demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
