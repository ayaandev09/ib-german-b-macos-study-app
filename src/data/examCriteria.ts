import { ExamCriterion } from "./types";

export const EXAM_CRITERIA_PAPER1: ExamCriterion[] = [
  {
    id: "p1-crit-a",
    code: "Kriterium A",
    name: "Sprache (Language)",
    maxMarks: 12,
    description: "Bewertet die Beherrschung von Grammatik, Syntax, Vokabular und Rechtschreibung.",
    bands: [
      {
        marks: "10–12",
        descriptor:
          "Hervorragende Sprachbeherrschung. Sehr reicher, differenzierter Wortschatz. Komplexe Satzstrukturen (Passiv, Konjunktiv II, zweiteilige Konnektoren) werden weitgehend fehlerfrei und stilsicher eingesetzt. Seltene Flüchtigkeitsfehler beeinträchtigen das Verständnis in keiner Weise.",
      },
      {
        marks: "7–9",
        descriptor:
          "Gute Sprachbeherrschung. Passender Wortschatz mit einigen anspruchsvollen Wendungen. Ausgewogene Mischung aus einfachen und komplexen Sätzen. Gelegentliche Grammatik- oder Kasusfehler stören den Lesefluss kaum.",
      },
      {
        marks: "4–6",
        descriptor:
          "Grundlegende Sprachbeherrschung. Ausreichender Grundwortschatz, aber wenig stilistische Vielfalt. Häufige Fehler bei Kasus, Adjektivendungen oder Satzstellung behindern stellenweise das Verständnis.",
      },
      {
        marks: "1–3",
        descriptor:
          "Sehr eingeschränkte Sprachbeherrschung. Elementare Fehler in fast jedem Satz. Starker Einfluss der Muttersprache.",
      },
    ],
  },
  {
    id: "p1-crit-b",
    code: "Kriterium B",
    name: "Botschaft (Message)",
    maxMarks: 12,
    description: "Bewertet die inhaltliche Relevanz, Entwicklung der Argumente und Kohärenz.",
    bands: [
      {
        marks: "10–12",
        descriptor:
          "Alle Aspekte der Aufgabenstellung werden tiefgründig und überzeugend entwickelt. Klare gedankliche Progression mit hervorragenden Begründungen und kulturellen Beispielen aus dem DACH-Raum. Nahtlose logische Verknüpfung der Absätze.",
      },
      {
        marks: "7–9",
        descriptor:
          "Die Aufgabenstellung wird weitgehend vollständig und klar bearbeitet. Die meisten Ideen sind gut begründet und logisch strukturiert. Sinnvolle Gliederung in Absätze.",
      },
      {
        marks: "4–6",
        descriptor:
          "Die Aufgabenstellung wird nur teilweise oder oberflächlich bearbeitet. Einige Ideen sind unklar oder wiederholen sich. Mäßige Strukturierung.",
      },
      {
        marks: "1–3",
        descriptor:
          "Thema verfehlt oder kaum relevante Ideen entwickelt. Unzusammenhängende Gedankenfragmente.",
      },
    ],
  },
  {
    id: "p1-crit-c",
    code: "Kriterium C",
    name: "Konzeptuelles Verständnis (Conceptual Understanding)",
    maxMarks: 6,
    description: "Bewertet Textsortenkonventionen, Register, Adressatenbezug und Zweck des Textes.",
    bands: [
      {
        marks: "5–6",
        descriptor:
          "Die gewählte Textsorte wird perfekt beherrscht. Alle formalen Konventionen (Überschrift, Anrede, Datum, Register, Schlussformel) sind vorbildlich umgesetzt. Das Register (Du vs. Sie) ist der Zielgruppe und dem Zweck ideal angepasst.",
      },
      {
        marks: "3–4",
        descriptor:
          "Die Textsorte ist eindeutig erkennbar und die wichtigsten Konventionen sind vorhanden. Das Register ist weitgehend angemessen, weist aber kleinere Brüche auf.",
      },
      {
        marks: "1–2",
        descriptor:
          "Wesentliche Textsortenmerkmale fehlen. Unpassendes Register (z.B. Vermischung von Du und Sie im selben Brief).",
      },
    ],
  },
];

export const EXAM_OVERVIEW = {
  components: [
    {
      name: "Paper 1 (Schreiben / Productive Skills)",
      weighting: "SL: 25% | HL: 25%",
      duration: "SL: 1 Std. 15 Min. (250–400 Wörter) | HL: 1 Std. 30 Min. (450–600 Wörter)",
      format: "Auswahl aus 3 Aufgaben mit unterschiedlichen Themen und jeweils 3 Textsortenoptionen.",
      maxScore: 30,
    },
    {
      name: "Paper 2 (Lesen & Hören / Receptive Skills)",
      weighting: "SL: 50% | HL: 50%",
      duration: "SL: 1 Std. 45 Min. (Hören: 45 Min., Lesen: 1 Std.) | HL: 2 Std. (Hören: 1 Std., Lesen: 1 Std.)",
      format: "3 Hörtexte und 3 Lesetexte zu den 5 IB-Pflichtthemen mit Multiple Choice, Zuordnungen und Kurzantworten.",
      maxScore: 65,
    },
    {
      name: "Individual Oral (Mündliche Prüfung / IA)",
      weighting: "SL: 25% | HL: 25%",
      duration: "12–15 Minuten (nach 20 Min. Vorbereitungszeit)",
      format: "SL: Präsentation eines Bildimpulses (3–4 Min.) + Diskussion. HL: Präsentation eines 300-Wort-Auszugs aus einem der 2 gelesenen literarischen Werke (3–4 Min.) + Diskussion über Literatur und ein weiteres Thema.",
      maxScore: 30,
    },
  ],
  gradeBoundaries: [
    { grade: 7, range: "83% – 100%", description: "Exzellente Sprachbeherrschung, souveräne Fehlerlosigkeit, tiefgründige Textsortenkompetenz" },
    { grade: 6, range: "71% – 82%", description: "Sehr gute Sprachbeherrschung mit reichem Vokabular und klarer Argumentationslinie" },
    { grade: 5, range: "59% – 70%", description: "Solide Beherrschung des Standarddeutschen, wenige Verständnisprobleme" },
    { grade: 4, range: "47% – 58%", description: "Ausreichende Grundkenntnisse, bestandener Abschluss" },
    { grade: 3, range: "35% – 46%", description: "Unter dem geforderten Niveau, lückenhafte Grammatik" },
  ],
};
