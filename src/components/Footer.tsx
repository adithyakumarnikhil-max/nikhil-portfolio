import { Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden border-t border-gray-200">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Section: Logo and Text */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 w-full max-w-5xl mb-20">
          {/* Red Logo Shape */}
          <div className="flex-shrink-0 pt-1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H16C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32H0V0Z" fill="#E12A27"/>
            </svg>
          </div>
          
          {/* Bio Text */}
          <p className="text-[#4a5568] leading-relaxed text-sm md:text-base font-medium">
            Hi, I'm Nikhil Adithya Kumar — an AI & Product Analytics Enthusiast who loves crafting intelligent workflow automations. I specialize in building data-driven systems that simplify workflows and enhance business efficiency. With a strong eye for detail and a builder's mindset, I turn data into scalable decisions. Always curious, always creating — let's shape the future of tech together.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-8 md:gap-10 mb-16">
          <a href="mailto:nikhiladithyakumar@gmail.com" className="text-gray-700 hover:text-black transition-colors">
            <Mail className="w-6 h-6" strokeWidth={1.5} />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://x.com/NikhilAdit25502" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.975H5.036z" />
            </svg>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
            <Instagram className="w-6 h-6" strokeWidth={1.5} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://wa.me/9581341643" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </a>
          <a href="https://www.linkedin.com/in/nikhil-adithya/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/nikhil0100kumar" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="sr-only">GitHub</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs md:text-sm text-[#4a5568] flex flex-wrap items-center justify-center gap-1.5 text-center">
          <span>© 2026 Made with <span className="text-red-500">❤️</span> by <span className="font-bold text-black">Nikhil Adithya Kumar</span></span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="font-bold text-[#2d3748]">NIKHIL TECHNOLOGIES LIMITED</span>
        </div>
      </div>
    </footer>
  )
}
