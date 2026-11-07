"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Keyboard,
  X,
  Compass,
  Command,
  Sparkles,
  Type,
} from "lucide-react";
import { useGermanStudyStore, AcademicStyle } from "@/store/useGermanStudyStore";

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTour?: () => void;
}

export function KeyboardShortcutsModal({
  isOpen,
  onClose,
  onOpenTour,
}: KeyboardShortcutsModalProps) {
  const { academicStyle, setAcademicStyle } = useGermanStudyStore();

  if (!isOpen) return null;

  const shortcuts = [
    { key: "⌘K", desc: "Spotlight-Suche (Themen, Grammatik, Textsorten)" },
    { key: "⌘B", desc: "Lehrplan-Seitenleiste ein-/ausklappen" },
    { key: "⌘I", desc: "Analytischen Inspektor ein-/ausklappen" },
    { key: "⌘E", desc: "Timed Exam Sprint Simulation starten" },
    { key: "?", desc: "Dieses Tastenkombinationen-Dossier öffnen" },
    { key: "1 – 6", desc: "Zwischen den 6 Hauptbereichen wechseln" },
    { key: "Esc", desc: "Modale Fenster und Sprints schließen" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020308]/85 backdrop-blur-md select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg rounded-3xl bg-slate-900 border border-amber-400/40 shadow-2xl p-6 text-left relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                APPLE HIG SHORTCUTS
              </span>
              <h3 className="text-base font-bold text-white">
                Tastatur-Kurzbefehle & Schriftart
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Shortcuts Table */}
        <div className="space-y-2 mb-5">
          {shortcuts.map((sc, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs"
            >
              <span className="text-slate-300">{sc.desc}</span>
              <kbd className="px-2 py-0.5 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-300 font-mono font-bold text-[11px]">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Academic Typography Selector */}
        <div className="pt-3 border-t border-white/10 mb-5">
          <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-2">
            Wissenschaftliche Typografie
          </span>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "jakarta", label: "Modern Jakarta", sub: "Sans-Serif" },
              { id: "newsreader", label: "Oxford Newsreader", sub: "Akademische Serif" },
              { id: "garamond", label: "Klassik Garamond", sub: "Feuilleton" },
            ].map((font) => (
              <button
                key={font.id}
                onClick={() => setAcademicStyle(font.id as AcademicStyle)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  academicStyle === font.id
                    ? "bg-amber-500/20 border-amber-400/50 text-white shadow-sm"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                <span className="text-xs font-bold block">{font.label}</span>
                <span className="text-[9px] text-slate-400 block">{font.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Tour Trigger Button */}
        {onOpenTour && (
          <button
            onClick={() => {
              onClose();
              onOpenTour();
            }}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <Compass className="w-4 h-4" />
            <span>Interaktive App-Tour erneut starten</span>
          </button>
        )}
      </motion.div>
    </div>
  );
}
