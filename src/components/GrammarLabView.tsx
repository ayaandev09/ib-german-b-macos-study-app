"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Circle,
  HelpCircle,
  AlertTriangle,
  Award,
  Zap,
  BookOpen,
  RotateCcw,
  Compass,
  FileCheck,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { GRAMMAR_POINTS } from "@/data/grammar";
import { GrammarCategory, GrammarPoint } from "@/data/types";
import { MathFormula } from "./MathFormula";

export function GrammarLabView() {
  const {
    activeGrammarCategory,
    setActiveGrammarCategory,
    masteredGrammar,
    toggleGrammarMastered,
  } = useGermanStudyStore();

  const [selectedPoint, setSelectedPoint] = useState<GrammarPoint>(GRAMMAR_POINTS[0]);

  const categories: { id: string; label: string }[] = [
    { id: "all", label: "Alle 18 Regeln" },
    { id: "faelle_praepositionen", label: "Fälle & Präpositionen" },
    { id: "zeiten_modi", label: "Zeiten & Modi (Konjunktiv)" },
    { id: "passiv", label: "Das Passiv" },
    { id: "satzbau_konnektoren", label: "Satzbau & Konnektoren" },
    { id: "adjektive", label: "Adjektivdeklination" },
    { id: "pronomen_komposita", label: "Pronomen & Da/Wo" },
  ];

  const filteredPoints = GRAMMAR_POINTS.filter((p) => {
    return activeGrammarCategory === "all" || p.category === activeGrammarCategory;
  });

  return (
    <div className="space-y-4 liquid-view-enter">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((c) => {
          const isActive = activeGrammarCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveGrammarCategory(c.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "liquid-glass-pill text-slate-400 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Main Split Layout: Left rule list, Right active detailed dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Rules Grid (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1 custom-scrollbar">
          {filteredPoints.map((point) => {
            const isSelected = selectedPoint.id === point.id;
            const isMastered = masteredGrammar.includes(point.id);

            return (
              <motion.div
                key={point.id}
                whileHover={{ x: 2 }}
                onClick={() => setSelectedPoint(point)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden ${
                  isSelected
                    ? "bg-amber-500/20 border-amber-400/50 shadow-lg shadow-amber-500/10 text-white"
                    : "bg-slate-900/40 border-white/10 hover:border-white/20 text-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase">
                      {point.code}
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-amber-500/15 border border-amber-400/30 text-amber-300">
                      {point.cefrLevel}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleGrammarMastered(point.id);
                    }}
                    title={isMastered ? "Als unvollständig markieren" : "Als gemeistert markieren"}
                    className="p-1 text-slate-400 hover:text-amber-300 transition-transform active:scale-90"
                  >
                    {isMastered ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                </div>

                <h4 className="text-sm font-bold text-white mb-0.5 leading-snug">
                  {point.title}
                </h4>
                
                {/* Small English Orientation Phrase */}
                <p className="text-[11px] text-amber-200/90 mb-1.5 font-medium">
                  {point.englishTitle}
                </p>

                <p className="text-[10px] text-slate-400 line-clamp-1 italic mb-2">
                  {point.englishExplanation}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    {point.importance}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    {point.level}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Deep Rule Studio, LaTeX Formulas & Interactive Cheat Tables (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-amber-400/30 shadow-xl space-y-5 text-left">
            {/* Header */}
            <div className="flex items-start justify-between pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase">
                    {selectedPoint.code} • {selectedPoint.categoryTitle} • {selectedPoint.level}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-400/40 text-amber-300">
                    NIVEAU: {selectedPoint.cefrLevel}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedPoint.title}
                </h2>
                <p className="text-xs text-amber-300 font-medium">
                  {selectedPoint.englishTitle}
                </p>
              </div>

              <button
                onClick={() => toggleGrammarMastered(selectedPoint.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  masteredGrammar.includes(selectedPoint.id)
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {masteredGrammar.includes(selectedPoint.id) ? "Gemeistert" : "Meistern"}
                </span>
              </button>
            </div>

            {/* Small English Navigation & Orientation Guide Box */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/25 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
                  <Compass className="w-3.5 h-3.5 text-amber-400" /> English Navigation &amp; Concept Overview
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  IB Language B Guide
                </span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {selectedPoint.englishExplanation}
              </p>
              <div className="text-[11px] text-amber-200/80 pt-1 border-t border-white/5">
                <strong className="text-amber-300">When to use in IB Exam:</strong> {selectedPoint.whenToUseEnglish}
              </div>
            </div>

            {/* LaTeX Mathematical / Syntax Formula Showcase */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-black/90 via-slate-950 to-black border border-amber-400/35 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-400 font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  SYNTAX-FORMEL &amp; STRUKTURAUFBAU (LATEX)
                </span>
                <span className="text-[9px] font-mono text-slate-400">
                  Formelnotation
                </span>
              </div>

              {/* KaTeX Math Formula Rendering */}
              <div className="p-4 rounded-xl bg-black/75 border border-amber-400/20 my-1 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden text-center flex items-center justify-center min-h-[64px]">
                <MathFormula formula={selectedPoint.latexFormula || selectedPoint.formula} displayMode={true} />
              </div>

              {/* Text representation */}
              <div className="text-[11px] font-mono text-slate-300/80 flex items-start gap-2 mt-2 pt-2 border-t border-white/5">
                <span className="text-slate-500 uppercase text-[9px] shrink-0 mt-0.5">Text-Regel:</span>
                <span className="text-amber-200/90">{selectedPoint.formula}</span>
              </div>
            </div>

            {/* Detailed German Explanation (B1/B2/C1 Content) */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                Regelerklärung &amp; Funktionsweise (Deutsch)
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-white/[0.03] p-3.5 rounded-2xl border border-white/5 font-sans">
                {selectedPoint.ruleExplanation}
              </p>
            </div>

            {/* Cheat Table if present */}
            {selectedPoint.cheatTable && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Übersichtstabelle (Spickzettel)
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 text-amber-300 font-mono text-[11px] border-b border-white/10">
                      <tr>
                        {selectedPoint.cheatTable.headers.map((h, i) => (
                          <th key={i} className="p-2.5 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300 font-mono text-[11px]">
                      {selectedPoint.cheatTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2.5">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Contextual Examples in German (B1/B2/C1) with English Translations */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                IB Mustersätze &amp; Anwendungsbeispiele
              </h4>
              <div className="space-y-2">
                {selectedPoint.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {ex.german}
                    </p>
                    <p className="text-[11px] text-slate-400 italic">
                      {ex.english}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Traps & Criterion A Tip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs">
                <div className="flex items-center gap-1.5 text-red-300 font-bold mb-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Häufige Prüfungsfallen:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
                  {selectedPoint.commonMistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Kriterium A Punkte-Booster:</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {selectedPoint.criterionATip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
