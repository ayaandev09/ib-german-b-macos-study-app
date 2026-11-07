import { GrammarPoint } from "./types";

export const GRAMMAR_POINTS: GrammarPoint[] = [
  // ========================================================
  // KATEGORIE 1: FÄLLE & PRÄPOSITIONEN
  // ========================================================
  {
    id: "g-faelle-grundlagen",
    category: "faelle_praepositionen",
    categoryTitle: "Fälle & Präpositionen",
    code: "G1.1",
    title: "Die vier Fälle: Das Kasussystem im Überblick",
    englishTitle: "The Four Cases: Complete System Overview",
        cefrLevel: "B1/B2",
    englishExplanation: "Core German Case System: Subject (Nom), Direct Object (Akk), Indirect Object (Dat), Possession (Gen).",
    whenToUseEnglish: "Essential foundation for every written sentence in Paper 1 and spoken response in the IO.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Nom (Subjekt):}} & \\quad \\text{Wer / Was?} \\\\ \\mathbf{\\text{Akk (Dir. Objekt):}} & \\quad \\text{Wen / Was?} \\\\ \\mathbf{\\text{Dat (Indir. Objekt):}} & \\quad \\text{Wem?} \\\\ \\mathbf{\\text{Gen (Besitz):}} & \\quad \\text{Wessen?} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Die deutsche Sprache unterscheidet 4 Fälle (Kasus), die die Funktion eines Nomens im Satz bestimmen: Nominativ (Subjekt), Akkusativ (direktes Objekt), Dativ (indirektes Objekt / Nutznießer) und Genitiv (Besitz / Zugehörigkeit). Der Artikel signalisiert das grammatische Geschlecht (Genus) und den Fall.",
    formula: "Nominativ (Wer/Was?) → Akkusativ (Wen/Was?) → Dativ (Wem?) → Genitiv (Wessen?)",
    cheatTable: {
      headers: ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
      rows: [
        ["Nominativ", "der / ein / kein", "die / eine / keine", "das / ein / kein", "die / - / keine"],
        ["Akkusativ", "den / einen / keinen", "die / eine / keine", "das / ein / kein", "die / - / keine"],
        ["Dativ", "dem / einem / keinem", "der / einer / keiner", "dem / einem / keinem", "den / - / keinen (+n)"],
        ["Genitiv", "des / eines (+s/es)", "der / einer", "des / eines (+s/es)", "der / - / keiner"],
      ],
    },
    examples: [
      {
        german: "Der engagierte Schüler (Nom.) hilft der neuen Mitschülerin (Dat.) bei den Hausaufgaben.",
        english: "The committed student helps the new classmate with homework.",
        highlight: "Der engagierte Schüler ... der neuen Mitschülerin",
      },
      {
        german: "Die Reform des deutschen Bildungssystems (Gen.) betrifft alle Jugendlichen.",
        english: "The reform of the German education system affects all young people.",
        highlight: "des deutschen Bildungssystems",
      },
    ],
    commonMistakes: [
      "Verwechslung von Dativ und Akkusativ bei maskulinen Nomen (z.B. 'Ich sehe dem Mann' statt 'den Mann').",
      "Vergessen des Plural-Dativ-Zusatzes '-n' (z.B. 'mit den Freunden' statt 'mit den Freunde').",
    ],
    criterionATip: "Fehlerfreie Kasusendungen bei Artikeln und Adjektiven sind die absolute Basis für Band 7-8 in Criterion A (Sprache).",
  },
  {
    id: "g-feste-praepositionen",
    category: "faelle_praepositionen",
    categoryTitle: "Fälle & Präpositionen",
    code: "G1.2",
    title: "Feste Präpositionen mit Akkusativ & Dativ",
    englishTitle: "Fixed Prepositions with Accusative & Dative",
        cefrLevel: "B1/B2",
    englishExplanation: "Prepositions that strictly demand either Accusative (DOGFU) or Dative (Aus-Bei-Mit-Nach...).",
    whenToUseEnglish: "Crucial for pre-learned collocations like 'sich engagieren für + Akk.' or 'beitragen zu + Dat.' in formal letters and essays.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Akkusativ (DOGFU):}} & \\quad \\text{durch, für, gegen, ohne, um, bis} \\\\ \\mathbf{\\text{Dativ (Aus-Bei-Mit):}} & \\quad \\text{aus, bei, mit, nach, seit, von, zu} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Bestimmte Präpositionen verlangen ausnahmslos einen festen Fall. Merkregel Akkusativ: DOGFU / FUDOG (für, um, durch, ohne, gegen, bis). Merkregel Dativ: Aus-Bei-Mit-Nach-Seit-Von-Zu-Gegenüber.",
    formula: "Akkusativ: durch, für, gegen, ohne, um, bis | Dativ: aus, bei, mit, nach, seit, von, zu, gegenüber",
    cheatTable: {
      headers: ["Typ", "Feste Präpositionen", "Beispielsatz mit Fall"],
      rows: [
        ["Nur Akkusativ", "bis, durch, für, gegen, ohne, um", "Ohne ein schnelles Internet (Akk.) ist Homeoffice unmöglich."],
        ["Nur Dativ", "aus, bei, mit, nach, seit, von, zu, gegenüber", "Nach der Schule (Dat.) engagiert er sich bei einem Verein (Dat.)."],
      ],
    },
    examples: [
      {
        german: "Wir setzen uns für den Schutz (Akk.) der gefährdeten Umwelt ein.",
        english: "We advocate for the protection of the endangered environment.",
        highlight: "für den Schutz",
      },
      {
        german: "Seit einem ganzen Jahrzehnt (Dat.) boomt die Bio-Branche in Deutschland.",
        english: "For an entire decade, the organic sector has been booming in Germany.",
        highlight: "Seit einem ganzen Jahrzehnt",
      },
    ],
    commonMistakes: [
      "'Seit' mit Akkusativ verwenden (falsch: 'seit einen Monat'; richtig: 'seit einem Monat').",
      "'Wegen' fälschlich mit Dativ in formellen Texten verwenden, wo der Genitiv erwartet wird.",
    ],
    criterionATip: "Kombinieren Sie 'trotz' und 'wegen' mit korrektem Genitiv, um sofort sprachliche Reife zu demonstrieren.",
  },
  {
    id: "g-wechselpraepositionen",
    category: "faelle_praepositionen",
    categoryTitle: "Fälle & Präpositionen",
    code: "G1.3",
    title: "Wechselpräpositionen: Wohin (Akk.) vs. Wo (Dat.)",
    englishTitle: "Two-Way Prepositions: Motion vs. Location",
        cefrLevel: "B1/B2",
    englishExplanation: "Motion towards a destination (Wohin?) triggers Accusative; static stationary location (Wo?) triggers Dative.",
    whenToUseEnglish: "Describing images in the Individual Oral (IO) and setting scenes in diary entries or descriptive articles.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Wohin?}} \\ (\\text{Richtung / Bewegung}) & \\quad \\longrightarrow \\quad \\mathbf{\\text{Akkusativ}} \\\\ \\mathbf{\\text{Wo?}} \\ (\\text{Position / Ruhe}) & \\quad \\longrightarrow \\quad \\mathbf{\\text{Dativ}} \\end{aligned}",
level: "SL / HL",
    importance: "CRITERION A BOOSTER",
    ruleExplanation:
      "Die 9 Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen) verlangen den Akkusativ bei Bewegung oder Richtungswechsel (Frage: Wohin?), aber den Dativ bei statischem Ort oder Zustand (Frage: Wo?).",
    formula: "Wohin? (Aktion / Bewegung) → Akkusativ | Wo? (Position / Ruhe) → Dativ",
    cheatTable: {
      headers: ["Präposition", "Wo? (Dativ: Lage)", "Wohin? (Akkusativ: Richtung)"],
      rows: [
        ["in", "Er lernt in der Bibliothek (Dat.).", "Er geht in die Bibliothek (Akk.)."],
        ["auf", "Das Buch liegt auf dem Tisch (Dat.).", "Er legt das Buch auf den Tisch (Akk.)."],
        ["an", "Das Bild hängt an der Wand (Dat.).", "Sie hängt das Bild an die Wand (Akk.)."],
        ["unter", "Der Hund schläft unter dem Sofa (Dat.).", "Der Ball rollt unter das Sofa (Akk.)."],
      ],
    },
    examples: [
      {
        german: "Viele junge Familien ziehen aus der Stadt auf das Land (Wohin? → Akk.).",
        english: "Many young families move from the city to the countryside.",
        highlight: "auf das Land",
      },
      {
        german: "Auf dem Land (Wo? → Dat.) schätzen sie die Ruhe und Gemeinschaft.",
        english: "In the countryside, they appreciate the peace and community.",
        highlight: "Auf dem Land",
      },
    ],
    commonMistakes: [
      "Verwendung von Akkusativ bei statischen Verben wie 'wohnen' (falsch: 'Ich wohne in die Stadt'; richtig: 'in der Stadt').",
      "Verwechslung der Verbpaare: legen/liegen, stellen/stehen, setzen/sitzen.",
    ],
    criterionATip: "Präzise Verb-Präposition-Paare wie 'legen + Akk.' vs. 'liegen + Dat.' beeindrucken Prüfer in Paper 1 und im Oral Exam.",
  },
  {
    id: "g-genitivpraepositionen",
    category: "faelle_praepositionen",
    categoryTitle: "Fälle & Präpositionen",
    code: "G1.4",
    title: "Genitivpräpositionen: Stilmittel gehobener Texte",
    englishTitle: "Genitive Prepositions: Advanced Academic Style",
        cefrLevel: "B2/C1",
    englishExplanation: "Formal prepositions (trotz, wegen, während, statt) that elevate writing to academic C1 standard.",
    whenToUseEnglish: "Use 'trotz des Klimawandels' or 'während der Konferenz' in Paper 1 argumentative essays to signal advanced academic proficiency.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Präposition}_{\\text{Gen}}} & + \\mathbf{\\text{Nomen}_{\\text{Genitiv}}} \\\\ \\text{Signalwörter:} & \\quad \\text{während, trotz, wegen, statt} \\end{aligned}",
level: "SL / HL",
    importance: "HIGH-SCORING NUANCE",
    ruleExplanation:
      "Präpositionen wie 'während', 'wegen', 'trotz', 'anstatt', 'innerhalb' und 'außerhalb' verlangen im geschriebenen Standarddeutsch den Genitiv. Im gesprochenen Deutsch weicht man oft auf den Dativ aus, was im IB Essay jedoch als stilistische Schwäche gewertet wird.",
    formula: "trotz / wegen / während / anstatt / innerhalb / außerhalb + Genitiv",
    cheatTable: {
      headers: ["Präposition", "Bedeutung", "Akademisches Beispiel"],
      rows: [
        ["trotz", "in spite of / despite", "Trotz des schlechten Wetters (Gen.) demonstrierten Tausende."],
        ["wegen", "because of / due to", "Wegen der steigenden Mietpreise (Gen.) herrscht Unmut."],
        ["während", "during / whilst", "Während der Pandemie (Gen.) stieg die Einsamkeit."],
        ["anstatt", "instead of", "Anstatt eines teuren Autos (Gen.) kauft er ein E-Bike."],
        ["innerhalb", "within / inside", "Innerhalb kürzester Zeit (Gen.) verbreiteten sich Fake News."],
      ],
    },
    examples: [
      {
        german: "Trotz anfänglicher Schwierigkeiten (Gen.) gelang die Integration im Betrieb.",
        english: "Despite initial difficulties, integration at the workplace succeeded.",
        highlight: "Trotz anfänglicher Schwierigkeiten",
      },
      {
        german: "Wegen des rasanten Klimawandels (Gen.) fordern Jugendliche sofortige Reformen.",
        english: "Due to rapid climate change, young people are demanding immediate reforms.",
        highlight: "Wegen des rasanten Klimawandels",
      },
    ],
    commonMistakes: [
      "Umgangssprachlicher Dativ nach wegen (falsch: 'wegen dem Wetter'; richtig: 'wegen des Wetters').",
      "Vergessen der Endung -s oder -es bei maskulinen und neutralen Nomen (z.B. 'des Klimawandels').",
    ],
    criterionATip: "Verwenden Sie mindestens 2-3 Genitivpräpositionen in Ihrem Paper 1, um ein 'varied and sophisticated register' zu belegen.",
  },

  // ========================================================
  // KATEGORIE 2: ZEITEN & MODI
  // ========================================================
  {
    id: "g-perfekt-praeteritum",
    category: "zeiten_modi",
    categoryTitle: "Zeiten & Modi",
    code: "G2.1",
    title: "Perfekt vs. Präteritum: Gesprochene vs. Literarische Vergangenheit",
    englishTitle: "Present Perfect vs. Simple Past",
        cefrLevel: "B1/B2",
    englishExplanation: "Perfekt for conversational speech and informal emails; Präteritum for formal essays, reports, and literature analysis.",
    whenToUseEnglish: "Keep register clean: use Perfekt in informal emails/blogs, but switch to Präteritum when writing formal articles or analyzing HL literature.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Perfekt (Mündlich):}} & \\quad \\mathbf{\\text{haben / sein}}_{[\\text{Präsens}]} + \\dots + \\mathbf{\\text{Partizip II}} \\\\ \\mathbf{\\text{Präteritum (Bericht):}} & \\quad \\mathbf{\\text{Verbstamm}} + \\text{Endung}_{(-te, -test, -ten)} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Im Deutschen wird die Vergangenheit funktional getrennt: Das Perfekt (haben/sein + Partizip II) ist das Standard-Tempus für mündliche Äußerungen, informelle E-Mails, Briefe und Blogs. Das Präteritum ist das Tempus für schriftliche Berichte, literarische Analysen, Zeitungsartikel und formelle Aufsätze. Ausnahme: Die Hilfsverben 'sein', 'haben' und alle Modalverben stehen fast immer im Präteritum (war, hatte, konnte, musste).",
    formula: "Perfekt: haben/sein + Partizip II | Präteritum: Stamm + -te (schwach) / Stammvokalwechsel (stark)",
    cheatTable: {
      headers: ["Aspekt", "Perfekt (Gesprochen / Brief)", "Präteritum (Bericht / Roman)"],
      rows: [
        ["Schwach", "Ich habe gelernt / gearbeitet", "Ich lernte / arbeitete"],
        ["Stark", "Er ist gegangen / hat gesehen", "Er ging / sah"],
        ["Modalverben", "Er hat gekonnt (selten)", "Er konnte / musste / durfte (Standard)"],
        ["sein / haben", "Ich bin gewesen (umständlich)", "Ich war / Ich hatte (Standard)"],
      ],
    },
    examples: [
      {
        german: "Gestern habe ich mit meiner Gastfamilie einen Ausflug gemacht (Blog / Brief).",
        english: "Yesterday I went on an excursion with my host family.",
        highlight: "habe ... gemacht",
      },
      {
        german: "Im 19. Jahrhundert veränderte die Industrialisierung die deutsche Gesellschaft grundlegend (Aufsatz).",
        english: "In the 19th century, industrialization fundamentally transformed German society.",
        highlight: "veränderte",
      },
    ],
    commonMistakes: [
      "Verwendung des falschen Hilfsverbs beim Perfekt (falsch: 'Ich habe gefahren'; richtig: 'Ich bin gefahren' bei Ortswechsel).",
      "Ständiger Tempuswechsel zwischen Präsens, Perfekt und Präteritum im selben Aufsatzabsatz.",
    ],
    criterionATip: "Halten Sie die Tempus-Konsistenz ein: Bleiben Sie in Artikeln und Essays konsequent im Präteritum für Vergangenes.",
  },
  {
    id: "g-plusquamperfekt",
    category: "zeiten_modi",
    categoryTitle: "Zeiten & Modi",
    code: "G2.2",
    title: "Plusquamperfekt & Zeitfolge mit 'nachdem'",
    englishTitle: "Past Perfect & Temporal Clauses with 'nachdem'",
        cefrLevel: "B2/C1",
    englishExplanation: "Narrating events that happened BEFORE another past event in diaries, essays, and stories.",
    whenToUseEnglish: "Narrative essays, personal reflections, diary entries, and chronological reporting in Paper 1.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Plusquamperfekt:}} & \\quad \\mathbf{\\text{hatte / war}}_{[\\text{Prät.}]} + \\dots + \\mathbf{\\text{Partizip II}} \\\\ \\mathbf{\\text{Zeitfolge:}} & \\quad \\text{nachdem} + \\text{PQP} \\ \\implies \\ \\text{Präteritum} \\end{aligned}",
level: "SL / HL",
    importance: "CRITERION A BOOSTER",
    ruleExplanation:
      "Das Plusquamperfekt drückt die Vorvergangenheit aus – eine Handlung, die vor einem anderen Zeitpunkt in der Vergangenheit abgeschlossen war. Es wird mit den Präteritum-Formen von haben/sein (hatte / war) plus Partizip II gebildet. Häufigste Verwendung: In Nebensätzen mit der Konjunktion 'nachdem'.",
    formula: "Nachdem + Subjekt + ... + Partizip II + hatte/war (Nebensatz), + Verb im Präteritum (Hauptsatz)",
    cheatTable: {
      headers: ["Zeitfolge", "Nebensatz (Nachdem: Vorvergangenheit)", "Hauptsatz (Vergangenheit)"],
      rows: [
        ["Vergangenheit", "Nachdem sie das Abitur bestanden hatte,", "reiste sie für ein Jahr nach Australien."],
        ["Gegenwart / Zukunft", "Nachdem er seine Aufgaben beendet hat,", "geht er zum Sport."],
      ],
    },
    examples: [
      {
        german: "Nachdem die Regierung neue Klimaziele verabschiedet hatte, protestierten viele Landwirte.",
        english: "After the government had passed new climate goals, many farmers protested.",
        highlight: "verabschiedet hatte ... protestierten",
      },
      {
        german: "Nachdem er in Berlin angekommen war, suchte er wochenlang nach einer bezahlbaren Bleibe.",
        english: "After he had arrived in Berlin, he searched for weeks for affordable accommodation.",
        highlight: "angekommen war ... suchte",
      },
    ],
    commonMistakes: [
      "Verwendung derselben Zeitform in beiden Sätzen (z.B. 'Nachdem sie ankam, ging sie schlafen' statt 'angekommen war').",
      "Vergessen, dass 'nachdem' als unterordnende Konjunktion das Verb ans Satzende zwingt.",
    ],
    criterionATip: "Ein komplexer Satz mit 'nachdem + Plusquamperfekt' im Aufsatz beweist sofort fortgeschrittenes B2/C1-Niveau.",
  },
  {
    id: "g-konjunktiv-2-gegenwart",
    category: "zeiten_modi",
    categoryTitle: "Zeiten & Modi",
    code: "G2.3",
    title: "Konjunktiv II: Hypothetische Gedanken & Höflichkeit",
    englishTitle: "Subjunctive II: Hypothetical Wishes & Politeness",
        cefrLevel: "B1/B2",
    englishExplanation: "Expressing hypothetical situations ('If I were...', 'I would...'), polite letters, and conditional debates.",
    whenToUseEnglish: "Essential for formal letters ('Ich wäre Ihnen dankbar, wenn...'), policy proposals, and moral debates in the Individual Oral.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Konditional:}} & \\quad \\mathbf{\\text{würde}} + \\dots + \\mathbf{\\text{Infinitiv}} \\\\ \\mathbf{\\text{Stammformen:}} & \\quad \\mathbf{\\text{wäre, hätte, könnte, müsste, sollte}} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Der Konjunktiv II dient zum Ausdruck irrealer Wünsche, hypothetischer Bedingungen ('Was wäre, wenn...?') und höflicher Bitten. Bildung: Bei den meisten Verben mit 'würde + Infinitiv am Satzende'. Bei 'sein' (wäre), 'haben' (hätte) und den Modalverben (könnte, müsste, sollte, dürfte) werden ausnahmslos die Stammformen mit Umlaut verwendet.",
    formula: "Höflich / Hypothese: würde + Infinitiv | Stamm: wäre / hätte / könnte / müsste / sollte",
    cheatTable: {
      headers: ["Verb", "Präsens Indikativ", "Konjunktiv II Form", "Beispielsatz"],
      rows: [
        ["sein", "ich bin / wir sind", "ich wäre / wir wären", "Wenn ich Bürgermeister wäre, würde ich..."],
        ["haben", "ich habe / er hat", "ich hätte / er hätte", "Wenn wir mehr Geld hätten, könnten wir..."],
        ["können", "ich kann / er kann", "ich könnte / er könnte", "Man könnte das Problem leicht lösen."],
        ["müssen", "man muss", "man müsste", "Hier müsste die Politik eingreifen."],
        ["gehen", "ich gehe", "ich würde gehen", "Ich würde sofort zustimmen."],
      ],
    },
    examples: [
      {
        german: "Wenn Schulen mehr in digitale Medien investieren würden, wären die Schüler besser vorbereitet.",
        english: "If schools invested more in digital media, students would be better prepared.",
        highlight: "investieren würden ... wären",
      },
      {
        german: "Ich an Ihrer Stelle würde dieses Angebot sorgfältig prüfen.",
        english: "If I were in your place, I would examine this offer carefully.",
        highlight: "würde ... prüfen",
      },
    ],
    commonMistakes: [
      "'würde sein' oder 'würde haben' schreiben (gilt als unschöner Stil; immer 'wäre' und 'hätte' verwenden).",
      "Vergessen des Umlauts bei Modalverben (falsch: 'Ich konnte Ihnen helfen'; richtig: 'Ich könnte Ihnen helfen').",
    ],
    criterionATip: "Der Konjunktiv II ist im IB Essay unverzichtbar für Empfehlungen, Gegenargumente und Schlusssynthesen.",
  },
  {
    id: "g-konjunktiv-2-vergangenheit",
    category: "zeiten_modi",
    categoryTitle: "Zeiten & Modi",
    code: "G2.4",
    title: "Konjunktiv II der Vergangenheit (Irreale Bedingung)",
    englishTitle: "Subjunctive II in the Past: Counterfactual Conditions",
        cefrLevel: "B2/C1",
    englishExplanation: "Counterfactual Past Subjunctive II expresses what would have happened in the past under different circumstances.",
    whenToUseEnglish: "High-scoring reflection in essays on global issues (e.g. 'Hätte die Politik früher reagiert, wären die Schäden geringer gewesen').",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Irreale Bed.:}} & \\quad \\text{Wenn} \\dots \\mathbf{\\text{Partizip II}} + \\mathbf{\\text{wäre / hätte}} \\\\ \\mathbf{\\text{Hauptsatz:}} & \\quad \\dots \\mathbf{\\text{wäre / hätte}} + \\dots + \\mathbf{\\text{Partizip II}} \\end{aligned}",
