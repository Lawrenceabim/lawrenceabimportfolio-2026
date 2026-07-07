"use client";

import { Container } from "@/components/ui/container";
import { navItems } from "@/content/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Sleeker, smaller @Handle */}
        <a 
          href="#profile" 
          className="group font-mono text-base font-medium tracking-tight text-foreground transition-colors"
        >
          <span className="text-accent transition-colors group-hover:text-foreground">@</span>
          <span className="transition-colors group-hover:text-accent">lawrenceabim</span>
        </a>

        {/* Navigation Links & Theme Toggle */}
        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden items-center gap-6 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="h-4 w-px bg-border hidden sm:block" />
          
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}