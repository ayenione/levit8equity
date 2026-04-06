"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Thinking about selling?",
  "You built something real.",
  "Let's talk.",
];

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((i) => i + 1), 60);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((i) => i - 1), 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return displayed;
}

export default function Hero() {
  const text = useTypewriter(PHRASES);

  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 2.5rem 80px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 60% 40%, rgba(201,146,42,0.07) 0%, transparent 60%), var(--navy)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,146,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", position: "relative" }}>
        <p className="section-label">Levit8 Equity Inc</p>

        {/* Typewriter headline */}
        <h1
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "0.1em",
            minHeight: "1.2em",
          }}
        >
          {text}
          <span className="typewriter-cursor" />
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "var(--text-muted)",
            maxWidth: "580px",
            lineHeight: 1.7,
            marginTop: "1.8rem",
            marginBottom: "2.8rem",
          }}
        >
          We acquire established home services businesses across Canada.
          If you've spent a decade building something solid and are thinking
          about what's next — we'd like to have a straightforward conversation.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#contact"
            className="btn-cta"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Start a Conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#what-we-look-for"
            className="btn-cta-outline"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            What We Look For
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "var(--text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "var(--gold)",
          }}
        />
        Scroll to explore
      </div>
    </section>
  );
}
