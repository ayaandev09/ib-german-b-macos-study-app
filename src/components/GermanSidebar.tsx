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
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { IB_THEMES, ALL_SUBTOPICS } from "@/data/themes";
import { ThemeId } from "@/data/types";

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

  if (sidebarCollapsed) {
    return null;
  }

  return (
    <aside
      data-tour="syllabus-sidebar"
      className="w-72 lg:w-80 shrink-0 liquid-glass-panel rounded-3xl p-3 sm:p-4 flex flex-col gap-3 h-[calc(100vh-2rem)] sticky top-4 select-none overflow-hidden transition-all z-10 border border-white/10 shadow-xl"
    >
      {/* Header with Progress Counter */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block">
              IB LEHRPLAN
            </span>
            <span className="text-xs font-semibold text-white tracking-tight">
              5 Pflichtthemen
            </span>
          </div>
        </div>

        {/* Live Completion Pill */}
        <div
          title={`${totalCompleted} von ${totalSubtopics} Subthemen gemeistert`}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 border border-amber-400/30 text-amber-300 font-mono text-[11px] font-bold"
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {totalCompleted}/{totalSubtopics}
          </span>
        </div>
      </div>

      {/* Quick Search & Filter Bar */}
      <div className="relative">
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
                              ? "bg-amber-500/20 border border-amber-400/40 text-amber-200 shadow-sm"
                              : "hover:bg-white/5 text-slate-300"
                          }`}
                        >
                          {/* Title & Click to Select */}
                          <button
                            onClick={() => setActiveTopic(sub.id)}
                            className="flex-1 text-left min-w-0 pr-2 cursor-pointer flex items-center gap-1.5"
                          >
                            <span className="text-[10px] font-mono text-amber-400/80 shrink-0">
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
    </aside>
  );
}
