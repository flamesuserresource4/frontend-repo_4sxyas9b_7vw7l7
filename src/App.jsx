import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <footer className="border-t border-red-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} X‑Cubed. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-700 hover:text-red-600">Privacy</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Terms</a>
            <a href="/test" className="text-gray-700 hover:text-red-600">System check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
