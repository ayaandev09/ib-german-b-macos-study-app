"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Award,
  Sparkles,
  Timer,
  Play,
  Pause,
  RotateCcw,
  MessageSquareQuote,
  FileCheck2,
  ChevronRight,
  Zap,
  BookOpen,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { REDEMITTEL_DATABASE } from "@/data/redemittel";

export function GermanRightInspector() {
  const {
    isInspectorOpen,
    toggleInspector,
    getProgressStats,
    openExamSprint,
    oralTimerSeconds,
    isOralTimerRunning,
    startOralTimer,
    pauseOralTimer,
    resetOralTimer,
    tickOralTimer,
    setViewMode,
  } = useGermanStudyStore();

  const [activeTab, setActiveTab] = useState<"progress" | "oral" | "redemittel">("progress");
  const [randomRedemittel, setRandomRedemittel] = useState(REDEMITTEL_DATABASE[0]);

  // Oral Timer tick
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOralTimerRunning) {
      interval = setInterval(() => {
        tickOralTimer();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOralTimerRunning, tickOralTimer]);

  const stats = getProgressStats();

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const rollNewRedemittel = () => {
    const rand = REDEMITTEL_DATABASE[Math.floor(Math.random() * REDEMITTEL_DATABASE.length)];
    setRandomRedemittel(rand);
  };

  if (!isInspectorOpen) return null;

  return (
    <aside
      data-tour="analytical-inspector"
      className="w-80 lg:w-88 shrink-0 liquid-glass-panel rounded-3xl p-3 sm:p-4 flex flex-col gap-3 h-[calc(100vh-2rem)] sticky top-4 select-none overflow-hidden transition-all z-10 border border-white/10 shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block">
              ANALYTISCHER INSPEKTOR
            </span>
            <span className="text-xs font-semibold text-white tracking-tight">
              Reife & Mündliche Prüfung
            </span>
          </div>
        </div>

        <button
          onClick={toggleInspector}
          title="Inspektor ausblenden (⌘I)"
          className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Segmented Inspector Tabs */}
      <div className="grid grid-cols-3 gap-1 p-0.5 rounded-xl bg-black/40 border border-white/10 text-[11px] font-bold">
        <button
          onClick={() => setActiveTab("progress")}
          className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeTab === "progress"
              ? "bg-amber-500/20 text-amber-200 border border-amber-400/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Fortschritt
        </button>
        <button
          onClick={() => setActiveTab("oral")}
          className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeTab === "oral"
              ? "bg-amber-500/20 text-amber-200 border border-amber-400/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Oral-Timer
        </button>
        <button
          onClick={() => setActiveTab("redemittel")}
          className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeTab === "redemittel"
              ? "bg-amber-500/20 text-amber-200 border border-amber-400/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Redemittel
        </button>
      </div>

      {/* Main Tab Panels */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
        {activeTab === "progress" && (
          <div className="space-y-3">
            {/* Overall Mastery Ring Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-black/40 to-slate-900 border border-amber-400/30 shadow-lg text-center relative overflow-hidden">
              <div className="flex items-center justify-center mb-2">
                <div className="relative flex items-center justify-center">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="7"
                      fill="transparent"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#f59e0b"
                      strokeWidth="7"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * stats.overallPercentage) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-xl font-extrabold text-white">
                      {stats.overallPercentage}%
                    </span>
                    <span className="text-[9px] font-mono text-amber-300 block">
                      GESAMTREIFE
                    </span>
                  </div>
                </div>
              </div>

              <span className="text-xs font-semibold text-slate-200 block mb-1">
                Lehrplan-Meisterung
              </span>
              <p className="text-[11px] text-slate-400 leading-tight">
                Fortschritt berechnet aus allen 25 Subthemen, 18 Grammatikregeln und 10 Textsorten.
              </p>
            </div>

            {/* Sub-Metric Bars */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
              {/* Themen */}
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-300">Themen abgeschlossen</span>
                  <span className="font-mono text-amber-300">
                    {stats.completedTopicsCount}/{stats.totalTopics}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{
                      width: `${(stats.completedTopicsCount / stats.totalTopics) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Grammatik */}
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-300">Grammatikregeln beherrscht</span>
                  <span className="font-mono text-emerald-300">
                    {stats.masteredGrammarCount}/{stats.totalGrammar}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                    style={{
                      width: `${(stats.masteredGrammarCount / stats.totalGrammar) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Textsorten */}
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-300">Textsorten geübt</span>
                  <span className="font-mono text-sky-300">
                    {stats.practicedTextsortenCount}/{stats.totalTextsorten}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-400 rounded-full transition-all duration-500"
                    style={{
                      width: `${(stats.practicedTextsortenCount / stats.totalTextsorten) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Action: Exam Sprint Launch */}
            <button
              onClick={openExamSprint}
              className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-400/40 text-left transition-all cursor-pointer group flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Prüfungs-Sprint (⌘E)
                  </span>
                  <span className="text-[10px] text-amber-200/80 block">
                    15, 30 oder 45 Minuten Simulation
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}

        {activeTab === "oral" && (
          <div className="space-y-3">
            {/* Oral Exam Timer Card */}
            <div className="p-4 rounded-2xl bg-black/60 border border-amber-400/30 shadow-lg text-center">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                INDIVIDUAL ORAL (IO) SIMULATOR
              </span>
              <div className="text-4xl font-extrabold font-mono text-white tracking-tight my-2">
                {formatTime(oralTimerSeconds)}
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                {oralTimerSeconds > 0
                  ? "Teil 1: Bildpräsentation (SL) oder Textauszug (HL) • Ziel: 3–4 Min."
                  : "Präsentationszeit abgelaufen! Beginne jetzt das Folgegespräch."}
              </p>

              {/* Timer Controls */}
              <div className="flex items-center justify-center gap-2">
                {isOralTimerRunning ? (
                  <button
                    onClick={pauseOralTimer}
                    className="p-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 font-bold transition-all cursor-pointer active:scale-95"
                  >
                    <Pause className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={startOralTimer}
                    className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all cursor-pointer active:scale-95 shadow-md shadow-amber-500/20"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                  </button>
                )}
                <button
                  onClick={() => resetOralTimer(240)}
                  title="Timer zurücksetzen (4 Min.)"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-all cursor-pointer active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Oral Criteria Checklist */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <span className="text-[11px] font-bold text-amber-300 block mb-1">
                Oral Checkliste für Bestnote:
              </span>
              <div className="text-[11px] text-slate-300 space-y-1.5">
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Thema eindeutig benannt & Kulturbezug zum DACH-Raum hergestellt.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Vordergrund & Hintergrund präzise beschrieben (Lokale Präpositionen).</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Persönliche Meinung mit B2/C1-Redemitteln begründet.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Vergleich zur eigenen Kultur souverän gezogen.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "redemittel" && (
          <div className="space-y-3">
            {/* Random Redemittel Card */}
            <div className="p-4 rounded-2xl bg-black/50 border border-amber-400/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold uppercase text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/20">
                  {randomRedemittel.categoryLabel}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {randomRedemittel.tier}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-amber-200">
                „{randomRedemittel.phrase}“
              </div>

              <div className="text-[11px] text-slate-300 leading-normal">
                <span className="text-slate-400 block text-[10px] mb-0.5">Englisch:</span>
                {randomRedemittel.englishMeaning}
              </div>

              <div className="text-[11px] text-slate-300 leading-normal pt-1 border-t border-white/5">
                <span className="text-slate-400 block text-[10px] mb-0.5">Beispiel:</span>
                {randomRedemittel.exampleSentence}
              </div>

              <button
                onClick={rollNewRedemittel}
                className="w-full mt-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer active:scale-95"
              >
                Nächste Redewendung anzeigen
              </button>
            </div>

            <button
              onClick={() => setViewMode("redemittel")}
              className="w-full p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold transition-all text-center block cursor-pointer"
            >
              Komplettes Redemittel-Dossier öffnen →
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
