"use client"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Authentication",
    skills: ["JWT", "OAuth 2.0", "bcrypt", "RBAC"],
  },
  {
    title: "Architecture",
    skills: ["MVC", "Middleware", "API Security"],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group relative rounded-lg border border-border/50 bg-secondary/30 p-5 transition-all hover:border-border hover:bg-secondary/50"
          >
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center rounded-full bg-background/50 px-3 py-1 text-sm font-medium text-foreground transition-colors group-hover:bg-background/80">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
