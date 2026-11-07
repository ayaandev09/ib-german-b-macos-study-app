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
  Filter,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { IB_THEMES, ALL_SUBTOPICS } from "@/data/themes";
import { Subtopic, ThemeId } from "@/data/types";

export function ThemesBentoView() {
  const {
    activeTopicId,
    setActiveTopic,
    completedTopics,
    toggleTopicComplete,
    activeThemeFilter,
    setActiveThemeFilter,
    searchQuery,
  } = useGermanStudyStore();

  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(null);

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

  return (
    <div className="space-y-4 liquid-view-enter">
      {/* Theme Filter Pill Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setActiveThemeFilter("all")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeThemeFilter === "all"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
              : "liquid-glass-pill text-slate-400 hover:text-white"
          }`}
        >
          Alle 5 Themen
        </button>
        {IB_THEMES.map((theme) => {
          const isActive = activeThemeFilter === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => setActiveThemeFilter(theme.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "liquid-glass-pill text-slate-400 hover:text-white"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme.color }}
              />
              <span>{theme.title}</span>
            </button>
          );
        })}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredTopics.map((sub) => {
          const isCompleted = completedTopics.includes(sub.id);
          const theme = IB_THEMES.find((t) => t.id === sub.themeId);

          return (
            <motion.div
              key={sub.id}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`p-4 rounded-3xl border transition-all flex flex-col justify-between relative overflow-hidden group cursor-pointer ${
                isCompleted
                  ? "bg-slate-900/60 border-emerald-500/30 hover:border-emerald-400/50"
                  : "bg-slate-900/40 border-white/10 hover:border-amber-400/40"
              }`}
              onClick={() => setSelectedSubtopic(sub)}
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full uppercase"
                    style={{
                      backgroundColor: `${theme?.color}20`,
                      color: theme?.color,
                      border: `1px solid ${theme?.color}40`,
                    }}
                  >
                    {sub.displayCode} • {theme?.title}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTopicComplete(sub.id);
                    }}
                    title={isCompleted ? "Als unvollständig markieren" : "Als gemeistert markieren"}
                    className="p-1 text-slate-400 hover:text-amber-300 transition-transform active:scale-90"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 group-hover:text-slate-300" />
                    )}
                  </button>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                  {sub.title}
                </h3>
                <p className="text-xs text-amber-300/80 font-medium mb-2.5">
                  {sub.englishTitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {sub.overview}
                </p>
              </div>

              {/* Bottom Cultural Badge & Action */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate max-w-[140px]">
                    {sub.culturalSpotlight.region}
                  </span>
                </div>

                <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5 font-bold">
                  <span>Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtopic Detail Modal / Drawer */}
      <AnimatePresence>
        {selectedSubtopic && (
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
                    {selectedSubtopic.displayCode} • {selectedSubtopic.level}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedSubtopic.title}
                  </h2>
                  <p className="text-xs text-amber-300 font-medium">
                    {selectedSubtopic.englishTitle}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedSubtopic(null)}
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
                    Themenüberblick & IB Kontext
                  </h4>
                  <p className="text-slate-300 leading-relaxed bg-white/5 p-3.5 rounded-2xl border border-white/5">
                    {selectedSubtopic.overview}
                  </p>
                </div>

                {/* Cultural Spotlight DACH */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-amber-400/30">
                  <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>
                      Kultureller Schwerpunkt: {selectedSubtopic.culturalSpotlight.title} ({selectedSubtopic.culturalSpotlight.region})
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {selectedSubtopic.culturalSpotlight.description}
                  </p>
                </div>

                {/* Key Debates */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Zentrale Kontroversen & Debatten
                  </h4>
                  <div className="space-y-2">
                    {selectedSubtopic.keyDebates.map((debate, i) => (
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
                    Schlüsselwortschatz & Kontexte
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSubtopic.vocabBullets.map((v, i) => (
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
                  {selectedSubtopic.sampleEssayPrompts.map((p, i) => (
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
                  onClick={() => toggleTopicComplete(selectedSubtopic.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    completedTopics.includes(selectedSubtopic.id)
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {completedTopics.includes(selectedSubtopic.id)
                      ? "Thema gemeistert"
                      : "Als gemeistert markieren"}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedSubtopic(null)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Schließen
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
