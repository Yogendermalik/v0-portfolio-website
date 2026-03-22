export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-muted-foreground">
        <p>
          {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
        </p>
        <p>
          {"Currently, I'm a Senior Software Engineer at "}
          <span className="font-medium text-foreground hover:text-primary transition-colors">
            TechCorp
          </span>
          {", specializing in front-end architecture. I contribute to the creation and maintenance of UI components that power the company's platform, ensuring it meets web accessibility standards and best practices to deliver an inclusive user experience."}
        </p>
        <p>
          {"In the past, I've had the opportunity to develop software across a variety of settings — from "}
          <span className="font-medium text-foreground">startups</span>
          {" and "}
          <span className="font-medium text-foreground">agencies</span>
          {" to "}
          <span className="font-medium text-foreground">large corporations</span>
          {". I've also contributed to "}
          <span className="font-medium text-foreground">open-source projects</span>
          {" and enjoy sharing knowledge through technical writing and mentoring."}
        </p>
        <p>
          {"When I'm not at the computer, I'm usually hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen."}
        </p>
      </div>
    </section>
  )
}
