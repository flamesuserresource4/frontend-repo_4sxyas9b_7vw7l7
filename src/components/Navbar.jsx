import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-red-600 text-white grid place-items-center font-black">X</div>
          <span className="font-semibold text-gray-900 tracking-tight">X‑Cubed</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-gray-700 hover:text-red-600 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#demo" className="inline-flex items-center rounded-md bg-red-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-red-700 transition-colors">
            Get a demo
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-md border border-red-200 text-gray-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-red-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-gray-800 hover:text-red-600">
                {item.label}
              </a>
            ))}
            <a href="#demo" className="block py-2 text-red-700 font-semibold">Get a demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
