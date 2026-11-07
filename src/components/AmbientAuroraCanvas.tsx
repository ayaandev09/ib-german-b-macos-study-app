"use client";

import React from "react";

export function AmbientAuroraCanvas() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Lightweight GPU-composited ambient vignettes with slow floating aurora animations */}
      <div
        className="absolute -top-36 -left-32 w-[540px] h-[540px] rounded-full opacity-25 pointer-events-none animate-aurora-slow-1"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.26) 0%, transparent 70%)",
          filter: "blur(65px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute top-[28%] -right-36 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none animate-aurora-slow-2"
        style={{
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.20) 0%, transparent 70%)",
          filter: "blur(70px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute -bottom-36 left-[20%] w-[540px] h-[540px] rounded-full opacity-18 pointer-events-none animate-aurora-slow-3"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, transparent 70%)",
          filter: "blur(70px)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
