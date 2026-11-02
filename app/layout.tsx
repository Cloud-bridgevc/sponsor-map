import Script from "next/script";
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { StoreProvider } from "@/lib/store";
import "./globals.css";
import "./glow.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });

export const metadata: Metadata = {
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://sponsormap.site"),
  applicationName: "SponsorMap",
  openGraph: { siteName: "SponsorMap", url: "https://sponsormap.site", type: "website" },
  title: "SponsorMap — Sponsorship operations & performance reporting",
  description:
    "SponsorMap turns sponsorship agreements into tracked commitments, assigned fulfilment tasks, verified evidence and sponsor-ready reports.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Script src="/glow.js" strategy="afterInteractive" />
        <script type="application/ld+json" id="founders-ld" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"SponsorMap\", \"url\": \"https://sponsormap.site\", \"email\": \"hello@sponsormap.site\", \"logo\": \"https://sponsormap.site/icon-512.png\", \"founder\": [{\"@type\": \"Person\", \"name\": \"Temitope Afolabi\", \"jobTitle\": \"Founder/CEO\"}, {\"@type\": \"Person\", \"name\": \"Obinna Eze\", \"jobTitle\": \"Co-founder/CTO\"}]}" }} />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
