"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { ALL_TEXTSORTEN } from "@/data/textsorten";
import { Textsorte } from "@/data/types";

export function TextsortenVaultView() {
  const { practicedTextsorten, toggleTextsortePracticed } = useGermanStudyStore();

  const [selectedTextsorte, setSelectedTextsorte] = useState<Textsorte>(ALL_TEXTSORTEN[0]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: "all", label: "Alle 10 Textsorten" },
    { id: "journalistisch", label: "Journalistisch" },
    { id: "persoenlich", label: "Persönlich / Informell" },
    { id: "oeffentlich", label: "Öffentlich / Formell" },
    { id: "reflektierend", label: "Reflektierend" },
  ];

  const filtered = ALL_TEXTSORTEN.filter((t) => {
    return activeCategory === "all" || t.category === activeCategory;
  });

  const handleCopyTemplate = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(selectedTextsorte.sampleTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4 liquid-view-enter">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((c) => {
          const isActive = activeCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
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

      {/* Main Split Layout: Left list of 10 text types, Right template & conventions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: 10 Text Types Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1 custom-scrollbar">
          {filtered.map((item) => {
            const isSelected = selectedTextsorte.id === item.id;
            const isPracticed = practicedTextsorten.includes(item.id);

            return (
              <motion.div
                key={item.id}
                whileHover={{ x: 2 }}
                onClick={() => setSelectedTextsorte(item)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden ${
                  isSelected
                    ? "bg-amber-500/20 border-amber-400/50 shadow-lg shadow-amber-500/10 text-white"
                    : "bg-slate-900/40 border-white/10 hover:border-white/20 text-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase">
                    {item.register}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTextsortePracticed(item.id);
                    }}
                    title={isPracticed ? "Als ungeübt markieren" : "Als geübt markieren"}
                    className="p-1 text-slate-400 hover:text-amber-300 transition-transform active:scale-90"
                  >
                    {isPracticed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                </div>

                <h4 className="text-sm font-bold text-white mb-0.5">
                  {item.title}
                </h4>
                <p className="text-[11px] text-amber-300/80 mb-2">
                  {item.englishTitle}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Zielgruppe: {item.targetAudience}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Blueprint, Mandatory Conventions & Model Template (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-amber-400/30 shadow-xl space-y-5 text-left">
            {/* Header */}
            <div className="flex items-start justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
                  IB PAPER 1 TEXTSORTE • {selectedTextsorte.recommendedLength}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedTextsorte.title}
                </h2>
                <p className="text-xs text-amber-300 font-medium">
                  {selectedTextsorte.englishTitle} • {selectedTextsorte.purpose}
                </p>
              </div>

              <button
                onClick={() => toggleTextsortePracticed(selectedTextsorte.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  practicedTextsorten.includes(selectedTextsorte.id)
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {practicedTextsorten.includes(selectedTextsorte.id) ? "Geübt" : "Üben"}
                </span>
              </button>
            </div>

            {/* Mandatory Conventions Checklist */}
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold block">
                Verbindliche Textsorten-Konventionen (Kriterium C)
              </span>
              <div className="space-y-1.5 text-xs text-slate-300">
                {selectedTextsorte.mandatoryConventions.map((conv, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">✓</span>
                    <span>{conv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Structure Blueprint */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                Struktur-Bauplan & Typische Redewendungen
              </h4>
              <div className="space-y-2">
                {selectedTextsorte.structureBlueprint.map((sec, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1 text-xs"
                  >
                    <span className="font-bold text-amber-200 block">
                      {sec.section}: {sec.description}
                    </span>
                    <div className="text-slate-400 italic text-[11px] space-y-0.5">
                      {sec.essentialPhrases.map((phrase, pIdx) => (
                        <p key={pIdx}>„{phrase}“</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Model Sample Template with Copy Button */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Vollständiges Muster-Exemplar
                </h4>
                <button
                  onClick={handleCopyTemplate}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Vorlage kopieren</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-black/80 border border-white/10 font-serif text-xs leading-relaxed text-slate-200 whitespace-pre-wrap max-h-60 overflow-y-auto custom-scrollbar">
                {selectedTextsorte.sampleTemplate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
