import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1454491149386721');fbq('track','PageView');`}
        </Script>
      </body>
    </html>
  );
}
