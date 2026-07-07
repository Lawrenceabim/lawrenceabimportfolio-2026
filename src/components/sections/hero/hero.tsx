"use client";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/content/site";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const GEODESIC = {
  outer: "50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5",
  inner: "50,25 75,35 85,60 50,80 15,60 25,35",
  lines: [
    [50, 5, 50, 25],
    [95, 27.5, 75, 35],
    [95, 72.5, 85, 60],
    [50, 95, 50, 80],
    [5, 72.5, 15, 60],
    [5, 27.5, 25, 35],
    [50, 25, 85, 60],
    [75, 35, 50, 80],
    [85, 60, 15, 60],
    [50, 80, 25, 35],
    [15, 60, 50, 25],
    [25, 35, 75, 35],
  ],
  nodes: [
    [50, 5, 1],
    [95, 27.5, 1],
    [95, 72.5, 1],
    [50, 95, 1],
    [5, 72.5, 1],
    [5, 27.5, 1],
    [50, 25, 0.8],
    [75, 35, 0.8],
    [85, 60, 0.8],
    [50, 80, 0.8],
    [15, 60, 0.8],
    [25, 35, 0.8],
  ],
} as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const nameLines = siteConfig.name.split(" ");
  
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="profile"
      className="relative flex min-h-screen flex-col overflow-hidden pb-8 pt-24"
    >
      {mounted && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          {Array.from({ length: 75 }).map((_, i) => {
            const size = Math.random() * 2 + 1;
            return (
              <span
                key={i}
                className="particle-drift absolute rounded-full bg-accent/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: size,
                  height: size,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              />
            );
          })}
        </div>
      )}

      <div
        className="absolute right-[-25%] top-1/2 z-0 h-[500px] w-[500px] -translate-y-1/2 pointer-events-none opacity-50 transition-opacity duration-500 sm:right-[-15%] sm:h-[700px] sm:w-[700px] lg:right-0"
        aria-hidden="true"
      >
        <div 
          className={`absolute inset-0 rounded-full blur-[90px] transition-colors duration-700 ${isHovered ? 'bg-accent/20' : 'bg-accent/0'}`} 
        />

        <motion.svg
          viewBox="0 0 100 100"
          className={`relative h-full w-full overflow-visible transition-colors duration-700 ${isHovered ? 'text-accent' : 'text-border'}`}
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: isHovered ? 12 : 90, repeat: Infinity, ease: "linear" }}
          style={{ scale: isHovered ? 1.04 : 1, transition: "transform 0.5s ease" }}
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.25">
            <polygon points={GEODESIC.outer} />
            <polygon points={GEODESIC.inner} />
            {GEODESIC.lines.map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            ))}
          </g>
          <g fill="currentColor">
            {GEODESIC.nodes.map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} />
            ))}
          </g>
        </motion.svg>
      </div>

      <div className="flex w-full flex-1 flex-col justify-center">
        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center">
            
            <p className="mb-8 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span>
                {siteConfig.status} // {siteConfig.location}
              </span>
            </p>

            {/* THE NAME - Added 'group' class to trigger CSS hover state */}
            <h1 
              className="group flex max-w-full cursor-crosshair flex-col font-sans text-[clamp(2.75rem,9vw,7.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-foreground"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {nameLines.map((word, i) => (
                <span
                  key={word}
                  className={`glitch-effect ${i === nameLines.length - 1 ? "text-muted-foreground/80" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <ul className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
              {siteConfig.focusAreas.map((area) => (
                <li key={area}>
                  <span className="inline-block border border-border bg-background/80 px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur-md transition-colors duration-200 hover:border-accent hover:text-accent">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
            
          </div>
        </Container>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 mt-12 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-xs uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.div>
      </motion.div>
      
    </section>
  );
}