"use client";

import { Container } from "@/components/ui/container";
import { projects } from "@/content/site";
import { cn } from "@/lib/utils";
import { Cpu, ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const standardProjects = projects.filter((p) => !p.featured);

  return (
    <Container
      as="section"
      id="projects"
      className="relative py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Architectural grid line */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-24 left-0 top-24 hidden w-8 flex-col justify-between border-l border-dashed border-accent/40 py-4 sm:flex"
        aria-hidden="true"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-px w-3 bg-accent/40" />
        ))}
      </motion.div>

      <div className="mb-12 sm:pl-12">
        <span className="mb-2 block font-mono text-sm tracking-widest text-accent">
          06 &mdash; DEPLOYMENTS
        </span>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
          Key Projects
        </h2>
      </div>

      <div className="flex flex-col gap-12 sm:pl-12">
        {/* FEATURED PROJECT CASE STUDIES */}
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-background xl:flex-row"
          >
            {/* Left: technical data */}
            <div className="flex flex-col justify-between p-8 xl:w-5/12">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      Featured Case Study
                    </div>
                    {/* Status Badge */}
                    {project.status && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        {project.status}
                      </div>
                    )}
                  </div>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} externally`}
                      className="ml-4 shrink-0 text-muted-foreground transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <h3 className="mb-4 font-sans text-2xl font-bold text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-8 font-serif text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.architecture && (
                  <div className="mb-8 space-y-3">
                    <h4 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-foreground">
                      <Cpu className="h-4 w-4 text-accent" aria-hidden="true" />
                      System Architecture
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {project.architecture.map((item) => (
                        <li key={item} className="flex gap-3 font-mono text-xs text-muted-foreground">
                          <span className="text-accent" aria-hidden="true">
                            ▹
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-border/50 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-surface px-2 py-1 font-mono text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: images. Layout is driven by project.imageLayout */}
            <div
              className={cn(
                "border-t border-border bg-surface/30 xl:w-7/12 xl:border-l xl:border-t-0",
                project.imageLayout === "natural"
                  ? "flex flex-col"
                  : "flex flex-col justify-center gap-6 p-6",
              )}
            >
              {project.images?.map((src, i) =>
                project.imageLayout === "natural" ? (
                  // Natural layout (GENESYS): Uses flex-1 and figcaption to fill the height elegantly
                  <figure
                    key={src}
                    className={cn(
                      "group/img flex flex-1 flex-col items-center justify-center gap-3 p-6",
                      i > 0 && "border-t border-border/60",
                    )}
                  >
                    <div className="relative w-full overflow-hidden rounded-md border border-border transition-all duration-300 group-hover/img:-translate-y-1 group-hover/img:border-accent group-hover/img:shadow-[0_0_25px_-5px_var(--color-accent)] bg-[#f8f9fa] dark:bg-[#0e1117]">
                      <Image
                        src={src}
                        alt={project.imageCaptions?.[i] ?? `${project.title} — image ${i + 1}`}
                        width={1200}
                        height={800}
                        className="h-auto w-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-[1.02]"
                      />
                    </div>
                    {project.imageCaptions?.[i] && (
                      <figcaption className="flex items-baseline gap-2 self-start font-mono text-xs text-muted-foreground pt-2">
                        <span className="text-accent font-bold">FIG. {String(i + 1).padStart(2, "0")}</span>
                        <span>{project.imageCaptions[i]}</span>
                      </figcaption>
                    )}
                  </figure>
                ) : (
                  // Cover layout (RAG): Fixed height app-window style
                  <div
                    key={src}
                    className={cn(
                      "group/img relative min-h-[250px] w-full flex-1 overflow-hidden rounded-md border border-border transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_25px_-5px_var(--color-accent)]",
                      i === 0 ? "bg-[#0e1117]" : "bg-white",
                    )}
                  >
                    <Image
                      src={src}
                      alt={project.imageCaptions?.[i] ?? `${project.title} — image ${i + 1}`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 60vw"
                      className={cn(
                        "object-cover transition-transform duration-500 group-hover/img:scale-[1.02]",
                        i === 0 ? "object-left-top p-1" : "object-center p-2",
                      )}
                    />
                  </div>
                ),
              )}
            </div>
          </article>
        ))}

        {/* STANDARD PROJECTS GRID */}
        {standardProjects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standardProjects.map((project) => (
              <article
                key={project.title}
                className="group relative flex flex-col justify-between rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-10px_var(--color-accent)]"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <FolderGit2
                      className="h-8 w-8 text-accent opacity-80 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} externally`}
                        className="text-muted-foreground transition-colors hover:text-accent"
                      >
                        <ExternalLink className="h-5 w-5" aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  {project.category && (
                    <div className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </div>
                  )}
                  <h3 className="mb-3 font-sans text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-6 font-serif text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-border/50 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}