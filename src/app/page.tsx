import { ThreatFeed } from "@/components/sections/threat-feed";
import { GlobalBackground } from "@/components/layout/global-bg";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Skills } from "@/components/sections/skills/skills";
import { Experience } from "@/components/sections/experience/experience";
import { Research } from "@/components/sections/research/research";
import { Projects } from "@/components/sections/projects/projects";
import { Certifications } from "@/components/sections/certifications/certifications";
import { VisualWork } from "@/components/sections/visual-work/visual-work";
import { Connection } from "@/components/sections/connection";
import { TerminalGame } from "@/components/ui/terminal-game";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <GlobalBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Research />
      <ThreatFeed />
      <Projects />
      <Certifications />
      <VisualWork />
      <Connection />
      <TerminalGame />
    </main>
  );
}