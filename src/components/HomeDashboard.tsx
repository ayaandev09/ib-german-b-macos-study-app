"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  BookOpenCheck,
  FileText,
  GraduationCap,
  LayoutGrid,
  MessageSquareQuote,
  Mic,
  Sparkles,
} from "lucide-react";
import { ALL_SUBTOPICS } from "@/data/themes";
import { useGermanStudyStore, GermanNavMode } from "@/store/useGermanStudyStore";

type Tile = {
  id: GermanNavMode;
  title: string;
  blurb: string;
  tint: string;
  icon: React.ReactNode;
  span: string;
};

const TILES: Tile[] = [
  { id: "themen", title: "Themen", blurb: "Die 5 IB-Themen Schritt für Schritt", tint: "tint-amber", icon: <LayoutGrid className="w-6 h-6" />, span: "sm:col-span-2" },
  { id: "grammatik", title: "Grammatik", blurb: "Regeln mit Beispielen", tint: "tint-violet", icon: <Sparkles className="w-6 h-6" />, span: "" },
  { id: "textsorten", title: "Textsorten", blurb: "Paper 1 Vorlagen", tint: "tint-sky", icon: <FileText className="w-6 h-6" />, span: "" },
  { id: "redemittel", title: "Redemittel", blurb: "Phrasen für Sprechen und Schreiben", tint: "tint-rose", icon: <MessageSquareQuote className="w-6 h-6" />, span: "" },
  { id: "pruefung", title: "Prüfung", blurb: "Kriterien und Übungen", tint: "tint-emerald", icon: <GraduationCap className="w-6 h-6" />, span: "" },
  { id: "literatur", title: "Literatur", blurb: "Mündliche Prüfung HL", tint: "tint-orange", icon: <BookOpenCheck className="w-6 h-6" />, span: "" },
  { id: "testdaf", title: "TestDaF", blurb: "C1 Vorbereitung mit Sprechübung", tint: "tint-cyan", icon: <Mic className="w-6 h-6" />, span: "sm:col-span-2" },
];

export function HomeDashboard() {
  const { setViewMode, setActiveTopic, activeTopicId, completedTopics } = useGermanStudyStore();
  const total = ALL_SUBTOPICS.length;
  const done = ALL_SUBTOPICS.filter((t) => completedTopics.includes(t.id)).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const current = ALL_SUBTOPICS.find((t) => t.id === activeTopicId) ?? ALL_SUBTOPICS[0];

  return (
    <div className="max-w-5xl mx-auto py-4 sm:py-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="glass-tint tint-amber rounded-3xl p-6 sm:col-span-2 flex flex-col justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-200/80">Willkommen zurück</p>
            <h1 className="text-3xl font-bold text-white tracking-tight mt-1">IB Deutsch B</h1>
          </div>
          <button
            onClick={() => {
              setActiveTopic(current.id);
              setViewMode("themen");
            }}
            className="self-start flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold cursor-pointer transition-colors"
          >
            <Play className="w-4 h-4" />
            Weiter {current.displayCode}
          </button>
        </div>
        <div className="glass-tint tint-emerald rounded-3xl p-6 flex flex-col justify-between gap-4">
          <p className="text-xs uppercase tracking-widest text-emerald-200/80">Fortschritt</p>
          <div>
            <p className="text-4xl font-bold text-white">{pct}%</p>
            <p className="text-xs text-slate-300 mt-1">{done} of {total} Themen</p>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-emerald-400"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        {TILES.map((t, i) => (
          <motion.button
            key={t.id}
            onClick={() => setViewMode(t.id)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05, type: "spring", stiffness: 260, damping: 24 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`glass-tint ${t.tint} ${t.span} text-left rounded-3xl p-5 min-h-[130px] flex flex-col justify-between cursor-pointer`}
          >
            <div className="flex items-start justify-between text-white/90">
              {t.icon}
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">{t.title}</h2>
              <p className="text-sm text-slate-300/90 mt-0.5">{t.blurb}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
