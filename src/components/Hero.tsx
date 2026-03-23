import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { IconCloud } from "./IconCloud"

export function Hero() {
  return (
    <section className="min-h-0 lg:min-h-[calc(100vh-4rem)] py-12 md:py-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-12">
      <div className="w-full lg:flex-1 max-w-3xl space-y-6 md:space-y-4 text-center lg:text-left">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] tracking-tighter">
          AI & Product Analytics Enthusiast <span className="text-gray-300 font-light mx-1 md:mx-2">|</span> 
          vibe coder <span className="text-gray-300 font-light mx-1 md:mx-2">|</span> 
          AI generalist since 2023 <span className="text-gray-300 font-light mx-1 md:mx-2">|</span> 
          N8N <span className="text-gray-300 font-light mx-1 md:mx-2">|</span> 
          Make <span className="text-gray-300 font-light mx-1 md:mx-2">|</span> 
          Openclaw
        </h1>
        
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
          Passionate about AI, product analytics, and building intelligent workflow automations. Microsoft Certified Data Analyst dedicated to turning data into scalable decisions.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2">
          <a href="https://github.com/nikhil0100kumar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/nikhil-adithya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-[200px] md:max-w-[320px] lg:max-w-[400px] aspect-square flex-shrink-0 mx-auto lg:mx-0">
        <div className="absolute inset-0 flex items-center justify-center">
           <IconCloud />
        </div>
      </div>
    </section>
  )
}
