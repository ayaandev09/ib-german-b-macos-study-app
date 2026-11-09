export interface TestDafModule {
  id: "lesen" | "hoeren" | "schreiben" | "sprechen";
  name: string;
  duration: string;
  structure: string[];
  tips: string[];
}

export interface TestDafTask {
  id: string;
  module: "lesen" | "hoeren" | "schreiben" | "sprechen";
  title: string;
  prompt: string;
  /** Reading passage or listening script (read aloud / shown as text). */
  text?: string;
  questions?: { q: string; options: string[]; answer: number }[];
  prepSeconds?: number;
  speakSeconds?: number;
  usefulPhrases?: string[];
}

export const TESTDAF_INFO = {
  note:
    "Aufbau nach dem klassischen TestDaF (4 Teile, Niveau TDN 3–5 = B2.2–C1). Das Format wurde zuletzt überarbeitet. Prüfe Zeiten und Aufgabenzahl vor der Prüfung auf testdaf.de.",
  levels: [
    { tdn: "TDN 3", cefr: "B2.2", meaning: "Mindestniveau für viele Studiengänge" },
    { tdn: "TDN 4", cefr: "C1.1", meaning: "Voller Hochschulzugang an den meisten Unis" },
    { tdn: "TDN 5", cefr: "C1.2", meaning: "Höchstes Niveau" },
  ],
};

export const TESTDAF_MODULES: TestDafModule[] = [
  {
    id: "lesen",
    name: "Leseverstehen",
    duration: "ca. 60 Min.",
    structure: [
      "Teil 1: Kurze Texte, Zuordnung (Überschriften / Aussagen)",
      "Teil 2: Längerer wissenschaftsnaher Text, Richtig / Falsch / Text sagt dazu nichts",
      "Teil 3: Text mit Zuordnungsaufgabe (Aussagen den Absätzen zuordnen)",
    ],
    tips: [
      "Lies zuerst die Aufgaben, dann den Text.",
      "Markiere Schlüsselwörter und suche Synonyme im Text, nicht wörtliche Treffer.",
      "„Text sagt dazu nichts“ ist eine echte Antwort. Nichts hineindeuten.",
    ],
  },
  {
    id: "hoeren",
    name: "Hörverstehen",
    duration: "ca. 40 Min.",
    structure: [
      "Teil 1: Kurzes Gespräch im Hochschulalltag, wird einmal gehört",
      "Teil 2: Interview oder Diskussion, wird einmal gehört",
      "Teil 3: Wissenschaftlicher Vortrag, wird zweimal gehört",
    ],
    tips: [
      "Nutze die Lesezeit, um die Fragen zu verstehen.",
      "Notiere Zahlen, Namen und Gegensätze („aber“, „dagegen“).",
      "Bleib nicht an einer verpassten Antwort hängen.",
    ],
  },
  {
    id: "schreiben",
    name: "Schriftlicher Ausdruck",
    duration: "ca. 60 Min.",
    structure: [
      "Eine Aufgabe: Grafik beschreiben und auswerten",
      "Dann ein Thema mit eigener Argumentation erörtern",
      "Etwa 200 bis 250 Wörter insgesamt, klare Gliederung nötig",
    ],
    tips: [
      "Gliedere: Einleitung, Grafik beschreiben, Pro und Contra, eigene Meinung, Schluss.",
      "Benutze Konnektoren (zwar … aber, dennoch, folglich, einerseits … andererseits).",
      "Kontrolliere am Ende Artikel, Kasus und Verbposition im Nebensatz.",
    ],
  },
  {
    id: "sprechen",
    name: "Mündlicher Ausdruck",
    duration: "ca. 35 Min. (7 Aufgaben)",
    structure: [
      "Aufgaben 1–2: Beratung und Information im Alltag",
      "Aufgaben 3–4: Grafik beschreiben und Vermutungen äußern",
      "Aufgaben 5–7: Meinung begründen, Stellung nehmen, Vorschlag machen",
    ],
    tips: [
      "Sprich in vollständigen Sätzen und strukturiere mit Redemitteln.",
      "Nutze die Vorbereitungszeit für Stichpunkte, nicht für ganze Sätze.",
      "Eine Pause ist besser als ein Satzabbruch. Korrigiere dich ruhig.",
    ],
  },
];

