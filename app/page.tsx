import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-primary px-4 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero />
        
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
      
      {/* Spotlight effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: 'radial-gradient(600px at 50% 300px, rgba(29, 78, 216, 0.07), transparent 80%)',
        }}
      />
    </div>
  )
}
