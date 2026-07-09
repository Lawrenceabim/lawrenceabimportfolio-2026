"use client";

import { Container } from "@/components/ui/container";
import { stats, awards } from "@/content/site";
import { motion } from "motion/react";
import { useState } from "react";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Certifications() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container 
      as="section" 
      id="certifications" 
      className="relative py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* RIGHT-ALIGNED ARCHITECTURAL LINE */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-24 right-0 top-24 hidden w-8 border-r border-dashed border-accent/40 sm:flex flex-col justify-between items-end py-4"
        aria-hidden="true"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-px w-3 bg-accent/40" />
        ))}
      </motion.div>

      {/* HEADER (Right Padded) */}
      <div className="mb-12 sm:pr-12">
        <span className="mb-2 block font-mono text-sm tracking-widest text-accent">
          07 &mdash; RECOGNITION
        </span>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
          Certifications & Awards
        </h2>
      </div>

      {/* MAIN CONTENT WRAPPER (Right Padded) */}
      <div className="flex flex-col gap-16 sm:pr-12">
        
        {/* STATS GRID ... (Keep your existing stats grid code here) */}
        
        {/* STATS GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 pt-4">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col justify-center rounded-lg border-t-2 bg-surface/30 p-6 shadow-sm backdrop-blur-sm ${stat.color}`}
            >
              <div className={`mb-2 font-sans text-4xl font-bold tracking-tighter sm:text-5xl ${stat.color.split(' ')[0]}`}>
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS LIST */}
        <div className="flex flex-col gap-6">
          {awards.map((award, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col justify-between gap-4 rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-10px_rgba(208,149,76,0.15)] sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-5 sm:items-center">
                
                {/* Logo or Fallback Icon */}
                <div className="mt-1 shrink-0 overflow-hidden rounded-md bg-white p-1.5 sm:mt-0 h-14 w-14 flex items-center justify-center shadow-sm">
                  {award.logo ? (
                    <Image src={award.logo} alt={award.issuer} width={40} height={40} className="object-contain" />
                  ) : (
                    <Award className="h-6 w-6 text-slate-800" />
                  )}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-lg font-bold text-foreground">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="text-accent">{award.issuer}</span>
                    <span>&middot;</span>
                    <span>{award.date}</span>
                  </div>
                  {award.description && (
                    <p className="mt-2 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Show Credential Button */}
              {award.link && (
                <a 
                  href={award.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent hover:text-foreground transition-colors border border-accent/30 hover:bg-accent/10 px-4 py-2 rounded-full shrink-0"
                >
                  Show Credential <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}

          {/* LinkedIn "See More" Link */}
          <div className="mt-6 flex items-center sm:ml-4">
            <a
              href="https://www.linkedin.com/in/bimbo-lawrence/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
            >
              See more credentials on LinkedIn
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </Container>
  );
}