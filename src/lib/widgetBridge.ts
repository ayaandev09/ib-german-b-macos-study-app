"use client";

import { ALL_SUBTOPICS, IB_THEMES } from "@/data/themes";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";

export type WidgetSyncTrigger =
  | "init"
  | "flip"
  | "topic-complete"
  | "navigation"
  | "heartbeat"
  | "force"
  | "state-change"
  | "native-load";

interface NativeMessageHandler {
  postMessage: (payload: unknown) => void;
}

function writeWidgetData(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const jsonString = JSON.stringify(payload);

  const handler = (
    window as unknown as {
      webkit?: { messageHandlers?: { studySync?: NativeMessageHandler } };
    }
  ).webkit?.messageHandlers?.studySync;

  if (handler) {
    try {
      handler.postMessage(jsonString);
    } catch (err) {
      console.warn("[WidgetBridge] Failed to postMessage:", err);
    }
  }

  try {
    window.localStorage.setItem("widget_data", jsonString);
    window.localStorage.setItem("study_widget_german", jsonString);
  } catch {
    // LocalStorage fallback
  }
}

export function syncWidgetSnapshot(trigger: WidgetSyncTrigger = "init") {
  const state = useGermanStudyStore.getState();
  const activeSubtopic =
    ALL_SUBTOPICS.find((t) => t.id === state.activeTopicId) || ALL_SUBTOPICS[0];
  const activeTheme =
    IB_THEMES.find((theme) => theme.id === activeSubtopic.themeId) || IB_THEMES[0];
  const currentIndex = ALL_SUBTOPICS.findIndex(
    (t) => t.id === activeSubtopic.id
  );
  const nextSubtopic =
    currentIndex >= 0 && currentIndex < ALL_SUBTOPICS.length - 1
      ? ALL_SUBTOPICS[currentIndex + 1]
      : null;

  const completed = (state.completedTopics || []).length;
  const total = ALL_SUBTOPICS.length || 25;
  const masteryPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const spotlight = activeSubtopic?.culturalSpotlight;
  const quoteOrFormula = spotlight
    ? `${spotlight.title} (${spotlight.region})`
    : "Subjekt + Verb + Dativ (Wem) + Akkusativ (Wen/Was)";

  const prompt = activeSubtopic?.sampleEssayPrompts?.[0];
  const examTip = prompt
    ? `${prompt.textTypeSuggestion} · ${prompt.register}`
    : "Paper 1 Textsorten: Für formelle E-Mails stets 'Sehr geehrte Damen und Herren' verwenden.";

  writeWidgetData({
    appId: "german",
    appTitle: "BERLIN // DACH",
    subjectBadge: "IB GERMAN B SL/HL",
    iconSystemName: "character.book.closed.fill",
    subjectName: "IB German B SL/HL",
    activeUnit: `Thema ${activeTheme?.themeNumber || 1}: ${activeTheme?.title || "Identitäten"}`,
    activeTopicTitle: activeSubtopic?.title || "Lebensstile, Ernährung & Wohlbefinden",
    activeRevisionModule: `${activeSubtopic?.displayCode || "T1.1"} · ${activeSubtopic?.title || ""}`,
    nextTopicTitle: nextSubtopic?.title || "Lehrplan vollständig abgeschlossen",
    completedTopics: completed,
    totalTopics: total,
    masteryPercentage,
    remainingMinutes: 25,
    highlightQuoteOrFormula: quoteOrFormula,
    examTip: examTip,
    accentColorHex: "#F59E0B",
    secondaryColorHex: "#EF4444",
    telemetryTag: "DACH B2 • SYNCED",
    trigger,
    lastUpdated: Date.now() / 1000 - 978307200,
  });
}

if (typeof window !== "undefined") {
  (window as unknown as { __syncStudyWidget?: (trigger?: string) => void }).__syncStudyWidget = (t) => {
    syncWidgetSnapshot((t as WidgetSyncTrigger) || "init");
  };
}
