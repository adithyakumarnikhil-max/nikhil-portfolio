import { Button } from "./ui/button"
import { Mail, MessageCircle } from "lucide-react"
import { motion } from "motion/react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Animation Area */}
        <div className="relative h-[350px] md:h-[450px] w-full rounded-3xl border border-gray-100 bg-white overflow-hidden flex items-center justify-center shadow-sm">
           {/* Subtle dot pattern background */}
           <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
           
           {/* Concentric circles */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
             <div className="w-[200px] h-[200px] rounded-full border border-gray-400"></div>
             <div className="absolute w-[350px] h-[350px] rounded-full border border-gray-400"></div>
             <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-400"></div>
           </div>

           {/* Badges */}
           <div className="absolute top-[15%] md:top-[20%] left-[20%] md:left-[30%] px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white shadow-sm border border-gray-200 text-xs md:text-sm font-medium text-gray-600 z-10 whitespace-nowrap">
             SAAS/Crypto
           </div>
           <div className="absolute top-[40%] left-[5%] md:left-[10%] px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white shadow-sm border border-gray-200 text-xs md:text-sm font-medium text-gray-600 z-10 whitespace-nowrap">
             Android/iOS
           </div>
           <div className="absolute bottom-[20%] md:bottom-[25%] left-[10%] md:left-[15%] px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white shadow-sm border border-gray-200 text-xs md:text-sm font-medium text-gray-600 z-10 whitespace-nowrap">
             Web (Fullstack)
           </div>
           <div className="absolute bottom-[30%] md:bottom-[35%] right-[5%] md:right-[20%] px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white shadow-sm border border-gray-200 text-xs md:text-sm font-medium text-gray-600 z-10 whitespace-nowrap">
             AI/ML
           </div>

           {/* Animated Cursor */}
           <motion.div
             className="absolute z-20 flex flex-col items-start pointer-events-none"
             animate={{
               left: ["35%", "15%", "20%", "70%", "35%"],
               top: ["25%", "45%", "70%", "60%", "25%"],
             }}
             transition={{
               duration: 8,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           >
             {/* Red Cursor SVG */}
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
               <path d="M5.5 3.5L18.5 11.5L11.5 13.5L8.5 20.5L5.5 3.5Z" fill="#EF4444" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
             </svg>
             {/* Name Tag */}
             <div className="bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-gray-100 mt-1 ml-4 text-gray-800">
               Nikhil
             </div>
           </motion.div>
        </div>

        {/* Right Side: Text & Buttons */}
        <div className="space-y-6 max-w-xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            I am ready to build your<br className="hidden md:block" /> next product
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Feel free to reach out to me!
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Button size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium">
              Book a call
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-gray-200 hover:bg-gray-50">
              <Mail className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-green-200 hover:bg-green-50 text-green-600">
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
