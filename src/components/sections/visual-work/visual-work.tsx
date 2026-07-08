"use client";

import { Container } from "@/components/ui/container";
import { visualWork } from "@/content/site";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";


export function VisualWork() {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Track the mouse coordinates locally within this section
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    const scroll = () => {
      // If the container exists and the user isn't touching/hovering it
      if (scrollerRef.current && !isSectionHovered) {
        scrollerRef.current.scrollLeft += 1; // Change this number to adjust speed
        
        // Loop back to start seamlessly when we hit halfway
        if (scrollerRef.current.scrollLeft >= scrollerRef.current.scrollWidth / 2) {
          scrollerRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isSectionHovered]);

  return (
    <>
      <section 
        ref={sectionRef}
        id="visual-work" 
        className="relative w-full overflow-hidden py-12 bg-[#141310] dark:bg-[#f0f0eb] transition-colors duration-300"
        onMouseEnter={() => setIsSectionHovered(true)}
        onMouseLeave={() => setIsSectionHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Local Engineered Grid & Interactive Spotlight */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid matches the inverted theme: dark dots on the dark bg, light dots on the light bg */}
          <div className="absolute inset-0 bg-[radial-gradient(#2b2721_1px,transparent_1px)] dark:bg-[radial-gradient(#dcdbd2_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />
          
          {/* The glowing spotlight that follows the mouse */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-accent), transparent 40%)`,
              opacity: isSectionHovered ? 0.08 : 0
            }}
          />
        </div>

        <Container className="relative z-10">
          {/* Interactive Architectural Grid Line (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isSectionHovered ? 1 : 0, x: isSectionHovered ? 0 : 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 right-0 top-0 hidden w-8 flex-col items-end justify-between border-r border-dashed border-accent/40 py-4 sm:flex"
            aria-hidden="true"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-px w-3 bg-accent/40" />
            ))}
          </motion.div>

          <div className="mb-12 sm:pr-12">
            <span className="mb-2 block font-mono text-sm tracking-widest text-accent">
              06 &mdash; CREATIVE DIRECTION
            </span>
            <h2 className="font-sans text-4xl font-black uppercase tracking-tight text-[#edeae2] dark:text-[#1b1915] sm:text-6xl">
              Visual Work
            </h2>
            <div className="mt-4 flex gap-4 font-mono text-xs tracking-widest text-[#8c8579] dark:text-[#6b6862] uppercase">
              <span>Typography</span>
              <span className="text-accent/50">&bull;</span>
              <span>Branding</span>
              <span className="text-accent/50">&bull;</span>
              <span>Corporate Identity</span>
            </div>
          </div>
        </Container>
        
        {/* The Infinite Scrolling Marquee */}
        <div 
            ref={scrollerRef}
            className="relative z-10 mt-8 flex w-full overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onTouchStart={() => setIsSectionHovered(true)}
            onTouchEnd={() => setIsSectionHovered(false)}
        >
          {[...visualWork, ...visualWork].map((work, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(work.image)}
              className="group relative mx-3 aspect-square w-[150px] shrink-0 cursor-zoom-in overflow-hidden rounded-sm border border-[#2b2721] bg-[#1b1915] dark:border-[#dcdbd2] dark:bg-[#e7e6df] sm:w-[180px] md:w-[220px]"
            >
              <Image 
                src={work.image} 
                alt={work.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 150px, 220px"
              />
              
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-accent drop-shadow-md">
                  {work.category}
                </span>
                <h3 className="mt-1 font-sans text-sm font-bold text-[#edeae2] drop-shadow-lg leading-tight">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL SCREEN LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-background/90 p-4 backdrop-blur-md sm:p-12"
          >
            <button 
                onClick={() => setSelectedImage(null)}
                className="absolute right-6 top-6 z-[101] rounded-full bg-surface/50 p-2 text-muted-foreground hover:text-foreground cursor-pointer"
            >
             <X className="h-6 w-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative h-full w-full max-w-5xl overflow-hidden rounded-md border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image 
                src={selectedImage}
                alt="Full resolution visual work"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}