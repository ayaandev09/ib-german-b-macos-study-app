import type { Metadata, Viewport } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "IB German B SL & HL — Master Codex & Grammatik-Studio",
  description:
    "Interactive Liquid Glass study dashboard, complete 5 IB themes database, grammar mastery matrix, Paper 1 text types blueprints, high-scoring Redemittel, and HL literature oral simulator for IB German B SL & HL.",
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark" data-academic-font="jakarta" data-handwritten-style="jakarta">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cinzel:wght@600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&family=Kalam:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020308] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
