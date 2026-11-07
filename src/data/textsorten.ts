import { Textsorte } from "./types";

export const ALL_TEXTSORTEN: Textsorte[] = [
  {
    id: "artikel",
    title: "Artikel (Zeitung / Magazin)",
    englishTitle: "Newspaper / Magazine Article",
    category: "journalistisch",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Journalistisch / Sachlich",
    targetAudience: "Breite Öffentlichkeit, Schülerzeitungsleser oder Fachpublikum",
    purpose: "Informieren, analysieren, Denkanstöße liefern und den Leser fesseln",
    mandatoryConventions: [
      "Prägnante, packende Hauptüberschrift (Headline)",
      "Unterzeile oder Lead-Absatz (Wer? Was? Wann? Wo? Warum?)",
      "Gliederung in klare Sinnabschnitte mit prägnanten Zwischenüberschriften",
      "Journalistischer, objektiv-analytischer Ton (gehobenes Standarddeutsch)",
      "Autorenangabe (z.B. 'Von: Lukas Weber' oder 'Ein Bericht von...') am Anfang oder Ende",
      "Rhetorische Frage oder zukunftsorientierter Schlusssatz",
    ],
    structureBlueprint: [
      {
        section: "Überschrift & Lead",
        description: "Blickfang-Titel und kurzer Teaser-Satz, der das Problem umreißt.",
        essentialPhrases: [
          "Ein Phänomen, das die Gemüter erhitzt...",
          "Immer mehr Jugendliche stellen sich die fundamentale Frage...",
        ],
      },
      {
        section: "Hauptteil (Analyse & Fakten)",
        description: "Entwicklung der Argumente, Expertenzitate im Konjunktiv I, Pro & Kontra.",
        essentialPhrases: [
          "Experten weisen darauf hin, dass...",
          "Laut einer aktuellen Studie der Universität Zürich...",
          "Während Befürworter betonen, warnen Kritiker vor...",
        ],
      },
      {
        section: "Schluss / Fazit",
        description: "Zusammenfassung, persönliche Einordnung und Ausblick in die Zukunft.",
        essentialPhrases: [
          "Zusammenfassend lässt sich festhalten, dass...",
          "Eines steht außer Zweifel: Die Weichen für die Zukunft müssen jetzt gestellt werden.",
        ],
      },
    ],
    sampleTemplate: `TITEL: DIGITALISIERUNG IM KLASSENZIMMER: FLUCH ODER SEGEN?
Unterzeile: Warum Tablets allein noch keinen besseren Unterricht garantieren

Von: Julia Schneider

Berlin — Ein Klick, und das gesamte Schulbuch erscheint auf dem hochauflösenden Bildschirm. Was vor zehn Jahren noch nach Zukunftsmusik klang, ist an vielen Gymnasien im DACH-Raum längst gelebte Realität. Doch die anfängliche Euphorie weicht zunehmend kritischen Stimmen.

Chancen für individuelles Lernen
Befürworter betonen unablässig die didaktischen Vorzüge. Interaktive Simulationen ermöglichen es Schülern, komplexe naturwissenschaftliche Zusammenhänge im eigenen Lerntempo zu begreifen. Eine Lehrkraft aus München berichtete im Gespräch, die Motivation habe sich spürbar gesteigert.

Die Kehrseite der ständigen Bildschirmzeit
Andererseits darf man die gravierenden Risiken nicht verschweigen. Konzentrationsschwächen, Ablenkung durch Messengerdienste und die soziale Isolation bereiten Pädagogen Sorgen. Überdies verstärkt die Anschaffung teurer Endgeräte die bestehende Bildungsungerechtigkeit.

Fazit und Ausblick
Es lässt sich nicht leugnen, dass digitale Werkzeuge das Lernen bereichern können. Entscheidend bleibt jedoch nicht die Hardware, sondern die pädagogische Einbettung. Technik muss dem Menschen dienen – nicht umgekehrt.`,
    criterionCChecklist: [
      "Haben Sie eine aussagekräftige Überschrift und einen Autorennamen verwendet?",
      "Sind Absätze und Zwischenüberschriften vorhanden?",
      "Ist das Register durchgehend sachlich und informativ?",
    ],
  },
  {
    id: "blogbeitrag",
    title: "Blogbeitrag / Weblog",
    englishTitle: "Blog Post / Weblog",
    category: "persoenlich",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Informell (Du / Ihr)",
    targetAudience: "Online-Community, Gleichaltrige, Follower",
    purpose: "Persönliche Erfahrungen teilen, Meinungen vertreten und zur Diskussion anregen",
    mandatoryConventions: [
      "Kreativer Blogtitel und Name des Blogs (z.B. 'Julias Gedankenwelt // Lifestyle & Schule')",
      "Datum und Uhrzeit der Veröffentlichung",
      "Persönliche Begrüßung der Leserschaft ('Hallo ihr Lieben!', 'Liebe Community')",
      "Subjektiver, lebendiger Ton mit rhetorischen Fragen und Anekdoten",
      "Call-to-Action am Ende mit Aufforderung zu Kommentaren ('Wie seht ihr das? Schreibt es in die Kommentare!')",
      "Typische Webelemente (Tags / Schlagwörter wie #Klimaschutz #ZeroWaste)",
    ],
    structureBlueprint: [
      {
        section: "Blog-Header & Intro",
        description: "Blogname, Datum, Begrüßung und Einleitung mit aktuellem Anlass.",
        essentialPhrases: [
          "Willkommen zurück auf meinem Blog!",
          "Heute muss ich mir einfach mal etwas von der Seele schreiben...",
          "Habt ihr euch eigentlich schon mal gefragt, warum...",
        ],
      },
      {
        section: "Hauptteil (Persönliche Erfahrung)",
        description: "Schilderung eines eigenen Erlebnisses, Reflexion und Argumente.",
        essentialPhrases: [
          "Als ich gestern durch die Fußgängerzone lief, fiel mir auf...",
          "Meiner Meinung nach sollten wir endlich begreifen, dass...",
        ],
      },
      {
        section: "Interaktiver Schluss",
        description: "Fazit, Leseransprache, Kommentaraufruf und Signatur.",
        essentialPhrases: [
          "Was denkt ihr darüber? Habt ihr ähnliche Erfahrungen gemacht?",
          "Hinterlasst mir unbedingt einen Kommentar unter diesem Post!",
          "Bis zum nächsten Mal, eure Sarah",
        ],
      },
    ],
    sampleTemplate: `KOPFZEILE: GRÜNE GEDANKEN // DER NACHHALTIGKEITS-BLOG
Veröffentlicht am: 14. Oktober 2026 von Paulina | 5 Kommentare | Lesezeit: 3 Min.
Tags: #ZeroWaste #Schulalltag #Umweltschutz #Klimawandel

Hallo ihr Lieben,

kennt ihr dieses deprimierende Gefühl, wenn man nach der Mittagspause über den Schulhof läuft und überall weggeworfene Plastikverpackungen, Einwegbecher und Alufolien herumliegen sieht? Genau dieses Bild hat mich heute Morgen wieder unfassbar wütend gemacht!

Warum ist Müllvermeidung eigentlich so schwer?
In der Theorie reden alle von der Rettung unseres Planeten und der Energiewende. Doch wenn es darum geht, die eigene Trinkflasche aufzufüllen oder eine Brotdose statt Frischhaltefolie zu benutzen, scheitern viele an ihrer eigenen Bequemlichkeit. Dabei ist es eigentlich kinderleicht, mit kleinen Schritten Großes zu bewirken.

Meine 3 Tipps für euren Schulalltag:
1. Schafft euch eine langlebige Edelstahlflasche an.
2. Boykottiert die Einwegverpackungen in der Cafeteria.
3. Startet eine Initiative für getrennte Mülleimer in den Klassenzimmern!

Was meint ihr dazu?
Findet ihr, dass unsere Schule strengere Regeln einführen sollte? Oder habt ihr noch andere geniale Ideen für einen plastikfreien Alltag? Schreibt mir eure Gedanken unbedingt unten in die Kommentare!

Bis ganz bald,
Eure Paulina`,
    criterionCChecklist: [
      "Sind Blogname, Veröffentlichungsdatum und Autorenname klar erkennbar?",
      "Gibt es eine direkte, ansprechende Leseransprache im informellen Register ('Du / Ihr')?",
      "Endet der Beitrag mit einem eindeutigen Call-to-Action für die Kommentarspalte?",
    ],
  },
  {
    id: "formeller-brief",
    title: "Formeller Brief / Beschwerdebrief",
    englishTitle: "Formal Letter / Letter of Complaint",
    category: "oeffentlich",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Formell (Sie)",
    targetAudience: "Behörden, Schulleitung, Bürgermeister, Unternehmensführung, Redaktion",
    purpose: "Offizielles Anliegen vortragen, fundiert beschweren, Missstände anmahnen oder bitten",
    mandatoryConventions: [
      "Vollständiger Briefkopf (Absenderadresse links oben, Empfängeradresse darunter)",
      "Ort und Datum rechtsbündig (z.B. 'München, den 12. Mai 2026')",
      "Prägnante, aussagekräftige Betreffzeile (in Fettdruck, ohne das Wort 'Betreff')",
      "Formelle Anrede ('Sehr geehrte Damen und Herren,' oder 'Sehr geehrte Frau Dr. Müller,')",
      "Strikte Einhaltung der Höflichkeitsform 'Sie / Ihr / Ihnen' (großgeschrieben!)",
      "Formelle Grußformel ('Mit freundlichen Grüßen') gefolgt von handschriftlicher Signatur & Druckname",
    ],
    structureBlueprint: [
      {
        section: "Briefkopf & Betreff",
        description: "Absender, Empfänger, Datum und Betreffzeile.",
        essentialPhrases: [
          "Betrifft: Beschwerde über unzumutbare Verkehrsverhältnisse an der Heinrich-Heine-Schule",
          "München, den 15. November 2026",
        ],
      },
      {
        section: "Einleitung & Anlass",
        description: "Höfliche Anrede und präzise Darstellung des Schreibanlasses.",
        essentialPhrases: [
          "Sehr geehrter Herr Bürgermeister Schneider,",
          "ich wende mich heute im Namen der gesamten Schülerschaft an Sie, um auf einen gravierenden Missstand aufmerksam zu machen.",
        ],
      },
      {
        section: "Hauptteil (Argumente & Forderungen)",
        description: "Detaillierte Schilderung der Probleme und konkrete Lösungsvorschläge.",
        essentialPhrases: [
          "Aus diesem Grund fordern wir Sie eindringlich dazu auf...",
          "Es ist für uns unverständlich, weshalb bisher keine Maßnahmen ergriffen wurden.",
        ],
      },
      {
        section: "Schluss & Gruß",
        description: "Fristsetzung, Bitte um Stellungnahme und offizielle Grußformel.",
        essentialPhrases: [
          "Für ein persönliches Gespräch stehen wir Ihnen jederzeit gerne zur Verfügung.",
          "Ich sehe Ihrer baldigen Antwort mit großem Interesse entgegen.",
          "Mit freundlichen Grüßen,",
        ],
      },
    ],
    sampleTemplate: `Maximilian Keller
Goethestraße 14
80336 München

An das Schul- und Sportamt der Landeshauptstadt München
Referat für Bildung
Bayerstraße 28
80335 München

München, den 20. Oktober 2026

Beschwerde über den mangelhaften baulichen Zustand der städtischen Turnhalle

Sehr geehrte Damen und Herren,

ich wende mich heute in meiner Funktion als Schülersprecher des Max-Planck-Gymnasiums an Sie, um auf den unhaltbaren Zustand unserer Sporthalle aufmerksam zu machen.

Seit Beginn des laufenden Schuljahres ist die Heizungsanlage defekt, was bei sinkenden Außentemperaturen zu einer unzumutbaren Kälte in den Umkleideräumen und Hallen führt. Überdies regnet es an mehreren Stellen durch das Dach, sodass der Hallenboden rutschig und das Verletzungsrisiko für die Schülerinnen und Schüler immens hoch ist. Trotz wiederholter Meldungen der Schulleitung wurden bislang keinerlei Instandsetzungsarbeiten vorgenommen.

Aus Gründen der Fürsorgepflicht und der Gesundheit aller Beteiligten fordern wir Sie nachdrücklich auf:
1. Eine umgehende Begutachtung der Bausubstanz durch einen Fachgutachter zu veranlassen.
2. Die Heizungsanlage innerhalb der kommenden zwei Wochen provisorisch instand zu setzen.
3. Einen verbindlichen Zeitplan für die Dachsanierung vorzulegen.

Wir bitten Sie höflich, uns bis zum 5. November 2026 eine schriftliche Stellungnahme zukommen zu lassen. Für ein klärendes Gespräch stehen wir Ihnen jederzeit zur Verfügung.

Mit freundlichen Grüßen

Maximilian Keller
(Schülersprecher des Max-Planck-Gymnasiums)`,
    criterionCChecklist: [
      "Sind Absender, Empfänger, Ort, Datum und Betreffzeile vollständig vorhanden?",
      "Wurde konsequent die Höflichkeitsform 'Sie/Ihnen/Ihr' großgeschrieben?",
      "Schließt der Brief mit 'Mit freundlichen Grüßen' und vollständigem Namen ab?",
    ],
  },
  {
    id: "informeller-brief",
    title: "Informeller Brief / E-Mail",
    englishTitle: "Informal Letter / E-Mail to a Friend",
    category: "persoenlich",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Informell (Du / Ihr)",
    targetAudience: "Freunde, Austauschschüler, Gastfamilie, Bekannte",
    purpose: "Persönliche Erlebnisse schildern, Gefühle teilen, Ratschläge geben, einladen",
    mandatoryConventions: [
      "Bei E-Mail: 'Von:', 'An:', 'Datum:', 'Betreff:' | Bei Brief: Ort und Datum oben rechts",
      "Herzliche, informelle Anrede ('Liebe Lena,', 'Lieber Felix,')",
      "Bezugnahme auf vorherigen Kontakt ('Wie geht es dir? Lange nichts von dir gehört!')",
      "Konsequentes Duzen ('du / dir / dich / dein' - kleingeschrieben)",
      "Lebendige Erzählweise mit Redewendungen, Fragen und Ausrufen",
      "Warme Schlussformel ('Herzliche Grüße', 'Alles Liebe', 'Bis bald') und Vorname",
    ],
    structureBlueprint: [
      {
        section: "Kopf & Begrüßung",
        description: "E-Mail-Header oder Ort/Datum sowie persönliche Anrede.",
        essentialPhrases: [
          "Betreff: Tolle Neuigkeiten aus Berlin! / Mein Austauschjahr",
          "Liebe Mia,",
          "ich hoffe, bei dir ist alles in bester Ordnung!",
        ],
      },
      {
        section: "Hauptteil (Erzählung & Gefühle)",
        description: "Bericht über das Thema (Reise, Fest, Schule, Alltagsproblem).",
        essentialPhrases: [
          "Du glaubst gar nicht, was mir letzte Woche passiert ist...",
          "Ich musste sofort an unser letztes Gespräch denken, weil...",
          "Ehrlich gesagt war ich am Anfang ziemlich nervös, aber...",
        ],
      },
      {
        section: "Schluss & Grüße",
        description: "Fragen an den Empfänger, Ausblick auf baldiges Wiedersehen, Gruß.",
        essentialPhrases: [
          "Schreib mir so schnell wie möglich zurück, ich warte sehnsüchtig auf deine Antwort!",
          "Ganz liebe Grüße an deine Eltern!",
          "Alles Liebe / Bis ganz bald,",
        ],
      },
    ],
    sampleTemplate: `Von: felix.schulz@mail.de
An: lukas.meyer@mail.at
Datum: 18. November 2026, 17:35 Uhr
Betreff: Mein erstes Zwischenfazit zum Schüleraustausch in Zürich!

Lieber Lukas,

wie geht es dir? Es tut mir furchtbar leid, dass ich mich erst jetzt melde, aber die ersten Wochen hier in der Schweiz waren einfach unglaublich intensiv! 

Du glaubst gar nicht, wie sehr ich mich an den Dialekt gewöhnen musste. Schwyzerdütsch im Alltag zu verstehen, ist am Anfang eine echte Herausforderung! Aber meine Gastfamilie ist super herzlich und nimmt sich viel Zeit, mir alles geduldig zu erklären. Gestern haben wir gemeinsam ein traditionelles Käsefondue gegessen – einfach köstlich!

Auch an der Kantonsschule läuft es richtig gut. Was mich total fasziniert, ist die Pünktlichkeit der Züge und wie viele Schüler selbst bei eisigem Wetter mit dem Velo zur Schule fahren. Ich habe mich sogar schon im Schulchor angemeldet, um schneller Anschluss zu finden.

Wie sieht es bei dir in Wien aus? Hast du die ersten Klausuren gut überstanden? Wir müssen unbedingt bald mal wieder telefonieren!

Meld dich bald, ich freue mich riesig auf deine Antwort!

Ganz liebe Grüße,
Dein Felix`,
    criterionCChecklist: [
      "Sind E-Mail-Kopfzeilen (Von, An, Betreff) oder Brief-Datum korrekt?",
      "Wurde eine herzliche Anrede mit Komma gewählt und danach kleingeschrieben?",
      "Ist das Register authentisch informell (Duzen) durchgehalten?",
    ],
  },
  {
    id: "tagebucheintrag",
    title: "Tagebucheintrag",
    englishTitle: "Diary Entry",
    category: "reflektierend",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Persönlich / Reflektierend",
    targetAudience: "Das Tagebuch selbst (Intimer Selbstmonolog)",
    purpose: "Innerste Gedanken, Zweifel, Ängste, moralische Konflikte und Hoffnungen verarbeiten",
    mandatoryConventions: [
      "Datum und oft Wochentag / Uhrzeit oben rechts (z.B. 'Freitag, 24. Oktober, 23:45 Uhr')",
      "Klassische Tagebuch-Anrede ('Liebes Tagebuch,') oder direkter Einstieg",
      "Subjektiver Gedankenstrom mit rhetorischen Fragen und Selbstzweifeln",
      "Emotionaler Wortschatz (Erleichterung, Wut, Scham, Stolz, Euphorie)",
      "Ausblick auf den nächsten Tag oder eine noch ungelöste Entscheidung",
      "Typische Schlussbemerkung ('Ich muss jetzt schlafen', 'Gute Nacht')",
    ],
    structureBlueprint: [
      {
        section: "Datum & Eröffnung",
        description: "Zeitangabe und stimmungsvoller Einstieg in den Eintrag.",
        essentialPhrases: [
          "Donnerstag, 12. Mai, kurz vor Mitternacht",
          "Liebes Tagebuch,",
          "ich weiß gar nicht, wo ich anfangen soll. Heute war einer dieser Tage...",
        ],
      },
      {
        section: "Konflikt & Reflexion",
        description: "Das zentrale Erlebnis und die emotionalen Turbulenzen.",
        essentialPhrases: [
          "Warum habe ich in diesem Moment bloß geschwiegen?",
          "Einerseits verstehe ich seine Reaktion, aber andererseits tut es unheimlich weh.",
          "Ich fühle mich hin- und hergerissen zwischen Pflicht und Sehnsucht.",
        ],
      },
      {
        section: "Schlussgedanke",
        description: "Hoffnung, Vorsatz für morgen und Abschied.",
        essentialPhrases: [
          "Morgen werde ich allen Mut zusammennehmen und das Gespräch suchen.",
          "Jetzt fallen mir die Augen zu. Hoffentlich sieht die Welt morgen heller aus.",
          "Gute Nacht!",
        ],
      },
    ],
    sampleTemplate: `Sonntag, 8. November 2026, 23:15 Uhr

Liebes Tagebuch,

ich liege im Bett und kann einfach kein Auge zutun. Meine Gedanken kreisen unaufhörlich um das, was sich heute Nachmittag auf dem Schulhof abgespielt hat.

Als ich sah, wie drei Mitschüler aus der Parallelklasse Jonas wegen seiner Kleidung verspotteten und ihn verbal in die Enge trieben, stockte mir der Atem. Mein Herz raste. Mein erster Impuls war: Geh einfach weiter, bring dich nicht selbst in Schwierigkeiten! Doch dann schoss mir Dominik Brunner durch den Kopf und alles, was wir im Unterricht über Zivilcourage gelernt hatten. 

Ich nahm all meinen Mut zusammen, stellte mich neben Jonas und sagte mit fester Stimme: „Hört sofort auf damit, sonst hole ich den Schulleiter!“ Die drei schauten mich verblüfft an, murmelten eine Beleidigung und zogen tatsächlich ab. 

In diesem Moment fiel mir ein gewaltiger Stein vom Herzen. Jonas blickte mich mit tränenden Augen an und flüsterte einfach nur: „Danke.“ Dieses eine Wort bedeutete mir mehr als alles andere. Dennoch zittere ich noch immer am ganzen Körper. War es leichtsinnig von mir? Was passiert morgen? 

Aber tief in meinem Inneren weiß ich: Wegschauen wäre feige gewesen. Ich bin stolz darauf, nicht geschwiegen zu haben.

Ich muss jetzt versuchen zu schlafen. Morgen beginnt eine neue Woche.

Gute Nacht!`,
    criterionCChecklist: [
      "Ist ein klares Datum (und eventuell Uhrzeit) vorhanden?",
      "Werden innere Monologe, Gefühle und Selbstreflexionen glaubwürdig vermittelt?",
      "Endet der Text mit einem typischen Tagebuch-Ausklang?",
    ],
  },
  {
    id: "rede-vortrag",
    title: "Rede / Vortrag",
    englishTitle: "Speech / Public Presentation",
    category: "oeffentlich",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Appellativ / Rhetorisch / Überzeugend",
    targetAudience: "Schülerschaft, Kollegium, Bürgerversammlung, Festgesellschaft",
    purpose: "Zuhörer aufrütteln, überzeugen, begeistern und zu konkretem Handeln bewegen",
    mandatoryConventions: [
      "Passende Anrede des Publikums ('Liebe Mitschülerinnen und Mitschüler,', 'Sehr geehrte Damen und Herren,')",
      "Fesselnde Einleitung (Anekdote, schockierende Statistik oder Zitat)",
      "Rhetorische Stilmittel (Dreigliedrigkeit / Trikolon, rhetorische Fragen, Wiederholungen / Anaphern)",
      "Verwendung von 'Wir / Uns'-Formulierungen zur Schaffung von Wir-Gefühl",
      "Klarer Schlusssatz mit leidenschaftlichem Appell ('Lasst uns gemeinsam...')",
      "Dank an die Zuhörer für ihre Aufmerksamkeit ('Ich danke Ihnen / euch für Ihre / eure Aufmerksamkeit!')",
    ],
    structureBlueprint: [
      {
        section: "Begrüßung & Hook",
        description: "Höfliche Anrede und packender Einstieg in die Rede.",
        essentialPhrases: [
          "Liebe Mitschülerinnen und Mitschüler, verehrte Lehrerinnen und Lehrer,",
          "stellen Sie sich für einen kurzen Augenblick vor...",
          "Wir alle kennen das Sprichwort...",
        ],
      },
      {
        section: "Hauptteil (Argumentation & Trikolon)",
        description: "Problemanalyse, Vision und Überzeugungsarbeit.",
        essentialPhrases: [
          "Es reicht nicht mehr aus, nur zu reden. Wir müssen handeln, wir müssen mutig sein, wir müssen vorangehen!",
          "Die Frage ist doch nicht, ob wir es uns leisten können, sondern ob wir es uns leisten können, nichts zu tun!",
        ],
      },
      {
        section: "Appell & Dank",
        description: "Finaler Call-to-Action und Dank an das Publikum.",
        essentialPhrases: [
          "Lassen Sie uns heute gemeinsam den ersten Schritt wagen!",
          "Vielen herzlichen Dank für Ihre Aufmerksamkeit!",
        ],
      },
    ],
    sampleTemplate: `Liebe Mitschülerinnen und Mitschüler, sehr geehrte Schulleitung!

Stellt euch für einen kurzen Moment vor, ihr wacht im Jahr 2050 auf. Die Winter in den Alpen sind schneefrei, Hitzewellen von über 40 Grad gehören zum Alltag, und sauberes Trinkwasser ist zu einem kostbaren Luxusgut geworden. Klingt das nach einem dystopischen Science-Fiction-Roman? Leider nicht. Es ist die wissenschaftliche Prognose, wenn wir unser Konsumverhalten nicht grundlegend überdenken.

Wir stehen heute an einer historischen Weggabelung. Oft hören wir von Erwachsenen den bequemen Satz: „Was kann ein einzelner Jugendlicher schon bewirken?“ Doch ich sage euch: Jede große Bewegung der Weltgeschichte begann mit einer Handvoll engagierter junger Menschen, die sich weigerten, den Status quo hinzunehmen!

Was können wir ganz konkret an unserer Schule tun?
Erstens: Wir müssen die Lebensmittelverschwendung in unserer Cafeteria stoppen.
Zweitens: Wir müssen unser Schuldach endlich mit Solarpaneelen ausstatten.
Drittens: Wir müssen den Mut haben, Mitschüler anzusprechen, die ihren Abfall achtlos auf den Boden werfen.

Es reicht nicht mehr aus, freitags für das Klima zu demonstrieren und montags wieder Einwegbecher zu kaufen. Echter Wandel beginnt im Kleinen – hier, heute, bei jedem Einzelnen von uns!

Lasst uns unsere Schule zu einem Vorbild für Nachhaltigkeit machen. Lasst uns die Generation sein, die nicht weggeschaut, sondern gehandelt hat!

Ich danke euch allen von Herzen für eure Aufmerksamkeit!`,
    criterionCChecklist: [
      "Wurde das Publikum zu Beginn standesgemäß begrüßt?",
      "Enthält die Rede wirkungsvolle rhetorische Figuren (Trikolon, rhetorische Fragen, Wir-Appell)?",
      "Schließt die Rede mit einem kraftvollen Appell und einem Dankeschön ab?",
    ],
  },
  {
    id: "essay-eroerterung",
    title: "Essay / Argumentative Erörterung",
    englishTitle: "Argumentative Essay / Discussion",
    category: "journalistisch",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Sachlich / Argumentativ / Gehoben",
    targetAudience: "Akademische Leser, Lehrkräfte, Prüfungskommission",
    purpose: "Eine komplexe Fragestellung dialektisch abwägen (Pro & Kontra) und eine Synthese ziehen",
    mandatoryConventions: [
      "Aussagekräftiger Titel, der das Thema umreißt",
      "Einleitung: Hinführung zum Thema, Definition zentraler Begriffe, klare Problemstellung",
      "Dialektischer Hauptteil: Strukturierte Argumente mit Begründung und konkretem Beispiel (Behauptung - Begründung - Beispiel)",
      "Verwendung anspruchsvoller Konnektoren (einerseits/andererseits, zwar... aber, demgegenüber)",
      "Neutrales, unaufgeregtes Register mit Passiv und unpersönlichen Konstruktionen (man, es lässt sich)",
      "Schluss / Synthese: Gewichtung der Argumente und ein begründetes eigenes Urteil",
    ],
    structureBlueprint: [
      {
        section: "Einleitung",
        description: "Aktualität des Themas, These und Fragestellung.",
        essentialPhrases: [
          "Kaum ein Thema wird in der gegenwärtigen Öffentlichkeit so kontrovers diskutiert wie...",
          "Vor diesem Hintergrund stellt sich die fundamentale Frage, ob...",
        ],
      },
      {
        section: "Pro- & Kontra-Argumentation",
        description: "These, Antithese, fundierte Belege und Beispiele aus dem DACH-Raum.",
        essentialPhrases: [
          "Befürworter führen ins Feld, dass...",
          "Demgegenüber muss jedoch eingewendet werden, dass...",
          "Ein treffendes Beispiel hierfür stellt das deutsche Pfandsystem dar...",
        ],
      },
      {
        section: "Synthese & Fazit",
        description: "Abwägung beider Seiten und zukunftsorientierter Lösungsvorschlag.",
        essentialPhrases: [
          "Wägt man die vorgebrachten Argumente gegeneinander ab, so zeigt sich...",
          "Zusammenfassend lässt sich der Standpunkt vertreten, dass...",
        ],
      },
    ],
    sampleTemplate: `TITEL: CHANCENGLEICHHEIT ODER ELITENFÖRDERUNG?
Eine kritische Erörterung des mehrgliedrigen deutschen Schulsystems

In kaum einem anderen europäischen Land hängt der schulische Erfolg von Kindern so stark vom sozioökonomischen Status des Elternhauses ab wie in Deutschland. Diese ernüchternde Erkenntnis wiederholen internationale Bildungsstudien wie PISA seit über zwei Jahrzehnten. Vor diesem Hintergrund stellt sich die drängende Frage: Ist das traditionelle dreigliedrige Schulsystem noch zeitgemäß oder zementiert es soziale Ungleichheit?

Auf der einen Seite betonen Befürworter des gegliederten Systems die Notwendigkeit leistungshomogener Lerngruppen. Schülerinnen und Schüler auf dem Gymnasium könnten gezielt auf die Anforderungen eines Universitätsstudiums vorbereitet werden, während an Realschulen die praxisorientierte Vorbereitung auf das duale Ausbildungssystem im Vordergrund stehe. Eine Überforderung schwächerer oder Unterforderung hochbegabter Kinder werde so vermieden.

Demgegenüber steht jedoch die verheerende frühe Selektion. Im Alter von gerade einmal zehn Jahren wird in den meisten Bundesländern über die Zukunft eines Kindes entschieden. Ein treffendes Beispiel hierfür sind Akademikerkinder, die bei gleichen kognitiven Fähigkeiten eine dreimal höhere Wahrscheinlichkeit haben, eine Gymnasialempfehlung zu erhalten, als Kinder aus Arbeiterfamilien. Diese frühe Trennung verhindert gegenseitiges Lernen und schürt gesellschaftliche Vorurteile.

Wägt man beide Positionen gegeneinander ab, so wird deutlich, dass das gegenwärtige System reformbedürftig ist. Eine längere gemeinsame Schulzeit bis zur achten Klasse nach skandinavischem Vorbild, kombiniert mit gezielter individueller Förderung, könnte Spitzenleistungen ermöglichen, ohne die Chancengerechtigkeit zu opfern.`,
    criterionCChecklist: [
      "Wurde eine ausgewogene Gliederung mit Einleitung, Pro, Kontra und Synthese gewählt?",
      "Sind Argumente stets nach dem Schema Behauptung-Begründung-Beispiel aufgebaut?",
      "Wurde ein gehobenes, akademisches Register durchgehalten?",
    ],
  },
  {
    id: "rezension-kritik",
    title: "Rezension / Kritik (Buch / Film / Theater)",
    englishTitle: "Review (Book, Film or Theater)",
    category: "journalistisch",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Journalistisch / Urteilend",
    targetAudience: "Kulturinteressierte Leser, Schülerzeitung, Magazinabonnenten",
    purpose: "Ein Werk vorstellen, analysieren, Stärken und Schwächen bewerten und eine Empfehlung aussprechen",
    mandatoryConventions: [
      "Griffiger Titel der Rezension (z.B. 'Ein düsteres Meisterwerk über Schuld und Moral')",
      "Metadaten-Kasten (Titel des Werks, Autor/Regisseur, Erscheinungsjahr, Genre, Bewertung z.B. ★★★★☆)",
      "Kurze, prägnante Zusammenfassung der Handlung ohne Spoiler",
      "Tiefgehende Analyse von Themen, Schauspielleistung oder Inszenierung",
      "Klares, begründetes Schlussurteil mit Empfehlung für die Zielgruppe",
    ],
    structureBlueprint: [
      {
        section: "Kopfdaten & Einleitung",
        description: "Werkangaben, Erwartungshaltung und Einstieg.",
        essentialPhrases: [
          "Titel: Der Vorleser | Regie: Stephen Daldry | Genre: Historiendrama",
          "Mit seinem neuesten Werk gelingt dem Regisseur ein filmischer Coup...",
        ],
      },
      {
        section: "Handlung & Analyse",
        description: "Inhaltsabriss und Untersuchung der darstellerischen Stärken.",
        essentialPhrases: [
          "Die Handlung dreht sich um die verhängnisvolle Beziehung zwischen...",
          "Hervorzuheben ist insbesondere die schauspielerische Glanzleistung von...",
        ],
      },
      {
        section: "Urteil & Fazit",
        description: "Kritische Abwägung, Sternewertung und Kauf-/Sehempfehlung.",
        essentialPhrases: [
          "Trotz kleinerer Längen im Mittelteil überzeugt das Werk auf ganzer Linie.",
          "Fazit: Ein absolutes Muss für alle, die sich für deutsche Geschichte interessieren! (5/5 Sterne)",
        ],
      },
    ],
    sampleTemplate: `DÜSTERE GERECHTIGKEIT IM KORRUPTEN PROVINZNEST
Eine Theaterkritik zu Friedrich Dürrenmatts Tragikomödie „Der Besuch der alten Dame“

Inszenierung: Stadttheater Freiburg | Regie: Claudia Bauer | Dauer: 120 Minuten | Bewertung: ★★★★★

Ist Moral käuflich, wenn der Hunger groß genug ist? Mit dieser zeitlosen und beklemmenden Frage konfrontiert das Stadttheater Freiburg sein Publikum in einer furiosen Neuinszenierung von Friedrich Dürrenmatts weltberühmtem Drama „Der Besuch der alten Dame“.

Die Handlung ist so zynisch wie brillant: Die Milliardärin Claire Zachanassian kehrt in ihre verarmte Heimatstadt Güllen zurück. Sie bietet den Bürgern eine Milliarde unter einer mörderischen Bedingung: Jemand muss ihren einstigen Geliebten Alfred Ill töten, der sie vor Jahrzehnten schwanger verleugnet und ins Elend gestürzt hat. Was zunächst empört als unmoralisch zurückgewiesen wird, weicht schleichend der Verführung des Geldes.

Die schauspielerische Umsetzung verdient höchstes Lob. Die Verkörperung der rachsüchtigen Milliardärin als leblose, von Prothesen zusammengehaltene Kunstfigur lässt dem Zuschauer den Atem stocken. Besonders eindringlich gelingt der Regie die Darstellung der Güllener Bürger: In neuen gelben Schuhen – auf Pump gekauft – demonstrieren sie die schleichende Korrumpierbarkeit des Menschen.

Fazit:
Dürrenmatts Meisterwerk hat an bedrückender Aktualität nichts eingebüßt. Eine schonungslose Parabel über die Macht des Kapitals, die noch lange nach dem Schlussapplaus im Gedächtnis nachhallt. Ein unbedingtes Muss für jeden Theaterliebhaber!`,
    criterionCChecklist: [
      "Sind Werkangaben (Autor/Regisseur, Titel, Genre) vollständig genannt?",
      "Wurde die Inhaltsangabe kurz gehalten, um Raum für Kritik und Analyse zu lassen?",
      "Gibt es ein klares persönliches Fazit mit Zielgruppenempfehlung?",
    ],
  },
  {
    id: "broschuere-flyer",
    title: "Broschüre / Flugblatt / Flyer",
    englishTitle: "Brochure / Leaflet / Flyer",
    category: "oeffentlich",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Appellativ / Werbend / Direkt",
    targetAudience: "Schulgemeinschaft, Nachbarschaft, Festivalbesucher",
    purpose: "Aufklären, informieren, für eine Initiative werben und zum Mitmachen motivieren",
    mandatoryConventions: [
      "Großer, aufmerksamkeitsstarker Slogan / Titel (Catchy Headline)",
      "Kompakte Gliederung mit Zwischenüberschriften, Boxen und Aufzählungszeichen (Bullet Points)",
      "Kurze, prägnante Sätze und ansprechende Formulierungen",
      "Hervorgehobene Kontaktdaten (Website, E-Mail, Instagram, Raumangaben)",
      "Direkter Handlungsaufruf (Call-to-Action: 'Mach mit!', 'Werde Teil des Teams!')",
    ],
    structureBlueprint: [
      {
        section: "Titel & Slogan",
        description: "Catchy Titel, der sofort ins Auge springt.",
        essentialPhrases: [
          "DEINE SCHULE. DEINE ZUKUNFT. DEINE STIMME!",
          "Gemeinsam für ein grünes und gerechtes Miteinander.",
        ],
      },
      {
        section: "Das Problem & Unsere Mission",
        description: "Warum existiert diese Initiative? Was sind die Ziele?",
        essentialPhrases: [
          "Wusstest du schon, dass...?",
          "Wir von der Umwelt-AG haben es uns zur Aufgabe gemacht...",
        ],
      },
      {
        section: "Konkrete Angebote & Mitmach-Aufruf",
        description: "Was kann der Leser tun? Kontakt und Treffzeiten.",
        essentialPhrases: [
          "So kannst du dich einbringen:",
          "Komm vorbei: Jeden Mittwoch um 14 Uhr in Raum 204!",
          "Kontakt: www.schule-nachhaltig.de | Insta: @gruene_schule",
        ],
      },
    ],
    sampleTemplate: `DEINE ZUKUNFT BEGINNT JETZT: WERDE KLIMABOTSCHAFTER AN DEINER SCHULE!

Bist du es leid, nur über die Klimakrise zu reden, anstatt selbst etwas zu verändern? Willst du aktiv mitgestalten und deinen Schulalltag grüner machen? Dann bist du bei uns genau richtig!

WER SIND WIR?
Wir sind die Schüler-Initiative „GreenCampus“ – ein engagiertes Team aus Schülerinnen und Schülern aller Jahrgangsstufen, die sich für konkreten Umweltschutz einsetzen.

UNSERE AKTUELLEN PROJEKTE:
• Plastikfreie Schule: Austausch von Einwegbechern durch stylische Mehrwegpfand-Flaschen.
• Schulgarten 2.0: Anbau von eigenem Bio-Gemüse und Bau von Insektenhotels.
• Kleidertausch-Basar: Gemeinsam gegen Fast Fashion – langlebige Mode für alle!
• Rad-Challenge: Wer fährt die meisten Schulweg-Kilometer auf dem Fahrrad?

WAS BRINGT ES DIR?
✓ Du sammelst wertvolle Erfahrungen im Projektmanagement.
✓ Du lernst coole, engagierte Leute kennen.
✓ Du erhältst ein offizielles Zertifikat für dein Engagement (perfekt für Bewerbungen!).

WANN & WO?
Wann: Jeden Donnerstag in der 7. Stunde (13:30–14:15 Uhr)
Wo: Im Biologiesaal 2 (Neubau, 1. Stock)

KONTAKT:
Fragen? Schreib uns einfach auf Instagram: @greencampus_gymnasium
Oder per Mail an: initiative@greencampus-schule.de

Worauf wartest du noch? Schau vorbei und pack mit an!`,
    criterionCChecklist: [
      "Ist ein auffälliger Hauptslogan vorhanden?",
      "Wurde der Text durch Zwischenüberschriften und Stichpunkte visuell aufgelockert?",
      "Sind praktische Kontaktdaten und ein direkter Call-to-Action enthalten?",
    ],
  },
  {
    id: "interview",
    title: "Interview (Schriftliches Q&A)",
    englishTitle: "Interview / Q&A Dialogue",
    category: "journalistisch",
    recommendedLength: "SL: 250–400 Wörter | HL: 450–600 Wörter",
    register: "Journalistisch (Siezen oder Duzen je nach Partner)",
    targetAudience: "Leserschaft von Schülerzeitungen oder Magazinen",
    purpose: "Eine Persönlichkeit vorstellen, Meinungen erfragen und Hintergründe beleuchten",
    mandatoryConventions: [
      "Interessante Überschrift, die oft ein Kernzitat enthält",
      "Kurzer Einleitungstext: Wer wird interviewt? Warum gerade jetzt?",
      "Klare Kennzeichnung von Fragen und Antworten (z.B. 'Schülerzeitung:' und 'Prof. Dr. Weber:')",
      "Kluge, nachhakende Fragen, die über bloße Ja/Nein-Antworten hinausgehen",
      "Dank und Verabschiedung am Ende des Gesprächs",
    ],
    structureBlueprint: [
      {
        section: "Überschrift & Lead",
        description: "Titel mit Zitat und kurzer Steckbrief des Interviewpartners.",
        essentialPhrases: [
          "„KI wird Lehrer niemals ersetzen, aber sie wird Unterricht revolutionieren“",
          "Ein Gespräch mit der Bildungsforscherin Dr. Anja Becker über die Schule von morgen.",
        ],
      },
      {
        section: "Frage-und-Antwort-Teil",
        description: "Strukturierter Dialog mit abwechselnden Frage- und Antwortblöcken.",
        essentialPhrases: [
          "Redaktion: Frau Becker, viele Lehrkräfte befürchten...",
          "Frau Becker: Diese Sorge ist verständlich, greift jedoch zu kurz...",
          "Redaktion: Was raten Sie Schülern ganz konkret?",
        ],
      },
      {
        section: "Abschluss & Dank",
        description: "Letzte persönliche Frage und förmliche Verabschiedung.",
        essentialPhrases: [
          "Redaktion: Herzlichen Dank für dieses aufschlussreiche Gespräch!",
          "Frau Becker: Sehr gerne, ich bedanke mich ebenfalls.",
        ],
      },
    ],
    sampleTemplate: `„WIR DÜRFEN DIE DIGITALISIERUNG NICHT DEN TECH-KONZERNEN ÜBERLASSEN“
Ein Gespräch mit der renommierten Medienpädagogin Dr. Katharina Vogt über Smartphones an Schulen

Von: Tim Bernau

Frau Dr. Vogt forscht an der Humboldt-Universität zu Berlin über die Auswirkungen sozialer Medien auf Jugendliche. Anlässlich des bundesweiten Digital-Gipfels sprach unsere Schülerzeitung mit ihr über Handyverbote und moderne Medienkompetenz.

Schülerzeitung: Frau Dr. Vogt, mehrere europäische Nachbarländer haben Smartphones an Schulen komplett verboten. Sollte Deutschland diesem Beispiel folgen?

Dr. Katharina Vogt: Ein pauschales Verbot mag auf den ersten Blick verlockend einfach klingen, löst aber das eigentliche Problem nicht. Sobald die Schulklingel ertönt, tauchen die Jugendlichen ohnehin wieder in die digitale Welt ein. Unsere Aufgabe als Pädagogen besteht nicht im Verstecken der Geräte, sondern im Vermitteln eines reflektierten, gesunden Umgangs.

Schülerzeitung: Doch viele Lehrkräfte klagen über ständige Ablenkung im Unterricht. Wie lässt sich dieser Konflikt lösen?

Dr. Vogt: Indem man klare Spielregeln vereinbart! Smartphones gehören während Erklärphasen in eine Sammelbox an der Wand. Gleichzeitig sollten sie aber gezielt für Recherche oder Quiz-Apps genutzt werden. Technik ist kein Feind, sondern ein Werkzeug.

Schülerzeitung: Was ist Ihr wichtigster Ratschlag an Schüler, die das Gefühl haben, süchtig nach TikTok zu sein?

Dr. Vogt: Schaltet die Push-Benachrichtigungen aus! Wer ständig von Tönen unterbrochen wird, kann keine Tiefenkonzentration aufbauen. Gönnt euch feste handyfreie Zonen am Tag.

Schülerzeitung: Frau Dr. Vogt, wir danken Ihnen herzlich für dieses spannende Interview!

Dr. Vogt: Es war mir ein Vergnügen. Alles Gute für eure Schülerzeitung!`,
    criterionCChecklist: [
      "Gibt es einen einleitenden Kasten zur Person und zum Anlass des Interviews?",
      "Sind Fragesteller und Antwortender durch Fettdruck oder Initialen klar getrennt?",
      "Schließt der Dialog mit einem höflichen Dankeschön ab?",
    ],
  },
];
