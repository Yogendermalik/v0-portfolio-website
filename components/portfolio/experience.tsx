import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Software Engineer",
    company: "TechCorp",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    technologies: ["TypeScript", "React", "Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    title: "Software Engineer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    description:
      "Developed and shipped highly interactive web applications for various clients. Collaborated with designers to create intuitive user interfaces and implemented performance optimizations.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Built responsive websites and web applications for clients across different industries. Focused on creating accessible and performant user experiences.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "WordPress"],
  },
  {
    period: "2018 — 2019",
    title: "Junior Developer",
    company: "Tech Solutions Inc",
    companyUrl: "https://example.com",
    description:
      "Assisted in developing and maintaining web applications. Gained experience in full-stack development and agile methodologies.",
    technologies: ["Python", "Django", "React", "MySQL"],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <Link
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                        aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            href="/resume.pdf"
            className="group inline-flex items-center font-medium leading-tight text-foreground hover:text-primary"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                  Résumé
                </span>
                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
