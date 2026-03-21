export function TrustedBy() {
  const companies = [
    "TapLab",
    "Unithrive",
    "Linux Socials",
    "Cyp India",
    "7Sauna"
  ]

  return (
    <section className="py-12 md:py-24 border-t border-gray-100">
      <div className="text-center space-y-8 md:space-y-12">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-500">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, i) => (
            <span key={i} className="text-xl md:text-2xl lg:text-3xl font-bold font-serif">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
