import { useRef, useEffect } from 'react'

const logos = [
  // educational/nature-inspired simple emoji as placeholders for vibe without external assets
  '📐', '📚', '🧪', '🧠', '🌿', '🧮', '🧭', '🔬', '🌱', '📊', '🧑‍🏫', '🌾'
]

export default function Marquee({ speed = 30 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = performance.now()

    const step = (t) => {
      const dt = (t - start) / 1000
      el.style.transform = `translateX(${-((dt * speed) % (el.scrollWidth / 2))}px)`
      requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [speed])

  return (
    <div className="relative overflow-hidden py-6">
      <div ref={ref} className="whitespace-nowrap will-change-transform">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="inline-flex items-center gap-10 text-3xl sm:text-4xl mx-6 text-red-500/70">
            {logos.map((l, idx) => (
              <span key={`${i}-${idx}`} className="select-none">
                {l}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
