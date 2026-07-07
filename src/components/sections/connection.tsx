"use client";

import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Github, Linkedin, Library, ArrowUpRight } from "lucide-react";

export function Connection() {
  const [isHovered, setIsHovered] = useState(false);

  const links = [
    {
      name: "Email",
      value: "lawrenceabim@gmail.com",
      href: "mailto:lawrenceabim@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      value: "in/bimbo-lawrence",
      href: "https://www.linkedin.com/in/bimbo-lawrence",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      value: "github.com/lawrenceabim",
      href: "https://github.com/lawrenceabim",
      icon: Github,
    },
    {
      name: "ORCID",
      value: "0009-0003-8468-9748",
      href: "https://orcid.org/0009-0003-8468-9748",
      icon: Library, // Using Library as a clean academic icon for ORCID
    },
  ];

  return (
    <Container 
      as="section" 
      id="contact" 
      className="relative pt-24 pb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left-aligned architectural line */}
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

      {/* Header */}
      <div className="mb-12 sm:pl-12">
        <span className="mb-2 block font-mono text-sm tracking-widest text-accent">
          08 &mdash; COMMS
        </span>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
          Establish Connection
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am always open to exploring new opportunities. Whether you want to collaborate on OSINT investigations, discuss developments in cyber law and digital forensics, or just talk about futuristic motion design, my inbox is always open. Let's build something secure.        </p>
      </div>

      {/* Interactive Contact Grid */}
      <div className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:pl-12">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.name === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-10px_rgba(208,149,76,0.2)]"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="rounded-full bg-background p-3 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <link.icon className="h-6 w-6 text-accent" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100" />
            </div>
            
            <div>
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-foreground">
                {link.name}
              </h3>
              <p className="mt-2 truncate font-serif text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {link.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Copyright Footer */}
      <footer className="border-t border-border/50 pt-8 sm:pl-12">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground/60 transition-colors hover:text-accent">
          &copy; 2026 &middot; Bimbo Lawrence Damitan &middot; All rights reserved
        </p>
      </footer>

    </Container>
  );
}