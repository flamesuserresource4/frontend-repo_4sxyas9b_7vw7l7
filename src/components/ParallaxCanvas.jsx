import { motion } from 'framer-motion'

export default function ParallaxCanvas() {
  const float = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const slowFloat = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,0,0.08),transparent_60%)]" />

      {/* Geometric education motifs: rulers, pi, function curves made with SVG */}
      <motion.svg variants={float} animate="animate" width="220" height="220" viewBox="0 0 220 220" className="absolute -top-10 -left-6 text-red-200">
        <defs>
          <linearGradient id="gradRed" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fecaca" />
            <stop offset="100%" stopColor="#fca5a5" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#gradRed)" strokeWidth="2">
          <path d="M10 110 Q110 -10 210 110" />
          <path d="M10 110 Q110 230 210 110" />
          <circle cx="110" cy="110" r="18" />
          <text x="100" y="60" fontSize="22" fill="#ef4444" style={{fontFamily:'ui-sans-serif'}}>π</text>
        </g>
      </motion.svg>

      {/* Nature accent: leaf-like shapes */}
      <motion.div variants={slowFloat} animate="animate" className="absolute right-6 top-10">
        <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
          <path d="M10 120 C40 60, 80 40, 170 20" stroke="#fecaca" strokeWidth="2.5" />
          <path d="M14 118 C42 90, 90 70, 150 46" stroke="#fca5a5" strokeWidth="1.5" />
          <path d="M18 116 C50 92, 100 80, 140 60" stroke="#ef4444" strokeOpacity="0.6" strokeWidth="2" />
          <circle cx="150" cy="40" r="6" fill="#ef4444" fillOpacity="0.6" />
          <circle cx="120" cy="62" r="4" fill="#fca5a5" />
        </svg>
      </motion.div>

      {/* Dotted grid */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle,rgba(239,68,68,0.15)_1px,transparent_1px)] bg-[length:18px_18px]" />
    </div>
  )
}
