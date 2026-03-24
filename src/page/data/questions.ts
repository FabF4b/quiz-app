import type { Question } from "../../types";

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Welcher Planet unseres Sonnensystems ist der einzige, der sich im Uhrzeigersinn um seine eigene Achse dreht?",
    hint: "Dieser Planet wird oft als der „Abendstern“ bezeichnet.",
    answers: [
      {
        id: "a",
        text: "Mars",
        isCorrect: false,
        info: " Dreht sich fast im gleichen Rhythmus wie die Erde (ein Tag dauert ca. $24,6$ Stunden) gegen den Uhrzeigersinn.",
      },
      {
        id: "b",
        text: "Venus",
        isCorrect: true,
        info: "Die Venus weist eine sogenannte retrograde Rotation auf. Während fast alle anderen Planeten gegen den Uhrzeigersinn rotieren, dreht sich die Venus andersherum.",
      },
      {
        id: "c",
        text: "Jupiter",
        isCorrect: false,
        info: "Dieser Gasriese rotiert extrem schnell (ein Tag dauert nur ca.10 Stunden), ebenfalls gegen den Uhrzeigersinn.",
      },
      {
        id: "d",
        text: "Saturn",
        isCorrect: false,
        info: "Dieser Gasriese rotiert extrem schnell (ein Tag dauert nur ca.10 Stunden), ebenfalls gegen den Uhrzeigersinn.",
      },
    ],
  },

  {
    id: 2,
    text: "Welches Tier hat das größte Herz aller Lebewesen auf der Erde?",
    hint: "Es handelt sich um das größte Säugetier, das jemals gelebt hat.",
    answers: [
      {
        id: "a",
        text: "Elefant",
        isCorrect: false,
        info: "Sein Herz wiegt etwa 12 bis 21kg. Das ist zwar schwer, aber ein Blauwal-Herz ist rund 30-mal schwerer.",
      },
      {
        id: "b",
        text: "Giraffe",
        isCorrect: false,
        info: "Sie hat ein spezialisiertes Hochdruck-Herz, um das Blut 2 Meter hoch zum Kopf zu pumpen, aber es wiegt nur etwa 11 kg.",
      },
      {
        id: "c",
        text: "Blauwal",
        isCorrect: true,
        info: "Das Herz eines Blauwals kann so groß wie ein Kleinwagen sein und wiegt etwa 600 kg.",
      },
      {
        id: "d",
        text: "Riesenkalmar",
        isCorrect: false,
        info: "Er hat drei Herzen, die aber im Vergleich zu Säugetieren klein sind.",
      },
    ],
  },

  {
    id: 3,
    text: "In welchem Jahr sank die RMS Titanic bei ihrer Jungfernfahrt im Nordatlantik?",
    hint: "Das Ereignis fand kurz vor dem Ausbruch des Ersten Weltkriegs statt.",
    answers: [
      {
        id: "a",
        text: "1912",
        isCorrect: true,
        info: "Die Titanic kollidierte am 14. April 1912 mit einem Eisberg und sank in den frühen Morgenstunden des Folgetags.",
      },
      {
        id: "b",
        text: "1905",
        isCorrect: false,
        info: "Zu dieser Zeit existierten die Pläne für Schiffe dieser Größe noch gar nicht.",
      },
      {
        id: "c",
        text: "1920",
        isCorrect: false,
        info: "Das war bereits die Ära der „Roaring Twenties“, lange nach der Schiffskatastrophe.",
      },
      {
        id: "d",
        text: "1915",
        isCorrect: false,
        info: "In diesem Jahr wurde die RMS Lusitania von einem deutschen U-Boot versenkt, was ein wichtiger Grund für den späteren Kriegseintritt der USA war.",
      },
    ],
  },

  {
    id: 4,
    text: "Welches chemische Element hat das Symbol „Au“ im Periodensystem?",
    hint: "Es ist ein gelblich glänzendes Edelmetall.",
    answers: [
      {
        id: "a",
        text: "Silber",
        isCorrect: false,
        info: "(Ag): Steht für Argentum.",
      },
      {
        id: "b",
        text: "Kupfer",
        isCorrect: false,
        info: "(Cu): Steht für Cuprum.",
      },
      {
        id: "c",
        text: "Gold",
        isCorrect: true,
        info: "Das Symbol „Au“ leitet sich vom lateinischen Wort für Gold, Aurum, ab.",
      },
      {
        id: "d",
        text: "Aluminium",
        isCorrect: false,
        info: "(Al): Ein einfaches Kürzel des Namens.",
      },
    ],
  },

  {
    id: 5,
    text: "Wie viele Knochen hat ein erwachsener Mensch normalerweise im Körper?",
    hint: "Es sind etwas mehr als zweihundert.",
    answers: [
      {
        id: "a",
        text: "156",
        isCorrect: false,
        info: "Diese Zahl ist schlichtweg zu niedrig; allein Hände und Füße machen zusammen schon über $100$ Knochen aus.",
      },
      {
        id: "b",
        text: "256",
        isCorrect: false,
        info: "300 ist die ungefähre Anzahl bei einem Neugeborenen. Während des Wachstums verschmelzen viele Knochen (z. B. am Schädel oder Kreuzbein) zu einer Einheit.",
      },
      {
        id: "c",
        text: "300",
        isCorrect: false,
        info: "300 ist die ungefähre Anzahl bei einem Neugeborenen. Während des Wachstums verschmelzen viele Knochen (z. B. am Schädel oder Kreuzbein) zu einer Einheit.",
      },
      {
        id: "d",
        text: "206",
        isCorrect: true,
        info: "Ein Erwachsener hat 206 Knochen. Babys werden mit etwa 300 geboren, aber viele davon wachsen im Laufe der Entwicklung zusammen.",
      },
    ],
  },

  {
    id: 6,
    text: "Welches Land hat die meisten natürlichen Seen weltweit?",
    hint: "Dieses Land liegt in Nordamerika und hat ein Ahornblatt auf der Flagge.",
    answers: [
      {
        id: "a",
        text: "Russland",
        isCorrect: false,
        info: "Besitzt zwar den Baikalsee (das tiefste und wasserreichste Süßwasserreservoir), hat aber in der schieren Anzahl an einzelnen Seen das Nachsehen gegen Kanada.",
      },
      {
        id: "b",
        text: "USA",
        isCorrect: false,
        info: "Bekannt für die „Großen Seen“, aber die Gesamtanzahl kleinerer natürlicher Seen ist geringer.",
      },
      {
        id: "c",
        text: "Brasilien",
        isCorrect: false,
        info: "Der Amazonas ist das wasserreichste Flusssystem, aber das Land ist nicht so stark von eiszeitlichen Seen geprägt wie der Norden.",
      },
      {
        id: "d",
        text: "Kanada",
        isCorrect: true,
        info: "Kanada beherbergt über die Hälfte aller natürlichen Seen der Welt.",
      },
    ],
  },

  {
    id: 7,
    text: "Was war das erste Lebewesen, das die Erde im Weltraum umkreiste?",
    hint: "Es handelt sich um ein vierbeiniges Tier aus der Sowjetunion.",
    answers: [
      {
        id: "a",
        text: "Hündin Laika",
        isCorrect: true,
        info: "Laika wurde 1957 mit der sowjetischen Sputnik 2 ins All geschickt. Fruchtfliegen waren zwar früher im All, aber nicht in einer Erdumlaufbahn.",
      },
      {
        id: "b",
        text: "Schimpanse Ham",
        isCorrect: false,
        info: "Er flog 1961 für die USA, erreichte aber keine stabile Erdumlaufbahn (suborbitaler Flug).",
      },
      {
        id: "c",
        text: "Jurij Gagarin",
        isCorrect: false,
        info: "Er war 1961 der erste Mensch, also 4 Jahre nach der Hündin Laika.",
      },
      {
        id: "d",
        text: "Fruchtfliegen",
        isCorrect: false,
        info: "Sie wurden 1947 von den USA mit einer V2-Rakete hochgeschickt, um die Strahlenbelastung zu testen, kehrten aber sofort wieder zur Erde zurück, ohne eine Umkreisung.",
      },
    ],
  },

  {
    id: 8,
    text: "Welches Organ im menschlichen Körper kann sich als einziges fast vollständig regenerieren?",
    hint: "Dieses Organ ist maßgeblich für die Entgiftung des Körpers zuständig.",
    answers: [
      {
        id: "a",
        text: "Leber",
        isCorrect: true,
        info: "Die Leber kann selbst nach dem Verlust von 75% ihres Gewebes wieder zur vollen Größe nachwachsen.",
      },
      {
        id: "b",
        text: "Herz",
        isCorrect: false,
        info: "Narbengewebe nach einem Infarkt bleibt meist dauerhaft bestehen.",
      },
      {
        id: "c",
        text: "Lunge",
        isCorrect: false,
        info: "Sie kann sich zwar von Infekten erholen, aber zerstörtes Gewebe (z. B. bei Emphysemen) regeneriert sich nicht neu.",
      },
      {
        id: "d",
        text: "Niere",
        isCorrect: false,
        info: "Wenn Nephrone (die Filtereinheiten) absterben, ist das endgültig; die verbleibenden müssen dann die Mehrarbeit leisten.",
      },
    ],
  },

  {
    id: 9,
    text: "Wer erfand das World Wide Web (WWW)?",
    hint: "Er arbeitete als Informatiker am Schweizer Kernforschungszentrum CERN.",
    answers: [
      {
        id: "a",
        text: "Bill Gates",
        isCorrect: false,
        info: "War Software- und Hardware-Pionier, nutzt aber bestehende Netzwerke, um Produkte darauf aufzubauen.",
      },
      {
        id: "b",
        text: "Steve Jobs",
        isCorrect: false,
        info: "War Software- und Hardware-Pionier, nutzt aber bestehende Netzwerke, um Produkte darauf aufzubauen.",
      },
      {
        id: "c",
        text: "Tim Berners-Lee",
        isCorrect: true,
        info: "Tim Berners-Lee entwickelte 1989 am CERN die Protokolle, die das heutige Surfen im Web ermöglichen.",
      },
      {
        id: "d",
        text: "Elon Musk",
        isCorrect: false,
        info: "Er gründete Firmen wie PayPal oder SpaceX, kam aber erst viel später auf die Bühne der Technikgeschichte.",
      },
    ],
  },

  {
    id: 10,
    text: "Welche Farbe hat die Haut eines Eisbären unter seinem weißen Fell?",
    hint: "Denk an die Farbe, die Sonnenlicht am effizientesten in Wärme umwandelt.",
    answers: [
      {
        id: "a",
        text: "Schwarz",
        isCorrect: true,
        info: "Die schwarze Haut hilft dem Eisbären dabei, die Wärme der Sonnenstrahlen optimal zu absorbieren.",
      },
      {
        id: "b",
        text: "Rosa",
        isCorrect: false,
        info: "Diese Farbe findet man oft bei Hausschweinen oder rasierten hellen Hunden, aber sie würde in der Arktis keine Wärme absorbieren.",
      },
      {
        id: "c",
        text: "Weiß",
        isCorrect: false,
        info: "Das Fell des Eisbären ist eigentlich pigmentfrei und hohl (transparent). Es wirkt nur durch die Lichtreflexion weiß. Darunter ist die Haut tiefschwarz, um jede winzige Menge UV-Strahlung in Wärme umzuwandeln.",
      },
      {
        id: "d",
        text: "Grau",
        isCorrect: false,
        info: "Das Fell des Eisbären ist eigentlich pigmentfrei und hohl (transparent). Es wirkt nur durch die Lichtreflexion weiß. Darunter ist die Haut tiefschwarz, um jede winzige Menge UV-Strahlung in Wärme umzuwandeln.",
      },
    ],
  },
];
