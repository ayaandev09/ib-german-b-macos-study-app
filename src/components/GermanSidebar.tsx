"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  Award,
  Filter,
  Flame,
  Clock,
  RotateCcw,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { IB_THEMES, ALL_SUBTOPICS } from "@/data/themes";
import { ThemeId } from "@/data/types";
import { IBGermanAppLogo } from "./IBGermanAppLogo";

export function GermanSidebar() {
  const {
    activeTopicId,
    setActiveTopic,
    completedTopics,
    toggleTopicComplete,
    sidebarCollapsed,
    activeThemeFilter,
    setActiveThemeFilter,
  } = useGermanStudyStore();

  const [expandedThemes, setExpandedThemes] = useState<Record<string, boolean>>({
    identitaeten: true,
    erfahrungen: true,
    genialitaet: true,
    organisation: true,
    planet: true,
  });

  const [localSearch, setLocalSearch] = useState("");

  const toggleThemeExpanded = (themeId: string) => {
    setExpandedThemes((prev) => ({
      ...prev,
      [themeId]: !prev[themeId],
    }));
  };

  const filteredThemes = useMemo(() => {
    return IB_THEMES.map((theme) => {
      const matchingSubtopics = theme.subtopics.filter((sub) => {
        const matchesFilter =
          activeThemeFilter === "all" || activeThemeFilter === theme.id;
        const matchesQuery =
          !localSearch ||
          sub.title.toLowerCase().includes(localSearch.toLowerCase()) ||
          sub.englishTitle.toLowerCase().includes(localSearch.toLowerCase()) ||
          sub.code.includes(localSearch);
        return matchesFilter && matchesQuery;
      });
      return {
        ...theme,
        matchingSubtopics,
      };
    }).filter((t) => t.matchingSubtopics.length > 0);
  }, [activeThemeFilter, localSearch]);

  const totalCompleted = completedTopics.length;
  const totalSubtopics = ALL_SUBTOPICS.length;
  const progressPercent = totalSubtopics > 0 ? Math.round((totalCompleted / totalSubtopics) * 100) : 0;

  return (
    <aside
      data-tour="syllabus-sidebar"
      className={`shrink-0 liquid-glass-panel rounded-3xl flex flex-col h-[calc(100vh-2rem)] sticky top-4 select-none overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 shadow-xl ${
        sidebarCollapsed
          ? "w-0 max-w-0 p-0 -mr-4 xl:-mr-5 border-0 opacity-0 pointer-events-none"
          : "w-72 lg:w-80 p-0 border border-white/10 opacity-100"
      }`}
    >
      <div
        className={`w-72 lg:w-80 p-3 sm:p-4 flex flex-col h-full min-h-0 shrink-0 gap-2.5 transition-opacity duration-200 ${
          sidebarCollapsed ? "opacity-0 pointer-events-none invisible" : "opacity-100 visible"
        }`}
      >
        {/* Brand Header Matching Macbeth */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400/20 via-orange-500/15 to-rose-500/20 border border-amber-400/35 flex items-center justify-center p-1 shadow-inner shrink-0">
            <IBGermanAppLogo className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-amber-400 font-bold truncate">
              <span>DEUTSCHE SPRACHE B</span>
              <span className="text-white/40">//</span>
              <span>2026</span>
            </div>
            <h2 className="text-xs font-semibold text-white truncate">
              German B Master Codex
            </h2>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          title="Dashboard neu laden"
          className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Progress Telemetry Meter Box Matching Macbeth */}
      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-300 font-medium flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Lehrplan-Reife
          </span>
          <span className="font-mono text-amber-300 font-semibold">
            {totalCompleted}/{totalSubtopics} ({progressPercent}%)
          </span>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-900/90 overflow-hidden p-0.5 border border-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 transition-all duration-500"
            style={{ width: `${Math.max(progressPercent, 4)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5 font-mono">
          <span>{totalSubtopics} Subthemen</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-300" />
            74m verbleibend
          </span>
        </div>
      </div>

      {/* Quick Search Bar */}
      <div className="relative shrink-0">
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Themen durchsuchen..."
          className="w-full bg-black/40 border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 transition-colors"
        />
      </div>

      {/* Scrollable Themes & Subtopics Tree */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {filteredThemes.map((theme) => {
          const isExpanded = expandedThemes[theme.id];
          const completedInTheme = theme.matchingSubtopics.filter((s) =>
            completedTopics.includes(s.id)
          ).length;

          return (
            <div
              key={theme.id}
              className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden"
            >
              {/* Theme Accordion Header */}
              <button
                onClick={() => toggleThemeExpanded(theme.id)}
                className="w-full p-2.5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: theme.color }}
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block truncate">
                      Thema {theme.themeNumber}
                    </span>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-white truncate block">
                      {theme.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono text-slate-400">
                    {completedInTheme}/{theme.matchingSubtopics.length}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Subtopics List */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/5 bg-black/20 p-1 space-y-0.5"
                  >
                    {theme.matchingSubtopics.map((sub) => {
                      const isActive = activeTopicId === sub.id;
                      const isComplete = completedTopics.includes(sub.id);

                      return (
                        <div
                          key={sub.id}
                          className={`flex items-center justify-between p-2 rounded-xl text-xs transition-all ${
                            isActive
                              ? "bg-amber-500/20 border border-amber-400/50 text-white shadow-sm"
                              : "hover:bg-white/5 text-slate-300"
                          }`}
                        >
                          {/* Title & Click to Select */}
                          <button
                            onClick={() => setActiveTopic(sub.id)}
                            className="flex-1 text-left min-w-0 pr-2 cursor-pointer flex items-center gap-1.5"
                          >
                            <span className="text-[10px] font-mono text-amber-300 font-bold px-1.5 py-0.5 rounded bg-white/10 shrink-0">
                              {sub.displayCode}
                            </span>
                            <span className="truncate font-medium">
                              {sub.title}
                            </span>
                          </button>

                          {/* Completion Checkmark Toggle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTopicComplete(sub.id);
                            }}
                            title={isComplete ? "Als unvollständig markieren" : "Als gemeistert markieren"}
                            className="p-1 text-slate-400 hover:text-amber-300 cursor-pointer shrink-0 transition-transform active:scale-90"
                          >
                            {isComplete ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-500 hover:text-slate-300" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Bar Matching Macbeth */}
      <div className="mt-auto pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
        <span>IB GERMAN B SL/HL</span>
        <span>5 THEMEN • 25 SUBTHEMEN</span>
      </div>
      </div>
    </aside>
  );
}
