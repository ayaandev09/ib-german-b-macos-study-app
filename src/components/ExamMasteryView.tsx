"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Clock,
  CheckCircle2,
  Sliders,
  FileCheck2,
} from "lucide-react";
import { EXAM_CRITERIA_PAPER1, EXAM_OVERVIEW } from "@/data/examCriteria";

export function ExamMasteryView() {
  const [critAMark, setCritAMark] = useState<number>(10);
  const [critBMark, setCritBMark] = useState<number>(10);
  const [critCMark, setCritCMark] = useState<number>(5);

  const totalPaper1 = critAMark + critBMark + critCMark;
  const paper1Percentage = Math.round((totalPaper1 / 30) * 100);

  const getEstimatedGrade = (pct: number) => {
    if (pct >= 83) return { grade: 7, label: "Hervorragend (Grade 7)", color: "text-amber-400" };
    if (pct >= 71) return { grade: 6, label: "Sehr Gut (Grade 6)", color: "text-emerald-400" };
    if (pct >= 59) return { grade: 5, label: "Gut (Grade 5)", color: "text-sky-400" };
    if (pct >= 47) return { grade: 4, label: "Bestanden (Grade 4)", color: "text-yellow-400" };
    return { grade: 3, label: "Nicht bestanden (Grade 3)", color: "text-rose-400" };
  };

  const est = getEstimatedGrade(paper1Percentage);

  return (
    <div className="space-y-5 liquid-view-enter text-left">
      {/* Top Banner: Exam Components Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {EXAM_OVERVIEW.components.map((comp, idx) => (
          <div
            key={idx}
            className="p-4 rounded-3xl bg-slate-900/60 border border-white/10 space-y-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                  {comp.weighting}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Max: {comp.maxScore} Pkt.
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {comp.name}
              </h3>
              <p className="text-xs text-amber-300/80 mb-2 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{comp.duration}</span>
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {comp.format}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Score Estimator & Calculator Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-black/50 to-slate-900 border border-amber-400/30 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-0.5">
              INTERAKTIVER PRÄDIKTOR
            </span>
            <h3 className="text-lg font-bold text-white">
              Paper 1 Notenrechner & Kriterien-Simulator
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-2xl font-extrabold font-mono text-white">
                {totalPaper1}/30
              </span>
              <span className="text-xs text-slate-400 block font-mono">
                ({paper1Percentage}%)
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-2xl bg-black/60 border border-amber-400/40">
              <span className={`text-sm font-bold font-mono ${est.color}`}>
                {est.label}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Interactive Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Crit A */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex justify-between font-bold">
              <span className="text-white">Kriterium A (Sprache)</span>
              <span className="font-mono text-amber-300">{critAMark} / 12</span>
            </div>
            <input
              type="range"
              min={0}
              max={12}
              value={critAMark}
              onChange={(e) => setCritAMark(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400 leading-tight">
              Grammatische Genauigkeit, Kasus, Nebensatz-Strukturen und Wortschatzreichtum.
            </p>
          </div>

          {/* Crit B */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex justify-between font-bold">
              <span className="text-white">Kriterium B (Botschaft)</span>
              <span className="font-mono text-amber-300">{critBMark} / 12</span>
            </div>
            <input
              type="range"
              min={0}
              max={12}
              value={critBMark}
              onChange={(e) => setCritBMark(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400 leading-tight">
              Entwicklung der Argumente, Kohärenz, Begründungen und kulturelle DACH-Belege.
            </p>
          </div>

          {/* Crit C */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex justify-between font-bold">
              <span className="text-white">Kriterium C (Konventionen)</span>
              <span className="font-mono text-amber-300">{critCMark} / 6</span>
            </div>
            <input
              type="range"
              min={0}
              max={6}
              value={critCMark}
              onChange={(e) => setCritCMark(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400 leading-tight">
              Einhaltung von Textsortenformat, Register (Du vs. Sie), Adressatenbezug.
            </p>
          </div>
        </div>
      </div>

      {/* Official IB Criteria Bands Table */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/60 border border-white/10 space-y-4">
        <h3 className="text-base font-bold text-white">
          Offizielle IB Notenstufen & Kriterien-Bänder (Paper 1)
        </h3>

        <div className="space-y-3">
          {EXAM_CRITERIA_PAPER1.map((crit) => (
            <div
              key={crit.id}
              className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 mr-2">
                    {crit.code}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {crit.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Max: {crit.maxMarks} Punkte
                </span>
              </div>

              <p className="text-xs text-slate-400">
                {crit.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1">
                {crit.bands.map((band, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] space-y-1"
                  >
                    <span className="font-bold text-amber-300 font-mono block">
                      {band.marks} Punkte
                    </span>
                    <p className="text-slate-300 leading-snug">
                      {band.descriptor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grade Boundaries Reference Table */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
        <h3 className="text-base font-bold text-white">
          Offizielle Notengrenzen (Grade Boundaries)
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 text-amber-300 font-mono text-[11px] border-b border-white/10">
              <tr>
                <th className="p-3 font-bold">IB Note</th>
                <th className="p-3 font-bold">Prozentbereich</th>
                <th className="p-3 font-bold">Qualitatives Profil</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300 text-xs">
              {EXAM_OVERVIEW.gradeBoundaries.map((b, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-mono font-bold text-amber-400">
                    Grade {b.grade}
                  </td>
                  <td className="p-3 font-mono text-slate-200">
                    {b.range}
                  </td>
                  <td className="p-3 text-slate-300">
                    {b.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
