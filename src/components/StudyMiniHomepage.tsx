"use client";

import { syncWidgetSnapshot } from "@/lib/widgetBridge";
import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_SUBTOPICS, IB_THEMES } from "@/data/themes";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { IBGermanAppLogo } from "./IBGermanAppLogo";
import {
  Clock,
  CheckCircle2,
  Circle,
  ArrowRight,
  Flame,
  Award,
  Timer,
  Minimize2,
  Maximize2,
  Columns3,
  MapPin,
  Sparkles,
  BookOpen,
} from "lucide-react";

const RADIUS = 32;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function StudyMiniHomepage() {
  const {
    activeTopicId,
    setActiveTopic,
    completedTopics,
    toggleTopicComplete,
    widgetTemplate = "medium",
    setWidgetTemplate,
    openExamSprint,
  } = useGermanStudyStore();

  const activeTopic = useMemo(
    () => ALL_SUBTOPICS.find((t) => t.id === activeTopicId) || ALL_SUBTOPICS[0],
    [activeTopicId]
  );

  const activeTheme = useMemo(
    () =>
      IB_THEMES.find((th) => th.id === activeTopic.themeId) ||
      IB_THEMES[0],
    [activeTopic.themeId]
  );

  const currentIndex = useMemo(
    () => ALL_SUBTOPICS.findIndex((t) => t.id === activeTopic.id),
    [activeTopic.id]
  );

  const nextTopic = useMemo(
    () =>
      currentIndex >= 0 && currentIndex < ALL_SUBTOPICS.length - 1
        ? ALL_SUBTOPICS[currentIndex + 1]
        : null,
    [currentIndex]
  );

  const completedCount = useMemo(
    () => (completedTopics || []).length,
    [completedTopics]
  );

  const totalTopics = ALL_SUBTOPICS.length || 25;
  const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const dashoffset = CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;

  const isCurrentDone = (completedTopics || []).includes(activeTopic.id);

  const handleToggleComplete = () => {
    toggleTopicComplete(activeTopic.id);
    setTimeout(() => syncWidgetSnapshot("topic-complete"), 10);
  };

  const handleNextTopic = (id: string) => {
    setActiveTopic(id);
    setTimeout(() => syncWidgetSnapshot("navigation"), 10);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full liquid-glass-bento rounded-3xl p-4 sm:p-5 mb-4 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl transition-all duration-300">
      {/* Background ambient glow aura */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      {/* Top Bar: Identity & Template Size Segmented Controller */}
      <div className="relative z-10 flex items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400/20 via-orange-500/15 to-rose-500/20 border border-amber-400/35 flex items-center justify-center p-1 shadow-inner shrink-0">
            <IBGermanAppLogo className="w-full h-full object-contain" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400 truncate">
                DEUTSCHE SPRACHE B // 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-[9px] font-mono text-emerald-300 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Widget Synced
              </span>
            </div>
          </div>
        </div>

        {/* Template Size Switcher (Small / Medium / Large) */}
        <div className="flex items-center gap-1 p-0.5 rounded-full bg-black/60 border border-white/12 text-xs shrink-0 relative">
          {(["small", "medium", "large"] as const).map((size) => {
            const isActive = widgetTemplate === size;
            return (
              <button
                key={size}
                onClick={() => setWidgetTemplate(size)}
                title={
                  size === "small"
                    ? "Kompakter Widget-Streifen"
                    : size === "medium"
                    ? "Standard-Widget (Ausgewogen)"
                    : "Erweitertes Studio-Dossier"
                }
                className={`relative flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                  isActive ? "text-amber-200" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="germanWidgetTemplateIndicator"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-amber-500/25 border border-amber-400/40 shadow-sm pointer-events-none"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {size === "small" && <Minimize2 className="w-3 h-3" />}
                  {size === "medium" && <Maximize2 className="w-3 h-3" />}
                  {size === "large" && <Columns3 className="w-3 h-3" />}
                  <span className="hidden sm:inline capitalize">{size}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={widgetTemplate}
          initial={{ opacity: 0, y: 10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.985 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        >
          {/* ========================================================================= */}
          {/* TEMPLATE 1: SMALL / COMPACT GLANCEABLE STRIP */}
          {/* ========================================================================= */}
          {widgetTemplate === "small" && (
            <div className="relative z-10 pt-3 flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <span className="px-2 py-0.5 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold shrink-0">
                  {activeTopic.displayCode}
                </span>
                <div className="min-w-0 truncate">
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {activeTopic.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                    <span>{activeTheme.title}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-300">
                      <Clock className="w-2.5 h-2.5" /> 7m Lesezeit
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {/* Compact Progress Ring */}
                <div className="flex items-center gap-2 bg-black/45 px-2.5 py-1 rounded-xl border border-white/10 font-mono text-xs">
                  <span className="text-amber-300 font-bold">{percentage}%</span>
                  <span className="text-slate-400 text-[10px]">({completedCount}/{totalTopics})</span>
                </div>

                <button
                  onClick={handleToggleComplete}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isCurrentDone
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "bg-white/5 text-slate-300 hover:text-white border border-white/10"
                  }`}
                >
                  {isCurrentDone ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Gemeistert</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-3.5 h-3.5 text-slate-400" />
                      <span>Thema meistern</span>
                    </>
                  )}
                </button>

                {nextTopic && (
                  <button
                    onClick={() => handleNextTopic(nextTopic.id)}
                    className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 cursor-pointer"
                    title={`Nächstes: ${nextTopic.displayCode}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TEMPLATE 2: MEDIUM / STANDARD BALANCED WIDGET (MACBETH MATCH) */}
          {/* ========================================================================= */}
          {widgetTemplate === "medium" && (
            <div className="relative z-10 pt-3.5 flex flex-col gap-3.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-wider block truncate">
                    AKTIVES LEHRPLAN-THEMA • THEMA {activeTheme.themeNumber}: {activeTheme.title.toUpperCase()}
                  </span>
                  <h2
                    className="text-sm sm:text-base font-bold text-white tracking-tight truncate mt-0.5"
                    title={`${activeTopic.displayCode} · ${activeTopic.title}`}
                  >
                    {activeTopic.displayCode} · {activeTopic.title}
                  </h2>
                  <p className="text-xs text-slate-300/80 truncate mt-1">
                    {activeTopic.overview}
                  </p>
                </div>

                {/* Circular Mastery Dial */}
                <div className="flex items-center gap-3 shrink-0 pl-3 border-l border-white/10">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                      <circle
                        cx="40"
                        cy="40"
                        r={RADIUS}
                        fill="none"
                        stroke="url(#deDialGrad)"
                        strokeWidth="6"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={dashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-700 ease-out"
                      />
                      <defs>
                        <linearGradient id="deDialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                      <span className="text-xs sm:text-sm font-black text-white leading-none">
                        {percentage}%
                      </span>
                      <span className="text-[7px] text-amber-300 font-bold uppercase tracking-wider scale-90">
                        REIFE
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right">
                    <div className="font-mono text-xs sm:text-sm font-bold text-white">
                      {completedCount} <span className="text-slate-500 font-normal">/</span> {totalTopics}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Themen gemeistert
                    </div>
                  </div>
                </div>
              </div>

              {/* Action and Context Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-white/10 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/40 border border-white/10 text-slate-300 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>74m verbleibend</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/40 border border-white/10 text-slate-300 font-mono text-[11px]">
                    <span>25 Subthemen • 5 Pflichtthemen</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={handleToggleComplete}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer text-xs ${
                      isCurrentDone
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                        : "bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {isCurrentDone ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Thema gemeistert</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Thema abschließen</span>
                      </>
                    )}
                  </button>

                  {nextTopic && (
                    <button
                      onClick={() => handleNextTopic(nextTopic.id)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-200 border border-amber-400/35 hover:border-amber-400/60 font-mono font-medium transition-all cursor-pointer text-xs"
                    >
                      <span>Nächstes: {nextTopic.displayCode}</span>
                      <ArrowRight className="w-3 h-3 text-amber-300" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TEMPLATE 3: LARGE / EXPANDED STUDIO DOSSIER */}
          {/* ========================================================================= */}
          {widgetTemplate === "large" && (
            <div className="relative z-10 pt-3.5 flex flex-col gap-4 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40">
                      {activeTopic.displayCode}
                    </span>
                    <span className="font-mono text-xs text-amber-400/90 uppercase tracking-wider">
                      THEMA {activeTheme.themeNumber}: {activeTheme.title}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {activeTopic.title}
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
                    {activeTopic.overview}
                  </p>
                </div>

                {/* Circular Gauge */}
                <div className="flex items-center gap-3 shrink-0 bg-black/40 p-2.5 rounded-2xl border border-white/10">
                  <div className="relative w-12 h-12 shrink-0">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                      <circle
                        cx="40"
                        cy="40"
                        r={RADIUS}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="6"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={dashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                      <span className="text-xs font-black text-white">{percentage}%</span>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-xs text-white font-bold block">{completedCount} / {totalTopics}</span>
                    <span className="text-[10px] text-amber-300">Gemeistert</span>
                  </div>
                </div>
              </div>

              {/* 3-Column Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300" />
                    DACH-Kulturraum ({activeTopic.culturalSpotlight.region})
                  </span>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {activeTopic.culturalSpotlight.title}: {activeTopic.culturalSpotlight.description}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-300" />
                    Leitdebatte für Paper 1 & Oral
                  </span>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {activeTopic.keyDebates[0] || "Aktuelle gesellschaftliche Debatte im deutschsprachigen Raum."}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/25 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-300 font-bold block flex items-center gap-1">
                      <Timer className="w-3 h-3 text-amber-300" />
                      Prüfungs-Sprint (15m/30m/45m)
                    </span>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Prüfungssimulation für IB Paper 1 & Mündlich
                    </p>
                  </div>
                  <button
                    onClick={openExamSprint}
                    className="mt-2 w-full py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Simulation starten (⌘E)</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
