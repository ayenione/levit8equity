"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2.5rem",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: scrolled ? "rgba(11,22,35,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,146,42,0.15)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background-color 300ms ease, border-color 300ms ease",
      }}
    >
      {/* Wordmark */}
      <a
        href="#top"
        style={{
          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
          fontWeight: 800,
          fontSize: "1.05rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--white)",
          textDecoration: "none",
        }}
      >
        Levit<span style={{ color: "var(--gold)" }}>8</span> Equity
      </a>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        <a
          href="#contact"
          className="btn-cta-outline"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Get In Touch
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
