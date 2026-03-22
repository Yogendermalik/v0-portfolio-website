import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    period: "2025 — 2027",
    degree: "M.Tech in Information Security",
    institution: "Netaji Subhas University of Technology (NSUT)",
    score: "CGPA: 8.00",
    current: true,
  },
  {
    period: "2020 — 2024",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Matu Ram Institute of Engineering and Management",
    score: "Percentage: 66.85%",
    current: false,
  },
]

const certifications = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Education
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {education.map((edu, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={edu.period}
                >
                  {edu.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-base font-medium leading-tight">
                        {edu.degree}
                      </span>
                      {edu.current && (
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                          Current
                        </span>
                      )}
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {edu.institution}
                  </p>

                  <p className="mt-1 text-sm font-medium text-primary">
                    {edu.score}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground mb-6">
            <Award className="h-5 w-5 text-primary" />
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="group relative rounded-md border border-border/50 bg-secondary/30 p-4 transition-all hover:border-border hover:bg-secondary/50"
              >
                <p className="font-medium text-foreground">{cert.title}</p>
                <p className="text-sm text-muted-foreground">
                  Issued by {cert.issuer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
