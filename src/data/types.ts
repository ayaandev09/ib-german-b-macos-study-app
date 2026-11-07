export type ThemeId =
  | "identitaeten"
  | "erfahrungen"
  | "genialitaet"
  | "organisation"
  | "planet";

export interface Subtopic {
  id: string;
  themeId: ThemeId;
  code: string; // e.g. "1.1"
  displayCode: string; // "T1.1"
  title: string;
  englishTitle: string;
  level: "SL / HL" | "HL Focus";
  overview: string;
  keyDebates: string[];
  vocabBullets: { german: string; english: string; context: string }[];
  culturalSpotlight: {
    title: string;
    region: "Deutschland" | "Österreich" | "Schweiz" | "DACH-Raum";
    description: string;
  };
  sampleEssayPrompts: {
    prompt: string;
    textTypeSuggestion: string;
    register: string;
  }[];
}

export interface IBTheme {
  id: ThemeId;
  themeNumber: number;
  title: string;
  englishTitle: string;
  color: string;
  accentClass: string;
  iconName: string;
  description: string;
  subtopics: Subtopic[];
}

export type GrammarCategory =
  | "faelle_praepositionen"
  | "zeiten_modi"
  | "passiv"
  | "satzbau_konnektoren"
  | "adjektive"
  | "pronomen_komposita";

export interface GrammarPoint {
  id: string;
  category: GrammarCategory;
  categoryTitle: string;
  code: string; // "G1.1"
  title: string;
  englishTitle: string;
  cefrLevel: "B1" | "B2" | "C1" | "B1/B2" | "B2/C1";
  englishExplanation: string;
  whenToUseEnglish: string;
  level: "SL / HL" | "HL Focus";
  importance: "CRITICAL FOUNDATION" | "CRITERION A BOOSTER" | "HIGH-SCORING NUANCE";
  ruleExplanation: string;
  formula: string;
  latexFormula: string;
  syntaxSteps?: { label: string; formula: string; description: string }[];
  cheatTable?: {
    headers: string[];
    rows: string[][];
  };
  examples: {
    german: string;
    english: string;
    highlight: string;
    cefrTag?: string;
  }[];
  commonMistakes: string[];
  criterionATip: string;
}

export type TextTypeCategory =
  | "journalistisch"
  | "persoenlich"
  | "oeffentlich"
  | "reflektierend";

export interface Textsorte {
  id: string;
  title: string;
  englishTitle: string;
  category: TextTypeCategory;
  recommendedLength: string;
  register: string;
  targetAudience: string;
  purpose: string;
  mandatoryConventions: string[];
  structureBlueprint: {
    section: string;
    description: string;
    essentialPhrases: string[];
  }[];
  sampleTemplate: string;
  criterionCChecklist: string[];
}

export interface RedemittelItem {
  id: string;
  category:
    | "meinung"
    | "abwaegung"
    | "ursache_folge"
    | "beispiel_vertiefung"
    | "einleitung_schluss"
    | "muendliche_pruefung";
  categoryLabel: string;
  phrase: string;
  englishMeaning: string;
  exampleSentence: string;
  tier: "Standard (B1)" | "High-Scoring (B2/C1)" | "Idiomatic Mastery";
}

export interface LiteraryWork {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  historicalContext: string;
  centralThemes: string[];
  plotSummary: string;
  keyCharacters: {
    name: string;
    role: string;
    symbolism: string;
  }[];
  pivotalQuotes: {
    quote: string;
    speakerOrContext: string;
    analysis: string;
  }[];
  oralExamGuidance: {
    presentationFocus: string;
    sampleDiscussionQuestions: string[];
  };
}

export interface ExamCriterion {
  id: string;
  code: string;
  name: string;
  maxMarks: number;
  description: string;
  bands: {
    marks: string;
    descriptor: string;
  }[];
}
