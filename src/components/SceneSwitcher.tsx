"use client";

import React, { useState } from "react";
import { IB_THEMES, ALL_SUBTOPICS } from "@/data/themes";
import { useGermanStudyStore } from "@/store/useGermanStudyStore";

export function SceneSwitcher() {
  const { activeTopicId, setActiveTopic, completedTopics } = useGermanStudyStore();
  const active = ALL_SUBTOPICS.find((t) => t.id === activeTopicId) ?? ALL_SUBTOPICS[0];
  const [themeId, setThemeId] = useState<string>(active.themeId);
  const theme = IB_THEMES.find((t) => t.id === themeId) ?? IB_THEMES[0];

  return (
    <div className="glass-tint tint-amber rounded-3xl p-4 space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {IB_THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => setThemeId(t.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
              t.id === themeId ? "bg-amber-500 text-slate-950" : "bg-white/8 text-slate-300 hover:bg-white/15"
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {theme.subtopics.map((t) => {
          const isActive = t.id === active.id;
          const done = completedTopics.includes(t.id);
          return (
            <button
              key={t.id}
              onClick={() => setActiveTopic(t.id)}
              title={t.title}
              className={`px-3 py-1.5 rounded-xl text-xs cursor-pointer border transition-colors ${
                isActive
                  ? "bg-amber-400/25 border-amber-300/70 text-white font-semibold"
                  : done
                    ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-100"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/12"
              }`}
            >
              {t.displayCode}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-slate-400 truncate">{active.title}</p>
    </div>
  );
}
