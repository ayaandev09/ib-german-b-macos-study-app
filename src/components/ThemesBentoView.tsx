"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  CheckCircle2,
  Circle,
  BookOpen,
  Sparkles,
  HelpCircle,
  MapPin,
  FileText,
  X,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Filter,
  Flame,
  Zap,
  Bookmark,
  GraduationCap,
  StickyNote,
  AlertCircle,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { IB_THEMES, ALL_SUBTOPICS } from "@/data/themes";
import { Subtopic, ThemeId } from "@/data/types";
import { RecallFlipCard } from "@/components/RecallFlipCard";

export function ThemesBentoView() {
  const {
    activeTopicId,
    setActiveTopic,
    completedTopics,
    toggleTopicComplete,
    activeThemeFilter,
    setActiveThemeFilter,
    searchQuery,
    topicNotes,
    setTopicNote,
    goToPrevTopic,
    goToNextTopic,
    studyGoal,
    setStudyGoal,
    setViewMode,
  } = useGermanStudyStore();

  const [selectedModalSubtopic, setSelectedModalSubtopic] = useState<Subtopic | null>(null);
  const [showScratchpad, setShowScratchpad] = useState(false);

  // Active topic data
  const activeTopic = ALL_SUBTOPICS.find((s) => s.id === activeTopicId) || ALL_SUBTOPICS[0];
  const activeTheme = IB_THEMES.find((t) => t.id === activeTopic.themeId) || IB_THEMES[0];
  const isActiveCompleted = completedTopics.includes(activeTopic.id);
  const activeNote = topicNotes[activeTopic.id] || "";

  // Filtered topics for the bento matrix
  const filteredTopics = ALL_SUBTOPICS.filter((sub) => {
    const matchesFilter =
      activeThemeFilter === "all" || activeThemeFilter === sub.themeId;
    const matchesSearch =
      !searchQuery ||
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.englishTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.code.includes(searchQuery) ||
      sub.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSelectTopic = (topicId: string) => {
    setActiveTopic(topicId);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-6 liquid-view-enter pb-12">
      {/* =====================================================================
          THEME CONTEXT BANNER - 100% FULL-WIDTH NATIVE CARD (MACBETH MATCH)
          ===================================================================== */}
      <div className="liquid-glass-bento rounded-3xl p-5 border border-white/15 shadow-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl space-y-3">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block">
                THEMA {activeTheme.themeNumber} ÜBERBLICK
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                {activeTheme.title} · {activeTheme.englishTitle}
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">
            {activeTheme.subtopics.length} Subthemen
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed w-full">
          {activeTheme.description}
        </p>

        <div className="pt-1 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 mr-1">Schwerpunkte:</span>
          {activeTheme.subtopics.map((sub) => (
            <button
              key={sub.id}
              onClick={() => handleSelectTopic(sub.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all cursor-pointer ${
                sub.id === activeTopic.id
                  ? "bg-amber-500/25 border-amber-400/60 text-white shadow-sm"
                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {sub.displayCode} {sub.title}
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================================
          1. ACTIVE FOCUS SUBTOPIC FLAGSHIP BENTO CARD (MATCHING 4 FLAGSHIPS)
          ===================================================================== */}
      <section className="space-y-4" id="active-subtopic-focus">
        {/* Active Recall 3D Flip Card */}
        <RecallFlipCard
          moduleCode={activeTopic.displayCode}
          title={`${activeTopic.displayCode} · ${activeTopic.title}`}
          prompt={activeTopic.overview}
          answer={`Kultureller Schwerpunkt: ${activeTopic.culturalSpotlight.title} (${activeTopic.culturalSpotlight.region}) — ${activeTopic.culturalSpotlight.description}`}
          accent={activeTheme.color}
          secondary="#f59e0b"
          meta={`IB GERMAN B · THEMA ${activeTheme.themeNumber}`}
        />

        {/* Flagship Hero Header with Dynamic Theme Radial Glow */}
        <div
          className="liquid-glass-bento rounded-3xl p-6 lg:p-7 relative overflow-hidden transition-all duration-300"
          style={{
            borderColor: `${activeTheme.color}45`,
          }}
        >
          {/* Specular Radial Glow in Theme Color */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30 transition-all duration-500"
            style={{
              background: `radial-gradient(circle, ${activeTheme.color}, transparent 70%)`,
            }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span
                  className="font-mono text-xs font-bold px-2.5 py-1 rounded-xl shadow-sm"
                  style={{
                    backgroundColor: `${activeTheme.color}28`,
                    color: activeTheme.color,
                    border: `1px solid ${activeTheme.color}60`,
                  }}
                >
                  {activeTopic.displayCode}
                </span>

                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-xl border"
                  style={{
                    backgroundColor: `${activeTheme.color}15`,
                    color: "#f8fafc",
                    borderColor: `${activeTheme.color}35`,
                  }}
                >
                  THEMA {activeTheme.themeNumber}: {activeTheme.title.toUpperCase()}
                </span>

                <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-xl bg-white/[0.06] text-slate-300 border border-white/10">
                  {activeTopic.level}
                </span>

                <span className="font-mono text-[11px] px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {activeTopic.culturalSpotlight.region}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                {activeTopic.title}
              </h1>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: `${activeTheme.color}dd` }}
              >
                {activeTopic.englishTitle}
              </p>
            </div>

            {/* Prev/Next Controls + Mastered Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1 mr-1">
                <button
                  onClick={goToPrevTopic}
                  title="Vorheriges Thema (Previous Topic)"
                  className="p-2.5 rounded-2xl liquid-glass-pill text-slate-300 hover:text-white cursor-pointer active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNextTopic}
                  title="Nächstes Thema (Next Topic)"
                  className="p-2.5 rounded-2xl liquid-glass-pill text-slate-300 hover:text-white cursor-pointer active:scale-95 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  toggleTopicComplete(activeTopic.id);
                  if (typeof navigator !== "undefined" && navigator.vibrate) {
                    navigator.vibrate(20);
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 select-none ${
                  isActiveCompleted
                    ? "bg-emerald-500/25 border border-emerald-400/50 text-emerald-200 shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]"
                    : "bg-white/10 hover:bg-emerald-500/20 text-white border border-white/20 hover:border-emerald-400/40"
                }`}
              >
                {isActiveCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300" />
                )}
                <span>
                  {isActiveCompleted ? "Thema gemeistert" : "Als gemeistert markieren"}
                </span>
              </button>
            </div>
          </div>

          {/* Mode Switcher: Study as New vs Exam Cram */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950/70 border border-white/10">
              <button
                onClick={() => setStudyGoal("learn")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  studyGoal === "learn"
                    ? "bg-amber-500/25 border border-amber-400/40 text-amber-200 shadow-[0_0_15px_-3px_rgba(245,158,11,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Lehrplan-Vertiefung (Guided Study)</span>
              </button>

              <button
                onClick={() => setStudyGoal("revise")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  studyGoal === "revise"
                    ? "bg-rose-500/25 border border-rose-400/40 text-rose-200 shadow-[0_0_15px_-3px_rgba(239,68,68,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Zap className="w-4 h-4 text-rose-400" />
                <span>Prüfungs-Sprint (Exam Cram)</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowScratchpad((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  showScratchpad
                    ? "bg-amber-500/20 text-amber-200 border-amber-400/40"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                }`}
              >
                <StickyNote className="w-3.5 h-3.5 text-amber-400" />
                <span>{showScratchpad ? "Notizen ausblenden" : "Notizblock öffnen"}</span>
              </button>

              <button
                onClick={() => setSelectedModalSubtopic(activeTopic)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                <span>Vollbild-Dossier</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dual Mode Callout Box */}
        {studyGoal === "revise" ? (
          <div
            className="rounded-3xl p-5 border relative overflow-hidden transition-all duration-300"
            style={{
              borderColor: "rgba(239, 68, 68, 0.35)",
              background:
                "linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(245, 158, 11, 0.08) 50%, rgba(15, 23, 42, 0.9) 100%)",
            }}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-400/40">
                  <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    IB German B Prüfungs-Blitzanalyse &amp; Kernaussagen
                  </h3>
                  <p className="text-xs text-rose-300/80">
                    High-Yield Debatten &amp; mündliche Prüfungsargumente (Paper 1 &amp; Oral Exam)
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-xl bg-rose-500/20 text-rose-200 border border-rose-400/30">
                ⚡ Rapid Recall
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeTopic.keyDebates.map((debate, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5"
                >
                  <span className="font-mono text-[10px] font-bold text-rose-300 uppercase block">
                    Debatte {i + 1}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">{debate}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="rounded-3xl p-5 border relative overflow-hidden transition-all duration-300"
            style={{
              borderColor: `${activeTheme.color}40`,
              background: `linear-gradient(135deg, ${activeTheme.color}14 0%, rgba(16, 185, 129, 0.08) 50%, rgba(15, 23, 42, 0.9) 100%)`,
            }}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span
                  className="p-2 rounded-xl border"
                  style={{
                    backgroundColor: `${activeTheme.color}20`,
                    borderColor: `${activeTheme.color}40`,
                    color: activeTheme.color,
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Geführte Themeneinführung &amp; DACH-Kontext
                  </h3>
                  <p className="text-xs text-slate-300">
                    Kulturelle Hintergründe für {activeTopic.culturalSpotlight.region}
                  </p>
                </div>
              </div>
              <span
                className="font-mono text-xs px-2.5 py-1 rounded-xl border"
                style={{
                  backgroundColor: `${activeTheme.color}15`,
                  color: activeTheme.color,
                  borderColor: `${activeTheme.color}35`,
                }}
              >
                Geführtes Lernen
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/10">
              {activeTopic.overview}
            </p>
          </div>
        )}

        {/* Optional Scratchpad Card */}
        {showScratchpad && (
          <div className="liquid-glass-bento rounded-3xl p-5 border-amber-400/40 bg-black/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs font-mono">
                <StickyNote className="w-4 h-4 text-amber-400" />
                <span>PERSÖNLICHER REVISIONS-NOTIZBLOCK · {activeTopic.displayCode}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Wird automatisch gespeichert
              </span>
            </div>
            <textarea
              value={activeNote}
              onChange={(e) => setTopicNote(activeTopic.id, e.target.value)}
              placeholder={`Eigene Notizen, Vokabeln oder Gliederung für ${activeTopic.title} hier eingeben...`}
              className="w-full h-28 bg-slate-950/80 border border-white/10 rounded-2xl p-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60 custom-scrollbar resize-none"
            />
          </div>
        )}

        {/* 4-Card Bento Grid for Active Subtopic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card A: Kultureller DACH-Schwerpunkt */}
          <div
            className="rounded-3xl p-5 border flex flex-col justify-between relative overflow-hidden transition-all"
            style={{
              borderColor: `${activeTheme.color}35`,
              background: `linear-gradient(145deg, ${activeTheme.color}16 0%, rgba(15, 23, 42, 0.75) 50%, rgba(2, 6, 23, 0.94) 100%)`,
              boxShadow: `0 14px 34px -8px rgba(0, 0, 0, 0.85), 0 0 20px -6px ${activeTheme.color}20`,
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg border uppercase tracking-wider flex items-center gap-1.5"
                  style={{
                    backgroundColor: `${activeTheme.color}25`,
                    color: activeTheme.color,
                    borderColor: `${activeTheme.color}50`,
                  }}
                >
                  <MapPin className="w-3 h-3" />
                  DACH-FOKUS · {activeTopic.culturalSpotlight.region}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Paper 2 &amp; Oral Key
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {activeTopic.culturalSpotlight.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeTopic.culturalSpotlight.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300">
              <span className="font-mono text-[11px] text-slate-400">
                Authentischer Kulturbezug
              </span>
              <span className="flex items-center gap-1 font-bold">
                Kriterium B2 Relevanz
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </span>
            </div>
          </div>

          {/* Card B: Paper 1 Prüfungsaufgabe & Textsorte */}
          <div
            className="rounded-3xl p-5 border flex flex-col justify-between relative overflow-hidden transition-all"
            style={{
              borderColor: "rgba(245, 158, 11, 0.35)",
              background:
                "linear-gradient(145deg, rgba(245, 158, 11, 0.14) 0%, rgba(15, 23, 42, 0.75) 50%, rgba(2, 6, 23, 0.94) 100%)",
              boxShadow:
                "0 14px 34px -8px rgba(0, 0, 0, 0.85), 0 0 20px -6px rgba(245, 158, 11, 0.20)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3 h-3" />
                  PAPER 1 SCHREIBEN
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Register: {activeTopic.sampleEssayPrompts[0]?.register}
                </span>
              </div>

              <div className="mb-2">
                <span className="text-[11px] font-mono text-amber-300 font-bold block mb-1">
                  Empfohlene Textsorte: {activeTopic.sampleEssayPrompts[0]?.textTypeSuggestion}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                  „{activeTopic.sampleEssayPrompts[0]?.prompt}“
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                Wortanzahl: 250–400 Wörter (SL) / 450–600 (HL)
              </span>
              <button
                onClick={() => setViewMode("textsorten")}
                className="text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Formatvorlage anzeigen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card C: Schlüsselwortschatz (Full Width on Mobile, Grid on Tablet/Desktop) */}
          <div
            className="md:col-span-2 rounded-3xl p-5 border relative overflow-hidden transition-all"
            style={{
              borderColor: "rgba(56, 189, 248, 0.35)",
              background:
                "linear-gradient(145deg, rgba(56, 189, 248, 0.12) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(2, 6, 23, 0.95) 100%)",
              boxShadow:
                "0 14px 34px -8px rgba(0, 0, 0, 0.85), 0 0 20px -6px rgba(56, 189, 248, 0.18)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-400/40 uppercase tracking-wider">
                  SCHLÜSSELWORTSCHATZ &amp; KONTEXTE (C1/B2)
                </span>
                <span className="text-xs text-slate-400">
                  {activeTopic.vocabBullets.length} Kernbegriffe mit Anwendungsbeispiel
                </span>
              </div>
              <button
                onClick={() => setViewMode("redemittel")}
                className="text-xs text-sky-300 hover:text-white font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Redemittel Dossier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {activeTopic.vocabBullets.map((v, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-sky-400/40 transition-colors"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-sky-200 text-xs sm:text-sm">
                      {v.german}
                    </span>
                    <span className="text-[10px] text-slate-400 italic">
                      {v.english}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 italic leading-snug">
                    „{v.context}“
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ALL 25 SUBTOPICS BENTO MATRIX (THEME-TINTED CARDS)
          ===================================================================== */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>Alle 25 IB German B Lehrplanthemen (Bento Matrix)</span>
            </h2>
            <p className="text-xs text-slate-400">
              Wähle ein Thema aus, um es im oberen Dashboard zu fokussieren. Jede Themenkarte ist farblich nach IB-Thema abgestimmt.
            </p>
          </div>

          <span className="text-xs font-mono text-amber-300/80 font-bold px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-400/20 self-start sm:self-auto">
            {filteredTopics.length} von 25 Themen verfügbar
          </span>
        </div>

        {/* Theme Filter Pill Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setActiveThemeFilter("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeThemeFilter === "all"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-extrabold"
                : "liquid-glass-pill text-slate-400 hover:text-white"
            }`}
          >
            Alle 5 Themen (25)
          </button>
          {IB_THEMES.map((theme) => {
            const isActive = activeThemeFilter === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setActiveThemeFilter(theme.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-extrabold"
                    : "liquid-glass-pill text-slate-400 hover:text-white"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
                <span>
                  {theme.title} ({theme.subtopics.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Themed 25-Subtopics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredTopics.map((sub) => {
            const isCompleted = completedTopics.includes(sub.id);
            const isCurrentActive = sub.id === activeTopic.id;
            const theme = IB_THEMES.find((t) => t.id === sub.themeId) || IB_THEMES[0];

            return (
              <motion.div
                key={sub.id}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onClick={() => handleSelectTopic(sub.id)}
                className={`p-4 sm:p-5 rounded-3xl border flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-300 ${
                  isCurrentActive
                    ? "ring-2 shadow-2xl"
                    : "hover:shadow-xl"
                }`}
                style={{
                  borderColor: isCurrentActive
                    ? theme.color
                    : `${theme.color}40`,
                  background: isCurrentActive
                    ? `linear-gradient(145deg, ${theme.color}26 0%, rgba(20, 26, 46, 0.88) 50%, rgba(4, 8, 20, 0.98) 100%)`
                    : `linear-gradient(145deg, ${theme.color}15 0%, rgba(15, 23, 42, 0.72) 50%, rgba(2, 6, 23, 0.94) 100%)`,
                  boxShadow: isCurrentActive
                    ? `0 20px 44px -8px rgba(0, 0, 0, 0.92), 0 0 30px -4px ${theme.color}45, inset 0 1.5px 2px rgba(255, 255, 255, 0.4)`
                    : `0 14px 34px -8px rgba(0, 0, 0, 0.85), 0 0 20px -6px ${theme.color}20`,
                }}
              >
                {/* Specular Radial Highlight on Top Corner */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, ${theme.color}, transparent 70%)`,
                  }}
                />

                {/* Top Meta Header */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-[9px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase"
                        style={{
                          backgroundColor: `${theme.color}25`,
                          color: theme.color,
                          border: `1px solid ${theme.color}55`,
                        }}
                      >
                        {sub.displayCode} • {theme.title}
                      </span>

                      {isCurrentActive && (
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                          IM FOKUS
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTopicComplete(sub.id);
                        if (typeof navigator !== "undefined" && navigator.vibrate) {
                          navigator.vibrate(15);
                        }
                      }}
                      title={
                        isCompleted
                          ? "Als unvollständig markieren"
                          : "Als gemeistert markieren"
                      }
                      className="p-1 text-slate-400 hover:text-amber-300 transition-transform active:scale-90"
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-500 group-hover:text-slate-300" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-amber-200 transition-colors">
                    {sub.title}
                  </h3>
                  <p
                    className="text-xs font-medium mb-2.5"
                    style={{ color: `${theme.color}cc` }}
                  >
                    {sub.englishTitle}
                  </p>

                  <p className="text-xs text-slate-300/90 leading-relaxed line-clamp-3 mb-4">
                    {sub.overview}
                  </p>
                </div>

                {/* Bottom Cultural Badge & Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: theme.color }}
                    />
                    <span className="truncate max-w-[130px] font-medium">
                      {sub.culturalSpotlight.region}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedModalSubtopic(sub);
                      }}
                      className="text-slate-400 hover:text-white px-2 py-0.5 rounded-lg hover:bg-white/10 transition-colors font-mono text-[10px]"
                      title="Dossier im Popup öffnen"
                    >
                      Dossier
                    </button>
                    <span
                      className="font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform"
                      style={{ color: theme.color }}
                    >
                      <span>Öffnen</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          3. FULLSCREEN SUBTOPIC DOSSIER MODAL
          ===================================================================== */}
      <AnimatePresence>
        {selectedModalSubtopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020308]/85 backdrop-blur-md select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-2xl max-h-[85vh] rounded-3xl bg-slate-900 border border-amber-400/40 shadow-2xl flex flex-col overflow-hidden text-left"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between bg-black/40">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
                    {selectedModalSubtopic.displayCode} • {selectedModalSubtopic.level}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedModalSubtopic.title}
                  </h2>
                  <p className="text-xs text-amber-300 font-medium">
                    {selectedModalSubtopic.englishTitle}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedModalSubtopic(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5 custom-scrollbar text-xs sm:text-sm">
                {/* Overview */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                    Themenüberblick &amp; IB Kontext
                  </h4>
                  <p className="text-slate-300 leading-relaxed bg-white/5 p-3.5 rounded-2xl border border-white/5">
                    {selectedModalSubtopic.overview}
                  </p>
                </div>

                {/* Cultural Spotlight DACH */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-amber-400/30">
                  <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>
                      Kultureller Schwerpunkt: {selectedModalSubtopic.culturalSpotlight.title} ({selectedModalSubtopic.culturalSpotlight.region})
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {selectedModalSubtopic.culturalSpotlight.description}
                  </p>
                </div>

                {/* Key Debates */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Zentrale Kontroversen &amp; Debatten
                  </h4>
                  <div className="space-y-2">
                    {selectedModalSubtopic.keyDebates.map((debate, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2 text-slate-300"
                      >
                        <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{debate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vocabulary Bullets */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Schlüsselwortschatz &amp; Kontexte
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedModalSubtopic.vocabBullets.map((v, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/5"
                      >
                        <div className="flex items-baseline justify-between mb-0.5">
                          <span className="font-bold text-amber-200">
                            {v.german}
                          </span>
                          <span className="text-[10px] text-slate-400 italic">
                            {v.english}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 italic leading-snug">
                          „{v.context}“
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Essay Prompts */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Muster-Prüfungsaufgabe (Paper 1)
                  </h4>
                  {selectedModalSubtopic.sampleEssayPrompts.map((p, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-amber-400 font-bold">
                          Empfohlene Textsorte: {p.textTypeSuggestion}
                        </span>
                        <span className="text-slate-400">
                          Register: {p.register}
                        </span>
                      </div>
                      <p className="text-slate-200 italic font-serif text-sm">
                        „{p.prompt}“
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
                <button
                  onClick={() => toggleTopicComplete(selectedModalSubtopic.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    completedTopics.includes(selectedModalSubtopic.id)
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {completedTopics.includes(selectedModalSubtopic.id)
                      ? "Thema gemeistert"
                      : "Als gemeistert markieren"}
                  </span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      handleSelectTopic(selectedModalSubtopic.id);
                      setSelectedModalSubtopic(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Im Dashboard fokussieren
                  </button>

                  <button
                    onClick={() => setSelectedModalSubtopic(null)}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
