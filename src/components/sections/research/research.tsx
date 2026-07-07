"use client";

import { Container } from "@/components/ui/container";
import { research } from "@/content/site";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

export function Research() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container 
      as="section" 
      id="research" 
      className="relative py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Architectural Grid Line (Flipped to the RIGHT) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-24 right-0 top-24 hidden w-8 flex-col items-end justify-between border-r border-dashed border-accent/40 py-4 sm:flex"
        aria-hidden="true"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-px w-3 bg-accent/40" />
        ))}
      </motion.div>

      {/* Added left-padding (sm:pl-12) to shift content away from the left grid */}
      <div className="mb-12 sm:pl-12">
        <span className="mb-2 block font-mono text-sm tracking-widest text-accent">
          04 &mdash; INTEL
        </span>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
          Research & Publications
        </h2>
      </div>

      <div className="flex flex-col gap-6 sm:pl-12">
        {research.map((paper, index) => (
          <div 
            key={index}
            className="flex flex-col gap-4 rounded-lg border border-border bg-background p-6 transition-colors hover:bg-surface-hover/50"
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="space-y-2">
                <h3 className="font-sans text-xl font-medium text-foreground">
                  {paper.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
                  <span>{paper.venue}, {paper.year}</span>
                  
                  <span 
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      (paper.status === "Accepted" || paper.status === "Published") 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                    )}
                  >
                    {paper.status}
                  </span>
                </div>
              </div>

              {paper.link && (
                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded bg-red-50 px-3 py-1.5 font-sans text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60"
                >
                  <ExternalLink className="h-4 w-4" />
                  PDF
                </a>
              )}
            </div>
            
            <p className="font-serif text-base leading-relaxed text-muted-foreground">
              {paper.overview}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}