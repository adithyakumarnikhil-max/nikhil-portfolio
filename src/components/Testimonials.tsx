import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 space-y-8 md:space-y-16">
      <div className="text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Inspiring words from my clients
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          I am grateful for the opportunity to work with amazing clients. Here are
          some of their thoughts on our collaboration.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-100 shadow-sm relative">
        <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 text-6xl md:text-8xl text-gray-200 font-serif leading-none">
          "
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative z-10">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-xl font-bold text-gray-500">
            R
          </div>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-xl font-bold">Rahul Maheshwari</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Founder - LinuxSocials(Hiring) | Ex-SDE-2@Adobe, Ex-Google | 70xSpeaker | Including IITs, LPU, Amity, IIITs, BIT, SRM, BITS-Dubai etc. | Philanthropist | Lazy Youtuber | Podcaster, Linux Socials
                </p>
              </div>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "Nikhil's level of commitment and ownership can put anyone in awe of him. Not just a perfect analyst, but a professional who treats his work like a baby who he is willing to give all up for. Always willing to learn and explore all challenges beyond his capabilities. And it won't be any surprise if I see him making great one day in MAANG companies. Great work in building scalable data solutions and you'll always be a part of our team now. And stay the same way hungry and eager to learn and implement. This is what makes you the best. Good luck in your journey."
            </p>
            <a href="#" className="text-sm text-gray-500 hover:text-black underline underline-offset-4 inline-block">
              From LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
