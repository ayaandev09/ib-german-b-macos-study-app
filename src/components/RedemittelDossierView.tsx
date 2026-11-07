"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquareQuote,
  Copy,
  Check,
  Search,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";
import { REDEMITTEL_DATABASE } from "@/data/redemittel";

export function RedemittelDossierView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTier, setActiveTier] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "Alle Kategorien" },
    { id: "meinung", label: "Meinungsäußerung" },
    { id: "abwaegung", label: "Abwägung & Kontraste" },
    { id: "ursache_folge", label: "Ursache & Folge" },
    { id: "beispiel_vertiefung", label: "Beispiele & Vertiefung" },
    { id: "einleitung_schluss", label: "Einleitung & Schluss" },
    { id: "muendliche_pruefung", label: "Mündliche Prüfung (IO)" },
  ];

  const tiers = [
    { id: "all", label: "Alle Niveaus" },
    { id: "Standard (B1)", label: "B1 Basis" },
    { id: "High-Scoring (B2/C1)", label: "B2/C1 Gehoben" },
    { id: "Idiomatic Mastery", label: "Meisterklasse" },
  ];

  const filtered = REDEMITTEL_DATABASE.filter((item) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const matchesTier = activeTier === "all" || item.tier === activeTier;
    const matchesQuery =
      !searchQuery ||
      item.phrase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.englishMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.exampleSentence.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesTier && matchesQuery;
  });

  const handleCopy = (id: string, text: string) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <div className="space-y-4 liquid-view-enter">
      {/* Search & Filter Bar */}
      <div className="p-4 rounded-3xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Redemittel durchsuchen..."
            className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 transition-colors"
          />
        </div>

        {/* Tier Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar">
          {tiers.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTier(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTier === t.id
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === c.id
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "liquid-glass-pill text-slate-400 hover:text-white"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Redemittel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -2 }}
            className="liquid-glass-bento p-4 sm:p-5 rounded-3xl border border-amber-400/25 hover:border-amber-400/60 transition-all flex flex-col justify-between text-left space-y-3 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20">
                  {item.categoryLabel}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      item.tier === "Idiomatic Mastery"
                        ? "bg-purple-500/15 border-purple-400/30 text-purple-300"
                        : item.tier === "High-Scoring (B2/C1)"
                        ? "bg-amber-500/15 border-amber-400/30 text-amber-300"
                        : "bg-white/5 border-white/10 text-slate-400"
                    }`}
                  >
                    {item.tier}
                  </span>

                  <button
                    onClick={() => handleCopy(item.id, item.phrase)}
                    title="Redewendung kopieren"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phrase Header */}
              <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                „{item.phrase}“
              </h4>
              <p className="text-xs text-amber-300/80 italic mb-2">
                {item.englishMeaning}
              </p>

              {/* Example in Context */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-xs text-slate-300 leading-relaxed font-serif">
                <span className="text-slate-400 text-[10px] block font-sans mb-0.5">
                  Anwendungsbeispiel:
                </span>
                {item.exampleSentence}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
