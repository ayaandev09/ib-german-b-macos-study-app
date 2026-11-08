"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  Timer,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  AlertCircle,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  Crown,
  Flame,
  MapPin,
  MessageSquareQuote,
  Edit3,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { ALL_SUBTOPICS, IB_THEMES } from "@/data/themes";
import { REDEMITTEL_DATABASE } from "@/data/redemittel";
import { RecallFlipCard } from "@/components/RecallFlipCard";
import { AcademicNotesSurface } from "@/components/AcademicNotesSurface";

type InspectorTab = "recall" | "redemittel" | "kultur" | "notizen";

export function GermanRightInspector() {
  const {
    activeTopicId,
    completedTopics,
    toggleTopicComplete,
    isInspectorOpen,
    toggleInspector,
    openExamSprint,
    topicNotes,
    setTopicNote,
  } = useGermanStudyStore();

  const [activeTab, setActiveTab] = useState<InspectorTab>("recall");
  const [copiedNote, setCopiedNote] = useState(false);
  const [copiedPhraseIndex, setCopiedPhraseIndex] = useState<number | null>(null);

  const activeTopic =
    ALL_SUBTOPICS.find((s) => s.id === activeTopicId) || ALL_SUBTOPICS[0];
  const activeTheme =
    IB_THEMES.find((t) => t.id === activeTopic.themeId) || IB_THEMES[0];
  const isCompleted = (completedTopics || []).includes(activeTopic.id);
  const userNote = topicNotes[activeTopic.id] || "";

  const handleCopyNote = () => {
    if (userNote.trim()) {
      navigator.clipboard.writeText(userNote);
      setCopiedNote(true);
      setTimeout(() => setCopiedNote(false), 2000);
    }
  };

  const handleCopyPhrase = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPhraseIndex(idx);
    setTimeout(() => setCopiedPhraseIndex(null), 2000);
  };

  return (
    <aside
      data-tour="inspector"
      className={`shrink-0 sticky top-3 select-none overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 ${
        !isInspectorOpen
          ? "w-0 max-w-0 p-0 -ml-4 xl:-ml-5 border-0 opacity-0 pointer-events-none"
          : "w-80 lg:w-88 p-0 opacity-100"
      }`}
    >
      <div
        className={`w-80 lg:w-88 shrink-0 transition-opacity duration-200 ${
          !isInspectorOpen ? "opacity-0 pointer-events-none invisible" : "opacity-100 visible"
        }`}
      >
        <div className="liquid-card-flagship rounded-3xl p-4 border border-amber-500/40 bg-slate-950/85 backdrop-blur-2xl shadow-2xl flex flex-col max-h-[calc(100vh-1.5rem)] overflow-hidden">
          {/* Top Header */}
          <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-white/10 shrink-0 min-h-[44px]">
            <div className="flex items-center gap-2 min-w-0">
              <div className="p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/35 text-amber-300 shrink-0 shadow-inner">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block truncate">
                  ANALYTISCHER INSPEKTOR
                </span>
                <h3 className="text-xs font-semibold text-white tracking-tight truncate">
                  {activeTopic.displayCode} · {activeTopic.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => toggleTopicComplete(activeTopic.id)}
                title={isCompleted ? "Als unvollständig markieren" : "Thema gemeistert"}
                className={`p-1.5 rounded-xl flex items-center justify-center text-xs font-mono transition-all cursor-pointer soft-button ${
                  isCompleted
                    ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 shadow-sm"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
              </button>
              <button
                onClick={toggleInspector}
                title="Inspektor einklappen (⌘I)"
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tab Switcher (Macbeth Match: 4 Pill Tabs) */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-black/40 rounded-xl border border-white/10 mb-3 shrink-0">
            <button
              onClick={() => setActiveTab("recall")}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer truncate ${
                activeTab === "recall"
                  ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🎯 Cram
            </button>
            <button
              onClick={() => setActiveTab("redemittel")}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer truncate ${
                activeTab === "redemittel"
                  ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              💬 Phrasen
            </button>
            <button
              onClick={() => setActiveTab("kultur")}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer truncate ${
                activeTab === "kultur"
                  ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              👑 Kultur
            </button>
            <button
              onClick={() => setActiveTab("notizen")}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer truncate ${
                activeTab === "notizen"
                  ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📝 Notizen
            </button>
          </div>

          {/* Scrollable Tab Content */}
          <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 custom-scrollbar text-xs">
            {/* TAB 1: ACTIVE RECALL & CRAM */}
            {activeTab === "recall" && (
              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block font-bold">
                    Active Recall Flipcard
                  </span>
                  <p className="text-[11px] text-slate-400">
                    Klicken zum Umdrehen und Testen des Wissens vor dem Notizen-Check.
                  </p>
                </div>

                <RecallFlipCard
                  moduleCode={activeTopic.displayCode}
                  title={`${activeTopic.displayCode} · ${activeTopic.title}`}
                  prompt={activeTopic.overview}
                  answer={`Kultureller DACH-Schwerpunkt: ${activeTopic.culturalSpotlight.title} (${activeTopic.culturalSpotlight.region}) — ${activeTopic.culturalSpotlight.description}`}
                  accent="#d97706"
                  secondary="#991b1b"
                  meta="IB GERMAN B ACTIVE RECALL"
                />

                {/* Examiner Band 7-8 Criteria */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/25 space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold font-mono text-[11px]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Examiner Band 7-8 Kriterien (Criterion A & B)</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-relaxed font-sans">
                    Präziser Einsatz themenspezifischer Idiomatik, fehlerfreie Kasusendungen bei Artikeln und Adjektiven, und überzeugende argumentative Verknüpfung mit dem deutschsprachigen Kulturraum (DACH).
                  </p>
                </div>

                {/* Common Student Pitfall */}
                <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-400/25 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-rose-300 font-bold font-mono text-[10px]">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Häufiger Schülerfehler (Criterion A)</span>
                  </div>
                  <p className="text-[11px] text-rose-100/90 leading-relaxed font-sans">
                    Vermeiden Sie vage Verallgemeinerungen. Beziehen Sie sich konkret auf Fakten und Gepflogenheiten aus Deutschland, Österreich oder der Schweiz (z.B. Bio-Boom, duale Ausbildung, Vereinsleben).
                  </p>
                </div>

                {/* Launch Timed Exam Sprint Action Card */}
                <button
                  onClick={openExamSprint}
                  className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/15 to-rose-500/15 border border-amber-400/40 hover:border-amber-400/70 text-left transition-all cursor-pointer flex items-center justify-between group shadow-lg"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 group-hover:scale-105 transition-transform">
                      <Timer className="w-4 h-4 animate-pulse" />
                    </span>
                    <div>
                      <span className="font-mono text-xs font-bold text-white block">
                        Prüfungs-Sprint starten
                      </span>
                      <span className="text-[10px] text-amber-200/80">
                        15m / 30m / 45m Schreib- &amp; Sprechdrill
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 font-bold px-2 py-1 rounded-lg bg-black/40 border border-white/10">
                    ⌘E
                  </span>
                </button>
              </div>
            )}

            {/* TAB 2: REDEMITTEL & PHRASEN */}
            {activeTab === "redemittel" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 font-bold">
                    Themen-Wortschatz &amp; Redemittel
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Klick zum Kopieren</span>
                </div>

                {activeTopic.vocabBullets.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1.5 hover:border-amber-400/35 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] text-amber-300 font-bold">
                        {v.german}
                      </span>
                      <button
                        onClick={() => handleCopyPhrase(v.german, idx)}
                        className="p-1 rounded-lg text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
                        title="In Zwischenablage kopieren"
                      >
                        {copiedPhraseIndex === idx ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {v.english}
                    </div>
                    <p className="text-[11px] text-slate-200 italic font-serif">
                      &bdquo;{v.context}&ldquo;
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: DACH-KULTURRAUM & DEBATTEN */}
            {activeTab === "kultur" && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/25 space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Kultureller DACH-Schwerpunkt ({activeTopic.culturalSpotlight.region})
                  </span>
                  <h4 className="text-xs font-bold text-white">
                    {activeTopic.culturalSpotlight.title}
                  </h4>
                  <p className="text-[11px] text-slate-200 leading-relaxed font-sans">
                    {activeTopic.culturalSpotlight.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-bold block flex items-center gap-1.5">
                    <MessageSquareQuote className="w-3.5 h-3.5" />
                    Leitdebatten für Paper 1 &amp; Mündliche Prüfung (IO)
                  </span>
                  <ul className="space-y-2 text-[11px] text-slate-300">
                    {activeTopic.keyDebates.map((deb, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-mono text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{deb}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 4: EIGENE NOTIZEN & SCRATCHPAD */}
            {activeTab === "notizen" && (
              <AcademicNotesSurface
                note={userNote}
                onChange={(text) => setTopicNote(activeTopic.id, text)}
                title="Themen-Notizen & DACH-Glossen"
                itemCode={activeTopic.displayCode}
                accentColor="#f59e0b"
                minRows={8}
              />
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
