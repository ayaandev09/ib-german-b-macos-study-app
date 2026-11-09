"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Mic, Square, Copy, Check, RotateCcw } from "lucide-react";
import {
  TESTDAF_INFO,
  TESTDAF_MODULES,
  TESTDAF_TASKS,
  TestDafTask,
} from "@/data/testdaf";

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((e: any) => void) | null;
  onerror: ((e: any) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

/** Light cleanup: capitalise sentences, tidy spaces, ensure final punctuation. */
function cleanTranscript(raw: string): string {
  const t = raw.replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").trim();
  if (!t) return "";
  const sentences = t
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1));
  let out = sentences.join(" ");
  if (!/[.!?]$/.test(out)) out += ".";
  return out;
}

function WordCount({ text }: { text: string }) {
  const n = text.trim() ? text.trim().split(/\s+/).length : 0;
  return <span className="text-xs text-slate-400">{n} Wörter</span>;
}

function TaskCard({ task }: { task: TestDafTask }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [draft, setDraft] = useState("");
  const storeKey = `testdaf-draft-${task.id}`;

  useEffect(() => {
    try {
      setDraft(localStorage.getItem(storeKey) || "");
    } catch {}
  }, [storeKey]);
  useEffect(() => {
    try {
      localStorage.setItem(storeKey, draft);
    } catch {}
  }, [draft, storeKey]);

  return (
    <div className="liquid-glass rounded-2xl p-4 mb-3 border border-white/10">
      <h4 className="font-semibold text-amber-300 mb-1">{task.title}</h4>
      <p className="text-sm text-slate-200 mb-2">{task.prompt}</p>
      {task.text && (
        <p className="text-sm text-slate-300 bg-white/5 rounded-xl p-3 mb-3 leading-relaxed">
          {task.text}
        </p>
      )}
      {task.questions?.map((q, qi) => (
        <div key={qi} className="mb-2">
          <p className="text-sm text-slate-100 mb-1">
            {qi + 1}. {q.q}
          </p>
          <div className="flex flex-wrap gap-2">
            {q.options.map((o, oi) => {
              const sel = picked[qi] === oi;
              const right = checked && oi === q.answer;
              const wrong = checked && sel && oi !== q.answer;
              return (
                <button
                  key={oi}
                  onClick={() => !checked && setPicked({ ...picked, [qi]: oi })}
                  className={`text-xs px-3 py-1.5 rounded-full border cursor-pointer ${
                    right
                      ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-200"
                      : wrong
                        ? "bg-rose-500/20 border-rose-400/50 text-rose-200"
                        : sel
                          ? "bg-amber-500/20 border-amber-400/50 text-amber-200"
                          : "bg-white/5 border-white/10 text-slate-300"
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {task.questions && (
        <button
          onClick={() => (checked ? (setChecked(false), setPicked({})) : setChecked(true))}
          className="mt-2 text-xs px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 cursor-pointer"
        >
          {checked ? "Zurücksetzen" : "Antworten prüfen"}
        </button>
      )}
      {task.usefulPhrases && (
        <ul className="text-xs text-slate-400 mt-2 list-disc pl-5">
          {task.usefulPhrases.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      {task.module === "schreiben" && (
        <div className="mt-3">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="Schriftlicher Ausdruck Entwurf"
            placeholder="Schreibe hier deinen Text …"
            className="w-full min-h-[180px] rounded-xl bg-black/30 border border-white/10 p-3 text-sm text-slate-100"
          />
          <WordCount text={draft} />
        </div>
      )}
      {task.module === "sprechen" && <SpeakingRecorder task={task} />}
    </div>
  );
}

function SpeakingRecorder({ task }: { task: TestDafTask }) {
  const [recording, setRecording] = useState(false);
  const [phase, setPhase] = useState<"idle" | "prep" | "speak">("idle");
  const [secs, setSecs] = useState(0);
  const [finalText, setFinalText] = useState("");
  const [interim, setInterim] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const recRef = useRef<SpeechRecognitionLike | null>(null);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const wantRef = useRef(false);

  const supported = useMemo(
    () =>
      typeof window !== "undefined" &&
      !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition),
    [],
  );

  // countdown timer
  useEffect(() => {
    if (phase === "idle") return;
    const id = setInterval(() => setSecs((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "idle" || secs > 0) return;
    if (phase === "prep") {
      setPhase("speak");
      setSecs(task.speakSeconds ?? 60);
      void beginRecording();
    } else {
      stopAll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secs, phase]);

  useEffect(() => () => stopAll(), []);

  async function beginRecording() {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const mr = new MediaRecorder(stream);
      mr.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mr.mimeType || "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
      };
      mr.start();
      mediaRef.current = mr;
      setRecording(true);
    } catch {
      setError(
        "Kein Zugriff auf das Mikrofon. Erlaube den Zugriff in den Systemeinstellungen (Datenschutz → Mikrofon).",
      );
    }
    const Ctor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!Ctor) return;
    const rec: SpeechRecognitionLike = new Ctor();
    rec.lang = "de-DE";
    rec.continuous = true;
    rec.interimResults = true;
    wantRef.current = true;
    rec.onresult = (e: any) => {
      let fin = "";
      let tmp = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) fin += r[0].transcript + " ";
        else tmp += r[0].transcript;
      }
      if (fin) setFinalText((p) => (p + " " + fin).trim());
      setInterim(tmp);
    };
    rec.onerror = (e: any) => {
      if (e?.error === "not-allowed" || e?.error === "service-not-allowed") {
        wantRef.current = false;
        setError(
          "Spracherkennung ist nicht erlaubt. Du kannst trotzdem aufnehmen und das Transkript unten selbst tippen.",
        );
      }
    };
    rec.onend = () => {
      if (wantRef.current) {
        try {
          rec.start();
        } catch {}
      }
    };
    try {
      rec.start();
      recRef.current = rec;
    } catch {}
  }

  function stopAll() {
    wantRef.current = false;
    try {
      recRef.current?.stop();
    } catch {}
    if (mediaRef.current && mediaRef.current.state !== "inactive") mediaRef.current.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
    setRecording(false);
    setPhase("idle");
    setInterim("");
  }

  function start() {
    setFinalText("");
    setAudioUrl(null);
    if (task.prepSeconds) {
      setPhase("prep");
      setSecs(task.prepSeconds);
    } else {
      setPhase("speak");
      setSecs(task.speakSeconds ?? 60);
      void beginRecording();
    }
  }

  const cleaned = cleanTranscript(finalText);

  return (
    <div className="mt-3 border-t border-white/10 pt-3">
      <div className="flex items-center gap-2 flex-wrap">
        {phase === "idle" ? (
          <button
            onClick={start}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 cursor-pointer"
          >
            <Mic className="w-3.5 h-3.5" /> Aufnahme starten
          </button>
        ) : (
          <button
            onClick={stopAll}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 cursor-pointer"
          >
            <Square className="w-3.5 h-3.5" /> Stopp
          </button>
        )}
        {phase !== "idle" && (
          <span className="text-xs text-slate-300">
            {phase === "prep" ? "Vorbereitung" : recording ? "Aufnahme läuft" : "Sprechzeit"}: {Math.max(secs, 0)} s
          </span>
        )}
        {!supported && (
          <span className="text-xs text-slate-400">
            Automatische Spracherkennung ist hier nicht verfügbar. Tippe das Transkript selbst.
          </span>
        )}
      </div>
      {error && <p className="text-xs text-rose-300 mt-2">{error}</p>}
      {audioUrl && <audio controls src={audioUrl} className="mt-2 w-full h-9" />}
      <label className="block text-xs text-slate-400 mt-3 mb-1">
        Transkript (bearbeitbar)
      </label>
      <textarea
        value={finalText + (interim ? " " + interim : "")}
        onChange={(e) => setFinalText(e.target.value)}
        aria-label="Transkript"
        className="w-full min-h-[110px] rounded-xl bg-black/30 border border-white/10 p-3 text-sm text-slate-100"
      />
      {cleaned && (
        <div className="mt-2 rounded-xl bg-emerald-500/10 border border-emerald-400/20 p-3">
          <p className="text-xs text-emerald-300 mb-1">Sauberes Transkript</p>
          <p className="text-sm text-slate-100">{cleaned}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(cleaned);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                } catch {}
              }}
              className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />} Kopieren
            </button>
            <button
              onClick={() => {
                setFinalText("");
                setAudioUrl(null);
              }}
              className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Neu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function TestDafView() {
  const [moduleId, setModuleId] = useState<string>("lesen");
  const mod = TESTDAF_MODULES.find((m) => m.id === moduleId)!;
  const tasks = TESTDAF_TASKS.filter((t) => t.module === moduleId);

  return (
    <div className="p-1 sm:p-2 overflow-y-auto h-full">
      <h2 className="text-xl font-bold text-white mb-1">TestDaF Vorbereitung (C1)</h2>
      <p className="text-xs text-slate-400 mb-3">{TESTDAF_INFO.note}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {TESTDAF_INFO.levels.map((l) => (
          <div key={l.tdn} className="text-xs rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 text-slate-300">
            <b className="text-amber-300">{l.tdn}</b> · {l.cefr} · {l.meaning}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4" role="tablist">
        {TESTDAF_MODULES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={m.id === moduleId}
            onClick={() => setModuleId(m.id)}
            className={`text-sm px-4 py-1.5 rounded-full border cursor-pointer ${
              m.id === moduleId
                ? "bg-amber-500/20 border-amber-400/50 text-amber-200"
                : "bg-white/5 border-white/10 text-slate-300"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>
      <div className="liquid-glass rounded-2xl p-4 mb-4 border border-white/10">
        <h3 className="font-semibold text-white">
          {mod.name} <span className="text-xs text-slate-400">· {mod.duration}</span>
        </h3>
        <p className="text-xs text-amber-300 mt-2 mb-1">Aufbau</p>
        <ul className="text-sm text-slate-200 list-disc pl-5">
          {mod.structure.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="text-xs text-amber-300 mt-3 mb-1">Strategien</p>
        <ul className="text-sm text-slate-200 list-disc pl-5">
          {mod.tips.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <h3 className="text-sm font-semibold text-slate-200 mb-2">Übungen</h3>
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} />
      ))}
    </div>
  );
}
