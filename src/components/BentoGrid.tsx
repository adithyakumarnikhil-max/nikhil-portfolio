import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export function BentoGrid() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {/* Top Left */}
        <div className="md:col-span-2 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-center bg-white shadow-sm">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center mb-6">
            <span className="text-xl md:text-2xl">🚀</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Hey, I'm Nikhil Adithya Kumar</h2>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            I'm an AI and Product Analytics enthusiast passionate about building data-driven systems that simplify workflows and enhance business efficiency. Microsoft Certified Data Analyst. Currently pursuing BTech in Computer Science at Lendi Institute of Engineering and Technology.
          </p>
        </div>

        {/* Top Right */}
        <div className="md:col-span-2 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-center bg-white shadow-sm">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-xl mb-6"></div>
          <div className="text-5xl md:text-6xl font-bold mb-2 flex items-center">
            <AnimatedNumber value={8} />+
          </div>
          <div className="text-gray-500 text-sm md:text-base">Repositories</div>
        </div>

        {/* Bottom Left */}
        <div className="md:col-span-1 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-center bg-white shadow-sm">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-xl mb-6"></div>
          <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
            <AnimatedNumber value={4} />+
          </div>
          <div className="text-gray-500 text-xs md:text-sm">Certifications</div>
        </div>

        {/* Bottom Middle */}
        <div className="md:col-span-1 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-center bg-white shadow-sm">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-xl mb-6"></div>
          <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
            <AnimatedNumber value={917} />+
          </div>
          <div className="text-gray-500 text-xs md:text-sm">LinkedIn Followers</div>
        </div>

        {/* Bottom Right */}
        <div className="md:col-span-2 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-center bg-white shadow-sm">
          <h3 className="text-lg md:text-xl font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:gap-x-8 text-gray-500 text-xs md:text-sm font-mono">
            <div>AI & ML</div>
            <div>Data Analysis</div>
            <div>Python</div>
            <div>LangChain</div>
            <div>n8n</div>
            <div>Azure</div>
          </div>
        </div>
      </div>
    </section>
  );
}
