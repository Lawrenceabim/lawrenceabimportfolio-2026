"use client";

import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Radio, ExternalLink, ShieldAlert, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface ThreatArticle {
  title: string;
  pubDate: string;
  link: string;
  categories: string[];
}

export function ThreatFeed() {
  const [isHovered, setIsHovered] = useState(false);
  const [articles, setArticles] = useState<ThreatArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    
    // Update the dots to loop correctly
    const rawIndex = Math.round(container.scrollLeft / container.offsetWidth);
    setActiveIndex(rawIndex % (articles.length || 1));

    // Divide the container into 3 identical sections for the illusion
    const oneThirdScroll = container.scrollWidth / 3;
    
    // If they scroll to the 3rd section, silently jump back to the 2nd section
    if (container.scrollLeft >= oneThirdScroll * 2 - 20) {
      container.scrollLeft = container.scrollLeft - oneThirdScroll;
    } 
    // If they scroll backwards to the start, silently jump forward to the 2nd section
    else if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollLeft + oneThirdScroll;
    }
  };

  useEffect(() => {
    const fetchThreats = async () => {
      try {
        const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews");
        const data = await res.json();
        
        if (data && data.items) {
          setArticles(data.items.slice(0, 6));
        }
      } catch (error) {
        console.error("Failed to fetch threat intel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchThreats();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' 
    }).format(date);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 440; 
      
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <Container 
      as="section" 
      id="live-intel" 
      className="relative py-24 overflow-hidden"
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

      {/* Header (Arrows removed from here) */}
      <div className="mb-10 sm:pl-12 pr-4 sm:pr-12">
        <span className="mb-2 flex items-center gap-2 font-mono text-sm tracking-widest text-accent">
          05 &mdash; STAY UPDATED
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </span>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground">
          Stay Updated with the Latest Threats
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
          Automated live feed monitoring recent zero-days, vulnerabilities, and cyber intelligence reports.
        </p>
      </div>

      {/* Live Feed Carousel Grid */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-6 sm:pl-12 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-[85vw] sm:w-[400px] shrink-0 snap-start h-48 rounded-lg border border-border bg-surface/10 p-6 animate-pulse">
              <div className="h-4 w-1/4 bg-border/50 rounded mb-4"></div>
              <div className="h-6 w-3/4 bg-border/50 rounded mb-2"></div>
              <div className="h-6 w-1/2 bg-border/50 rounded"></div>
            </div>
          ))
        ) : (
          // Duplicate the articles 3 times to create the endless loop illusion
          [...articles, ...articles, ...articles].map((article, i) => (
            <a 
              key={i} 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              // Added active: classes here for the mobile touch glow
              className="w-[85vw] sm:w-[400px] shrink-0 snap-start group relative flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] p-6 transition-all hover:bg-white/10 active:bg-white/10 hover:-translate-y-1 active:-translate-y-1 hover:border-accent active:border-accent shadow-[0_0_15px_-3px_rgba(208,149,76,0.08)] hover:shadow-[0_0_30px_-10px_rgba(208,149,76,0.2)] active:shadow-[0_0_30px_-10px_rgba(208,149,76,0.2)]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Clock className="h-3 w-3 text-accent" />
                    {formatDate(article.pubDate)}
                  </div>
                  {/* Added group-active: to highlight icon on touch */}
                  <Radio className="h-4 w-4 text-accent opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity animate-pulse" />
                </div>
                
                {/* Added group-active: to turn text gold on touch */}
                <h3 className="mb-4 font-sans text-lg font-bold leading-snug text-foreground group-hover:text-accent group-active:text-accent transition-colors line-clamp-3">
                  {article.title}
                </h3>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-red-500/80" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    New Threat Logged
                  </span>
                </div>
                {/* Added group-active: to highlight link icon on touch */}
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent group-active:text-accent transition-colors" />
              </div>
            </a>
          ))
        )}
        <div className="w-[1px] shrink-0 sm:w-[48px]"></div>
      </div>

      {/* Desktop Navigation Arrows (Hidden on Mobile) */}
      <div className="mt-8 hidden md:flex items-center justify-center gap-4 sm:pl-12">
        <button 
          onClick={() => scroll("left")}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/30 transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_15px_-3px_rgba(208,149,76,0.2)]"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
        </button>
        <button 
          onClick={() => scroll("right")}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/30 transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_15px_-3px_rgba(208,149,76,0.2)]"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
        </button>
      </div>

      {/* Mobile Pagination Dots (Hidden on Desktop) */}
      <div className="mt-6 flex md:hidden items-center justify-center gap-2 sm:pl-12">
         {articles.map((_, i) => (
          <div 
            key={i} 
            className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "h-2.5 w-2.5 bg-accent" : "h-2 w-2 bg-accent/30"
            }`} 
        />
        ))}
      </div>

    </Container>
  );
}