"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { LiquidGlassLogo } from "./liquid-glass-logo";

const APP_LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0ibm9uZSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImRlR29sZEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmJiZjI0IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI2Y1OWUwYiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZDk3NzA2IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZGVDcmltc29uR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmODcxNzEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjZWY0NDQ0IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNiOTFjMWMiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJkZUFtYmVyQXVyYSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y1OWUwYiIgc3RvcC1vcGFjaXR5PSIwLjQiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNjAlIiBzdG9wLWNvbG9yPSIjYjQ1MzA5IiBzdG9wLW9wYWNpdHk9IjAuMTUiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIiAvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZGVPYnNpZGlhbkdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMWUyOTNiIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0MCIgZmlsbD0idXJsKCNkZUFtYmVyQXVyYSkiIC8+CiAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSIyMzAiIGZpbGw9IiMwZDBhMDYiIHN0cm9rZT0idXJsKCNkZUdvbGRHcmFkKSIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2Utb3BhY2l0eT0iMC45NSIgLz4KICA8Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjIxNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmJiZjI0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjggOCIgc3Ryb2tlLW9wYWNpdHk9IjAuNjUiIC8+CiAgPHBvbHlnb24gcG9pbnRzPSIyNTYsNzAgNDIwLDE1MCA0MjAsMzYyIDI1Niw0NDIgOTIsMzYyIDkyLDE1MCIgZmlsbD0idXJsKCNkZU9ic2lkaWFuR3JhZCkiIHN0cm9rZT0idXJsKCNkZUdvbGRHcmFkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgogIDxwYXRoIGQ9Ik0gMTYwIDIxMCBMIDM1MiAyMTAiIHN0cm9rZT0iIzBmMTcyYSIgc3Ryb2tlLXdpZHRoPSIxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogIDxwYXRoIGQ9Ik0gMTYwIDI1NiBMIDM1MiAyNTYiIHN0cm9rZT0idXJsKCNkZUNyaW1zb25HcmFkKSIgc3Ryb2tlLXdpZHRoPSIxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogIDxwYXRoIGQ9Ik0gMTYwIDMwMiBMIDM1MiAzMDIiIHN0cm9rZT0idXJsKCNkZUdvbGRHcmFkKSIgc3Ryb2tlLXdpZHRoPSIxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogIDxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iNjQiIGZpbGw9IiMwODA3MDUiIHN0cm9rZT0idXJsKCNkZUdvbGRHcmFkKSIgc3Ryb2tlLXdpZHRoPSI0IiAvPgogIDx0ZXh0IHg9IjI1NiIgeT0iMjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmJiZjI0IiBmb250LXNpemU9IjgyIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9InNlcmlmIiBsZXR0ZXItc3BhY2luZz0iMC4wNWVtIj5CPC90ZXh0PgogIDxwb2x5Z29uIHBvaW50cz0iMjU2LDk2IDI2NiwxMTYgMjU2LDEzNiAyNDYsMTE2IiBmaWxsPSIjZmJiZjI0IiAvPgo8L3N2Zz4=";

interface CinematicStartupIntroProps {
  isOpen?: boolean;
  onClose?: () => void;
  onComplete?: () => void;
}

export const CinematicStartupIntro: React.FC<CinematicStartupIntroProps> = ({
  isOpen = true,
  onClose,
  onComplete,
}) => {
  const isDismissingRef = useRef(false);

  const handleDismiss = useCallback(() => {
    if (isDismissingRef.current) return;
    isDismissingRef.current = true;
    onClose?.();
    onComplete?.();
  }, [onClose, onComplete]);

  // Automatic dismiss after the liquid glass simulation finishes (~4.5s)
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      handleDismiss();
    }, 4500);
    return () => clearTimeout(timer);
  }, [isOpen, handleDismiss]);

  // Keyboard shortcut listener (Space, Enter, Esc)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleDismiss]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      }}
      onClick={handleDismiss}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 select-none bg-[#0b0906] overflow-hidden cursor-pointer"
      style={{
        background: "radial-gradient(circle at 50% 50%, #1e160a 0%, #120e07 50%, #0b0906 100%)",
      }}
    >
      {/* Center Liquid Glass Logo Animation */}
      <div className="relative w-full max-w-3xl flex flex-col items-center justify-center pointer-events-none">
        <div className="w-full h-72 sm:h-80 flex items-center justify-center">
          <LiquidGlassLogo
            logo={APP_LOGO_SVG}
            mark="logo"
            text="DEUTSCH B"
            ending="wordmark"
            fontSize={48}
            fontFamily="'Cinzel', 'Times New Roman', Georgia, serif"
            fontWeight={800}
            letterSpacing={0.08}
            theme="dark"
            logoColor="original"
            logoRelief={0.8}
            textColor="#fef3c7"
            tileColor="#19140a"
            background="transparent"
            depth={1.3}
            dispersion={1.15}
            relief={1.0}
            caustics={1.35}
            highlights={1.25}
            bloom={0.55}
            speed={1.0}
            loop={false}
            style={{ background: "transparent" }}
            className="w-full h-full"
          />
        </div>

        {/* Elegant Minimalist Wordmark Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-col items-center gap-1.5 text-center"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-amber-300 uppercase">
              LITERATUR & SPRACHE · IB DIPLOM PROGRAMM
            </span>
          </div>
          <p className="text-xs text-amber-200/50 font-serif italic">
            Themenbereiche · Texttypen · Grammatik · Wortschatz
          </p>
        </motion.div>
      </div>

      {/* Subtle Bottom Skip Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 text-center pointer-events-none"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          Click anywhere or press Space to continue
        </span>
      </motion.div>
    </motion.div>
  );
};

export default CinematicStartupIntro;
