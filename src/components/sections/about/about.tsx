"use client";

import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { useState } from "react";

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container 
      as="section" 
      id="about" 
      className="relative py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Architectural Grid Line */}
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

      <div className="mx-auto max-w-4xl rounded-lg border border-border bg-background/80 p-8 backdrop-blur-sm sm:p-12">
        <h2 className="mb-6 font-mono text-sm tracking-widest text-accent">
          01 &mdash; BACKGROUND
        </h2>
        
        <div className="flex flex-col gap-6 font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Hi, I'm Bimbo. My technical foundation was built in Nigeria, handling data analysis and digital forensics for the national power grid. I learned early on how to investigate anomalies and protect critical infrastructure.
          </p>
          <p>
            Today, I'm a CyberMACS Erasmus Mundus scholar in Istanbul and a research assistant on a TÜBİTAK project. Rather than just hunting bugs, my core focus is on Cyber Intelligence, OSINT, and Data Analysis. Whether I'm evaluating EU transition strategies using GENESYS-MOD or designing custom RAG pipelines, I specialize in analyzing complex data and turning it into actionable security intelligence.
          </p>
        </div>

        {/* --- CREDENTIALS BLOCK --- */}
        <div className="mt-10 border-t border-border/50 pt-8">
          <ul className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <li className="flex items-center gap-3">
              <span className="text-accent">◆</span>
              <span className="flex flex-wrap items-center gap-2">
                M.Sc. Applied Cybersecurity (CyberMACS) &middot; Kadir Has / SRH Berlin
                {/* Tiny Pulsing Ongoing Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  ONGOING
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">◆</span>
              B.Sc. Computer Science &middot; Ajayi Crowther University, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">◆</span>
              Research Assistant &middot; TÜBİTAK
            </li>
          </ul>
        </div>

      </div>
    </Container>
  );
}