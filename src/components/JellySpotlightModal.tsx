"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Compass,
  Sparkles,
  FileText,
  MessageSquareQuote,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { ALL_SUBTOPICS } from "@/data/themes";
import { GRAMMAR_POINTS } from "@/data/grammar";
import { ALL_TEXTSORTEN } from "@/data/textsorten";
import { REDEMITTEL_DATABASE } from "@/data/redemittel";

export function JellySpotlightModal() {
  const {
    isSpotlightOpen,
    closeSpotlight,
    setActiveTopic,
    setViewMode,
  } = useGermanStudyStore();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isSpotlightOpen) {
          closeSpotlight();
        } else {
          useGermanStudyStore.getState().openSpotlight();
        }
      } else if (e.key === "Escape" && isSpotlightOpen) {
        closeSpotlight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSpotlightOpen, closeSpotlight]);

  if (!isSpotlightOpen) return null;

  const q = query.trim().toLowerCase();

  // Search results
  const matchingTopics = q
    ? ALL_SUBTOPICS.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.englishTitle.toLowerCase().includes(q) ||
          s.code.includes(q)
      ).slice(0, 4)
    : [];

  const matchingGrammar = q
    ? GRAMMAR_POINTS.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.englishTitle.toLowerCase().includes(q) ||
          g.ruleExplanation.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  const matchingTextsorten = q
    ? ALL_TEXTSORTEN.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.englishTitle.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchingRedemittel = q
    ? REDEMITTEL_DATABASE.filter(
        (r) =>
          r.phrase.toLowerCase().includes(q) ||
          r.englishMeaning.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  const totalResults =
    matchingTopics.length +
    matchingGrammar.length +
    matchingTextsorten.length +
    matchingRedemittel.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#020308]/85 backdrop-blur-md select-none">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-amber-400/40 shadow-2xl overflow-hidden flex flex-col text-left"
      >
        {/* Search Bar Input */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-black/40">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suche nach Themen, Grammatikregeln, Textsorten oder Redemitteln..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 shrink-0">
            Esc
          </kbd>
        </div>

        {/* Results List */}
        <div className="p-3 sm:p-4 max-h-[60vh] overflow-y-auto space-y-4 custom-scrollbar text-xs">
          {!q && (
            <div className="p-8 text-center text-slate-400 space-y-2">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-200">
                Blitzschnelle Lehrplan-Suche
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Tippe z.B. „Konjunktiv“, „Energiewende“, „Artikel“, „Dativ“ oder „Zivilcourage“ ein.
              </p>
            </div>
          )}

          {q && totalResults === 0 && (
            <div className="p-8 text-center text-slate-400">
              <p className="text-sm font-semibold text-slate-300 mb-1">
                Keine passenden Einträge für „{query}“ gefunden.
              </p>
              <p className="text-xs text-slate-500">
                Versuche einen anderen Begriff aus den 5 IB-Pflichtthemen.
              </p>
            </div>
          )}

          {/* Topics */}
          {matchingTopics.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block px-2">
                Lehrplanthemen ({matchingTopics.length})
              </span>
              {matchingTopics.map((top) => (
                <button
                  key={top.id}
                  onClick={() => {
                    setActiveTopic(top.id);
                    setViewMode("themen");
                    closeSpotlight();
                  }}
                  className="w-full p-2.5 rounded-2xl bg-white/5 hover:bg-amber-500/20 border border-white/5 hover:border-amber-400/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-amber-400">
                      {top.displayCode}
                    </span>
                    <span className="font-bold text-white group-hover:text-amber-200">
                      {top.title}
                    </span>
                    <span className="text-slate-400 text-[11px] hidden sm:inline">
                      ({top.englishTitle})
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300" />
                </button>
              ))}
            </div>
          )}

          {/* Grammar */}
          {matchingGrammar.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block px-2">
                Grammatik-Regeln ({matchingGrammar.length})
              </span>
              {matchingGrammar.map((g) => (
                <button
                  key={g.id}
                  onClick={() => {
                    setViewMode("grammatik");
                    closeSpotlight();
                  }}
                  className="w-full p-2.5 rounded-2xl bg-white/5 hover:bg-amber-500/20 border border-white/5 hover:border-amber-400/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-emerald-400">
                      {g.code}
                    </span>
                    <span className="font-bold text-white group-hover:text-amber-200">
                      {g.title}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300" />
                </button>
              ))}
            </div>
          )}

          {/* Textsorten */}
          {matchingTextsorten.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block px-2">
                Paper 1 Textsorten ({matchingTextsorten.length})
              </span>
              {matchingTextsorten.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setViewMode("textsorten");
                    closeSpotlight();
                  }}
                  className="w-full p-2.5 rounded-2xl bg-white/5 hover:bg-amber-500/20 border border-white/5 hover:border-amber-400/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    <span className="font-bold text-white group-hover:text-amber-200">
                      {t.title}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      • {t.register}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300" />
                </button>
              ))}
            </div>
          )}

          {/* Redemittel */}
          {matchingRedemittel.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block px-2">
                Redemittel & Formulierungen ({matchingRedemittel.length})
              </span>
              {matchingRedemittel.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setViewMode("redemittel");
                    closeSpotlight();
                  }}
                  className="w-full p-2.5 rounded-2xl bg-white/5 hover:bg-amber-500/20 border border-white/5 hover:border-amber-400/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-bold text-white group-hover:text-amber-200">
                      „{r.phrase}“
                    </span>
                    <span className="text-slate-400 text-[11px] italic">
                      ({r.englishMeaning})
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300" />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
