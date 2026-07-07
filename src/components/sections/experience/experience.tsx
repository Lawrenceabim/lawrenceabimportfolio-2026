"use client";

import { Container } from "@/components/ui/container";
import { experience } from "@/content/site";
import { motion } from "motion/react";
import { useState } from "react";

export function Experience() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container 
      as="section" 
      id="experience" 
      className="relative py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Architectural Grid Line (Left Side) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-24 left-0 top-24 hidden w-8 border-l border-dashed border-accent/40 sm:flex flex-col justify-between py-4"
        aria-hidden="true"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-px w-3 bg-accent/40" />
        ))}
      </motion.div>

      <div className="mb-12 sm:pl-12">
        <span className="mb-2 block font-mono text-sm tracking-widest text-accent">
          03 &mdash; OPERATIONS
        </span>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
            Field Experience
        </h2>
      </div>
      
      <div className="space-y-12 sm:pl-12">
        {experience.map((job, index) => (
          <div key={index} className="flex gap-4 sm:gap-8">
            
            {/* Timeline Column (Dot and Line) */}
            <div className="relative flex flex-col items-center pt-2">
              <div className="h-3 w-3 rounded-full border-2 border-accent bg-background z-10" />
              {index !== experience.length - 1 && (
                <div className="absolute top-5 bottom-[-48px] w-px bg-border" />
              )}
            </div>

            {/* Content Column (Date, Role, Details) */}
            <div className="flex w-full flex-col gap-6 sm:flex-row sm:gap-12 pb-4">
              
              {/* Left Side: Date & Location */}
              <div className="shrink-0 sm:w-1/4">
                <div className="font-mono text-sm font-medium text-foreground">
                  {job.date}
                </div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  {job.location}
                </div>
              </div>

              {/* Right Side: Role & Responsibilities */}
              <div className="sm:w-3/4">
                <h3 className="font-sans text-xl font-medium text-foreground">
                  {job.role}
                </h3>
                <div className="mb-4 mt-1 font-mono text-sm text-accent">
                  {job.company}
                </div>
                <ul className="flex flex-col gap-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 font-serif text-base leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 shrink-0 select-none text-accent/50">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}