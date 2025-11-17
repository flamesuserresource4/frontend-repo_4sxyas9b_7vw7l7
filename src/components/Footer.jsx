export default function Footer(){
  return (
    <footer className="relative overflow-hidden border-t border-red-100 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} X‑Cubed. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-700 hover:text-red-600">Privacy</a>
          <a href="#" className="text-gray-700 hover:text-red-600">Terms</a>
          <a href="/test" className="text-gray-700 hover:text-red-600">System check</a>
        </div>
      </div>
    </footer>
  )
}
