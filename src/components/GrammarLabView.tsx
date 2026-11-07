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
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { GRAMMAR_POINTS } from "@/data/grammar";
import { GrammarCategory, GrammarPoint } from "@/data/types";

export function GrammarLabView() {
  const {
    activeGrammarCategory,
    setActiveGrammarCategory,
    masteredGrammar,
    toggleGrammarMastered,
  } = useGermanStudyStore();

  const [selectedPoint, setSelectedPoint] = useState<GrammarPoint>(GRAMMAR_POINTS[0]);
  const [activeInteractiveCase, setActiveInteractiveCase] = useState<"nom" | "akk" | "dat" | "gen">("akk");
  const [interactiveGender, setInteractiveGender] = useState<"mask" | "fem" | "neut" | "pl">("mask");

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
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase">
                    {point.code} • {point.categoryTitle}
                  </span>

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

                <h4 className="text-sm font-bold text-white mb-0.5">
                  {point.title}
                </h4>
                <p className="text-[11px] text-amber-300/80 mb-2">
                  {point.englishTitle}
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

        {/* Right Column: Deep Rule Studio & Interactive Cheat Tables (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-amber-400/30 shadow-xl space-y-5 text-left">
            {/* Header */}
            <div className="flex items-start justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
                  {selectedPoint.code} • {selectedPoint.categoryTitle} • {selectedPoint.level}
                </span>
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

            {/* Formula Banner */}
            <div className="p-3 rounded-2xl bg-black/60 border border-amber-400/25 font-mono text-xs text-amber-200">
              <span className="text-slate-400 text-[10px] block mb-0.5">SYNTAX-FORMEL:</span>
              {selectedPoint.formula}
            </div>

            {/* Rule Explanation */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                Regelerklärung & Funktionsweise
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-2xl border border-white/5">
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

            {/* Contextual Examples */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                IB Mustersätze mit Hervorhebung
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
