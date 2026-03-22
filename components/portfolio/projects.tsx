"use client"

import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Smart Resume Analyzer",
    description:
      "A web application that analyzes resumes and matches them against job descriptions. Extracts keywords and skills to provide a relevance score and improvement suggestions using intelligent text processing.",
    image: "/projects/resume-analyzer.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yogendermalik",
    featured: true,
  },
  {
    title: "Advanced Authentication System",
    description:
      "Production-ready authentication system with secure JWT-based authentication, refresh tokens, role-based access control (RBAC), email verification, password reset, and Google OAuth 2.0 integration.",
    image: "/projects/auth-system.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "OAuth 2.0"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yogendermalik",
    featured: true,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </Link>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="relative z-10 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="relative z-10 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="View live site"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={200}
                  height={120}
                  className="z-10 rounded border-2 border-border/50 transition group-hover:border-border/80 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            href="https://github.com/yogendermalik"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center font-medium leading-tight text-foreground hover:text-primary"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                View Full Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                  Archive
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
