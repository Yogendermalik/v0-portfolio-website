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
          {"I'm a passionate full-stack developer with expertise in building robust web applications using modern technologies. I enjoy solving complex problems and creating seamless user experiences through clean, maintainable code."}
        </p>
        <p>
          {"Currently pursuing my "}
          <span className="font-medium text-foreground hover:text-primary transition-colors">
            M.Tech in Information Security
          </span>
          {" at "}
          <span className="font-medium text-foreground hover:text-primary transition-colors">
            Netaji Subhas University of Technology (NSUT)
          </span>
          {". I specialize in the MERN stack, with strong skills in Node.js, Express.js, React, and MongoDB."}
        </p>
        <p>
          {"I've built production-ready systems including "}
          <span className="font-medium text-foreground">advanced authentication systems</span>
          {" with JWT, OAuth 2.0, and role-based access control. I'm also certified in "}
          <span className="font-medium text-foreground">Fundamentals of Deep Learning by NVIDIA</span>
          {", expanding my knowledge into AI and machine learning."}
        </p>
        <p>
          {"I'm driven by a desire to continuously learn and apply new technologies to create impactful solutions."}
        </p>
      </div>
    </section>
  )
}
