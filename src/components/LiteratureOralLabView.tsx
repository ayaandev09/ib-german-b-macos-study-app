"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Compass,
  MessageSquare,
  Quote,
  Clock,
  Award,
  ChevronRight,
  Sparkles,
  Users,
} from "lucide-react";
import { LITERARY_WORKS } from "@/data/literature";
import { LiteraryWork } from "@/data/types";

export function LiteratureOralLabView() {
  const [subView, setSubView] = useState<"literature" | "io_guide">("literature");
  const [selectedWork, setSelectedWork] = useState<LiteraryWork>(LITERARY_WORKS[0]);

  return (
    <div className="space-y-4 liquid-view-enter">
      {/* Sub-navigation Pills */}
      <div className="flex items-center gap-1.5 pb-1">
        <button
          onClick={() => setSubView("literature")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            subView === "literature"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
              : "liquid-glass-pill text-slate-400 hover:text-white"
          }`}
        >
          <BookOpenCheck className="w-3.5 h-3.5" />
          <span>HL Literatur (4 Werke)</span>
        </button>

        <button
          onClick={() => setSubView("io_guide")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            subView === "io_guide"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
              : "liquid-glass-pill text-slate-400 hover:text-white"
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Individual Oral (IO) Prüfungs-Guide</span>
        </button>
      </div>

      {subView === "literature" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column: 4 Literary Works Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {LITERARY_WORKS.map((work) => {
              const isSelected = selectedWork.id === work.id;
              return (
                <motion.div
                  key={work.id}
                  whileHover={{ x: 2 }}
                  onClick={() => setSelectedWork(work)}
                  className={`p-4 rounded-3xl border transition-all cursor-pointer text-left relative overflow-hidden ${
                    isSelected
                      ? "bg-amber-500/20 border-amber-400/50 shadow-lg text-white"
                      : "bg-slate-900/40 border-white/10 hover:border-white/20 text-slate-300"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-amber-400 block mb-1">
                    {work.year} • {work.genre}
                  </span>
                  <h3 className="text-base font-bold text-white mb-0.5">
                    {work.title}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium mb-2">
                    {work.author}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {work.centralThemes.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Deep Dossier (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="liquid-glass-bento rounded-3xl p-5 sm:p-6 border border-amber-400/35 shadow-2xl space-y-5 text-left relative overflow-hidden">
              {/* Specular Radial Glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-amber-500/30" />
              {/* Header */}
              <div className="pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
                  HL PFLICHTLITERATUR • {selectedWork.genre} ({selectedWork.year})
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {selectedWork.title}
                </h2>
                <p className="text-xs text-amber-300 font-medium">
                  von {selectedWork.author}
                </p>
              </div>

              {/* Historical Context */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                  Historischer & Kultureller Kontext
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/5 p-3.5 rounded-2xl border border-white/5">
                  {selectedWork.historicalContext}
                </p>
              </div>

              {/* Plot Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                  Handlungsabriss & Konfliktlinie
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-black/40 p-3.5 rounded-2xl border border-white/5">
                  {selectedWork.plotSummary}
                </p>
              </div>

              {/* Key Characters */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Zentrale Figuren & Symbolische Bedeutung
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedWork.keyCharacters.map((char, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1"
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="font-bold text-amber-300 text-xs">
                          {char.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {char.role}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight">
                        {char.symbolism}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pivotal Quotes */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Schlüsselzitate & Analyse
                </h4>
                <div className="space-y-2">
                  {selectedWork.pivotalQuotes.map((q, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-1.5"
                    >
                      <p className="text-xs sm:text-sm font-serif italic text-amber-200">
                        {q.quote}
                      </p>
                      <span className="text-[10px] font-mono text-slate-400 block">
                        Kontext: {q.speakerOrContext}
                      </span>
                      <p className="text-[11px] text-slate-300 pt-1 border-t border-white/5">
                        <span className="text-amber-400 font-bold">Analyse: </span>
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Oral Exam Questions */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-amber-400/30 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Leitfragen für die Mündliche Prüfung (IO):</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  {selectedWork.oralExamGuidance.sampleDiscussionQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {subView === "io_guide" && (
        <div className="p-5 sm:p-7 rounded-3xl bg-slate-900/70 border border-amber-400/30 shadow-xl space-y-6 text-left">
          {/* IO Header */}
          <div className="pb-3 border-b border-white/10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
              INDIVIDUAL ORAL ASSESSMENT • 25% DER GESAMTNOTE
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Der Leitfaden zur Mündlichen Prüfung (SL & HL)
            </h2>
            <p className="text-xs text-amber-300 font-medium">
              Struktur, Zeitmanagement und Prüfungsstrategien für maximale Punkte in Kriterien A, B1, B2 & C.
            </p>
          </div>

          {/* 3 Phases of the Oral Exam */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Teil 1: Präsentation (3–4 Min.)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>SL:</strong> Beschreibung und Interpretation eines von zwei zugelosten Farbfotos mit Kulturbezug zum DACH-Raum.<br />
                <strong>HL:</strong> Analyse eines 300-Wort-Auszugs aus einem der beiden gelesenen literarischen Werke.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Teil 2: Nachfragen (4–5 Min.)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Der Prüfer stellt vertiefende Fragen zur Präsentation. Jetzt gilt es, Argumente zu erweitern, Nuancen zu begründen und sprachliche Flexibilität zu beweisen.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Teil 3: Allgemeines Gespräch (5–6 Min.)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Freies Gespräch über mindestens ein weiteres der 5 IB-Pflichtthemen. Spontane Reaktionen, eigene Beispiele und interkulturelle Vergleiche zur eigenen Heimat.
              </p>
            </div>
          </div>

          {/* Golden Rules for 7 in IO */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
              Die 5 Goldenen Regeln für Bestnoten in der Mündlichen Prüfung:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">1.</span>
                <span><strong>DACH-Kulturbezug:</strong> Nennen Sie stets konkrete Beispiele aus Deutschland, Österreich oder der Schweiz (z.B. Mülltrennung, Vereinswesen, duale Ausbildung).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">2.</span>
                <span><strong>Interaktive Kompetenz:</strong> Haken Sie nach, wenn Sie eine Frage nicht verstanden haben („Könnten Sie die Frage bitte umformulieren?“ statt stummes Schweigen!).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">3.</span>
                <span><strong>Grammatische Vielfalt:</strong> Flechten Sie gezielt Konjunktiv II („Ich an dieser Stelle würde...“) und Passivkonstruktionen ein.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">4.</span>
                <span><strong>Eigener Standpunkt:</strong> Bleiben Sie nicht bei reiner Bildbeschreibung stehen; interpretieren Sie die tiefere gesellschaftliche Botschaft!</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
