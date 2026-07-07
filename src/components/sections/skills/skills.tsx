"use client";

import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { useState } from "react";

const skillCategories = [
  {
    title: "// SECURITY & INTEL",
    skills: ["OSINT", "Risk Management", "Threat Analysis", "Applied Cryptography", "GRC", "Cyber Law"],
  },
  {
    title: "// DATA & ENGINEERING",
    skills: [
      "C (Memory Management)", 
      "Python", 
      "Data Analysis", 
      "RAG Systems", 
      "GENESYS-MOD",
      "Web Development",
      "React / Next.js",
      "Streamlit"
    ],
  },
  {
    title: "// STRATEGY & CREATIVE",
    skills: [
      "Project Management", 
      "Futuristic UI", 
      "Motion Design", 
      "Social Media Management", 
      "Agile Methodologies"
    ],
  },
];

export function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container 
      as="section" 
      id="skills" 
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

      <div className="mb-12 sm:pl-12">
        <span className="mb-2 block font-mono text-sm tracking-widest text-accent">
          02 &mdash; ARSENAL
        </span>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
          Technical Capabilities
        </h2>
      </div>
      
      <div className="grid gap-12 sm:pr-12 md:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <h3 className="font-mono text-sm font-medium tracking-wider text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="cursor-default rounded border border-border bg-background/50 px-3 py-1.5 font-mono text-sm text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}