export const TESTDAF_TASKS: TestDafTask[] = [
  {
    id: "les-1",
    module: "lesen",
    title: "Lesen: Studium im Ausland",
    prompt: "Lies den Text und wähle die richtige Antwort.",
    text:
      "Immer mehr Studierende verbringen ein Semester im Ausland. Laut einer Umfrage nennen die meisten als Hauptgrund die Verbesserung ihrer Sprachkenntnisse. Erst danach folgen berufliche Vorteile. Kritiker bemängeln allerdings, dass ein Auslandssemester die Studienzeit verlängern kann, weil nicht alle Leistungen anerkannt werden. Universitäten reagieren darauf mit festen Austauschprogrammen, bei denen die Anerkennung vorab geklärt wird.",
    questions: [
      {
        q: "Was ist laut Text der wichtigste Grund für ein Auslandssemester?",
        options: ["Berufliche Vorteile", "Bessere Sprachkenntnisse", "Kürzere Studienzeit"],
        answer: 1,
      },
      {
        q: "Welches Problem nennen Kritiker?",
        options: [
          "Hohe Kosten im Ausland",
          "Die Studienzeit kann länger werden",
          "Zu wenige Programme",
        ],
        answer: 1,
      },
      {
        q: "Wie reagieren Universitäten?",
        options: [
          "Sie verbieten Auslandssemester",
          "Sie klären die Anerkennung vorab in Austauschprogrammen",
          "Sie verkürzen das Studium",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "hoe-1",
    module: "hoeren",
    title: "Hören: Gespräch in der Beratung",
    prompt:
      "Lies das Skript laut vor oder lass es von einer Person vorlesen, ohne mitzulesen. Beantworte danach die Fragen.",
    text:
      "Studentin: Guten Tag, ich möchte mich für den Sprachkurs im Herbst anmelden. Berater: Die Anmeldung läuft bis zum fünfzehnten August, aber der Kurs ist fast voll. Sie sollten sich also schnell entscheiden. Studentin: Muss ich einen Test machen? Berater: Ja, einen kurzen Einstufungstest. Er findet am zweiten September statt.",
    questions: [
      {
        q: "Bis wann läuft die Anmeldung?",
        options: ["Bis 2. September", "Bis 15. August", "Bis Oktober"],
        answer: 1,
      },
      {
        q: "Was muss die Studentin tun?",
        options: ["Einen Einstufungstest machen", "Nichts", "Zwei Kurse buchen"],
        answer: 0,
      },
    ],
  },
  {
    id: "sch-1",
    module: "schreiben",
    title: "Schreiben: Grafik und Erörterung",
    prompt:
      "Thema: Soziale Medien im Studium. Beschreibe eine Statistik (z. B. 70 % der Studierenden nutzen soziale Medien zum Lernen, 30 % empfinden sie als Ablenkung). Nenne dann Vor- und Nachteile und gib deine Meinung. Schreibe etwa 200 bis 250 Wörter.",
    usefulPhrases: [
      "Die Grafik zeigt, dass …",
      "Einerseits … andererseits …",
      "Dennoch darf man nicht vergessen, dass …",
      "Meiner Meinung nach überwiegen die Vorteile, da …",
      "Zusammenfassend lässt sich sagen, dass …",
    ],
  },
  {
    id: "spr-1",
    module: "sprechen",
    title: "Sprechen 1: Beratung",
    prompt:
      "Du möchtest dein Studienfach wechseln. Bitte einen Studienberater um Rat. Erkläre deine Situation und stelle zwei Fragen.",
    prepSeconds: 30,
    speakSeconds: 60,
    usefulPhrases: [
      "Ich würde gern wissen, ob …",
      "Könnten Sie mir erklären, wie …",
      "Ich überlege, mein Fach zu wechseln, weil …",
    ],
  },
  {
    id: "spr-2",
    module: "sprechen",
    title: "Sprechen 2: Grafik beschreiben",
    prompt:
      "Beschreibe eine Grafik, die zeigt, wie Studierende ihre Zeit aufteilen (Lernen 35 %, Job 25 %, Freizeit 40 %). Sage, was dir auffällt, und vermute Gründe.",
    prepSeconds: 60,
    speakSeconds: 90,
    usefulPhrases: [
      "Die Grafik gibt Auskunft über …",
      "Am größten ist der Anteil von …",
      "Ein möglicher Grund dafür könnte sein, dass …",
    ],
  },
  {
    id: "spr-3",
    module: "sprechen",
    title: "Sprechen 3: Stellung nehmen",
    prompt:
      "„Universitäten sollten Anwesenheitspflicht abschaffen.“ Nimm Stellung. Begründe deine Meinung mit mindestens zwei Argumenten.",
    prepSeconds: 60,
    speakSeconds: 120,
    usefulPhrases: [
      "Ich bin der Ansicht, dass …",
      "Ein wichtiges Argument dafür ist …",
      "Dagegen spricht allerdings, dass …",
      "Abschließend möchte ich sagen, dass …",
    ],
  },
];
