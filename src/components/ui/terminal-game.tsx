"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldAlert, ShieldCheck, Bug, Activity } from "lucide-react";

export function TerminalGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [gameState, setGameState] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Timer Countdown Logic
  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("over");
      setActiveNode(null);
    }
  }, [timeLeft, gameState]);

  // Randomize Infected Node Logic
  useEffect(() => {
    if (gameState === "playing") {
      const interval = setInterval(() => {
        setActiveNode(Math.floor(Math.random() * 9));
      }, 700); // Changes every 700ms to keep it fast-paced
      return () => clearInterval(interval);
    }
  }, [gameState]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameState("playing");
    setActiveNode(Math.floor(Math.random() * 9));
  };

  const handleNodeClick = (index: number) => {
    if (gameState !== "playing") return;
    
    if (index === activeNode) {
      setScore((s) => s + 1);
      // Instantly move to a new random node on success
      let nextNode = Math.floor(Math.random() * 9);
      while (nextNode === index) {
        nextNode = Math.floor(Math.random() * 9); // Ensure it actually moves
      }
      setActiveNode(nextNode);
    }
  };

  const getRank = () => {
    if (score >= 40) return "S-TIER: ZERO-DAY MASTER";
    if (score >= 30) return "A-TIER: SENIOR ANALYST";
    if (score >= 15) return "B-TIER: SOC OPERATOR";
    return "C-TIER: JUNIOR RESPONDER";
  };

  return (
    <>
      {/* Glitching Bug Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          x: [0, -2, 2, -1, 1, 0, 0, 0, 0, 0], // Quick jitter
          opacity: [0.6, 1, 0.6, 1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6], // Flash effect
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="fixed bottom-6 right-6 z-40 rounded-md bg-surface p-3 text-red-500 shadow-sm border border-red-500/30 hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-colors"
        aria-label="Toggle Interactive Game"
      >
        <Bug className="h-5 w-5" />
      </motion.button>

      {/* Game Overlay (Perfectly Centered) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Centered Game Modal */}
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-40%", scale: 0.95 }}
              animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
              exit={{ opacity: 0, x: "-50%", y: "-40%", scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-1/2 left-1/2 z-50 w-[90vw] sm:w-[450px] rounded-lg border border-border bg-background shadow-2xl overflow-hidden font-mono text-sm"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between bg-surface px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-accent animate-pulse" />
                  <span className="text-xs text-foreground uppercase tracking-widest font-semibold">Network Defense Protocol</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-red-400 transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Game Screen */}
              <div className="p-6 flex flex-col items-center">
                
                {/* HUD / Scoreboard */}
                <div className="w-full flex justify-between items-center mb-6 bg-surface/50 border border-border rounded-md p-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-muted-foreground tracking-widest">Time Remaining</span>
                    <span className={`text-xl font-bold ${timeLeft <= 10 && gameState === 'playing' ? 'text-red-500 animate-pulse' : 'text-foreground'}`}>
                      00:{timeLeft.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase text-muted-foreground tracking-widest">Threats Patched</span>
                    <span className="text-xl font-bold text-emerald-400">{score}</span>
                  </div>
                </div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-3 gap-3 w-full mb-6 relative">
                  {/* Game Over Blur Overlay */}
                  {gameState === "over" && (
                    <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/60 rounded-md flex flex-col items-center justify-center border border-border">
                      <ShieldCheck className="h-10 w-10 text-accent mb-2" />
                      <h3 className="text-lg font-bold text-white mb-1">SYSTEM SECURED</h3>
                      <p className="text-accent text-xs font-semibold mb-1">{getRank()}</p>
                      <p className="text-muted-foreground text-xs">Final Score: {score}</p>
                    </div>
                  )}

                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                    const isActive = index === activeNode && gameState === "playing";
                    return (
                      <button
                        key={index}
                        onClick={() => handleNodeClick(index)}
                        disabled={gameState !== "playing"}
                        className={`
                          relative flex h-20 items-center justify-center rounded-md border transition-all duration-150
                          ${isActive 
                            ? "bg-red-500/20 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)] cursor-pointer hover:bg-red-500/30" 
                            : "bg-surface/30 border-border cursor-default"
                          }
                        `}
                      >
                        {isActive ? (
                          <Bug className="h-8 w-8 text-red-500 animate-bounce" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-border/50" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Controls */}
                {gameState !== "playing" && (
                  <button
                    onClick={startGame}
                    className="w-full flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-background font-semibold uppercase tracking-wider transition-all hover:bg-accent/90 hover:scale-[1.02]"
                  >
                    <ShieldAlert className="h-4 w-4" />
                    {gameState === "idle" ? "Initialize Defense" : "Restart Protocol"}
                  </button>
                )}
                {gameState === "playing" && (
                  <div className="w-full text-center text-xs text-muted-foreground animate-pulse">
                    Click the red nodes to patch vulnerabilities!
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}