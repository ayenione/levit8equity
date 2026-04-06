import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Levit8 Equity Inc — Acquiring Home Services Businesses",
  description:
    "Levit8 Equity Inc is looking to acquire established home services businesses across Canada — HVAC, Plumbing, Roofing, Hydrovac, and more. If you're thinking about selling, let's have a conversation.",
  openGraph: {
    title: "Levit8 Equity Inc — Acquiring Home Services Businesses",
    description:
      "If you've built a solid home services business and are thinking about what's next, we'd like to talk.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
