"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathFormulaProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

export function MathFormula({
  formula,
  displayMode = true,
  className = "",
}: MathFormulaProps) {
  const html = useMemo(() => {
    try {
      const cleanFormula = formula.trim();
      return katex.renderToString(cleanFormula, {
        displayMode,
        throwOnError: false,
        strict: false,
      });
    } catch (err) {
      console.error("KaTeX rendering error:", err);
      return null;
    }
  }, [formula, displayMode]);

  if (!html) {
    return (
      <code className={`font-mono text-amber-300 ${className}`}>
        {formula}
      </code>
    );
  }

  return (
    <div
      className={`katex-formula-wrapper overflow-x-auto select-all py-1 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
