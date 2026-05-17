import TextFlippingBoardHero from "@/components/TextFlippingBoardComponent/TextFlippingBoardComponent";
import { Timeline } from "@/components/ui/timeline";
import { DitherShader } from "@/components/ui/dither-shader";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { ConfettiButton } from "@/components/EasterEggs/ConfettiButton";
import {
  aboutHighlights,
  aboutText,
  businessDevelopment,
  contact,
  education,
  experiences,
  heroPhrases,
  internships,
  openSourceResources,
  projects,
  proficiencies,
  technicalSkills,
} from "@/data/portfolioData";

function listToMarkup(items: string[]) {
  return (
    <ul className="space-y-3 text-sm text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-6">
          <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const timelineData = experiences.map((item) => ({
    title: `${item.title} · ${item.subtitle}`,
    content: (
      <div className="space-y-4 text-sm leading-7 text-slate-300">
        <p className="font-medium text-slate-100">{item.timeframe}</p>
        <ul className="space-y-3 list-disc pl-5">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    ),
  }));

  const internshipCards = internships.map((item) => (
    <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.subtitle}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{item.timeframe}</p>
      <ul className="mt-4 space-y-3 text-slate-300 text-sm leading-7 list-disc pl-5">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  ));

  const openSourceCards = openSourceResources.map((resource, index) => (
    <div
      key={resource.title}
      className="relative flex h-80 w-72 flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 px-6 pb-8 pt-6 text-white shadow-2xl"
      style={{ background: resource.cardBg }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%)] opacity-80" />
      <p className="relative text-xs uppercase tracking-[0.4em] text-sky-200/80">{resource.subtitle}</p>
      <h3 className="relative mt-4 text-3xl font-semibold leading-tight">{resource.title}</h3>
      <p className="relative mt-4 text-sm leading-6 text-slate-100/90">{resource.description}</p>
      <a
        href={resource.href}
        target={resource.external ? "_blank" : undefined}
        rel={resource.external ? "noreferrer" : undefined}
        className="relative mt-6 inline-flex w-max rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20"
      >
        {resource.action}
      </a>
    </div>
  ));

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(248,113,113,0.1),transparent_20%),linear-gradient(180deg,#020617_0%,#050816_100%)] text-foreground">
      <section id="hero" className="relative min-h-screen px-6 py-24 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-16 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-500/50 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan-300 shadow-lg shadow-cyan-500/10">
              {contact.clearance}
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Dev Mangrulkar</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Engineering mission-critical systems for federal data, analytics, and AI.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                I design high-quality digital products with strong usability and polished interactivity for federal advisory,
                analytics, and AI-first engineering teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#open-source"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Open Source
                </a>
                <a
                  href={contact.resumePdf}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-2">
              {heroPhrases.map((phrase) => (
                <div
                  key={phrase}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 shadow-xl shadow-slate-950/20"
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
              <TextFlippingBoardHero />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-sky-300">About</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">A modern portfolio for strategic engineering and analytics delivery.</h2>
            </div>
            <div className="space-y-5 text-slate-300">
              {aboutText.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 px-5 py-4 text-sm text-slate-200 shadow-lg shadow-slate-950/20"
                >
                  {highlight}
                </div>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Education</p>
                <div className="mt-6 space-y-5">
                  {education.map((item) => (
                    <div key={item.institution} className="space-y-2">
                      <p className="text-base font-semibold text-white">{item.institution}</p>
                      <p className="text-sm text-slate-400">{item.degree}</p>
                      <p className="text-sm text-slate-500">{item.timeframe}</p>
                      <p className="text-sm text-slate-300">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Specialized strengths</p>
                <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  {proficiencies.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-2xl bg-white/5 px-4 py-3 text-left text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-16 top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -right-16 bottom-10 h-28 w-28 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-slate-950/20">
              <DitherShader
                src="/headshot%202025%20copy.png"
                colorMode="duotone"
                primaryColor="#0ea5e9"
                secondaryColor="#f97316"
                gridSize={4}
                objectFit="cover"
                className="h-full min-h-[32rem] w-full rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="relative border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Experience</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Telling the story of every engagement.</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              From federal data lakes to AI-informed proposal automation, these are the hands-on solutions I ship.
            </p>
          </div>

          <div className="mt-16">
            <Timeline data={timelineData} />
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {internshipCards}
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Projects & Activities</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Projects that span analytics, AI, and product design.</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              A curated selection of engineering, research, and mentorship work from across academics and consulting.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{project.category}</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
                <p className="mt-6 text-sm text-slate-400">{project.highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-source" className="relative border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Open Source</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Interactive code, downloads, and source discovery.</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              A composable space to explore GitHub work, download the resume, and discover the tools behind the portfolio.
            </p>
          </div>

          <div className="mt-16">
            <Carousel items={openSourceCards} />
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s build the next generation of federal analytics and AI systems.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            I’m available for federal advisory, engineering leadership, and analytics system delivery with an active security clearance.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 text-left shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Email</p>
              <p className="mt-3 text-xl font-semibold text-white">{contact.email}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 text-left shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Phone</p>
              <p className="mt-3 text-xl font-semibold text-white">{contact.phone}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 text-left shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Location</p>
              <p className="mt-3 text-xl font-semibold text-white">{contact.location}</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Email Me
            </a>
            <a
              href={contact.resumePdf}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Download CV
            </a>
            <ConfettiButton />
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Certification</p>
              {listToMarkup(["AI-900 Microsoft Certified: Azure AI Fundamentals", "Certified SAFe 6 Agilist"])}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Technical Skills</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Personal note</p>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Also a professional drummer and sound engineer with a passion for creative production, rhythm, and technical design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
