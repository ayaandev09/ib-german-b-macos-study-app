"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Clock,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { ALL_SUBTOPICS } from "@/data/themes";
import { IBGermanAppLogo } from "./IBGermanAppLogo";

interface CinematicStartupIntroProps {
  isOpen?: boolean;
  onClose?: () => void;
  onComplete: () => void;
}

export function CinematicStartupIntro({
  isOpen = true,
  onClose,
  onComplete,
}: CinematicStartupIntroProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const isDismissingRef = useRef(false);

  const {
    completedTopics,
    activeTopicId,
    setActiveTopic,
    getProgressStats,
  } = useGermanStudyStore();

  const handleDismiss = useCallback(() => {
    if (isDismissingRef.current) return;
    isDismissingRef.current = true;
    if (onClose) onClose();
    onComplete();
  }, [onClose, onComplete]);

  // 1. Live system clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Active session stopwatch
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3. Glancing countdown: 5s hold time to read key priorities
  useEffect(() => {
    if (!isOpen) return;
    isDismissingRef.current = false;
    let currentCount = 5;
    setCountdown(currentCount);

    const timer = setInterval(() => {
      currentCount -= 1;
      setCountdown(Math.max(0, currentCount));
      if (currentCount <= 0) {
        clearInterval(timer);
        handleDismiss();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, handleDismiss]);

  // 4. Keyboard shortcuts: Space / Enter / Escape to enter immediately
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleDismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, handleDismiss]);

  const stats = getProgressStats();
  const totalTopics = ALL_SUBTOPICS.length;
  const completedCount = completedTopics.length;
  const remainingCount = totalTopics - completedCount;
  const estimatedMins = remainingCount * 12;

  // Next topic to do
  const nextTodoTopic = useMemo(() => {
    const uncompleted = ALL_SUBTOPICS.find((t) => !completedTopics.includes(t.id));
    if (uncompleted) return uncompleted;
    return ALL_SUBTOPICS.find((t) => t.id === activeTopicId) || ALL_SUBTOPICS[0];
  }, [completedTopics, activeTopicId]);

  const formattedSessionTime = useMemo(() => {
    const mins = Math.floor(sessionSeconds / 60);
    const secs = sessionSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, [sessionSeconds]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      onClick={handleDismiss}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 select-none bg-[#020308] backdrop-blur-2xl overflow-hidden cursor-pointer"
      style={{
        background:
          "radial-gradient(circle at 50% 35%, rgba(245, 158, 11, 0.20) 0%, rgba(2, 3, 8, 0.98) 75%)",
      }}
    >
      {/* Static GPU-composited Ambient Aura Blobs (Zero CPU overhead) */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/15 blur-[80px] pointer-events-none"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-red-500/12 blur-[80px] pointer-events-none"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Central Liquid Glass Briefing HUD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{
          opacity: 0,
          scale: 0.98,
          y: -10,
          transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg p-5 sm:p-6 rounded-[2rem] border border-white/12 ring-1 ring-inset ring-white/10 bg-white/[0.04] dark:bg-black/60 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_0_24px_rgba(255,255,255,0.03)] flex flex-col text-left overflow-hidden cursor-default"
      >
        {/* Specular Ambient Reflection Sheen */}
        <div className="absolute inset-x-0 top-0 h-28 rounded-t-[2rem] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none" />

        {/* Authentic Liquid Glass Logo Showcase — 120 FPS Metal Accelerated */}
        <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden relative mb-4 bg-gradient-to-b from-black/90 via-black/75 to-[#160b02] border border-amber-400/40 shadow-2xl flex items-center justify-center p-4 relative">
          {/* Rotating Ambient Caustic Liquid Halo */}
          <div
            className="absolute w-60 h-60 rounded-full pointer-events-none liquid-caustic-halo"
            style={{
              background:
                "radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(239, 68, 68, 0.22) 45%, transparent 70%)",
            }}
          />

          {/* Liquid Glass Breathing Emblem */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 relative z-10 flex items-center justify-center liquid-logo-float">
            <IBGermanAppLogo className="w-full h-full object-contain filter drop-shadow-[0_0_32px_rgba(245,158,11,0.65)]" />

            {/* Slow Sweeping Liquid Glass Refraction Sheen Beam */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div
                className="w-full h-full liquid-glass-sheen"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%)",
                }}
              />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 animate-ping pointer-events-none" />
          </div>
        </div>

        {/* Header: Logo, App Title & Live Telemetry Badge */}
        <div className="flex items-center justify-between gap-3 mb-3.5 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-400/35 p-1.5 flex items-center justify-center shrink-0 shadow-inner">
              <IBGermanAppLogo className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase">
                  GERMAN B // IB SL & HL
                </span>
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500/15 border border-amber-500/30 text-[9px] font-mono text-amber-300">
                  DACH CODEX
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                <span>German B Master Codex</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </h1>
            </div>
          </div>

          {/* Live System Time */}
          <div className="flex flex-col items-end shrink-0 font-mono">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider">SYSTEM TIME</span>
            <span className="text-xs font-bold text-slate-200">
              {currentTime || "00:00:00"}
            </span>
          </div>
        </div>

        {/* Priority Card: Next Focus / What Still Needs To Be Done */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-400/25 mb-3 relative overflow-hidden backdrop-blur-md">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
              <Compass className="w-3 h-3 text-amber-400" /> Nächster Schwerpunkt • Still To Do
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {remainingCount} Themen offen
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 line-clamp-1">
            {nextTodoTopic?.code}: {nextTodoTopic?.title}
          </h2>
          <p className="text-[11px] text-amber-200/80 mb-1 font-mono">
            {nextTodoTopic?.englishTitle}
          </p>
          <p className="text-xs text-slate-300/80 line-clamp-2 font-sans mb-3">
            {nextTodoTopic?.overview || "Führe die Analyse der 5 IB-Pflichtthemen und Textsorten fort."}
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (nextTodoTopic) setActiveTopic(nextTodoTopic.id);
              handleDismiss();
            }}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Direkt zum Thema springen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Bento Status Grid: Syllabus Progress & Study Pulse */}
        <div className="grid grid-cols-2 gap-3 mb-3 text-xs font-mono">
          {/* Progress Box */}
          <div className="p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1.5">
              <span>GESAMTREIFE</span>
              <span className="text-amber-300 font-bold">{stats.overallPercentage}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-1.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 transition-all duration-500"
                style={{ width: `${stats.overallPercentage}%` }}
              />
            </div>
            <span className="text-slate-300 text-[10px]">
              {completedCount} / {totalTopics} Themen ({stats.masteredGrammarCount}/18 Grammatik)
            </span>
          </div>

          {/* Time & Session Box */}
          <div className="p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>LERNTEMPO</span>
              <span className="text-orange-300">~{estimatedMins}m geschätzt</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-200 text-[11px] font-semibold my-0.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Sitzung: {formattedSessionTime}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">
              ● DACH Curriculum Aktiv
            </span>
          </div>
        </div>

        {/* High-Yield Grammar & Redemittel Anchor */}
        <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 mb-3 text-[11px]">
          <span className="text-amber-300 font-bold font-mono text-[10px] uppercase block mb-0.5">
            Schlüsselsatz & Kriterium-A Merkhilfe
          </span>
          <p className="text-slate-300 italic leading-snug line-clamp-2">
            „Meines Erachtens ist die sprachliche Vielfalt im DACH-Raum ein unverzichtbarer Bestandteil europäischer Identität.“
          </p>
        </div>

        {/* Footer: Countdown with Liquid Progress Track & Skip Action */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-slate-400">
              Start in <span className="text-amber-300 font-bold font-mono">{countdown}s</span>
            </span>
            <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden hidden sm:block">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-red-400 rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleDismiss}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md soft-button"
          >
            <span>Codex Betreten</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