level: "SL / HL",
    importance: "CRITERION A BOOSTER",
    ruleExplanation:
      "Drückt aus, was in der Vergangenheit hätte passieren können, aber nicht geschehen ist (Reue, alternative Geschichte, Kritik). Bildung: 'wäre' oder 'hätte' + Partizip II.",
    formula: "Wenn + ... + Partizip II + gewesen wäre / gehabt hätte, + wäre / hätte + ... + Partizip II",
    cheatTable: {
      headers: ["Typ", "Struktur", "Beispiel"],
      rows: [
        ["mit haben", "hätte + Partizip II", "Wenn die Stadt früher reagiert hätte, hätten die Schäden verhindert werden können."],
        ["mit sein", "wäre + Partizip II", "Wäre er pünktlich abgeflogen, wäre er rechtzeitig angekommen."],
      ],
    },
    examples: [
      {
        german: "Wenn die Behörden schneller gehandelt hätten, wäre die Krise vermeidbar gewesen.",
        english: "If the authorities had acted faster, the crisis would have been avoidable.",
        highlight: "gehandelt hätten ... wäre ... gewesen",
      },
    ],
    commonMistakes: [
      "Verwendung von 'würde gehabt haben' (extrem fehlerhaft; korrekt ist 'hätte gehabt').",
    ],
    criterionATip: "Setzen Sie diesen Satzbau in historischen Rückblicken oder literarischen Charakteranalysen ein.",
  },
  {
    id: "g-konjunktiv-1-indirekte-rede",
    category: "zeiten_modi",
    categoryTitle: "Zeiten & Modi",
    code: "G2.5",
    title: "Konjunktiv I: Indirekte Rede in Berichten & Artikeln",
    englishTitle: "Subjunctive I: Indirect Speech for Journalistic Register",
        cefrLevel: "C1",
    englishExplanation: "Journalistic reported speech for quoting experts, reports, and public statements with neutral objectivity.",
    whenToUseEnglish: "Paper 1 News Article (Zeitung / Magazin) and Interview reporting. Using Konjunktiv I virtually guarantees Top Band Criterion A marks.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Stamm}} & + \\text{Endung}_{(-e, -est, -e, -en, -et, -en)} \\\\ \\mathbf{\\text{3. Person Sg:}} & \\quad \\text{er sage, habe, sei, wolle} \\end{aligned}",
level: "HL Focus",
    importance: "HIGH-SCORING NUANCE",
    ruleExplanation:
      "Der Konjunktiv I distanziert den Sprecher von der Aussage Dritter und ist das klassische Stilmittel der Nachrichtensprache und des Qualitätsjournalismus. Er wird vom Präsensstamm gebildet (er habe, er sei, er wisse, er könne). Wenn Konjunktiv I mit dem Indikativ übereinstimmt, weicht man auf den Konjunktiv II aus.",
    formula: "Stamm des Verbs + Endung (-e, -est, -e, -en, -et, -en). Sonderform 'sein': er sei, sie seien.",
    cheatTable: {
      headers: ["Direkte Rede", "Indirekte Rede (Konjunktiv I)", "Bedeutung"],
      rows: [
        ["Der Minister sagt: 'Ich bin zuversichtlich.'", "Der Minister betonte, er sei zuversichtlich.", "Distanzierung / Neutralität"],
        ["Die Forscherin erklärt: 'Wir haben eine Lösung.'", "Sie erklärte, sie hätten eine Lösung (Ersatzform).", "Wissenschaftlicher Bericht"],
      ],
    },
    examples: [
      {
        german: "Der Schulleiter betonte in seiner Rede, die Jugend sei keineswegs unpolitisch.",
        english: "The principal emphasized in his speech that youth was by no means apolitical.",
        highlight: "sei keineswegs unpolitisch",
      },
    ],
    commonMistakes: [
      "Verwendung des normalen Indikativs in journalistischen Texten ('Er sagte, dass er ist glücklich').",
    ],
    criterionATip: "In einem Zeitungsartikel oder Interview für Paper 1 verleiht der Konjunktiv I Ihrem Text sofort echte feuilletonistische Eleganz.",
  },

  // ========================================================
  // KATEGORIE 3: DAS PASSIV
  // ========================================================
  {
    id: "g-vorgangspassiv",
    category: "passiv",
    categoryTitle: "Das Passiv",
    code: "G3.1",
    title: "Vorgangspassiv: Handlungsträger im Hintergrund",
    englishTitle: "Process Passive Voice: Complete Tenses",
        cefrLevel: "B1/B2",
    englishExplanation: "Focusing on the action rather than the actor. Essential for formal articles, scientific texts, and reports.",
    whenToUseEnglish: "Formal reports, news articles, scientific advancements (Human Ingenuity), and environmental policies.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Präsens:}} & \\quad \\mathbf{\\text{wird}} + \\dots + \\mathbf{\\text{Partizip II}} \\\\ \\mathbf{\\text{Präteritum:}} & \\quad \\mathbf{\\text{wurde}} + \\dots + \\mathbf{\\text{Partizip II}} \\\\ \\mathbf{\\text{Perfekt:}} & \\quad \\mathbf{\\text{ist}} + \\dots + \\mathbf{\\text{Partizip II}} + \\mathbf{\\text{worden}} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Das Vorgangspassiv stellt die Handlung oder das betroffene Objekt in den Mittelpunkt, während der Urheber (die handelnde Person) unwichtig ist oder durch 'von + Dativ' (Person) oder 'durch + Akkusativ' (Mittel/Ursache) ergänzt wird. Bildung immer mit dem Hilfsverb 'werden' + Partizip II.",
    formula: "Präsens: wird + Partizip II | Präteritum: wurde + Partizip II | Perfekt: ist + Partizip II + worden",
    cheatTable: {
      headers: ["Tempus", "Aktiv-Satz", "Passiv-Satz (Vorgangspassiv)"],
      rows: [
        ["Präsens", "Die Firma recycelt den Müll.", "Der Müll wird (von der Firma) recycelt."],
        ["Präteritum", "Der Bundestag beschloss das Gesetz.", "Das Gesetz wurde vom Bundestag beschlossen."],
        ["Perfekt", "Man hat die Schule renoviert.", "Die Schule ist renoviert worden."],
        ["Mit Modalverb", "Man muss die Natur schützen.", "Die Natur muss geschützt werden."],
      ],
    },
    examples: [
      {
        german: "Täglich werden Millionen Tonnen Lebensmittel weggeworfen.",
        english: "Every day millions of tons of food are thrown away.",
        highlight: "werden ... weggeworfen",
      },
      {
        german: "Das historische Bauwerk wurde durch ein schweres Erdbeben zerstört.",
        english: "The historical building was destroyed by a severe earthquake.",
        highlight: "wurde durch ... zerstört",
      },
    ],
    commonMistakes: [
      "Verwendung von 'geworden' statt 'worden' im Passiv Perfekt (falsch: 'ist gebaut geworden'; richtig: 'ist gebaut worden').",
      "Verwechslung von 'von' (handelnde Person) und 'durch' (Mittel/Ursache).",
    ],
    criterionATip: "Nutzen Sie das Passiv in Sachtexten, Umweltberichten und Erörterungen für einen sachlichen, objektiven Ton.",
  },
  {
    id: "g-passiversatzformen",
    category: "passiv",
    categoryTitle: "Das Passiv",
    code: "G3.2",
    title: "Passiversatzformen: Höchste stilistische Eleganz",
    englishTitle: "Passive Alternates: Advanced Stylistic Variants",
        cefrLevel: "B2/C1",
    englishExplanation: "Polishing formal essays with sophisticated constructions: 'lässt sich...', 'ist zu + Infinitiv', '-bar / -lich'.",
    whenToUseEnglish: "Elevates essays and review articles from repetitive 'wurde gemacht' to elegant academic German ('Das Problem lässt sich leicht lösen').",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Reflexiv:}} & \\quad \\mathbf{\\text{lässt sich}} + \\mathbf{\\text{Infinitiv}} \\\\ \\mathbf{\\text{Modal:}} & \\quad \\mathbf{\\text{ist zu}} + \\mathbf{\\text{Infinitiv}} \\\\ \\mathbf{\\text{Adjektiv:}} & \\quad \\mathbf{\\text{Stamm}} + \\text{Suffix}_{(-bar, -lich)} \\end{aligned}",
