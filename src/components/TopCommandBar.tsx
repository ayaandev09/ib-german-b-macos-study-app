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
import { ALL_SUBTOPICS } from "@/data/themes";
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
    activeTopicId,
  } = useGermanStudyStore();

  const activeTopic = ALL_SUBTOPICS.find((t) => t.id === activeTopicId) || ALL_SUBTOPICS[0];

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
    {
      id: "testdaf",
      label: "TestDaF",
      icon: <GraduationCap className="w-3.5 h-3.5" />,
    },
  ];

  const btn =
    "flex items-center gap-1.5 h-9 px-3 rounded-full text-xs font-medium cursor-pointer transition-colors bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 text-slate-200 shrink-0";
  const sectionLabel =
    viewMode === "home" ? "Home" : navModes.find((m) => m.id === viewMode)?.label ?? "IB Deutsch B";

  return (
    <header
      data-tour="command-bar"
      className="liquid-glass-bar relative z-20 w-full max-w-full rounded-full px-2.5 py-2 mb-3 flex items-center justify-between gap-2 mac-drag-region"
    >
      <div className="flex items-center gap-2 min-w-0 mac-no-drag">
        <button
          onClick={toggleSidebar}
          title="Seitenleiste (⌘B)"
          aria-label="Seitenleiste umschalten"
          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border transition-colors shrink-0 ${
            sidebarCollapsed
              ? "bg-amber-500/25 border-amber-300/50 text-amber-200"
              : "bg-white/[0.07] hover:bg-white/[0.14] border-white/15 text-slate-300"
          }`}
        >
          <PanelLeft className="w-4 h-4" />
        </button>
        <div className="min-w-0 pl-1">
          <p className="text-sm font-semibold text-white truncate leading-tight">{sectionLabel}</p>
          {viewMode === "themen" && (
            <p className="text-[11px] text-amber-200/80 truncate leading-tight">{activeTopic.displayCode}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1.5 mac-no-drag">
        <button onClick={openSpotlight} title="Suche (⌘K)" className={btn}>
          <Search className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden md:inline">Suche</span>
          <kbd className="hidden md:inline text-[10px] font-mono text-slate-400">⌘K</kbd>
        </button>
        <button onClick={openExamSprint} title="Zeit-Sprint (⌘E)" className={btn}>
          <Timer className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden lg:inline">Sprint</span>
        </button>
        {!isInspectorOpen && (
          <button onClick={toggleInspector} title="Analyse (⌘I)" className={btn}>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden lg:inline">Analyse</span>
          </button>
        )}
        <button
          onClick={() => setIsShortcutsOpen(true)}
          title="Tastenkürzel (?)"
          aria-label="Tastenkürzel"
          className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border bg-white/[0.07] hover:bg-white/[0.14] border-white/15 text-slate-300 text-xs font-mono shrink-0"
        >
          ?
        </button>
      </div>
    </header>
  );
}
