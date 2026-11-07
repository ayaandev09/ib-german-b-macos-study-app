import React from "react";

export function IBGermanAppLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="deGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="deCrimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="deObsidianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Hexagonal Shield Background */}
      <polygon
        points="50,6 90,26 90,74 50,94 10,74 10,26"
        fill="url(#deObsidianGrad)"
        stroke="url(#deGoldGrad)"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Inner Decorative Shield Borders */}
      <polygon
        points="50,14 82,30 82,70 50,86 18,70 18,30"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.12"
        strokeWidth="1.5"
      />

      {/* German Tricolor Bars Stylized Diagonal Slashes */}
      <path
        d="M26,36 L74,36"
        stroke="#0f172a"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M26,48 L74,48"
        stroke="url(#deCrimsonGrad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M26,60 L74,60"
        stroke="url(#deGoldGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        filter="url(#glowGold)"
      />

      {/* Center Gothic Fraktur / Scholarly 'B' Lettermark */}
      <circle cx="50" cy="48" r="18" fill="#030712" stroke="url(#deGoldGrad)" strokeWidth="2" />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="22"
        fontWeight="bold"
        fontFamily="serif"
        letterSpacing="0.05em"
      >
        B
      </text>

      {/* Top Academic Diamond Spark */}
      <polygon points="50,10 53,16 50,22 47,16" fill="#fbbf24" />
    </svg>
  );
}
