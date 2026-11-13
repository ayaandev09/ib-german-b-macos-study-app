"use client";

import React from "react";
import {
  BookOpenCheck,
  Compass,
  FileText,
  GraduationCap,
  LayoutGrid,
  MessageSquareQuote,
  Mic,
  Sparkles,
} from "lucide-react";
import { ALL_SUBTOPICS } from "@/data/themes";
import { useGermanStudyStore, GermanNavMode } from "@/store/useGermanStudyStore";
import { IBGermanAppLogo } from "./IBGermanAppLogo";

const ITEMS: { id: GermanNavMode; label: string; tint: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Home", tint: "245,158,11", icon: <Compass className="w-4 h-4" /> },
  { id: "themen", label: "Themen", tint: "245,158,11", icon: <LayoutGrid className="w-4 h-4" /> },
  { id: "grammatik", label: "Grammatik", tint: "139,92,246", icon: <Sparkles className="w-4 h-4" /> },
  { id: "textsorten", label: "Textsorten", tint: "14,165,233", icon: <FileText className="w-4 h-4" /> },
  { id: "redemittel", label: "Redemittel", tint: "244,63,94", icon: <MessageSquareQuote className="w-4 h-4" /> },
  { id: "pruefung", label: "Prüfung", tint: "16,185,129", icon: <GraduationCap className="w-4 h-4" /> },
  { id: "literatur", label: "Literatur", tint: "249,115,22", icon: <BookOpenCheck className="w-4 h-4" /> },
  { id: "testdaf", label: "TestDaF", tint: "6,182,212", icon: <Mic className="w-4 h-4" /> },
];

export function SideNav() {
  const { viewMode, setViewMode, sidebarCollapsed, completedTopics } = useGermanStudyStore();
  const done = ALL_SUBTOPICS.filter((t) => completedTopics.includes(t.id)).length;
  const pct = Math.round((done / ALL_SUBTOPICS.length) * 100);

  return (
    <aside
      data-tour="sidebar"
      className={`shrink-0 glass-tint tint-amber rounded-3xl flex flex-col h-[calc(100vh-2rem)] sticky top-4 select-none overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 ${
        sidebarCollapsed
          ? "w-0 max-w-0 p-0 -mr-4 xl:-mr-5 border-0 opacity-0 pointer-events-none"
          : "w-60 p-4 opacity-100"
      }`}
    >
      <div className="w-52 flex flex-col h-full min-h-0 gap-4">
        <div className="flex items-center gap-2.5 mac-drag-region">
          <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 p-1 shrink-0 flex items-center justify-center">
            <IBGermanAppLogo className="w-full h-full object-contain" />
          </div>
          <h1 className="text-sm font-bold text-white tracking-tight">IB German B</h1>
        </div>

        <nav className="flex flex-col gap-1 overflow-y-auto" aria-label="Sections">
          {ITEMS.map((it) => {
            const active = viewMode === it.id;
            return (
              <button
                key={it.id}
                onClick={() => setViewMode(it.id)}
                aria-current={active ? "page" : undefined}
                style={active ? { background: `rgba(${it.tint},0.22)`, borderColor: `rgba(${it.tint},0.5)` } : undefined}
                className={`flex items-center gap-3 px-3 py-2 rounded-2xl border text-sm cursor-pointer transition-colors ${
                  active
                    ? "text-white font-semibold"
                    : "border-transparent text-slate-300 hover:bg-white/8 hover:text-white"
                }`}
              >
                <span style={{ color: `rgb(${it.tint})` }}>{it.icon}</span>
                {it.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl bg-black/30 border border-white/10 p-3">
          <div className="flex justify-between text-xs text-slate-300 mb-2">
            <span>Fortschritt</span>
            <span className="text-amber-300 font-semibold">{pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-amber-400 transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-[11px] text-slate-400 mt-2">{done} of {ALL_SUBTOPICS.length} Themen erledigt</p>
        </div>
      </div>
    </aside>
  );
}
