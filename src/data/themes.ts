import { IBTheme, Subtopic } from "./types";

export const ALL_SUBTOPICS: Subtopic[] = [
  // ==========================================
  // THEMA 1: IDENTITÄTEN (IDENTITIES)
  // ==========================================
  {
    id: "sub-1-1",
    themeId: "identitaeten",
    code: "1.1",
    displayCode: "T1.1",
    title: "Lebensstile, Ernährung & Wohlbefinden",
    englishTitle: "Lifestyles, Nutrition & Well-Being",
    level: "SL / HL",
    overview:
      "Untersuchung moderner Lebensweisen im DACH-Raum: Ausgewogene Ernährung (Bio-Trend, Veganismus), Work-Life-Balance, Stressbewältigung bei Jugendlichen und die wachsende Bedeutung von mentaler Gesundheit im Vergleich zu traditionellen Konsummustern.",
    keyDebates: [
      "Ist der Trend zu veganer und regionaler Bio-Ernährung ein elitärer Luxus oder eine ökologische Notwendigkeit?",
      "Inwiefern führt der Leistungsdruck in Schulen und Gymnasien zu psychosozialen Belastungen bei Jugendlichen?",
      "Sollte der Staat durch Zuckersteuern oder Werbeverbote für ungesunde Lebensmittel in den Lebensstil der Bürger eingreifen?",
    ],
    vocabBullets: [
      { german: "die Ausgewogenheit", english: "balance / equilibrium", context: "Eine gesunde Ausgewogenheit zwischen Schule und Freizeit ist unabdingbar." },
      { german: "das Wohlbefinden", english: "well-being", context: "Mentales Wohlbefinden wird im modernen Schulalltag oft vernachlässigt." },
      { german: "der Leistungsdruck", english: "pressure to perform", context: "Jugendliche leiden zunehmend unter enormem Leistungsdruck." },
      { german: "die Ernährungsumstellung", english: "dietary shift / transition", context: "Viele junge Deutsche entscheiden sich bewusst für eine pflanzenbasierte Ernährungsumstellung." },
      { german: "nachhaltig konsumieren", english: "to consume sustainably", context: "Regionale Bio-Märkte ermöglichen es den Verbrauchern, nachhaltig zu konsumieren." },
    ],
    culturalSpotlight: {
      title: "Bio-Boom & Reformhaus-Tradition",
      region: "Deutschland",
      description:
        "Deutschland ist der größte Bio-Markt Europas. Ketten wie Alnatura und Denns Biomarkt sowie Wochenmärkte prägen den städtischen Alltag. Der Begriff 'Lebensreform' hat in Deutschland historische Wurzeln, die bis ins 19. Jahrhundert zurückreichen.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Artikel für eine Schülerzeitung über die Zunahme von Stress und Schlafmangel bei Oberstufenschülern und schlagen Sie wirksame Gegenmaßnahmen vor.",
        textTypeSuggestion: "Magazinartikel / Schülerzeitungsartikel",
        register: "Informell (Du / Ihr)",
      },
    ],
  },
  {
    id: "sub-1-2",
    themeId: "identitaeten",
    code: "1.2",
    displayCode: "T1.2",
    title: "Gesundheit, Suchtverhalten & Prävention",
    englishTitle: "Health, Addiction & Preventive Care",
    level: "SL / HL",
    overview:
      "Physische und psychische Gesundheit in der heutigen Gesellschaft. Analyse von Suchtgefahren: Tabakkonsum, Vaping, Alkoholmissbrauch ('Komasaufen'), sowie neuartige Süchte wie Smartphone-Abhängigkeit und Gaming-Disorder. Gesetzliche Präventionskampagnen.",
    keyDebates: [
      "Welche Maßnahmen sind wirksamer gegen jugendlichen Drogen- und Alkoholkonsum: Aufklärungskampagnen oder strikte Verbote?",
      "Sollte die Abhängigkeit von sozialen Medien und Videospielen offiziell als behandlungsbedürftige Krankheit anerkannt werden?",
      "Wie beeinflusst das duale Gesundheitssystem (gesetzlich vs. privat) in Deutschland und der Schweiz die Chancengleichheit?",
    ],
    vocabBullets: [
      { german: "die Vorbeugung / Prävention", english: "prevention", context: "Frühzeitige Vorbeugung an Schulen kann riskantes Suchtverhalten verhindern." },
      { german: "die Abhängigkeit", english: "addiction / dependence", context: "Die ständige Erreichbarkeit führt bei vielen Jugendlichen zu digitaler Abhängigkeit." },
      { german: "der Bewegungsmangel", english: "lack of physical exercise", context: "Langes Sitzen vor Bildschirmen führt unweigerlich zu chronischem Bewegungsmangel." },
      { german: "die psychische Belastbarkeit", english: "mental resilience", context: "Achtsamkeitsübungen stärken die psychische Belastbarkeit junger Menschen." },
    ],
    culturalSpotlight: {
      title: "Gesetzliche Krankenversicherung & Kurkultur",
      region: "Deutschland",
      description:
        "Das 1883 von Otto von Bismarck eingeführte Solidaritätsprinzip der gesetzlichen Krankenversicherung garantiert medizinische Versorgung für alle. Zudem ist die ärztlich verordnete 'Mutter-Kind-Kur' oder Erholungskur in deutschen Heilbädern weltweit einzigartig.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie einen Blogbeitrag, in dem Sie die Gefahren von Vaping (E-Zigaretten) unter Jugendlichen analysieren und Ihre Mitschüler zur Vorsicht aufrufen.",
        textTypeSuggestion: "Blogbeitrag",
        register: "Informell (Du / Ihr)",
      },
    ],
  },
  {
    id: "sub-1-3",
    themeId: "identitaeten",
    code: "1.3",
    displayCode: "T1.3",
    title: "Überzeugungen, Werte & Generationenkonflikte",
    englishTitle: "Beliefs, Values & Intergenerational Conflicts",
    level: "SL / HL",
    overview:
      "Wandel moralischer, religiöser und weltanschaulicher Werte zwischen Generationen (Babyboomer vs. Gen Z). Der Stellenwert von Familie, Freiheit, sozialer Gerechtigkeit, Säkularisierung und die Frage: Was bedeutet Erfolg im 21. Jahrhundert?",
    keyDebates: [
      "Unterscheiden sich die Lebensprioritäten der Generation Z (Fokus auf Purpose und Freizeit) grundlegend von den Werten ihrer Eltern?",
      "Verliert die Kirche im deutschsprachigen Raum ihre gesellschaftliche Orientierungsfunktion?",
      "Inwieweit stärken oder spalten generationenübergreifende Debatten (z.B. Klimapolitik, Rentensystem) den Zusammenhalt?",
    ],
    vocabBullets: [
      { german: "der Wertewandel", english: "shift in values", context: "Der gesellschaftliche Wertewandel zeigt sich im veränderten Verständnis von Karriere." },
      { german: "die Selbstverwirklichung", english: "self-actualization", context: "Junge Menschen streben heute vermehrt nach persönlicher Selbstverwirklichung." },
      { german: "der Generationenvertrag", english: "intergenerational contract", context: "Der demografische Wandel stellt den traditionellen Generationenvertrag auf eine harte Probe." },
      { german: "die Glaubensfreiheit", english: "freedom of faith/religion", context: "Die Glaubensfreiheit ist im deutschen Grundgesetz fest verankert." },
    ],
    culturalSpotlight: {
      title: "Die Shell-Jugendstudie",
      region: "Deutschland",
      description:
        "Seit 1953 untersucht die Shell-Jugendstudie repräsentativ die Einstellungen, Ängste und Wertvorstellungen von 12- bis 25-Jährigen in Deutschland und dient Politik und Soziologie als zentraler Seismograf.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen formellen Leserbrief an die Redaktion der 'Süddeutschen Zeitung' als Reaktion auf einen Artikel, der behauptet, die Jugend sei faul und unpolitisch.",
        textTypeSuggestion: "Leserbrief",
        register: "Formell (Sie)",
      },
    ],
  },
  {
    id: "sub-1-4",
    themeId: "identitaeten",
    code: "1.4",
    displayCode: "T1.4",
    title: "Subkulturen, Trends & Jugendkultur",
    englishTitle: "Subcultures, Fashion Trends & Youth Culture",
    level: "SL / HL",
    overview:
      "Jugendliche Ausdrucksformen durch Musik (Deutschrap, Techno, Indie), Mode (Streetwear, Vintage, Fast Fashion Kritik), Online-Communities und Subkulturen als Mittel zur Identitätsfindung und Abgrenzung von der Elterngeneration.",
    keyDebates: [
      "Dienen Jugend-Subkulturen heute noch echtem politischem Protest oder sind sie bloße kommerzielle Lifestyle-Produkte geworden?",
      "Welche Rolle spielt die Club- und Festivalkultur (z.B. Berlin Techno) als Ausdruck von Freiheit und Toleranz?",
      "Führt die Schnelllebigkeit von TikTok-Trends zum Verlust einer eigenständigen, tiefgründigen Jugendkultur?",
    ],
    vocabBullets: [
      { german: "die Zugehörigkeit", english: "belonging / affiliation", context: "Subkulturen vermitteln Jugendlichen ein starkes Gefühl der Zugehörigkeit." },
      { german: "das Erscheinungsbild", english: "outward appearance", context: "Das äußere Erscheinungsbild fungiert oft als Statement gegen gesellschaftliche Konventionen." },
      { german: "der Konformismus", english: "conformity", context: "Viele Jugendliche rebellieren bewusst gegen den bürgerlichen Konformismus." },
      { german: "die Nachahmung", english: "imitation / mimicry", context: "Soziale Medien beschleunigen die weltweite Nachahmung flüchtiger Modetrends." },
    ],
    culturalSpotlight: {
      title: "Berliner Clubkultur & UNESCO-Kulturerbe",
      region: "Deutschland",
      description:
        "Die Berliner Techno-Szene entstand nach dem Mauerfall 1989 in leerstehenden Fabriken im Osten der Stadt und symbolisierte die Wiedervereinigung. 2024 wurde die Berliner Technokultur offiziell als immaterielles UNESCO-Kulturerbe anerkannt.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie einen Tagebucheintrag über Ihre Erlebnisse bei einem Musikfestival oder einem alternativen Kulturzentrum und reflektieren Sie über das Gefühl von Gemeinschaft.",
        textTypeSuggestion: "Tagebucheintrag",
        register: "Persönlich / Reflektierend",
      },
    ],
  },
  {
    id: "sub-1-5",
    themeId: "identitaeten",
    code: "1.5",
    displayCode: "T1.5",
    title: "Sprache, Jugendsprache & Nationale Identität",
    englishTitle: "Language, Youth Slang & National Identity",
    level: "SL / HL",
    overview:
      "Die Rolle der deutschen Sprache für Identität und Integration. Dialekte (Bairisch, Schwäbisch, Schwyzerdütsch), Einfluss des Englischen ('Denglisch'), Kiezdeutsch, gendergerechte Sprache (das 'Gendern') und das jährliche 'Jugendwort des Jahres'.",
    keyDebates: [
      "Bereichert die Jugendsprache und Anglizismen die deutsche Sprache oder führt sie zu einem sprachlichen Verfall?",
      "Sollte geschlechtergerechte Sprache (das 'Gendern' mit Sternchen oder Doppelpunkt) in Behörden und Schulen vorgeschrieben oder verboten werden?",
      "Inwiefern ist das Erlernen der Landessprache die wichtigste Voraussetzung für eine gelungene gesellschaftliche Integration?",
    ],
    vocabBullets: [
      { german: "die Sprachvielfalt", english: "linguistic diversity", context: "Die reiche Sprachvielfalt durch Dialekte bereichert den gesamten Kulturraum." },
      { german: "der Anglizismus (Pl. Anglizismen)", english: "anglicism / English loanword", context: "Der inflationäre Gebrauch von Anglizismen wird in Feuilletons hitzig diskutiert." },
      { german: "die Verständigung", english: "mutual communication / understanding", context: "Eine klare Sprache erleichtert die interkulturelle Verständigung maßgeblich." },
      { german: "das Zugehörigkeitsgefühl", english: "feeling of belonging", context: "Die Muttersprache stiftet ein tiefes emotionales Zugehörigkeitsgefühl." },
    ],
    culturalSpotlight: {
      title: "Schweizerdeutsch (Schwyzerdütsch) & Diglossie",
      region: "Schweiz",
      description:
        "In der Deutschschweiz herrscht mediale Diglossie: Im Alltag sprechen alle Bevölkerungsschichten Dialekt (Mundart), während in Zeitungen, Schulen und formellen Kontexten Schweizer Hochdeutsch geschrieben wird.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Aufsatz / Rede, in der Sie darlegen, warum Dialekte und Regionalsprachen im Zeitalter der Globalisierung geschützt werden sollten.",
        textTypeSuggestion: "Rede / Vortrag",
        register: "Formell / Ansprechend",
      },
    ],
  },

  // ==========================================
  // THEMA 2: ERFAHRUNGEN (EXPERIENCES)
  // ==========================================
  {
    id: "sub-2-1",
    themeId: "erfahrungen",
    code: "2.1",
    displayCode: "T2.1",
    title: "Freizeitgestaltung, Vereinsleben & Ehrenamt",
    englishTitle: "Leisure, Club Culture & Volunteering",
    level: "SL / HL",
    overview:
      "Freizeitkultur im DACH-Raum: Das traditionsreiche deutsche Vereinswesen (Sportvereine, Musikvereine, Freiwillige Feuerwehr), bürgerschaftliches Engagement, Outdoor-Aktivitäten (Wandern, Skifahren) und der Stellenwert von Feierabend und Sonntagskultur.",
    keyDebates: [
      "Verliert das traditionelle Vereinswesen an Bedeutung, weil junge Menschen unverbindlichere Freizeitangebote bevorzugen?",
      "Sollte ehrenamtliches Engagement für Jugendliche verpflichtend sein (z.B. durch ein soziales Pflichtjahr)?",
      "Ist der gesetzlich geschützte arbeitsfreie Sonntag ein überholtes Relikt oder eine unverzichtbare gesellschaftliche Oase der Ruhe?",
    ],
    vocabBullets: [
      { german: "das Vereinswesen", english: "club system / associative life", context: "Das deutsche Vereinswesen ist der soziale Klebstoff kleinerer Gemeinden." },
      { german: "ehrenamtlich tätig sein", english: "to do voluntary / charity work", context: "Millionen Bürger sind in ihrer Freizeit ehrenamtlich tätig." },
      { german: "die Entschleunigung", english: "deceleration / slowing down", context: "Wandern in den Alpen bietet wirksame Entschleunigung vom hektischen Alltag." },
      { german: "der Feierabend", english: "end of workday / leisure evening", context: "Der Begriff 'Feierabend' symbolisiert die strikte Trennung von Arbeit und Freizeit." },
    ],
    culturalSpotlight: {
      title: "Die deutsche Vereinskultur (e.V.)",
      region: "Deutschland",
      description:
        "In Deutschland gibt es über 600.000 eingetragene Vereine (e.V.). Fast jeder zweite Bundesbürger ist Mitglied in mindestens einem Verein – vom Schützen- und Sportverein bis zum Kleingärtnerverein.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie eine Broschüre für Austauschschüler, in der Sie die Bedeutung der Vereinsarbeit erklären und verschiedene Möglichkeiten zum Mitmachen vorstellen.",
        textTypeSuggestion: "Flugblatt / Broschüre",
        register: "Informell (Du / Ihr)",
      },
    ],
  },
  {
    id: "sub-2-2",
    themeId: "erfahrungen",
    code: "2.2",
    displayCode: "T2.2",
    title: "Reisen, Sanfter Tourismus & Mobilität",
    englishTitle: "Travel, Sustainable Tourism & Mobility",
    level: "SL / HL",
    overview:
      "Reisegewohnheiten der Deutschen ('Reiseweltmeister'). Die ökologischen Folgen von Massentourismus und Billigflügen im Kontrast zu Konzepten wie 'Sanfter Tourismus' in den Alpen, Bahnreisen (Deutschlandticket) und Interrail.",
    keyDebates: [
      "Wie lässt sich der Wunsch nach weltweitem Reisen mit dem Klimaschutz vereinbaren?",
      "Zerstört der Overtourism beliebte Reiseziele (z.B. Hallstatt in Österreich oder historische Altstädte)?",
      "Kann das 49-Euro-Deutschlandticket als globales Vorbild für nachhaltige Mobilität dienen?",
    ],
    vocabBullets: [
      { german: "das Fernweh", english: "wanderlust / craving for faraway places", context: "Das Fernweh treibt viele deutschsprachige Reisende in ferne Kontinente." },
      { german: "der Sanfte Tourismus", english: "sustainable / eco-friendly tourism", context: "Immer mehr Urlauber setzen auf Sanften Tourismus in alpinen Regionen." },
      { german: "die CO2-Bilanz", english: "carbon footprint", context: "Nachtzüge verbessern die persönliche CO2-Bilanz beim Reisen erheblich." },
      { german: "die Überfremdung des Ortsbildes", english: "overcrowding / loss of local character", context: "Massentourismus gefährdet die Authentizität malerischer Bergdörfer." },
    ],
    culturalSpotlight: {
      title: "Hallstatt & das Phänomen Overtourism",
      region: "Österreich",
      description:
        "Das 800-Einwohner-Dorf Hallstatt im Salzkammergut empfängt jährlich über eine Million Touristen, vor allem aus Asien. Der Ort gilt als weltweites Fallbeispiel für die Herausforderungen des Massentourismus in sensiblen alpinen Ökosystemen.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Reisebericht für ein Jugendmagazin über eine umweltfreundliche Reise mit dem Zug durch Deutschland, Österreich und die Schweiz.",
        textTypeSuggestion: "Magazinartikel / Reisebericht",
        register: "Journalistisch",
      },
    ],
  },
  {
    id: "sub-2-3",
    themeId: "erfahrungen",
    code: "2.3",
    displayCode: "T2.3",
    title: "Lebensgeschichten, Meilensteine & Bildungswege",
    englishTitle: "Life Stories, Rites of Passage & Milestones",
    level: "SL / HL",
    overview:
      "Bedeutende Lebensübergänge: Konfirmation, Jugendweihe (Ostdeutschland), Abiturfeiern, Gap Year / Freiwilliges Soziales Jahr (FSJ), Auslandssemester, Beginn der Erwerbstätigkeit und Biografien inspirierender Persönlichkeiten.",
    keyDebates: [
      "Welche Relevanz haben traditionelle Übergangsriten wie Konfirmation oder Jugendweihe in einer säkularisierten Gesellschaft?",
      "Ist ein Freiwilliges Soziales Jahr (FSJ) nach der Schule wertvoller für die Persönlichkeitsentwicklung als ein direkter Studienstart?",
      "Inwieweit prägen persönliche Krisen und Niederlagen den Lebensweg mehr als Erfolge?",
    ],
    vocabBullets: [
      { german: "der Übergang", english: "transition", context: "Der Übergang von der Schule ins Berufsleben erfordert große Eigenverantwortung." },
      { german: "der Meilenstein", english: "milestone", context: "Das Bestehen des Abiturs markiert einen entscheidenden Meilenstein." },
      { german: "der Weitblick", english: "perspective / foresight", context: "Ein Auslandsaufenthalt fördert den interkulturellen Weitblick junger Erwachsener." },
      { german: "die Reife", english: "maturity", context: "Lebenserfahrungen abseits des Klassenzimmers beschleunigen die persönliche Reife." },
    ],
    culturalSpotlight: {
      title: "Die Jugendweihe in Ostdeutschland",
      region: "Deutschland",
      description:
        "Die Jugendweihe ist ein weltliches Übergangsritual für 14-Jährige, das vor allem in den neuen Bundesländern sehr lebendig geblieben ist. Sie markiert den Schritt von der Kindheit ins Erwachsenenalter ohne religiöse Anbindung.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie eine Rede an Ihre Mitschüler am Tag der Abschlussfeier, in der Sie auf gemeinsame Erlebnisse zurückblicken und Wünsche für die Zukunft formulieren.",
        textTypeSuggestion: "Rede / Vortrag",
        register: "Informell / Feierlich",
      },
    ],
  },
  {
    id: "sub-2-4",
    themeId: "erfahrungen",
    code: "2.4",
    displayCode: "T2.4",
    title: "Bräuche, Feste & Kulturelle Traditionen",
    englishTitle: "Customs, Festivals & Cultural Traditions",
    level: "SL / HL",
    overview:
      "Feste und Bräuche im Jahreslauf: Karneval/Fasching/Fastnacht im Rheinland und Süddeutschland, Oktoberfest in München, Christkindlmärkte, Tag der Deutschen Einheit (3. Oktober), Schweizer Bundesfeiertag (1. August).",
    keyDebates: [
      "Drohen traditionelle Bräuche durch Kommerzialisierung und Alkoholexzesse ihren kulturellen Kern zu verlieren?",
      "Wie zeitgemäß sind regionale Bräuche in einer pluralistischen, multikulturellen Einwanderungsgesellschaft?",
      "Sollten historische Feste kritisch auf diskriminierende oder stereotype Elemente hinterfragt werden?",
    ],
    vocabBullets: [
      { german: "das Brauchtum", english: "customs / traditions", context: "Traditionelles Brauchtum stiftet in ländlichen Gebieten Identität." },
      { german: "die Brauchtumspflege", english: "preservation of customs", context: "Viele Vereine widmen sich mit Leidenschaft der regionalen Brauchtumspflege." },
      { german: "die Besinnlichkeit", english: "contemplation / tranquility", context: "Weihnachtsmärkte vermitteln eine Atmosphäre von Ruhe und Besinnlichkeit." },
      { german: "der Festumzug", english: "parade / pageant", context: "Beim Kölner Rosenmontagszug ziehen bunte Festumzüge durch die Innenstadt." },
    ],
    culturalSpotlight: {
      title: "Die schwäbisch-alemannische Fastnacht",
      region: "Deutschland",
      description:
        "Im Gegensatz zum rheinischen Karneval mit bunten Pappfiguren zeichnet sich die Fastnacht in Südwestdeutschland und der Schweiz durch holzgeschnitzte Larven (Masken) und Teufelsgestalten aus, um böse Wintergeister rituell zu vertreiben.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen E-Mail-Austausch mit einem ausländischen Freund, in dem Sie ihm die Traditionen des rheinischen Karnevals erklären und ihn zum Mitfeiern einladen.",
        textTypeSuggestion: "Informelle E-Mail",
        register: "Informell (Du)",
      },
    ],
  },
  {
    id: "sub-2-5",
    themeId: "erfahrungen",
    code: "2.5",
    displayCode: "T2.5",
    title: "Migration, Flucht & Integration",
    englishTitle: "Migration, Exile & Social Integration",
    level: "SL / HL",
    overview:
      "Historische und aktuelle Migrationsbewegungen im DACH-Raum: Gastarbeiter in den 1960er Jahren, Spätaussiedler, Geflüchtete von 2015 und aus der Ukraine. Herausforderungen der Integration: Sprachförderung, Arbeitsmarktzugang, Anerkennung von Qualifikationen und Rassismusprävention.",
    keyDebates: [
      "Welche Pflichten hat der Staat bei der Integration von Zuwanderern und welche Pflichten haben die Einwanderer selbst?",
      "Inwieweit profitiert die alternde deutsche Wirtschaft von qualifizierter Fachkräftezuwanderung?",
      "Wie kann verhindert werden, dass sich Parallelgesellschaften bilden und Vorurteile zunehmen?",
    ],
    vocabBullets: [
      { german: "die Einwanderungsgesellschaft", english: "immigration society", context: "Deutschland begreift sich heute selbstverständlich als moderne Einwanderungsgesellschaft." },
      { german: "die Chancengleichheit", english: "equality of opportunity", context: "Bildung ist der entscheidende Schlüssel zur Chancengleichheit für Kinder von Zuwanderern." },
      { german: "der Fachkräftemangel", english: "shortage of skilled workers", context: "Ohne gezielte Arbeitsmigration droht vielen Branchen ein schwerer Fachkräftemangel." },
      { german: "die Ausgrenzung", english: "marginalization / exclusion", context: "Vorurteile und Diskriminierung führen zu schmerzhafter sozialer Ausgrenzung." },
    ],
    culturalSpotlight: {
      title: "Das Gastarbeiter-Abkommen von 1961",
      region: "Deutschland",
      description:
        "Zur Zeit des Wirtschaftswunders schloss die Bundesrepublik Anwerbeabkommen unter anderem mit Italien, Spanien, Griechenland und der Türkei. Viele blieben, holten ihre Familien nach und prägten die deutsche Gesellschaft kulinarisch, wirtschaftlich und kulturell nachhaltig.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie ein Interview für eine Schülerzeitung mit einer Mitschülerin, die vor einigen Jahren nach Deutschland geflohen ist, über ihre Erfahrungen, Sprachhürden und Hoffnungen.",
        textTypeSuggestion: "Interview",
        register: "Journalistisch / Empathisch",
      },
    ],
  },

  // ==========================================
  // THEMA 3: MENSCHLICHE GENIALITÄT (HUMAN INGENUITY)
  // ==========================================
  {
    id: "sub-3-1",
    themeId: "genialitaet",
    code: "3.1",
    displayCode: "T3.1",
    title: "Wissenschaft, Innovation & Deutsche Ingenieurskunst",
    englishTitle: "Science, Innovation & Engineering Culture",
    level: "SL / HL",
    overview:
      "Forschungstradition im DACH-Raum: Von Gutenberg, Röntgen und Einstein bis zur Max-Planck-Gesellschaft und BionTech (mRNA-Impfstoffe). Deutscher Maschinenbau, das Gütesiegel 'Made in Germany', Grüne Technologien (CleanTech) und Energietechnik.",
    keyDebates: [
      "Verliert Deutschland im globalen Technologiewettbewerb (Chip-Industrie, Digitalisierung) den Anschluss an die USA und Asien?",
      "Wie ethisch vertretbar ist Gentechnik in der Medizin und Landwirtschaft?",
      "Ist das Label 'Made in Germany' heute noch ein Garant für unvergleichliche Spitzenqualität?",
    ],
    vocabBullets: [
      { german: "die bahnbrechende Erfindung", english: "groundbreaking invention", context: "Der Buchdruck von Johannes Gutenberg war eine bahnbrechende Erfindung der Menschheit." },
      { german: "die Grundlagenforschung", english: "fundamental research", context: "Staatliche Institute investieren massiv in die ergebnisoffene Grundlagenforschung." },
      { german: "die Zukunftsfähigkeit", english: "future viability", context: "Investitionen in erneuerbare Energien sichern die Zukunftsfähigkeit des Wirtschaftsstandorts." },
      { german: "die Patentanmeldung", english: "patent application", context: "Deutschland belegt bei internationalen Patentanmeldungen seit Jahren Spitzenplätze." },
    ],
    culturalSpotlight: {
      title: "Die Fraunhofer-Gesellschaft & MP3-Entwicklung",
      region: "Deutschland",
      description:
        "Am Fraunhofer-Institut für Integrierte Schaltungen (IIS) in Erlangen entwickelte ein deutsches Forscherteam um Karlheinz Brandenburg in den 1990er Jahren das MP3-Audioformat, das die weltweite Musikindustrie revolutionierte.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie eine Rezension über eine Dokumentation, die sich mit der Zukunft der deutschen Automobilindustrie und dem Wechsel zur Elektromobilität befasst.",
        textTypeSuggestion: "Filmkritik / Rezension",
        register: "Journalistisch / Urteilend",
      },
    ],
  },
  {
    id: "sub-3-2",
    themeId: "genialitaet",
    code: "3.2",
    displayCode: "T3.2",
    title: "Künstliche Intelligenz, Robotik & Digitale Ethik",
    englishTitle: "Artificial Intelligence, Robotics & Digital Ethics",
    level: "SL / HL",
    overview:
      "Chancen und Risiken des KI-Zeitalters: ChatGPT in Schulen und Universitäten, autonome Waffensysteme, Pflegeroboter im demografischen Wandel, Datenschutz nach europäischem Recht (DSGVO) und die Debatte um die Grenzen des Menschenmöglichen.",
    keyDebates: [
      "Sollte der Einsatz von generativer KI bei Hausarbeiten und Klausuren streng verboten oder gezielt im Unterricht geschult werden?",
      "Dürfen ethische Entscheidungen (z.B. in der Medizin oder bei autonomen Autos) Algorithmen überlassen werden?",
      "Gefährdet die europäische Datenschutz-Grundverordnung (DSGVO) die Innovationskraft europäischer Tech-Startups?",
    ],
    vocabBullets: [
      { german: "die Künstliche Intelligenz (KI)", english: "Artificial Intelligence (AI)", context: "Künstliche Intelligenz verändert die moderne Arbeitswelt grundlegend." },
      { german: "die Datenhoheit / der Datenschutz", english: "data sovereignty / data privacy", context: "Im deutschsprachigen Raum hat der Schutz privater Daten traditionell oberste Priorität." },
      { german: "die Automatisierung", english: "automation", context: "Durch fortschreitende Automatisierung fallen monotone Routinearbeiten weg." },
      { german: "die Urheberschaft", english: "authorship / copyright", context: "Bei KI-generierten Texten und Bildern ist die rechtliche Urheberschaft oft ungeklärt." },
    ],
    culturalSpotlight: {
      title: "Die DSGVO & deutsche Skepsis vor Datenmissbrauch",
      region: "Deutschland",
      description:
        "Aufgrund der historischen Erfahrungen mit Überwachung durch die Gestapo und die Stasi der DDR sind deutsche Bürger besonders sensibel bezüglich digitaler Überwachung. Google Street View stieß in Deutschland auf beispiellosen Widerstand (Verpixelungspflicht).",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Forumsbeitrag, in dem Sie mit anderen Schülern darüber diskutieren, ob KI-Tools wie ChatGPT das kreative Denken fördern oder verkümmern lassen.",
        textTypeSuggestion: "Forumsbeitrag",
        register: "Informell (Du)",
      },
    ],
  },
  {
    id: "sub-3-3",
    themeId: "genialitaet",
    code: "3.3",
    displayCode: "T3.3",
    title: "Medienlandschaft, Fake News & Pressefreiheit",
    englishTitle: "Media Landscape, Disinformation & Press Freedom",
    level: "SL / HL",
    overview:
      "Die Rolle der Medien in der Demokratie: Der öffentlich-rechtliche Rundfunk (ARD, ZDF, ORF, SRF) und seine Rundfunkbeitrag-Debatte, Qualitätsjournalismus ('Spiegel', 'Zeit', 'NZZ'), Desinformation in sozialen Netzwerken und Filterblasen.",
    keyDebates: [
      "Ist der verpflichtende Rundfunkbeitrag (GEZ) noch zeitgemäß oder sollte der öffentlich-rechtliche Rundfunk privatisiert werden?",
      "Wie können Bürger wirksam gegen Deepfakes und gezielte Desinformationskampagnen geschützt werden?",
      "Verlieren klassische Printmedien die Jugend endgültig an TikTok und YouTube als primäre Informationsquellen?",
    ],
    vocabBullets: [
      { german: "die Pressefreiheit", english: "freedom of the press", context: "Eine unabhängige Berichterstattung ist das Fundament jeder funktionierenden Demokratie." },
      { german: "die Fehlinformation / Desinformation", english: "misinformation / fake news", context: "Gezielte Desinformation polarisiert die Gesellschaft in Wahlkampfzeiten." },
      { german: "der öffentlich-rechtliche Rundfunk", english: "public service broadcasting", context: "Der öffentlich-rechtliche Rundfunk hat einen gesetzlichen Bildungs- und Informationsauftrag." },
      { german: "die Medienkompetenz", english: "media literacy", context: "Schulen müssen jungen Menschen frühzeitig kritische Medienkompetenz vermitteln." },
    ],
    culturalSpotlight: {
      title: "Der Deutsche Presserat & der Pressekodex",
      region: "Deutschland",
      description:
        "Der Deutsche Presserat ist eine freiwillige Selbstkontrolle der Print- und Online-Medien. Er wacht über die Einhaltung des 'Pressekodex', der Wahrheitspflicht, Achtung der Menschenwürde und den Schutz von Opfern verlangt.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie einen Leitfaden für Mitschüler mit praktischen Kriterien, wie man Fake News und manipulierte Bilder in sozialen Medien entlarvt.",
        textTypeSuggestion: "Leitfaden / Richtlinien",
        register: "Informell / Sachlich",
      },
    ],
  },
  {
    id: "sub-3-4",
    themeId: "genialitaet",
    code: "3.4",
    displayCode: "T3.4",
    title: "Kunst, Architektur & Bauhaus-Design",
    englishTitle: "Art, Architecture & Bauhaus Heritage",
    level: "SL / HL",
    overview:
      "Künstlerische Strömungen im deutschsprachigen Raum: Das revolutionäre Bauhaus (Weimar/Dessau - 'Form follows function'), Expressionismus ('Der Blaue Reiter', 'Die Brücke'), Street Art in Berlin (East Side Gallery) und moderne Museumslandschaften.",
    keyDebates: [
      "Welchen Einfluss hat das funktionale Bauhaus-Design bis heute auf unsere Wohnkultur und Alltagsästhetik?",
      "Gilt Street Art als schützenswerte urbane Kunstform oder als illegale Sachbeschädigung?",
      "Sollte Kunst durch öffentliche Gelder subventioniert werden, auch wenn sie gesellschaftlich provoziert?",
    ],
    vocabBullets: [
      { german: "die Formgebung", english: "design / styling", context: "Das Bauhaus revolutionierte die moderne Formgebung durch schlichte Sachlichkeit." },
      { german: "der künstlerische Ausdruck", english: "artistic expression", context: "Street Art bietet marginalisierten Stimmen Raum für freien künstlerischen Ausdruck." },
      { german: "die Baukunst / Architektur", english: "architecture", context: "Nachhaltige Holzarchitektur in Vorarlberg gilt als Vorreiter moderner alpiner Baukunst." },
      { german: "die Provokation", english: "provocation", context: "Moderne Kunst bedient sich oft gezielter Provokation, um Denkanstöße zu liefern." },
    ],
    culturalSpotlight: {
      title: "100 Jahre Bauhaus (1919 gegründet)",
      region: "Deutschland",
      description:
        "Von Walter Gropius 1919 in Weimar gegründet, verband das Staatliche Bauhaus Kunst und Handwerk. Die klaren Linien, Glasfassaden und Stahlrohrmöbel (z.B. der Freischwinger von Marcel Breuer) prägten die weltweite Moderne wie keine andere Institution.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Blogbeitrag über Ihren Besuch in einer modernen Kunstgalerie oder im Bauhaus-Museum und erklären Sie, was Sie an den Werken fasziniert hat.",
        textTypeSuggestion: "Blogbeitrag",
        register: "Informell / Reflektierend",
      },
    ],
  },
  {
    id: "sub-3-5",
    themeId: "genialitaet",
    code: "3.5",
    displayCode: "T3.5",
    title: "Kultureller Ausdruck, Theater & Literatur",
    englishTitle: "Cultural Expression, Theater & Literature",
    level: "SL / HL",
    overview:
      "Die reiche Theater- und Literaturtradition: Regietheater in Berlin und Wien (Burgtheater), Dichter wie Goethe, Schiller, Kafka, Brecht ('Episches Theater') und moderne Gegenwartsliteratur. Die Rolle von Kulturfestivals (Salzburger Festspiele, Berlinale).",
    keyDebates: [
      "Brauchen wir klassische Theaterstücke heute noch im Original oder müssen sie radikal modernisiert werden?",
      "Welche gesellschaftliche Verantwortung tragen Künstler und Schriftsteller in Krisenzeiten?",
      "Verdrängen Streaming-Dienste wie Netflix das klassische Kino und den Besuch von Live-Kulturstätten?",
    ],
    vocabBullets: [
      { german: "das Meisterwerk", english: "masterpiece", context: "Goethes 'Faust' gilt unbestritten als Meisterwerk der deutschen Literaturgeschichte." },
      { german: "das Epische Theater", english: "epic theatre", context: "Bertolt Brecht erfand das Epische Theater mit dem Ziel, das Publikum zum Nachdenken anzuregen." },
      { german: "der Verfremdungseffekt", english: "alienation effect", context: "Durch den Verfremdungseffekt wird dem Zuschauer die Illusion auf der Bühne bewusst gemacht." },
      { german: "die Subventionierung", english: "subsidization", context: "Theaterhäuser im DACH-Raum sind stark auf staatliche Subventionierung angewiesen." },
    ],
    culturalSpotlight: {
      title: "Das Wiener Burgtheater & die Salzburger Festspiele",
      region: "Österreich",
      description:
        "Das Burgtheater in Wien ist das bedeutendste Sprechtheater des deutschen Sprachraums. Die 1920 von Max Reinhardt und Hugo von Hofmannsthal gegründeten Salzburger Festspiele sind das weltweit renommierteste Festival für Oper und Schauspiel.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie eine Theaterrezension über eine Aufführung eines klassischen Dramas an Ihrer Schule oder im Stadttheater für den Kulturteil der Schülerzeitung.",
        textTypeSuggestion: "Rezension / Kritik",
        register: "Journalistisch",
      },
    ],
  },

  // ==========================================
  // THEMA 4: SOZIALE ORGANISATION (SOCIAL ORGANIZATION)
  // ==========================================
  {
    id: "sub-4-1",
    themeId: "organisation",
    code: "4.1",
    displayCode: "T4.1",
    title: "Arbeitswelt, Duale Ausbildung & Zukunft der Berufe",
    englishTitle: "The World of Work, Dual Vocational Training & Future Jobs",
    level: "SL / HL",
    overview:
      "Die Arbeitswelt im Wandel: Das international bewunderte duale Ausbildungssystem in Deutschland, der Trend zum Homeoffice, 4-Tage-Woche, Work-Life-Balance und der wachsende Einfluss von KI auf traditionelle Bürojobs.",
    keyDebates: [
      "Ist ein Universitätsstudium mehr wert als eine fundierte duale Berufsausbildung im Handwerk?",
      "Führt die 4-Tage-Woche zu höherer Produktivität und Mitarbeiterzufriedenheit oder schwächt sie die Wettbewerbsfähigkeit?",
      "Verwischt das Arbeiten im Homeoffice die gesunde Grenze zwischen Beruf und Privatleben?",
    ],
    vocabBullets: [
      { german: "das duale Ausbildungssystem", english: "dual vocational training system", context: "Das duale Ausbildungssystem verbindet praktische Betriebsarbeit mit theoretischem Berufsschulunterricht." },
      { german: "die Vollbeschäftigung", english: "full employment", context: "Viele mittelständische Regionen in Süddeutschland nähern sich der statistischen Vollbeschäftigung." },
      { german: "die Gleitzeit", english: "flexitime", context: "Gleitzeitregelungen ermöglichen es Arbeitnehmern, ihre Arbeitszeiten flexibel an ihr Privatleben anzupassen." },
      { german: "die Arbeitsplatzsicherheit", english: "job security", context: "Trotz wirtschaftlicher Umbrüche bleibt Arbeitsplatzsicherheit ein zentraler Wunsch der Beschäftigten." },
    ],
    culturalSpotlight: {
      title: "Der deutsche Mittelstand (Hidden Champions)",
      region: "Deutschland",
      description:
        "Rund 99% aller Unternehmen in Deutschland gehören zum Mittelstand. Viele sind hochinnovative, oft familiengeführte Weltmarktführer ('Hidden Champions') in Nischenbereichen des Maschinenbaus und der Medizintechnik.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie ein formelles Bewerbungsschreiben um einen Praktikumsplatz in einem innovativen Umwelttechnik-Unternehmen in München.",
        textTypeSuggestion: "Formeller Brief / Bewerbungsschreiben",
        register: "Formell (Sie)",
      },
    ],
  },
  {
    id: "sub-4-2",
    themeId: "organisation",
    code: "4.2",
    displayCode: "T4.2",
    title: "Bildungssystem, Abitur & Chancengleichheit",
    englishTitle: "Education System, Matura/Abitur & Educational Equity",
    level: "SL / HL",
    overview:
      "Das mehrgliedrige Schulsystem im DACH-Raum (Gymnasium, Realschule, Hauptschule bzw. Gesamtschule), Abitur (Deutschland) / Matura (Österreich & Schweiz). Bildungsföderalismus in Deutschland, PISA-Schock und soziale Selektivität.",
    keyDebates: [
      "Sollte das dreigliedrige Schulsystem zugunsten von Gemeinschaftsschulen für alle Schüler abgeschafft werden?",
      "Schadet der Bildungsföderalismus mit 16 verschiedenen Schulsystemen der Vergleichbarkeit von Abschlüssen in Deutschland?",
      "Hängt der Bildungserfolg von Kindern im deutschsprachigen Raum noch immer zu stark vom Geldbeutel und Bildungsstand der Eltern ab?",
    ],
    vocabBullets: [
      { german: "die Hochschulreife / das Abitur", english: "higher education entrance qualification / Abitur", context: "Mit dem Erwerb der Allgemeinen Hochschulreife steht Absolventen jedes Universitätsstudium offen." },
      { german: "die Bildungsungerechtigkeit", english: "educational inequality", context: "PISA-Studien weisen regelmäßig auf die ausgeprägte Bildungsungerechtigkeit im System hin." },
      { german: "der Bildungsföderalismus", english: "educational federalism", context: "Durch den Bildungsföderalismus entscheidet jedes der 16 Bundesländer eigenständig über Lehrpläne." },
      { german: "die Durchlässigkeit", english: "permeability / mobility within system", context: "Kritiker fordern eine größere Durchlässigkeit zwischen den verschiedenen Schulformen." },
    ],
    culturalSpotlight: {
      title: "Matura vs. Abitur & Föderalismus",
      region: "DACH-Raum",
      description:
        "Während der Schulabschluss in Österreich und der Schweiz 'Matura' heißt (von lat. maturitas = Reife), heißt er in Deutschland 'Abitur' (von lat. abire = abgehen). In beiden Fällen berechtigt er zum studieren an allen Universitäten.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Aufsatz für einen Schülerwettbewerb zum Thema: 'Wie würde die ideale Schule der Zukunft aussehen?'",
        textTypeSuggestion: "Essay / Aufsatz",
        register: "Sachlich / Reflektierend",
      },
    ],
  },
  {
    id: "sub-4-3",
    themeId: "organisation",
    code: "4.3",
    displayCode: "T4.3",
    title: "Recht, Ordnung, Zivilcourage & Jugendkriminalität",
    englishTitle: "Law, Order, Civil Courage & Juvenile Justice",
    level: "SL / HL",
    overview:
      "Rechtsstaatlichkeit und bürgerliche Pflichten. Jugendstrafrecht mit Erziehungsgedanke (statt reiner Bestrafung), Phänomene von Jugendkriminalität, Cybermobbing, Zivilcourage im öffentlichen Raum (z.B. U-Bahn) und der Schutz von Bürgerrechten.",
    keyDebates: [
      "Sollte das Jugendstrafrecht bei schweren Straftaten verschärft und das Erwachsenenstrafrecht früher angewendet werden?",
      "Wie kann Zivilcourage bei Bürgern gefördert werden, ohne dass sie sich selbst in Lebensgefahr bringen?",
      "Sollte Cybermobbing als eigenständiger Straftatbestand mit drakonischen Geld- oder Haftstrafen belegt werden?",
    ],
    vocabBullets: [
      { german: "die Zivilcourage", english: "civil courage / moral courage", context: "Zivilcourage bedeutet, im Alltag mutig für bedrängte Mitmenschen einzustehen." },
      { german: "der Erziehungsgedanke", english: "educational / rehabilitative philosophy", context: "Im deutschen Jugendstrafrecht steht der Erziehungsgedanke klar vor der reinen Vergeltung." },
      { german: "die Rechtsstaatlichkeit", english: "rule of law", context: "Die Rechtsstaatlichkeit garantiert jedem Angeklagten ein faires, unvoreingenommenes Gerichtsverfahren." },
      { german: "die Verhältnismäßigkeit", english: "proportionality", context: "Polizeiliche Maßnahmen müssen stets das strenge Gebot der Verhältnismäßigkeit wahren." },
    ],
    culturalSpotlight: {
      title: "Der Fall Dominik Brunner & der Zivilcourage-Preis",
      region: "Deutschland",
      description:
        "2009 schützte Dominik Brunner an einem Münchner S-Bahnhof vier Schulkinder vor gewalttätigen Jugendlichen und wurde dabei getötet. Seine Tat löste eine bundesweite Welle der Bewunderung und die Gründung von Stiftungen zur Förderung von Zivilcourage aus.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie einen Zeitungsartikel über ein Schülerprojekt, das Trainings für Zivilcourage und Deeskalation an weiterführenden Schulen anbietet.",
        textTypeSuggestion: "Zeitungsartikel",
        register: "Journalistisch",
      },
    ],
  },
  {
    id: "sub-4-4",
    themeId: "organisation",
    code: "4.4",
    displayCode: "T4.4",
    title: "Bürgerschaftliches Engagement & Politische Partizipation",
    englishTitle: "Civic Engagement, Protests & Political Participation",
    level: "SL / HL",
    overview:
      "Demokratische Mitbestimmung: Wahlen ab 16 Jahren, Jugendparlamente, Bürgerinitiativen, Demonstrationskultur (Fridays for Future, Großdemonstrationen gegen Rechtsextremismus), Volksabstimmungen in der direkten Demokratie der Schweiz.",
    keyDebates: [
      "Sollte das Wahlalter bei Bundestagswahlen generell auf 16 Jahre gesenkt werden?",
      "Ist die Schweizer direkte Demokratie mit regelmäßigen Volksabstimmungen ein Vorbild für Deutschland und Österreich?",
      "Sind disruptive Protestformen (z.B. Straßenblockaden der 'Letzten Generation') legitimer ziviler Ungehorsam oder schaden sie der Sache?",
    ],
    vocabBullets: [
      { german: "die Mitbestimmung", english: "co-determination / participation", context: "Junge Menschen fordern mehr direkte politische Mitbestimmung in ihren Kommunen." },
      { german: "die Bürgerinitiative", english: "citizens' initiative", context: "Eine lokale Bürgerinitiative verhinderte erfolgreich den Bau einer Autobahntrasse." },
      { german: "das Wahlrecht", english: "voting rights / right to vote", context: "Das Wahlrecht ab 16 stärkt das politische Interesse heranwachsender Jugendlicher." },
      { german: "der zivile Ungehorsam", english: "civil disobedience", context: "Klimaschützer berufen sich bei ihren Aktionen oft auf das Konzept des zivilen Ungehorsams." },
    ],
    culturalSpotlight: {
      title: "Die Landsgemeinde & Schweizer Volksabstimmungen",
      region: "Schweiz",
      description:
        "In der Schweiz stimmen die Bürger viermal im Jahr über Sachfragen per Referendum ab. In den Kantonen Appenzell Innerrhoden und Glarus gibt es noch die urdemokratische 'Landsgemeinde', bei der Bürger auf dem Dorfplatz per Handzeichen Gesetze beschließen.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie eine Rede an Ihre Mitschüler, in der Sie darlegen, warum die Beteiligung an den bevorstehenden Wahlen zum Jugendparlament von entscheidender Bedeutung ist.",
        textTypeSuggestion: "Rede / Vortrag",
        register: "Überzeugend / Appellativ",
      },
    ],
  },
  {
    id: "sub-4-5",
    themeId: "organisation",
    code: "4.5",
    displayCode: "T4.5",
    title: "Gemeinschaftsleben: Stadt vs. Land & Wohnungsnot",
    englishTitle: "Community Life: Urban vs. Rural & Housing Crisis",
    level: "SL / HL",
    overview:
      "Wohn- und Lebensräume: Die Anziehungskraft von Metropolen (Berlin, München, Wien, Zürich), explodierende Mieten, Gentrifizierung im Vergleich zu Landflucht, aussterbenden Dörfern und dem Charme von Mehrgenerationenhäusern.",
    keyDebates: [
      "Sollte der Staat strenge Mietpreisbremsen verhängen oder enteignen, um bezahlbaren Wohnraum in Großstädten zu garantieren?",
      "Führt die Landflucht junger Menschen zum wirtschaftlichen und kulturellen Ausbluten ländlicher Räume?",
      "Bieten Co-Living und Mehrgenerationenhäuser zukunftsfähige Lösungen gegen urbane Einsamkeit?",
    ],
    vocabBullets: [
      { german: "die Wohnungsnot", english: "housing shortage", context: "In Großstädten herrscht für Studierende und Familien akute Wohnungsnot." },
      { german: "die Mietpreisbremse", english: "rent cap / brake", context: "Die gesetzliche Mietpreisbremse soll den rasanten Anstieg der Kaltmieten dämpfen." },
      { german: "die Landflucht", english: "rural depopulation / flight", context: "Fehlende schnelles Internet und Busverbindungen beschleunigen die Landflucht." },
      { german: "das Zusammengehörigkeitsgefühl", english: "sense of solidarity / community", context: "In kleinen Dorfgemeinschaften ist das Zusammengehörigkeitsgefühl oft besonders stark ausgeprägt." },
    ],
    culturalSpotlight: {
      title: "Das Wiener Modell des sozialen Wohnbaus",
      region: "Österreich",
      description:
        "Wien gilt weltweit als Vorzeigestadt für bezahlbaren Wohnraum. Über 60% der Wiener Bevölkerung leben in geförderten Gemeindebauten oder Genossenschaftswohnungen mit hoher architektonischer Qualität und strengen Mietobergrenzen.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie einen formellen Beschwerdebrief an den Oberbürgermeister Ihrer Stadt über die unzureichende Anbindung Ihres Stadtteils an den öffentlichen Nahverkehr.",
        textTypeSuggestion: "Formeller Brief",
        register: "Formell (Sie)",
      },
    ],
  },

  // ==========================================
  // THEMA 5: GEMEINSAM DIE ERDE TEILEN (SHARING THE PLANET)
  // ==========================================
  {
    id: "sub-5-1",
    themeId: "planet",
    code: "5.1",
    displayCode: "T5.1",
    title: "Umwelt, Klimawandel & Die deutsche Energiewende",
    englishTitle: "Environment, Climate Change & The Energy Transition",
    level: "SL / HL",
    overview:
      "Die deutsche 'Energiewende': Ausstieg aus der Atomkraft (Atomausstieg 2023), Ausbau von Windkraft und Solarenergie, Kohleausstieg, Klimaziele und die Rolle Deutschlands als Pionierland im Umweltschutz.",
    keyDebates: [
      "War der gleichzeitige Ausstieg Deutschlands aus Atom- und Kohlekraft ökonomisch und ökologisch vernünftig?",
      "Können erneuerbare Energien die Grundlast der deutschen Schwerindustrie verlässlich sichern?",
      "Wie müssen Lasten des Klimaschutzes sozial gerecht zwischen Arm und Reich verteilt werden?",
    ],
    vocabBullets: [
      { german: "die Energiewende", english: "energy transition", context: "Die deutsche Energiewende erfordert gewaltige Investitionen in Stromtrassen und Speicher." },
      { german: "die erneuerbaren Energien", english: "renewable energies", context: "Windkraft und Photovoltaik sind die Hauptpfeiler der erneuerbaren Energien." },
      { german: "der Treibhausgasausstoß", english: "greenhouse gas emission", context: "Industrieländer müssen ihren Treibhausgasausstoß drastisch reduzieren." },
      { german: "der Atomausstieg", english: "nuclear phaseout", context: "Mit dem Abschalten der letzten drei Kernkraftwerke vollzog Deutschland 2023 den Atomausstieg." },
    ],
    culturalSpotlight: {
      title: "Die Wiege der Anti-Atomkraft-Bewegung",
      region: "Deutschland",
      description:
        "Die deutsche Umweltbewegung entstand in den 1970er Jahren beim Widerstand gegen das geplante Kernkraftwerk Wyhl. Aus diesen Bürgerinitiativen ging 1980 die Partei 'Die Grünen' hervor, die heute eine feste Kraft in deutschen Parlamenten ist.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Blogbeitrag, in dem Sie analysieren, wie Schüler im Alltag durch bewusstes Verhalten aktiv zum Klimaschutz beitragen können.",
        textTypeSuggestion: "Blogbeitrag",
        register: "Informell (Du / Ihr)",
      },
    ],
  },
  {
    id: "sub-5-2",
    themeId: "planet",
    code: "5.2",
    displayCode: "T5.2",
    title: "Konsumgesellschaft, Mülltrennung & Kreislaufwirtschaft",
    englishTitle: "Consumer Society, Recycling & Circular Economy",
    level: "SL / HL",
    overview:
      "Der deutsche Müll-Mythos: Das ausgefeilte Pfandsystem (Einweg- vs. Mehrwegpfand), der 'Grüne Punkt', strikte Mülltrennung (Gelber Sack, Altpapier, Biomüll, Restmüll), Zero-Waste-Trends und Unverpackt-Läden.",
    keyDebates: [
      "Ist das deutsche System der Mülltrennung weltweites Vorbild oder beruhigt es lediglich das Gewissen der Konsumenten, während zu wenig recycelt wird?",
      "Sollten Verpackungen aus Einwegplastik komplett verboten und durch Pfandbehälter ersetzt werden?",
      "Wie kann Fast Fashion und die Wegwerfmentalität zugunsten von langlebigen Secondhand-Kreisläufen überwunden werden?",
    ],
    vocabBullets: [
      { german: "die Mülltrennung", english: "waste separation", context: "Präzise Mülltrennung gilt im deutschen Alltag als ungeschriebene Bürgerpflicht." },
      { german: "das Einwegpfand", english: "disposable bottle deposit", context: "Auf Einweg-Plastikflaschen und Dosen wird ein Pfand von 25 Cent erhoben." },
      { german: "die Kreislaufwirtschaft", english: "circular economy", context: "In einer echten Kreislaufwirtschaft werden Rohstoffe wiederverwertet statt verbrannt." },
      { german: "die Wegwerfgesellschaft", english: "throwaway society", context: "Reparieren statt Neukaufen ist die wirksamste Antwort auf die Wegwerfgesellschaft." },
    ],
    culturalSpotlight: {
      title: "Der 'Grüne Punkt' & das Dosenpfand",
      region: "Deutschland",
      description:
        "1991 erfand Deutschland das 'Duale System' mit dem Grünen Punkt, bei dem Hersteller für die Entsorgung ihrer Verpackungen zahlen müssen. 2003 folgte das Dosenpfand, das die Rücklaufquote von Dosen und Flaschen auf über 98% steigerte.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie einen Leitfaden für ein Schulprojekt mit dem Ziel, die Schule in eine 'plastikfreie Zero-Waste-Zone' zu verwandeln.",
        textTypeSuggestion: "Leitfaden / Broschüre",
        register: "Informell / Motivierend",
      },
    ],
  },
  {
    id: "sub-5-3",
    themeId: "planet",
    code: "5.3",
    displayCode: "T5.3",
    title: "Menschenrechte, Asyl & Internationale Gerechtigkeit",
    englishTitle: "Human Rights, Asylum & Global Justice",
    level: "SL / HL",
    overview:
      "Menschenrechtsschutz im Grundgesetz (Artikel 1: 'Die Würde des Menschen ist unantastbar'). Das Recht auf Asyl für politisch Verfolgte, europäische Grenzpolitik (Frontex), Entwicklungszusammenarbeit und Lieferkettengesetze gegen Kinderarbeit.",
    keyDebates: [
      "Wie lässt sich das universelle Recht auf Asyl mit begrenzten kommunalen Unterbringungskapazitäten in Einklang bringen?",
      "Sind Unternehmen in reichen Industrieländern für die Arbeitsbedingungen bei ihren Zulieferern im Globalen Süden verantwortlich?",
      "Sollte Entwicklungshilfe an die Einhaltung demokratischer Standards und Menschenrechte geknüpft werden?",
    ],
    vocabBullets: [
      { german: "die Menschenwürde", english: "human dignity", context: "Die Menschenwürde ist unantastbar – so lautet der feierliche erste Satz des Grundgesetzes." },
      { german: "das Asylrecht", english: "right to asylum", context: "Das grundgesetzliche Asylrecht entstand als historische Lehre aus dem nationalsozialistischen Terror." },
      { german: "das Lieferkettengesetz", english: "supply chain due diligence act", context: "Das Lieferkettengesetz verpflichtet Konzerne, Kinderarbeit bei Zulieferern zu unterbinden." },
      { german: "die Fluchtursachen bekämpfen", english: "to tackle root causes of displacement", context: "Internationale Hilfsorganisationen fordern, Fluchtursachen vor Ort wirksam zu bekämpfen." },
    ],
    culturalSpotlight: {
      title: "Artikel 1 des Deutschen Grundgesetzes",
      region: "Deutschland",
      description:
        "Geschaffen 1949 vom Parlamentarischen Rat unter dem Eindruck der Schrecken des Zweiten Weltkriegs und Holocausts. Die Unantastbarkeit der Menschenwürde steht unter der sogenannten 'Ewigkeitsgarantie' und kann niemals durch eine Verfassungsänderung abgeschafft werden.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen argumentativen Essay darüber, warum das deutsche Lieferkettengesetz ein notwendiger Schritt zu weltweiter Gerechtigkeit ist.",
        textTypeSuggestion: "Essay / Erörterung",
        register: "Sachlich / Argumentativ",
      },
    ],
  },
  {
    id: "sub-5-4",
    themeId: "planet",
    code: "5.4",
    displayCode: "T5.4",
    title: "Frieden, Konfliktbewältigung & Schweizer Neutralität",
    englishTitle: "Peacekeeping, Conflict Resolution & Swiss Neutrality",
    level: "SL / HL",
    overview:
      "Friedenssicherung im 21. Jahrhundert: Die historische Schweizer Neutralität und das Internationale Rote Kreuz (Genf), die Rolle Deutschlands in NATO und EU ('Zeitenwende' 2022 mit 100 Mrd. Euro Sondervermögen), Pazifismus versus wehrhafte Demokratie.",
    keyDebates: [
      "Ist die Schweizer Neutralität in Zeiten völkerrechtswidriger Angriffskriege noch moralisch haltbar?",
      "Bedeutet die deutsche 'Zeitenwende' die endgültige Abkehr von der traditionellen zurückhaltenden Friedenspolitik der Nachkriegszeit?",
      "Können diplomatische Verhandlungen Kriege beenden, wenn eine Konfliktpartei völkerrechtliche Verträge bricht?",
    ],
    vocabBullets: [
      { german: "die Neutralität", english: "neutrality", context: "Die bewaffnete Neutralität ist seit dem Wiener Kongress von 1815 das Fundament der Schweizer Außenpolitik." },
      { german: "die Zeitenwende", english: "historic turning point / epochal shift", context: "Bundeskanzler Scholz prägte den Begriff der 'Zeitenwende' nach dem Beginn des Ukraine-Kriegs." },
      { german: "die Friedensverhandlung", english: "peace negotiation", context: "Genf dient seit Jahrzehnten als neutraler Gastgeber für heikle internationale Friedensverhandlungen." },
      { german: "die Abrüstung", english: "disarmament", context: "Weltweite nukleare Abrüstung bleibt das oberste Ziel internationaler Friedensbewegungen." },
    ],
    culturalSpotlight: {
      title: "Das Internationale Genf & das Rote Kreuz",
      region: "Schweiz",
      description:
        "1863 gründete der Schweizer Henry Dunant in Genf das Rote Kreuz. Bis heute ist Genf der europäische Hauptsitz der Vereinten Nationen (UN) und Symbol für humanitäre Diplomatie und Völkerrecht.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Verfassen Sie eine Rede vor einem Schülerforum, in der Sie erörtern, welche Rolle junge Menschen für die Bewahrung des Friedens in Europa spielen können.",
        textTypeSuggestion: "Rede / Vortrag",
        register: "Feierlich / Mahnend",
      },
    ],
  },
  {
    id: "sub-5-5",
    themeId: "planet",
    code: "5.5",
    displayCode: "T5.5",
    title: "Gleichberechtigung, Diversität & Inklusion",
    englishTitle: "Gender Equality, Diversity & Social Inclusion",
    level: "SL / HL",
    overview:
      "Gleichstellung aller Geschlechter im Berufsleben (Gender Pay Gap, Frauenquote in Vorständen), Rechte von LGBTQ+-Personen ('Ehe für alle', Selbstbestimmungsgesetz in Deutschland), Inklusion von Menschen mit Behinderung in Schulen und im Alltag.",
    keyDebates: [
      "Ist eine gesetzliche Frauenquote in Aufsichtsräten und Führungsetagen notwendig, um die gläserne Decke zu durchbrechen?",
      "Wie barrierefrei und inklusiv sind Städte, Schulen und öffentliche Verkehrsmittel im deutschsprachigen Raum tatsächlich?",
      "Inwiefern tragen offene Debatten über Vielfalt und geschlechtliche Identität zu einer toleranteren Gesellschaft bei?",
    ],
    vocabBullets: [
      { german: "die Gleichberechtigung", english: "equal rights / equality", context: "Männer und Frauen sind gleichberechtigt – so postuliert es das Grundgesetz unmissverständlich." },
      { german: "die Barrierefreiheit", english: "accessibility", context: "Umfassende Barrierefreiheit an Bahnhöfen ist eine unverzichtbare Voraussetzung für Inklusion." },
      { german: "die Entgeltlücke (Gender Pay Gap)", english: "gender wage gap", context: "Die unerklärte Entgeltlücke zwischen Männern und Frauen sinkt nur sehr langsam." },
      { german: "die gesellschaftliche Vielfalt", english: "social diversity", context: "Eine moderne Demokratie begreift gesellschaftliche Vielfalt als Bereicherung und Stärke." },
    ],
    culturalSpotlight: {
      title: "Der Christopher Street Day (CSD) in Köln und Berlin",
      region: "Deutschland",
      description:
        "Der ColognePride / CSD in Köln ist mit über einer Million Teilnehmern eine der größten Veranstaltungen der LGBTQ+-Gemeinschaft weltweit. Er vereint farbenfrohe Feierlaune mit politischen Forderungen nach Gleichstellung und Diskriminierungsfreiheit.",
    },
    sampleEssayPrompts: [
      {
        prompt: "Schreiben Sie einen Magazinartikel über den Stand der Inklusion von Schülern mit körperlichen Behinderungen an Ihrer Schule und formulieren Sie konkrete Verbesserungsvorschläge.",
        textTypeSuggestion: "Magazinartikel",
        register: "Journalistisch / Engagiert",
      },
    ],
  },
];

