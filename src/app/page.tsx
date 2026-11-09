"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { TopCommandBar } from "@/components/TopCommandBar";
import { GermanSidebar } from "@/components/GermanSidebar";
import { GermanRightInspector } from "@/components/GermanRightInspector";
import { ThemesBentoView } from "@/components/ThemesBentoView";
import { GrammarLabView } from "@/components/GrammarLabView";
import { TextsortenVaultView } from "@/components/TextsortenVaultView";
import { RedemittelDossierView } from "@/components/RedemittelDossierView";
import { ExamMasteryView } from "@/components/ExamMasteryView";
import { TestDafView } from "@/components/TestDafView";
import { LiteratureOralLabView } from "@/components/LiteratureOralLabView";
import { CinematicStartupIntro } from "@/components/CinematicStartupIntro";
import { AmbientAuroraCanvas } from "@/components/AmbientAuroraCanvas";
import { WidgetBridge } from "@/components/WidgetBridge";
import { StudyMiniHomepage } from "@/components/StudyMiniHomepage";
import { ImmersiveAppWalkthrough } from "@/components/ImmersiveAppWalkthrough";
import { TimedExamSprintModal } from "@/components/TimedExamSprintModal";
import { KeyboardShortcutsModal } from "@/components/KeyboardShortcutsModal";
import { JellySpotlightModal } from "@/components/JellySpotlightModal";
import { useGermanStudyStore, GermanNavMode } from "@/store/useGermanStudyStore";
import { initGlobalTactileListener } from "@/lib/tactileHaptics";

export default function IBGermanBStudyDashboardPage() {
  const {
    viewMode,
    setViewMode,
    toggleInspector,
    toggleExamSprint,
    isExamSprintActive,
    closeExamSprint,
    isShortcutsOpen,
    setIsShortcutsOpen,
    openSpotlight,
    academicStyle,
  } = useGermanStudyStore();

  const [isStartupActive, setIsStartupActive] = useState(true);
  const [showMainUI, setShowMainUI] = useState(false);
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);

  const handleStartupComplete = useCallback(() => {
    setIsStartupActive(false);
    setShowMainUI(true);
    if (typeof window !== "undefined") {
      const hasSeen = localStorage.getItem("hasSeenAppWalkthrough_german_v1");
      if (!hasSeen) {
        setIsWalkthroughOpen(true);
      }
    }
  }, []);

  // Synchronize dynamic scholarly typography
  useEffect(() => {
    if (typeof document !== "undefined") {
      const activeFont = academicStyle || "jakarta";
      document.documentElement.setAttribute("data-academic-font", activeFont);
      document.documentElement.setAttribute("data-handwritten-style", activeFont);
    }
  }, [academicStyle]);

  // Activate tactile button feedback
  useEffect(() => {
    const cleanup = initGlobalTactileListener();
    return cleanup;
  }, []);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + I: Inspector
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        toggleInspector();
      }
      // Cmd/Ctrl + E: Exam Sprint
      else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "e") {
        e.preventDefault();
        toggleExamSprint();
      }
      // ?: Shortcuts Cheatsheet
      else if (
        e.key === "?" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
      }
      // Number keys 1-6 for quick tab switching
      else if (
        !e.metaKey &&
        !e.ctrlKey &&
        ["1", "2", "3", "4", "5", "6"].includes(e.key) &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)
      ) {
        const modes: GermanNavMode[] = [
          "themen",
          "grammatik",
          "textsorten",
          "redemittel",
          "pruefung",
          "literatur",
          "testdaf",
        ];
        const idx = parseInt(e.key, 10) - 1;
        if (modes[idx]) {
          setViewMode(modes[idx]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleInspector, toggleExamSprint, setIsShortcutsOpen, setViewMode]);

  return (
    <div className="relative min-h-screen w-full bg-[#060402] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-100 overflow-x-hidden">
      {/* Background Animated Ambient Aurora Blobs */}
      <AmbientAuroraCanvas />
      {/* Real-time WidgetKit Sync Bridge */}
      <WidgetBridge />

      {/* Main 3-Column macOS Dashboard Shell */}
      <div
        className={`relative z-10 w-full max-w-[1720px] mx-auto p-2.5 sm:p-4 flex gap-4 xl:gap-5 items-start transition-opacity duration-700 mac-dashboard-shell ${
          showMainUI ? "app-revealed opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Column: Syllabus Sidebar */}
        <GermanSidebar />

        {/* Middle Column: Top Command Bar & Active Study View */}
        <main
          data-tour="main-workspace"
          className="flex-1 min-w-0 w-full pb-36 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ containerType: "inline-size" }}
        >
          {/* Top Command Bar */}
          <TopCommandBar
            onOpenWalkthrough={() => setIsWalkthroughOpen(true)}
            onOpenDiagnostics={() => setIsStartupActive(true)}
          />

          {/* Mini Homepage & Live Widget Telemetry Hub (Macbeth Match) */}
          <StudyMiniHomepage />

          {/* Active View Container */}
          <div className="space-y-4">
            {viewMode === "themen" && <ThemesBentoView />}
            {viewMode === "grammatik" && <GrammarLabView />}
            {viewMode === "textsorten" && <TextsortenVaultView />}
            {viewMode === "redemittel" && <RedemittelDossierView />}
            {viewMode === "pruefung" && <ExamMasteryView />}
            {viewMode === "literatur" && <LiteratureOralLabView />}
            {viewMode === "testdaf" && <TestDafView />}
          </div>
        </main>

        {/* Right Column: Analytical Inspector */}
        <GermanRightInspector />
      </div>

      {/* Startup Diagnostic Intro Sequence */}
      <AnimatePresence>
        {isStartupActive && (
          <CinematicStartupIntro onComplete={handleStartupComplete} />
        )}
      </AnimatePresence>

      {/* Interactive Walkthrough Tour */}
      <ImmersiveAppWalkthrough
        isOpen={isWalkthroughOpen}
        onClose={() => setIsWalkthroughOpen(false)}
      />

      {/* Timed Exam Sprint Simulation Modal (⌘E) */}
      <TimedExamSprintModal
        isOpen={isExamSprintActive}
        onClose={closeExamSprint}
      />

      {/* Global Keyboard Shortcuts Cheatsheet Modal (?) */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        onOpenTour={() => setIsWalkthroughOpen(true)}
      />

      {/* Instant Spotlight Search Modal (⌘K) */}
      <JellySpotlightModal />
    </div>
  );
}
