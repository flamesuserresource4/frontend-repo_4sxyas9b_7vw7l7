import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Curriculum from './components/Curriculum'
import Pricing from './components/Pricing'
import ScrollSections from './components/ScrollSections'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <ScrollSections />
      <Stats />
      <Curriculum />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
