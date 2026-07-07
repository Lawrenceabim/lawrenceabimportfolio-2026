"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function GlobalBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background transition-colors duration-300">
      
      {/* Base Engineered Grid - The "Goldilocks" opacity (visible but not distracting) */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.06] dark:opacity-[0.03]" />
      
      {/* Interactive Mouse Spotlight Glow - Slightly softened */}
      {mounted && (
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-accent), transparent 40%)`,
            opacity: 0.05
          }}
        />
      )}

      {/* Sparse Global Floating Particles - Adjusted for light/dark balance */}
      {mounted && Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/20 dark:bg-accent/30"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Smooth Fade at the bottom so the background blends perfectly into the footer */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}