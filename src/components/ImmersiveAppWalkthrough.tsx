"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  X,
  Sparkles,
  Zap,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";

interface TourStep {
  targetId: string;
  title: string;
  subtitle: string;
  description: string;
  preferredPosition: "bottom" | "top" | "left" | "right";
}

const TOUR_STEPS: TourStep[] = [
  {
    targetId: "command-bar",
    title: "Die Befehlsleiste & Suche",
    subtitle: "Zentrale Steuerung (⌘K, ⌘E, ⌘I)",
    description:
      "Wechsle zwischen 'Lernen' und 'Wiederholen', starte zeitgestoppte Prüfungssprints (⌘E) oder durchsuche den gesamten Lehrplan blitzschnell mit der Spotlight-Suche (⌘K).",
    preferredPosition: "bottom",
  },
  {
    targetId: "nav-tabs",
    title: "Die 6 Master-Bereiche",
    subtitle: "Themen, Grammatik, Textsorten & mehr",
    description:
      "Navigiere nahtlos durch die 5 IB-Pflichtthemen, die Grammatik-Matrix mit 18 Regeln, die Paper 1 Textsorten-Vorlagen, das Redemittel-Dossier und das HL Literatur-Studio.",
    preferredPosition: "bottom",
  },
  {
    targetId: "syllabus-sidebar",
    title: "Themen- & Lehrplan-Navigator",
    subtitle: "5 Themen • 25 Pflichtbereiche",
    description:
      "Behalte alle 25 offiziellen Subthemen im Blick, filtere nach Einheiten und verfolge deinen Lernfortschritt mit Live-Häkchen.",
    preferredPosition: "right",
  },
  {
    targetId: "main-workspace",
    title: "Interaktiver Arbeitsbereich",
    subtitle: "Bento-Karten, Grammatik-Labor & Vorlagen",
    description:
      "Tauche tief in interaktive Übersichten ein: Kulturelle Spotlights aus Deutschland, Österreich und der Schweiz (DACH), Wortschatzboxen und Prüfungsfragen.",
    preferredPosition: "top",
  },
  {
    targetId: "analytical-inspector",
    title: "Analytischer Inspektor",
    subtitle: "Fortschritt, Redemittel & Oral-Timer (⌘I)",
    description:
      "Überwache deine Gesamtreife, greife sofort auf B2/C1-Redemittel zu und übe die mündliche Prüfung (IO) mit dem integrierten Präsentations-Timer.",
    preferredPosition: "left",
  },
];

interface ImmersiveAppWalkthroughProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImmersiveAppWalkthrough({ isOpen, onClose }: ImmersiveAppWalkthroughProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const { setStudyGoal, setViewMode } = useGermanStudyStore();

  const step = TOUR_STEPS[currentStepIndex];

  // Update target rect on step change or resize
  useEffect(() => {
    if (!isOpen || isCompleted) return;

    const updateRect = () => {
      const el = document.querySelector(`[data-tour="${step.targetId}"]`);
      if (el) {
        const rect = el.getBoundingClientRect();
        setTargetRect(rect);
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        setTargetRect(null);
      }
    };

    updateRect();
    const handleResize = () => updateRect();
    window.addEventListener("resize", handleResize);
    const interval = setInterval(updateRect, 300);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [isOpen, currentStepIndex, step?.targetId, isCompleted]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        if (currentStepIndex < TOUR_STEPS.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
        } else {
          setIsCompleted(true);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentStepIndex > 0) {
          setCurrentStepIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentStepIndex, onClose]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const finishWithPosture = (posture: "learn" | "revise") => {
    setStudyGoal(posture);
    if (typeof window !== "undefined") {
      localStorage.setItem("hasSeenAppWalkthrough_german_v1", "true");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto">
      {/* Target Focus Highlight Beam (if rect available and not completed) */}
      {!isCompleted && targetRect && (
        <motion.div
          layoutId="tourSpotlightBox"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          style={{
            position: "absolute",
            top: targetRect.top - 6,
            left: targetRect.left - 6,
            width: targetRect.width + 12,
            height: targetRect.height + 12,
            borderRadius: 20,
            boxShadow: "0 0 0 9999px rgba(2, 3, 8, 0.85)",
            border: "2px solid rgba(245, 158, 11, 0.8)",
            zIndex: 51,
            pointerEvents: "none",
          }}
          className="animate-pulse"
        />
      )}

      {/* Fallback backdrop if rect not found or completed */}
      {(!targetRect || isCompleted) && (
        <div className="fixed inset-0 bg-[#020308]/85 backdrop-blur-md z-50" />
      )}

      {/* Content Container */}
      <div className="relative z-52 w-full h-full flex items-center justify-center p-4 pointer-events-none">
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md p-6 rounded-3xl bg-[#0b1120] border border-amber-400/50 shadow-2xl backdrop-blur-2xl pointer-events-auto text-left relative overflow-hidden"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
                    <Compass className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase">
                    SCHRITT {currentStepIndex + 1} VON {TOUR_STEPS.length}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  title="Tour beenden (Esc)"
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-xl font-bold text-white mb-1 tracking-tight">
                {step.title}
              </h2>
              <p className="text-xs font-medium text-amber-300/80 mb-3">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Step Dots & Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {TOUR_STEPS.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentStepIndex
                          ? "w-6 bg-amber-400"
                          : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  {currentStepIndex > 0 && (
                    <button
                      onClick={handleBack}
                      className="px-3 py-1.5 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer active:scale-95"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer active:scale-95"
                  >
                    <span>
                      {currentStepIndex === TOUR_STEPS.length - 1
                        ? "Fertigstellen"
                        : "Weiter"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Celebration Finale Modal */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0b1120] border border-amber-400/50 shadow-2xl backdrop-blur-2xl pointer-events-auto text-center relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-red-500/20 border border-amber-400/50 mx-auto flex items-center justify-center p-3 mb-4 shadow-lg text-amber-300">
                <Sparkles className="w-8 h-8" />
              </div>

              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
                EINFÜHRUNG ABGESCHLOSSEN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                Du bist bereit für die Bestnote!
              </h2>
              <p className="text-sm text-slate-300 mb-6 max-w-md mx-auto leading-relaxed">
                Der German B Master Codex steht dir vollumfänglich zur Verfügung. Wähle deinen bevorzugten Lernmodus für den heutigen Tag:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {/* Mode 1: Deep Study */}
                <button
                  onClick={() => finishWithPosture("learn")}
                  className="p-4 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-left transition-all cursor-pointer active:scale-95 group"
                >
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                    <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Tiefenstudium</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    Schrittweises Erlernen der 25 Themen mit Vokabeln, Grammatik-Regeln und DACH-Hintergründen.
                  </p>
                </button>

                {/* Mode 2: Revision Cram */}
                <button
                  onClick={() => finishWithPosture("revise")}
                  className="p-4 rounded-2xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-400/40 text-left transition-all cursor-pointer active:scale-95 group"
                >
                  <div className="flex items-center gap-2 text-orange-300 font-bold text-sm mb-1">
                    <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Prüfungs-Sprint</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    Gezielte Prüfungsvorbereitung, Paper 1 Textsorten, B2/C1-Redemittel und Oral Exam Training.
                  </p>
                </button>
              </div>

              <button
                onClick={() => finishWithPosture("learn")}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer transition-colors"
              >
                Direkt zur Themenübersicht
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
