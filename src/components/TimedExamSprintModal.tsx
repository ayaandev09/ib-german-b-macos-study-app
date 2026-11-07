"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  X,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Shuffle,
  Award,
  CheckCircle2,
} from "lucide-react";
import { ALL_SUBTOPICS } from "@/data/themes";

interface TimedExamSprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TimedExamSprintModal({
  isOpen,
  onClose,
}: TimedExamSprintModalProps) {
  const [durationMinutes, setDurationMinutes] = useState<15 | 30 | 45>(30);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [text, setText] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState(
    ALL_SUBTOPICS[0].sampleEssayPrompts[0]
  );

  useEffect(() => {
    setTimeLeft(durationMinutes * 60);
    setIsRunning(false);
  }, [durationMinutes]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const rollNewPrompt = () => {
    const allPrompts = ALL_SUBTOPICS.flatMap((s) => s.sampleEssayPrompts);
    const rand = allPrompts[Math.floor(Math.random() * allPrompts.length)];
    setSelectedPrompt(rand);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#020308]/90 backdrop-blur-xl select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-4xl max-h-[92vh] rounded-3xl bg-slate-900 border border-amber-400/40 shadow-2xl flex flex-col overflow-hidden text-left"
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
              <Timer className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                IB PRÜFUNGS-SPRINT SIMULATOR
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Paper 1 Schreibsimulation & Zeitdruck-Training
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Duration Selector */}
            <div className="hidden sm:flex items-center p-0.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono">
              {([15, 30, 45] as const).map((mins) => (
                <button
                  key={mins}
                  onClick={() => setDurationMinutes(mins)}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    durationMinutes === mins
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sprint HUD Bar */}
        <div className="px-5 py-3 bg-amber-500/10 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Big Digital Countdown */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold font-mono text-white tracking-tight">
              {formatTime(timeLeft)}
            </span>
            <div className="flex items-center gap-1.5">
              {isRunning ? (
                <button
                  onClick={() => setIsRunning(false)}
                  className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 cursor-pointer active:scale-95"
                >
                  <Pause className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsRunning(true)}
                  className="p-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer active:scale-95"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                </button>
              )}
              <button
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(durationMinutes * 60);
                }}
                className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white cursor-pointer active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live Word Count & Target Indicator */}
          <div className="flex items-center gap-3 font-mono">
            <div className="text-right">
              <span className="text-sm font-bold text-white block">
                {wordCount} Wörter
              </span>
              <span className="text-[10px] text-slate-400 block">
                SL: 250–400 | HL: 450–600
              </span>
            </div>
            <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all"
                style={{ width: `${Math.min(100, (wordCount / 400) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Selected Task Prompt Box */}
        <div className="p-4 bg-black/40 border-b border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-amber-400">
                Textsorte: {selectedPrompt.textTypeSuggestion}
              </span>
              <span className="text-slate-400">• Register: {selectedPrompt.register}</span>
            </div>

            <button
              onClick={rollNewPrompt}
              className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Andere Aufgabe</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm font-serif italic text-slate-200 leading-relaxed">
            „{selectedPrompt.prompt}“
          </p>
        </div>

        {/* Full Interactive Writing Scratchpad */}
        <div className="flex-1 p-4 bg-slate-950/80 flex flex-col">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Schreibe hier deinen Aufsatz im Prüfungsmodus... Achte auf Textsortenformat, Begrüßung, Datum, Absätze und abwechslungsreiche Konnektoren!"
            className="w-full flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none resize-none font-serif text-sm leading-relaxed custom-scrollbar p-2"
          />
        </div>

        {/* Bottom Bar */}
        <div className="p-3 bg-black/50 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Tipp: Nutze Konjunktiv II und Genitivpräpositionen für maximale Kriterium A Punkte.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold cursor-pointer"
          >
            Sprint Beenden
          </button>
        </div>
      </motion.div>
    </div>
  );
}
