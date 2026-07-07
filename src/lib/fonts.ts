import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";

// System chrome: nav, buttons, labels, headings. Engineered and upright —
// IBM Plex was designed for technical/corporate documentation, which is
// exactly the register this portfolio wants for its UI voice.
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

// The record: dates, data, verification marks, code. Reserved strictly for
// short, factual strings — never for paragraphs.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

// The testimony: bio copy, project narratives, case-study prose. A serif
// built for sustained reading, giving long-form text warmth that the
// sans/mono pair deliberately withholds.
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});
