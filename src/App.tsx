import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { BentoGrid } from "./components/BentoGrid"
import { TrendingProjects } from "./components/TrendingProjects"
import { Testimonials } from "./components/Testimonials"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-x-clip">
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <BentoGrid />
        <TrendingProjects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
