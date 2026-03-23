import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"

export function TrendingProjects() {
  const projects = [
    {
      title: "Ray-Ban Meta AI Glasses 3D Concept",
      tags: ["Nano Banana Pro", "Flow", "Antigravity"],
      bg: "bg-black text-white",
      image: "https://image.thum.io/get/width/1200/crop/700/https://super-beijinho-c7e9d9.netlify.app/",
      link: "https://super-beijinho-c7e9d9.netlify.app/"
    },
    {
      title: "Creo Designers - Interior Design Website",
      tags: ["Figma", "Claude Code", "Next.js", "Vue.js"],
      bg: "bg-stone-800 text-white",
      image: "https://image.thum.io/get/width/1200/crop/700/https://creodesigners.com/",
      link: "https://creodesigners.com/"
    },
    {
      title: "CRM Application for Wholesale Rice Mill",
      tags: ["Salesforce", "CRM", "Cloud", "Automation", "+4 More"],
      bg: "bg-indigo-950 text-white",
      image: "https://picsum.photos/seed/project3/800/600",
      link: "#"
    }
  ]

  return (
    <section className="py-12 md:py-24 space-y-8 md:space-y-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center max-w-3xl mx-auto">
        Some Of My Trending Projects Loved By the Users 👇
      </h2>
      
      <div className="pb-12 relative">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className={`sticky rounded-[2rem] overflow-hidden ${project.bg} shadow-2xl border border-white/10 mb-12 md:mb-24 last:mb-0`}
            style={{ top: `calc(6rem + ${i * 2}rem)` }}
          >
            <div className="p-6 md:p-12 lg:p-16 space-y-4 md:space-y-8">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
                  {project.title}
                </h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <Button size="icon" className="rounded-full w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 md:px-12 lg:px-16 pb-0 pt-4 md:pt-8">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-[1.02] duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[40vh] md:h-[50vh] max-h-[500px] rounded-t-2xl shadow-2xl object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button size="lg" className="rounded-full bg-red-500 hover:bg-red-600 text-white border-none">
          View all projects
        </Button>
      </div>
    </section>
  )
}
