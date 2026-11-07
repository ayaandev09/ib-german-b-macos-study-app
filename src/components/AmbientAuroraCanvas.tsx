"use client";

import React from "react";

export function AmbientAuroraCanvas() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Lightweight GPU-composited static ambient vignettes (Zero CPU, Zero RAF overhead) */}
      <div
        className="absolute -top-36 -left-32 w-[520px] h-[520px] rounded-full opacity-22 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.24) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute top-[32%] -right-36 w-[480px] h-[480px] rounded-full opacity-18 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute -bottom-36 left-[22%] w-[520px] h-[520px] rounded-full opacity-16 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
