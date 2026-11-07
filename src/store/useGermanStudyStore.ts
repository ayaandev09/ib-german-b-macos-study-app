import { create } from "zustand";
import { ThemeId } from "@/data/types";
import { ALL_SUBTOPICS } from "@/data/themes";
import { GRAMMAR_POINTS } from "@/data/grammar";
import { ALL_TEXTSORTEN } from "@/data/textsorten";

export type GermanNavMode =
  | "themen"
  | "grammatik"
  | "textsorten"
  | "redemittel"
  | "pruefung"
  | "literatur";

export type AcademicStyle = "jakarta" | "newsreader" | "garamond";

interface GermanStudyState {
  // Navigation & View
  viewMode: GermanNavMode;
  setViewMode: (mode: GermanNavMode) => void;
  activeTopicId: string;
  setActiveTopic: (topicId: string) => void;
  activeThemeId: ThemeId;
  setActiveTheme: (themeId: ThemeId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Study posture
  studyGoal: "learn" | "revise";
  setStudyGoal: (goal: "learn" | "revise") => void;

  // Filters
  activeGrammarCategory: string;
  setActiveGrammarCategory: (cat: string) => void;
  activeThemeFilter: string;
  setActiveThemeFilter: (filter: string) => void;

  // Trackers (Progress)
  completedTopics: string[];
  toggleTopicComplete: (topicId: string) => void;
  masteredGrammar: string[];
  toggleGrammarMastered: (grammarId: string) => void;
  practicedTextsorten: string[];
  toggleTextsortePracticed: (textsorteId: string) => void;
  topicNotes: Record<string, string>;
  setTopicNote: (topicId: string, note: string) => void;
  goToPrevTopic: () => void;
  goToNextTopic: () => void;

  // UI Panels
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  isInspectorOpen: boolean;
  toggleInspector: () => void;
  setInspectorOpen: (open: boolean) => void;

  // Modals
  isExamSprintActive: boolean;
  openExamSprint: () => void;
  closeExamSprint: () => void;
  toggleExamSprint: () => void;

  isSpotlightOpen: boolean;
  openSpotlight: () => void;
  closeSpotlight: () => void;

  isShortcutsOpen: boolean;
  setIsShortcutsOpen: (open: boolean | ((prev: boolean) => boolean)) => void;

  // Typography
  academicStyle: AcademicStyle;
  setAcademicStyle: (style: AcademicStyle) => void;

  // Oral Exam Simulator Timer
  oralTimerSeconds: number;
  isOralTimerRunning: boolean;
  startOralTimer: () => void;
  pauseOralTimer: () => void;
  resetOralTimer: (seconds?: number) => void;
  tickOralTimer: () => void;

  // Calculated Progress
  getProgressStats: () => {
    totalTopics: number;
    completedTopicsCount: number;
    totalGrammar: number;
    masteredGrammarCount: number;
    totalTextsorten: number;
    practicedTextsortenCount: number;
    overallPercentage: number;
  };
}

export const useGermanStudyStore = create<GermanStudyState>((set, get) => {
  // Safe SSR initial state
  const isBrowser = typeof window !== "undefined";

  const loadFromStorage = (key: string, fallback: any) => {
    if (!isBrowser) return fallback;
    try {
      const stored = localStorage.getItem(`ib_german_codex_${key}`);
      return stored ? JSON.parse(stored) : fallback;
    } catch {
      return fallback;
    }
  };

  const initialCompletedTopics = loadFromStorage("completedTopics", ["sub-1-1"]);
  const initialMasteredGrammar = loadFromStorage("masteredGrammar", ["g-faelle-grundlagen"]);
  const initialPracticedTextsorten = loadFromStorage("practicedTextsorten", ["artikel"]);

  return {
    viewMode: "themen",
    setViewMode: (mode) => set({ viewMode: mode }),
    activeTopicId: "sub-1-1",
    setActiveTopic: (topicId) => {
      const topic = ALL_SUBTOPICS.find((t) => t.id === topicId);
      if (topic) {
        set({ activeTopicId: topicId, activeThemeId: topic.themeId });
      } else {
        set({ activeTopicId: topicId });
      }
    },
    activeThemeId: "identitaeten",
    setActiveTheme: (themeId) => set({ activeThemeId: themeId }),
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),

    studyGoal: "learn",
    setStudyGoal: (goal) => set({ studyGoal: goal }),

    activeGrammarCategory: "all",
    setActiveGrammarCategory: (cat) => set({ activeGrammarCategory: cat }),
    activeThemeFilter: "all",
    setActiveThemeFilter: (filter) => set({ activeThemeFilter: filter }),

    completedTopics: initialCompletedTopics,
    toggleTopicComplete: (topicId) => {
      set((state) => {
        const exists = state.completedTopics.includes(topicId);
        const next = exists
          ? state.completedTopics.filter((id) => id !== topicId)
          : [...state.completedTopics, topicId];
        if (typeof window !== "undefined") {
          localStorage.setItem("ib_german_codex_completedTopics", JSON.stringify(next));
        }
        return { completedTopics: next };
      });
    },

    masteredGrammar: initialMasteredGrammar,
    toggleGrammarMastered: (grammarId) => {
      set((state) => {
        const exists = state.masteredGrammar.includes(grammarId);
        const next = exists
          ? state.masteredGrammar.filter((id) => id !== grammarId)
          : [...state.masteredGrammar, grammarId];
        if (typeof window !== "undefined") {
          localStorage.setItem("ib_german_codex_masteredGrammar", JSON.stringify(next));
        }
        return { masteredGrammar: next };
      });
    },

    practicedTextsorten: initialPracticedTextsorten,
    toggleTextsortePracticed: (textsorteId) => {
      set((state) => {
        const exists = state.practicedTextsorten.includes(textsorteId);
        const next = exists
          ? state.practicedTextsorten.filter((id) => id !== textsorteId)
          : [...state.practicedTextsorten, textsorteId];
        if (typeof window !== "undefined") {
          localStorage.setItem("ib_german_codex_practicedTextsorten", JSON.stringify(next));
        }
        return { practicedTextsorten: next };
      });
    },

    topicNotes: loadFromStorage("topicNotes", {}),
    setTopicNote: (topicId, note) => {
      set((state) => {
        const next = { ...state.topicNotes, [topicId]: note };
        if (typeof window !== "undefined") {
          localStorage.setItem("ib_german_codex_topicNotes", JSON.stringify(next));
        }
        return { topicNotes: next };
      });
    },

    goToPrevTopic: () => {
      const currentId = get().activeTopicId;
      const idx = ALL_SUBTOPICS.findIndex((s) => s.id === currentId);
      if (idx > 0) {
        const prev = ALL_SUBTOPICS[idx - 1];
        set({ activeTopicId: prev.id, activeThemeId: prev.themeId });
      }
    },

    goToNextTopic: () => {
      const currentId = get().activeTopicId;
      const idx = ALL_SUBTOPICS.findIndex((s) => s.id === currentId);
      if (idx >= 0 && idx < ALL_SUBTOPICS.length - 1) {
        const next = ALL_SUBTOPICS[idx + 1];
        set({ activeTopicId: next.id, activeThemeId: next.themeId });
      }
    },

    sidebarCollapsed: false,
    toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
    setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

    isInspectorOpen: true,
    toggleInspector: () => set((state) => ({ isInspectorOpen: !state.isInspectorOpen })),
    setInspectorOpen: (open) => set({ isInspectorOpen: open }),

    isExamSprintActive: false,
    openExamSprint: () => set({ isExamSprintActive: true }),
    closeExamSprint: () => set({ isExamSprintActive: false }),
    toggleExamSprint: () => set((state) => ({ isExamSprintActive: !state.isExamSprintActive })),

    isSpotlightOpen: false,
    openSpotlight: () => set({ isSpotlightOpen: true }),
    closeSpotlight: () => set({ isSpotlightOpen: false }),

    isShortcutsOpen: false,
    setIsShortcutsOpen: (open) =>
      set((state) => ({
        isShortcutsOpen: typeof open === "function" ? open(state.isShortcutsOpen) : open,
      })),

    academicStyle: "jakarta",
    setAcademicStyle: (style) => set({ academicStyle: style }),

    oralTimerSeconds: 240, // 4 minutes default for presentation part
    isOralTimerRunning: false,
    startOralTimer: () => set({ isOralTimerRunning: true }),
    pauseOralTimer: () => set({ isOralTimerRunning: false }),
    resetOralTimer: (seconds = 240) => set({ oralTimerSeconds: seconds, isOralTimerRunning: false }),
    tickOralTimer: () =>
      set((state) => ({
        oralTimerSeconds: Math.max(0, state.oralTimerSeconds - 1),
      })),

    getProgressStats: () => {
      const state = get();
      const totalTopics = ALL_SUBTOPICS.length;
      const completedTopicsCount = state.completedTopics.length;
      const totalGrammar = GRAMMAR_POINTS.length;
      const masteredGrammarCount = state.masteredGrammar.length;
      const totalTextsorten = ALL_TEXTSORTEN.length;
      const practicedTextsortenCount = state.practicedTextsorten.length;

      const totalItems = totalTopics + totalGrammar + totalTextsorten;
      const completedItems =
        completedTopicsCount + masteredGrammarCount + practicedTextsortenCount;
      const overallPercentage = Math.round((completedItems / totalItems) * 100);

      return {
        totalTopics,
        completedTopicsCount,
        totalGrammar,
        masteredGrammarCount,
        totalTextsorten,
        practicedTextsortenCount,
        overallPercentage,
      };
    },
  };
});
