"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IBGermanAppLogo } from "./IBGermanAppLogo";
import { Sparkles, Terminal, CheckCircle2, ArrowRight } from "lucide-react";

interface CinematicStartupIntroProps {
  onComplete: () => void;
}

export function CinematicStartupIntro({ onComplete }: CinematicStartupIntroProps) {
  const [stage, setStage] = useState<"initializing" | "ready">("initializing");
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const diagnosticSequence = [
      "GERMAN B CODEX // V1.0.1 INITIALISIERUNG...",
      "Lade die 5 IB-Pflichtthemen (Identitäten, Erfahrungen, Genialität, Organisation, Planet)... [OK]",
      "Initialisiere Grammatik-Matrix (18 Kernbereiche & Kasussystem)... [OK]",
      "Synchronisiere Paper 1 Textsorten & Kriterien A/B/C... [OK]",
      "Kalibriere Redemittel-Dossier & HL Literatur-Oral-Studio... [OK]",
      "DEUTSCHE SPRACHE B CODEX BEREIT.",
    ];

    let timer: NodeJS.Timeout;
    diagnosticSequence.forEach((log, index) => {
      timer = setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === diagnosticSequence.length - 1) {
          setTimeout(() => setStage("ready"), 400);
        }
      }, (index + 1) * 220);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020308]/95 backdrop-blur-2xl p-4 select-none"
    >
      <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
        {/* Ambient Gradient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 via-red-500/15 to-slate-900 border border-amber-400/40 p-2 shadow-lg mb-5 relative group"
        >
          <IBGermanAppLogo />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 animate-ping" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-4"
        >
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-amber-400 uppercase block mb-1">
            DEUTSCHE SPRACHE B // IB SL & HL
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            German B Master Codex
          </h1>
        </motion.div>

        {/* Diagnostic Terminal Output */}
        <div className="w-full rounded-2xl bg-black/60 border border-white/10 p-3 sm:p-4 mb-6 font-mono text-[11px] sm:text-xs text-left min-h-[140px] flex flex-col justify-end space-y-1 overflow-hidden">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-slate-300"
            >
              <Terminal className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="truncate">{log}</span>
            </motion.div>
          ))}
          {stage === "initializing" && (
            <div className="flex items-center gap-2 text-amber-400 animate-pulse">
              <span className="inline-block w-1.5 h-3 bg-amber-400" />
              <span>Diagnose läuft...</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <AnimatePresence>
          {stage === "ready" && (
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={onComplete}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer active:scale-95"
            >
              <span>Codex Betreten</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
