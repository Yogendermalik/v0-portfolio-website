"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
]

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Alex Chen
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Senior Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center py-3"
                >
                  <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} (opens in a new tab)`}
              className="block text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
