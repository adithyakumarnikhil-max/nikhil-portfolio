import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="relative flex items-center justify-between py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 z-20">
        <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-lg">N</span>
        </div>
        <span className="font-bold text-xl tracking-tight">NIKHIL</span>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-600 transition-colors">Home</a>
        <a href="#stats" className="hover:text-gray-600 transition-colors">About</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Projects</a>
      </div>

      <div className="hidden md:block z-20">
        <Button variant="outline" className="rounded-full">
          Connect Me
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-20 p-2 text-gray-600 hover:text-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 z-10 md:hidden">
          <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#stats" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <Button variant="outline" className="rounded-full w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            Connect Me
          </Button>
        </div>
      )}
    </nav>
  )
}
