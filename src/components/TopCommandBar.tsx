"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PanelLeft,
  Search,
  Zap,
  BookOpen,
  Timer,
  SlidersHorizontal,
  LayoutGrid,
  Sparkles,
  FileText,
  MessageSquareQuote,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";
import { useGermanStudyStore, GermanNavMode } from "@/store/useGermanStudyStore";
import { IBGermanAppLogo } from "./IBGermanAppLogo";

interface TopCommandBarProps {
  onOpenWalkthrough?: () => void;
  onOpenDiagnostics?: () => void;
}

export function TopCommandBar({
  onOpenWalkthrough,
  onOpenDiagnostics,
}: TopCommandBarProps) {
  const {
    viewMode,
    setViewMode,
    studyGoal,
    setStudyGoal,
    sidebarCollapsed,
    toggleSidebar,
    isInspectorOpen,
    toggleInspector,
    openExamSprint,
    openSpotlight,
    setIsShortcutsOpen,
  } = useGermanStudyStore();

  const navModes: { id: GermanNavMode; label: string; icon: React.ReactNode }[] = [
    {
      id: "themen",
      label: "Themen",
      icon: <LayoutGrid className="w-3.5 h-3.5" />,
    },
    {
      id: "grammatik",
      label: "Grammatik",
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
      id: "textsorten",
      label: "Textsorten",
      icon: <FileText className="w-3.5 h-3.5" />,
    },
    {
      id: "redemittel",
      label: "Redemittel",
      icon: <MessageSquareQuote className="w-3.5 h-3.5" />,
    },
    {
      id: "pruefung",
      label: "Prüfung",
      icon: <GraduationCap className="w-3.5 h-3.5" />,
    },
    {
      id: "literatur",
      label: "Literatur",
      icon: <BookOpenCheck className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <header
      data-tour="command-bar"
      className="liquid-glass-long-bar !rounded-3xl overflow-hidden p-2.5 sm:p-3 mb-3 flex flex-col gap-2 shadow-xl relative mac-drag-region transition-all z-20 w-full max-w-full"
    >
      {/* ========================================================================= */}
      {/* ROW 1: DESKTOP APP IDENTITY & ERGONOMIC ACTION CONTROLS */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between gap-2 w-full pb-2 border-b border-white/10 min-h-[42px] max-w-full overflow-hidden">
        {/* Brand & Breadcrumbs (Left) */}
        <div className="flex items-center gap-2 min-w-0 shrink mac-no-drag">
          {/* Native macOS Sidebar Toggle (⌘B) */}
          <button
            onClick={toggleSidebar}
            title={sidebarCollapsed ? "Lehrplan-Seitenleiste ausklappen (⌘B)" : "Seitenleiste einklappen (⌘B)"}
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer soft-button shrink-0 border ${
              sidebarCollapsed
                ? "bg-amber-500/20 text-amber-300 border-amber-400/40 shadow-sm"
                : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10"
            }`}
          >
            <PanelLeft className="w-4 h-4" />
          </button>

          {/* Brand Logo & Title */}
          <button
            onClick={onOpenDiagnostics}
            title="Klicken für System-Diagnose"
            className="flex items-center gap-2 min-w-0 text-left cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/25 via-red-500/20 to-slate-900 border border-amber-400/40 flex items-center justify-center p-1 shadow-md relative shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
              <IBGermanAppLogo className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 leading-tight">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-amber-400 uppercase block truncate">
                DEUTSCHE SPRACHE B // IB SL & HL
              </span>
              <span className="text-xs font-semibold text-white tracking-tight block truncate">
                German B Master Codex
              </span>
            </div>
          </button>
        </div>

        {/* Right Section: Action Cluster (Contained, Zero Overflow) */}
        <div className="flex items-center justify-end gap-1.5 shrink-0 mac-no-drag">
          {/* Quick Spotlight Trigger Button */}
          <button
            onClick={openSpotlight}
            title="Themen, Grammatik & Textsorten suchen (⌘K)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/50 hover:bg-black/70 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-white cursor-pointer transition-all shrink-0"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-medium text-slate-300 hidden md:inline">Suche</span>
            <kbd className="inline-flex items-center px-1 py-0.2 rounded text-[9px] font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-400/25">
              ⌘K
            </kbd>
          </button>

          {/* Study Goal Switcher: Wiederholen vs Lernen */}
          <div className="flex items-center p-0.5 rounded-full bg-black/60 border border-white/12 text-xs shrink-0">
            <button
              onClick={() => setStudyGoal("revise")}
              title="Prüfungsfokus: Textsorten, Redemittel & Sprints"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                studyGoal === "revise"
                  ? "bg-orange-500/25 text-orange-200 border border-orange-400/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap className="w-3 h-3 text-orange-300" />
              <span className="text-[11px]">Wiederholen</span>
            </button>
            <button
              onClick={() => setStudyGoal("learn")}
              title="Tiefenstudium: Themen, Vokabeln & Grammatik"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                studyGoal === "learn"
                  ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BookOpen className="w-3 h-3 text-amber-300" />
              <span className="text-[11px]">Lernen</span>
            </button>
          </div>

          {/* Timed Exam Sprint Button (⌘E) */}
          <button
            onClick={openExamSprint}
            title="Prüfungs-Sprint starten (⌘E)"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border bg-amber-500/15 text-amber-200 border-amber-400/35 hover:bg-amber-500/25 shadow-sm soft-button shrink-0"
          >
            <Timer className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="text-[10px] font-mono text-amber-400/80">⌘E</span>
          </button>

          {/* Analytical Inspector Toggle (Shown only when collapsed to prevent collision) */}
          {!isInspectorOpen && (
            <button
              onClick={toggleInspector}
              title="Analytischen Inspektor einblenden (⌘I)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border soft-button shrink-0 bg-amber-950/60 text-amber-300 border-amber-400/40"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[10px] font-mono text-amber-400/80">⌘I</span>
            </button>
          )}

          {/* Keyboard Shortcuts Cheatsheet Guide (?) */}
          <button
            onClick={() => setIsShortcutsOpen((prev) => !prev)}
            title="Tastenkombinationen & Tour (?)"
            className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold transition-all cursor-pointer border bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10 shadow-sm soft-button shrink-0"
          >
            <span className="text-xs font-mono font-bold text-slate-300">?</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ROW 2: UNIFIED SECTION SWITCHER (Clean 6-Tab macOS Segmented Bar) */}
      {/* ========================================================================= */}
      <nav
        data-tour="nav-tabs"
        aria-label="Hauptnavigation"
        className="w-full grid grid-cols-6 gap-1 p-1 bg-black/50 border border-white/10 rounded-2xl shadow-inner relative max-w-full overflow-hidden mac-no-drag"
      >
        {navModes.map((mode) => {
          const isActive = viewMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className={`relative col-span-1 flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-1 rounded-xl text-xs font-bold transition-colors cursor-pointer min-w-0 overflow-hidden mac-no-drag ${
                isActive
                  ? "text-amber-200"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeGermanNavTabIndicator"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  className="absolute inset-0 rounded-xl bg-amber-500/20 border border-amber-400/45 shadow-sm pointer-events-none"
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-amber-300 shrink-0" : "text-slate-400 shrink-0"}`}>
                {mode.icon}
              </span>
              <span className="relative z-10 text-xs truncate">{mode.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