level: "HL Focus",
    importance: "HIGH-SCORING NUANCE",
    ruleExplanation:
      "Statt ständig 'muss/kann gemacht werden' zu wiederholen, verfügt das gehobene Deutsch über elegante Passiversatzformen: 1) 'sich lassen + Infinitiv' (Möglichkeit), 2) 'sein + zu + Infinitiv' (Notwendigkeit oder Möglichkeit), 3) Adjektive auf -bar, -lich, -abel.",
    formula: "lässt sich + Infinitiv | ist + zu + Infinitiv | Adjektiv auf -bar/-lich",
    cheatTable: {
      headers: ["Bedeutung", "Klassisches Passiv mit Modalverb", "Elegante Passiversatzform"],
      rows: [
        ["Möglichkeit (kann)", "Das Problem kann gelöst werden.", "Das Problem lässt sich lösen. / Das Problem ist lösbar."],
        ["Notwendigkeit (muss)", "Die Frage muss beantwortet werden.", "Die Frage ist zu beantworten."],
        ["Möglichkeit (kann)", "Der Text kann verstanden werden.", "Der Text ist leicht verständlich."],
      ],
    },
    examples: [
      {
        german: "Diese gravierende Krise lässt sich nur durch gemeinsame Anstrengungen bewältigen.",
        english: "This grave crisis can only be overcome through joint efforts.",
        highlight: "lässt sich ... bewältigen",
      },
      {
        german: "Es ist festzuhalten, dass der Wertewandel unumkehrbar ist.",
        english: "It must be noted that the value shift is irreversible.",
        highlight: "ist festzuhalten",
      },
    ],
    commonMistakes: [
      "Vergessen des Reflexivpronomens bei 'sich lassen' (falsch: 'Das Problem lässt lösen'; richtig: 'lässt sich lösen').",
    ],
    criterionATip: "Die Wendung 'Es ist hervorzuheben, dass...' oder 'Es lässt sich nicht leugnen, dass...' bringt Ihnen maximale Stilpunkte in Criterion A.",
  },

  // ========================================================
  // KATEGORIE 4: SATZBAU & KONNEKTOREN
  // ========================================================
  {
    id: "g-konnektoren-aduso",
    category: "satzbau_konnektoren",
    categoryTitle: "Satzbau & Konnektoren",
    code: "G4.1",
    title: "Hauptsatz-Konnektoren: Position 0 (ADUSO) & Position 1 (Inversion)",
    englishTitle: "Main Clause Connectors: Position 0 vs. Position 1 Inversion",
        cefrLevel: "B1",
    englishExplanation: "Connecting independent clauses: ADUSO conjunctions take Position 0, whereas adverbs like deshalb take Position 1.",
    whenToUseEnglish: "All argumentative texts and debates. Avoid the common English mistake of placing a comma then keeping subject-verb order after 'deshalb'.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Position 0 (ADUSO):}} & \\quad [\\text{aber, denn, und}] + \\mathbf{\\text{Subjekt}} + \\mathbf{\\text{Verb}}_{[2]} \\\\ \\mathbf{\\text{Position 1 (Inversion):}} & \\quad [\\text{deshalb, folglich}] + \\mathbf{\\text{Verb}}_{[1]} + \\mathbf{\\text{Subjekt}} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Die Position des Verbs ist das Herzstück der deutschen Syntax. Bei den 5 ADUSO-Konnektoren (aber, denn, und, sondern, oder) steht das Verb auf Position 2, weil die Konjunktion Position 0 besetzt. Bei Konjunktionaladverbien wie 'deshalb', 'trotzdem', 'folglich', 'jedoch', 'außerdem' steht das Adverb auf Position 1, was zwingend zur Inversion führt: Verb folgt sofort auf Position 2!",
    formula: "ADUSO (Pos. 0) + Subjekt + Verb (Pos. 2) | Adverb (Pos. 1) + Verb (Pos. 2) + Subjekt",
    cheatTable: {
      headers: ["Typ", "Konnektoren", "Satzstruktur"],
      rows: [
        ["Position 0 (ADUSO)", "aber, denn, und, sondern, oder", "Er lernt fleißig, [denn] er [will] das Examen bestehen."],
        ["Position 1 (Inversion)", "deshalb, trotzdem, folglich, außerdem", "Es regnete stark. [Trotzdem] [gingen] die Schüler zur Demo."],
      ],
    },
    examples: [
      {
        german: "Er war erschöpft, aber er vollendete seinen Aufsatz rechtzeitig (ADUSO: Pos. 0).",
        english: "He was exhausted, but he finished his essay in time.",
        highlight: "aber er vollendete",
      },
      {
        german: "Der Preis stieg massiv; infolgedessen sank die Nachfrage der Kunden (Inversion: Pos. 1 + Verb).",
        english: "The price rose massively; consequently customer demand fell.",
        highlight: "infolgedessen sank die Nachfrage",
      },
    ],
    commonMistakes: [
      "Vergessen der Inversion nach 'deshalb' oder 'trotzdem' (falsch: 'Deshalb er ging nach Hause'; richtig: 'Deshalb ging er nach Hause').",
      "Verwechslung von 'denn' (Position 0 + Hauptsatz) und 'weil' (Nebensatz mit Verb am Ende).",
    ],
    criterionATip: "Wechseln Sie geschickt zwischen ADUSO und Inversions-Adverbien ab, um Monotonie im Satzrhythmus zu vermeiden.",
  },
  {
    id: "g-nebensaetze-verb-am-ende",
    category: "satzbau_konnektoren",
    categoryTitle: "Satzbau & Konnektoren",
    code: "G4.2",
    title: "Nebensätze & Subjunktionen: Das konjugierte Verb am Ende",
    englishTitle: "Subordinate Clauses: Conjugated Verb at the End",
        cefrLevel: "B1/B2",
    englishExplanation: "Subordinating conjunctions (weil, dass, obwohl, wenn, als) send the conjugated verb to the very end of the clause.",
    whenToUseEnglish: "The bedrock of German sentence structure in every paper. Master the Kicker-Rule and initial clause comma inversion.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Hauptsatz:}} & \\quad \\mathbf{\\text{Subjekt}} + \\mathbf{\\text{Verb}}_{[2]} + \\dots \\\\ \\mathbf{\\text{Nebensatz:}} & \\quad [, ] + \\mathbf{\\text{Subjunktion}} + \\dots + \\mathbf{\\text{Verb}}_{[\\text{Ende}]} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Unterordnende Konjunktionen (Subjunktionen) leiten Nebensätze ein und verbannen das konjugierte Verb an die allerletzte Stelle des Satzes. Zu den wichtigsten gehören: weil / da (Grund), obwohl / obgleich (Gegensatz), dass (Dass-Satz), wenn / falls (Bedingung), als (einmalig in der Vergangenheit), während (Gleichzeitigkeit), damit (Zweck).",
    formula: "Hauptsatz, + Konjunktion + Subjekt + ... + konjugiertes Verb.",
    cheatTable: {
      headers: ["Funktion", "Subjunktionen", "Beispiel mit Verb am Ende"],
      rows: [
        ["Kausal (Grund)", "weil, da", "Sie fährt Rad, weil sie die Umwelt schützen [möchte]."],
        ["Konzessiv (Gegensatz)", "obwohl, obgleich", "Er ging demonstrieren, obwohl es in Strömen [regnete]."],
        ["Temporal (Zeit)", "als, wenn, während, seitdem", "Als ich in Berlin [lebte], besuchte ich viele Museen."],
        ["Final (Ziel)", "damit (verschiedene Subjekte)", "Die Lehrerin erklärt es langsam, damit alle Schüler es [verstehen]."],
      ],
    },
    examples: [
      {
        german: "Obwohl viele Menschen die Gefahren des Klimawandels erkennen, ändern sie ihr Verhalten nicht.",
        english: "Although many people recognize the dangers of climate change, they do not change their behavior.",
        highlight: "erkennen ... ändern sie",
      },
      {
        german: "Es steht außer Frage, dass Bildung der wichtigste Grundstein für Chancengleichheit ist.",
        english: "There is no question that education is the most crucial foundation for equal opportunities.",
        highlight: "ist",
      },
    ],
    commonMistakes: [
      "Das Verb nach 'weil' auf Position 2 setzen (umgangssprachlicher Fehler: 'weil ich will das'; schriftlich zwingend: 'weil ich das will').",
      "Verwechslung von 'als' (einmaliges Ereignis in der Vergangenheit) und 'wenn' (wiederholtes Ereignis oder Gegenwart).",
    ],
    criterionATip: "Beginnen Sie Sätze gerne mit dem Nebensatz ('Obwohl..., [Verb] [Subjekt]...'), um komplexe Syntax zu demonstrieren.",
  },
  {
    id: "g-infinitiv-mit-zu",
    category: "satzbau_konnektoren",
    categoryTitle: "Satzbau & Konnektoren",
    code: "G4.3",
    title: "Infinitivsätze: 'um...zu', 'ohne...zu' & 'anstatt...zu'",
    englishTitle: "Infinitive Clauses: Purpose and Concession",
        cefrLevel: "B1/B2",
    englishExplanation: "Purpose clauses ('in order to') and manner clauses ('without doing') sharing the same subject as the main clause.",
    whenToUseEnglish: "Ideal for concise goal-oriented statements in speeches, blogs, action plans, and persuasive letters.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Final:}} & \\quad \\mathbf{\\text{um}} + \\dots + \\mathbf{\\text{zu}} + \\mathbf{\\text{Infinitiv}} \\\\ \\mathbf{\\text{Ausschluss:}} & \\quad \\mathbf{\\text{ohne}} + \\dots + \\mathbf{\\text{zu}} + \\mathbf{\\text{Infinitiv}} \\\\ \\mathbf{\\text{Ersatz:}} & \\quad \\mathbf{\\text{anstatt}} + \\dots + \\mathbf{\\text{zu}} + \\mathbf{\\text{Infinitiv}} \\end{aligned}",
level: "SL / HL",
    importance: "CRITERION A BOOSTER",
    ruleExplanation:
      "Infinitivkonstruktionen erfordern kein eigenes Subjekt, weil sich die Handlung auf das Subjekt des Hauptsatzes bezieht. Die drei Königs-Konstruktionen sind: 1) 'um... zu + Infinitiv' (Zweck/Absicht: in order to), 2) 'ohne... zu + Infinitiv' (ohne dass: without doing), 3) 'anstatt... zu + Infinitiv' (anstatt dass: instead of doing). Bei trennbaren Verben steht '-zu-' zwischen Vorsilbe und Stamm (z.B. einzukaufen).",
    formula: "um / ohne / anstatt + ... + zu + Infinitiv (am Satzende)",
    cheatTable: {
      headers: ["Konstruktion", "Bedeutung", "Musterbeispiel"],
      rows: [
        ["um ... zu", "in order to (Zweck)", "Er spart Geld, um eine Weltreise zu unternehmen."],
        ["ohne ... zu", "without (doing)", "Sie verließ die Prüfung, ohne ein Wort zu sagen."],
        ["anstatt ... zu", "instead of (doing)", "Er ging spazieren, anstatt für die Klausur zu büffeln."],
        ["trennbares Verb", "-zu- in der Mitte", "Es ist wichtig, den Müll sorgfältig zu trennen."],
      ],
    },
    examples: [
      {
        german: "Jugendliche engagieren sich ehrenamtlich, um ihrer Gemeinschaft etwas zurückzugeben.",
        english: "Young people volunteer in order to give something back to their community.",
        highlight: "um ... zurückzugeben",
      },
      {
        german: "Man kann nicht über Integration sprechen, ohne die Betroffenen selbst anzuhören.",
        english: "One cannot speak about integration without listening to those affected.",
        highlight: "ohne ... anzuhören",
      },
    ],
    commonMistakes: [
      "'um...zu' verwenden, wenn Haupt- und Nebensatz verschiedene Subjekte haben (dann zwingend 'damit' verwenden!).",
      "Komma vor 'um...zu' vergessen (Infinitivgruppen werden im Standarddeutschen durch Komma abgetrennt).",
    ],
    criterionATip: "Nutzen Sie 'ohne...zu' und 'anstatt...zu' in Ihrer Argumentation, um pointierte Kontraste zu erzeugen.",
  },
  {
    id: "g-relativsaetze",
    category: "satzbau_konnektoren",
    categoryTitle: "Satzbau & Konnektoren",
    code: "G4.4",
    title: "Relativsätze: Präzise Attribuierung & Relativpronomen",
    englishTitle: "Relative Clauses: Pronouns, Cases & Prepositions",
        cefrLevel: "B1/B2",
    englishExplanation: "Connecting descriptions to nouns. The relative pronoun takes gender/number from the noun, and case from its clause role.",
    whenToUseEnglish: "Connecting complex ideas without writing short, choppy elementary sentences. Examiners specifically look for relative clauses with prepositions.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Bezugswort}} & + [, ] + \\mathbf{\\text{Relativpronomen}}_{[\\text{Fall}]} \\\\ & + \\dots + \\mathbf{\\text{Verb}}_{[\\text{Ende}]} \\end{aligned}",
level: "SL / HL",
    importance: "CRITERION A BOOSTER",
    ruleExplanation:
      "Relativsätze geben zusätzliche Informationen über ein Bezugswort. Das Geschlecht und die Zahl (Singular/Plural) richten sich nach dem Bezugswort; der Kasus (Fall) richtet sich nach der Funktion im Relativsatz selbst. Steht eine Präposition vor dem Relativpronomen, bestimmt diese den Fall. Besondere Genitiv-Relativpronomen: dessen (maskulin/neutral) und deren (feminin/plural).",
    formula: "Bezugswort, + [Präposition] + Relativpronomen + ... + Verb am Ende.",
    cheatTable: {
      headers: ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
      rows: [
        ["Nominativ", "der", "die", "das", "die"],
        ["Akkusativ", "den", "die", "das", "die"],
        ["Dativ", "dem", "der", "dem", "denen (! kein 'die')"],
        ["Genitiv", "dessen", "deren", "dessen", "deren"],
      ],
    },
    examples: [
      {
        german: "Das ist die Schülerin, deren Engagement (Gen.) die ganze Schule inspiriert hat.",
        english: "That is the female student whose dedication inspired the whole school.",
        highlight: "deren Engagement",
      },
      {
        german: "Die Herausforderungen, mit denen (Dat. Pl.) junge Einwanderer konfrontiert sind, sind enorm.",
        english: "The challenges with which young immigrants are confronted are enormous.",
        highlight: "mit denen ... konfrontiert sind",
      },
    ],
    commonMistakes: [
      "Verwendung von 'welche' statt 'die' (wirkt veraltet und gestelzt).",
      "Verwendung von 'dessen' für feminine Nomen (falsch: 'die Frau, dessen Auto'; richtig: 'deren Auto').",
      "Dativ Plural 'den' statt 'denen' schreiben.",
    ],
    criterionATip: "Relativsätze mit Präposition ('über die', 'mit dem', 'an denen') belegen herausragende Syntaxbeherrschung.",
  },
  {
    id: "g-zweiteilige-konnektoren",
    category: "satzbau_konnektoren",
    categoryTitle: "Satzbau & Konnektoren",
    code: "G4.5",
    title: "Zweiteilige Konnektoren: Rhetorische Meisterklasse",
    englishTitle: "Two-Part Correlative Conjunctions",
        cefrLevel: "B2/C1",
    englishExplanation: "Paired correlative conjunctions structure balanced arguments, contrasts, and proportional comparisons.",
    whenToUseEnglish: "Essential for Paper 1 essays, opinion pieces, and formal speeches to demonstrate rhetorical control.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Kopulativ:}} & \\quad \\mathbf{\\text{nicht nur}} \\dots \\mathbf{\\text{sondern auch}} \\\\ \\mathbf{\\text{Negativ:}} & \\quad \\mathbf{\\text{weder}} \\dots \\mathbf{\\text{noch}} \\\\ \\mathbf{\\text{Proportional:}} & \\quad \\mathbf{\\text{je}} + \\text{Komp.} \\dots \\mathbf{\\text{desto}} + \\text{Komp.} + \\mathbf{\\text{Verb}} \\end{aligned}",
level: "SL / HL",
    importance: "HIGH-SCORING NUANCE",
    ruleExplanation:
      "Zweiteilige Konnektoren spannen einen rhetorischen Bogen zwischen Satzgliedern oder ganzen Teilsätzen und zählen zu den wirkungsvollsten Werkzeugen für hohe Benotungen in Paper 1 und 2: 1) nicht nur... sondern auch (Steigerung), 2) sowohl... als auch (Addition), 3) weder... noch (doppelte Verneinung), 4) entweder... oder (Alternative), 5) je... desto/umso (proportionale Steigerung mit Inversion im Hauptsatz!).",
    formula: "je + Komparativ + Nebensatz (Verb Ende), + desto/umso + Komparativ + Verb (Pos. 2) + Subjekt",
    cheatTable: {
      headers: ["Konnektor-Paar", "Bedeutung", "Syntax-Besonderheit"],
      rows: [
        ["nicht nur ... sondern auch", "not only ... but also", "Verb nach 'sondern auch' folgt normal"],
        ["sowohl ... als auch", "both ... and", "Gleichwertige Reihung"],
        ["weder ... noch", "neither ... nor", "Verneinung ohne zusätzliches 'nicht'"],
        ["je ... desto / umso", "the (more) ... the (more)", "Je + Nebensatz (Verb Ende), desto + Hauptsatz (Inversion)"],
      ],
    },
    examples: [
      {
        german: "Er spricht nicht nur fließend Deutsch, sondern er beherrscht auch mehrere Dialekte.",
        english: "He not only speaks fluent German, but he also commands several dialects.",
        highlight: "nicht nur ... sondern ... auch",
      },
      {
        german: "Je früher Kinder eine Fremdsprache erlernen, desto leichter fällt ihnen die Akzentfreiheit.",
        english: "The earlier children learn a foreign language, the easier it is for them to become accent-free.",
        highlight: "Je früher ... erlernen, desto leichter fällt",
      },
    ],
    commonMistakes: [
      "Falsche Wortstellung bei 'je... desto' (häufiger Fehler: 'Je mehr man lernt, desto man weiß mehr'; richtig: 'desto mehr weiß man').",
      "Doppelte Verneinung bei 'weder... noch' mit 'nicht' (falsch: 'Er trinkt weder keinen Kaffee noch Tee').",
    ],
    criterionATip: "Ein fehlerfrei gebauter 'Je... desto...'-Satz im Fazit Ihres Essays garantiert Begeisterung beim IB-Korrektor.",
  },

  // ========================================================
  // KATEGORIE 5: ADJEKTIVEDEKLINATION
  // ========================================================
  {
    id: "g-adjektivdeklination",
    category: "adjektive",
    categoryTitle: "Adjektivdeklination",
    code: "G5.1",
    title: "Adjektivdeklination: Typ 1 (schwach), Typ 2 (gemischt), Typ 3 (stark)",
    englishTitle: "Adjective Endings: Weak, Mixed and Strong Declensions",
        cefrLevel: "B1/B2",
    englishExplanation: "Adjective endings matching gender, number, and case, influenced by whether an article preceded them.",
    whenToUseEnglish: "Every adjective in German. Adjective ending errors are the #1 red flag that lowers an essay from Band 7-8 to Band 5-6 in Criterion A.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Typ 1 (Bestimmter Art.):}} & \\quad \\text{Nom: } -e \\ , \\ \\text{D/G/Plur: } -en \\\\ \\mathbf{\\text{Typ 2 (Unbestimmter Art.):}} & \\quad \\text{Signalendung: } -er, -e, -es \\\\ \\mathbf{\\text{Typ 3 (Ohne Artikel):}} & \\quad \\text{Volle Besteckendung} \\end{aligned}",
level: "SL / HL",
    importance: "CRITICAL FOUNDATION",
    ruleExplanation:
      "Attributive Adjektive (vor dem Nomen) müssen dekliniert werden. Es gibt drei Typen: 1) Typ 1 (Schwache Deklination nach bestimmtem Artikel 'der/die/das'): Endet fast überall auf '-en', außer im Nominativ Sg. und Akk. Feminin/Neutral (dort '-e'). 2) Typ 2 (Gemischte Deklination nach unbestimmtem Artikel 'ein/kein/mein'): Übernimmt die Signalendung des Artikels im Nom. und Akk. (ein guter Mann, ein schönes Haus). 3) Typ 3 (Starke Deklination ohne Artikel): Das Adjektiv muss die Signalendung des bestimmten Artikels komplett selbst tragen (guter Wein, frische Milch, kaltes Wasser).",
    formula: "Typ 1: nach der/die/das | Typ 2: nach ein/kein/mein | Typ 3: Nullartikel (Signalendung)",
    cheatTable: {
      headers: ["Kasus & Genus", "Typ 1 (der/die/das)", "Typ 2 (ein/kein)", "Typ 3 (ohne Artikel)"],
      rows: [
        ["Nom. Mask.", "der neue Schüler", "ein neuer Schüler", "neuer Schüler"],
        ["Akk. Mask.", "den neuen Schüler", "einen neuen Schüler", "neuen Schüler"],
        ["Nom./Akk. Fem.", "die kleine Stadt", "eine kleine Stadt", "kleine Stadt"],
        ["Nom./Akk. Neut.", "das grüne Land", "ein grünes Land", "grünes Land"],
        ["Dativ (Alle)", "dem / der / den ... -en", "einem / einer / keinen ... -en", "-em / -er / -en"],
        ["Genitiv (Alle)", "des / der ... -en", "eines / einer ... -en", "-en (Mask/Neut) / -er (Fem/Pl)"],
      ],
    },
    examples: [
      {
        german: "Ein bewusster Umgang (Typ 2: Nom. Mask.) mit den begrenzten Ressourcen (Typ 1: Dat. Pl.) ist Pflicht.",
        english: "A conscious approach to limited resources is mandatory.",
        highlight: "Ein bewusster Umgang ... den begrenzten Ressourcen",
      },
      {
        german: "Gute Bildung (Typ 3: Nom. Fem.) eröffnet jungen Menschen (Typ 3: Dat. Pl.) neue Chancen.",
        english: "Good education opens up new opportunities for young people.",
        highlight: "Gute Bildung ... jungen Menschen ... neue Chancen",
      },
    ],
    commonMistakes: [
      "Vergessen der Endung '-en' im Dativ (Faustregel: Im Dativ und Genitiv enden Adjektive nach jedem Artikel immer auf '-en'!).",
      "Neutrales Adjektiv nach 'ein' ohne '-es' schreiben (falsch: 'ein neu Buch'; richtig: 'ein neues Buch').",
    ],
    criterionATip: "Prägen Sie sich die Dativ-Regel ein: Steht ein Artikel im Dativ, endet das folgende Adjektiv ausnahmslos auf '-en'.",
  },

  // ========================================================
  // KATEGORIE 6: PRONOMEN & KOMPOSITA
  // ========================================================
  {
    id: "g-da-wo-komposita",
    category: "pronomen_komposita",
    categoryTitle: "Pronomen & Komposita",
    code: "G6.1",
    title: "Präpositionalpronomen: Da- & Wo-Komposita",
    englishTitle: "Pronominal Adverbs: Da- and Wo- Compounds",
        cefrLevel: "B1/B2",
    englishExplanation: "Replacing preposition + thing combinations: damit (with it), darüber (about that), worauf (whereupon).",
    whenToUseEnglish: "Essential for concise discourse markers: 'Ich freue mich darauf', 'Es geht darum, dass...', 'Worüber wir nachdenken müssen...'.",
    latexFormula: "\\begin{aligned} \\mathbf{\\text{Aussage:}} & \\quad \\mathbf{\\text{da(r)-}} + \\mathbf{\\text{Präposition}} \\quad (\\text{z.B. darüber, davon}) \\\\ \\mathbf{\\text{Frage / Relativ:}} & \\quad \\mathbf{\\text{wo(r)-}} + \\mathbf{\\text{Präposition}} \\quad (\\text{z.B. worüber, wovon}) \\end{aligned}",
level: "SL / HL",
    importance: "CRITERION A BOOSTER",
    ruleExplanation:
      "Wenn Verben mit festen Präpositionen auf Sachen oder abstrakte Sachverhalte verweisen, verschmelzen 'da(r)-' bzw. 'wo(r)-' mit der Präposition: 1) Personen: Präposition + Pronomen (Ich denke an sie / Auf wen wartest du?). 2) Sachen / Konzepte: Da-/Wo-Kompositum (Ich denke daran / Worauf wartest du?). Bei Vokalbeginn der Präposition wird ein Verbindungs-'-r-' eingefügt (darüber, worüber, darin).",
    formula: "da(r) + Präposition (Aussage) | wo(r) + Präposition (Frage oder Relativbezug)",
    cheatTable: {
      headers: ["Präposition", "Sache (da- / wo-)", "Person (Präposition + Pronomen)"],
      rows: [
        ["an (+ Akk)", "Ich denke daran. / Woran denkst du?", "Ich denke an ihn. / An wen denkst du?"],
        ["auf (+ Akk)", "Wir freuen uns darauf. / Worauf freust du dich?", "Wir freuen uns auf sie. / Auf wen...?"],
        ["über (+ Akk)", "Sie diskutieren darüber. / Worüber...?", "Sie sprechen über den Autor. / Über wen...?"],
        ["mit (+ Dat)", "Er rechnet damit. / Womit...?", "Er spricht mit ihr. / Mit wem...?"],
      ],
    },
    examples: [
      {
        german: "Klimaschützer weisen unermüdlich darauf hin, dass die Zeit drängt.",
        english: "Climate activists tirelessly point out that time is pressing.",
        highlight: "darauf hin, dass",
      },
      {
        german: "Womit lässt sich dieser dramatische Rückgang der Artenvielfalt erklären?",
        english: "With what can this dramatic decline in biodiversity be explained?",
        highlight: "Womit lässt sich",
      },
    ],
    commonMistakes: [
      "Verwendung von Da-Komposita für Menschen (falsch: 'Ich warte darauf' bezogen auf den Lehrer; richtig: 'Ich warte auf ihn').",
      "Vergessen des Einschub-r vor Vokalen (falsch: 'daüber'; richtig: 'darüber').",
    ],
    criterionATip: "Die Konstruktion 'darauf hinweisen, dass...' oder 'dazu beitragen, dass...' verleiht Aufsätzen akademischen Glanz.",
  },
];