export const IB_THEMES: IBTheme[] = [
  {
    id: "identitaeten",
    themeNumber: 1,
    title: "Identitäten",
    englishTitle: "Identities",
    color: "#f59e0b", // Amber / Gold
    accentClass: "from-amber-500/20 to-orange-500/20 border-amber-400/40 text-amber-300",
    iconName: "UserCheck",
    description:
      "Erforsche, was das Menschsein ausmacht: Lebensstile, Gesundheit, Wohlbefinden, Überzeugungen, Werte, Subkulturen und die Wechselwirkung von Sprache und Identität.",
    subtopics: ALL_SUBTOPICS.filter((s) => s.themeId === "identitaeten"),
  },
  {
    id: "erfahrungen",
    themeNumber: 2,
    title: "Erfahrungen",
    englishTitle: "Experiences",
    color: "#ef4444", // Crimson / Red
    accentClass: "from-rose-500/20 to-red-500/20 border-rose-400/40 text-rose-300",
    iconName: "Compass",
    description:
      "Erforsche die Vielfalt an Ereignissen und Reisen, die unser Leben prägen: Freizeitkultur, Sanfter Tourismus, Lebensgeschichten, Bräuche, Feste und Erfahrungen von Migration.",
    subtopics: ALL_SUBTOPICS.filter((s) => s.themeId === "erfahrungen"),
  },
  {
    id: "genialitaet",
    themeNumber: 3,
    title: "Menschliche Genialität",
    englishTitle: "Human Ingenuity",
    color: "#06b6d4", // Cyan
    accentClass: "from-cyan-500/20 to-teal-500/20 border-cyan-400/40 text-cyan-300",
    iconName: "Lightbulb",
    description:
      "Erforsche, wie menschliche Kreativität und Wissenschaft unsere Welt verändern: Deutsche Ingenieurskunst, Künstliche Intelligenz, Medienlandschaft, Bauhaus-Design und Literatur.",
    subtopics: ALL_SUBTOPICS.filter((s) => s.themeId === "genialitaet"),
  },
  {
    id: "organisation",
    themeNumber: 4,
    title: "Soziale Organisation",
    englishTitle: "Social Organization",
    color: "#10b981", // Emerald
    accentClass: "from-emerald-500/20 to-teal-500/20 border-emerald-400/40 text-emerald-300",
    iconName: "Building2",
    description:
      "Erforsche, wie Gemeinschaften strukturiert sind: Das duale Ausbildungssystem, Bildungswesen (Abitur/Matura), Rechtsstaatlichkeit, Zivilcourage, Partizipation und Stadt vs. Land.",
    subtopics: ALL_SUBTOPICS.filter((s) => s.themeId === "organisation"),
  },
  {
    id: "planet",
    themeNumber: 5,
    title: "Gemeinsam die Erde teilen",
    englishTitle: "Sharing the Planet",
    color: "#8b5cf6", // Violet / Purple
    accentClass: "from-violet-500/20 to-indigo-500/20 border-violet-400/40 text-violet-300",
    iconName: "Globe2",
    description:
      "Erforsche die Herausforderungen des globalen Zusammenlebens: Die deutsche Energiewende, Kreislaufwirtschaft, Menschenrechte, Schweizer Neutralität, Frieden und Diversität.",
    subtopics: ALL_SUBTOPICS.filter((s) => s.themeId === "planet"),
  },
];
