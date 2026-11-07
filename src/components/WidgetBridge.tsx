"use client";

import { useEffect, useRef } from "react";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";
import { syncWidgetSnapshot } from "@/lib/widgetBridge";

export function WidgetBridge() {
  const lastStateKeyRef = useRef<string>("");

  useEffect(() => {
    // 1. Initial snapshot on mount
    syncWidgetSnapshot("init");

    // 2. React to store updates with instant push
    const unsubscribe = useGermanStudyStore.subscribe((currState) => {
      const activeId = currState.activeTopicId;
      const completedCount = (currState.completedTopics || []).length;
      const stateKey = `${activeId}:${completedCount}`;

      if (stateKey !== lastStateKeyRef.current) {
        lastStateKeyRef.current = stateKey;
        syncWidgetSnapshot("state-change");
      }
    });

    // 3. Heartbeat sync every 3 seconds to guarantee desktop widget freshness
    const heartbeat = setInterval(() => {
      syncWidgetSnapshot("heartbeat");
    }, 3000);

    return () => {
      unsubscribe();
      clearInterval(heartbeat);
    };
  }, []);

  return null;
}
