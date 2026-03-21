export function WorkExperience() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Data Analyst",
      date: "SEP 15, 2024 - PRESENT",
      logo: "TECH",
      description: [
        "Designed and maintained data dashboards, ensuring a responsive and engaging UI for stakeholders.",
        "Regularly interacted with clients to gather feedback and requirements, ensuring project alignment.",
        "Implemented modern analytics tools to improve data insights and performance across multiple projects."
      ]
    },
    {
      company: "DataDriven Corp",
      role: "Product Analytics Intern",
      date: "JUN 1, 2023 - SEP 1, 2024",
      logo: "DATA",
      description: [
        "Developed analytics platforms including user progress tracking, daily engagement metrics, and reporting.",
        "Created a comprehensive data dictionary and integrated automated testing.",
        "Improved user experience and performance across the platform through data-driven decisions."
      ]
    },
    {
      company: "University Research Lab",
      role: "AI/ML Intern",
      date: "JUN 1, 2022 - DEC 28, 2022",
      logo: "LAB",
      description: [
        "Automated internal workflows, saving over 10 hours weekly and reducing data errors by 30%.",
        "Worked across teams to identify problems and implement intelligent workflow solutions.",
        "Developed time management skills by balancing evolving tasks with efficient delivery."
      ]
    }
  ]

  return (
    <section className="py-12 md:py-24 space-y-8 md:space-y-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Work Experience
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((exp, i) => (
          <div key={i} className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 space-y-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-gray-600 font-medium">{exp.role}</p>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider pt-1">{exp.date}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs flex-shrink-0">
                {exp.logo}
              </div>
            </div>
            <ul className="space-y-3 list-disc list-inside text-gray-600 leading-relaxed">
              {exp.description.map((item, j) => (
                <li key={j} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
